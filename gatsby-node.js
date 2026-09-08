const path = require(`path`)

/**
 * Make sure these frontmatter fields always exist, even before any .mdx
 * file uses them — otherwise the query below fails on an empty schema.
 */
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      title: String
      slug: String
      breadcrumb: String
    }
  `)
}

/**
 * Every .mdx file with a \`slug\` in its frontmatter automatically becomes a
 * page, rendered through src/templates/mdxPage.tsx. To add a new page, drop a
 * .mdx file in src/data/ with frontmatter like:
 *
 *   ---
 *   title: A Portal
 *   slug: /portal
 *   ---
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const template = path.resolve(`./src/templates/mdxPage.tsx`)

  const result = await graphql(`
    query MdxPagesToCreate {
      allMdx(filter: { frontmatter: { slug: { ne: null } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while querying .mdx files`, result.errors)
    return
  }

  result.data.allMdx.nodes.forEach((node) => {
    const slug = node.frontmatter.slug
    createPage({
      path: slug.startsWith(`/`) ? slug : `/${slug}`,
      // gatsby-plugin-mdx v5 needs the .mdx file handed to the template
      // this way; the compiled body then arrives as the template's children.
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}
