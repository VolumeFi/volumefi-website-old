import React, {useEffect, useState} from 'react'
import SbEditable from "storyblok-react"
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer"
import {isMobileOnly} from 'react-device-detect'
import { navigate } from 'gatsby-link';
import SEO from "../components/HeadSeo"
import { convertDateString } from '../utils/date';

const windowGlobal = typeof window !== 'undefined' && window

// setTimeout(function(){
//   var href = window.location.href;
//   const facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' + href;
//   const linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + href;
//   const twitter_url = 'http://twitter.com/share?url='+ href;
//
//   const fb = document.getElementById('facebook')
//
//
//   if (fb) {
//     document.getElementById('facebook').setAttribute("href", facebook_url);
//     document.getElementById('linkedin').setAttribute("href", linkedin_url);
//     document.getElementById('twitter').setAttribute("href", twitter_url);
//   }
// }, 1500);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

let morePosts = []

const BlogPost = ({ blok }) => {
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

  setTimeout(function(){
    var href = window.location.href;
    const facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' + href;
    const linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + href;
    const twitter_url = 'http://twitter.com/share?url='+ href;

    const fb = document.getElementById('facebook')


    if (fb) {
      document.getElementById('facebook').setAttribute("href", facebook_url);
      document.getElementById('linkedin').setAttribute("href", linkedin_url);
      document.getElementById('twitter').setAttribute("href", twitter_url);
    }
  }, 1500);


  morePosts = blok.allPosts ? blok.allPosts.filter(post => post.content.featured == false) : [];

  console.log('***beforesort**');
  console.log(morePosts);
  console.log('****beforesort*');



  for (const post of morePosts)
  {
    if(post.content.created_at == "") {
      post['ordering'] = parseInt(post.first_published_at.split("T")[0].replace(/-/g, ''));
      console.log(parseInt(post.first_published_at.split("T")[0].replace(/-/g, '')));
    } else {
      post['ordering'] = parseInt(post.content.created_at.split(" ")[0].replace(/-/g, ''));
    }
  }

  console.log('***morePosts**');
  morePosts.sort(function(a, b) { return a.ordering - b.ordering });
  //morePosts.sort(function(a, b){return parseInt(a.content.created_at.split(" ")[0].replace(/-/g, '')) - parseInt(b.content.created_at.split(" ")[0].replace(/-/g, ''))});

  console.log(morePosts);
console.log('***morePosts**');


  //console.log('***morePosts**');
  //console.log(morePosts);
  //console.log('****morePosts*');
  const text = 'Check this article out.';

  return (

    <SbEditable content={blok} key={blok._uid}>
    <SEO description="Volume delivers software tools and user experiences that increase protocol token utility and community engagement, measured by protocol transaction volume growth" content={blok} />
      <div className='page-container page-blogs'>
        <div className='section section-white section-column page-blogs-latest'>
          {/* <img src={featuredPosts[0].content.image}  />
          <span className='page-blogs-latest-date'>
            {featuredPosts[0].published_at}
          </span>
          <h2 className='page-blogs-latest-title'>
            {featuredPosts[0].content.title}
          </h2>
          <p className='page-blogs-latest-intro'>{featuredPosts[0].content.intro}</p> */}
          <img className='page-blogs-latest-img' src={blok.image} />
          <h1 className='page-blogs-latest-header'>{blok.title}</h1>
          <p className='page-blogs-latest-title'>{blok.intro}</p>
          <div className='page-blogs-latest-intro'>
            {render(blok.long_text, {
              nodeResolvers: {
                [NODE_IMAGE]: (children, props) => <img {...props} style={{borderRadius: '0px', width: '100%'}}/>
              },
              blokResolvers: {
                ['YouTube-blogpost']: (props) => (
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={ "https://www.youtube.com/embed/" + props.YouTube_id.replace('https://youtu.be/', '')  }></iframe>
                  </div>
                  )
              }
            })}
          </div>
          {morePosts.reverse().map((post, index) => (
            <div className='page-blogs-list' style={{ paddingLeft: 0, pddingRight: 0 }}>
              <h1>Latest Articles</h1>
              <div className='blog-list'>
              
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
                      <p className='blog-list-item-intro'>{post.content.intro}</p>
                    </div>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bg-white w-full">
        <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
          <h1 className="text-5xl font-bold font-serif text-purple-700 tracking-wide">
            {blok.title}
          </h1>
          <p className="text-gray-500 text-lg max-w-lg">{blok.intro}</p>
          <img className="w-full bg-gray-300 my-16" src={blok.image} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
        <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
          {render(blok.long_text)}
        </div>
        <div className="py-16 max-w-sm p-2 sm:p-10 text-center flex flex-col">
          <div className="p-4 bg-purple-700 rounded-full mx-auto">
          </div>
        </div>
      </div> */}
    </SbEditable>
  )
}
export default BlogPost
