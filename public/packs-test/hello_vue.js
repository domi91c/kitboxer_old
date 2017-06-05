/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs-test/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      message: "Hello Vue!"
    };
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1)
}
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(0),
  /* template */
  __webpack_require__(4),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-36dbeda7",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/domi91c/Kitboxer/app/javascript/packs/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36dbeda7", Component.options)
  } else {
    hotAPI.reload("data-v-36dbeda7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.message))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-36dbeda7", module.exports)
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! FileAPI 2.0.21 - BSD | git://github.com/mailru/FileAPI.git
 * FileAPI — a set of  javascript tools for working with files. Multiupload, drag'n'drop and chunked file upload. Images: crop, resize and auto orientation by EXIF.
 */

/*
 * JavaScript Canvas to Blob 2.0.5
 * https://github.com/blueimp/JavaScript-Canvas-to-Blob
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on stackoverflow user Stoive's code snippet:
 * http://stackoverflow.com/q/4998908
 */

/*jslint nomen: true, regexp: true */
/*global window, atob, Blob, ArrayBuffer, Uint8Array */

(function (window) {
    'use strict';
    var CanvasPrototype = window.HTMLCanvasElement &&
            window.HTMLCanvasElement.prototype,
        hasBlobConstructor = window.Blob && (function () {
            try {
                return Boolean(new Blob());
            } catch (e) {
                return false;
            }
        }()),
        hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array &&
            (function () {
                try {
                    return new Blob([new Uint8Array(100)]).size === 100;
                } catch (e) {
                    return false;
                }
            }()),
        BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder ||
            window.MozBlobBuilder || window.MSBlobBuilder,
        dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window.atob &&
            window.ArrayBuffer && window.Uint8Array && function (dataURI) {
                var byteString,
                    arrayBuffer,
                    intArray,
                    i,
                    mimeString,
                    bb;
                if (dataURI.split(',')[0].indexOf('base64') >= 0) {
                    // Convert base64 to raw binary data held in a string:
                    byteString = atob(dataURI.split(',')[1]);
                } else {
                    // Convert base64/URLEncoded data component to raw binary data:
                    byteString = decodeURIComponent(dataURI.split(',')[1]);
                }
                // Write the bytes of the string to an ArrayBuffer:
                arrayBuffer = new ArrayBuffer(byteString.length);
                intArray = new Uint8Array(arrayBuffer);
                for (i = 0; i < byteString.length; i += 1) {
                    intArray[i] = byteString.charCodeAt(i);
                }
                // Separate out the mime component:
                mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
                // Write the ArrayBuffer (or ArrayBufferView) to a blob:
                if (hasBlobConstructor) {
                    return new Blob(
                        [hasArrayBufferViewSupport ? intArray : arrayBuffer],
                        {type: mimeString}
                    );
                }
                bb = new BlobBuilder();
                bb.append(arrayBuffer);
                return bb.getBlob(mimeString);
            };
    if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
        if (CanvasPrototype.mozGetAsFile) {
            CanvasPrototype.toBlob = function (callback, type, quality) {
                if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
                    callback(dataURLtoBlob(this.toDataURL(type, quality)));
                } else {
                    callback(this.mozGetAsFile('blob', type));
                }
            };
        } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
            CanvasPrototype.toBlob = function (callback, type, quality) {
                callback(dataURLtoBlob(this.toDataURL(type, quality)));
            };
        }
    }
    window.dataURLtoBlob = dataURLtoBlob;
})(window);

/*jslint evil: true */
/*global window, URL, webkitURL, ActiveXObject */

