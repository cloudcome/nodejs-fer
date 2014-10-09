/*!
 * cli-steps
 * @author ydr.me
 * @create 2014-10-09 11:21
 */

'use strict';

var regClean = /[\r\n\t\v"']/g;

/**
 * cmd 步骤式交互
 * @param {Number} steps 总步骤，如2，即交互2次
 * @param {Function} next 执行下一步
 * @param {Function} callback 当前步骤回调<br>
 * this: global
 * arguments[0]: step 初始化回调为第0步
 * arguments[1]: value 当前步骤，用户输入值
 */
module.exports = function (steps, callback) {
    var step = 0;

    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', function () {
        var data = _clean(process.stdin.read());

        if (step <= steps) {
            callback(step, data);

            if (step === steps) {
                process.exit(1);
            } else {
                step++;
            }
        }
    });

    process.stdin.on('end', function () {
        process.stdout.write('end');
    });
};

/**
 * 清理输入data
 * @param data
 * @returns {*}
 * @private
 */
function _clean(data) {
    data = data || '';
    return data.replace(regClean, '');
}
