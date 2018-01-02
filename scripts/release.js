const shell = require('shelljs');
const version = require('minimist')(process.argv.slice(2))._[0];

shell.config.fatal = true;
shell.config.verbose = true;

if (version) {
	shell
		.exec(`node scripts/version ${version}`)
		.exec(`git add package.json`)
		.exec(`git commit -m "build(release):release ${version}"`)
		.exec(`git tag v${version}`)
		.exec(`git push`)
} else {
	console.warn('You must assign version info like this： npm run release x.x.x')
}