/*!
 * parse
 * @author ydr.me
 * @create 2014-10-09 11:48
 */

'use strict';

var regFer = /<!--\s*?@fer\s*?\{\s*?-->([\s\S]*?)<!--\s*?@fer\s*?\}\s*?-->/g;
var regComments = /<!--[\s\S]*?-->/g;
var regLink = /<link[^>]*?\bhref\b\s*?=\s*?['"](.*?)['"][^>]*?>/g;
var regScript = /<script[^>]*?\bsrc\b\s*?=\s*?['"](.*?)['"][^>]*?>/g;


module.exports = function(type, string){
    var find;
    var src = [];
    var files = {
        css: [],
        js: []
    };


    while((find = regFer.exec(string))!==null){
        src.push(find[1]);
    }

    find = null;

    src.forEach(function (val) {
        val = val.replace(regComments, '');

        var f = [];

        while((find = regLink.exec(val))!==null){
            f.push(find[1]);
        }

        if(f.length){
            files.css.push(f);
        }
    });

    src.forEach(function (val) {
        val = val.replace(regComments, '');

        var f = [];

        while((find = regScript.exec(val))!==null){
            f.push(find[1]);
        }

        if(f.length){
            files.js.push(f);
        }
    });

    console.log(files);
};

// test
var html = '<!--@fer{-->' +
    '<link href="./static/css/lib/a.css">\n\n\n\n' +
    '<link href="./static/css/app/b.css">' +
    '<link href="./static/css/widget/c.css">' +
    '<!--@fer}-->' +
    '=======================================' +
    '=======================================' +
    '=======================================' +
    '=======================================' +
    '<!--@fer{-->' +
    '<link href="./static/css/1.css">' +
    '<link href="./static/css/2.css">' +
    '<link href="./static/css/3.css">' +
    '<!--@fer}-->' +
    '=======================================' +
    '=======================================' +
    '=======================================' +
    '=======================================' +
    '<!--@fer{-->' +
    '<script src="./static/js/0.js"></script>' +
    '<script src="./static/js/1.js"></script>' +
    '<script src="./static/js/2.js"></script>' +
    '<script src="./static/js/3.js"></script>' +
    '<!--@fer}-->' +
    '';


module.exports('link', html);

