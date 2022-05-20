import React, {useEffect, useState} from 'react'
import SbEditable from 'storyblok-react'
import { navigate } from 'gatsby-link';

import imgMask3 from '@images/mask-3.png';
import imgChevronRight from '@images/chevron-right.png';
import imgLeftArrow from '@images/left-arrow.png';

import { convertDateString } from '../utils/date';

const BlogPage = ({ blok }) => {

  const [view, setView] = useState('main');

  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [morePosts, setMorePost] = useState([]);

  useEffect(() => {
    if (!blok || !blok.posts) {
      return;
    }

    const posts = blok.posts;

    // Sort by first publish date;
    posts.sort((a, b) => {
      const aTime = new Date(a.first_published_at);
      const bTime = new Date(b.first_published_at);

      return aTime.getTime() > bTime.getTime() ? -1 : 1;
    })

    // console.log(posts);

    const featuredPosts = posts.filter(post => post.content && post.content.featured && post.content.featured == true)
    const morePosts = posts.filter(post => post.content && post.content.featured != null)

    setMorePost(morePosts);

    if (featuredPosts.length > 0) {
      setFeaturedPosts(featuredPosts);
    } else {
      setFeaturedPosts(morePosts);
    }

  }, [blok]);
  
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
                  {convertDateString(featuredPosts[0].first_published_at)}
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
                {morePosts.map((post, index) => (
                  <div className='blog-list-item' key={`blog-item-${index}`}>
                    <div className='blog-list-item-left'>
                      <img src={post.content.image} />
                    </div>
                    <div className='blog-list-item-right'>
                      <span className='blog-list-item-date'>{convertDateString(post.first_published_at)}</span>
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
                      <p className='blog-list-item-intro'>{post.content.intro}</p>
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
