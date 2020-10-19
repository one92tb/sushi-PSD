/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */

	plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
		resolve: `gatsby-source-contentful`,
		options: {
			spaceId: `tf67omcacimj`,
			accessToken: `ZphSH56Pv9Cp8LQ1pj-boD7srLvqIaCQVbIeCuivNWs`,
		},
	}, {
		resolve: `gatsby-plugin-google-fonts`,
		options: {
			fonts: [
				`Montserrat`
			],
			display: 'swap'
		}
	},
],
}
