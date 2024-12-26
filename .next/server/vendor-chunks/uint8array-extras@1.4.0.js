"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uint8array-extras@1.4.0";
exports.ids = ["vendor-chunks/uint8array-extras@1.4.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/uint8array-extras@1.4.0/node_modules/uint8array-extras/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/uint8array-extras@1.4.0/node_modules/uint8array-extras/index.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   areUint8ArraysEqual: () => (/* binding */ areUint8ArraysEqual),\n/* harmony export */   assertUint8Array: () => (/* binding */ assertUint8Array),\n/* harmony export */   assertUint8ArrayOrArrayBuffer: () => (/* binding */ assertUint8ArrayOrArrayBuffer),\n/* harmony export */   base64ToString: () => (/* binding */ base64ToString),\n/* harmony export */   base64ToUint8Array: () => (/* binding */ base64ToUint8Array),\n/* harmony export */   compareUint8Arrays: () => (/* binding */ compareUint8Arrays),\n/* harmony export */   concatUint8Arrays: () => (/* binding */ concatUint8Arrays),\n/* harmony export */   getUintBE: () => (/* binding */ getUintBE),\n/* harmony export */   hexToUint8Array: () => (/* binding */ hexToUint8Array),\n/* harmony export */   includes: () => (/* binding */ includes),\n/* harmony export */   indexOf: () => (/* binding */ indexOf),\n/* harmony export */   isUint8Array: () => (/* binding */ isUint8Array),\n/* harmony export */   stringToBase64: () => (/* binding */ stringToBase64),\n/* harmony export */   stringToUint8Array: () => (/* binding */ stringToUint8Array),\n/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array),\n/* harmony export */   uint8ArrayToBase64: () => (/* binding */ uint8ArrayToBase64),\n/* harmony export */   uint8ArrayToHex: () => (/* binding */ uint8ArrayToHex),\n/* harmony export */   uint8ArrayToString: () => (/* binding */ uint8ArrayToString)\n/* harmony export */ });\nconst objectToString = Object.prototype.toString;\nconst uint8ArrayStringified = '[object Uint8Array]';\nconst arrayBufferStringified = '[object ArrayBuffer]';\n\nfunction isType(value, typeConstructor, typeStringified) {\n\tif (!value) {\n\t\treturn false;\n\t}\n\n\tif (value.constructor === typeConstructor) {\n\t\treturn true;\n\t}\n\n\treturn objectToString.call(value) === typeStringified;\n}\n\nfunction isUint8Array(value) {\n\treturn isType(value, Uint8Array, uint8ArrayStringified);\n}\n\nfunction isArrayBuffer(value) {\n\treturn isType(value, ArrayBuffer, arrayBufferStringified);\n}\n\nfunction isUint8ArrayOrArrayBuffer(value) {\n\treturn isUint8Array(value) || isArrayBuffer(value);\n}\n\nfunction assertUint8Array(value) {\n\tif (!isUint8Array(value)) {\n\t\tthrow new TypeError(`Expected \\`Uint8Array\\`, got \\`${typeof value}\\``);\n\t}\n}\n\nfunction assertUint8ArrayOrArrayBuffer(value) {\n\tif (!isUint8ArrayOrArrayBuffer(value)) {\n\t\tthrow new TypeError(`Expected \\`Uint8Array\\` or \\`ArrayBuffer\\`, got \\`${typeof value}\\``);\n\t}\n}\n\nfunction toUint8Array(value) {\n\tif (value instanceof ArrayBuffer) {\n\t\treturn new Uint8Array(value);\n\t}\n\n\tif (ArrayBuffer.isView(value)) {\n\t\treturn new Uint8Array(value.buffer, value.byteOffset, value.byteLength);\n\t}\n\n\tthrow new TypeError(`Unsupported value, got \\`${typeof value}\\`.`);\n}\n\nfunction concatUint8Arrays(arrays, totalLength) {\n\tif (arrays.length === 0) {\n\t\treturn new Uint8Array(0);\n\t}\n\n\ttotalLength ??= arrays.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);\n\n\tconst returnValue = new Uint8Array(totalLength);\n\n\tlet offset = 0;\n\tfor (const array of arrays) {\n\t\tassertUint8Array(array);\n\t\treturnValue.set(array, offset);\n\t\toffset += array.length;\n\t}\n\n\treturn returnValue;\n}\n\nfunction areUint8ArraysEqual(a, b) {\n\tassertUint8Array(a);\n\tassertUint8Array(b);\n\n\tif (a === b) {\n\t\treturn true;\n\t}\n\n\tif (a.length !== b.length) {\n\t\treturn false;\n\t}\n\n\t// eslint-disable-next-line unicorn/no-for-loop\n\tfor (let index = 0; index < a.length; index++) {\n\t\tif (a[index] !== b[index]) {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\treturn true;\n}\n\nfunction compareUint8Arrays(a, b) {\n\tassertUint8Array(a);\n\tassertUint8Array(b);\n\n\tconst length = Math.min(a.length, b.length);\n\n\tfor (let index = 0; index < length; index++) {\n\t\tconst diff = a[index] - b[index];\n\t\tif (diff !== 0) {\n\t\t\treturn Math.sign(diff);\n\t\t}\n\t}\n\n\t// At this point, all the compared elements are equal.\n\t// The shorter array should come first if the arrays are of different lengths.\n\treturn Math.sign(a.length - b.length);\n}\n\nconst cachedDecoders = {\n\tutf8: new globalThis.TextDecoder('utf8'),\n};\n\nfunction uint8ArrayToString(array, encoding = 'utf8') {\n\tassertUint8ArrayOrArrayBuffer(array);\n\tcachedDecoders[encoding] ??= new globalThis.TextDecoder(encoding);\n\treturn cachedDecoders[encoding].decode(array);\n}\n\nfunction assertString(value) {\n\tif (typeof value !== 'string') {\n\t\tthrow new TypeError(`Expected \\`string\\`, got \\`${typeof value}\\``);\n\t}\n}\n\nconst cachedEncoder = new globalThis.TextEncoder();\n\nfunction stringToUint8Array(string) {\n\tassertString(string);\n\treturn cachedEncoder.encode(string);\n}\n\nfunction base64ToBase64Url(base64) {\n\treturn base64.replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');\n}\n\nfunction base64UrlToBase64(base64url) {\n\treturn base64url.replaceAll('-', '+').replaceAll('_', '/');\n}\n\n// Reference: https://phuoc.ng/collection/this-vs-that/concat-vs-push/\nconst MAX_BLOCK_SIZE = 65_535;\n\nfunction uint8ArrayToBase64(array, {urlSafe = false} = {}) {\n\tassertUint8Array(array);\n\n\tlet base64;\n\n\tif (array.length < MAX_BLOCK_SIZE) {\n\t// Required as `btoa` and `atob` don't properly support Unicode: https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem\n\t\tbase64 = globalThis.btoa(String.fromCodePoint.apply(this, array));\n\t} else {\n\t\tbase64 = '';\n\t\tfor (const value of array) {\n\t\t\tbase64 += String.fromCodePoint(value);\n\t\t}\n\n\t\tbase64 = globalThis.btoa(base64);\n\t}\n\n\treturn urlSafe ? base64ToBase64Url(base64) : base64;\n}\n\nfunction base64ToUint8Array(base64String) {\n\tassertString(base64String);\n\treturn Uint8Array.from(globalThis.atob(base64UrlToBase64(base64String)), x => x.codePointAt(0));\n}\n\nfunction stringToBase64(string, {urlSafe = false} = {}) {\n\tassertString(string);\n\treturn uint8ArrayToBase64(stringToUint8Array(string), {urlSafe});\n}\n\nfunction base64ToString(base64String) {\n\tassertString(base64String);\n\treturn uint8ArrayToString(base64ToUint8Array(base64String));\n}\n\nconst byteToHexLookupTable = Array.from({length: 256}, (_, index) => index.toString(16).padStart(2, '0'));\n\nfunction uint8ArrayToHex(array) {\n\tassertUint8Array(array);\n\n\t// Concatenating a string is faster than using an array.\n\tlet hexString = '';\n\n\t// eslint-disable-next-line unicorn/no-for-loop -- Max performance is critical.\n\tfor (let index = 0; index < array.length; index++) {\n\t\thexString += byteToHexLookupTable[array[index]];\n\t}\n\n\treturn hexString;\n}\n\nconst hexToDecimalLookupTable = {\n\t0: 0,\n\t1: 1,\n\t2: 2,\n\t3: 3,\n\t4: 4,\n\t5: 5,\n\t6: 6,\n\t7: 7,\n\t8: 8,\n\t9: 9,\n\ta: 10,\n\tb: 11,\n\tc: 12,\n\td: 13,\n\te: 14,\n\tf: 15,\n\tA: 10,\n\tB: 11,\n\tC: 12,\n\tD: 13,\n\tE: 14,\n\tF: 15,\n};\n\nfunction hexToUint8Array(hexString) {\n\tassertString(hexString);\n\n\tif (hexString.length % 2 !== 0) {\n\t\tthrow new Error('Invalid Hex string length.');\n\t}\n\n\tconst resultLength = hexString.length / 2;\n\tconst bytes = new Uint8Array(resultLength);\n\n\tfor (let index = 0; index < resultLength; index++) {\n\t\tconst highNibble = hexToDecimalLookupTable[hexString[index * 2]];\n\t\tconst lowNibble = hexToDecimalLookupTable[hexString[(index * 2) + 1]];\n\n\t\tif (highNibble === undefined || lowNibble === undefined) {\n\t\t\tthrow new Error(`Invalid Hex character encountered at position ${index * 2}`);\n\t\t}\n\n\t\tbytes[index] = (highNibble << 4) | lowNibble; // eslint-disable-line no-bitwise\n\t}\n\n\treturn bytes;\n}\n\n/**\n@param {DataView} view\n@returns {number}\n*/\nfunction getUintBE(view) {\n\tconst {byteLength} = view;\n\n\tif (byteLength === 6) {\n\t\treturn (view.getUint16(0) * (2 ** 32)) + view.getUint32(2);\n\t}\n\n\tif (byteLength === 5) {\n\t\treturn (view.getUint8(0) * (2 ** 32)) + view.getUint32(1);\n\t}\n\n\tif (byteLength === 4) {\n\t\treturn view.getUint32(0);\n\t}\n\n\tif (byteLength === 3) {\n\t\treturn (view.getUint8(0) * (2 ** 16)) + view.getUint16(1);\n\t}\n\n\tif (byteLength === 2) {\n\t\treturn view.getUint16(0);\n\t}\n\n\tif (byteLength === 1) {\n\t\treturn view.getUint8(0);\n\t}\n}\n\n/**\n@param {Uint8Array} array\n@param {Uint8Array} value\n@returns {number}\n*/\nfunction indexOf(array, value) {\n\tconst arrayLength = array.length;\n\tconst valueLength = value.length;\n\n\tif (valueLength === 0) {\n\t\treturn -1;\n\t}\n\n\tif (valueLength > arrayLength) {\n\t\treturn -1;\n\t}\n\n\tconst validOffsetLength = arrayLength - valueLength;\n\n\tfor (let index = 0; index <= validOffsetLength; index++) {\n\t\tlet isMatch = true;\n\t\tfor (let index2 = 0; index2 < valueLength; index2++) {\n\t\t\tif (array[index + index2] !== value[index2]) {\n\t\t\t\tisMatch = false;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t\tif (isMatch) {\n\t\t\treturn index;\n\t\t}\n\t}\n\n\treturn -1;\n}\n\n/**\n@param {Uint8Array} array\n@param {Uint8Array} value\n@returns {boolean}\n*/\nfunction includes(array, value) {\n\treturn indexOf(array, value) !== -1;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheS1leHRyYXNAMS40LjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXktZXh0cmFzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esd0RBQXdELGFBQWE7QUFDckU7QUFDQTs7QUFFTztBQUNQO0FBQ0EsMkVBQTJFLGFBQWE7QUFDeEY7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELGFBQWE7QUFDOUQ7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9ELGFBQWE7QUFDakU7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU8sb0NBQW9DLGlCQUFpQixJQUFJO0FBQ2hFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU8saUNBQWlDLGlCQUFpQixJQUFJO0FBQzdEO0FBQ0Esd0RBQXdELFFBQVE7QUFDaEU7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLFlBQVk7O0FBRTlDO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRSxVQUFVO0FBQzlFOztBQUVBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCLFVBQVU7QUFDVjtBQUNPO0FBQ1AsUUFBUSxZQUFZOztBQUVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxZQUFZO0FBQ3BCLFFBQVEsWUFBWTtBQUNwQixVQUFVO0FBQ1Y7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLFlBQVk7QUFDcEIsUUFBUSxZQUFZO0FBQ3BCLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsiL3Jvb3QvcHJvamVjdHMvbXVsdGktdGVuYW50L25vZGVfbW9kdWxlcy8ucG5wbS91aW50OGFycmF5LWV4dHJhc0AxLjQuMC9ub2RlX21vZHVsZXMvdWludDhhcnJheS1leHRyYXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuY29uc3QgdWludDhBcnJheVN0cmluZ2lmaWVkID0gJ1tvYmplY3QgVWludDhBcnJheV0nO1xuY29uc3QgYXJyYXlCdWZmZXJTdHJpbmdpZmllZCA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG5cbmZ1bmN0aW9uIGlzVHlwZSh2YWx1ZSwgdHlwZUNvbnN0cnVjdG9yLCB0eXBlU3RyaW5naWZpZWQpIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gdHlwZUNvbnN0cnVjdG9yKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IHR5cGVTdHJpbmdpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVWludDhBcnJheSh2YWx1ZSkge1xuXHRyZXR1cm4gaXNUeXBlKHZhbHVlLCBVaW50OEFycmF5LCB1aW50OEFycmF5U3RyaW5naWZpZWQpO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbHVlKSB7XG5cdHJldHVybiBpc1R5cGUodmFsdWUsIEFycmF5QnVmZmVyLCBhcnJheUJ1ZmZlclN0cmluZ2lmaWVkKTtcbn1cblxuZnVuY3Rpb24gaXNVaW50OEFycmF5T3JBcnJheUJ1ZmZlcih2YWx1ZSkge1xuXHRyZXR1cm4gaXNVaW50OEFycmF5KHZhbHVlKSB8fCBpc0FycmF5QnVmZmVyKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFVpbnQ4QXJyYXkodmFsdWUpIHtcblx0aWYgKCFpc1VpbnQ4QXJyYXkodmFsdWUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgVWludDhBcnJheVxcYCwgZ290IFxcYCR7dHlwZW9mIHZhbHVlfVxcYGApO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRVaW50OEFycmF5T3JBcnJheUJ1ZmZlcih2YWx1ZSkge1xuXHRpZiAoIWlzVWludDhBcnJheU9yQXJyYXlCdWZmZXIodmFsdWUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgVWludDhBcnJheVxcYCBvciBcXGBBcnJheUJ1ZmZlclxcYCwgZ290IFxcYCR7dHlwZW9mIHZhbHVlfVxcYGApO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VpbnQ4QXJyYXkodmFsdWUpIHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcblx0XHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsdWUpO1xuXHR9XG5cblx0aWYgKEFycmF5QnVmZmVyLmlzVmlldyh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsdWUuYnVmZmVyLCB2YWx1ZS5ieXRlT2Zmc2V0LCB2YWx1ZS5ieXRlTGVuZ3RoKTtcblx0fVxuXG5cdHRocm93IG5ldyBUeXBlRXJyb3IoYFVuc3VwcG9ydGVkIHZhbHVlLCBnb3QgXFxgJHt0eXBlb2YgdmFsdWV9XFxgLmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0VWludDhBcnJheXMoYXJyYXlzLCB0b3RhbExlbmd0aCkge1xuXHRpZiAoYXJyYXlzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBuZXcgVWludDhBcnJheSgwKTtcblx0fVxuXG5cdHRvdGFsTGVuZ3RoID8/PSBhcnJheXMucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiBhY2N1bXVsYXRvciArIGN1cnJlbnRWYWx1ZS5sZW5ndGgsIDApO1xuXG5cdGNvbnN0IHJldHVyblZhbHVlID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xuXG5cdGxldCBvZmZzZXQgPSAwO1xuXHRmb3IgKGNvbnN0IGFycmF5IG9mIGFycmF5cykge1xuXHRcdGFzc2VydFVpbnQ4QXJyYXkoYXJyYXkpO1xuXHRcdHJldHVyblZhbHVlLnNldChhcnJheSwgb2Zmc2V0KTtcblx0XHRvZmZzZXQgKz0gYXJyYXkubGVuZ3RoO1xuXHR9XG5cblx0cmV0dXJuIHJldHVyblZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlVWludDhBcnJheXNFcXVhbChhLCBiKSB7XG5cdGFzc2VydFVpbnQ4QXJyYXkoYSk7XG5cdGFzc2VydFVpbnQ4QXJyYXkoYik7XG5cblx0aWYgKGEgPT09IGIpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1mb3ItbG9vcFxuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRpZiAoYVtpbmRleF0gIT09IGJbaW5kZXhdKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVWludDhBcnJheXMoYSwgYikge1xuXHRhc3NlcnRVaW50OEFycmF5KGEpO1xuXHRhc3NlcnRVaW50OEFycmF5KGIpO1xuXG5cdGNvbnN0IGxlbmd0aCA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7XG5cblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuXHRcdGNvbnN0IGRpZmYgPSBhW2luZGV4XSAtIGJbaW5kZXhdO1xuXHRcdGlmIChkaWZmICE9PSAwKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5zaWduKGRpZmYpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEF0IHRoaXMgcG9pbnQsIGFsbCB0aGUgY29tcGFyZWQgZWxlbWVudHMgYXJlIGVxdWFsLlxuXHQvLyBUaGUgc2hvcnRlciBhcnJheSBzaG91bGQgY29tZSBmaXJzdCBpZiB0aGUgYXJyYXlzIGFyZSBvZiBkaWZmZXJlbnQgbGVuZ3Rocy5cblx0cmV0dXJuIE1hdGguc2lnbihhLmxlbmd0aCAtIGIubGVuZ3RoKTtcbn1cblxuY29uc3QgY2FjaGVkRGVjb2RlcnMgPSB7XG5cdHV0Zjg6IG5ldyBnbG9iYWxUaGlzLlRleHREZWNvZGVyKCd1dGY4JyksXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdWludDhBcnJheVRvU3RyaW5nKGFycmF5LCBlbmNvZGluZyA9ICd1dGY4Jykge1xuXHRhc3NlcnRVaW50OEFycmF5T3JBcnJheUJ1ZmZlcihhcnJheSk7XG5cdGNhY2hlZERlY29kZXJzW2VuY29kaW5nXSA/Pz0gbmV3IGdsb2JhbFRoaXMuVGV4dERlY29kZXIoZW5jb2RpbmcpO1xuXHRyZXR1cm4gY2FjaGVkRGVjb2RlcnNbZW5jb2RpbmddLmRlY29kZShhcnJheSk7XG59XG5cbmZ1bmN0aW9uIGFzc2VydFN0cmluZyh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFxcYHN0cmluZ1xcYCwgZ290IFxcYCR7dHlwZW9mIHZhbHVlfVxcYGApO1xuXHR9XG59XG5cbmNvbnN0IGNhY2hlZEVuY29kZXIgPSBuZXcgZ2xvYmFsVGhpcy5UZXh0RW5jb2RlcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9VaW50OEFycmF5KHN0cmluZykge1xuXHRhc3NlcnRTdHJpbmcoc3RyaW5nKTtcblx0cmV0dXJuIGNhY2hlZEVuY29kZXIuZW5jb2RlKHN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQmFzZTY0VXJsKGJhc2U2NCkge1xuXHRyZXR1cm4gYmFzZTY0LnJlcGxhY2VBbGwoJysnLCAnLScpLnJlcGxhY2VBbGwoJy8nLCAnXycpLnJlcGxhY2UoLz0rJC8sICcnKTtcbn1cblxuZnVuY3Rpb24gYmFzZTY0VXJsVG9CYXNlNjQoYmFzZTY0dXJsKSB7XG5cdHJldHVybiBiYXNlNjR1cmwucmVwbGFjZUFsbCgnLScsICcrJykucmVwbGFjZUFsbCgnXycsICcvJyk7XG59XG5cbi8vIFJlZmVyZW5jZTogaHR0cHM6Ly9waHVvYy5uZy9jb2xsZWN0aW9uL3RoaXMtdnMtdGhhdC9jb25jYXQtdnMtcHVzaC9cbmNvbnN0IE1BWF9CTE9DS19TSVpFID0gNjVfNTM1O1xuXG5leHBvcnQgZnVuY3Rpb24gdWludDhBcnJheVRvQmFzZTY0KGFycmF5LCB7dXJsU2FmZSA9IGZhbHNlfSA9IHt9KSB7XG5cdGFzc2VydFVpbnQ4QXJyYXkoYXJyYXkpO1xuXG5cdGxldCBiYXNlNjQ7XG5cblx0aWYgKGFycmF5Lmxlbmd0aCA8IE1BWF9CTE9DS19TSVpFKSB7XG5cdC8vIFJlcXVpcmVkIGFzIGBidG9hYCBhbmQgYGF0b2JgIGRvbid0IHByb3Blcmx5IHN1cHBvcnQgVW5pY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9HbG9zc2FyeS9CYXNlNjQjdGhlX3VuaWNvZGVfcHJvYmxlbVxuXHRcdGJhc2U2NCA9IGdsb2JhbFRoaXMuYnRvYShTdHJpbmcuZnJvbUNvZGVQb2ludC5hcHBseSh0aGlzLCBhcnJheSkpO1xuXHR9IGVsc2Uge1xuXHRcdGJhc2U2NCA9ICcnO1xuXHRcdGZvciAoY29uc3QgdmFsdWUgb2YgYXJyYXkpIHtcblx0XHRcdGJhc2U2NCArPSBTdHJpbmcuZnJvbUNvZGVQb2ludCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0YmFzZTY0ID0gZ2xvYmFsVGhpcy5idG9hKGJhc2U2NCk7XG5cdH1cblxuXHRyZXR1cm4gdXJsU2FmZSA/IGJhc2U2NFRvQmFzZTY0VXJsKGJhc2U2NCkgOiBiYXNlNjQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG5cdGFzc2VydFN0cmluZyhiYXNlNjRTdHJpbmcpO1xuXHRyZXR1cm4gVWludDhBcnJheS5mcm9tKGdsb2JhbFRoaXMuYXRvYihiYXNlNjRVcmxUb0Jhc2U2NChiYXNlNjRTdHJpbmcpKSwgeCA9PiB4LmNvZGVQb2ludEF0KDApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvQmFzZTY0KHN0cmluZywge3VybFNhZmUgPSBmYWxzZX0gPSB7fSkge1xuXHRhc3NlcnRTdHJpbmcoc3RyaW5nKTtcblx0cmV0dXJuIHVpbnQ4QXJyYXlUb0Jhc2U2NChzdHJpbmdUb1VpbnQ4QXJyYXkoc3RyaW5nKSwge3VybFNhZmV9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFRvU3RyaW5nKGJhc2U2NFN0cmluZykge1xuXHRhc3NlcnRTdHJpbmcoYmFzZTY0U3RyaW5nKTtcblx0cmV0dXJuIHVpbnQ4QXJyYXlUb1N0cmluZyhiYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSk7XG59XG5cbmNvbnN0IGJ5dGVUb0hleExvb2t1cFRhYmxlID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAyNTZ9LCAoXywgaW5kZXgpID0+IGluZGV4LnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVpbnQ4QXJyYXlUb0hleChhcnJheSkge1xuXHRhc3NlcnRVaW50OEFycmF5KGFycmF5KTtcblxuXHQvLyBDb25jYXRlbmF0aW5nIGEgc3RyaW5nIGlzIGZhc3RlciB0aGFuIHVzaW5nIGFuIGFycmF5LlxuXHRsZXQgaGV4U3RyaW5nID0gJyc7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tZm9yLWxvb3AgLS0gTWF4IHBlcmZvcm1hbmNlIGlzIGNyaXRpY2FsLlxuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0aGV4U3RyaW5nICs9IGJ5dGVUb0hleExvb2t1cFRhYmxlW2FycmF5W2luZGV4XV07XG5cdH1cblxuXHRyZXR1cm4gaGV4U3RyaW5nO1xufVxuXG5jb25zdCBoZXhUb0RlY2ltYWxMb29rdXBUYWJsZSA9IHtcblx0MDogMCxcblx0MTogMSxcblx0MjogMixcblx0MzogMyxcblx0NDogNCxcblx0NTogNSxcblx0NjogNixcblx0NzogNyxcblx0ODogOCxcblx0OTogOSxcblx0YTogMTAsXG5cdGI6IDExLFxuXHRjOiAxMixcblx0ZDogMTMsXG5cdGU6IDE0LFxuXHRmOiAxNSxcblx0QTogMTAsXG5cdEI6IDExLFxuXHRDOiAxMixcblx0RDogMTMsXG5cdEU6IDE0LFxuXHRGOiAxNSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1VpbnQ4QXJyYXkoaGV4U3RyaW5nKSB7XG5cdGFzc2VydFN0cmluZyhoZXhTdHJpbmcpO1xuXG5cdGlmIChoZXhTdHJpbmcubGVuZ3RoICUgMiAhPT0gMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBIZXggc3RyaW5nIGxlbmd0aC4nKTtcblx0fVxuXG5cdGNvbnN0IHJlc3VsdExlbmd0aCA9IGhleFN0cmluZy5sZW5ndGggLyAyO1xuXHRjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KHJlc3VsdExlbmd0aCk7XG5cblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlc3VsdExlbmd0aDsgaW5kZXgrKykge1xuXHRcdGNvbnN0IGhpZ2hOaWJibGUgPSBoZXhUb0RlY2ltYWxMb29rdXBUYWJsZVtoZXhTdHJpbmdbaW5kZXggKiAyXV07XG5cdFx0Y29uc3QgbG93TmliYmxlID0gaGV4VG9EZWNpbWFsTG9va3VwVGFibGVbaGV4U3RyaW5nWyhpbmRleCAqIDIpICsgMV1dO1xuXG5cdFx0aWYgKGhpZ2hOaWJibGUgPT09IHVuZGVmaW5lZCB8fCBsb3dOaWJibGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIEhleCBjaGFyYWN0ZXIgZW5jb3VudGVyZWQgYXQgcG9zaXRpb24gJHtpbmRleCAqIDJ9YCk7XG5cdFx0fVxuXG5cdFx0Ynl0ZXNbaW5kZXhdID0gKGhpZ2hOaWJibGUgPDwgNCkgfCBsb3dOaWJibGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYml0d2lzZVxuXHR9XG5cblx0cmV0dXJuIGJ5dGVzO1xufVxuXG4vKipcbkBwYXJhbSB7RGF0YVZpZXd9IHZpZXdcbkByZXR1cm5zIHtudW1iZXJ9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVpbnRCRSh2aWV3KSB7XG5cdGNvbnN0IHtieXRlTGVuZ3RofSA9IHZpZXc7XG5cblx0aWYgKGJ5dGVMZW5ndGggPT09IDYpIHtcblx0XHRyZXR1cm4gKHZpZXcuZ2V0VWludDE2KDApICogKDIgKiogMzIpKSArIHZpZXcuZ2V0VWludDMyKDIpO1xuXHR9XG5cblx0aWYgKGJ5dGVMZW5ndGggPT09IDUpIHtcblx0XHRyZXR1cm4gKHZpZXcuZ2V0VWludDgoMCkgKiAoMiAqKiAzMikpICsgdmlldy5nZXRVaW50MzIoMSk7XG5cdH1cblxuXHRpZiAoYnl0ZUxlbmd0aCA9PT0gNCkge1xuXHRcdHJldHVybiB2aWV3LmdldFVpbnQzMigwKTtcblx0fVxuXG5cdGlmIChieXRlTGVuZ3RoID09PSAzKSB7XG5cdFx0cmV0dXJuICh2aWV3LmdldFVpbnQ4KDApICogKDIgKiogMTYpKSArIHZpZXcuZ2V0VWludDE2KDEpO1xuXHR9XG5cblx0aWYgKGJ5dGVMZW5ndGggPT09IDIpIHtcblx0XHRyZXR1cm4gdmlldy5nZXRVaW50MTYoMCk7XG5cdH1cblxuXHRpZiAoYnl0ZUxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiB2aWV3LmdldFVpbnQ4KDApO1xuXHR9XG59XG5cbi8qKlxuQHBhcmFtIHtVaW50OEFycmF5fSBhcnJheVxuQHBhcmFtIHtVaW50OEFycmF5fSB2YWx1ZVxuQHJldHVybnMge251bWJlcn1cbiovXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcblx0Y29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdGNvbnN0IHZhbHVlTGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuXG5cdGlmICh2YWx1ZUxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAtMTtcblx0fVxuXG5cdGlmICh2YWx1ZUxlbmd0aCA+IGFycmF5TGVuZ3RoKSB7XG5cdFx0cmV0dXJuIC0xO1xuXHR9XG5cblx0Y29uc3QgdmFsaWRPZmZzZXRMZW5ndGggPSBhcnJheUxlbmd0aCAtIHZhbHVlTGVuZ3RoO1xuXG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gdmFsaWRPZmZzZXRMZW5ndGg7IGluZGV4KyspIHtcblx0XHRsZXQgaXNNYXRjaCA9IHRydWU7XG5cdFx0Zm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgdmFsdWVMZW5ndGg7IGluZGV4MisrKSB7XG5cdFx0XHRpZiAoYXJyYXlbaW5kZXggKyBpbmRleDJdICE9PSB2YWx1ZVtpbmRleDJdKSB7XG5cdFx0XHRcdGlzTWF0Y2ggPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGlzTWF0Y2gpIHtcblx0XHRcdHJldHVybiBpbmRleDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gLTE7XG59XG5cbi8qKlxuQHBhcmFtIHtVaW50OEFycmF5fSBhcnJheVxuQHBhcmFtIHtVaW50OEFycmF5fSB2YWx1ZVxuQHJldHVybnMge2Jvb2xlYW59XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuXHRyZXR1cm4gaW5kZXhPZihhcnJheSwgdmFsdWUpICE9PSAtMTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/uint8array-extras@1.4.0/node_modules/uint8array-extras/index.js\n");

/***/ })

};
;