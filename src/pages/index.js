import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function PostItem(props) {
  const post = props.post
  return (
    <article
      key={post.fields.slug}
      className="mb-10 sm:mb-10 group rounded-lg -m-2 p-2 sm:-m-4 sm:p-4 duration-300 hover:bg-hoverbg hover:bg-opacity-90"
    >
      <Link to={post.fields.slug}>
        <h3 className="text-index-h">{post.frontmatter.title}</h3>
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
          excerpt(truncate: true, pruneLength: 120)
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
