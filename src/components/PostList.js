import React, {useEffect, useState} from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'
import { navigate } from 'gatsby-link';

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

const PostsList = ({ blok }) => {
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    windowGlobal.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const featuredPosts = blok.posts.filter(post => post.content && post.content.featured && post.content.featured == true)
  const morePosts = blok.posts.filter(post => post.content && post.content.featured != null && post.content.featured == false)
  const moreWidth = windowDimensions.width * morePosts.length


  for (const post of morePosts)
  {
    if(post.content.created_at == "") {
      post['ordering'] = parseInt(post.first_published_at.split("T")[0].replace(/-/g, ''));
      console.log(parseInt(post.first_published_at.split("T")[0].replace(/-/g, '')));
    } else {
      post['ordering'] = parseInt(post.content.created_at.split(" ")[0].replace(/-/g, ''));
    }

    //console.log(post);
  }

  morePosts.sort(function(a, b) { return a.ordering - b.ordering });

  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className='blog-container mt-5 mb-5'>
        <div className='container__featured-section'>
          <ul>
            {featuredPosts.map((post, index) => {
              if (index === 0) {
                return (
                  <li key={post.full_slug} className='top-post'>
                    <img src={post.content.image}></img>
                    <div className='mt-5'>
                      {/* <a className='container__featured-section__title' href={`/${post.full_slug}`}> */}
                      <a className='container__featured-section__title' href='#' onClick={(e) => {
                        e.preventDefault()
                        navigate(`/${post.full_slug}`)
                      }}>
                        {post.content.title}
                      </a>
                      <p className='container__featured-section__intro mt-3'>{post.content.intro}</p>
                    </div>
                  </li>
                )
              } else {
                return (
                  <li key={post.full_slug} className='featured-post'>
                    <div className='featured-post__content'>
                      <img src={post.content.image}></img>
                      <div className='featured-post__text'>
                        <a className='container__featured-section__title' href='#' onClick={(e) => {
                          e.preventDefault()
                          navigate(`/${post.full_slug}`)
                        }}>
                          {post.content.title}
                        </a>
                        <p className='container__featured-section__intro mt-3'>{post.content.intro}</p>
                      </div>
                    </div>
                    {index < featuredPosts.length-1 && (
                      <div className='bottom-border-line'></div>
                    )}
                  </li>
                )
              }
            })}
          </ul>
        </div>
        {(morePosts.length > 0) && (
        <div className='container__more-section'>
          <p>Latest Articles</p>
          <div className='container__more-section__content row'>

              {morePosts.reverse().map((post, index) => {
                return (
                  <div style={{ width: '100%'}}>
                    <a className='container__more-section__content-row' href='#' onClick={(e) => {
                        e.preventDefault()
                        navigate(`/${post.full_slug}`)
                    }}>
                      <img src={post.content.image}></img>
                      <div className='mt-2 content'>
                        <div className='title'>{post.content.title}</div>
                        <div className='intro'>{post.content.intro}</div>
                      </div>
                    </a>
                  </div>
                  // <div className='col-12' style={{ border:  '0px', padding: '0px', margin: '0px'}}>
                  // <ul style={{width: '100%', border:  '0px', padding: '0px', margin: '0px'}}>
                  // <li key={post.name} style={{width:  '100%', border:  '0px', padding: '0px', margin: '0px'}}>
                  //   <div className='more-li__content'>
                  //     <a className='container__more-section__title' href='#' onClick={(e) => {
                  //       e.preventDefault()
                  //       navigate(`/${post.full_slug}`)
                  //     }}>
                  //       <img src={post.content.image}></img>
                  //       <div className='mt-2'>
                  //         {post.content.title}
                  //       </div>
                  //       <div className='mt-2'>
                  //         {post.content.intro}
                  //       </div>
                  //     </a>
                  //   </div>
                  // </li>
                  // </ul>
                  // </div>
                )
              })}

          </div>
        </div>
      )}
      </div>
    </SbEditable>
  )
}
export default PostsList
