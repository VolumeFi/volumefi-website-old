
import React from "react"
import Page from '../components/Page'
import AboutUsPage from '../components/AboutUsPage'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import StoryblokService from '../utils/storyblok-service'
import SEO from "../components/HeadSeo"

export default class extends React.Component {
  constructor(props) {
    super(props);
    
    let content =  this.props.data.story ? JSON.parse(this.props.data.story.content) : {}

    this.state = {
      story: { content }
    };
  }

//   async getInitialStory() {
//     let { data: { story } } = await StoryblokService.get(`cdn/stories/${this.props.data.story.full_slug}`, {
//         "resolve_relations": "posts-list.posts",
//         "version": "published"
//       })
//     return story
//   }

//   async componentDidMount() {
//     let story = await this.getInitialStory()
//     if(story.content) {
//       setTimeout(() => this.setState({ story }), 200)
//     }
//     setTimeout(() => StoryblokService.initEditor(this), 200)
//   }

  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title={this.state.story ? this.state.story.content.title : "Sommelier"} description="Sommelier is the new Coprocessor for the Ethereum VM" image={this.state.story ? this.state.story.content.image : null}/>
        <Router>
          {this.state.story && <AboutUsPage blok={this.state.story.content} path='/about-us' />}
        </Router>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    story: storyblokEntry(full_slug: { eq: "about-us" }) {
      name
      content
      full_slug
      uuid
    }
  }
`

