import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import components from 'vite-plugin-components';
import icons, { ViteIconsResolver } from 'vite-plugin-icons';
import pages from 'vite-plugin-pages';
import layouts from 'vite-plugin-vue-layouts';
import markdown from 'vite-plugin-md';
import anchorPlugin from 'markdown-it-anchor';
import emojiPlugin from 'markdown-it-emoji';
import prismPlugin from 'markdown-it-prism';
import { highlightLinesPlugin } from './src/markdown/highlight-lines';

import { containerPlugin } from './src/markdown/containers';
import { Certificate } from 'crypto';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/]
		}),
		pages({
			extensions: ['vue', 'md']
		}),
		layouts(),
		markdown({
			wrapperClasses: 'prose',
			headEnabled: true,
			transforms: {
				after: (code, id) => {
					return code.replaceAll('<code', '<code v-pre');
				}
			},
			markdownItSetup(md) {
				md.use(highlightLinesPlugin).use(prismPlugin).use(containerPlugin).use(emojiPlugin).use(anchorPlugin);
			}
		}),
		components({
			extensions: ['vue', 'md'],
			customLoaderMatcher: (id) => id.endsWith('.md'),
			customComponentResolvers: ViteIconsResolver()
		}),
		icons()
	]
});