(function (window, undef){
	'use strict';

	var
		gid = 1,
		noop = function (){},

		document = window.document,
		doctype = document.doctype || {},
		userAgent = window.navigator.userAgent,
		safari = /safari\//i.test(userAgent) && !/chrome\//i.test(userAgent),
		iemobile = /iemobile\//i.test(userAgent),
		insecureChrome = !safari && /chrome\//i.test(userAgent) && window.location.protocol === 'http:',

		// https://github.com/blueimp/JavaScript-Load-Image/blob/master/load-image.js#L48
		apiURL = (window.createObjectURL && window) || (window.URL && URL.revokeObjectURL && URL) || (window.webkitURL && webkitURL),

		Blob = window.Blob,
		File = window.File,
		FileReader = window.FileReader,
		FormData = window.FormData,


		XMLHttpRequest = window.XMLHttpRequest,
		jQuery = window.jQuery,

		html5 =    !!(File && (FileReader && (window.Uint8Array || FormData || XMLHttpRequest.prototype.sendAsBinary)))
				&& !(safari && /windows/i.test(userAgent) && !iemobile), // BugFix: https://github.com/mailru/FileAPI/issues/25

		cors = html5 && ('withCredentials' in (new XMLHttpRequest)),

		chunked = html5 && !!Blob && !!(Blob.prototype.webkitSlice || Blob.prototype.mozSlice || Blob.prototype.slice),

		normalize = ('' + ''.normalize).indexOf('[native code]') > 0,

		// https://github.com/blueimp/JavaScript-Canvas-to-Blob
		dataURLtoBlob = window.dataURLtoBlob,


		_rimg = /img/i,
		_rcanvas = /canvas/i,
		_rimgcanvas = /img|canvas/i,
		_rinput = /input/i,
		_rdata = /^data:[^,]+,/,

		_toString = {}.toString,
		_supportConsoleLog,
		_supportConsoleLogApply,


		Math = window.Math,

		_SIZE_CONST = function (pow){
			pow = new window.Number(Math.pow(1024, pow));
			pow.from = function (sz){ return Math.round(sz * this); };
			return	pow;
		},

		_elEvents = {}, // element event listeners
		_infoReader = [], // list of file info processors

		_readerEvents = 'abort progress error load loadend',
		_xhrPropsExport = 'status statusText readyState response responseXML responseText responseBody'.split(' '),

		currentTarget = 'currentTarget', // for minimize
		preventDefault = 'preventDefault', // and this too

		_isArray = function (ar) {
			return	ar && ('length' in ar);
		},

		/**
		 * Iterate over a object or array
		 */
		_each = function (obj, fn, ctx){
			if( obj ){
				if( _isArray(obj) ){
					for( var i = 0, n = obj.length; i < n; i++ ){
						if( i in obj ){
							fn.call(ctx, obj[i], i, obj);
						}
					}
				}
				else {
					for( var key in obj ){
						if( obj.hasOwnProperty(key) ){
							fn.call(ctx, obj[key], key, obj);
						}
					}
				}
			}
		},

		/**
		 * Merge the contents of two or more objects together into the first object
		 */
		_extend = function (dst){
			var args = arguments, i = 1, _ext = function (val, key){ dst[key] = val; };
			for( ; i < args.length; i++ ){
				_each(args[i], _ext);
			}
			return  dst;
		},

		/**
		 * Add event listener
		 */
		_on = function (el, type, fn){
			if( el ){
				var uid = api.uid(el);

				if( !_elEvents[uid] ){
					_elEvents[uid] = {};
				}

				var isFileReader = (FileReader && el) && (el instanceof FileReader);
				_each(type.split(/\s+/), function (type){
					if( jQuery && !isFileReader){
						jQuery.event.add(el, type, fn);
					} else {
						if( !_elEvents[uid][type] ){
							_elEvents[uid][type] = [];
						}

						_elEvents[uid][type].push(fn);

						if( el.addEventListener ){ el.addEventListener(type, fn, false); }
						else if( el.attachEvent ){ el.attachEvent('on'+type, fn); }
						else { el['on'+type] = fn; }
					}
				});
			}
		},


		/**
		 * Remove event listener
		 */
		_off = function (el, type, fn){
			if( el ){
				var uid = api.uid(el), events = _elEvents[uid] || {};

				var isFileReader = (FileReader && el) && (el instanceof FileReader);
				_each(type.split(/\s+/), function (type){
					if( jQuery && !isFileReader){
						jQuery.event.remove(el, type, fn);
					}
					else {
						var fns = events[type] || [], i = fns.length;

						while( i-- ){
							if( fns[i] === fn ){
								fns.splice(i, 1);
								break;
							}
						}

						if( el.addEventListener ){ el.removeEventListener(type, fn, false); }
						else if( el.detachEvent ){ el.detachEvent('on'+type, fn); }
						else { el['on'+type] = null; }
					}
				});
			}
		},


		_one = function(el, type, fn){
			_on(el, type, function _(evt){
				_off(el, type, _);
				fn(evt);
			});
		},


		_fixEvent = function (evt){
			if( !evt.target ){ evt.target = window.event && window.event.srcElement || document; }
			if( evt.target.nodeType === 3 ){ evt.target = evt.target.parentNode; }
			return  evt;
		},


		_supportInputAttr = function (attr){
			var input = document.createElement('input');
			input.setAttribute('type', "file");
			return attr in input;
		},


		/**
		 * FileAPI (core object)
		 */
		api = {
			version: '2.0.21',

			cors: false,
			html5: true,
			media: false,
			formData: true,
			multiPassResize: true,
			insecureChrome: insecureChrome,

			debug: false,
			pingUrl: false,
			multiFlash: false,
			flashAbortTimeout: 0,
			withCredentials: true,

			staticPath: './dist/',

			flashUrl: 0, // @default: './FileAPI.flash.swf'
			flashImageUrl: 0, // @default: './FileAPI.flash.image.swf'

			postNameConcat: function (name, idx){
				return	name + (idx != null ? '['+ idx +']' : '');
			},

			ext2mime: {
				  jpg:	'image/jpeg'
				, tif:	'image/tiff'
				, txt:	'text/plain'
			},

			// Fallback for flash
			accept: {
				  'image/*': 'art bm bmp dwg dxf cbr cbz fif fpx gif ico iefs jfif jpe jpeg jpg jps jut mcf nap nif pbm pcx pgm pict pm png pnm qif qtif ras rast rf rp svf tga tif tiff xbm xbm xpm xwd'
				, 'audio/*': 'm4a flac aac rm mpa wav wma ogg mp3 mp2 m3u mod amf dmf dsm far gdm imf it m15 med okt s3m stm sfx ult uni xm sid ac3 dts cue aif aiff wpl ape mac mpc mpp shn wv nsf spc gym adplug adx dsp adp ymf ast afc hps xs'
				, 'video/*': 'm4v 3gp nsv ts ty strm rm rmvb m3u ifo mov qt divx xvid bivx vob nrg img iso pva wmv asf asx ogm m2v avi bin dat dvr-ms mpg mpeg mp4 mkv avc vp3 svq3 nuv viv dv fli flv wpl'
			},

			uploadRetry : 0,
			networkDownRetryTimeout : 5000, // milliseconds, don't flood when network is down

			chunkSize : 0,
			chunkUploadRetry : 0,
			chunkNetworkDownRetryTimeout : 2000, // milliseconds, don't flood when network is down

			KB: _SIZE_CONST(1),
			MB: _SIZE_CONST(2),
			GB: _SIZE_CONST(3),
			TB: _SIZE_CONST(4),

			EMPTY_PNG: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=',

			expando: 'fileapi' + (new Date).getTime(),

			uid: function (obj){
				return	obj
					? (obj[api.expando] = obj[api.expando] || api.uid())
					: (++gid, api.expando + gid)
				;
			},

			log: function (){
				if( api.debug && _supportConsoleLog ){
					if( _supportConsoleLogApply ){
						console.log.apply(console, arguments);
					}
					else {
						console.log([].join.call(arguments, ' '));
					}
				}
			},

			/**
			 * Create new image
			 *
			 * @param {String} [src]
			 * @param {Function} [fn]   1. error -- boolean, 2. img -- Image element
			 * @returns {HTMLElement}
			 */
			newImage: function (src, fn){
				var img = document.createElement('img');
				if( fn ){
					api.event.one(img, 'error load', function (evt){
						fn(evt.type == 'error', img);
						img = null;
					});
				}
				img.src = src;
				return	img;
			},

			/**
			 * Get XHR
			 * @returns {XMLHttpRequest}
			 */
			getXHR: function (){
				var xhr;

				if( XMLHttpRequest ){
					xhr = new XMLHttpRequest;
				}
				else if( window.ActiveXObject ){
					try {
						xhr = new ActiveXObject('MSXML2.XMLHttp.3.0');
					} catch (e) {
						xhr = new ActiveXObject('Microsoft.XMLHTTP');
					}
				}

				return  xhr;
			},

			isArray: _isArray,

			support: {
				dnd:     cors && ('ondrop' in document.createElement('div')),
				cors:    cors,
				html5:   html5,
				chunked: chunked,
				dataURI: true,
				accept:   _supportInputAttr('accept'),
				multiple: _supportInputAttr('multiple')
			},

			event: {
				  on: _on
				, off: _off
				, one: _one
				, fix: _fixEvent
			},


			throttle: function(fn, delay) {
				var id, args;

				return function _throttle(){
					args = arguments;

					if( !id ){
						fn.apply(window, args);
						id = setTimeout(function (){
							id = 0;
							fn.apply(window, args);
						}, delay);
					}
				};
			},


			F: function (){},


			parseJSON: function (str){
				var json;
				if( window.JSON && JSON.parse ){
					json = JSON.parse(str);
				}
				else {
					json = (new Function('return ('+str.replace(/([\r\n])/g, '\\$1')+');'))();
				}
				return json;
			},


			trim: function (str){
				str = String(str);
				return	str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
			},

			/**
			 * Simple Defer
			 * @return	{Object}
			 */
			defer: function (){
				var
					  list = []
					, result
					, error
					, defer = {
						resolve: function (err, res){
							defer.resolve = noop;
							error	= err || false;
							result	= res;

							while( res = list.shift() ){
								res(error, result);
							}
						},

						then: function (fn){
							if( error !== undef ){
								fn(error, result);
							} else {
								list.push(fn);
							}
						}
				};

				return	defer;
			},

			queue: function (fn){
				var
					  _idx = 0
					, _length = 0
					, _fail = false
					, _end = false
					, queue = {
						inc: function (){
							_length++;
						},

						next: function (){
							_idx++;
							setTimeout(queue.check, 0);
						},

						check: function (){
							(_idx >= _length) && !_fail && queue.end();
						},

						isFail: function (){
							return _fail;
						},

						fail: function (){
							!_fail && fn(_fail = true);
						},

						end: function (){
							if( !_end ){
								_end = true;
								fn();
							}
						}
					}
				;
				return queue;
			},


			/**
			 * For each object
			 *
			 * @param	{Object|Array}	obj
			 * @param	{Function}		fn
			 * @param	{*}				[ctx]
			 */
			each: _each,


			/**
			 * Async for
			 * @param {Array} array
			 * @param {Function} callback
			 */
			afor: function (array, callback){
				var i = 0, n = array.length;

				if( _isArray(array) && n-- ){
					(function _next(){
						callback(n != i && _next, array[i], i++);
					})();
				}
				else {
					callback(false);
				}
			},


			/**
			 * Merge the contents of two or more objects together into the first object
			 *
			 * @param	{Object}	dst
			 * @return	{Object}
			 */
			extend: _extend,


			/**
			 * Is file?
			 * @param  {File}  file
			 * @return {Boolean}
			 */
			isFile: function (file){
				return _toString.call(file) === '[object File]';
			},


			/**
			 * Is blob?
			 * @param   {Blob}  blob
			 * @returns {Boolean}
			 */
			isBlob: function (blob) {
				return this.isFile(blob) || (_toString.call(blob) === '[object Blob]');
			},


			/**
			 * Is canvas element
			 *
			 * @param	{HTMLElement}	el
			 * @return	{Boolean}
			 */
			isCanvas: function (el){
				return	el && _rcanvas.test(el.nodeName);
			},


			getFilesFilter: function (filter){
				filter = typeof filter == 'string' ? filter : (filter.getAttribute && filter.getAttribute('accept') || '');
				return	filter ? new RegExp('('+ filter.replace(/\./g, '\\.').replace(/,/g, '|') +')$', 'i') : /./;
			},



			/**
			 * Read as DataURL
			 *
			 * @param {File|Element} file
			 * @param {Function} fn
			 */
			readAsDataURL: function (file, fn){
				if( api.isCanvas(file) ){
					_emit(file, fn, 'load', api.toDataURL(file));
				}
				else {
					_readAs(file, fn, 'DataURL');
				}
			},


			/**
			 * Read as Binary string
			 *
			 * @param {File} file
			 * @param {Function} fn
			 */
			readAsBinaryString: function (file, fn){
				if( _hasSupportReadAs('BinaryString') ){
					_readAs(file, fn, 'BinaryString');
				} else {
					// Hello IE10!
					_readAs(file, function (evt){
						if( evt.type == 'load' ){
							try {
								// dataURL -> binaryString
								evt.result = api.toBinaryString(evt.result);
							} catch (e){
								evt.type = 'error';
								evt.message = e.toString();
							}
						}
						fn(evt);
					}, 'DataURL');
				}
			},


			/**
			 * Read as ArrayBuffer
			 *
			 * @param {File} file
			 * @param {Function} fn
			 */
			readAsArrayBuffer: function(file, fn){
				_readAs(file, fn, 'ArrayBuffer');
			},


			/**
			 * Read as text
			 *
			 * @param {File} file
			 * @param {String} encoding
			 * @param {Function} [fn]
			 */
			readAsText: function(file, encoding, fn){
				if( !fn ){
					fn	= encoding;
					encoding = 'utf-8';
				}

				_readAs(file, fn, 'Text', encoding);
			},


			/**
			 * Convert image or canvas to DataURL
			 *
			 * @param   {Element}  el      Image or Canvas element
			 * @param   {String}   [type]  mime-type
			 * @return  {String}
			 */
			toDataURL: function (el, type){
				if( typeof el == 'string' ){
					return  el;
				}
				else if( el.toDataURL ){
					return  el.toDataURL(type || 'image/png');
				}
			},


			/**
			 * Canvert string, image or canvas to binary string
			 *
			 * @param   {String|Element} val
			 * @return  {String}
			 */
			toBinaryString: function (val){
				return  window.atob(api.toDataURL(val).replace(_rdata, ''));
			},


			/**
			 * Read file or DataURL as ImageElement
			 *
			 * @param	{File|String}	file
			 * @param	{Function}		fn
			 * @param	{Boolean}		[progress]
			 */
			readAsImage: function (file, fn, progress){
				if( api.isBlob(file) ){
					if( apiURL ){
						/** @namespace apiURL.createObjectURL */
						var data = apiURL.createObjectURL(file);
						if( data === undef ){
							_emit(file, fn, 'error');
						}
						else {
							api.readAsImage(data, fn, progress);
						}
					}
					else {
						api.readAsDataURL(file, function (evt){
							if( evt.type == 'load' ){
								api.readAsImage(evt.result, fn, progress);
							}
							else if( progress || evt.type == 'error' ){
								_emit(file, fn, evt, null, { loaded: evt.loaded, total: evt.total });
							}
						});
					}
				}
				else if( api.isCanvas(file) ){
					_emit(file, fn, 'load', file);
				}
				else if( _rimg.test(file.nodeName) ){
					if( file.complete ){
						_emit(file, fn, 'load', file);
					}
					else {
						var events = 'error abort load';
						_one(file, events, function _fn(evt){
							if( evt.type == 'load' && apiURL ){
								/** @namespace apiURL.revokeObjectURL */
								apiURL.revokeObjectURL(file.src);
							}

							_off(file, events, _fn);
							_emit(file, fn, evt, file);
						});
					}
				}
				else if( file.iframe ){
					_emit(file, fn, { type: 'error' });
				}
				else {
					// Created image
					var img = api.newImage(file.dataURL || file);
					api.readAsImage(img, fn, progress);
				}
			},


			/**
			 * Make file by name
			 *
			 * @param	{String}	name
			 * @return	{Array}
			 */
			checkFileObj: function (name){
				var file = {}, accept = api.accept;

				if( typeof name == 'object' ){
					file = name;
				}
				else {
					file.name = (name + '').split(/\\|\//g).pop();
				}

				if( file.type == null ){
					file.type = file.name.split('.').pop();
				}

				_each(accept, function (ext, type){
					ext = new RegExp(ext.replace(/\s/g, '|'), 'i');
					if( ext.test(file.type) || api.ext2mime[file.type] ){
						file.type = api.ext2mime[file.type] || (type.split('/')[0] +'/'+ file.type);
					}
				});

				return	file;
			},


			/**
			 * Get drop files
			 *
			 * @param	{Event}	evt
			 * @param	{Function} callback
			 */
			getDropFiles: function (evt, callback){
				var
					  files = []
					, all = []
					, items
					, dataTransfer = _getDataTransfer(evt)
					, transFiles = dataTransfer.files
					, transItems = dataTransfer.items
					, entrySupport = _isArray(transItems) && transItems[0] && _getAsEntry(transItems[0])
					, queue = api.queue(function (){ callback(files, all); })
				;

				if( entrySupport ){
					if( normalize && transFiles ){
						var
							i = transFiles.length
							, file
							, entry
						;

						items = new Array(i);
						while( i-- ){
							file = transFiles[i];

							try {
								entry = _getAsEntry(transItems[i]);
							}
							catch( err ){
								api.log('[err] getDropFiles: ', err);
								entry = null;
							}

							if( _isEntry(entry) ){
								// OSX filesystems use Unicode Normalization Form D (NFD),
								// and entry.file(…) can't read the files with the same names
								if( entry.isDirectory || (entry.isFile && file.name == file.name.normalize('NFC')) ){
									items[i] = entry;
								}
								else {
									items[i] = file;
								}
							}
							else {
								items[i] = file;
							}
						}
					}
					else {
						items = transItems;
					}
				}
				else {
					items = transFiles;
				}

				_each(items || [], function (item){
					queue.inc();

					try {
						if( entrySupport && _isEntry(item) ){
							_readEntryAsFiles(item, function (err, entryFiles, allEntries){
								if( err ){
									api.log('[err] getDropFiles:', err);
								} else {
									files.push.apply(files, entryFiles);
								}
								all.push.apply(all, allEntries);

								queue.next();
							});
						}
						else {
							_isRegularFile(item, function (yes, err){
								if( yes ){
									files.push(item);
								}
								else {
									item.error = err;
								}
								all.push(item);

								queue.next();
							});
						}
					}
					catch( err ){
						queue.next();
						api.log('[err] getDropFiles: ', err);
					}
				});

				queue.check();
			},


			/**
			 * Get file list
			 *
			 * @param	{HTMLInputElement|Event}	input
			 * @param	{String|Function}	[filter]
			 * @param	{Function}			[callback]
			 * @return	{Array|Null}
			 */
			getFiles: function (input, filter, callback){
				var files = [];

				if( callback ){
					api.filterFiles(api.getFiles(input), filter, callback);
					return null;
				}

				if( input.jquery ){
					// jQuery object
					input.each(function (){
						files = files.concat(api.getFiles(this));
					});
					input	= files;
					files	= [];
				}

				if( typeof filter == 'string' ){
					filter	= api.getFilesFilter(filter);
				}

				if( input.originalEvent ){
					// jQuery event
					input = _fixEvent(input.originalEvent);
				}
				else if( input.srcElement ){
					// IE Event
					input = _fixEvent(input);
				}


				if( input.dataTransfer ){
					// Drag'n'Drop
					input = input.dataTransfer;
				}
				else if( input.target ){
					// Event
					input = input.target;
				}

				if( input.files ){
					// Input[type="file"]
					files = input.files;

					if( !html5 ){
						// Partial support for file api
						files[0].blob	= input;
						files[0].iframe	= true;
					}
				}
				else if( !html5 && isInputFile(input) ){
					if( api.trim(input.value) ){
						files = [api.checkFileObj(input.value)];
						files[0].blob   = input;
						files[0].iframe = true;
					}
				}
				else if( _isArray(input) ){
					files	= input;
				}

				return	api.filter(files, function (file){ return !filter || filter.test(file.name); });
			},


			/**
			 * Get total file size
			 * @param	{Array}	files
			 * @return	{Number}
			 */
			getTotalSize: function (files){
				var size = 0, i = files && files.length;
				while( i-- ){
					size += files[i].size;
				}
				return	size;
			},


			/**
			 * Get image information
			 *
			 * @param	{File}		file
			 * @param	{Function}	fn
			 */
			getInfo: function (file, fn){
				var info = {}, readers = _infoReader.concat();

				if( api.isBlob(file) ){
					(function _next(){
						var reader = readers.shift();
						if( reader ){
							if( reader.test(file.type) ){
								reader(file, function (err, res){
									if( err ){
										fn(err);
									}
									else {
										_extend(info, res);
										_next();
									}
								});
							}
							else {
								_next();
							}
						}
						else {
							fn(false, info);
						}
					})();
				}
				else {
					fn('not_support_info', info);
				}
			},


			/**
			 * Add information reader
			 *
			 * @param {RegExp} mime
			 * @param {Function} fn
			 */
			addInfoReader: function (mime, fn){
				fn.test = function (type){ return mime.test(type); };
				_infoReader.push(fn);
			},


			/**
			 * Filter of array
			 *
			 * @param	{Array}		input
			 * @param	{Function}	fn
			 * @return	{Array}
			 */
			filter: function (input, fn){
				var result = [], i = 0, n = input.length, val;

				for( ; i < n; i++ ){
					if( i in input ){
						val = input[i];
						if( fn.call(val, val, i, input) ){
							result.push(val);
						}
					}
				}

				return	result;
			},


			/**
			 * Filter files
			 *
			 * @param	{Array}		files
			 * @param	{Function}	eachFn
			 * @param	{Function}	resultFn
			 */
			filterFiles: function (files, eachFn, resultFn){
				if( files.length ){
					// HTML5 or Flash
					var queue = files.concat(), file, result = [], deleted = [];

					(function _next(){
						if( queue.length ){
							file = queue.shift();
							api.getInfo(file, function (err, info){
								(eachFn(file, err ? false : info) ? result : deleted).push(file);
								_next();
							});
						}
						else {
							resultFn(result, deleted);
						}
					})();
				}
				else {
					resultFn([], files);
				}
			},


			upload: function (options){
				options = _extend({
					  jsonp: 'callback'
					, prepare: api.F
					, beforeupload: api.F
					, upload: api.F
					, fileupload: api.F
					, fileprogress: api.F
					, filecomplete: api.F
					, progress: api.F
					, complete: api.F
					, pause: api.F
					, imageOriginal: true
					, chunkSize: api.chunkSize
					, chunkUploadRetry: api.chunkUploadRetry
					, uploadRetry: api.uploadRetry
				}, options);


				if( options.imageAutoOrientation && !options.imageTransform ){
					options.imageTransform = { rotate: 'auto' };
				}


				var
					  proxyXHR = new api.XHR(options)
					, dataArray = this._getFilesDataArray(options.files)
					, _this = this
					, _total = 0
					, _loaded = 0
					, _nextFile
					, _complete = false
				;


				// calc total size
				_each(dataArray, function (data){
					_total += data.size;
				});

				// Array of files
				proxyXHR.files = [];
				_each(dataArray, function (data){
					proxyXHR.files.push(data.file);
				});

				// Set upload status props
				proxyXHR.total	= _total;
				proxyXHR.loaded	= 0;
				proxyXHR.filesLeft = dataArray.length;

				// emit "beforeupload"  event
				options.beforeupload(proxyXHR, options);

				// Upload by file
				_nextFile = function (){
					var
						  data = dataArray.shift()
						, _file = data && data.file
						, _fileLoaded = false
						, _fileOptions = _simpleClone(options)
					;

					proxyXHR.filesLeft = dataArray.length;

					if( _file && _file.name === api.expando ){
						_file = null;
						api.log('[warn] FileAPI.upload() — called without files');
					}

					if( ( proxyXHR.statusText != 'abort' || proxyXHR.current ) && data ){
						// Mark active job
						_complete = false;

						// Set current upload file
						proxyXHR.currentFile = _file;

						// Prepare file options
						if (_file && options.prepare(_file, _fileOptions) === false) {
							_nextFile.call(_this);
							return;
						}
						_fileOptions.file = _file;

						_this._getFormData(_fileOptions, data, function (form){
							if( !_loaded ){
								// emit "upload" event
								options.upload(proxyXHR, options);
							}

							var xhr = new api.XHR(_extend({}, _fileOptions, {

								upload: _file ? function (){
									// emit "fileupload" event
									options.fileupload(_file, xhr, _fileOptions);
								} : noop,

								progress: _file ? function (evt){
									if( !_fileLoaded ){
										// For ignore the double calls.
										_fileLoaded = (evt.loaded === evt.total);

										// emit "fileprogress" event
										options.fileprogress({
											  type:   'progress'
											, total:  data.total = evt.total
											, loaded: data.loaded = evt.loaded
										}, _file, xhr, _fileOptions);

										// emit "progress" event
										options.progress({
											  type:   'progress'
											, total:  _total
											, loaded: proxyXHR.loaded = (_loaded + data.size * (evt.loaded/evt.total)) || 0
										}, _file, xhr, _fileOptions);
									}
								} : noop,

								complete: function (err){
									_each(_xhrPropsExport, function (name){
										proxyXHR[name] = xhr[name];
									});

									if( _file ){
										data.total = (data.total || data.size);
										data.loaded	= data.total;

										if( !err ) {
											// emulate 100% "progress"
											this.progress(data);

											// fixed throttle event
											_fileLoaded = true;

											// bytes loaded
											_loaded += data.size; // data.size != data.total, it's desirable fix this
											proxyXHR.loaded = _loaded;
										}

										// emit "filecomplete" event
										options.filecomplete(err, xhr, _file, _fileOptions);
									}

									// upload next file
									setTimeout(function () {_nextFile.call(_this);}, 0);
								}
							})); // xhr


							// ...
							proxyXHR.abort = function (current){
								if (!current) { dataArray.length = 0; }
								this.current = current;
								xhr.abort();
							};

							// Start upload
							xhr.send(form);
						});
					}
					else {
						var successful = proxyXHR.status == 200 || proxyXHR.status == 201 || proxyXHR.status == 204;
						options.complete(successful ? false : (proxyXHR.statusText || 'error'), proxyXHR, options);
						// Mark done state
						_complete = true;
					}
				};


				// Next tick
				setTimeout(_nextFile, 0);


				// Append more files to the existing request
				// first - add them to the queue head/tail
				proxyXHR.append = function (files, first) {
					files = api._getFilesDataArray([].concat(files));

					_each(files, function (data) {
						_total += data.size;
						proxyXHR.files.push(data.file);
						if (first) {
							dataArray.unshift(data);
						} else {
							dataArray.push(data);
						}
					});

					proxyXHR.statusText = "";

					if( _complete ){
						_nextFile.call(_this);
					}
				};


				// Removes file from queue by file reference and returns it
				proxyXHR.remove = function (file) {
				    var i = dataArray.length, _file;
				    while( i-- ){
						if( dataArray[i].file == file ){
							_file = dataArray.splice(i, 1);
							_total -= _file.size;
						}
					}
					return	_file;
				};

				return proxyXHR;
			},


			_getFilesDataArray: function (data){
				var files = [], oFiles = {};

				if( isInputFile(data) ){
					var tmp = api.getFiles(data);
					oFiles[data.name || 'file'] = data.getAttribute('multiple') !== null ? tmp : tmp[0];
				}
				else if( _isArray(data) && isInputFile(data[0]) ){
					_each(data, function (input){
						oFiles[input.name || 'file'] = api.getFiles(input);
					});
				}
				else {
					oFiles = data;
				}

				_each(oFiles, function add(file, name){
					if( _isArray(file) ){
						_each(file, function (file){
							add(file, name);
						});
					}
					else if( file && (file.name || file.image) ){
						files.push({
							  name: name
							, file: file
							, size: file.size
							, total: file.size
							, loaded: 0
						});
					}
				});

				if( !files.length ){
					// Create fake `file` object
					files.push({ file: { name: api.expando } });
				}

				return	files;
			},


			_getFormData: function (options, data, fn){
				var
					  file = data.file
					, name = data.name
					, filename = file.name
					, filetype = file.type
					, trans = api.support.transform && options.imageTransform
					, Form = new api.Form
					, queue = api.queue(function (){ fn(Form); })
					, isOrignTrans = trans && _isOriginTransform(trans)
					, postNameConcat = api.postNameConcat
				;

				// Append data
				_each(options.data, function add(val, name){
					if( typeof val == 'object' ){
						_each(val, function (v, i){
							add(v, postNameConcat(name, i));
						});
					}
					else {
						Form.append(name, val);
					}
				});

				(function _addFile(file/**Object*/){
					if( file.image ){ // This is a FileAPI.Image
						queue.inc();

						file.toData(function (err, image){
							// @todo: требует рефакторинга и обработки ошибки
							if (file.file) {
								image.type = file.file.type;
								image.quality = file.matrix.quality;
								filename = file.file && file.file.name;
							}

							filename = filename || (new Date).getTime()+'.png';

							_addFile(image);
							queue.next();
						});
					}
					else if( api.Image && trans && (/^image/.test(file.type) || _rimgcanvas.test(file.nodeName)) ){
						queue.inc();

						if( isOrignTrans ){
							// Convert to array for transform function
							trans = [trans];
						}

						api.Image.transform(file, trans, options.imageAutoOrientation, function (err, images){
							if( isOrignTrans && !err ){
								if( !dataURLtoBlob && !api.flashEngine ){
									// Canvas.toBlob or Flash not supported, use multipart
									Form.multipart = true;
								}

								Form.append(name, images[0], filename,  trans[0].type || filetype);
							}
							else {
								var addOrigin = 0;

								if( !err ){
									_each(images, function (image, idx){
										if( !dataURLtoBlob && !api.flashEngine ){
											Form.multipart = true;
										}

										if( !trans[idx].postName ){
											addOrigin = 1;
										}

										Form.append(trans[idx].postName || postNameConcat(name, idx), image, filename, trans[idx].type || filetype);
									});
								}

								if( err || options.imageOriginal ){
									Form.append(postNameConcat(name, (addOrigin ? 'original' : null)), file, filename, filetype);
								}
							}

							queue.next();
						});
					}
					else if( filename !== api.expando ){
						Form.append(name, file, filename);
					}
				})(file);

				queue.check();
			},


			resetFileInput: function (inp, notRemove){
				var parent, clone;

				if( jQuery ){
					clone = jQuery(inp).clone(true).insertBefore(inp).val('')[0];
					if( !notRemove ){
						jQuery(inp).remove();
					}
				} else {
					parent  = inp.parentNode;
					clone   = parent.insertBefore(inp.cloneNode(true), inp);
					clone.value = '';

					if( !notRemove ){
						parent.removeChild(inp);
					}

					_each(_elEvents[api.uid(inp)], function (fns, type){
						_each(fns, function (fn){
							_off(inp, type, fn);
							_on(clone, type, fn);
						});
					});
				}

				return  clone;
			},


			/**
			 * Load remote file
			 *
			 * @param   {String}    url
			 * @param   {Function}  fn
			 * @return  {XMLHttpRequest}
			 */
			load: function (url, fn){
				var xhr = api.getXHR();
				if( xhr ){
					xhr.open('GET', url, true);

					if( xhr.overrideMimeType ){
				        xhr.overrideMimeType('text/plain; charset=x-user-defined');
					}

					_on(xhr, 'progress', function (/**Event*/evt){
						/** @namespace evt.lengthComputable */
						if( evt.lengthComputable ){
							fn({ type: evt.type, loaded: evt.loaded, total: evt.total }, xhr);
						}
					});

					xhr.onreadystatechange = function(){
						if( xhr.readyState == 4 ){
							xhr.onreadystatechange = null;
							if( xhr.status == 200 ){
								url = url.split('/');
								/** @namespace xhr.responseBody */
								var file = {
								      name: url[url.length-1]
									, size: xhr.getResponseHeader('Content-Length')
									, type: xhr.getResponseHeader('Content-Type')
								};
								file.dataURL = 'data:'+file.type+';base64,' + api.encode64(xhr.responseBody || xhr.responseText);
								fn({ type: 'load', result: file }, xhr);
							}
							else {
								fn({ type: 'error' }, xhr);
							}
					    }
					};
				    xhr.send(null);
				} else {
					fn({ type: 'error' });
				}

				return  xhr;
			},

			encode64: function (str){
				var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', outStr = '', i = 0;

				if( typeof str !== 'string' ){
					str	= String(str);
				}

				while( i < str.length ){
					//all three "& 0xff" added below are there to fix a known bug
					//with bytes returned by xhr.responseText
					var
						  byte1 = str.charCodeAt(i++) & 0xff
						, byte2 = str.charCodeAt(i++) & 0xff
						, byte3 = str.charCodeAt(i++) & 0xff
						, enc1 = byte1 >> 2
						, enc2 = ((byte1 & 3) << 4) | (byte2 >> 4)
						, enc3, enc4
					;

					if( isNaN(byte2) ){
						enc3 = enc4 = 64;
					} else {
						enc3 = ((byte2 & 15) << 2) | (byte3 >> 6);
						enc4 = isNaN(byte3) ? 64 : byte3 & 63;
					}

					outStr += b64.charAt(enc1) + b64.charAt(enc2) + b64.charAt(enc3) + b64.charAt(enc4);
				}

				return  outStr;
			}

		} // api
	;


	function _emit(target, fn, name, res, ext){
		var evt = {
			  type:		name.type || name
			, target:	target
			, result:	res
		};
		_extend(evt, ext);
		fn(evt);
	}


	function _hasSupportReadAs(method){
		return	FileReader && !!FileReader.prototype['readAs' + method];
	}


	function _readAs(file, fn, method, encoding){
		if( api.isBlob(file) && _hasSupportReadAs(method) ){
			var Reader = new FileReader;

			// Add event listener
			_on(Reader, _readerEvents, function _fn(evt){
				var type = evt.type;
				if( type == 'progress' ){
					_emit(file, fn, evt, evt.target.result, { loaded: evt.loaded, total: evt.total });
				}
				else if( type == 'loadend' ){
					_off(Reader, _readerEvents, _fn);
					Reader = null;
				}
				else {
					_emit(file, fn, evt, evt.target.result);
				}
			});


			try {
				// ReadAs ...
				if( encoding ){
					Reader['readAs' + method](file, encoding);
				}
				else {
					Reader['readAs' + method](file);
				}
			}
			catch (err){
				_emit(file, fn, 'error', undef, { error: err.toString() });
			}
		}
		else {
			_emit(file, fn, 'error', undef, { error: 'filreader_not_support_' + method });
		}
	}


	function _isRegularFile(file, callback){
		// http://stackoverflow.com/questions/8856628/detecting-folders-directories-in-javascript-filelist-objects
		if( !file.type && (safari || ((file.size % 4096) === 0 && (file.size <= 102400))) ){
			if( FileReader ){
				try {
					var reader = new FileReader();

					_one(reader, _readerEvents, function (evt){
						var isFile = evt.type != 'error';
						if( isFile ){
							if ( reader.readyState == null || reader.readyState === reader.LOADING ) {
								reader.abort();
							}
							callback(isFile);
						}
						else {
							callback(false, reader.error);
						}
					});

					reader.readAsDataURL(file);
				} catch( err ){
					callback(false, err);
				}
			}
			else {
				callback(null, new Error('FileReader is not supported'));
			}
		}
		else {
			callback(true);
		}
	}


	function _isEntry(item){
		return item && (item.isFile || item.isDirectory);
	}


	function _getAsEntry(item){
		var entry;
		if( item.getAsEntry ){ entry = item.getAsEntry(); }
		else if( item.webkitGetAsEntry ){ entry = item.webkitGetAsEntry(); }
		return	entry;
	}


	function _readEntryAsFiles(entry, callback){
		if( !entry ){
			// error
			var err = new Error('invalid entry');
			entry = new Object(entry);
			entry.error = err;
			callback(err.message, [], [entry]);
		}
		else if( entry.isFile ){
			// Read as file
			entry.file(function (file){
				// success
				file.fullPath = entry.fullPath;
				callback(false, [file], [file]);
			}, function (err){
				// error
				entry.error = err;
				callback('FileError.code: ' + err.code, [], [entry]);
			});
		}
		else if( entry.isDirectory ){
			var
				reader = entry.createReader()
				, firstAttempt = true
				, files = []
				, all = [entry]
			;

			var onerror = function (err){
				// error
				entry.error = err;
				callback('DirectoryError.code: ' + err.code, files, all);
			};
			var ondone = function ondone(entries){
				if( firstAttempt ){
					firstAttempt = false;
					if( !entries.length ){
						entry.error = new Error('directory is empty');
					}
				}

				// success
				if( entries.length ){
					api.afor(entries, function (next, entry){
						_readEntryAsFiles(entry, function (err, entryFiles, allEntries){
							if( !err ){
								files = files.concat(entryFiles);
							}
							all = all.concat(allEntries);

							if( next ){
								next();
							}
							else {
								reader.readEntries(ondone, onerror);
							}
						});
					});
				}
				else {
					callback(false, files, all);
				}
			};

			reader.readEntries(ondone, onerror);
		}
		else {
			_readEntryAsFiles(_getAsEntry(entry), callback);
		}
	}


	function _simpleClone(obj){
		var copy = {};
		_each(obj, function (val, key){
			if( val && (typeof val === 'object') && (val.nodeType === void 0) ){
				val = _extend({}, val);
			}
			copy[key] = val;
		});
		return	copy;
	}


	function isInputFile(el){
		return	_rinput.test(el && el.tagName);
	}


	function _getDataTransfer(evt){
		return	(evt.originalEvent || evt || '').dataTransfer || {};
	}


	function _isOriginTransform(trans){
		var key;
		for( key in trans ){
			if( trans.hasOwnProperty(key) ){
				if( !(trans[key] instanceof Object || key === 'overlay' || key === 'filter') ){
					return	true;
				}
			}
		}
		return	false;
	}


	// Add default image info reader
	api.addInfoReader(/^image/, function (file/**File*/, callback/**Function*/){
		if( !file.__dimensions ){
			var defer = file.__dimensions = api.defer();

			api.readAsImage(file, function (evt){
				var img = evt.target;
				defer.resolve(evt.type == 'load' ? false : 'error', {
					  width:  img.width
					, height: img.height
				});
                img.src = api.EMPTY_PNG;
				img = null;
			});
		}

		file.__dimensions.then(callback);
	});


	/**
	 * Drag'n'Drop special event
	 *
	 * @param	{HTMLElement}	el
	 * @param	{Function}		onHover
	 * @param	{Function}		onDrop
	 */
	api.event.dnd = function (el, onHover, onDrop){
		var _id, _type;

		if( !onDrop ){
			onDrop = onHover;
			onHover = api.F;
		}

		if( FileReader ){
			// Hover
			_on(el, 'dragenter dragleave dragover', onHover.ff = onHover.ff || function (evt){
				var
					  types = _getDataTransfer(evt).types
					, i = types && types.length
					, debounceTrigger = false
				;

				while( i-- ){
					if( ~types[i].indexOf('File') ){
						evt[preventDefault]();

						if( _type !== evt.type ){
							_type = evt.type; // Store current type of event

							if( _type != 'dragleave' ){
								onHover.call(evt[currentTarget], true, evt);
							}

							debounceTrigger = true;
						}

						break; // exit from "while"
					}
				}

				if( debounceTrigger ){
					clearTimeout(_id);
					_id = setTimeout(function (){
						onHover.call(evt[currentTarget], _type != 'dragleave', evt);
					}, 50);
				}
			});


			// Drop
			_on(el, 'drop', onDrop.ff = onDrop.ff || function (evt){
				evt[preventDefault]();

				_type = 0;

				api.getDropFiles(evt, function (files, all){
					onDrop.call(evt[currentTarget], files, all, evt);
				});
				
				onHover.call(evt[currentTarget], false, evt);
			});
		}
		else {
			api.log("Drag'n'Drop -- not supported");
		}
	};


	/**
	 * Remove drag'n'drop
	 * @param	{HTMLElement}	el
	 * @param	{Function}		onHover
	 * @param	{Function}		onDrop
	 */
	api.event.dnd.off = function (el, onHover, onDrop){
		_off(el, 'dragenter dragleave dragover', onHover.ff);
		_off(el, 'drop', onDrop.ff);
	};


	// Support jQuery
	if( jQuery && !jQuery.fn.dnd ){
		jQuery.fn.dnd = function (onHover, onDrop){
			return this.each(function (){
				api.event.dnd(this, onHover, onDrop);
			});
		};

		jQuery.fn.offdnd = function (onHover, onDrop){
			return this.each(function (){
				api.event.dnd.off(this, onHover, onDrop);
			});
		};
	}

	// @export
	window.FileAPI  = _extend(api, window.FileAPI);


	// Debug info
	api.log('FileAPI: ' + api.version);
	api.log('protocol: ' + window.location.protocol);
	api.log('doctype: [' + doctype.name + '] ' + doctype.publicId + ' ' + doctype.systemId);


	// @detect 'x-ua-compatible'
	_each(document.getElementsByTagName('meta'), function (meta){
		if( /x-ua-compatible/i.test(meta.getAttribute('http-equiv')) ){
			api.log('meta.http-equiv: ' + meta.getAttribute('content'));
		}
	});


	// Configuration
	try {
		_supportConsoleLog = !!console.log;
		_supportConsoleLogApply = !!console.log.apply;
	}
	catch (err) {}

	if( !api.flashUrl ){ api.flashUrl = api.staticPath + 'FileAPI.flash.swf'; }
	if( !api.flashImageUrl ){ api.flashImageUrl = api.staticPath + 'FileAPI.flash.image.swf'; }
	if( !api.flashWebcamUrl ){ api.flashWebcamUrl = api.staticPath + 'FileAPI.flash.camera.swf'; }
})(window, void 0);

/*global window, FileAPI, document */

(function (api, document, undef) {
	'use strict';

	var
		min = Math.min,
		round = Math.round,
		getCanvas = function () { return document.createElement('canvas'); },
		support = false,
		exifOrientation = {
			  8:	270
			, 3:	180
			, 6:	90
			, 7:	270
			, 4:	180
			, 5:	90
		}
	;

	try {
		support = getCanvas().toDataURL('image/png').indexOf('data:image/png') > -1;
	}
	catch (e){}


	function Image(file){
		if( file instanceof Image ){
			var img = new Image(file.file);
			api.extend(img.matrix, file.matrix);
			return	img;
		}
		else if( !(this instanceof Image) ){
			return	new Image(file);
		}

		this.file   = file;
		this.size   = file.size || 100;

		this.matrix	= {
			sx: 0,
			sy: 0,
			sw: 0,
			sh: 0,
			dx: 0,
			dy: 0,
			dw: 0,
			dh: 0,
			resize: 0, // min, max OR preview
			deg: 0,
			quality: 1, // jpeg quality
			filter: 0
		};
	}


	Image.prototype = {
		image: true,
		constructor: Image,

		set: function (attrs){
			api.extend(this.matrix, attrs);
			return	this;
		},

		crop: function (x, y, w, h){
			if( w === undef ){
				w	= x;
				h	= y;
				x = y = 0;
			}
			return	this.set({ sx: x, sy: y, sw: w, sh: h || w });
		},

		resize: function (w, h, strategy){
			if( /min|max|height|width/.test(h) ){
				strategy = h;
				h = w;
			}

			return	this.set({ dw: w, dh: h || w, resize: strategy });
		},

		preview: function (w, h){
			return	this.resize(w, h || w, 'preview');
		},

		rotate: function (deg){
			return	this.set({ deg: deg });
		},

		filter: function (filter){
			return	this.set({ filter: filter });
		},

		overlay: function (images){
			return	this.set({ overlay: images });
		},

		clone: function (){
			return	new Image(this);
		},

		_load: function (image, fn){
			var self = this;

			if( /img|video/i.test(image.nodeName) ){
				fn.call(self, null, image);
			}
			else {
				api.readAsImage(image, function (evt){
					fn.call(self, evt.type != 'load', evt.result);
				});
			}
		},

		_apply: function (image, fn){
			var
				  canvas = getCanvas()
				, m = this.getMatrix(image)
				, ctx = canvas.getContext('2d')
				, width = image.videoWidth || image.width
				, height = image.videoHeight || image.height
				, deg = m.deg
				, dw = m.dw
				, dh = m.dh
				, w = width
				, h = height
				, filter = m.filter
				, copy // canvas copy
				, buffer = image
				, overlay = m.overlay
				, queue = api.queue(function (){ image.src = api.EMPTY_PNG; fn(false, canvas); })
				, renderImageToCanvas = api.renderImageToCanvas
			;

			// Normalize angle
			deg = deg - Math.floor(deg/360)*360;

			// For `renderImageToCanvas`
			image._type = this.file.type;

			while(m.multipass && min(w/dw, h/dh) > 2 ){
				w = (w/2 + 0.5)|0;
				h = (h/2 + 0.5)|0;

				copy = getCanvas();
				copy.width  = w;
				copy.height = h;

				if( buffer !== image ){
					renderImageToCanvas(copy, buffer, 0, 0, buffer.width, buffer.height, 0, 0, w, h);
					buffer = copy;
				}
				else {
					buffer = copy;
					renderImageToCanvas(buffer, image, m.sx, m.sy, m.sw, m.sh, 0, 0, w, h);
					m.sx = m.sy = m.sw = m.sh = 0;
				}
			}


			canvas.width  = (deg % 180) ? dh : dw;
			canvas.height = (deg % 180) ? dw : dh;

			canvas.type = m.type;
			canvas.quality = m.quality;

			ctx.rotate(deg * Math.PI / 180);
			renderImageToCanvas(ctx.canvas, buffer
				, m.sx, m.sy
				, m.sw || buffer.width
				, m.sh || buffer.height
				, (deg == 180 || deg == 270 ? -dw : 0)
				, (deg == 90 || deg == 180 ? -dh : 0)
				, dw, dh
			);
			dw = canvas.width;
			dh = canvas.height;

			// Apply overlay
			overlay && api.each([].concat(overlay), function (over){
				queue.inc();
				// preload
				var img = new window.Image, fn = function (){
					var
						  x = over.x|0
						, y = over.y|0
						, w = over.w || img.width
						, h = over.h || img.height
						, rel = over.rel
					;

					// center  |  right  |  left
					x = (rel == 1 || rel == 4 || rel == 7) ? (dw - w + x)/2 : (rel == 2 || rel == 5 || rel == 8 ? dw - (w + x) : x);

					// center  |  bottom  |  top
					y = (rel == 3 || rel == 4 || rel == 5) ? (dh - h + y)/2 : (rel >= 6 ? dh - (h + y) : y);

					api.event.off(img, 'error load abort', fn);

					try {
						ctx.globalAlpha = over.opacity || 1;
						ctx.drawImage(img, x, y, w, h);
					}
					catch (er){}

					queue.next();
				};

				api.event.on(img, 'error load abort', fn);
				img.src = over.src;

				if( img.complete ){
					fn();
				}
			});

			if( filter ){
				queue.inc();
				Image.applyFilter(canvas, filter, queue.next);
			}

			queue.check();
		},

		getMatrix: function (image){
			var
				  m  = api.extend({}, this.matrix)
				, sw = m.sw = m.sw || image.videoWidth || image.naturalWidth ||  image.width
				, sh = m.sh = m.sh || image.videoHeight || image.naturalHeight || image.height
				, dw = m.dw = m.dw || sw
				, dh = m.dh = m.dh || sh
				, sf = sw/sh, df = dw/dh
				, strategy = m.resize
			;

			if( strategy == 'preview' ){
				if( dw != sw || dh != sh ){
					// Make preview
					var w, h;

					if( df >= sf ){
						w	= sw;
						h	= w / df;
					} else {
						h	= sh;
						w	= h * df;
					}

					if( w != sw || h != sh ){
						m.sx	= ~~((sw - w)/2);
						m.sy	= ~~((sh - h)/2);
						sw		= w;
						sh		= h;
					}
				}
			}
			else if( strategy == 'height' ){
				dw = dh * sf;
			}
			else if( strategy == 'width' ){
				dh = dw / sf;
			}
			else if( strategy ){
				if( !(sw > dw || sh > dh) ){
					dw = sw;
					dh = sh;
				}
				else if( strategy == 'min' ){
					dw = round(sf < df ? min(sw, dw) : dh*sf);
					dh = round(sf < df ? dw/sf : min(sh, dh));
				}
				else {
					dw = round(sf >= df ? min(sw, dw) : dh*sf);
					dh = round(sf >= df ? dw/sf : min(sh, dh));
				}
			}

			m.sw = sw;
			m.sh = sh;
			m.dw = dw;
			m.dh = dh;
			m.multipass = api.multiPassResize;
			return	m;
		},

		_trans: function (fn){
			this._load(this.file, function (err, image){
				if( err ){
					fn(err);
				}
				else {
					try {
						this._apply(image, fn);
					} catch (err){
						api.log('[err] FileAPI.Image.fn._apply:', err);
						fn(err);
					}
				}
			});
		},


		get: function (fn){
			if( api.support.transform ){
				var _this = this, matrix = _this.matrix;

				if( matrix.deg == 'auto' ){
					api.getInfo(_this.file, function (err, info){
						// rotate by exif orientation
						matrix.deg = exifOrientation[info && info.exif && info.exif.Orientation] || 0;
						_this._trans(fn);
					});
				}
				else {
					_this._trans(fn);
				}
			}
			else {
				fn('not_support_transform');
			}

			return this;
		},


		toData: function (fn){
			return this.get(fn);
		}

	};


	Image.exifOrientation = exifOrientation;


	Image.transform = function (file, transform, autoOrientation, fn){
		function _transform(err, img){
			// img -- info object
			var
				  images = {}
				, queue = api.queue(function (err){
					fn(err, images);
				})
			;

			if( !err ){
				api.each(transform, function (params, name){
					if( !queue.isFail() ){
						var ImgTrans = new Image(img.nodeType ? img : file), isFn = typeof params == 'function';

						if( isFn ){
							params(img, ImgTrans);
						}
						else if( params.width ){
							ImgTrans[params.preview ? 'preview' : 'resize'](params.width, params.height, params.strategy);
						}
						else {
							if( params.maxWidth && (img.width > params.maxWidth || img.height > params.maxHeight) ){
								ImgTrans.resize(params.maxWidth, params.maxHeight, 'max');
							}
						}

						if( params.crop ){
							var crop = params.crop;
							ImgTrans.crop(crop.x|0, crop.y|0, crop.w || crop.width, crop.h || crop.height);
						}

						if( params.rotate === undef && autoOrientation ){
							params.rotate = 'auto';
						}

						ImgTrans.set({ type: ImgTrans.matrix.type || params.type || file.type || 'image/png' });

						if( !isFn ){
							ImgTrans.set({
								  deg: params.rotate
								, overlay: params.overlay
								, filter: params.filter
								, quality: params.quality || 1
							});
						}

						queue.inc();
						ImgTrans.toData(function (err, image){
							if( err ){
								queue.fail();
							}
							else {
								images[name] = image;
								queue.next();
							}
						});
					}
				});
			}
			else {
				queue.fail();
			}
		}


		// @todo: Оло-ло, нужно рефакторить это место
		if( file.width ){
			_transform(false, file);
		} else {
			api.getInfo(file, _transform);
		}
	};


	// @const
	api.each(['TOP', 'CENTER', 'BOTTOM'], function (x, i){
		api.each(['LEFT', 'CENTER', 'RIGHT'], function (y, j){
			Image[x+'_'+y] = i*3 + j;
			Image[y+'_'+x] = i*3 + j;
		});
	});


	/**
	 * Trabsform element to canvas
	 *
	 * @param    {Image|HTMLVideoElement}   el
	 * @returns  {Canvas}
	 */
	Image.toCanvas = function(el){
		var canvas		= document.createElement('canvas');
		canvas.width	= el.videoWidth || el.width;
		canvas.height	= el.videoHeight || el.height;
		canvas.getContext('2d').drawImage(el, 0, 0);
		return	canvas;
	};


	/**
	 * Create image from DataURL
	 * @param  {String}  dataURL
	 * @param  {Object}  size
	 * @param  {Function}  callback
	 */
	Image.fromDataURL = function (dataURL, size, callback){
		var img = api.newImage(dataURL);
		api.extend(img, size);
		callback(img);
	};


	/**
	 * Apply filter (caman.js)
	 *
	 * @param  {Canvas|Image}   canvas
	 * @param  {String|Function}  filter
	 * @param  {Function}  doneFn
	 */
	Image.applyFilter = function (canvas, filter, doneFn){
		if( typeof filter == 'function' ){
			filter(canvas, doneFn);
		}
		else if( window.Caman ){
			// http://camanjs.com/guides/
			window.Caman(canvas.tagName == 'IMG' ? Image.toCanvas(canvas) : canvas, function (){
				if( typeof filter == 'string' ){
					this[filter]();
				}
				else {
					api.each(filter, function (val, method){
						this[method](val);
					}, this);
				}
				this.render(doneFn);
			});
		}
	};


	/**
	 * For load-image-ios.js
	 */
	api.renderImageToCanvas = function (canvas, img, sx, sy, sw, sh, dx, dy, dw, dh){
		try {
			return canvas.getContext('2d').drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
		} catch (ex) {
			api.log('renderImageToCanvas failed');
			throw ex;
		}
	};


	// @export
	api.support.canvas = api.support.transform = support;
	api.Image = Image;
})(FileAPI, document);

/*
 * JavaScript Load Image iOS scaling fixes 1.0.3
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * iOS image scaling fixes based on
 * https://github.com/stomita/ios-imagefile-megapixel
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, bitwise: true */
/*global FileAPI, window, document */

(function (factory) {
	'use strict';
	factory(FileAPI);
}(function (loadImage) {
    'use strict';

    // Only apply fixes on the iOS platform:
    if (!window.navigator || !window.navigator.platform ||
             !(/iP(hone|od|ad)/).test(window.navigator.platform)) {
        return;
    }

    var originalRenderMethod = loadImage.renderImageToCanvas;

    // Detects subsampling in JPEG images:
    loadImage.detectSubsampling = function (img) {
        var canvas,
            context;
        if (img.width * img.height > 1024 * 1024) { // only consider mexapixel images
            canvas = document.createElement('canvas');
            canvas.width = canvas.height = 1;
            context = canvas.getContext('2d');
            context.drawImage(img, -img.width + 1, 0);
            // subsampled image becomes half smaller in rendering size.
            // check alpha channel value to confirm image is covering edge pixel or not.
            // if alpha value is 0 image is not covering, hence subsampled.
            return context.getImageData(0, 0, 1, 1).data[3] === 0;
        }
        return false;
    };

    // Detects vertical squash in JPEG images:
    loadImage.detectVerticalSquash = function (img, subsampled) {
        var naturalHeight = img.naturalHeight || img.height,
            canvas = document.createElement('canvas'),
            context = canvas.getContext('2d'),
            data,
            sy,
            ey,
            py,
            alpha;
        if (subsampled) {
            naturalHeight /= 2;
        }
        canvas.width = 1;
        canvas.height = naturalHeight;
        context.drawImage(img, 0, 0);
        data = context.getImageData(0, 0, 1, naturalHeight).data;
        // search image edge pixel position in case it is squashed vertically:
        sy = 0;
        ey = naturalHeight;
        py = naturalHeight;
        while (py > sy) {
            alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
                ey = py;
            } else {
                sy = py;
            }
            py = (ey + sy) >> 1;
        }
        return (py / naturalHeight) || 1;
    };

    // Renders image to canvas while working around iOS image scaling bugs:
    // https://github.com/blueimp/JavaScript-Load-Image/issues/13
    loadImage.renderImageToCanvas = function (
        canvas,
        img,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        destX,
        destY,
        destWidth,
        destHeight
    ) {
        if (img._type === 'image/jpeg') {
            var context = canvas.getContext('2d'),
                tmpCanvas = document.createElement('canvas'),
                tileSize = 1024,
                tmpContext = tmpCanvas.getContext('2d'),
                subsampled,
                vertSquashRatio,
                tileX,
                tileY;
            tmpCanvas.width = tileSize;
            tmpCanvas.height = tileSize;
            context.save();
            subsampled = loadImage.detectSubsampling(img);
            if (subsampled) {
                sourceX /= 2;
                sourceY /= 2;
                sourceWidth /= 2;
                sourceHeight /= 2;
            }
            vertSquashRatio = loadImage.detectVerticalSquash(img, subsampled);
            if (subsampled || vertSquashRatio !== 1) {
                sourceY *= vertSquashRatio;
                destWidth = Math.ceil(tileSize * destWidth / sourceWidth);
                destHeight = Math.ceil(
                    tileSize * destHeight / sourceHeight / vertSquashRatio
                );
                destY = 0;
                tileY = 0;
                while (tileY < sourceHeight) {
                    destX = 0;
                    tileX = 0;
                    while (tileX < sourceWidth) {
                        tmpContext.clearRect(0, 0, tileSize, tileSize);
                        tmpContext.drawImage(
                            img,
                            sourceX,
                            sourceY,
                            sourceWidth,
                            sourceHeight,
                            -tileX,
                            -tileY,
                            sourceWidth,
                            sourceHeight
                        );
                        context.drawImage(
                            tmpCanvas,
                            0,
                            0,
                            tileSize,
                            tileSize,
                            destX,
                            destY,
                            destWidth,
                            destHeight
                        );
                        tileX += tileSize;
                        destX += destWidth;
                    }
                    tileY += tileSize;
                    destY += destHeight;
                }
                context.restore();
                return canvas;
            }
        }
        return originalRenderMethod(
            canvas,
            img,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            destX,
            destY,
            destWidth,
            destHeight
        );
    };

}));

