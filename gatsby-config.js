module.exports = {
  siteMetadata: {
    title: `Volume Finance`,
    description: `Volume delivers software tools and user experiences that increase protocol token utility and community engagement, measured by protocol transaction volume growth`,
    author: `@volume.finance`,
    baseUrl: ``, // used to create absolute URLs for
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'pdt76VhIbCskVQld3smuqgtt',
        homeSlug: 'home',
        version: 'published',
        mixpanel: 'd6a6208c71b46a6965913df792f505f9'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
        gcm_sender_id: `29128146586`
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog/*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@images': `${__dirname}/src/images`,
          '@helpers': `${__dirname}/src/helpers`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  flags: {
    PARALLEL_QUERY_RUNNING: true
  }
}
