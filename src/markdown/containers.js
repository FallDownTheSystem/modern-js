import container from 'markdown-it-container';

export const containerPlugin = (md) => {
	md.use(...createContainer('tip', 'TIP'))
		.use(...createContainer('warning', 'WARNING'))
		.use(...createContainer('danger', 'WARNING'));
};

function createContainer(containerClass, defaultTitle) {
	return [
		container,
		containerClass,
		{
			render(tokens, idx) {
				const token = tokens[idx];
				// Remove the container class and v-pre from the info
				const pre = token.info.includes('v-pre');
				const info = token.info.trim().slice(containerClass.length).trim().replace('v-pre', '').trim();
				if (token.nesting === 1) {
					// Explicitly escape Vue syntax
					return `<div ${pre ? 'v-pre' : ''} class="${containerClass} custom-block">
						<p class="custom-block-title">${info || defaultTitle}</p>
						`;
				} else {
					return `</div>\n`;
				}
			}
		}
	];
}
