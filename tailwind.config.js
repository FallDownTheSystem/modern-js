const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '');

module.exports = {
	purge: ['./index.html', './vite.config.js', './src/**/*.{js,vue,md}'],
	darkMode: false, // or 'media' or 'class'
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				js: '#f7df1e',
				...colors,
				gray: {
					50: 'hsl(210, 24%, 98%)',
					100: 'hsl(220, 19%, 96%)',
					200: 'hsl(220, 13%, 91%)',
					300: 'hsl(216, 13%, 84%)',
					400: 'hsl(218, 9%, 65%)',
					500: 'hsl(220, 7%, 46%)',
					600: 'hsl(215, 8%, 34%)',
					700: 'hsl(217, 11%, 25%)',
					800: 'hsl(215, 11%, 17%)',
					900: 'hsl(218, 12%, 11%)'
				}
			},
			screens: {
				full: '1880px'
			},
			fontFamily: {
				sans: ["'Centra No. 1'", "'Inter var'", ...defaultTheme.fontFamily.sans],
				serif: ["'Playfair Display'", ...defaultTheme.fontFamily.serif],
				mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
				display: ["'Neutra Text'"]
			},
			typography: (theme) => ({
				DEFAULT: {
					css: [
						{
							color: theme('colors.gray.200', defaultTheme.colors.gray[300]),
							maxWidth: 'none',
							'[class~="lead"]': {
								color: theme('colors.gray.400', defaultTheme.colors.gray[400])
							},
							a: {
								color: theme('colors.pink.600', defaultTheme.colors.pink[600]),
								textDecoration: 'none',
								fontWeight: '500',
								'&:hover': {
									textDecoration: 'underline'
								},
								strong: {
									color: theme('colors.pink.600', defaultTheme.colors.pink[600])
								}
							},
							strong: {
								color: theme('colors.gray.100', defaultTheme.colors.gray[100]),
								fontWeight: '600'
							},
							'ol[type="A"]': {
								'--list-counter-style': 'upper-alpha'
							},
							'ol[type="a"]': {
								'--list-counter-style': 'lower-alpha'
							},
							'ol[type="A" s]': {
								'--list-counter-style': 'upper-alpha'
							},
							'ol[type="a" s]': {
								'--list-counter-style': 'lower-alpha'
							},
							'ol[type="I"]': {
								'--list-counter-style': 'upper-roman'
							},
							'ol[type="i"]': {
								'--list-counter-style': 'lower-roman'
							},
							'ol[type="I" s]': {
								'--list-counter-style': 'upper-roman'
							},
							'ol[type="i" s]': {
								'--list-counter-style': 'lower-roman'
							},
							'ol[type="1"]': {
								'--list-counter-style': 'decimal'
							},
							'ol > li': {
								position: 'relative'
							},
							'ol > li::before': {
								content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
								position: 'absolute',
								fontWeight: '400',
								color: theme('colors.gray.500', defaultTheme.colors.gray[500])
							},
							'ul > li': {
								position: 'relative'
							},
							'ul > li::before': {
								content: '""',
								position: 'absolute',
								backgroundColor: theme('colors.gray.500', defaultTheme.colors.gray[500]),
								borderRadius: '50%'
							},
							hr: {
								borderColor: theme('colors.gray.800', defaultTheme.colors.gray[800]),
								borderTopWidth: 1
							},
							blockquote: {
								fontWeight: '500',
								fontStyle: 'italic',
								color: theme('colors.gray.200', defaultTheme.colors.gray[200]),
								borderLeftWidth: '0.25rem',
								borderLeftColor: theme('colors.gray.700', defaultTheme.colors.gray[700]),
								quotes: '"\\201C""\\201D""\\2018""\\2019"'
							},
							'blockquote p:first-of-type::before': {
								content: 'open-quote'
							},
							'blockquote p:last-of-type::after': {
								content: 'close-quote'
							},
							h1: {
								color: theme('colors.white', defaultTheme.colors.white),
								fontWeight: '600'
							},
							h2: {
								color: theme('colors.gray.100', defaultTheme.colors.gray[100]),
								fontWeight: '600'
							},
							h3: {
								color: theme('colors.gray.100', defaultTheme.colors.gray[100]),
								fontWeight: '600'
							},
							h4: {
								color: theme('colors.gray.100', defaultTheme.colors.gray[100]),
								fontWeight: '600'
							},
							'figure figcaption': {
								color: theme('colors.gray.400', defaultTheme.colors.gray[400])
							},
							code: {
								color: theme('colors.gray.100', defaultTheme.colors.gray[100]),
								fontWeight: '600'
							},
							'code::before': {
								content: '"`"'
							},
							'code::after': {
								content: '"`"'
							},
							'a code': {
								color: theme('colors.gray.100', defaultTheme.colors.gray[100])
							},
							pre: {
								color: theme('colors.gray.200', defaultTheme.colors.gray[200]),
								backgroundColor: theme('colors.gray.800', defaultTheme.colors.gray[800]),
								overflowX: 'auto'
							},
							'pre code': {
								backgroundColor: 'transparent',
								borderWidth: '0',
								borderRadius: '0',
								padding: '0',
								fontWeight: '400',
								color: 'inherit',
								fontSize: 'inherit',
								fontFamily: 'inherit',
								lineHeight: 'inherit'
							},
							'pre code::before': {
								content: 'none'
							},
							'pre code::after': {
								content: 'none'
							},
							table: {
								width: '100%',
								tableLayout: 'auto',
								textAlign: 'left',
								marginTop: em(32, 16),
								marginBottom: em(32, 16)
							},
							thead: {
								color: theme('colors.gray.100', defaultTheme.colors.gray[100]),
								fontWeight: '600',
								borderBottomWidth: '1px',
								borderBottomColor: theme('colors.gray.700', defaultTheme.colors.gray[700])
							},
							'thead th': {
								verticalAlign: 'bottom'
							},
							'tbody tr': {
								borderBottomWidth: '1px',
								borderBottomColor: theme('colors.gray.800', defaultTheme.colors.gray[800])
							},
							'tbody tr:last-child': {
								borderBottomWidth: '0'
							},
							'tbody td': {
								verticalAlign: 'top'
							}
						},
						{
							fontSize: rem(16),
							lineHeight: round(28 / 16),
							p: {
								marginTop: em(20, 16),
								marginBottom: em(20, 16)
							},
							'[class~="lead"]': {
								fontSize: em(20, 16),
								lineHeight: round(32 / 20),
								marginTop: em(24, 20),
								marginBottom: em(24, 20)
							},
							blockquote: {
								marginTop: em(32, 20),
								marginBottom: em(32, 20),
								paddingLeft: em(20, 20)
							},
							h1: {
								fontSize: em(36, 16),
								marginTop: '0',
								marginBottom: em(32, 36),
								lineHeight: round(40 / 36)
							},
							h2: {
								fontSize: em(24, 16),
								marginTop: em(48, 24),
								marginBottom: em(24, 24),
								lineHeight: round(32 / 24)
							},
							h3: {
								fontSize: em(20, 16),
								marginTop: em(32, 20),
								marginBottom: em(12, 20),
								lineHeight: round(32 / 20)
							},
							h4: {
								marginTop: em(24, 16),
								marginBottom: em(8, 16),
								lineHeight: round(24 / 16)
							},
							img: {
								marginTop: em(32, 16),
								marginBottom: em(32, 16)
							},
							video: {
								marginTop: em(32, 16),
								marginBottom: em(32, 16)
							},
							figure: {
								marginTop: em(32, 16),
								marginBottom: em(32, 16)
							},
							'figure > *': {
								marginTop: '0',
								marginBottom: '0'
							},
							'figure figcaption': {
								fontSize: em(14, 16),
								lineHeight: round(20 / 14),
								marginTop: em(12, 14)
							},
							code: {
								fontSize: em(14, 16)
							},
							'h2 code': {
								fontSize: em(21, 24)
							},
							'h3 code': {
								fontSize: em(18, 20)
							},
							pre: {
								fontSize: em(14, 16),
								lineHeight: round(24 / 14),
								marginTop: em(24, 14),
								marginBottom: em(24, 14),
								borderRadius: rem(6),
								paddingTop: em(12, 14),
								paddingRight: em(16, 14),
								paddingBottom: em(12, 14),
								paddingLeft: em(16, 14)
							},
							ol: {
								marginTop: em(20, 16),
								marginBottom: em(20, 16)
							},
							ul: {
								marginTop: em(20, 16),
								marginBottom: em(20, 16)
							},
							li: {
								marginTop: em(8, 16),
								marginBottom: em(8, 16)
							},
							'ol > li': {
								paddingLeft: em(28, 16)
							},
							'ol > li::before': {
								left: '0'
							},
							'ul > li': {
								paddingLeft: em(28, 16)
							},
							'ul > li::before': {
								width: em(6, 16),
								height: em(6, 16),
								top: `calc(${em(28 / 2, 16)} - ${em(3, 16)})`,
								left: em(4, 16)
							},
							'> ul > li p': {
								marginTop: em(12, 16),
								marginBottom: em(12, 16)
							},
							'> ul > li > *:first-child': {
								marginTop: em(20, 16)
							},
							'> ul > li > *:last-child': {
								marginBottom: em(20, 16)
							},
							'> ol > li > *:first-child': {
								marginTop: em(20, 16)
							},
							'> ol > li > *:last-child': {
								marginBottom: em(20, 16)
							},
							'ul ul, ul ol, ol ul, ol ol': {
								marginTop: em(12, 16),
								marginBottom: em(12, 16)
							},
							hr: {
								marginTop: em(48, 16),
								marginBottom: em(48, 16)
							},
							'hr + *': {
								marginTop: '0'
							},
							'h2 + *': {
								marginTop: '0'
							},
							'h3 + *': {
								marginTop: '0'
							},
							'h4 + *': {
								marginTop: '0'
							},
							table: {
								fontSize: em(14, 16),
								lineHeight: round(24 / 14)
							},
							'thead th': {
								paddingRight: em(8, 14),
								paddingBottom: em(8, 14),
								paddingLeft: em(8, 14)
							},
							'thead th:first-child': {
								paddingLeft: '0'
							},
							'thead th:last-child': {
								paddingRight: '0'
							},
							'tbody td': {
								paddingTop: em(8, 14),
								paddingRight: em(8, 14),
								paddingBottom: em(8, 14),
								paddingLeft: em(8, 14)
							},
							'tbody td:first-child': {
								paddingLeft: '0'
							},
							'tbody td:last-child': {
								paddingRight: '0'
							}
						},
						{
							'> :first-child': {
								marginTop: '0'
							},
							'> :last-child': {
								marginBottom: '0'
							}
						}
					]
				},
				lg: {
					css: [
						{
							fontSize: rem(18),
							lineHeight: round(32 / 18),
							p: {
								marginTop: em(24, 18),
								marginBottom: em(24, 18)
							},
							'[class~="lead"]': {
								fontSize: em(22, 18),
								lineHeight: round(32 / 22),
								marginTop: em(24, 22),
								marginBottom: em(24, 22)
							},
							blockquote: {
								marginTop: em(40, 24),
								marginBottom: em(40, 24),
								paddingLeft: em(24, 24)
							},
							h1: {
								fontSize: em(48, 18),
								marginTop: '0',
								marginBottom: em(40, 48),
								lineHeight: round(48 / 44)
							},
							h2: {
								fontSize: em(30, 18),
								marginTop: em(56, 30),
								marginBottom: em(32, 30),
								lineHeight: round(40 / 30)
							},
							h3: {
								fontSize: em(24, 18),
								marginTop: em(40, 24),
								marginBottom: em(16, 24),
								lineHeight: round(36 / 24)
							},
							h4: {
								marginTop: em(32, 18),
								marginBottom: em(8, 18),
								lineHeight: round(28 / 18)
							},
							img: {
								marginTop: em(32, 18),
								marginBottom: em(32, 18)
							},
							video: {
								marginTop: em(32, 18),
								marginBottom: em(32, 18)
							},
							figure: {
								marginTop: em(32, 18),
								marginBottom: em(32, 18)
							},
							'figure > *': {
								marginTop: '0',
								marginBottom: '0'
							},
							'figure figcaption': {
								fontSize: em(16, 18),
								lineHeight: round(24 / 16),
								marginTop: em(16, 16)
							},
							code: {
								fontSize: em(16, 18)
							},
							'h2 code': {
								fontSize: em(26, 30)
							},
							'h3 code': {
								fontSize: em(21, 24)
							},
							pre: {
								fontSize: em(16, 18),
								lineHeight: round(28 / 16),
								marginTop: em(32, 16),
								marginBottom: em(32, 16),
								borderRadius: rem(6),
								paddingTop: em(16, 16),
								paddingRight: em(24, 16),
								paddingBottom: em(16, 16),
								paddingLeft: em(24, 16)
							},
							ol: {
								marginTop: em(24, 18),
								marginBottom: em(24, 18)
							},
							ul: {
								marginTop: em(24, 18),
								marginBottom: em(24, 18)
							},
							li: {
								marginTop: em(12, 18),
								marginBottom: em(12, 18)
							},
							'ol > li': {
								paddingLeft: em(30, 18)
							},
							'ol > li::before': {
								left: '0'
							},
							'ul > li': {
								paddingLeft: em(30, 18)
							},
							'ul > li::before': {
								width: em(6, 18),
								height: em(6, 18),
								top: `calc(${em(32 / 2, 18)} - ${em(3, 18)})`,
								left: em(4, 18)
							},
							'> ul > li p': {
								marginTop: em(16, 18),
								marginBottom: em(16, 18)
							},
							'> ul > li > *:first-child': {
								marginTop: em(24, 18)
							},
							'> ul > li > *:last-child': {
								marginBottom: em(24, 18)
							},
							'> ol > li > *:first-child': {
								marginTop: em(24, 18)
							},
							'> ol > li > *:last-child': {
								marginBottom: em(24, 18)
							},
							'ul ul, ul ol, ol ul, ol ol': {
								marginTop: em(16, 18),
								marginBottom: em(16, 18)
							},
							hr: {
								marginTop: em(56, 18),
								marginBottom: em(56, 18)
							},
							'hr + *': {
								marginTop: '0'
							},
							'h2 + *': {
								marginTop: '0'
							},
							'h3 + *': {
								marginTop: '0'
							},
							'h4 + *': {
								marginTop: '0'
							},
							table: {
								fontSize: em(16, 18),
								lineHeight: round(24 / 16)
							},
							'thead th': {
								paddingRight: em(12, 16),
								paddingBottom: em(12, 16),
								paddingLeft: em(12, 16)
							},
							'thead th:first-child': {
								paddingLeft: '0'
							},
							'thead th:last-child': {
								paddingRight: '0'
							},
							'tbody td': {
								paddingTop: em(12, 16),
								paddingRight: em(12, 16),
								paddingBottom: em(12, 16),
								paddingLeft: em(12, 16)
							},
							'tbody td:first-child': {
								paddingLeft: '0'
							},
							'tbody td:last-child': {
								paddingRight: '0'
							}
						},
						{
							'> :first-child': {
								marginTop: '0'
							},
							'> :last-child': {
								marginBottom: '0'
							}
						}
					]
				}
			})
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
