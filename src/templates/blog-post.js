/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article>
        <header sx={{ marginBottom: `5` }}>
          <h2
            sx={{
              variant: `text.heading`,
              fontSize: `4`,
            }}
          >
            {post.frontmatter.title}
          </h2>
          <small sx={{ variant: `text.small` }}>{post.frontmatter.date}</small>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
        <footer></footer>
      </article>

      <nav
        sx={{
          marginTop: `8`,
        }}
      >
        <ul
          sx={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            margin: `0 0 0 0`,
          }}
        >
          <li>
            {previous && (
              <Link
                sx={{
                  textDecoration: `none`,
                  color: `black`,
                }}
                to={previous.fields.slug}
                rel="prev"
              >
                <span sx={{ color: `body` }}>◂ </span>
                <span>上一篇</span>{" "}
                <span sx={{ fontWeight: `bold` }}>
                  {previous.frontmatter.title}
                </span>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                sx={{
                  textDecoration: `none`,
                  color: `black`,
                }}
                to={next.fields.slug}
                rel="next"
              >
                <span>下一篇</span>{" "}
                <span sx={{ fontWeight: `bold` }}>
                  {next.frontmatter.title}
                </span>
                <span sx={{ color: `body` }}> ▸</span>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`
