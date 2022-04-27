import React, {useEffect, useState} from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'
import { navigate } from 'gatsby-link';

import imgMask3 from '@images/mask-3.png';
import imgChevronRight from '@images/chevron-right.png';
import imgLeftArrow from '@images/left-arrow.png';

import { convertDateString } from '../utils/date';
import { truncate } from '../utils/string';

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

const BlogPage = ({ blok }) => {

  const [view, setView] = useState('main');

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
  // const morePosts = blok.posts.filter(post => post.content && post.content.featured != null && post.content.featured == false)
  const morePosts = blok.posts.filter(post => post.content && post.content.featured != null)
  const moreWidth = windowDimensions.width * morePosts.length
console.log("*********");
console.log(featuredPosts);
  console.log("*********");
  console.log(morePosts);
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

  // console.log('blok posts', blok.posts);
  // console.log('featured posts', featuredPosts);
  // console.log('more posts', morePosts);

  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className='page-container page-blogs'>
        {view === 'main' && (
          <>
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
            <button
              className='page-blogs-latestbutton'
              onClick={(e) => {
                setView('list');
              }}
            >
              <span>The Latest</span>
              <img src={imgChevronRight} />
            </button>
            {featuredPosts.length > 0 && (
              <div className='section section-white section-column page-blogs-latest'>
                <img src={featuredPosts[0].content.image} className='page-blogs-latest-img' />
                <span className='page-blogs-latest-date'>
                  {convertDateString(featuredPosts[0].published_at)}
                </span>
                <a 
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(`/${featuredPosts[0].full_slug}`)
                  }}
                  className='page-blogs-latest-title'
                >
                  {featuredPosts[0].content.title}
                </a>
                <p className='page-blogs-latest-intro'>{featuredPosts[0].content.intro}</p>
              </div>
            )}
          </>
        )}
        {view === 'list' && (
          <>
            <div className='section section-white section-column page-blogs-list'>
              <button
                className='page-blogs-list-back'
                onClick={(e) => {
                  setView('main');
                }}
              >
                <img src={imgLeftArrow} /><span>Blog</span>
              </button>
              <h1>The Latest</h1>
              <div className='blog-list'>
                {morePosts.reverse().map((post, index) => (
                  <div className='blog-list-item' key={`blog-item-${index}`}>
                    <div className='blog-list-item-left'>
                      <img src={post.content.image} />
                    </div>
                    <div className='blog-list-item-right'>
                      <span className='blog-list-item-date'>{convertDateString(post.published_at)}</span>
                      <a
                        onClick={(e) => {
                          e.preventDefault()
                          navigate(`/${post.full_slug}`)
                        }}
                        className='blog-list-item-title'
                      >
                        {post.content.title}
                      </a>
                      <div className='blog-list-item-divider'></div>
                      <p className='blog-list-item-intro'>{truncate(post.content.intro, 161)}</p>
                    </div>
                </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </SbEditable>
  )
}
export default BlogPage
