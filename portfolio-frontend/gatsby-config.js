/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Afram's Hanna Portfolio Website",
    description: "This is Afram's Hanna Portfolio Site",
    author: "@AframHanna",
    twitterUsername: "@AframHanna5",
    image: "/twitter-card.png",
    siteUrl: "https://afram-website.netlify.app/",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
     {
       resolve: `gatsby-plugin-prefetch-google-fonts`,
       options: {
         fonts: [
           {
             family: `Roboto`,
             variants: [`400`, `700`],
           },
           {
             family: `Open Sans`,
           },
         ],
       },
     },
  ],
}
