// module.exports = function(content) {
//     console.log('md content', content)
//     // var callback = this.async();
//     // callback(null, a)
//     // 这个 loader 的功能是把源模块转化为字符串交给 require 的调用方
//     return 'module.exports = ' + JSON.stringify('<div>' + content + '</div>');
// }

"use strict";

const marked = require("marked");
const loaderUtils = require("loader-utils");

module.exports = function (markdown) {
    // merge params and default config
    const options = loaderUtils.getOptions(this);

    this.cacheable();

    marked.setOptions(options);

    return marked(markdown);
};
