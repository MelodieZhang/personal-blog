import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

function PostItem(props) {
  const post = props.post
  return (
    <article key={post.fields.slug} style={{ marginBottom: rhythm(64 / 28) }}>
      <Link
        style={{
          boxShadow: `none`,
          color: `black`,
          textDecoration: `none`,
        }}
        to={post.fields.slug}
      >
        <h3 style={{ fontSize: `1.25rem` }}>{post.frontmatter.title}</h3>
        <p
          style={{
            marginTop: rhythm(20 / 28),
            marginBottom: rhythm(16 / 28),
          }}
          dangerouslySetInnerHTML={{
            __html: post.excerpt,
          }}
        />
      </Link>
      <small
        style={{
          color: `rgba(0, 0, 0, 0.5)`,
        }}
      >
        {post.frontmatter.date}
      </small>
    </article>
  )
}

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        return <PostItem post={node} />
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            status
          }
        }
      }
    }
  }
`
