const name = require('minimist')(process.argv.slice(2))._[0];
import copydir from 'copy-dir'

import path from 'path';

import {
	rename
} from 'fs';

let cwd = process.cwd();

const init = () => {
	copydir.sync(path.join(__dirname, '../template'), path.join(cwd, name));
	rename(path.join(cwd, name, '.ignore'), path.join(cwd, name, '.npmignore'));
}

init();