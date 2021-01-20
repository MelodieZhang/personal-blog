import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function PostItem(props) {
  const post = props.post
  return (
    <article
      key={post.fields.slug}
      className="mb-14 group rounded-lg p-4 duration-300 hover:bg-hoverbg hover:bg-opacity-90"
    >
      <Link to={post.fields.slug}>
        <h3>{post.frontmatter.title}</h3>
        <p
          className="mt-4 mb-2"
          dangerouslySetInnerHTML={{
            __html: post.excerpt,
          }}
        />
        <small className="text-xs text-third">{post.frontmatter.date}</small>
      </Link>
    </article>
  )
}

const BlogIndex = ({ data, location }) => {
  const posts = data.allMdx.edges

  return (
    <Layout location={location}>
      <SEO title="Index" description="Index page of the blog" />
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
