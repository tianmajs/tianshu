var fs = require('fs'),
	marked = require('marked'),
	path = require('path'),
	util = require('util');

var PATTERN_MARKDOWN_TAG = /<x-markdown\s+src="(.*?)"\s*\/>/g,

	PATTERN_HEADER_TAG = /<h([2-5]).*?>(.*?)<\/h\1>/g,

	PATTERN_INDEX_TAG = /<x-index\s*\/>/g,

	PATTERN_EXTNAME = /\.\w+$/;

/**
 * Convert template to HTML.
 * @param pathname {string}
 */
function main(pathname) {
	var base = path.dirname(pathname),
		tmpl = read(pathname);

	tmpl = compile(tmpl, base);
	tmpl = generateIndex(tmpl);

	write(pathname.replace(PATTERN_EXTNAME, '.html'), tmpl);
}

/**
 * Embed markdown contents.
 * @param tmpl {string}
 * @param base {string}
 * @reutrn {string}
 */
function compile(tmpl, base) {
	return tmpl.replace(PATTERN_MARKDOWN_TAG, function (all, pathname) {
		return marked(read(path.join(base, pathname)));
	});
}

/**
 * Generate index.
 * @param tmpl {string}
 * @reutrn {string}
 */
function generateIndex(tmpl) {
	var html = '',
		index = [],
		re;

	html += '<ul>\n';

	tmpl = tmpl.replace(PATTERN_HEADER_TAG, function (all, num, text) {
		var level = num - 1;

		while (level > index.length) {
			index.push(0);
		}

		while (level < index.length) {
			index.pop();
		}

		index[index.length - 1] += 1;

		html += util.format('<li class="level%s"><a href="#%s">%s</a></li>',
			num, index.join('.'), text);

		return util.format('<h%s id="%s">%s</h%s>',
			num, index.join('.'), text, num);
	});

	html += '</ul>\n';

	tmpl = tmpl.replace(PATTERN_INDEX_TAG, html);

	return tmpl;
}

/**
 * Read a file.
 * @param pathname {string}
 * @return {string}
 */
function read(pathname) {
	return fs.readFileSync(pathname, 'utf-8');
}

/**
 * Write a file.
 * @param pathname {string}
 * @param data {string}
 */
function write(pathname, data) {
	fs.writeFileSync(pathname, data);
}

module.exports = main;
