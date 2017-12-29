#!/usr/bin/env node

import commander from 'commander';
import pkg from '../package.json';
import {
	fork
} from 'child_process';

commander
	.version(pkg.version)


const commands = [{
	name: 'init',
	description: 'Init a npm package'
}];


const startCommand = (name, args) => {
	let p = fork(require.resolve(`./${name}`));
	p.on('message', (msg) => {
		if (data === 'RESTART') {
			p.kill('SIGINT');
			start(name, args);
		}
	});
}

for (const {
		name,
		description
	}
	of commands) {
	commander.command(`${name}`)
		.description(description)
		.action((pkgName) => {
			startCommand(name, [pkgName])
		})
}

commander.parse(process.argv);