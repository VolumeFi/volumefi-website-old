import React, {useEffect, useState} from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'
import { navigate } from 'gatsby-link';

import imgMask3 from '@images/mask-3.png';
import imgChevronRight from '@images/chevron-right.png';

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

const BlogPage = ({ blok }) => {
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
      // console.log(parseInt(post.first_published_at.split("T")[0].replace(/-/g, '')));
    } else {
      post['ordering'] = parseInt(post.content.created_at.split(" ")[0].replace(/-/g, ''));
    }

    //console.log(post);
  }

  morePosts.sort(function(a, b) { return a.ordering - b.ordering });

  console.log(featuredPosts);

  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className='page-container page-blogs'>
        <div
          className='section section-black section-column page-blogs-top'
          style={{ 
            backgroundImage: `url(${imgMask3})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'contain'
          }}
        >
          <h1>Blog</h1>
        </div>
        <button className='page-blogs-latestbutton'>
          <span>The Latest</span>
          <img src={imgChevronRight} />
        </button>
        {featuredPosts.length > 0 && (
          <div className='section section-white section-column page-blogs-latest'>
            <img src={featuredPosts[0].content.image} className='page-blogs-latest-img' />
            <span className='page-blogs-latest-date'>
              {featuredPosts[0].published_at}
            </span>
            <h2 className='page-blogs-latest-title'>
              {featuredPosts[0].content.title}
            </h2>
            <p className='page-blogs-latest-intro'>{featuredPosts[0].content.intro}</p>
            {/* <div className='mt-5'>
              <a className='container__featured-section__title' href='#' onClick={(e) => {
                e.preventDefault()
                navigate(`/${featuredPosts[0].full_slug}`)
              }}>
                {featuredPosts[0].content.title}
              </a>
              <p className='container__featured-section__intro mt-3'>{featuredPosts[0].content.intro}</p>
            </div> */}
          </div>
        )}
      </div>
      {/* <div className='blog-container mt-5 mb-5'>
        <div className='container__featured-section'>
          <ul>
            {featuredPosts.map((post, index) => {
              if (index === 0) {
                return (
                  <li key={post.full_slug} className='top-post'>
                    <img src={post.content.image}></img>
                    <div className='mt-5'>
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
                )
              })}

          </div>
        </div>
      )}
      </div> */}
    </SbEditable>
  )
}
export default BlogPage
