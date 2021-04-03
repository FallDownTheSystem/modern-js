import container from 'markdown-it-container';

export const containerPlugin = (md) => {
	md.use(...createContainer('tip'))
		.use(...createContainer('warning'))
		.use(...createContainer('danger'));
};

function createContainer(name) {
	return [
		container,
		name,
		{
			render(tokens, idx) {
				const token = tokens[idx];
				console.log(token);
				// Remove the container class and v-pre from the info
				const pre = token.info.includes('v-pre');
				const info = token.info.trim().slice(name.length).trim().replace('v-pre', '').trim();
				if (token.nesting === 1) {
					// Explicitly escape Vue syntax
					return `<div ${pre ? 'v-pre' : ''} class="${name} custom-block">
						<p class="custom-block-title">${info}</p>
						`;
				} else {
					return `</div>\n`;
				}
			}
		}
	];
}
