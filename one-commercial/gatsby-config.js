module.exports = {
  siteMetadata: {
    title: 'One Commercial - Las Vegas Commercial Real Estate Company',
    siteUrl: `#`,
    description: `One Commercial is a Las Vegas Commercial Real Company Specializing in Leasing, Sales, Investments, and New Development.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'One Commercial',
        short_name: 'One Comm',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#38E86F',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yi2r8oscz3t0`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken:
          '243def89d1b2ffc6cc6eee58fd28fb0ad9a06de5eb2dc2e710be8bd0429110c0',
      },
    },
    '@contentful/gatsby-transformer-contentful-richtext',
    'gatsby-plugin-sass',
    // 'react-hamburger-menu',
    'gatsby-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
