module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Require metadata or generateMetadata export in Next.js App Router pages'
    },
    schema: [],
    messages: {
      missing: 'Page is missing `metadata` or `generateMetadata` export.'
    }
  },
  create(ctx) {
    const filename = ctx.getFilename()
    const isPage =
      /[/\\]app[/\\](?!api[/\\]).*[/\\]page\.(ts|tsx|js|jsx)$/.test(filename)
    if (!isPage) return {}

    let hasMeta = false

    return {
      ExportNamedDeclaration(node) {
        // export const metadata = ...
        if (node.declaration?.type === 'VariableDeclaration') {
          for (const decl of node.declaration.declarations || []) {
            if (decl.id?.name === 'metadata') hasMeta = true
          }
        }

        // export async function generateMetadata() { ... }
        if (
          node.declaration?.type === 'FunctionDeclaration' &&
          node.declaration.id?.name === 'generateMetadata'
        ) {
          hasMeta = true
        }

        // export { metadata } from './x'
        if (node.specifiers?.length) {
          if (
            node.specifiers.some(s =>
              ['metadata', 'generateMetadata'].includes(s.exported?.name)
            )
          ) {
            hasMeta = true
          }
        }
      },
      'Program:exit'() {
        if (!hasMeta) {
          ctx.report({
            loc: { line: 1, column: 0 },
            messageId: 'missing'
          })
        }
      }
    }
  }
}