/*global window, FileAPI */

(function (api, window){
	"use strict";

	var
		  document = window.document
		, FormData = window.FormData
		, Form = function (){ this.items = []; }
		, encodeURIComponent = window.encodeURIComponent
	;


	Form.prototype = {

		append: function (name, blob, file, type){
			this.items.push({
				  name: name
				, blob: blob && blob.blob || (blob == void 0 ? '' : blob)
				, file: blob && (file || blob.name)
				, type:	blob && (type || blob.type)
			});
		},

		each: function (fn){
			var i = 0, n = this.items.length;
			for( ; i < n; i++ ){
				fn.call(this, this.items[i]);
			}
		},

		toData: function (fn, options){
		    // allow chunked transfer if we have only one file to send
		    // flag is used below and in XHR._send
		    options._chunked = api.support.chunked && options.chunkSize > 0 && api.filter(this.items, function (item){ return item.file; }).length == 1;

			if( !api.support.html5 ){
				api.log('FileAPI.Form.toHtmlData');
				this.toHtmlData(fn);
			}
			else if( !api.formData || this.multipart || !FormData ){
				api.log('FileAPI.Form.toMultipartData');
				this.toMultipartData(fn);
			}
			else if( options._chunked ){
				api.log('FileAPI.Form.toPlainData');
				this.toPlainData(fn);
			}
			else {
				api.log('FileAPI.Form.toFormData');
				this.toFormData(fn);
			}
		},

		_to: function (data, complete, next, arg){
			var queue = api.queue(function (){
				complete(data);
			});

			this.each(function (file){
				try{
					next(file, data, queue, arg);
				}
				catch( err ){
					api.log('FileAPI.Form._to: ' + err.message);
					complete(err);
				}
			});

			queue.check();
		},


		toHtmlData: function (fn){
			this._to(document.createDocumentFragment(), fn, function (file, data/**DocumentFragment*/){
				var blob = file.blob, hidden;

				if( file.file ){
					api.resetFileInput(blob, true);
					// set new name
					blob.name = file.name;
					blob.disabled = false;
					data.appendChild(blob);
				}
				else {
					hidden = document.createElement('input');
					hidden.name  = file.name;
					hidden.type  = 'hidden';
					hidden.value = blob;
					data.appendChild(hidden);
				}
			});
		},

		toPlainData: function (fn){
			this._to({}, fn, function (file, data, queue){
				if( file.file ){
					data.type = file.file;
				}

				if( file.blob.toBlob ){
				    // canvas
					queue.inc();
					_convertFile(file, function (file, blob){
						data.name = file.name;
						data.file = blob;
						data.size = blob.length;
						data.type = file.type;
						queue.next();
					});
				}
				else if( file.file ){
				    // file
					data.name = file.blob.name;
					data.file = file.blob;
					data.size = file.blob.size;
					data.type = file.type;
				}
				else {
				    // additional data
				    if( !data.params ){
				        data.params = [];
				    }
				    data.params.push(encodeURIComponent(file.name) +"="+ encodeURIComponent(file.blob));
				}

				data.start = -1;
				data.end = data.file && data.file.FileAPIReadPosition || -1;
				data.retry = 0;
			});
		},

		toFormData: function (fn){
			this._to(new FormData, fn, function (file, data, queue){
				if( file.blob && file.blob.toBlob ){
					queue.inc();
					_convertFile(file, function (file, blob){
						data.append(file.name, blob, file.file);
						queue.next();
					});
				}
				else if( file.file ){
					data.append(file.name, file.blob, file.file);
				}
				else {
					data.append(file.name, file.blob);
				}

				if( file.file ){
					data.append('_'+file.name, file.file);
				}
			});
		},


		toMultipartData: function (fn){
			this._to([], fn, function (file, data, queue, boundary){
				queue.inc();
				_convertFile(file, function (file, blob){
					data.push(
						  '--_' + boundary + ('\r\nContent-Disposition: form-data; name="'+ file.name +'"'+ (file.file ? '; filename="'+ encodeURIComponent(file.file) +'"' : '')
						+ (file.file ? '\r\nContent-Type: '+ (file.type || 'application/octet-stream') : '')
						+ '\r\n'
						+ '\r\n'+ (file.file ? blob : encodeURIComponent(blob))
						+ '\r\n')
					);
					queue.next();
				}, true);
			}, api.expando);
		}
	};


	function _convertFile(file, fn, useBinaryString){
		var blob = file.blob, filename = file.file;

		if( filename ){
			if( !blob.toDataURL ){
				// The Blob is not an image.
				api.readAsBinaryString(blob, function (evt){
					if( evt.type == 'load' ){
						fn(file, evt.result);
					}
				});
				return;
			}

			var
				  mime = { 'image/jpeg': '.jpe?g', 'image/png': '.png' }
				, type = mime[file.type] ? file.type : 'image/png'
				, ext  = mime[type] || '.png'
				, quality = blob.quality || 1
			;

			if( !filename.match(new RegExp(ext+'$', 'i')) ){
				// Does not change the current extension, but add a new one.
				filename += ext.replace('?', '');
			}

			file.file = filename;
			file.type = type;

			if( !useBinaryString && blob.toBlob ){
				blob.toBlob(function (blob){
					fn(file, blob);
				}, type, quality);
			}
			else {
				fn(file, api.toBinaryString(blob.toDataURL(type, quality)));
			}
		}
		else {
			fn(file, blob);
		}
	}


	// @export
	api.Form = Form;
})(FileAPI, window);

