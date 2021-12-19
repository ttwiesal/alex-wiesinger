module.exports = {
  siteMetadata: {
    siteUrl: "https://www.alex-wiesinger.dev",
    title: "Site of Alexander Wiesinger",
    author: "Alexander Wiesinger",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "alex-wiesinger.dev",
        short_name: "alexwiesinger",
        start_url: "/",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
  ],
}
