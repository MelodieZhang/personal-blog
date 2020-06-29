/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleSubscribe from "../components/subscribe/simple"

const NewsletterPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Newsletter" description="Menghan's newsletter" />
      <SimpleSubscribe />
    </Layout>
  )
}

export default NewsletterPage