/*global window, FileAPI, Uint8Array */

(function (window, api){
	"use strict";

	var
		  noop = function (){}
		, document = window.document

		, XHR = function (options){
			this.uid = api.uid();
			this.xhr = {
				  abort: noop
				, getResponseHeader: noop
				, getAllResponseHeaders: noop
			};
			this.options = options;
		},

		_xhrResponsePostfix = { '': 1, XML: 1, Text: 1, Body: 1 }
	;


	XHR.prototype = {
		status: 0,
		statusText: '',
		constructor: XHR,

		getResponseHeader: function (name){
			return this.xhr.getResponseHeader(name);
		},

		getAllResponseHeaders: function (){
			return this.xhr.getAllResponseHeaders() || {};
		},

		end: function (status, statusText){
			var _this = this, options = _this.options;

			_this.end		=
			_this.abort		= noop;
			_this.status	= status;

			if( statusText ){
				_this.statusText = statusText;
			}

			api.log('xhr.end:', status, statusText);
			options.complete(status == 200 || status == 201 ? false : _this.statusText || 'unknown', _this);

			if( _this.xhr && _this.xhr.node ){
				setTimeout(function (){
					var node = _this.xhr.node;
					try { node.parentNode.removeChild(node); } catch (e){}
					try { delete window[_this.uid]; } catch (e){}
					window[_this.uid] = _this.xhr.node = null;
				}, 9);
			}
		},

		abort: function (){
			this.end(0, 'abort');

			if( this.xhr ){
				this.xhr.aborted = true;
				this.xhr.abort();
			}
		},

		send: function (FormData){
			var _this = this, options = this.options;

			FormData.toData(function (data){
				if( data instanceof Error ){
					_this.end(0, data.message);
				}
				else{
					// Start uploading
					options.upload(options, _this);
					_this._send.call(_this, options, data);
				}
			}, options);
		},

		_send: function (options, data){
			var _this = this, xhr, uid = _this.uid, onLoadFnName = _this.uid + "Load", url = options.url;

			api.log('XHR._send:', data);

			if( !options.cache ){
				// No cache
				url += (~url.indexOf('?') ? '&' : '?') + api.uid();
			}

			if( data.nodeName ){
				var jsonp = options.jsonp;

				// prepare callback in GET
				url = url.replace(/([a-z]+)=(\?)/i, '$1='+uid);

				// legacy
				options.upload(options, _this);

				var
					onPostMessage = function (evt){
						if( ~url.indexOf(evt.origin) ){
							try {
								var result = api.parseJSON(evt.data);
								if( result.id == uid ){
									complete(result.status, result.statusText, result.response);
								}
							} catch( err ){
								complete(0, err.message);
							}
						}
					},

					// jsonp-callack
					complete = window[uid] = function (status, statusText, response){
						_this.readyState	= 4;
						_this.responseText	= response;
						_this.end(status, statusText);

						api.event.off(window, 'message', onPostMessage);
						window[uid] = xhr = transport = window[onLoadFnName] = null;
					}
				;

				_this.xhr.abort = function (){
					try {
						if( transport.stop ){ transport.stop(); }
						else if( transport.contentWindow.stop ){ transport.contentWindow.stop(); }
						else { transport.contentWindow.document.execCommand('Stop'); }
					}
					catch (er) {}
					complete(0, "abort");
				};

				api.event.on(window, 'message', onPostMessage);

				window[onLoadFnName] = function (){
					try {
						var
							  win = transport.contentWindow
							, doc = win.document
							, result = win.result || api.parseJSON(doc.body.innerHTML)
						;
						complete(result.status, result.statusText, result.response);
					} catch (e){
						api.log('[transport.onload]', e);
					}
				};

				xhr = document.createElement('div');
				xhr.innerHTML = '<form target="'+ uid +'" action="'+ url +'" method="POST" enctype="multipart/form-data" style="position: absolute; top: -1000px; overflow: hidden; width: 1px; height: 1px;">'
							+ '<iframe name="'+ uid +'" src="javascript:false;" onload="window.' + onLoadFnName + ' && ' + onLoadFnName + '();"></iframe>'
							+ (jsonp && (options.url.indexOf('=?') < 0) ? '<input value="'+ uid +'" name="'+jsonp+'" type="hidden"/>' : '')
							+ '</form>'
				;

				// get form-data & transport
				var
					  form = xhr.getElementsByTagName('form')[0]
					, transport = xhr.getElementsByTagName('iframe')[0]
				;

				form.appendChild(data);

				api.log(form.parentNode.innerHTML);

				// append to DOM
				document.body.appendChild(xhr);

				// keep a reference to node-transport
				_this.xhr.node = xhr;

				// send
				_this.readyState = 2; // loaded
				try {
					form.submit();
				} catch (err) {
					api.log('iframe.error: ' + err);
				}
				form = null;
			}
			else {
				// Clean url
				url = url.replace(/([a-z]+)=(\?)&?/i, '');

				// html5
				if (this.xhr && this.xhr.aborted) {
					api.log("Error: already aborted");
					return;
				}
				xhr = _this.xhr = api.getXHR();

				if (data.params) {
					url += (url.indexOf('?') < 0 ? "?" : "&") + data.params.join("&");
				}

				xhr.open('POST', url, true);

				if( api.withCredentials ){
					xhr.withCredentials = "true";
				}

				if( !options.headers || !options.headers['X-Requested-With'] ){
					xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
				}

				api.each(options.headers, function (val, key){
					xhr.setRequestHeader(key, val);
				});


				if ( options._chunked ) {
					// chunked upload
					if( xhr.upload ){
						xhr.upload.addEventListener('progress', api.throttle(function (/**Event*/evt){
							if (!data.retry) {
								// show progress only for correct chunk uploads
								options.progress({
									  type:			evt.type
									, total:		data.size
									, loaded:		data.start + evt.loaded
									, totalSize:	data.size
								}, _this, options);
							}
						}, 100), false);
					}

					xhr.onreadystatechange = function (){
						var lkb = parseInt(xhr.getResponseHeader('X-Last-Known-Byte'), 10);

						_this.status     = xhr.status;
						_this.statusText = xhr.statusText;
						_this.readyState = xhr.readyState;

						if( xhr.readyState == 4 ){
							for( var k in _xhrResponsePostfix ){
								_this['response'+k]  = xhr['response'+k];
							}
							xhr.onreadystatechange = null;

							if (!xhr.status || xhr.status - 201 > 0) {
								api.log("Error: " + xhr.status);
								// some kind of error
								// 0 - connection fail or timeout, if xhr.aborted is true, then it's not recoverable user action
								// up - server error
								if (((!xhr.status && !xhr.aborted) || 500 == xhr.status || 416 == xhr.status) && ++data.retry <= options.chunkUploadRetry) {
									// let's try again the same chunk
									// only applicable for recoverable error codes 500 && 416
									var delay = xhr.status ? 0 : api.chunkNetworkDownRetryTimeout;

									// inform about recoverable problems
									options.pause(data.file, options);

									// smart restart if server reports about the last known byte
									api.log("X-Last-Known-Byte: " + lkb);
									if (lkb) {
										data.end = lkb;
									} else {
										data.end = data.start - 1;
										if (416 == xhr.status) {
											data.end = data.end - options.chunkSize;
										}
									}

									setTimeout(function () {
										_this._send(options, data);
									}, delay);
								} else {
									// no mo retries
									_this.end(xhr.status);
								}
							} else {
								// success
								data.retry = 0;

								if (data.end == data.size - 1) {
									// finished
									_this.end(xhr.status);
								} else {
									// next chunk

									// shift position if server reports about the last known byte
									api.log("X-Last-Known-Byte: " + lkb);
									if (lkb) {
										data.end = lkb;
									}
									data.file.FileAPIReadPosition = data.end;

									setTimeout(function () {
										_this._send(options, data);
									}, 0);
								}
							}

							xhr = null;
						}
					};

					data.start = data.end + 1;
					data.end = Math.max(Math.min(data.start + options.chunkSize, data.size) - 1, data.start);

					// Retrieve a slice of file
					var
						  file = data.file
						, slice = (file.slice || file.mozSlice || file.webkitSlice).call(file, data.start, data.end + 1)
					;

					if( data.size && !slice.size ){
						setTimeout(function (){
							_this.end(-1);
						});
					} else {
						xhr.setRequestHeader("Content-Range", "bytes " + data.start + "-" + data.end + "/" + data.size);
						xhr.setRequestHeader("Content-Disposition", 'attachment; filename=' + encodeURIComponent(data.name));
						xhr.setRequestHeader("Content-Type", data.type || "application/octet-stream");

						xhr.send(slice);
					}

					file = slice = null;
				} else {
					// single piece upload
					if( xhr.upload ){
						// https://github.com/blueimp/jQuery-File-Upload/wiki/Fixing-Safari-hanging-on-very-high-speed-connections-%281Gbps%29
						xhr.upload.addEventListener('progress', api.throttle(function (/**Event*/evt){
							options.progress(evt, _this, options);
						}, 100), false);
					}

					xhr.onreadystatechange = function (){
						_this.status     = xhr.status;
						_this.statusText = xhr.statusText;
						_this.readyState = xhr.readyState;

						if( xhr.readyState == 4 ){
							for( var k in _xhrResponsePostfix ){
								_this['response'+k]  = xhr['response'+k];
							}
							xhr.onreadystatechange = null;

							if (!xhr.status || xhr.status > 201) {
								api.log("Error: " + xhr.status);
								if (((!xhr.status && !xhr.aborted) || 500 == xhr.status) && (options.retry || 0) < options.uploadRetry) {
									options.retry = (options.retry || 0) + 1;
									var delay = api.networkDownRetryTimeout;

									// inform about recoverable problems
									options.pause(options.file, options);

									setTimeout(function () {
										_this._send(options, data);
									}, delay);
								} else {
									//success
									_this.end(xhr.status);
								}
							} else {
								//success
								_this.end(xhr.status);
							}

							xhr = null;
						}
					};

					if( api.isArray(data) ){
						// multipart
						xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=_'+api.expando);
						var rawData = data.join('') +'--_'+ api.expando +'--';

						/** @namespace  xhr.sendAsBinary  https://developer.mozilla.org/ru/XMLHttpRequest#Sending_binary_content */
						if( xhr.sendAsBinary ){
							xhr.sendAsBinary(rawData);
						}
						else {
							var bytes = Array.prototype.map.call(rawData, function(c){ return c.charCodeAt(0) & 0xff; });
							xhr.send(new Uint8Array(bytes).buffer);

						}
					} else {
						// FormData
						xhr.send(data);
					}
				}
			}
		}
	};


	// @export
	api.XHR = XHR;
})(window, FileAPI);

