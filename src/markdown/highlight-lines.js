let RE = /{([\d,-]+)}/;
export function highlightLinesPlugin(md) {
	let fence = md.renderer.rules.fence;

	md.renderer.rules.fence = function () {
		let args = [];
		let len = arguments.length;

		while (len--) {
			args[len] = arguments[len];
		}
		let tokens = args[0];
		let idx = args[1];
		let options = args[2];
		let self = args[4];
		let token = tokens[idx];

		if (!token.info || !RE.test(token.info)) {
			return fence.apply(void 0, args);
		}

		let lineNumbers = RE.exec(token.info)[1]
			.split(',')
			.map(function (v) {
				return v.split('-').map(function (v) {
					return parseInt(v, 10);
				});
			});

		let langName = token.info.replace(RE, '').trim();
		let code = options.highlight ? options.highlight(token.content, langName) : token.content;

		let codeSplits = code.split('\n').map(function (split, index) {
			let lineNumber = index + 1;
			let inRange = lineNumbers.some(function (ref) {
				let start = ref[0];
				let end = ref[1];

				if (start && end) {
					return lineNumber >= start && lineNumber <= end;
				}

				return lineNumber === start;
			});

			if (inRange) {
				return {
					code: '<span class="highlighted-line">' + split + '</span>',
					highlighted: true
				};
			}

			return {
				code: split
			};
		});

		let highlightedCode = '';
		codeSplits.forEach(function (split) {
			if (split.highlighted) {
				highlightedCode += split.code;
			} else {
				highlightedCode += split.code + '\n';
			}
		});

		// If custom highlighter wraps code with starting <pre..., don't wrap code
		if (highlightedCode.startsWith('<pre')) {
			return highlightedCode;
		}

		let tmpToken = {
			attrs: [['class', langName ? 'language-' + langName : '']]
		};
		let attrs = self.renderAttrs(tmpToken);
		let rtr = '<pre ' + attrs + '><code' + attrs + '>' + highlightedCode.trim() + '</code></pre>';
		console.log(rtr);
		return rtr;
	};
}
