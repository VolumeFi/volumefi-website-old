import React from "react"
import CCC from "../components/CCC"
import Layout from "../components/Layout"
import SEO from "../components/HeadSeo"

const CCCPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Volume Finance"
      description="Volume delivers software tools and user experiences that increase protocol token utility and community engagement, measured by protocol transaction volume growth"
    />
    <CCC path="/cross-chain-coalition" />
  </Layout>
)
export default CCCPage
