
import React from "react"
import Careers from '../components/Careers'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import SEO from "../components/HeadSeo"

export default class extends React.Component {
  constructor(props) {
    super(props);
    
    let content =  this.props.data.story ? JSON.parse(this.props.data.story.content) : {}

    this.state = {
      story: { content }
    };
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title={this.state.story ? this.state.story.content.title : "Volume Finance"} description="Volume delivers software tools and user experiences that increase protocol token utility and community engagement, measured by protocol transaction volume growth" image={this.state.story ? this.state.story.content.image : null}/>
        <Router>
          {this.state.story && <Careers blok={this.state.story.content} path='/careers' />}
        </Router>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    story: storyblokEntry(full_slug: { eq: "careers" }) {
      name
      content
      full_slug
      uuid
    }
  }
`

