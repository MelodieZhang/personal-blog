import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function PostItem(props) {
  const post = props.post
  return (
    <article key={post.fields.slug} className="mb-14">
      <Link to={post.fields.slug}>
        <h3 className="text-xl">{post.frontmatter.title}</h3>
        <p
          className="my-4"
          dangerouslySetInnerHTML={{
            __html: post.excerpt,
          }}
        />
      </Link>
      <small className="text-xs">{post.frontmatter.date}</small>
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
