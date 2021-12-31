import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Emoji from "../components/emoji"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
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
      <Seo
        title="About"
        description="Personal information about Menghan Zhang"
      />
      <div className="flex flex-wrap justify-between items-start">
        <div>
          <div className="mb-10">
            <h3 className="mb-4">About</h3>
            <p className="leading-loose">
              张梦晗, Melodie
              <br />
              Google 用户体验设计师
              <br />
              前知乎产品设计师
              <br />
              喜欢写字的普通人
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4">Elsewhere</h3>
            <p className="leading-loose">
              <div className="mb-2">
                <a
                  href="https://menghan.substack.com/archive"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary underline"
                >
                  Mélodie Newsletter
                </a>
                <div>暂停更新</div>
              </div>

              <div className="mb-2">
                <a
                  href="https://www.instagram.com/menghan.xyz/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary underline"
                >
                  menghan.xyz
                </a>
                <div>不定期更新的插画</div>
              </div>

              <div className="mb-2">
                <a
                  href="https://mydesignnotebook.tumblr.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary underline"
                >
                  Design Notebook
                </a>
                <div>产品设计文章收集册</div>
              </div>
            </p>
          </div>
          <div>
            <h3 className="mb-4">Don't be strangers</h3>
            <p className="leading-loose">
              <div>
                <span className="font-medium">Telegram&nbsp;&nbsp;</span>
                <a
                  href="https://telegram.me/menghanzhang"
                  title="telegram"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary underline"
                >
                  @menghanzhang
                </a>
              </div>
              <div>
                <span className="font-medium">Email</span>
                &nbsp;&nbsp;zhangmenghan728@gmail.com
              </div>
              <br />
              <div>
                <Emoji symbol="📫" label="mailbox" /> 通过{" "}
                <a
                  href="/rss.xml"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary underline"
                >
                  RSS
                </a>{" "}
                订阅
              </div>
              <div>
                <Emoji symbol="🍦" label="ice cream" />{" "}
                <a
                  href="https://www.buymeacoffee.com/menghan"
                  title="buymeacoffee"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary underline"
                >
                  请我吃冰淇淋
                </a>{" "}
                :)
              </div>
            </p>
          </div>
        </div>
        <StaticImage
          src="../images/profile_about.jpg"
          alt={author.name + "'s profile image"}
          width="320"
          height="440"
        />
      </div>
    </Layout>
  )
}

export default AboutPage
