/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, lang, meta }) => {
  const { site } = useStaticQuery(query)

  const {
    siteMetadata: {
      siteUrl,
      defaultTitle,
      image,
      defaultDesc,
      social: { twitter },
    },
  } = site

  const seo = {
    title: title || defaultTitle,
    titleTemplate: `%s | ${defaultTitle}`,
    desc: description || defaultDesc,
    img: `${siteUrl}${image}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={seo.titleTemplate}
      meta={[
        {
          name: `description`,
          content: seo.desc,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.desc,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: seo.img,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: twitter,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.desc,
        },
        {
          name: `twitter:image`,
          content: seo.img,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  title: `Menghan Zhang`,
  description: ``,
  lang: `zh-Hans`,
  meta: [],
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        defaultTitle: title
        image
        defaultDesc: description
        social {
          twitter
        }
      }
    }
  }
`
