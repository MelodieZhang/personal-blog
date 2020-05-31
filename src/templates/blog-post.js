import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import blogPostStyle from "../css/blog-post.module.css"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article>
        <header style={{ marginTop: rhythm(1.5), marginBottom: rhythm(1) }}>
          <h2 className={blogPostStyle.title}>{post.frontmatter.title}</h2>
          <small className={blogPostStyle.date} style={{ ...scale(-1 / 5) }}>
            {post.frontmatter.date}
          </small>
        </header>
        <section
          className={blogPostStyle.body}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <footer></footer>
      </article>

      <nav
        style={{
          marginTop: `4rem`,
        }}
      >
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link
                style={{
                  textDecoration: `none`,
                  color: `black`,
                }}
                to={previous.fields.slug}
                rel="prev"
              >
                <span style={{ color: `rgba(0, 0, 0, 0.7)` }}>◂ </span>
                <span>上一篇</span>{" "}
                <span style={{ fontWeight: `500` }}>
                  {previous.frontmatter.title}
                </span>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                style={{
                  textDecoration: `none`,
                  color: `black`,
                }}
                to={next.fields.slug}
                rel="next"
              >
                <span>下一篇</span>{" "}
                <span style={{ fontWeight: `500` }}>
                  {next.frontmatter.title}
                </span>
                <span style={{ color: `rgba(0, 0, 0, 0.7)` }}> ▸</span>
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`
