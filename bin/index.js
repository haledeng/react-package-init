#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version);

var commands = [{
	name: 'init',
	description: 'Init a npm package'
}];

var startCommand = function startCommand(name, args) {
	var p = (0, _child_process.fork)(require.resolve('./' + name), args);
	p.on('message', function (msg) {
		if (data === 'RESTART') {
			p.kill('SIGINT');
			start(name, args);
		}
	});
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	var _loop = function _loop() {
		var _ref = _step.value;
		var name = _ref.name,
		    description = _ref.description;

		_commander2.default.command('' + name).description(description).action(function (pkgName) {
			startCommand(name, [pkgName]);
		});
	};

	for (var _iterator = commands[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		_loop();
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

_commander2.default.parse(process.argv);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ2ZXJzaW9uIiwiY29tbWFuZHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzdGFydENvbW1hbmQiLCJhcmdzIiwicCIsInJlcXVpcmUiLCJyZXNvbHZlIiwib24iLCJtc2ciLCJkYXRhIiwia2lsbCIsInN0YXJ0IiwiY29tbWFuZCIsImFjdGlvbiIsInBrZ05hbWUiLCJwYXJzZSIsInByb2Nlc3MiLCJhcmd2Il0sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUlBLG9CQUNFQSxPQURGLENBQ1Usa0JBQUlBLE9BRGQ7O0FBSUEsSUFBTUMsV0FBVyxDQUFDO0FBQ2pCQyxPQUFNLE1BRFc7QUFFakJDLGNBQWE7QUFGSSxDQUFELENBQWpCOztBQU1BLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDRixJQUFELEVBQU9HLElBQVAsRUFBZ0I7QUFDcEMsS0FBSUMsSUFBSSx5QkFBS0MsUUFBUUMsT0FBUixRQUFxQk4sSUFBckIsQ0FBTCxFQUFtQ0csSUFBbkMsQ0FBUjtBQUNBQyxHQUFFRyxFQUFGLENBQUssU0FBTCxFQUFnQixVQUFDQyxHQUFELEVBQVM7QUFDeEIsTUFBSUMsU0FBUyxTQUFiLEVBQXdCO0FBQ3ZCTCxLQUFFTSxJQUFGLENBQU8sUUFBUDtBQUNBQyxTQUFNWCxJQUFOLEVBQVlHLElBQVo7QUFDQTtBQUNELEVBTEQ7QUFNQSxDQVJEOzs7Ozs7Ozs7TUFXRUgsSSxRQUFBQSxJO01BQ0FDLFcsUUFBQUEsVzs7QUFHRCxzQkFBVVcsT0FBVixNQUFxQlosSUFBckIsRUFDRUMsV0FERixDQUNjQSxXQURkLEVBRUVZLE1BRkYsQ0FFUyxVQUFDQyxPQUFELEVBQWE7QUFDcEJaLGdCQUFhRixJQUFiLEVBQW1CLENBQUNjLE9BQUQsQ0FBbkI7QUFDQSxHQUpGOzs7QUFMRCxzQkFJSWYsUUFKSiw4SEFJYztBQUFBO0FBTWI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxvQkFBVWdCLEtBQVYsQ0FBZ0JDLFFBQVFDLElBQXhCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgY29tbWFuZGVyIGZyb20gJ2NvbW1hbmRlcic7XHJcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuaW1wb3J0IHtcclxuXHRmb3JrXHJcbn0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XHJcblxyXG5jb21tYW5kZXJcclxuXHQudmVyc2lvbihwa2cudmVyc2lvbilcclxuXHJcblxyXG5jb25zdCBjb21tYW5kcyA9IFt7XHJcblx0bmFtZTogJ2luaXQnLFxyXG5cdGRlc2NyaXB0aW9uOiAnSW5pdCBhIG5wbSBwYWNrYWdlJ1xyXG59XTtcclxuXHJcblxyXG5jb25zdCBzdGFydENvbW1hbmQgPSAobmFtZSwgYXJncykgPT4ge1xyXG5cdGxldCBwID0gZm9yayhyZXF1aXJlLnJlc29sdmUoYC4vJHtuYW1lfWApLCBhcmdzKTtcclxuXHRwLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xyXG5cdFx0aWYgKGRhdGEgPT09ICdSRVNUQVJUJykge1xyXG5cdFx0XHRwLmtpbGwoJ1NJR0lOVCcpO1xyXG5cdFx0XHRzdGFydChuYW1lLCBhcmdzKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZm9yIChjb25zdCB7XHJcblx0XHRuYW1lLFxyXG5cdFx0ZGVzY3JpcHRpb25cclxuXHR9XHJcblx0b2YgY29tbWFuZHMpIHtcclxuXHRjb21tYW5kZXIuY29tbWFuZChgJHtuYW1lfWApXHJcblx0XHQuZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pXHJcblx0XHQuYWN0aW9uKChwa2dOYW1lKSA9PiB7XHJcblx0XHRcdHN0YXJ0Q29tbWFuZChuYW1lLCBbcGtnTmFtZV0pXHJcblx0XHR9KVxyXG59XHJcblxyXG5jb21tYW5kZXIucGFyc2UocHJvY2Vzcy5hcmd2KTsiXX0=