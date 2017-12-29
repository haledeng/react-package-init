const name = require('minimist')(process.argv.slice(2))._[0];
import copydir from 'copy-dir'

import path from 'path';

const init = () => {
	copydir.sync(path.join(__dirname, '../template'), path.join(process.cwd(), name));
}

init();