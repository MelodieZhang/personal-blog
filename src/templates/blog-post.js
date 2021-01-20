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
      <article className="prose">
        <header sx={{ marginBottom: `5` }}>
          <h2>{post.frontmatter.title}</h2>
          <small sx={{ variant: `text.small` }}>{post.frontmatter.date}</small>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
        <footer></footer>
      </article>
      <BottomNav previous={previous} next={next} />
    </Layout>
  )
}

const BottomNav = ({ previous, next }) => {
  return (
    <nav className="my-14">
      <ul className="list-none flex justify-between">
        <li className="group rounded p-2 duration-300 hover:bg-hoverbg hover:bg-opacity-50 hover:shadow-sm">
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
        <li className="group rounded p-2 duration-300 hover:bg-hoverbg hover:bg-opacity-90 hover:shadow-sm">
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
              <span sx={{ fontWeight: `bold` }}>{next.frontmatter.title}</span>
              <span sx={{ color: `body` }}> ▸</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
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
