import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import aboutStyle from "../css/about.module.css"

const AboutPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 320, height: 440) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            telegram
          }
        }
      }
    }
  `)
  const { author, siteTitle } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
        }}
      >
        <Img
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name + "'s profile image"}
          style={{
            minWidth: 50,
            margin: `1.9rem`,
          }}
        />
        <div
          style={{
            margin: `1.9rem`,
          }}
        >
          <h3 className={aboutStyle.header}>关于作者</h3>
          <p className={aboutStyle.content}>
            张梦晗, Melodie
            <br />
            现 Google 用户体验设计师
            <br />
            前知乎产品设计师
            <br />
            一直喜欢写字的普通人
          </p>
          <h3 className={aboutStyle.header} style={{ marginTop: `2.5rem` }}>
            在别处
          </h3>
          <p className={aboutStyle.content}>
            <a
              className={aboutStyle.link}
              href="https://www.instagram.com/menghan.xyz/"
            >
              menghan.xyz
            </a>
            &nbsp;&nbsp;不定期更新的插画
            <br />
            <a className={aboutStyle.link} href="http://www.menghan.design">
              Menghan.design
            </a>
            &nbsp;&nbsp;设计作品集
            <br />
            <a
              className={aboutStyle.link}
              href="https://mydesignnotebook.tumblr.com/"
            >
              Design Notebook
            </a>
            &nbsp;&nbsp;产品设计文章收集册
          </p>
          <h3 className={aboutStyle.header} style={{ marginTop: `2.5rem` }}>
            联系我
          </h3>
          <p className={aboutStyle.content}>
            <a
              className={aboutStyle.link}
              href="https://telegram.me/menghanzhang"
              title="telegram"
            >
              Telegram
            </a>
            <div className={aboutStyle.content}>
              zhangmenghan728@gmail.com
            </div>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
