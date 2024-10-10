const fs = require('fs')
const path = require('path')
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

const buildOutFolder = './out'
const mirrorFolderName = 'img-airtable'
const graphAssetUrlRegex =
  /https?:\/\/[^\"\'\s]+airtableusercontent.com[^\"\'\s]*/g

const mirrorFolderPath = `${buildOutFolder}/${mirrorFolderName}`
const filesToParse = ['html', 'js', 'json']

// utility function to recursively process files in a folder with a callback
const processFilesRecursively = (folder, processFile) => {
  fs.readdirSync(folder).forEach(fileOrDir => {
    const fullPath = path.join(folder, fileOrDir)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      processFilesRecursively(fullPath, processFile)
    } else if (stat.isFile()) {
      processFile(fullPath)
    }
  })
}

// returns array of urls matching graphAssetUrlRegex
const getAllAssetUrls = (folder = buildOutFolder) => {
  const assetUrls = new Set()

  processFilesRecursively(folder, filePath => {
    if (filesToParse.some(type => filePath.endsWith(type))) {
      let content = fs.readFileSync(filePath, 'utf8')
      const matchedUrls = content.match(graphAssetUrlRegex) || []
      matchedUrls.forEach(url => {
        assetUrls.add(url)
      })
      fs.writeFileSync(filePath, content)
    }
  })

  return Array.from(assetUrls)
}

const downloadAssetsAndAddFileExtensions = async (
  assetUrls,
  destination = mirrorFolderPath
) => {
  const srcChanges = []
  const mirrorFolderName = mirrorFolderPath.split('/').pop()

  for (const url of assetUrls) {
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => {
        controller.abort()
      }, 15000)

      const response = await fetch(url)

      clearTimeout(timeout)

      if (!response.ok) {
        console.error(
          `Failed to fetch ${url}: ${response.status} - ${response.statusText}`
        )
        continue
      }

      const buffer = await response.buffer()
      const filename = path.basename(new URL(url).pathname)
      const extension = await determineFileExtension(buffer)
      const newFilename = `${filename}.${extension}`
      const newFilepath = path.join(destination, newFilename)

      srcChanges.push({
        old: url,
        new: `/${mirrorFolderName}/${newFilename}`
      })

      fs.writeFileSync(newFilepath, buffer)
    } catch (error) {
      if (error.name === 'AbortError') {
        console.error(`Request for ${url} timed out`)
      } else {
        console.error(`Error fetching or saving ${url}:`, error.message)
      }
    }
  }

  return { srcChanges }
}

const determineFileExtension = async buffer => {
  const typeResult = await fileType.fileTypeFromBuffer(buffer)
  if (typeResult) {
    if (typeResult.ext === 'xml') return 'svg'
    return typeResult.ext
  }
  let extension = undefined
  const content = buffer.toString('utf8')
  extension =
    content.trim().startsWith('<svg') || content.trim().startsWith('<?xml')
      ? 'svg'
      : undefined

  if (extension) return extension
  throw new Error('Could not determine file extension')
}

const findAllAndReplace = (replacements, basePath = buildOutFolder) => {
  let count = 0
  processFilesRecursively(basePath, filePath => {
    let content = fs.readFileSync(filePath, 'utf8')
    let newContent = content

    replacements.forEach(({ old, new: newStr }) => {
      newContent = newContent.split(old).join(newStr)
    })

    if (content !== newContent) {
      count++
      fs.writeFileSync(filePath, newContent)
    }
  })
  return { count }
}

function clearOrCreateMirrorFolder(folderPath = mirrorFolderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true })
  }
  fs.mkdirSync(folderPath, { recursive: true })
}

let fileType = undefined // needs to be dynamically imported
;(async () => {
  try {
    console.log('😈 Beginning Asset Scrape AirTable 😈')

    fileType = await import('file-type')

    clearOrCreateMirrorFolder()

    const imageUrls = getAllAssetUrls()
    console.log(`Found ${imageUrls.length} asset urls in build folder`)

    const { srcChanges } = await downloadAssetsAndAddFileExtensions(imageUrls)
    console.log('Downloaded assets and added file extensions')

    await new Promise(resolve => setTimeout(resolve, 2000)) // Delay for file system sync
    const { count } = findAllAndReplace(srcChanges)
    console.log(`Replaced src strings in ${count} files`)
    console.log('All Done ✅')
  } catch (error) {
    console.error('An error occurred:', error)
  }
})()
