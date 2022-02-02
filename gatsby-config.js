module.exports = {
    siteMetadata: {
        title: `lamartio`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                "trackingId": "AIzaSyCB1zxR6D3f8ErfgMw3vn_jjRgeJFB9-0Q"
            }
        },
        "gatsby-plugin-typescript",
        "gatsby-plugin-material-ui",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "content",
                "path": "./src/content/"
            },
            __key: "content"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }
    ]
};