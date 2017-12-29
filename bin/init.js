'use strict';

var _copyDir = require('copy-dir');

var _copyDir2 = _interopRequireDefault(_copyDir);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = require('minimist')(process.argv.slice(2))._[0];


var init = function init() {
	_copyDir2.default.sync(_path2.default.join(__dirname, '../template'), _path2.default.join(process.cwd(), name));
};

init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0LmpzIl0sIm5hbWVzIjpbIm5hbWUiLCJyZXF1aXJlIiwicHJvY2VzcyIsImFyZ3YiLCJzbGljZSIsIl8iLCJpbml0Iiwic3luYyIsImpvaW4iLCJfX2Rpcm5hbWUiLCJjd2QiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBSEEsSUFBTUEsT0FBT0MsUUFBUSxVQUFSLEVBQW9CQyxRQUFRQyxJQUFSLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBcEIsRUFBMkNDLENBQTNDLENBQTZDLENBQTdDLENBQWI7OztBQUtBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxHQUFNO0FBQ2xCLG1CQUFRQyxJQUFSLENBQWEsZUFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGFBQXJCLENBQWIsRUFBa0QsZUFBS0QsSUFBTCxDQUFVTixRQUFRUSxHQUFSLEVBQVYsRUFBeUJWLElBQXpCLENBQWxEO0FBQ0EsQ0FGRDs7QUFJQU0iLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5hbWUgPSByZXF1aXJlKCdtaW5pbWlzdCcpKHByb2Nlc3MuYXJndi5zbGljZSgyKSkuX1swXTtcclxuaW1wb3J0IGNvcHlkaXIgZnJvbSAnY29weS1kaXInXHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcblx0Y29weWRpci5zeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi90ZW1wbGF0ZScpLCBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgbmFtZSkpO1xyXG59XHJcblxyXG5pbml0KCk7Il19