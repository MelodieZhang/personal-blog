/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleSubscribe from "../components/subscribe/simple"

const NewsletterPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Newsletter" description="Menghan's newsletter" />
      <h3
        sx={{
          variant: `text.heading`,
          fontSize: `3`,
          marginBottom: `4`,
        }}
      >
        📮 Mélodie
      </h3>
      <p sx={{ variant: `text.body` }}>
        Mélodie
        是每两周更新一次的电子简报，分享我认为值得推荐的七个链接，主题不限，形式不定，可能是文章/书/视频/音乐/产品等任何有趣的事物。欢迎订阅
        :)
      </p>
      <SimpleSubscribe />
      <p sx={{ variant: `text.body` }}>
        <a
          href="https://us10.campaign-archive.com/home/?u=4fed45ee5092478a3ecdc063a&id=391be5d253"
          rel="noreferrer"
          target="_blank"
        >
          浏览往期归档 →
        </a>
      </p>
    </Layout>
  )
}

export default NewsletterPage
