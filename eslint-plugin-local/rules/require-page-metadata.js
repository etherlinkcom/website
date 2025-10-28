/**
 * ESLint rule:
 * - Requires every Next.js `app/.../page.tsx` file to export `metadata` or `generateMetadata`.
 * - Skips pages that import `redirect()` from 'next/navigation'.
 * - If static `metadata` exists, verifies it includes:
 *     - title
 *     - description
 *     - alternates.canonical
 */

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Require metadata or generateMetadata in pages; ensure title, description, and canonical exist; skip redirect-only pages.'
    },
    schema: [],
    messages: {
      missingExport:
        'Page is missing `metadata` or `generateMetadata` export (unless it only redirects).',
      missingField:
        'metadata must include `title`, `description`, and `alternates.canonical`.'
    }
  },

  create(ctx) {
    const filename = ctx.getFilename()
    const isPage =
      /[/\\]app[/\\](?!api[/\\]).*[/\\]page\.(ts|tsx|js|jsx)$/.test(filename)
    if (!isPage) return {}

    let hasMeta = false
    let usesRedirect = false
    let metaNode = null // store the metadata AST node

    return {
      ImportDeclaration(node) {
        // Detect import { redirect } from 'next/navigation'
        if (
          node.source?.value === 'next/navigation' &&
          node.specifiers?.some(
            s => s.imported?.name === 'redirect' || s.local?.name === 'redirect'
          )
        ) {
          usesRedirect = true
        }
      },

      ExportNamedDeclaration(node) {
        if (node.declaration?.type === 'VariableDeclaration') {
          for (const decl of node.declaration.declarations || []) {
            if (decl.id?.name === 'metadata') {
              hasMeta = true
              metaNode = decl.init
            }
          }
        }

        if (
          node.declaration?.type === 'FunctionDeclaration' &&
          node.declaration.id?.name === 'generateMetadata'
        ) {
          hasMeta = true
        }

        if (
          node.specifiers?.some(s =>
            ['metadata', 'generateMetadata'].includes(s.exported?.name)
          )
        ) {
          hasMeta = true
        }
      },

      'Program:exit'() {
        if (usesRedirect) return

        if (!hasMeta) {
          ctx.report({
            loc: { line: 1, column: 0 },
            messageId: 'missingExport'
          })
          return
        }

        if (metaNode && metaNode.type === 'ObjectExpression') {
          const props = new Map()
          for (const prop of metaNode.properties) {
            if (prop.key?.name) {
              props.set(prop.key.name, prop)
            }
          }

          const hasTitle = props.has('title')
          const hasDescription = props.has('description')
          const alternates = props.get('alternates')
          let hasCanonical = false

          if (alternates && alternates.value?.type === 'ObjectExpression') {
            for (const sub of alternates.value.properties) {
              if (sub.key?.name === 'canonical') {
                hasCanonical = true
              }
            }
          }

          if (!(hasTitle && hasDescription && hasCanonical)) {
            ctx.report({
              node: metaNode,
              messageId: 'missingField'
            })
          }
        }
      }
    }
  }
}
