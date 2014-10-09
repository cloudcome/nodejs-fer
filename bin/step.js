/*!
 * step
 * @author ydr.me
 * @create 2014-10-09 11:32
 */

'use strict';

var steps = require('../libs/cli-steps.js');
var config = [];

steps(3, function(step, value){
    switch (step){
        case 0:
            console.log('请输入你的姓名：');
            break;
        case 1:
            config.push(value);
            console.log('请输入你的性别（默认为男）：');
            break;
        case 2:
            config.push(value);
            console.log('请输入你的年龄：');
            break;
        case 3:
            config.push(value);
            console.log('你叫%s，性别为%s，今年%s岁', config[0], config[1], config[2]);
            break;
    }
});
