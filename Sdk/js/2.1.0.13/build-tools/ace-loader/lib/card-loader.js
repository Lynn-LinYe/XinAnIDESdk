"use strict";var _path=_interopRequireDefault(require("path")),_fs=_interopRequireDefault(require("fs")),_util=require("./util"),_parser=require("./parser");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function loader(e){this.cacheable&&this.cacheable();var t=(this._compiler.options.plugins[0].options.options.weex||{}).lang||{},s=this.resourcePath,a=s.replace(_path.default.extname(s).toString(),""),i="";i=(0,_util.getRequireString)(this,(0,_util.jsonLoaders)("template"),s);var r=findStyleFile(a);1==r.extStyle&&(i+=(0,_util.getRequireString)(this,(0,_util.jsonLoaders)("style",t[r.type]),r.styleFileName));var l=a+".js";_fs.default.existsSync(l)&&(i+=(0,_util.getRequireString)(this,(0,_util.jsonLoaders)("json"),l));var n=a.substr(0,a.lastIndexOf(_path.default.sep)+1)+"index.json",u=a.substr(0,a.lastIndexOf(_path.default.sep)+1)+"data.json";return(_fs.default.existsSync(n)||_fs.default.existsSync(u))&&(0,_util.logWarn)(this,[{reason:"ERROR: File can not be named data.json || index.json under path : "+_path.default.dirname(s)}]),(0,_parser.parseFragment)(e).element.length&&(0,_util.logWarn)(this,[{reason:"ERROR: The custom elements is not supported."}]),i}function findStyleFile(e){var t=!1,s=e+".css",a="css";return _fs.default.existsSync(s)?(t=!0,a="css"):(s=e+".less",_fs.default.existsSync(s)?(t=!0,a="less"):(s=e+".sass",_fs.default.existsSync(s)?(t=!0,a="sass"):(s=e+".scss",_fs.default.existsSync(s)?(t=!0,a="sass"):t=!1))),{extStyle:t,styleFileName:s,type:a}}module.exports=loader;