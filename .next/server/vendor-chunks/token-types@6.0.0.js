"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/token-types@6.0.0";
exports.ids = ["vendor-chunks/token-types@6.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/token-types@6.0.0/node_modules/token-types/lib/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/token-types@6.0.0/node_modules/token-types/lib/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnsiStringType: () => (/* binding */ AnsiStringType),\n/* harmony export */   Float16_BE: () => (/* binding */ Float16_BE),\n/* harmony export */   Float16_LE: () => (/* binding */ Float16_LE),\n/* harmony export */   Float32_BE: () => (/* binding */ Float32_BE),\n/* harmony export */   Float32_LE: () => (/* binding */ Float32_LE),\n/* harmony export */   Float64_BE: () => (/* binding */ Float64_BE),\n/* harmony export */   Float64_LE: () => (/* binding */ Float64_LE),\n/* harmony export */   Float80_BE: () => (/* binding */ Float80_BE),\n/* harmony export */   Float80_LE: () => (/* binding */ Float80_LE),\n/* harmony export */   INT16_BE: () => (/* binding */ INT16_BE),\n/* harmony export */   INT16_LE: () => (/* binding */ INT16_LE),\n/* harmony export */   INT24_BE: () => (/* binding */ INT24_BE),\n/* harmony export */   INT24_LE: () => (/* binding */ INT24_LE),\n/* harmony export */   INT32_BE: () => (/* binding */ INT32_BE),\n/* harmony export */   INT32_LE: () => (/* binding */ INT32_LE),\n/* harmony export */   INT64_BE: () => (/* binding */ INT64_BE),\n/* harmony export */   INT64_LE: () => (/* binding */ INT64_LE),\n/* harmony export */   INT8: () => (/* binding */ INT8),\n/* harmony export */   IgnoreType: () => (/* binding */ IgnoreType),\n/* harmony export */   StringType: () => (/* binding */ StringType),\n/* harmony export */   UINT16_BE: () => (/* binding */ UINT16_BE),\n/* harmony export */   UINT16_LE: () => (/* binding */ UINT16_LE),\n/* harmony export */   UINT24_BE: () => (/* binding */ UINT24_BE),\n/* harmony export */   UINT24_LE: () => (/* binding */ UINT24_LE),\n/* harmony export */   UINT32_BE: () => (/* binding */ UINT32_BE),\n/* harmony export */   UINT32_LE: () => (/* binding */ UINT32_LE),\n/* harmony export */   UINT64_BE: () => (/* binding */ UINT64_BE),\n/* harmony export */   UINT64_LE: () => (/* binding */ UINT64_LE),\n/* harmony export */   UINT8: () => (/* binding */ UINT8),\n/* harmony export */   Uint8ArrayType: () => (/* binding */ Uint8ArrayType)\n/* harmony export */ });\n/* harmony import */ var ieee754__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ieee754 */ \"(rsc)/./node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js\");\n\n// Primitive types\nfunction dv(array) {\n    return new DataView(array.buffer, array.byteOffset);\n}\n/**\n * 8-bit unsigned integer\n */\nconst UINT8 = {\n    len: 1,\n    get(array, offset) {\n        return dv(array).getUint8(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint8(offset, value);\n        return offset + 1;\n    }\n};\n/**\n * 16-bit unsigned integer, Little Endian byte order\n */\nconst UINT16_LE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getUint16(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setUint16(offset, value, true);\n        return offset + 2;\n    }\n};\n/**\n * 16-bit unsigned integer, Big Endian byte order\n */\nconst UINT16_BE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getUint16(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint16(offset, value);\n        return offset + 2;\n    }\n};\n/**\n * 24-bit unsigned integer, Little Endian byte order\n */\nconst UINT24_LE = {\n    len: 3,\n    get(array, offset) {\n        const dataView = dv(array);\n        return dataView.getUint8(offset) + (dataView.getUint16(offset + 1, true) << 8);\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint8(offset, value & 0xff);\n        dataView.setUint16(offset + 1, value >> 8, true);\n        return offset + 3;\n    }\n};\n/**\n * 24-bit unsigned integer, Big Endian byte order\n */\nconst UINT24_BE = {\n    len: 3,\n    get(array, offset) {\n        const dataView = dv(array);\n        return (dataView.getUint16(offset) << 8) + dataView.getUint8(offset + 2);\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint16(offset, value >> 8);\n        dataView.setUint8(offset + 2, value & 0xff);\n        return offset + 3;\n    }\n};\n/**\n * 32-bit unsigned integer, Little Endian byte order\n */\nconst UINT32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getUint32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setUint32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * 32-bit unsigned integer, Big Endian byte order\n */\nconst UINT32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getUint32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * 8-bit signed integer\n */\nconst INT8 = {\n    len: 1,\n    get(array, offset) {\n        return dv(array).getInt8(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt8(offset, value);\n        return offset + 1;\n    }\n};\n/**\n * 16-bit signed integer, Big Endian byte order\n */\nconst INT16_BE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getInt16(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt16(offset, value);\n        return offset + 2;\n    }\n};\n/**\n * 16-bit signed integer, Little Endian byte order\n */\nconst INT16_LE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getInt16(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setInt16(offset, value, true);\n        return offset + 2;\n    }\n};\n/**\n * 24-bit signed integer, Little Endian byte order\n */\nconst INT24_LE = {\n    len: 3,\n    get(array, offset) {\n        const unsigned = UINT24_LE.get(array, offset);\n        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint8(offset, value & 0xff);\n        dataView.setUint16(offset + 1, value >> 8, true);\n        return offset + 3;\n    }\n};\n/**\n * 24-bit signed integer, Big Endian byte order\n */\nconst INT24_BE = {\n    len: 3,\n    get(array, offset) {\n        const unsigned = UINT24_BE.get(array, offset);\n        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint16(offset, value >> 8);\n        dataView.setUint8(offset + 2, value & 0xff);\n        return offset + 3;\n    }\n};\n/**\n * 32-bit signed integer, Big Endian byte order\n */\nconst INT32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getInt32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * 32-bit signed integer, Big Endian byte order\n */\nconst INT32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getInt32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setInt32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * 64-bit unsigned integer, Little Endian byte order\n */\nconst UINT64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigUint64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setBigUint64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit signed integer, Little Endian byte order\n */\nconst INT64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigInt64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setBigInt64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit unsigned integer, Big Endian byte order\n */\nconst UINT64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigUint64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setBigUint64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit signed integer, Big Endian byte order\n */\nconst INT64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigInt64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setBigInt64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 16-bit (half precision) float, big endian\n */\nconst Float16_BE = {\n    len: 2,\n    get(dataView, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(dataView, offset, false, 10, this.len);\n    },\n    put(dataView, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(dataView, value, offset, false, 10, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 16-bit (half precision) float, little endian\n */\nconst Float16_LE = {\n    len: 2,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, true, 10, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, true, 10, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 32-bit (single precision) float, big endian\n */\nconst Float32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getFloat32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * IEEE 754 32-bit (single precision) float, little endian\n */\nconst Float32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getFloat32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * IEEE 754 64-bit (double precision) float, big endian\n */\nconst Float64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getFloat64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 64-bit (double precision) float, little endian\n */\nconst Float64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getFloat64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 80-bit (extended precision) float, big endian\n */\nconst Float80_BE = {\n    len: 10,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, false, 63, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, false, 63, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 80-bit (extended precision) float, little endian\n */\nconst Float80_LE = {\n    len: 10,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, true, 63, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, true, 63, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * Ignore a given number of bytes\n */\nclass IgnoreType {\n    /**\n     * @param len number of bytes to ignore\n     */\n    constructor(len) {\n        this.len = len;\n    }\n    // ToDo: don't read, but skip data\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    get(array, off) {\n    }\n}\nclass Uint8ArrayType {\n    constructor(len) {\n        this.len = len;\n    }\n    get(array, offset) {\n        return array.subarray(offset, offset + this.len);\n    }\n}\n/**\n * Consume a fixed number of bytes from the stream and return a string with a specified encoding.\n */\nclass StringType {\n    constructor(len, encoding) {\n        this.len = len;\n        this.encoding = encoding;\n        this.textDecoder = new TextDecoder(encoding);\n    }\n    get(uint8Array, offset) {\n        return this.textDecoder.decode(uint8Array.subarray(offset, offset + this.len));\n    }\n}\n/**\n * ANSI Latin 1 String\n * Using windows-1252 / ISO 8859-1 decoding\n */\nclass AnsiStringType {\n    constructor(len) {\n        this.len = len;\n        this.textDecoder = new TextDecoder('windows-1252');\n    }\n    get(uint8Array, offset = 0) {\n        return this.textDecoder.decode(uint8Array.subarray(offset, offset + this.len));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vdG9rZW4tdHlwZXNANi4wLjAvbm9kZV9tb2R1bGVzL3Rva2VuLXR5cGVzL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZUFBZSx5Q0FBWTtBQUMzQixLQUFLO0FBQ0w7QUFDQSxRQUFRLDBDQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGVBQWUseUNBQVk7QUFDM0IsS0FBSztBQUNMO0FBQ0EsUUFBUSwwQ0FBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZUFBZSx5Q0FBWTtBQUMzQixLQUFLO0FBQ0w7QUFDQSxRQUFRLDBDQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGVBQWUseUNBQVk7QUFDM0IsS0FBSztBQUNMO0FBQ0EsUUFBUSwwQ0FBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL3Jvb3QvcHJvamVjdHMvbXVsdGktdGVuYW50L25vZGVfbW9kdWxlcy8ucG5wbS90b2tlbi10eXBlc0A2LjAuMC9ub2RlX21vZHVsZXMvdG9rZW4tdHlwZXMvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGllZWU3NTQgZnJvbSAnaWVlZTc1NCc7XG4vLyBQcmltaXRpdmUgdHlwZXNcbmZ1bmN0aW9uIGR2KGFycmF5KSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhVmlldyhhcnJheS5idWZmZXIsIGFycmF5LmJ5dGVPZmZzZXQpO1xufVxuLyoqXG4gKiA4LWJpdCB1bnNpZ25lZCBpbnRlZ2VyXG4gKi9cbmV4cG9ydCBjb25zdCBVSU5UOCA9IHtcbiAgICBsZW46IDEsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRVaW50OChvZmZzZXQpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRVaW50OChvZmZzZXQsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDE7XG4gICAgfVxufTtcbi8qKlxuICogMTYtYml0IHVuc2lnbmVkIGludGVnZXIsIExpdHRsZSBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgVUlOVDE2X0xFID0ge1xuICAgIGxlbjogMixcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldFVpbnQxNihvZmZzZXQsIHRydWUpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRVaW50MTYob2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyAyO1xuICAgIH1cbn07XG4vKipcbiAqIDE2LWJpdCB1bnNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IFVJTlQxNl9CRSA9IHtcbiAgICBsZW46IDIsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRVaW50MTYob2Zmc2V0KTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0VWludDE2KG9mZnNldCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgMjtcbiAgICB9XG59O1xuLyoqXG4gKiAyNC1iaXQgdW5zaWduZWQgaW50ZWdlciwgTGl0dGxlIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBVSU5UMjRfTEUgPSB7XG4gICAgbGVuOiAzLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gZHYoYXJyYXkpO1xuICAgICAgICByZXR1cm4gZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KSArIChkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0ICsgMSwgdHJ1ZSkgPDwgOCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBkdihhcnJheSk7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQ4KG9mZnNldCwgdmFsdWUgJiAweGZmKTtcbiAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KG9mZnNldCArIDEsIHZhbHVlID4+IDgsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgMztcbiAgICB9XG59O1xuLyoqXG4gKiAyNC1iaXQgdW5zaWduZWQgaW50ZWdlciwgQmlnIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBVSU5UMjRfQkUgPSB7XG4gICAgbGVuOiAzLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gZHYoYXJyYXkpO1xuICAgICAgICByZXR1cm4gKGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQpIDw8IDgpICsgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMik7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBkdihhcnJheSk7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihvZmZzZXQsIHZhbHVlID4+IDgpO1xuICAgICAgICBkYXRhVmlldy5zZXRVaW50OChvZmZzZXQgKyAyLCB2YWx1ZSAmIDB4ZmYpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgMztcbiAgICB9XG59O1xuLyoqXG4gKiAzMi1iaXQgdW5zaWduZWQgaW50ZWdlciwgTGl0dGxlIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBVSU5UMzJfTEUgPSB7XG4gICAgbGVuOiA0LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0VWludDMyKG9mZnNldCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldFVpbnQzMihvZmZzZXQsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDQ7XG4gICAgfVxufTtcbi8qKlxuICogMzItYml0IHVuc2lnbmVkIGludGVnZXIsIEJpZyBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgVUlOVDMyX0JFID0ge1xuICAgIGxlbjogNCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldFVpbnQzMihvZmZzZXQpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRVaW50MzIob2Zmc2V0LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyA0O1xuICAgIH1cbn07XG4vKipcbiAqIDgtYml0IHNpZ25lZCBpbnRlZ2VyXG4gKi9cbmV4cG9ydCBjb25zdCBJTlQ4ID0ge1xuICAgIGxlbjogMSxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEludDgob2Zmc2V0KTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0SW50OChvZmZzZXQsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDE7XG4gICAgfVxufTtcbi8qKlxuICogMTYtYml0IHNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDE2X0JFID0ge1xuICAgIGxlbjogMixcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEludDE2KG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEludDE2KG9mZnNldCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgMjtcbiAgICB9XG59O1xuLyoqXG4gKiAxNi1iaXQgc2lnbmVkIGludGVnZXIsIExpdHRsZSBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgSU5UMTZfTEUgPSB7XG4gICAgbGVuOiAyLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0SW50MTYob2Zmc2V0LCB0cnVlKTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0SW50MTYob2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyAyO1xuICAgIH1cbn07XG4vKipcbiAqIDI0LWJpdCBzaWduZWQgaW50ZWdlciwgTGl0dGxlIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBJTlQyNF9MRSA9IHtcbiAgICBsZW46IDMsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgdW5zaWduZWQgPSBVSU5UMjRfTEUuZ2V0KGFycmF5LCBvZmZzZXQpO1xuICAgICAgICByZXR1cm4gdW5zaWduZWQgPiAweDdmZmZmZiA/IHVuc2lnbmVkIC0gMHgxMDAwMDAwIDogdW5zaWduZWQ7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBkdihhcnJheSk7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQ4KG9mZnNldCwgdmFsdWUgJiAweGZmKTtcbiAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KG9mZnNldCArIDEsIHZhbHVlID4+IDgsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgMztcbiAgICB9XG59O1xuLyoqXG4gKiAyNC1iaXQgc2lnbmVkIGludGVnZXIsIEJpZyBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgSU5UMjRfQkUgPSB7XG4gICAgbGVuOiAzLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHVuc2lnbmVkID0gVUlOVDI0X0JFLmdldChhcnJheSwgb2Zmc2V0KTtcbiAgICAgICAgcmV0dXJuIHVuc2lnbmVkID4gMHg3ZmZmZmYgPyB1bnNpZ25lZCAtIDB4MTAwMDAwMCA6IHVuc2lnbmVkO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gZHYoYXJyYXkpO1xuICAgICAgICBkYXRhVmlldy5zZXRVaW50MTYob2Zmc2V0LCB2YWx1ZSA+PiA4KTtcbiAgICAgICAgZGF0YVZpZXcuc2V0VWludDgob2Zmc2V0ICsgMiwgdmFsdWUgJiAweGZmKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDM7XG4gICAgfVxufTtcbi8qKlxuICogMzItYml0IHNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDMyX0JFID0ge1xuICAgIGxlbjogNCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEludDMyKG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEludDMyKG9mZnNldCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgNDtcbiAgICB9XG59O1xuLyoqXG4gKiAzMi1iaXQgc2lnbmVkIGludGVnZXIsIEJpZyBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgSU5UMzJfTEUgPSB7XG4gICAgbGVuOiA0LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0SW50MzIob2Zmc2V0LCB0cnVlKTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0SW50MzIob2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyA0O1xuICAgIH1cbn07XG4vKipcbiAqIDY0LWJpdCB1bnNpZ25lZCBpbnRlZ2VyLCBMaXR0bGUgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IFVJTlQ2NF9MRSA9IHtcbiAgICBsZW46IDgsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRCaWdVaW50NjQob2Zmc2V0LCB0cnVlKTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0QmlnVWludDY0KG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgODtcbiAgICB9XG59O1xuLyoqXG4gKiA2NC1iaXQgc2lnbmVkIGludGVnZXIsIExpdHRsZSBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgSU5UNjRfTEUgPSB7XG4gICAgbGVuOiA4LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0QmlnSW50NjQob2Zmc2V0LCB0cnVlKTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0QmlnSW50NjQob2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyA4O1xuICAgIH1cbn07XG4vKipcbiAqIDY0LWJpdCB1bnNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IFVJTlQ2NF9CRSA9IHtcbiAgICBsZW46IDgsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRCaWdVaW50NjQob2Zmc2V0KTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0QmlnVWludDY0KG9mZnNldCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgODtcbiAgICB9XG59O1xuLyoqXG4gKiA2NC1iaXQgc2lnbmVkIGludGVnZXIsIEJpZyBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgSU5UNjRfQkUgPSB7XG4gICAgbGVuOiA4LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0QmlnSW50NjQob2Zmc2V0KTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0QmlnSW50NjQob2Zmc2V0LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyA4O1xuICAgIH1cbn07XG4vKipcbiAqIElFRUUgNzU0IDE2LWJpdCAoaGFsZiBwcmVjaXNpb24pIGZsb2F0LCBiaWcgZW5kaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBGbG9hdDE2X0JFID0ge1xuICAgIGxlbjogMixcbiAgICBnZXQoZGF0YVZpZXcsIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gaWVlZTc1NC5yZWFkKGRhdGFWaWV3LCBvZmZzZXQsIGZhbHNlLCAxMCwgdGhpcy5sZW4pO1xuICAgIH0sXG4gICAgcHV0KGRhdGFWaWV3LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGllZWU3NTQud3JpdGUoZGF0YVZpZXcsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCAxMCwgdGhpcy5sZW4pO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgdGhpcy5sZW47XG4gICAgfVxufTtcbi8qKlxuICogSUVFRSA3NTQgMTYtYml0IChoYWxmIHByZWNpc2lvbikgZmxvYXQsIGxpdHRsZSBlbmRpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IEZsb2F0MTZfTEUgPSB7XG4gICAgbGVuOiAyLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBpZWVlNzU0LnJlYWQoYXJyYXksIG9mZnNldCwgdHJ1ZSwgMTAsIHRoaXMubGVuKTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBpZWVlNzU0LndyaXRlKGFycmF5LCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCAxMCwgdGhpcy5sZW4pO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgdGhpcy5sZW47XG4gICAgfVxufTtcbi8qKlxuICogSUVFRSA3NTQgMzItYml0IChzaW5nbGUgcHJlY2lzaW9uKSBmbG9hdCwgYmlnIGVuZGlhblxuICovXG5leHBvcnQgY29uc3QgRmxvYXQzMl9CRSA9IHtcbiAgICBsZW46IDQsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRGbG9hdDMyKG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEZsb2F0MzIob2Zmc2V0LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyA0O1xuICAgIH1cbn07XG4vKipcbiAqIElFRUUgNzU0IDMyLWJpdCAoc2luZ2xlIHByZWNpc2lvbikgZmxvYXQsIGxpdHRsZSBlbmRpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IEZsb2F0MzJfTEUgPSB7XG4gICAgbGVuOiA0LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0RmxvYXQzMihvZmZzZXQsIHRydWUpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRGbG9hdDMyKG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgNDtcbiAgICB9XG59O1xuLyoqXG4gKiBJRUVFIDc1NCA2NC1iaXQgKGRvdWJsZSBwcmVjaXNpb24pIGZsb2F0LCBiaWcgZW5kaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBGbG9hdDY0X0JFID0ge1xuICAgIGxlbjogOCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEZsb2F0NjQob2Zmc2V0KTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0RmxvYXQ2NChvZmZzZXQsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDg7XG4gICAgfVxufTtcbi8qKlxuICogSUVFRSA3NTQgNjQtYml0IChkb3VibGUgcHJlY2lzaW9uKSBmbG9hdCwgbGl0dGxlIGVuZGlhblxuICovXG5leHBvcnQgY29uc3QgRmxvYXQ2NF9MRSA9IHtcbiAgICBsZW46IDgsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRGbG9hdDY0KG9mZnNldCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEZsb2F0NjQob2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyA4O1xuICAgIH1cbn07XG4vKipcbiAqIElFRUUgNzU0IDgwLWJpdCAoZXh0ZW5kZWQgcHJlY2lzaW9uKSBmbG9hdCwgYmlnIGVuZGlhblxuICovXG5leHBvcnQgY29uc3QgRmxvYXQ4MF9CRSA9IHtcbiAgICBsZW46IDEwLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBpZWVlNzU0LnJlYWQoYXJyYXksIG9mZnNldCwgZmFsc2UsIDYzLCB0aGlzLmxlbik7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgaWVlZTc1NC53cml0ZShhcnJheSwgdmFsdWUsIG9mZnNldCwgZmFsc2UsIDYzLCB0aGlzLmxlbik7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyB0aGlzLmxlbjtcbiAgICB9XG59O1xuLyoqXG4gKiBJRUVFIDc1NCA4MC1iaXQgKGV4dGVuZGVkIHByZWNpc2lvbikgZmxvYXQsIGxpdHRsZSBlbmRpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IEZsb2F0ODBfTEUgPSB7XG4gICAgbGVuOiAxMCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gaWVlZTc1NC5yZWFkKGFycmF5LCBvZmZzZXQsIHRydWUsIDYzLCB0aGlzLmxlbik7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgaWVlZTc1NC53cml0ZShhcnJheSwgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgNjMsIHRoaXMubGVuKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIHRoaXMubGVuO1xuICAgIH1cbn07XG4vKipcbiAqIElnbm9yZSBhIGdpdmVuIG51bWJlciBvZiBieXRlc1xuICovXG5leHBvcnQgY2xhc3MgSWdub3JlVHlwZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGxlbiBudW1iZXIgb2YgYnl0ZXMgdG8gaWdub3JlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobGVuKSB7XG4gICAgICAgIHRoaXMubGVuID0gbGVuO1xuICAgIH1cbiAgICAvLyBUb0RvOiBkb24ndCByZWFkLCBidXQgc2tpcCBkYXRhXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgIGdldChhcnJheSwgb2ZmKSB7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFVpbnQ4QXJyYXlUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcihsZW4pIHtcbiAgICAgICAgdGhpcy5sZW4gPSBsZW47XG4gICAgfVxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBhcnJheS5zdWJhcnJheShvZmZzZXQsIG9mZnNldCArIHRoaXMubGVuKTtcbiAgICB9XG59XG4vKipcbiAqIENvbnN1bWUgYSBmaXhlZCBudW1iZXIgb2YgYnl0ZXMgZnJvbSB0aGUgc3RyZWFtIGFuZCByZXR1cm4gYSBzdHJpbmcgd2l0aCBhIHNwZWNpZmllZCBlbmNvZGluZy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmluZ1R5cGUge1xuICAgIGNvbnN0cnVjdG9yKGxlbiwgZW5jb2RpbmcpIHtcbiAgICAgICAgdGhpcy5sZW4gPSBsZW47XG4gICAgICAgIHRoaXMuZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgICAgICAgdGhpcy50ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcihlbmNvZGluZyk7XG4gICAgfVxuICAgIGdldCh1aW50OEFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dERlY29kZXIuZGVjb2RlKHVpbnQ4QXJyYXkuc3ViYXJyYXkob2Zmc2V0LCBvZmZzZXQgKyB0aGlzLmxlbikpO1xuICAgIH1cbn1cbi8qKlxuICogQU5TSSBMYXRpbiAxIFN0cmluZ1xuICogVXNpbmcgd2luZG93cy0xMjUyIC8gSVNPIDg4NTktMSBkZWNvZGluZ1xuICovXG5leHBvcnQgY2xhc3MgQW5zaVN0cmluZ1R5cGUge1xuICAgIGNvbnN0cnVjdG9yKGxlbikge1xuICAgICAgICB0aGlzLmxlbiA9IGxlbjtcbiAgICAgICAgdGhpcy50ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2Rlcignd2luZG93cy0xMjUyJyk7XG4gICAgfVxuICAgIGdldCh1aW50OEFycmF5LCBvZmZzZXQgPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHREZWNvZGVyLmRlY29kZSh1aW50OEFycmF5LnN1YmFycmF5KG9mZnNldCwgb2Zmc2V0ICsgdGhpcy5sZW4pKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/token-types@6.0.0/node_modules/token-types/lib/index.js\n");

/***/ })

};
;