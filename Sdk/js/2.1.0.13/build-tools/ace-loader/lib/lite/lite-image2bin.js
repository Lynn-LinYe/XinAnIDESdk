"use strict";function asyncGeneratorStep(t,e,n,r,i,a,o){try{var s=t[a](o),p=s.value}catch(t){return void n(t)}s.done?e(p):Promise.resolve(p).then(r,i)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t){asyncGeneratorStep(a,r,i,o,s,"next",t)}function s(t){asyncGeneratorStep(a,r,i,o,s,"throw",t)}o(void 0)})}}var Jimp=require("jimp"),fs=require("fs"),_path=require("path");function img2bin(t){return _img2bin.apply(this,arguments)}function _img2bin(){return(_img2bin=_asyncToGenerator(regeneratorRuntime.mark(function t(e){var n,r,i,a,o,s,p,c,m,u,h,f,b;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Jimp.read(e);case 3:n=t.sent,r=8,i=4,a=n.bitmap.width*n.bitmap.height*i,o=new ArrayBuffer(r+a),s=new DataView(o),p=256,c=0,m=16,u=(n.bitmap.width<<c)+(n.bitmap.height<<m),h=0,s.setUint32(h,p,!0),h+=4,s.setUint32(h,u,!0),h+=4,n.scan(0,0,n.bitmap.width,n.bitmap.height,function(t,e,n){var r=this.bitmap.data[n+2];s.setUint8(h,r,!0),h+=1;var i=this.bitmap.data[n+1];s.setUint8(h,i,!0),h+=1;var a=this.bitmap.data[n+0];s.setUint8(h,a,!0),h+=1;var o=this.bitmap.data[n+3];s.setUint8(h,o,!0),h+=1}),f=e.replace(/(\.png|\.jpg|\.bmp|\.jpeg|\.BMP|\.JPG|\.PNG|\.JPEG)$/,".bin"),fs.writeFileSync(f,Buffer.from(o)),t.next=29;break;case 24:throw t.prev=24,t.t0=t.catch(0),b=_path.basename(e),console.error("[31m","Failed to convert image ".concat(b,"."),"[39m"),t.t0;case 29:case"end":return t.stop()}},t,null,[[0,24]])}))).apply(this,arguments)}module.exports=img2bin;