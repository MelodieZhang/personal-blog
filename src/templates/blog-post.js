import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ArrowLeft, ArrowRight } from "../components/arrows"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article className="prose">
        <header className="mb-10">
          <h2>{post.frontmatter.title}</h2>
          <small className="text-third">{post.frontmatter.date}</small>
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
      <ul className="list-none flex flex-wrap justify-between text-primary text-base">
        <li className="group rounded p-3 duration-300 hover:bg-hoverbg hover:bg-opacity-90 hover:shadow-sm">
          {previous && (
            <Link
              to={previous.fields.slug}
              rel="prev"
              className="flex items-center"
            >
              <ArrowLeft />
              <span className="mr-1">上一篇</span>
              <span className="font-medium">{previous.frontmatter.title}</span>
            </Link>
          )}
        </li>
        <li className="group rounded p-3 duration-300 hover:bg-hoverbg hover:bg-opacity-90 hover:shadow-sm">
          {next && (
            <Link
              to={next.fields.slug}
              rel="next"
              className="flex items-center"
            >
              <span className="mr-1">下一篇</span>
              <span className="font-medium">{next.frontmatter.title}</span>
              <ArrowRight />
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
