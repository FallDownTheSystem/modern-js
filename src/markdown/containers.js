import container from 'markdown-it-container';

export const containerPlugin = (md) => {
	md.use(...createContainer('c'));
};

let tags = [];

function createContainer(name) {
	return [
		container,
		name,
		{
			render(tokens, idx) {
				const { info, nesting } = tokens[idx];
				const re = /("[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|\/[^\/\\]*(?:\\[\S\s][^\/\\]*)*\/[gimy]*(?=\s|$)|(?:\\\s|\S)+)/g;
				// Take everything except the name of the container and reverse it to treat it as a stack
				const args = [...info.trim().slice(name.length).trim().matchAll(re)]
					.map((x) => x[0].replaceAll(/^['"]|['"]$/g, ''))
					.reverse();
				// Explicitly escape Vue syntax
				let pre = false;
				let classes = [];
				let content = '';
				let props = {};
				let tag = 'div';

				while (args.length > 0) {
					const arg = args.pop();
					switch (arg) {
						case 'v-pre':
							pre = true;
							break;
						case 'slides':
							tag = 'Slides';
							break;
						case 'more':
							tag = 'More';
							break;
						case 'info':
						case 'note':
						case 'danger':
						case 'warn':
						case 'tip': {
							tag = 'Alert';
							if (args.length > 1) {
								props.title = args.pop();
							}
							props.type = arg;
							classes.push(arg);
							break;
						}
						default:
							classes.push(arg);
							break;
					}
				}

				// Remove the container class and v-pre from the info
				console.log(tag, info, nesting);
				if (nesting === 1) {
					tags.push(tag);
					return `<${tag}${pre ? ' v-pre' : ''} v-bind='${JSON.stringify(props)}' class="custom-block ${classes.join(' ')}">
					${content}`;
				} else {
					return `</${tags.pop()}>`;
				}
			}
		}
	];
}
