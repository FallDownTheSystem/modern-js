import container from 'markdown-it-container';

export const containerPlugin = (md) => {
	md.use(...createContainer('c'));
};

let closingTags = [];
let lastOpened = 0;

function createContainer(name) {
	return [
		container,
		name,
		{
			render(tokens, idx) {
				const { info, nesting } = tokens[idx];
				const re = /("[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|\/[^\/\\]*(?:\\[\S\s][^\/\\]*)*\/[gimy]*(?=\s|$)|(?:\\\s|\S)+)/g;
				// Take everything except the name of the container and reverse it to treat it as a stack
				const args = [...info.trim().slice(name.length).trim().matchAll(re)].map((x) => x[0]).reverse();
				// Explicitly escape Vue syntax
				let pre = false;
				let classes = [];
				let openingTags = [];

				if (nesting === 1) {
					lastOpened = 1;
				}

				while (args.length > 0) {
					const arg = args.pop();
					switch (arg) {
						case 'v-pre':
							pre = true;
							break;
						case 'slides':
							openingTags.push(`<Slides>`);
							lastOpened++;
							closingTags.push(`</Slides>`);
							break;
						default:
							classes.push(arg);
							break;
					}
				}

				// Remove the container class and v-pre from the info
				if (nesting === 1) {
					// The default wrapper
					openingTags.unshift(`<div${pre ? ' v-pre' : ''} class="custom-block ${classes.join(' ')}">`);
					closingTags.unshift(`</div>`);
					return openingTags.join('\n');
				} else {
					return closingTags.splice(0, lastOpened).reverse().join('\n');
				}
			}
		}
	];
}
