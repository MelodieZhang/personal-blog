import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "../components/emoji"
import NewsletterSub from "../components/newsletter-sub"

const NewsletterPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Newsletter" description="Menghan's newsletter" />
      <h3 className="mb-8">
        <Emoji symbol="📮" label="postbox" /> Mélodie
      </h3>
      <p>
        Mélodie
        是每两周更新一次的电子简报，分享我认为值得推荐的七个链接，主题不限，形式不定，可能是文章/书/视频/音乐/产品等任何有趣的事物。欢迎订阅
        :)
      </p>
      <p className="my-4">
        <a
          href="https://menghan.substack.com/archive"
          rel="noreferrer"
          target="_blank"
          className="text-primary underline"
        >
          浏览往期归档 →
        </a>
      </p>
      <NewsletterSub />
    </Layout>
  )
}

export default NewsletterPage
