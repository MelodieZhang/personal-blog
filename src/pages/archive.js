import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function PostsOfYear(props) {
  const year = props.year
  const postsOfYear = props.postsOfYear
  return (
    <div>
      <h3 className="mb-6">{year}</h3>
      <ul>
        {postsOfYear.map(post => (
          <li key={post.fields.slug} className="mb-4">
            <div>
              <Link className="text-secondary" to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <time
                className="text-sm text-third float-right"
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
    <ul>
      {years.map(year => {
        return (
          <li className="mb-12" key={year}>
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
  const posts = data.allMdx.nodes

  return (
    <Layout location={location}>
      <SEO title="Archive" description="All posts' archive list" />
      <ArchiveList groupedPosts={groupPostsByYear(posts)} />
    </Layout>
  )
}

export default ArchivePage

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
