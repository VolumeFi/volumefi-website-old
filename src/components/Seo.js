/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 function SEO({ description, title, image, content }) {
 
 
   const metaDescription = "Sommelier is the new Coprocessor for the Ethereum VM";
   const defaultTitle = "Sommelier";
 
 
   let metaImage = image;
 
 
   return (
     <Helmet>
       <title>{defaultTitle}</title>
       <meta name="description" content={metaDescription} />
       {metaImage && <meta name="image" content={metaImage} />}
 
       <meta property="og:type" content="website" />
       <meta property="og:title" content={defaultTitle} />
       <meta property="og:description" content={metaDescription} /> 
       {metaImage && <meta property="og:image" content={metaImage} />}
 
       <meta name="twitter:title" content={defaultTitle} />
       <meta name="twitter:description" content={description} />
       {metaImage && <meta name="twitter:image" content={metaImage} />}
     </Helmet>
   )
 }
 
 export default SEO
 