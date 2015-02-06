var optimist = require('optimist')
			.usage('Usage: $0 -qo')
			.options(
				{
					color: {
						boolean: true,
						default: true
					},
					filenames: {
						boolean: true,
						default: false
					},
					h: {
						alias: 'help',
						boolean: true,
						default: false
					},
					i: {
						alias: 'inline-edit',
						boolean: true,
						default: false
					},
					l: {
						alias: 'lint',
						boolean: true,
						default: true
					},
					m: {
						alias: 'check-metadata',
						boolean: true,
						default: false
					},
					o: {
						alias: 'open',
						boolean: true,
						default: false
					},
					q: {
						alias: 'quiet',
						boolean: true,
						default: false
					},
					r: {
						alias: 'relative',
						boolean: true,
						default: false
					},
					v: {
						alias: 'verbose',
						boolean: true,
						default: false
					}
				}
			);

var argv = optimist.argv;

if (argv.h) {
	optimist.showHelp();

	process.exit();
}

module.exports = argv;