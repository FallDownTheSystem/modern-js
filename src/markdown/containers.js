import container from 'markdown-it-container';

export const containerPlugin = (md) => {
	md.use(...createContainer('tip', 'TIP'))
		.use(...createContainer('warning', 'WARNING'))
		.use(...createContainer('danger', 'WARNING'))
		// explicitly escape Vue syntax
		.use(container, 'v-pre', {
			render: (tokens, idx) => (tokens[idx].nesting === 1 ? `<div v-pre>\n` : `</div>\n`)
		});
};

function createContainer(containerClass, defaultTitle) {
	return [
		container,
		containerClass,
		{
			render(tokens, idx) {
				const token = tokens[idx];
				const info = token.info.trim().slice(containerClass.length).trim();
				if (token.nesting === 1) {
					return `<div class="${containerClass} custom-block"><p class="custom-block-title">${info || defaultTitle}</p>\n`;
				} else {
					return `</div>\n`;
				}
			}
		}
	];
}
