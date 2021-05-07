"use strict";var _util=require("./util"),path=require("path"),cardJsonPlugin=require("./cardJson-plugin");function parseCard(_this,source){0===source.trim().indexOf("export default")&&(source=source.replace("export default",""));var extName=path.extname(_this.resourcePath);if(".js"===extName){var eventString=source.match(/("\s*\$event\..+")|('\s*\$event\..+')/g);eventString&&eventString.forEach(function(e){source=source.replace(e,e.slice(1,-1))});var eventMatch=source.match(/\$event\..+/g);eventMatch&&eventMatch.forEach(function(e){e=(e=e.match(/,$/)?e.slice(0,-1):e).trim(),source=source.replace(e,'"'+e+'"')})}source=JSON.stringify(eval("("+source+")"));var jsonPaths=mkJsonFiles(_this);return cardJsonPlugin.compileJson(_this._compiler,"init",jsonPaths.indexJson),".js"===extName?(cardJsonPlugin.compileJson(_this._compiler,"index",jsonPaths.indexJson,JSON.parse(source).actions,"actions"),cardJsonPlugin.compileJson(_this._compiler,"data",jsonPaths.indexJson,JSON.parse(source).data,"data")):".css"===extName||".less"===extName||".sass"===extName||".scss"===extName?cardJsonPlugin.compileJson(_this._compiler,"index",jsonPaths.indexJson,JSON.parse(source),"styles"):".hml"===extName&&cardJsonPlugin.compileJson(_this._compiler,"index",jsonPaths.indexJson,JSON.parse(source),"template"),source}function mkJsonFiles(e){var s="",t=e._compiler.options.entry,r=e.resourcePath;return Object.keys(t).forEach(function(e){path.dirname(path.resolve(t[e]))===path.dirname(r)&&(s=e+".json")}),{indexJson:s=path.resolve(e._compiler.options.output.path,s)}}module.exports=function(e){if(this.cacheable&&this.cacheable(),"card"===process.env.DEVICE_LEVEL)try{e=parseCard(this,e)}catch(e){return(0,_util.logWarn)(this,[{reason:"ERROR: Failed to parse the file : "+this.resourcePath}]),"module.exports = {}"}return"module.exports = ".concat(e)};