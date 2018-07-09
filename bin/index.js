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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb21tYW5kZXIiLCJ2ZXJzaW9uIiwicGtnIiwiY29tbWFuZHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzdGFydENvbW1hbmQiLCJhcmdzIiwicCIsInJlcXVpcmUiLCJyZXNvbHZlIiwib24iLCJtc2ciLCJkYXRhIiwia2lsbCIsInN0YXJ0IiwiY29tbWFuZCIsImFjdGlvbiIsInBrZ05hbWUiLCJwYXJzZSIsInByb2Nlc3MiLCJhcmd2Il0sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUlBQSxvQkFDRUMsT0FERixDQUNVQyxrQkFBSUQsT0FEZDs7QUFJQSxJQUFNRSxXQUFXLENBQUM7QUFDakJDLE9BQU0sTUFEVztBQUVqQkMsY0FBYTtBQUZJLENBQUQsQ0FBakI7O0FBTUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQUNGLElBQUQsRUFBT0csSUFBUCxFQUFnQjtBQUNwQyxLQUFJQyxJQUFJLHlCQUFLQyxRQUFRQyxPQUFSLFFBQXFCTixJQUFyQixDQUFMLEVBQW1DRyxJQUFuQyxDQUFSO0FBQ0FDLEdBQUVHLEVBQUYsQ0FBSyxTQUFMLEVBQWdCLFVBQUNDLEdBQUQsRUFBUztBQUN4QixNQUFJQyxTQUFTLFNBQWIsRUFBd0I7QUFDdkJMLEtBQUVNLElBQUYsQ0FBTyxRQUFQO0FBQ0FDLFNBQU1YLElBQU4sRUFBWUcsSUFBWjtBQUNBO0FBQ0QsRUFMRDtBQU1BLENBUkQ7Ozs7Ozs7OztNQVdFSCxJLFFBQUFBLEk7TUFDQUMsVyxRQUFBQSxXOztBQUdETCxzQkFBVWdCLE9BQVYsTUFBcUJaLElBQXJCLEVBQ0VDLFdBREYsQ0FDY0EsV0FEZCxFQUVFWSxNQUZGLENBRVMsVUFBQ0MsT0FBRCxFQUFhO0FBQ3BCWixnQkFBYUYsSUFBYixFQUFtQixDQUFDYyxPQUFELENBQW5CO0FBQ0EsR0FKRjs7O0FBTEQsc0JBSUlmLFFBSkosOEhBSWM7QUFBQTtBQU1iOzs7Ozs7Ozs7Ozs7Ozs7O0FBRURILG9CQUFVbUIsS0FBVixDQUFnQkMsUUFBUUMsSUFBeEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBjb21tYW5kZXIgZnJvbSAnY29tbWFuZGVyJztcclxuaW1wb3J0IHBrZyBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5pbXBvcnQge1xyXG5cdGZvcmtcclxufSBmcm9tICdjaGlsZF9wcm9jZXNzJztcclxuXHJcbmNvbW1hbmRlclxyXG5cdC52ZXJzaW9uKHBrZy52ZXJzaW9uKVxyXG5cclxuXHJcbmNvbnN0IGNvbW1hbmRzID0gW3tcclxuXHRuYW1lOiAnaW5pdCcsXHJcblx0ZGVzY3JpcHRpb246ICdJbml0IGEgbnBtIHBhY2thZ2UnXHJcbn1dO1xyXG5cclxuXHJcbmNvbnN0IHN0YXJ0Q29tbWFuZCA9IChuYW1lLCBhcmdzKSA9PiB7XHJcblx0bGV0IHAgPSBmb3JrKHJlcXVpcmUucmVzb2x2ZShgLi8ke25hbWV9YCksIGFyZ3MpO1xyXG5cdHAub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XHJcblx0XHRpZiAoZGF0YSA9PT0gJ1JFU1RBUlQnKSB7XHJcblx0XHRcdHAua2lsbCgnU0lHSU5UJyk7XHJcblx0XHRcdHN0YXJ0KG5hbWUsIGFyZ3MpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5mb3IgKGNvbnN0IHtcclxuXHRcdG5hbWUsXHJcblx0XHRkZXNjcmlwdGlvblxyXG5cdH1cclxuXHRvZiBjb21tYW5kcykge1xyXG5cdGNvbW1hbmRlci5jb21tYW5kKGAke25hbWV9YClcclxuXHRcdC5kZXNjcmlwdGlvbihkZXNjcmlwdGlvbilcclxuXHRcdC5hY3Rpb24oKHBrZ05hbWUpID0+IHtcclxuXHRcdFx0c3RhcnRDb21tYW5kKG5hbWUsIFtwa2dOYW1lXSlcclxuXHRcdH0pXHJcbn1cclxuXHJcbmNvbW1hbmRlci5wYXJzZShwcm9jZXNzLmFyZ3YpOyJdfQ==