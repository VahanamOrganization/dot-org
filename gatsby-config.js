module.exports = {
  siteMetadata: {
    title: 'Vahanam',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'vahanam',
        short_name: 'vahanam',
        start_url: '/',
        background_color: '#000',
        theme_color: '#ff3864',
        display: 'minimal-ui',
        icon: 'src/images/raidguild__icon.png',
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
  ],
}
