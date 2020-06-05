/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function PostItem(props) {
  const post = props.post
  return (
    <article key={post.fields.slug} sx={{ marginBottom: `9` }}>
      <Link
        sx={{
          boxShadow: `none`,
          textDecoration: `none`,
        }}
        to={post.fields.slug}
      >
        <h3
          sx={{
            variant: `text.heading`,
            fontSize: `4`,
          }}
        >
          {post.frontmatter.title}
        </h3>
        <p
          sx={{
            variant: `text.body`,
            marginTop: `2`,
            marginBottom: `2`,
          }}
          dangerouslySetInnerHTML={{
            __html: post.excerpt,
          }}
        />
      </Link>
      <small
        sx={{
          variant: `text.small`,
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
