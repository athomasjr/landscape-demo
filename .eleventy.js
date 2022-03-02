const Image = require('@11ty/eleventy-img')
const now = String(Date.now())
const path = require('path')
const svgContents = require('eleventy-plugin-svg-contents')
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

const imageShortcode = async (
	relativeSrc,
	alt,
	className,
	formats = ['jpeg', 'webp'],
	widths = [null, 400, 800, 1280],
	sizes = '100vw'
) => {
	const { dir: imagDir } = path.parse(relativeSrc)
	const fullSrc = path.join('src', relativeSrc)

	const imageMetadata = await Image(fullSrc, {
		widths,
		formats,
		outputDir: path.join('_site', imagDir),
		urlPath: imagDir,
	})

	const imageAttributes = {
		alt,
		sizes,
		class: className,
		loading: 'lazy',
		decoding: 'async',
	}

	return Image.generateHTML(imageMetadata, imageAttributes)
}

module.exports = (config) => {
	config.addPlugin(svgContents)
	config.addPlugin(eleventyNavigationPlugin)
	config.addShortcode('version', function () {
		return now
	})
	config.addLiquidShortcode('image', imageShortcode)
	config.addPassthroughCopy('src/styles/global.css')
	config.addPassthroughCopy('src/assets')
	return {
		dir: {
			input: 'src',
			layouts: '_includes/layouts',
		},
	}
}
