import React, { useMemo } from "react"
import SbEditable from "storyblok-react"
import {
  render,
  NODE_IMAGE,
  NODE_UL,
  NODE_LI,
} from "storyblok-rich-text-react-renderer"
import { navigate } from "gatsby-link"
import SEO from "../components/HeadSeo"
import { convertDateString } from "../utils/date"

const BlogPost = ({ blok }) => {

  const morePosts = useMemo(() => {
    if (!blok || !blok.allPosts) {
      return [];
    }

    const posts = blok.allPosts.filter(post => post.content.featured == false)
    
    posts.sort((a, b) => {
      const aTime = new Date(a.first_published_at);
      const bTime = new Date(b.first_published_at);

      return aTime.getTime() > bTime.getTime() ? -1 : 1;
    })

    return posts;

  }, [blok])
  
  return (
    <SbEditable content={blok} key={blok._uid}>
      <SEO
        description="Volume delivers software tools and user experiences that increase protocol token utility and community engagement, measured by protocol transaction volume growth"
        content={blok}
      />
      <div className="page-container page-blogs">
        <div className="section section-white section-column page-blogs-details">
          <img className="page-blogs-details-img" src={blok.image} />
          <h1 className="page-blogs-details-title">{blok.title}</h1>
          <p className="page-blogs-details-subtitle">{blok.intro}</p>
          <div className="page-blogs-details-intro">
            {render(blok.long_text, {
              nodeResolvers: {
                [NODE_IMAGE]: (children, props) => (
                  <img
                    {...props}
                    style={{ borderRadius: "0px", maxWidth: "100%" }}
                  />
                ),
                [NODE_UL]: (children, props) => (
                  <ul
                    {...props}
                    style={{
                      listStyleType: "square",
                      listStylePosition: "inside",
                      paddingBottom: 16,
                      paddingLeft: 16,
                    }}
                  >
                    {children}
                  </ul>
                ),
                [NODE_LI]: (children, props) => (
                  <li {...props} className="storyblok-bullet-li">
                    {children}
                  </li>
                ),
              },
              blokResolvers: {
                ["YouTube-blogpost"]: props => (
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src={
                        "https://www.youtube.com/embed/" +
                        props.YouTube_id.replace("https://youtu.be/", "")
                      }
                    ></iframe>
                  </div>
                ),
              },
            })}
          </div>

          <div
            className="page-blogs-list"
            style={{ paddingLeft: 0, pddingRight: 0 }}
          >
            <h1>Latest Articles</h1>
            <div className="blog-list">
              {morePosts.map((post, index) => (
                <div className="blog-list-item" key={`blog-item-${index}`}>
                  <div className="blog-list-item-left">
                    <img src={post.content.image} />
                  </div>
                  <div className="blog-list-item-right">
                    <span className="blog-list-item-date">
                      {convertDateString(post.first_published_at)}
                    </span>
                    <a
                      onClick={e => {
                        e.preventDefault()
                        navigate(`/${post.full_slug}`)
                      }}
                      className="blog-list-item-title"
                    >
                      {post.content.title}
                    </a>
                    <div className="blog-list-item-divider"></div>
                    <p className="blog-list-item-intro">{post.content.intro}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SbEditable>
  )
}
export default BlogPost
