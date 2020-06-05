/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function PostsOfYear(props) {
  const year = props.year
  const postsOfYear = props.postsOfYear
  return (
    <div>
      <h3
        sx={{
          fontSize: `5`,
          variant: `text.heading`,
        }}
      >
        {year}
      </h3>
      <ul
        sx={{
          listStyle: `none`,
          margin: `0`,
        }}
      >
        {postsOfYear.map(post => (
          <li key={post.fields.slug}>
            <div>
              <Link
                sx={{
                  boxShadow: `none`,
                  fontSize: `2`,
                  color: `black`,
                  textDecoration: `none`,
                }}
                to={post.fields.slug}
              >
                {post.frontmatter.title}
              </Link>
              <time
                sx={{
                  variant: `text.small`,
                  fontSize: `1`,
                  float: `right`,
                }}
                dateTime={post.frontmatter.data}
              >
                {post.frontmatter.date.slice(5)}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ArchiveList(props) {
  const groupedPosts = props.groupedPosts
  // put most recent year's
  const years = Object.keys(groupedPosts).sort().reverse()
  return (
    <ul
      sx={{
        listStyle: `none`,
        margin: `0`,
      }}
    >
      {years.map(year => {
        return (
          <li
            sx={{
              marginBottom: `8`,
            }}
            key={year}
          >
            <PostsOfYear year={year} postsOfYear={groupedPosts[year]} />
          </li>
        )
      })}
    </ul>
  )
}

// grouped result is a big JSON with years being keys, it's not an array
const groupPostsByYear = posts =>
  posts.reduce((grouped, post) => {
    const key = post.frontmatter.date.slice(0, 4)
    grouped[key] = grouped[key] || []
    grouped[key].push(post)
    return grouped
  }, {})

const ArchivePage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location}>
      <SEO title="Archive" />
      <ArchiveList groupedPosts={groupPostsByYear(posts)} />
    </Layout>
  )
}

export default ArchivePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
        }
      }
    }
  }
`
