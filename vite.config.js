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
import { highlight } from './src/markdown/highlight';
import { highlightLinePlugin } from './src/markdown/highlightLines';
import { lineNumberPlugin } from './src/markdown/lineNumbers';
import { containerPlugin } from './src/markdown/containers';
import { preWrapperPlugin } from './src/markdown/preWrapper';

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
			wrapperClasses: 'prose prose-lg',
			headEnabled: true,
			markdownItOptions: {
				html: true,
				linkify: true,
				breaks: true,
				lineNumbers: false,
				highlight
			},
			markdownItSetup(md) {
				md.use(highlightLinePlugin)
					.use(preWrapperPlugin)
					.use(lineNumberPlugin)
					.use(containerPlugin)
					.use(emojiPlugin)
					.use(anchorPlugin);
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
