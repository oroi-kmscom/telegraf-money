!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("ethUtil",[],r):"object"==typeof exports?exports.ethUtil=r():t.ethUtil=r()}(this,function(){return function(t){function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var e={};return r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,r,e){Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=3)}([function(t,r,e){"use strict";(function(t,n){function i(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(r){return!1}}function o(){return t.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function f(r,e){if(o()<e)throw new RangeError("Invalid typed array length");return t.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(e),r.__proto__=t.prototype):(null===r&&(r=new t(e)),r.length=e),r}function t(r,e,n){if(!(t.TYPED_ARRAY_SUPPORT||this instanceof t))return new t(r,e,n);if("number"==typeof r){if("string"==typeof e)throw Error("If encoding is specified then the first argument must be a string");return h(this,r)}return u(this,r,e,n)}function u(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?l(t,r,e,n):"string"==typeof r?c(t,r,e):g(t,r)}function s(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(0>t)throw new RangeError('"size" argument must not be negative')}function a(t,r,e,n){return s(r),r>0&&void 0!==e?"string"==typeof n?f(t,r).fill(e,n):f(t,r).fill(e):f(t,r)}function h(r,e){if(s(e),r=f(r,0>e?0:0|y(e)),!t.TYPED_ARRAY_SUPPORT)for(var n=0;e>n;++n)r[n]=0;return r}function c(r,e,n){if("string"==typeof n&&""!==n||(n="utf8"),!t.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var i=0|d(e,n);r=f(r,i);var o=r.write(e,n);return o!==i&&(r=r.slice(0,o)),r}function p(t,r){var e=0>r.length?0:0|y(r.length);t=f(t,e);for(var n=0;e>n;n+=1)t[n]=255&r[n];return t}function l(r,e,n,i){if(0>n||n>e.byteLength)throw new RangeError("'offset' is out of bounds");if(n+(i||0)>e.byteLength)throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===i?new Uint8Array(e):void 0===i?new Uint8Array(e,n):new Uint8Array(e,n,i),t.TYPED_ARRAY_SUPPORT?(r=e,r.__proto__=t.prototype):r=p(r,e),r}function g(r,e){if(t.isBuffer(e)){var n=0|y(e.length);return r=f(r,n),0===r.length?r:(e.copy(r,0,0,n),r)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||Z(e.length)?f(r,0):p(r,e);if("Buffer"===e.type&&W(e.data))return p(r,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function y(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function w(r){return+r!=r&&(r=0),t.alloc(+r)}function d(r,e){if(t.isBuffer(r))return r.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(r)||r instanceof ArrayBuffer))return r.byteLength;"string"!=typeof r&&(r=""+r);var n=r.length;if(0===n)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return K(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return X(r).length;default:if(i)return K(r).length;e=(""+e).toLowerCase(),i=!0}}function v(t,r,e){var n=!1;if((void 0===r||0>r)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),0>=e)return"";if(e>>>=0,r>>>=0,r>=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return C(this,r,e);case"utf8":case"utf-8":return x(this,r,e);case"ascii":return Y(this,r,e);case"latin1":case"binary":return I(this,r,e);case"base64":return U(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function A(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function E(r,e,n,i,o){if(0===r.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:-2147483648>n&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:r.length-1),0>n&&(n=r.length+n),r.length>n){if(0>n){if(!o)return-1;n=0}}else{if(o)return-1;n=r.length-1}if("string"==typeof e&&(e=t.from(e,i)),t.isBuffer(e))return 0===e.length?-1:b(r,e,n,i,o);if("number"==typeof e)return e=255&e,t.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(r,e,n):Uint8Array.prototype.lastIndexOf.call(r,e,n):b(r,[e],n,i,o);throw new TypeError("val must be string, number or Buffer")}function b(t,r,e,n,i){function o(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}var f=1,u=t.length,s=r.length;if(void 0!==n&&(n=(n+"").toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(2>t.length||2>r.length)return-1;f=2,u/=2,s/=2,e/=2}var a;if(i){var h=-1;for(a=e;u>a;a++)if(o(t,a)===o(r,h===-1?0:a-h)){if(h===-1&&(h=a),a-h+1===s)return h*f}else h!==-1&&(a-=a-h),h=-1}else for(e+s>u&&(e=u-s),a=e;a>=0;a--){for(var c=!0,p=0;s>p;p++)if(o(t,a+p)!==o(r,p)){c=!1;break}if(c)return a}return-1}function m(t,r,e,n){e=+e||0;var i=t.length-e;n?(n=+n,n>i&&(n=i)):n=i;var o=r.length;if(o%2!==0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var f=0;n>f;++f){var u=parseInt(r.substr(2*f,2),16);if(isNaN(u))return f;t[e+f]=u}return f}function R(t,r,e,n){return J(K(r,t.length-e),t,e,n)}function _(t,r,e,n){return J($(r),t,e,n)}function P(t,r,e,n){return _(t,r,e,n)}function T(t,r,e,n){return J(X(r),t,e,n)}function B(t,r,e,n){return J(V(r,t.length-e),t,e,n)}function U(t,r,e){return G.fromByteArray(0===r&&e===t.length?t:t.slice(r,e))}function x(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;e>i;){var o=t[i],f=null,u=o>239?4:o>223?3:o>191?2:1;if(e>=i+u){var s,a,h,c;switch(u){case 1:128>o&&(f=o);break;case 2:s=t[i+1],128===(192&s)&&(c=(31&o)<<6|63&s,c>127&&(f=c));break;case 3:s=t[i+1],a=t[i+2],128===(192&s)&&128===(192&a)&&(c=(15&o)<<12|(63&s)<<6|63&a,c>2047&&(55296>c||c>57343)&&(f=c));break;case 4:s=t[i+1],a=t[i+2],h=t[i+3],128===(192&s)&&128===(192&a)&&128===(192&h)&&(c=(15&o)<<18|(63&s)<<12|(63&a)<<6|63&h,c>65535&&1114112>c&&(f=c))}}null===f?(f=65533,u=1):f>65535&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),i+=u}return S(n)}function S(t){var r=t.length;if(tt>=r)return String.fromCharCode.apply(String,t);for(var e="",n=0;r>n;)e+=String.fromCharCode.apply(String,t.slice(n,n+=tt));return e}function Y(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;e>i;++i)n+=String.fromCharCode(127&t[i]);return n}function I(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;e>i;++i)n+=String.fromCharCode(t[i]);return n}function C(t,r,e){var n=t.length;r&&r>=0||(r=0),(!e||0>e||e>n)&&(e=n);for(var i="",o=r;e>o;++o)i+=q(t[o]);return i}function O(t,r,e){for(var n=t.slice(r,e),i="",o=0;n.length>o;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function L(t,r,e){if(t%1!==0||0>t)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function M(r,e,n,i,o,f){if(!t.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||f>e)throw new RangeError('"value" argument is out of bounds');if(n+i>r.length)throw new RangeError("Index out of range")}function D(t,r,e,n){0>r&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);o>i;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function j(t,r,e,n){0>r&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);o>i;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function k(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(0>e)throw new RangeError("Index out of range")}function N(t,r,e,n,i){return i||k(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),Q.write(t,r,e,n,23,4),e+4}function z(t,r,e,n,i){return i||k(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),Q.write(t,r,e,n,52,8),e+8}function F(t){if(t=H(t).replace(rt,""),2>t.length)return"";for(;t.length%4!==0;)t+="=";return t}function H(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function q(t){return 16>t?"0"+t.toString(16):t.toString(16)}function K(t,r){r=r||1/0;for(var e,n=t.length,i=null,o=[],f=0;n>f;++f){if(e=t.charCodeAt(f),e>55295&&57344>e){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(56320>e){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=(i-55296<<10|e-56320)+65536}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,128>e){if((r-=1)<0)break;o.push(e)}else if(2048>e){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(65536>e){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(e>=1114112)throw Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function $(t){for(var r=[],e=0;t.length>e;++e)r.push(255&t.charCodeAt(e));return r}function V(t,r){for(var e,n,i,o=[],f=0;t.length>f&&(r-=2)>=0;++f)e=t.charCodeAt(f),n=e>>8,i=e%256,o.push(i),o.push(n);return o}function X(t){return G.toByteArray(F(t))}function J(t,r,e,n){for(var i=0;n>i&&(i+e<r.length&&i<t.length);++i)r[i+e]=t[i];return i}function Z(t){return t!==t}var G=e(4),Q=e(5),W=e(6);r.Buffer=t,r.SlowBuffer=w,r.INSPECT_MAX_BYTES=50,t.TYPED_ARRAY_SUPPORT=void 0!==n.TYPED_ARRAY_SUPPORT?n.TYPED_ARRAY_SUPPORT:i(),r.kMaxLength=o(),t.poolSize=8192,t._augment=function(r){return r.__proto__=t.prototype,r},t.from=function(t,r,e){return u(null,t,r,e)},t.TYPED_ARRAY_SUPPORT&&(t.prototype.__proto__=Uint8Array.prototype,t.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&t[Symbol.species]===t&&Object.defineProperty(t,Symbol.species,{value:null,configurable:!0})),t.alloc=function(t,r,e){return a(null,t,r,e)},t.allocUnsafe=function(t){return h(null,t)},t.allocUnsafeSlow=function(t){return h(null,t)},t.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.compare=function(r,e){if(!t.isBuffer(r)||!t.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(r===e)return 0;for(var n=r.length,i=e.length,o=0,f=Math.min(n,i);f>o;++o)if(r[o]!==e[o]){n=r[o],i=e[o];break}return i>n?-1:n>i?1:0},t.isEncoding=function(t){switch((t+"").toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(r,e){if(!W(r))throw new TypeError('"list" argument must be an Array of Buffers');if(0===r.length)return t.alloc(0);var n;if(void 0===e)for(e=0,n=0;r.length>n;++n)e+=r[n].length;var i=t.allocUnsafe(e),o=0;for(n=0;r.length>n;++n){var f=r[n];if(!t.isBuffer(f))throw new TypeError('"list" argument must be an Array of Buffers');f.copy(i,o),o+=f.length}return i},t.byteLength=d,t.prototype._isBuffer=!0,t.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;t>r;r+=2)A(this,r,r+1);return this},t.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;t>r;r+=4)A(this,r,r+3),A(this,r+1,r+2);return this},t.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;t>r;r+=8)A(this,r,r+7),A(this,r+1,r+6),A(this,r+2,r+5),A(this,r+3,r+4);return this},t.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?x(this,0,t):v.apply(this,arguments)},t.prototype.equals=function(r){if(!t.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r||0===t.compare(this,r)},t.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},t.prototype.compare=function(r,e,n,i,o){if(!t.isBuffer(r))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=r?r.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),0>e||n>r.length||0>i||o>this.length)throw new RangeError("out of range index");if(i>=o&&e>=n)return 0;if(i>=o)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,i>>>=0,o>>>=0,this===r)return 0;for(var f=o-i,u=n-e,s=Math.min(f,u),a=this.slice(i,o),h=r.slice(e,n),c=0;s>c;++c)if(a[c]!==h[c]){f=a[c],u=h[c];break}return u>f?-1:f>u?1:0},t.prototype.includes=function(t,r,e){return this.indexOf(t,r,e)!==-1},t.prototype.indexOf=function(t,r,e){return E(this,t,r,e,!0)},t.prototype.lastIndexOf=function(t,r,e){return E(this,t,r,e,!1)},t.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r=0|r,isFinite(e)?(e=0|e,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(0>e||0>r)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return m(this,t,r,e);case"utf8":case"utf-8":return R(this,t,r,e);case"ascii":return _(this,t,r,e);case"latin1":case"binary":return P(this,t,r,e);case"base64":return T(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;t.prototype.slice=function(r,e){var n=this.length;r=~~r,e=void 0===e?n:~~e,0>r?(r+=n,0>r&&(r=0)):r>n&&(r=n),0>e?(e+=n,0>e&&(e=0)):e>n&&(e=n),r>e&&(e=r);var i;if(t.TYPED_ARRAY_SUPPORT)i=this.subarray(r,e),i.__proto__=t.prototype;else{var o=e-r;i=new t(o,(void 0));for(var f=0;o>f;++f)i[f]=this[f+r]}return i},t.prototype.readUIntLE=function(t,r,e){t=0|t,r=0|r,e||L(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},t.prototype.readUIntBE=function(t,r,e){t=0|t,r=0|r,e||L(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},t.prototype.readUInt8=function(t,r){return r||L(t,1,this.length),this[t]},t.prototype.readUInt16LE=function(t,r){return r||L(t,2,this.length),this[t]|this[t+1]<<8},t.prototype.readUInt16BE=function(t,r){return r||L(t,2,this.length),this[t]<<8|this[t+1]},t.prototype.readUInt32LE=function(t,r){return r||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},t.prototype.readUInt32BE=function(t,r){return r||L(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},t.prototype.readIntLE=function(t,r,e){t=0|t,r=0|r,e||L(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return i*=128,i>n||(n-=Math.pow(2,8*r)),n},t.prototype.readIntBE=function(t,r,e){t=0|t,r=0|r,e||L(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,i>o||(o-=Math.pow(2,8*r)),o},t.prototype.readInt8=function(t,r){return r||L(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},t.prototype.readInt16LE=function(t,r){r||L(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},t.prototype.readInt16BE=function(t,r){r||L(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},t.prototype.readInt32LE=function(t,r){return r||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},t.prototype.readInt32BE=function(t,r){return r||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},t.prototype.readFloatLE=function(t,r){return r||L(t,4,this.length),Q.read(this,t,!0,23,4)},t.prototype.readFloatBE=function(t,r){return r||L(t,4,this.length),Q.read(this,t,!1,23,4)},t.prototype.readDoubleLE=function(t,r){return r||L(t,8,this.length),Q.read(this,t,!0,52,8)},t.prototype.readDoubleBE=function(t,r){return r||L(t,8,this.length),Q.read(this,t,!1,52,8)},t.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r=0|r,e=0|e,!n){var i=Math.pow(2,8*e)-1;M(this,t,r,e,i,0)}var o=1,f=0;for(this[r]=255&t;++f<e&&(o*=256);)this[r+f]=t/o&255;return r+e},t.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r=0|r,e=0|e,!n){var i=Math.pow(2,8*e)-1;M(this,t,r,e,i,0)}var o=e-1,f=1;for(this[r+o]=255&t;--o>=0&&(f*=256);)this[r+o]=t/f&255;return r+e},t.prototype.writeUInt8=function(r,e,n){return r=+r,e=0|e,n||M(this,r,e,1,255,0),t.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[e]=255&r,e+1},t.prototype.writeUInt16LE=function(r,e,n){return r=+r,e=0|e,n||M(this,r,e,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[e]=255&r,this[e+1]=r>>>8):D(this,r,e,!0),e+2},t.prototype.writeUInt16BE=function(r,e,n){return r=+r,e=0|e,n||M(this,r,e,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[e]=r>>>8,this[e+1]=255&r):D(this,r,e,!1),e+2},t.prototype.writeUInt32LE=function(r,e,n){return r=+r,e=0|e,n||M(this,r,e,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=255&r):j(this,r,e,!0),e+4},t.prototype.writeUInt32BE=function(r,e,n){return r=+r,e=0|e,n||M(this,r,e,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=255&r):j(this,r,e,!1),e+4},t.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r=0|r,!n){var i=Math.pow(2,8*e-1);M(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)0>t&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},t.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r=0|r,!n){var i=Math.pow(2,8*e-1);M(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)0>t&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},t.prototype.writeInt8=function(r,e,n){return r=+r,e=0|e,n||M(this,r,e,1,127,-128),t.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),0>r&&(r=255+r+1),this[e]=255&r,e+1},t.prototype.writeInt16LE=function(r,e,n){return r=+r,e=0|e,n||M(this,r,e,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[e]=255&r,this[e+1]=r>>>8):D(this,r,e,!0),e+2},t.prototype.writeInt16BE=function(r,e,n){return r=+r,e=0|e,n||M(this,r,e,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[e]=r>>>8,this[e+1]=255&r):D(this,r,e,!1),e+2},t.prototype.writeInt32LE=function(r,e,n){return r=+r,e=0|e,n||M(this,r,e,4,2147483647,-2147483648),t.TYPED_ARRAY_SUPPORT?(this[e]=255&r,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24):j(this,r,e,!0),e+4},t.prototype.writeInt32BE=function(r,e,n){return r=+r,e=0|e,n||M(this,r,e,4,2147483647,-2147483648),0>r&&(r=4294967295+r+1),t.TYPED_ARRAY_SUPPORT?(this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=255&r):j(this,r,e,!1),e+4},t.prototype.writeFloatLE=function(t,r,e){return N(this,t,r,!0,e)},t.prototype.writeFloatBE=function(t,r,e){return N(this,t,r,!1,e)},t.prototype.writeDoubleLE=function(t,r,e){return z(this,t,r,!0,e)},t.prototype.writeDoubleBE=function(t,r,e){return z(this,t,r,!1,e)},t.prototype.copy=function(r,e,n,i){if(n||(n=0),i||0===i||(i=this.length),r.length>e||(e=r.length),e||(e=0),i>0&&n>i&&(i=n),i===n)return 0;if(0===r.length||0===this.length)return 0;if(0>e)throw new RangeError("targetStart out of bounds");if(0>n||n>=this.length)throw new RangeError("sourceStart out of bounds");if(0>i)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),i-n>r.length-e&&(i=r.length-e+n);var o,f=i-n;if(this===r&&e>n&&i>e)for(o=f-1;o>=0;--o)r[o+e]=this[o+n];else if(1e3>f||!t.TYPED_ARRAY_SUPPORT)for(o=0;f>o;++o)r[o+e]=this[o+n];else Uint8Array.prototype.set.call(r,this.subarray(n,n+f),e);return f},t.prototype.fill=function(r,e,n,i){if("string"==typeof r){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),1===r.length){var o=r.charCodeAt(0);256>o&&(r=o)}if(void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!t.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else"number"==typeof r&&(r=255&r);if(0>e||e>this.length||n>this.length)throw new RangeError("Out of range index");if(e>=n)return this;e>>>=0,n=void 0===n?this.length:n>>>0,r||(r=0);var f;if("number"==typeof r)for(f=e;n>f;++f)this[f]=r;else{var u=t.isBuffer(r)?r:K(""+new t(r,i)),s=u.length;for(f=0;n-e>f;++f)this[f+e]=u[f%s]}return this};var rt=/[^+\/0-9A-Za-z-_]/g}).call(r,e(0).Buffer,e(7))},function(t,r){t.exports=function(t){if("string"!=typeof t)throw Error("[is-hex-prefixed] value must be type 'string', is currently type "+typeof t+", while checking isHexPrefixed.");return"0x"===t.slice(0,2)}},function(t,r,e){var n=e(1);t.exports=function(t){return"string"!=typeof t?t:n(t)?t.slice(2):t}},function(t,r,e){"use strict";(function(r){function n(t){return"string"!=typeof t?t:y(t)?t:"0x"+t}function i(t){var r=t;if("string"!=typeof r)throw Error("[ethjs-util] while padding to even, value must be string, is currently "+typeof r+", while padToEven.");return r.length%2&&(r="0"+r),r}function o(t){var r=t.toString(16);return"0x"+i(r)}function f(t){var e=o(t);return new r(e.slice(2),"hex")}function u(t){if("string"!=typeof t)throw Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '"+typeof t+"'.");return r.byteLength(t,"utf8")}function s(t,r,e){if(Array.isArray(t)!==!0)throw Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '"+typeof t+"'");if(Array.isArray(r)!==!0)throw Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '"+typeof r+"'");return r[!!e&&"some"||"every"](function(r){return t.indexOf(r)>=0})}function a(t){var e=new r(i(w(t).replace(/^0+|0+$/g,"")),"hex");return e.toString("utf8")}function h(t){var r="",e=0,n=t.length;for("0x"===t.substring(0,2)&&(e=2);n>e;e+=2){var i=parseInt(t.substr(e,2),16);r+=String.fromCharCode(i)}return r}function c(t){var e=new r(t,"utf8");return"0x"+i(e.toString("hex")).replace(/^0+|0+$/g,"")}function p(t){for(var r="",e=0;t.length>e;e++){var n=t.charCodeAt(e),i=n.toString(16);r+=2>i.length?"0"+i:i}return"0x"+r}function l(t,r,e){if(!Array.isArray(t))throw Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '"+typeof t+"'");if("string"!=typeof r)throw Error("[ethjs-util] method getKeys expecting type String for input 'key' got '"+typeof r+"'.");for(var n=[],i=0;t.length>i;i++){var o=t[i][r];if(e&&!o)o="";else if("string"!=typeof o)throw Error("invalid abi");n.push(o)}return n}function g(t,r){return!("string"!=typeof t||!t.match(/^0x[0-9A-Fa-f]*$/))&&(!r||t.length===2+2*r)}var y=e(1),w=e(2);t.exports={arrayContainsArray:s,intToBuffer:f,getBinarySize:u,isHexPrefixed:y,stripHexPrefix:w,padToEven:i,intToHex:o,fromAscii:p,fromUtf8:c,toAscii:h,toUtf8:a,getKeys:l,isHexString:g,addHexPrefix:n}}).call(r,e(0).Buffer)},function(t,r){"use strict";function e(t){var r=t.length;if(r%4>0)throw Error("Invalid string. Length must be a multiple of 4");return"="===t[r-2]?2:"="===t[r-1]?1:0}function n(t){return 3*t.length/4-e(t)}function i(t){var r,n,i,o,f,u,s=t.length;f=e(t),u=new h(3*s/4-f),i=f>0?s-4:s;var c=0;for(r=0,n=0;i>r;r+=4,n+=3)o=a[t.charCodeAt(r)]<<18|a[t.charCodeAt(r+1)]<<12|a[t.charCodeAt(r+2)]<<6|a[t.charCodeAt(r+3)],u[c++]=o>>16&255,u[c++]=o>>8&255,u[c++]=255&o;return 2===f?(o=a[t.charCodeAt(r)]<<2|a[t.charCodeAt(r+1)]>>4,u[c++]=255&o):1===f&&(o=a[t.charCodeAt(r)]<<10|a[t.charCodeAt(r+1)]<<4|a[t.charCodeAt(r+2)]>>2,u[c++]=o>>8&255,u[c++]=255&o),u}function o(t){return s[t>>18&63]+s[t>>12&63]+s[t>>6&63]+s[63&t]}function f(t,r,e){for(var n,i=[],f=r;e>f;f+=3)n=(t[f]<<16)+(t[f+1]<<8)+t[f+2],i.push(o(n));return i.join("")}function u(t){for(var r,e=t.length,n=e%3,i="",o=[],u=16383,a=0,h=e-n;h>a;a+=u)o.push(f(t,a,a+u>h?h:a+u));return 1===n?(r=t[e-1],i+=s[r>>2],i+=s[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=s[r>>10],i+=s[r>>4&63],i+=s[r<<2&63],i+="="),o.push(i),o.join("")}r.byteLength=n,r.toByteArray=i,r.fromByteArray=u;for(var s=[],a=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,l=c.length;l>p;++p)s[p]=c[p],a[c.charCodeAt(p)]=p;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63},function(t,r){r.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,s=(1<<u)-1,a=s>>1,h=-7,c=e?i-1:0,p=e?-1:1,l=t[r+c];for(c+=p,o=l&(1<<-h)-1,l>>=-h,h+=u;h>0;o=256*o+t[r+c],c+=p,h-=8);for(f=o&(1<<-h)-1,o>>=-h,h+=n;h>0;f=256*f+t[r+c],c+=p,h-=8);if(0===o)o=1-a;else{if(o===s)return f?NaN:(l?-1:1)*(1/0);f+=Math.pow(2,n),o-=a}return(l?-1:1)*f*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var f,u,s,a=8*o-i-1,h=(1<<a)-1,c=h>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:o-1,g=n?1:-1,y=0>r||0===r&&0>1/r?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=h):(f=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-f))<1&&(f--,s*=2),r+=1>f+c?p*Math.pow(2,1-c):p/s,2>r*s||(f++,s/=2),h>f+c?1>f+c?(u=r*Math.pow(2,c-1)*Math.pow(2,i),f=0):(u=(r*s-1)*Math.pow(2,i),f+=c):(u=0,f=h));i>=8;t[e+l]=255&u,l+=g,u/=256,i-=8);for(f=f<<i|u,a+=i;a>0;t[e+l]=255&f,l+=g,f/=256,a-=8);t[e+l-g]|=128*y}},function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},function(t,r){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(e=window)}t.exports=e}])});