'use strict';

var _copyDir = require('copy-dir');

var _copyDir2 = _interopRequireDefault(_copyDir);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = require('minimist')(process.argv.slice(2))._[0];

var cwd = process.cwd();

var init = function init() {
	_copyDir2.default.sync(_path2.default.join(__dirname, '../template'), _path2.default.join(cwd, name));
	// renameIgnore();
};

var renameIgnore = function renameIgnore() {
	(0, _fs.rename)(_path2.default.join(cwd, name, '.ignore'), _path2.default.join(cwd, name, '.npmignore'));
};

init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0LmpzIl0sIm5hbWVzIjpbIm5hbWUiLCJyZXF1aXJlIiwicHJvY2VzcyIsImFyZ3YiLCJzbGljZSIsIl8iLCJjd2QiLCJpbml0IiwiY29weWRpciIsInN5bmMiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsInJlbmFtZUlnbm9yZSJdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFOQSxJQUFNQSxPQUFPQyxRQUFRLFVBQVIsRUFBb0JDLFFBQVFDLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFwQixFQUEyQ0MsQ0FBM0MsQ0FBNkMsQ0FBN0MsQ0FBYjs7QUFZQSxJQUFJQyxNQUFNSixRQUFRSSxHQUFSLEVBQVY7O0FBRUEsSUFBTUMsT0FBTyxTQUFQQSxJQUFPLEdBQU07QUFDbEJDLG1CQUFRQyxJQUFSLENBQWFDLGVBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFiLEVBQWtERixlQUFLQyxJQUFMLENBQVVMLEdBQVYsRUFBZU4sSUFBZixDQUFsRDtBQUNBO0FBQ0EsQ0FIRDs7QUFNQSxJQUFNYSxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUMxQixpQkFBT0gsZUFBS0MsSUFBTCxDQUFVTCxHQUFWLEVBQWVOLElBQWYsRUFBcUIsU0FBckIsQ0FBUCxFQUF3Q1UsZUFBS0MsSUFBTCxDQUFVTCxHQUFWLEVBQWVOLElBQWYsRUFBcUIsWUFBckIsQ0FBeEM7QUFDQSxDQUZEOztBQUlBTyIsImZpbGUiOiJpbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmFtZSA9IHJlcXVpcmUoJ21pbmltaXN0JykocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKS5fWzBdO1xyXG5cclxuaW1wb3J0IGNvcHlkaXIgZnJvbSAnY29weS1kaXInXHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmltcG9ydCB7XHJcblx0cmVuYW1lLFxyXG5cdHdyaXRlRmlsZSxcclxuXHRyZWFkRmlsZVN5bmNcclxufSBmcm9tICdmcyc7XHJcblxyXG5sZXQgY3dkID0gcHJvY2Vzcy5jd2QoKTtcclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcblx0Y29weWRpci5zeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi90ZW1wbGF0ZScpLCBwYXRoLmpvaW4oY3dkLCBuYW1lKSk7XHJcblx0Ly8gcmVuYW1lSWdub3JlKCk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgcmVuYW1lSWdub3JlID0gKCkgPT4ge1xyXG5cdHJlbmFtZShwYXRoLmpvaW4oY3dkLCBuYW1lLCAnLmlnbm9yZScpLCBwYXRoLmpvaW4oY3dkLCBuYW1lLCAnLm5wbWlnbm9yZScpKTtcclxufTtcclxuXHJcbmluaXQoKTsiXX0=