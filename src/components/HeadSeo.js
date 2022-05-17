/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 
 function SEO({ description, title, image, content }) {
 
   const metaDescription = content ? content.intro : null;
 
   let metaImage = content ? content.image : null;
   metaImage = "http:" + metaImage;

   let pageTitle = content ? content.title : "Volume Finance";
 
   return (
     <Helmet>
       <title>{pageTitle}</title>
       <meta name="description" content={metaDescription} />
       <meta name="image" content={metaImage} />
 
       <meta property="og:type" content="website" />
       <meta property="og:title" content={pageTitle} />
       <meta property="og:description" content={metaDescription} />
       <meta property="og:image" content={metaImage} />
 
       <meta name="twitter:title" content={title} />
       <meta name="twitter:description" content={description} />
       <meta name="twitter:image" content={metaImage} />
     </Helmet>
   )
 }
 
 SEO.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 SEO.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
 }
 
 export default SEO
 