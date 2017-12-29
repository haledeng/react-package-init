const fs = require('fs')
let pkg = require('../package.json')
const argv = require('minimist')(process.argv.slice(2));
pkg.version = argv._[0]
fs.writeFile(`package.json`, JSON.stringify(pkg, null, 2), 'utf8'); // write it back