/**
 * @class	FileAPI.Camera
 * @author	RubaXa	<trash@rubaxa.org>
 * @support	Chrome 21+, FF 18+, Opera 12+
 */

/*global window, FileAPI, jQuery */
/** @namespace LocalMediaStream -- https://developer.mozilla.org/en-US/docs/WebRTC/MediaStream_API#LocalMediaStream */
(function (window, api){
	"use strict";

	var
		URL = window.URL || window.webkitURL,

		document = window.document,
		navigator = window.navigator,

		getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia,

		html5 = !!getMedia
	;


	// Support "media"
	api.support.media = html5;


	var Camera = function (video){
		this.video = video;
	};


	Camera.prototype = {
		isActive: function (){
			return	!!this._active;
		},


		/**
		 * Start camera streaming
		 * @param	{Function}	callback
		 */
		start: function (callback){
			var
				  _this = this
				, video = _this.video
				, _successId
				, _failId
				, _complete = function (err){
					_this._active = !err;
					clearTimeout(_failId);
					clearTimeout(_successId);
//					api.event.off(video, 'loadedmetadata', _complete);
					callback && callback(err, _this);
				}
			;

			getMedia.call(navigator, { video: true }, function (stream/**LocalMediaStream*/){
				// Success
				_this.stream = stream;

//				api.event.on(video, 'loadedmetadata', function (){
//					_complete(null);
//				});

				// Set camera stream
				video.src = URL.createObjectURL(stream);

				// Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
				// See crbug.com/110938.
				_successId = setInterval(function (){
					if( _detectVideoSignal(video) ){
						_complete(null);
					}
				}, 1000);

				_failId = setTimeout(function (){
					_complete('timeout');
				}, 5000);

				// Go-go-go!
				video.play();
			}, _complete/*error*/);
		},


		/**
		 * Stop camera streaming
		 */
		stop: function (){
			try {
				this._active = false;
				this.video.pause();

				try {
					this.stream.stop();
				} catch (err) {
					api.each(this.stream.getTracks(), function (track) {
						track.stop();
					});
				}

				this.stream = null;
			} catch( err ){
				api.log('[FileAPI.Camera] stop:', err);
			}
		},


		/**
		 * Create screenshot
		 * @return {FileAPI.Camera.Shot}
		 */
		shot: function (){
			return	new Shot(this.video);
		}
	};


	/**
	 * Get camera element from container
	 *
	 * @static
	 * @param	{HTMLElement}	el
	 * @return	{Camera}
	 */
	Camera.get = function (el){
		return	new Camera(el.firstChild);
	};


	/**
	 * Publish camera element into container
	 *
	 * @static
	 * @param	{HTMLElement}	el
	 * @param	{Object}		options
	 * @param	{Function}		[callback]
	 */
	Camera.publish = function (el, options, callback){
		if( typeof options == 'function' ){
			callback = options;
			options = {};
		}

		// Dimensions of "camera"
		options = api.extend({}, {
			  width:	'100%'
			, height:	'100%'
			, start:	true
		}, options);


		if( el.jquery ){
			// Extract first element, from jQuery collection
			el = el[0];
		}


		var doneFn = function (err){
			if( err ){
				callback(err);
			}
			else {
				// Get camera
				var cam = Camera.get(el);
				if( options.start ){
					cam.start(callback);
				}
				else {
					callback(null, cam);
				}
			}
		};


		el.style.width	= _px(options.width);
		el.style.height	= _px(options.height);


		if( api.html5 && html5 && !api.insecureChrome ){
			// Create video element
			var video = document.createElement('video');

			// Set dimensions
			video.style.width	= _px(options.width);
			video.style.height	= _px(options.height);

			// Clean container
			if( window.jQuery ){
				jQuery(el).empty();
			} else {
				el.innerHTML = '';
			}

			// Add "camera" to container
			el.appendChild(video);

			// end
			doneFn();
		}
		else {
			Camera.fallback(el, options, doneFn);
		}
	};


	Camera.fallback = function (el, options, callback){
		callback('not_support_camera');
	};

	Camera.checkAlreadyCaptured = (function () {
		var	mediaDevices = navigator.mediaDevices,
			MediaStreamTrack = window.MediaStreamTrack,
			navigatorEnumerateDevices = navigator.enumerateDevices,
			enumerateDevices;

		if (mediaDevices && mediaDevices.enumerateDevices) {
			enumerateDevices = function (callback) {
				mediaDevices.enumerateDevices().then(callback);
			};
		} else if (MediaStreamTrack && MediaStreamTrack.getSources) {
			enumerateDevices = MediaStreamTrack.getSources.bind(MediaStreamTrack);
		} else if (navigatorEnumerateDevices) {
			enumerateDevices = navigatorEnumerateDevices.bind(navigator);
		} else {
			enumerateDevices = function (fn) {
				fn([]);
			};
		}

		return function (callback) {
			enumerateDevices(function (devices) {
				var deviceExists = devices.some(function (device) {
					return (device.kind === 'videoinput' || device.kind === 'video') && device.label;
				});

				callback(deviceExists);
			});
		};

	})();


	/**
	 * @class	FileAPI.Camera.Shot
	 */
	var Shot = function (video){
		var canvas	= video.nodeName ? api.Image.toCanvas(video) : video;
		var shot	= api.Image(canvas);
		shot.type	= 'image/png';
		shot.width	= canvas.width;
		shot.height	= canvas.height;
		shot.size	= canvas.width * canvas.height * 4;
		return	shot;
	};


	/**
	 * Add "px" postfix, if value is a number
	 *
	 * @private
	 * @param	{*}  val
	 * @return	{String}
	 */
	function _px(val){
		return	val >= 0 ? val + 'px' : val;
	}


	/**
	 * @private
	 * @param	{HTMLVideoElement} video
	 * @return	{Boolean}
	 */
	function _detectVideoSignal(video){
		var canvas = document.createElement('canvas'), ctx, res = false;
		try {
			ctx = canvas.getContext('2d');
			ctx.drawImage(video, 0, 0, 1, 1);
			res = ctx.getImageData(0, 0, 1, 1).data[4] != 255;
		}
		catch( err ){
			api.log('[FileAPI.Camera] detectVideoSignal:', err);
		}
		return	res;
	}


	// @export
	Camera.Shot	= Shot;
	api.Camera	= Camera;
})(window, FileAPI);

