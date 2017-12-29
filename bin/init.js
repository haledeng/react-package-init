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
	(0, _fs.rename)(_path2.default.join(cwd, name, '.ignore'), _path2.default.join(cwd, name, '.npmignore'));
};

init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0LmpzIl0sIm5hbWVzIjpbIm5hbWUiLCJyZXF1aXJlIiwicHJvY2VzcyIsImFyZ3YiLCJzbGljZSIsIl8iLCJjd2QiLCJpbml0Iiwic3luYyIsImpvaW4iLCJfX2Rpcm5hbWUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBTEEsSUFBTUEsT0FBT0MsUUFBUSxVQUFSLEVBQW9CQyxRQUFRQyxJQUFSLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBcEIsRUFBMkNDLENBQTNDLENBQTZDLENBQTdDLENBQWI7OztBQVNBLElBQUlDLE1BQU1KLFFBQVFJLEdBQVIsRUFBVjs7QUFFQSxJQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNsQixtQkFBUUMsSUFBUixDQUFhLGVBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFiLEVBQWtELGVBQUtELElBQUwsQ0FBVUgsR0FBVixFQUFlTixJQUFmLENBQWxEO0FBQ0EsaUJBQU8sZUFBS1MsSUFBTCxDQUFVSCxHQUFWLEVBQWVOLElBQWYsRUFBcUIsU0FBckIsQ0FBUCxFQUF3QyxlQUFLUyxJQUFMLENBQVVILEdBQVYsRUFBZU4sSUFBZixFQUFxQixZQUFyQixDQUF4QztBQUNBLENBSEQ7O0FBS0FPIiwiZmlsZSI6ImluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYW1lID0gcmVxdWlyZSgnbWluaW1pc3QnKShwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpLl9bMF07XHJcbmltcG9ydCBjb3B5ZGlyIGZyb20gJ2NvcHktZGlyJ1xyXG5cclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5pbXBvcnQge1xyXG5cdHJlbmFtZVxyXG59IGZyb20gJ2ZzJztcclxuXHJcbmxldCBjd2QgPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuXHRjb3B5ZGlyLnN5bmMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3RlbXBsYXRlJyksIHBhdGguam9pbihjd2QsIG5hbWUpKTtcclxuXHRyZW5hbWUocGF0aC5qb2luKGN3ZCwgbmFtZSwgJy5pZ25vcmUnKSwgcGF0aC5qb2luKGN3ZCwgbmFtZSwgJy5ucG1pZ25vcmUnKSk7XHJcbn1cclxuXHJcbmluaXQoKTsiXX0=