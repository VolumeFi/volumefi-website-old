
import React from "react"

import PortfolioManagement from '../../components/features/PortfolioManagement'
import Layout from "../../components/Layout"
import SEO from "../../components/HeadSeo"

export default class extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Volume Finance" description="Volume delivers software tools and user experiences that increase protocol token utility and community engagement, measured by protocol transaction volume growth" image={null}/>
        <PortfolioManagement />
      </Layout>
    )
  }
}