/**
 * FileAPI fallback to Flash
 *
 * @flash-developer  "Vladimir Demidov" <v.demidov@corp.mail.ru>
 */

/*global window, ActiveXObject, FileAPI */
(function (window, jQuery, api) {
	"use strict";

	var
		  document = window.document
		, location = window.location
		, navigator = window.navigator
		, _each = api.each
	;


	api.support.flash = (function (){
		var mime = navigator.mimeTypes, has = false;

		if( navigator.plugins && typeof navigator.plugins['Shockwave Flash'] == 'object' ){
			has	= navigator.plugins['Shockwave Flash'].description && !(mime && mime['application/x-shockwave-flash'] && !mime['application/x-shockwave-flash'].enabledPlugin);
		}
		else {
			try {
				has	= !!(window.ActiveXObject && new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
			}
			catch(er){
				api.log('Flash -- does not supported.');
			}
		}

		if( has && /^file:/i.test(location) ){
			api.log('[warn] Flash does not work on `file:` protocol.');
		}

		return	has;
	})();


	   api.support.flash
	&& (0
		|| !api.html5 || !api.support.html5
		|| (api.cors && !api.support.cors)
		|| (api.media && !api.support.media)
		|| api.insecureChrome
	)
	&& (function (){
		var
			  _attr  = api.uid()
			, _retry = 0
			, _files = {}
			, _rhttp = /^https?:/i

			, flash = {
				_fn: {},


				/**
				 * Initialization & preload flash object
				 */
				init: function (){
					var child = document.body && document.body.firstChild;

					if( child ){
						do {
							if( child.nodeType == 1 ){
								api.log('FlashAPI.state: awaiting');

								var dummy = document.createElement('div');

								dummy.id = '_' + _attr;

								_css(dummy, {
									  top: 1
									, right: 1
									, width: 5
									, height: 5
									, position: 'absolute'
									, zIndex: 2147483647+'' // set max zIndex
								});

								child.parentNode.insertBefore(dummy, child);
								flash.publish(dummy, _attr);

								return;
							}
						}
						while( child = child.nextSibling );
					}

					if( _retry < 10 ){
						setTimeout(flash.init, ++_retry*50);
					}
				},


				/**
				 * Publish flash-object
				 *
				 * @param {HTMLElement} el
				 * @param {String} id
				 * @param {Object} [opts]
				 */
				publish: function (el, id, opts){
					opts = opts || {};
					el.innerHTML = _makeFlashHTML({
						  id: id
						, src: _getUrl(api.flashUrl, 'r=' + api.version)
//						, src: _getUrl('http://v.demidov.boom.corp.mail.ru/uploaderfileapi/FlashFileAPI.swf?1')
						, wmode: opts.camera ? '' : 'transparent'
						, flashvars: 'callback=' + (opts.onEvent || 'FileAPI.Flash.onEvent')
							+ '&flashId='+ id
							+ '&storeKey='+ navigator.userAgent.match(/\d/ig).join('') +'_'+ api.version
							+ (flash.isReady || (api.pingUrl ? '&ping='+api.pingUrl : ''))
							+ '&timeout='+api.flashAbortTimeout
							+ (opts.camera ? '&useCamera=' + _getUrl(api.flashWebcamUrl) : '')
							+ '&debug='+(api.debug?"1":"")
					}, opts);
				},


				ready: function (){
					api.log('FlashAPI.state: ready');

					flash.ready = api.F;
					flash.isReady = true;
					flash.patch();
					flash.patchCamera && flash.patchCamera();
					api.event.on(document, 'mouseover', flash.mouseover);
					api.event.on(document, 'click', function (evt){
						if( flash.mouseover(evt) ){
							evt.preventDefault
								? evt.preventDefault()
								: (evt.returnValue = true)
							;
						}
					});
				},


				getEl: function (){
					return	document.getElementById('_'+_attr);
				},


				getWrapper: function (node){
					do {
						if( /js-fileapi-wrapper/.test(node.className) ){
							return	node;
						}
					}
					while( (node = node.parentNode) && (node !== document.body) );
				},


				mouseover: function (evt){
					var target = api.event.fix(evt).target;

					if( /input/i.test(target.nodeName) && target.type == 'file' && !target.disabled ){
						var
							  state = target.getAttribute(_attr)
							, wrapper = flash.getWrapper(target)
						;

						if( api.multiFlash ){
							// check state:
							//   p — published
							//   i — initialization
							//   r — ready
							if( state == 'i' || state == 'r' ){
								// publish fail
								return	false;
							}
							else if( state != 'p' ){
								// set "init" state
								target.setAttribute(_attr, 'i');

								var dummy = document.createElement('div');

								if( !wrapper ){
									api.log('[err] FlashAPI.mouseover: js-fileapi-wrapper not found');
									return;
								}

								_css(dummy, {
									  top:    0
									, left:   0
									, width:  target.offsetWidth
									, height: target.offsetHeight
									, zIndex: 2147483647+'' // set max zIndex
									, position: 'absolute'
								});

								wrapper.appendChild(dummy);
								flash.publish(dummy, api.uid());

								// set "publish" state
								target.setAttribute(_attr, 'p');
							}

							return	true;
						}
						else if( wrapper ){
							// Use one flash element
							var box = _getDimensions(wrapper);

							_css(flash.getEl(), box);

							// Set current input
							flash.curInp = target;
						}
					}
					else if( !/object|embed/i.test(target.nodeName) ){
						_css(flash.getEl(), { top: 1, left: 1, width: 5, height: 5 });
					}
				},

				onEvent: function (evt){
					var type = evt.type;

					if( type == 'ready' ){
						try {
							// set "ready" state
							flash.getInput(evt.flashId).setAttribute(_attr, 'r');
						} catch (e){
						}

						flash.ready();
						setTimeout(function (){ flash.mouseenter(evt); }, 50);
						return	true;
					}
					else if( type === 'ping' ){
						api.log('(flash -> js).ping:', [evt.status, evt.savedStatus], evt.error);
					}
					else if( type === 'log' ){
						api.log('(flash -> js).log:', evt.target);
					}
					else if( type in flash ){
						setTimeout(function (){
							api.log('FlashAPI.event.'+evt.type+':', evt);
							flash[type](evt);
						}, 1);
					}
				},


				mouseenter: function (evt){
					var node = flash.getInput(evt.flashId);

					if( node ){
						// Set multiple mode
						flash.cmd(evt, 'multiple', node.getAttribute('multiple') != null);


						// Set files filter
						var accept = [], exts = {};

						_each((node.getAttribute('accept') || '').split(/,\s*/), function (mime){
							api.accept[mime] && _each(api.accept[mime].split(' '), function (ext){
								exts[ext] = 1;
							});
						});

						_each(exts, function (i, ext){
							accept.push( ext );
						});

						flash.cmd(evt, 'accept', accept.length ? accept.join(',')+','+accept.join(',').toUpperCase() : '*');
					}
				},


				get: function (id){
					return	document[id] || window[id] || document.embeds[id];
				},


				getInput: function (id){
					if( api.multiFlash ){
						try {
							var node = flash.getWrapper(flash.get(id));
							if( node ){
								return node.getElementsByTagName('input')[0];
							}
						} catch (e){
							api.log('[err] Can not find "input" by flashId:', id, e);
						}
					} else {
						return	flash.curInp;
					}
				},


				select: function (evt){
					var
						  inp = flash.getInput(evt.flashId)
						, uid = api.uid(inp)
						, files = evt.target.files
						, event
					;

					_each(files, function (file){
						api.checkFileObj(file);
					});

					_files[uid] = files;

					if( document.createEvent ){
						event = document.createEvent('Event');
						event.files = files;
						event.initEvent('change', true, true);
						inp.dispatchEvent(event);
					}
					else if( jQuery ){
						jQuery(inp).trigger({ type: 'change', files: files });
					}
					else {
						event = document.createEventObject();
						event.files = files;
						inp.fireEvent('onchange', event);
					}
				},


				cmd: function (id, name, data, last){
					try {
						api.log('(js -> flash).'+name+':', data);
						return flash.get(id.flashId || id).cmd(name, data);
					} catch (err){
						api.log('(js -> flash).onError:', err.toString());
						if( !last ){
							// try again
							setTimeout(function (){ flash.cmd(id, name, data, true); }, 50);
						}
					}
				},


				patch: function (){
					api.flashEngine = true;

					// FileAPI
					_inherit(api, {
						getFiles: function (input, filter, callback){
							if( callback ){
								api.filterFiles(api.getFiles(input), filter, callback);
								return null;
							}

							var files = api.isArray(input) ? input : _files[api.uid(input.target || input.srcElement || input)];


							if( !files ){
								// Файлов нету, вызываем родительский метод
								return	this.parent.apply(this, arguments);
							}


							if( filter ){
								filter	= api.getFilesFilter(filter);
								files	= api.filter(files, function (file){ return filter.test(file.name); });
							}

							return	files;
						},


						getInfo: function (file, fn){
							if( _isHtmlFile(file) ){
								this.parent.apply(this, arguments);
							}
							else if( file.isShot ){
								fn(null, file.info = {
									width: file.width,
									height: file.height
								});
							}
							else {
								if( !file.__info ){
									var defer = file.__info = api.defer();

									flash.cmd(file, 'getFileInfo', {
										  id: file.id
										, callback: _wrap(function _(err, info){
											_unwrap(_);
											defer.resolve(err, file.info = info);
										})
									});
								}

								file.__info.then(fn);
							}
						}
					});


					// FileAPI.Image
					api.support.transform = true;
					api.Image && _inherit(api.Image.prototype, {
						get: function (fn, scaleMode){
							this.set({ scaleMode: scaleMode || 'noScale' }); // noScale, exactFit
							return this.parent(fn);
						},

						_load: function (file, fn){
							api.log('FlashAPI.Image._load:', file);

							if( _isHtmlFile(file) ){
								this.parent.apply(this, arguments);
							}
							else {
								var _this = this;
								api.getInfo(file, function (err){
									fn.call(_this, err, file);
								});
							}
						},

						_apply: function (file, fn){
							api.log('FlashAPI.Image._apply:', file);

							if( _isHtmlFile(file) ){
								this.parent.apply(this, arguments);
							}
							else {
								var m = this.getMatrix(file.info), doneFn = fn;

								flash.cmd(file, 'imageTransform', {
									  id: file.id
									, matrix: m
									, callback: _wrap(function _(err, base64){
										api.log('FlashAPI.Image._apply.callback:', err);
										_unwrap(_);

										if( err ){
											doneFn(err);
										}
										else if( !api.support.html5 && (!api.support.dataURI || base64.length > 3e4) ){
											_makeFlashImage({
												  width:	(m.deg % 180) ? m.dh : m.dw
												, height:	(m.deg % 180) ? m.dw : m.dh
												, scale:	m.scaleMode
											}, base64, doneFn);
										}
										else {
											if( m.filter ){
												doneFn = function (err, img){
													if( err ){
														fn(err);
													}
													else {
														api.Image.applyFilter(img, m.filter, function (){
															fn(err, this.canvas);
														});
													}
												};
											}

											api.newImage('data:'+ file.type +';base64,'+ base64, doneFn);
										}
									})
								});
							}
						},

						toData: function (fn){
							var
								  file = this.file
								, info = file.info
								, matrix = this.getMatrix(info)
							;
							api.log('FlashAPI.Image.toData');

							if( _isHtmlFile(file) ){
								this.parent.apply(this, arguments);
							}
							else {
								if( matrix.deg == 'auto' ){
									matrix.deg = api.Image.exifOrientation[info && info.exif && info.exif.Orientation] || 0;
								}

								fn.call(this, !file.info, {
									  id:		file.id
									, flashId:	file.flashId
									, name:		file.name
									, type:		file.type
									, matrix:	matrix
								});
							}
						}
					});


					api.Image && _inherit(api.Image, {
						fromDataURL: function (dataURL, size, callback){
							if( !api.support.dataURI || dataURL.length > 3e4 ){
								_makeFlashImage(
									  api.extend({ scale: 'exactFit' }, size)
									, dataURL.replace(/^data:[^,]+,/, '')
									, function (err, el){ callback(el); }
								);
							}
							else {
								this.parent(dataURL, size, callback);
							}
						}
					});

					// FileAPI.Form
					_inherit(api.Form.prototype, {
						toData: function (fn){
							var items = this.items, i = items.length;

							for( ; i--; ){
								if( items[i].file && _isHtmlFile(items[i].blob) ){
									return this.parent.apply(this, arguments);
								}
							}

							api.log('FlashAPI.Form.toData');
							fn(items);
						}
					});


					// FileAPI.XHR
					_inherit(api.XHR.prototype, {
						_send: function (options, formData){
							if(
								   formData.nodeName
								|| formData.append && api.support.html5
								|| api.isArray(formData) && (typeof formData[0] === 'string')
							){
								// HTML5, Multipart or IFrame
								return	this.parent.apply(this, arguments);
							}


							var
								  data = {}
								, files = {}
								, _this = this
								, flashId
								, fileId
							;

							_each(formData, function (item){
								if( item.file ){
									files[item.name] = item = _getFileDescr(item.blob);
									fileId  = item.id;
									flashId = item.flashId;
								}
								else {
									data[item.name] = item.blob;
								}
							});

							if( !fileId ){
								flashId = _attr;
							}

							if( !flashId ){
								api.log('[err] FlashAPI._send: flashId -- undefined');
								return this.parent.apply(this, arguments);
							}
							else {
								api.log('FlashAPI.XHR._send: '+ flashId +' -> '+ fileId);
							}

							_this.xhr = {
								headers: {},
								abort: function (){ flash.cmd(flashId, 'abort', { id: fileId }); },
								getResponseHeader: function (name){ return this.headers[name]; },
								getAllResponseHeaders: function (){ return this.headers; }
							};

							var queue = api.queue(function (){
								flash.cmd(flashId, 'upload', {
									  url: _getUrl(options.url.replace(/([a-z]+)=(\?)&?/i, ''))
									, data: data
									, files: fileId ? files : null
									, headers: options.headers || {}
									, callback: _wrap(function upload(evt){
										var type = evt.type, result = evt.result;

										api.log('FlashAPI.upload.'+type);

										if( type == 'progress' ){
											evt.loaded = Math.min(evt.loaded, evt.total); // @todo fixme
											evt.lengthComputable = true;
											options.progress(evt);
										}
										else if( type == 'complete' ){
											_unwrap(upload);

											if( typeof result == 'string' ){
												_this.responseText	= result.replace(/%22/g, "\"").replace(/%5c/g, "\\").replace(/%26/g, "&").replace(/%25/g, "%");
											}

											_this.end(evt.status || 200);
										}
										else if( type == 'abort' || type == 'error' ){
											_this.end(evt.status || 0, evt.message);
											_unwrap(upload);
										}
									})
								});
							});


							// #2174: FileReference.load() call while FileReference.upload() or vice versa
							_each(files, function (file){
								queue.inc();
								api.getInfo(file, queue.next);
							});

							queue.check();
						}
					});
				}
			}
		;


		function _makeFlashHTML(opts){
			return ('<object id="#id#" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+(opts.width || '100%')+'" height="'+(opts.height || '100%')+'">'
				+ '<param name="movie" value="#src#" />'
				+ '<param name="flashvars" value="#flashvars#" />'
				+ '<param name="swliveconnect" value="true" />'
				+ '<param name="allowscriptaccess" value="always" />'
				+ '<param name="allownetworking" value="all" />'
				+ '<param name="menu" value="false" />'
				+ '<param name="wmode" value="#wmode#" />'
				+ '<embed flashvars="#flashvars#" swliveconnect="true" allownetworking="all" allowscriptaccess="always" name="#id#" src="#src#" width="'+(opts.width || '100%')+'" height="'+(opts.height || '100%')+'" menu="false" wmode="transparent" type="application/x-shockwave-flash"></embed>'
				+ '</object>').replace(/#(\w+)#/ig, function (a, name){ return opts[name]; })
			;
		}


		function _css(el, css){
			if( el && el.style ){
				var key, val;
				for( key in css ){
					val = css[key];
					if( typeof val == 'number' ){
						val += 'px';
					}
					try { el.style[key] = val; } catch (e) {}
				}
			}
		}


		function _inherit(obj, methods){
			_each(methods, function (fn, name){
				var prev = obj[name];
				obj[name] = function (){
					this.parent = prev;
					return fn.apply(this, arguments);
				};
			});
		}

		function _isHtmlFile(file){
			return	file && !file.flashId;
		}

		function _wrap(fn){
			var id = fn.wid = api.uid();
			flash._fn[id] = fn;
			return	'FileAPI.Flash._fn.'+id;
		}


		function _unwrap(fn){
			try {
				flash._fn[fn.wid] = null;
				delete	flash._fn[fn.wid];
			}
			catch(e){}
		}


		function _getUrl(url, params){
			if( !_rhttp.test(url) ){
				if( /^\.\//.test(url) || '/' != url.charAt(0) ){
					var path = location.pathname;
					path = path.substr(0, path.lastIndexOf('/'));
					url = (path +'/'+ url).replace('/./', '/');
				}

				if( '//' != url.substr(0, 2) ){
					url = '//' + location.host + url;
				}

				if( !_rhttp.test(url) ){
					url = location.protocol + url;
				}
			}

			if( params ){
				url += (/\?/.test(url) ? '&' : '?') + params;
			}

			return	url;
		}


		function _makeFlashImage(opts, base64, fn){
			var
				  key
				, flashId = api.uid()
				, el = document.createElement('div')
				, attempts = 10
			;

			for( key in opts ){
				el.setAttribute(key, opts[key]);
				el[key] = opts[key];
			}

			_css(el, opts);

			opts.width	= '100%';
			opts.height	= '100%';

			el.innerHTML = _makeFlashHTML(api.extend({
				  id: flashId
				, src: _getUrl(api.flashImageUrl, 'r='+ api.uid())
				, wmode: 'opaque'
				, flashvars: 'scale='+ opts.scale +'&callback='+_wrap(function _(){
					_unwrap(_);
					if( --attempts > 0 ){
						_setImage();
					}
					return true;
				})
			}, opts));

			function _setImage(){
				try {
					// Get flash-object by id
					var img = flash.get(flashId);
					img.setImage(base64);
				} catch (e){
					api.log('[err] FlashAPI.Preview.setImage -- can not set "base64":', e);
				}
			}

			fn(false, el);
			el = null;
		}


		function _getFileDescr(file){
			return	{
				  id: file.id
				, name: file.name
				, matrix: file.matrix
				, flashId: file.flashId
			};
		}


		function _getDimensions(el){
			var
				  box = el.getBoundingClientRect()
				, body = document.body
				, docEl = (el && el.ownerDocument).documentElement
			;

			return {
				  top:		box.top + (window.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || body.clientTop || 0)
				, left:		box.left + (window.pageXOffset || docEl.scrollLeft) - (docEl.clientLeft || body.clientLeft || 0)
				, width:	box.right - box.left
				, height:	box.bottom - box.top
			};
		}

		// @export
		api.Flash = flash;


		// Check dataURI support
		api.newImage('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', function (err, img){
			api.support.dataURI = !(img.width != 1 || img.height != 1);
			flash.init();
		});
	})();
})(window, window.jQuery, FileAPI);

/**
 * FileAPI fallback to Flash
 *
 * @flash-developer  "Vladimir Demidov" <v.demidov@corp.mail.ru>
 */

/*global window, FileAPI */
(function (window, jQuery, api) {
    "use strict";

    var _each = api.each,
        _cameraQueue = [];

    if (api.support.flash && (api.media && (!api.support.media || !api.html5 || api.insecureChrome))) {
        (function () {
            function _wrap(fn) {
                var id = fn.wid = api.uid();
                api.Flash._fn[id] = fn;
                return 'FileAPI.Flash._fn.' + id;
            }


            function _unwrap(fn) {
                try {
                    api.Flash._fn[fn.wid] = null;
                    delete api.Flash._fn[fn.wid];
                } catch (e) {
                }
            }

            var flash = api.Flash;
            api.extend(api.Flash, {

                patchCamera: function () {
                    api.Camera.fallback = function (el, options, callback) {
                        var camId = api.uid();
                        api.log('FlashAPI.Camera.publish: ' + camId);
                        flash.publish(el, camId, api.extend(options, {
                            camera: true,
                            onEvent: _wrap(function _(evt) {
                                if (evt.type === 'camera') {
                                    _unwrap(_);

                                    if (evt.error) {
                                        api.log('FlashAPI.Camera.publish.error: ' + evt.error);
                                        callback(evt.error);
                                    } else {
                                        api.log('FlashAPI.Camera.publish.success: ' + camId);
                                        callback(null);
                                    }
                                }
                            })
                        }));
                    };
                    // Run
                    _each(_cameraQueue, function (args) {
                        api.Camera.fallback.apply(api.Camera, args);
                    });
                    _cameraQueue = [];


                    // FileAPI.Camera:proto
                    api.extend(api.Camera.prototype, {
                        _id: function () {
                            return this.video.id;
                        },

                        start: function (callback) {
                            var _this = this;
                            flash.cmd(this._id(), 'camera.on', {
                                callback: _wrap(function _(evt) {
                                    _unwrap(_);

                                    if (evt.error) {
                                        api.log('FlashAPI.camera.on.error: ' + evt.error);
                                        callback(evt.error, _this);
                                    } else {
                                        api.log('FlashAPI.camera.on.success: ' + _this._id());
                                        _this._active = true;
                                        callback(null, _this);
                                    }
                                })
                            });
                        },

                        stop: function () {
                            this._active = false;
                            flash.cmd(this._id(), 'camera.off');
                        },

                        shot: function () {
                            api.log('FlashAPI.Camera.shot:', this._id());

                            var shot = api.Flash.cmd(this._id(), 'shot', {});
                            shot.type = 'image/png';
                            shot.flashId = this._id();
                            shot.isShot = true;

                            return new api.Camera.Shot(shot);
                        }
                    });
                }
            });

            api.Camera.fallback = function () {
                _cameraQueue.push(arguments);
            };

        }());
    }
}(window, window.jQuery, FileAPI));
if( true ){ !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function (){ return FileAPI; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); }

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.3.3
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}
/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "test" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "test" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (true) {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    } )); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("test" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "test" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "test" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "test" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("test" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("test" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "test" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "test" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // remove reference to DOM nodes (prevents leak)
    vm.$options._parentElm = vm.$options._refElm = null;
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("test" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    if (true) {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    if (true) {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("test" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdateHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdateHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "test" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = {
  key: 1,
  ref: 1,
  slot: 1
};

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      if (isReservedProp[key] || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "test" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "test" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (true) {
      if (getter === undefined) {
        warn(
          ("No getter function has been defined for computed property \"" + key + "\"."),
          vm
        );
        getter = noop;
      }
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (true) {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var result = Object.create(null);
    var keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (isUndef(Ctor.cid)) {
    Ctor = resolveAsyncComponent(Ctor, baseCtor, context);
    if (Ctor === undefined) {
      // return nothing if this is indeed an async component
      // wait for the callback to trigger parent update.
      return
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "test" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "test" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp
) {
  if (value) {
    if (!isObject(value)) {
      "test" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];
        }
      }
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("test" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("test" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("test" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("test" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return this
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (true) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (true) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode.ssrContext
  }
});

Vue$3.version = '2.3.3';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (isUndef(value)) {
    return ''
  }
  if (typeof value === 'string') {
    return value
  }
  var res = '';
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(value[i])) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "test" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.tag === b.tag &&
    a.isComment === b.isComment &&
    isDef(a.data) === isDef(b.data) &&
    sameInputType(a, b)
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("test" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (isDef(parent)) {
      if (isDef(ref)) {
        if (ref.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("test" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // resetFileInput by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }
    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (true) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if ("test" !== 'production' &&
              typeof console !== 'undefined' &&
              !bailed
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can resetFileInput value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;



function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */


/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var str;
var index$1;

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if ((isDef(modifiers) && modifiers.number) || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("test" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("test" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "test" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("test" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("test" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("test" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("test" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

/* unused harmony default export */ var _unused_webpack_default_export = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fileapi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fileapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fileapi__);
/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.





document.addEventListener('DOMContentLoaded', function () {
  var choose = document.getElementById('choose');
  __WEBPACK_IMPORTED_MODULE_2_fileapi___default.a.event.on(choose, 'change', function (evt) {
    var files = __WEBPACK_IMPORTED_MODULE_2_fileapi___default.a.getFiles(evt); // Retrieve file list


    __WEBPACK_IMPORTED_MODULE_2_fileapi___default.a.filterFiles(files, function (file, info /**Object*/) {
      if (/^image/.test(file.type)) {
        return info.width >= 320 && info.height >= 240;
      }
      return false;
    }, function (files /**Array*/, rejected /**Array*/) {
      if (files.length) {
        // Make preview 100x100
        __WEBPACK_IMPORTED_MODULE_2_fileapi___default.a.each(files, function (file) {
          __WEBPACK_IMPORTED_MODULE_2_fileapi___default.a.Image(file).preview(100).get(function (err, img) {
            images.appendChild(img);
          });
        });

        // Uploading Files
        __WEBPACK_IMPORTED_MODULE_2_fileapi___default.a.upload({
          url: '/images',
          files: { images: files },
          progress: function progress(evt) {/* ... */},
          complete: function complete(err, xhr) {/* ... */}
        });
      }
    });
  });
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);