/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

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

  const aboutHeading = {
    variant: `text.heading`,
    fontSize: `3`,
    marginBottom: `4`,
  }

  const { author, siteTitle } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="About"
        description="Personal information about Menghan Zhang"
      />
      <div
        sx={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
        }}
      >
        <div>
          <div
            sx={{
              marginBottom: `6`,
            }}
          >
            <h3 sx={{ ...aboutHeading }}>About</h3>
            <p sx={{ variant: `text.body` }}>
              张梦晗, Melodie
              <br />
              Google 用户体验设计师
              <br />
              前知乎产品设计师
              <br />
              喜欢写字的普通人
            </p>
          </div>
          <div
            sx={{
              marginBottom: `6`,
            }}
          >
            <h3 sx={{ ...aboutHeading }}>Elsewhere</h3>
            <p sx={{ variant: `text.body` }}>
              <a href="https://us10.campaign-archive.com/home/?u=4fed45ee5092478a3ecdc063a&id=391be5d253" rel="noreferrer" target="_blank">Mélodie Newsletter</a>
              <div>隔周更新，包含七个链接</div>
              <a href="https://www.etsy.com/shop/DreamZakka" rel="noreferrer" target="_blank">Dream Zakka</a>
              <div>贩卖手绘和设计的 Etsy 小店</div>
              <a href="https://www.instagram.com/menghan.xyz/" rel="noreferrer" target="_blank">menghan.xyz</a>
              <div>不定期更新的插画</div>
              <a href="https://mydesignnotebook.tumblr.com/" rel="noreferrer" target="_blank">Design Notebook</a>
              <div>产品设计文章收集册</div>
            </p>
          </div>
          <div
            sx={{
              marginBottom: `6`,
            }}
          >
            <h3 sx={{ ...aboutHeading }}>Don't be strangers</h3>
            <p sx={{ variant: `text.body` }}>
              <div>
                <span sx={{ fontWeight: `bold` }}>Telegram&nbsp;&nbsp;</span>
                <a href="https://telegram.me/menghanzhang" title="telegram" rel="noreferrer" target="_blank">
                  @menghanzhang
                </a>
              </div>
              <div>
                <span sx={{ fontWeight: `bold` }}>Email</span>
                &nbsp;&nbsp;zhangmenghan728@gmail.com
              </div>
              <br />
              <div>
                📫 通过{" "}
                <a href="/rss.xml" rel="noreferrer" target="_blank">
                  RSS
                </a>{" "}
                订阅
              </div>
              <div>
                🍦 {" "}
                <a href="https://www.buymeacoffee.com/menghan" title="buymeacoffee" rel="noreferrer" target="_blank">
                  请我吃冰淇淋
                </a>{" "}
                :)
              </div>
            </p>
          </div>
        </div>
        <Img
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name + "'s profile image"}
          style={{
            minWidth: 50,
            // margin: `1.9rem`,
          }}
        />
      </div>
    </Layout>
  )
}

export default AboutPage
