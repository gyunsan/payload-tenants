"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/fast-copy@3.0.2";
exports.ids = ["vendor-chunks/fast-copy@3.0.2"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/fast-copy@3.0.2/node_modules/fast-copy/dist/cjs/index.cjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/fast-copy@3.0.2/node_modules/fast-copy/dist/cjs/index.cjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar toStringFunction = Function.prototype.toString;\nvar create = Object.create;\nvar toStringObject = Object.prototype.toString;\n/**\n * @classdesc Fallback cache for when WeakMap is not natively supported\n */\nvar LegacyCache = /** @class */ (function () {\n    function LegacyCache() {\n        this._keys = [];\n        this._values = [];\n    }\n    LegacyCache.prototype.has = function (key) {\n        return !!~this._keys.indexOf(key);\n    };\n    LegacyCache.prototype.get = function (key) {\n        return this._values[this._keys.indexOf(key)];\n    };\n    LegacyCache.prototype.set = function (key, value) {\n        this._keys.push(key);\n        this._values.push(value);\n    };\n    return LegacyCache;\n}());\nfunction createCacheLegacy() {\n    return new LegacyCache();\n}\nfunction createCacheModern() {\n    return new WeakMap();\n}\n/**\n * Get a new cache object to prevent circular references.\n */\nvar createCache = typeof WeakMap !== 'undefined' ? createCacheModern : createCacheLegacy;\n/**\n * Get an empty version of the object with the same prototype it has.\n */\nfunction getCleanClone(prototype) {\n    if (!prototype) {\n        return create(null);\n    }\n    var Constructor = prototype.constructor;\n    if (Constructor === Object) {\n        return prototype === Object.prototype ? {} : create(prototype);\n    }\n    if (Constructor &&\n        ~toStringFunction.call(Constructor).indexOf('[native code]')) {\n        try {\n            return new Constructor();\n        }\n        catch (_a) { }\n    }\n    return create(prototype);\n}\nfunction getRegExpFlagsLegacy(regExp) {\n    var flags = '';\n    if (regExp.global) {\n        flags += 'g';\n    }\n    if (regExp.ignoreCase) {\n        flags += 'i';\n    }\n    if (regExp.multiline) {\n        flags += 'm';\n    }\n    if (regExp.unicode) {\n        flags += 'u';\n    }\n    if (regExp.sticky) {\n        flags += 'y';\n    }\n    return flags;\n}\nfunction getRegExpFlagsModern(regExp) {\n    return regExp.flags;\n}\n/**\n * Get the flags to apply to the copied regexp.\n */\nvar getRegExpFlags = /test/g.flags === 'g' ? getRegExpFlagsModern : getRegExpFlagsLegacy;\nfunction getTagLegacy(value) {\n    var type = toStringObject.call(value);\n    return type.substring(8, type.length - 1);\n}\nfunction getTagModern(value) {\n    return value[Symbol.toStringTag] || getTagLegacy(value);\n}\n/**\n * Get the tag of the value passed, so that the correct copier can be used.\n */\nvar getTag = typeof Symbol !== 'undefined' ? getTagModern : getTagLegacy;\n\nvar defineProperty = Object.defineProperty, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar _a = Object.prototype, hasOwnProperty = _a.hasOwnProperty, propertyIsEnumerable = _a.propertyIsEnumerable;\nvar SUPPORTS_SYMBOL = typeof getOwnPropertySymbols === 'function';\nfunction getStrictPropertiesModern(object) {\n    return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));\n}\n/**\n * Get the properites used when copying objects strictly. This includes both keys and symbols.\n */\nvar getStrictProperties = SUPPORTS_SYMBOL\n    ? getStrictPropertiesModern\n    : getOwnPropertyNames;\n/**\n * Striclty copy all properties contained on the object.\n */\nfunction copyOwnPropertiesStrict(value, clone, state) {\n    var properties = getStrictProperties(value);\n    for (var index = 0, length_1 = properties.length, property = void 0, descriptor = void 0; index < length_1; ++index) {\n        property = properties[index];\n        if (property === 'callee' || property === 'caller') {\n            continue;\n        }\n        descriptor = getOwnPropertyDescriptor(value, property);\n        if (!descriptor) {\n            // In extra edge cases where the property descriptor cannot be retrived, fall back to\n            // the loose assignment.\n            clone[property] = state.copier(value[property], state);\n            continue;\n        }\n        // Only clone the value if actually a value, not a getter / setter.\n        if (!descriptor.get && !descriptor.set) {\n            descriptor.value = state.copier(descriptor.value, state);\n        }\n        try {\n            defineProperty(clone, property, descriptor);\n        }\n        catch (error) {\n            // Tee above can fail on node in edge cases, so fall back to the loose assignment.\n            clone[property] = descriptor.value;\n        }\n    }\n    return clone;\n}\n/**\n * Deeply copy the indexed values in the array.\n */\nfunction copyArrayLoose(array, state) {\n    var clone = new state.Constructor();\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(array, clone);\n    for (var index = 0, length_2 = array.length; index < length_2; ++index) {\n        clone[index] = state.copier(array[index], state);\n    }\n    return clone;\n}\n/**\n * Deeply copy the indexed values in the array, as well as any custom properties.\n */\nfunction copyArrayStrict(array, state) {\n    var clone = new state.Constructor();\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(array, clone);\n    return copyOwnPropertiesStrict(array, clone, state);\n}\n/**\n * Copy the contents of the ArrayBuffer.\n */\nfunction copyArrayBuffer(arrayBuffer, _state) {\n    return arrayBuffer.slice(0);\n}\n/**\n * Create a new Blob with the contents of the original.\n */\nfunction copyBlob(blob, _state) {\n    return blob.slice(0, blob.size, blob.type);\n}\n/**\n * Create a new DataView with the contents of the original.\n */\nfunction copyDataView(dataView, state) {\n    return new state.Constructor(copyArrayBuffer(dataView.buffer));\n}\n/**\n * Create a new Date based on the time of the original.\n */\nfunction copyDate(date, state) {\n    return new state.Constructor(date.getTime());\n}\n/**\n * Deeply copy the keys and values of the original.\n */\nfunction copyMapLoose(map, state) {\n    var clone = new state.Constructor();\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(map, clone);\n    map.forEach(function (value, key) {\n        clone.set(key, state.copier(value, state));\n    });\n    return clone;\n}\n/**\n * Deeply copy the keys and values of the original, as well as any custom properties.\n */\nfunction copyMapStrict(map, state) {\n    return copyOwnPropertiesStrict(map, copyMapLoose(map, state), state);\n}\nfunction copyObjectLooseLegacy(object, state) {\n    var clone = getCleanClone(state.prototype);\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(object, clone);\n    for (var key in object) {\n        if (hasOwnProperty.call(object, key)) {\n            clone[key] = state.copier(object[key], state);\n        }\n    }\n    return clone;\n}\nfunction copyObjectLooseModern(object, state) {\n    var clone = getCleanClone(state.prototype);\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(object, clone);\n    for (var key in object) {\n        if (hasOwnProperty.call(object, key)) {\n            clone[key] = state.copier(object[key], state);\n        }\n    }\n    var symbols = getOwnPropertySymbols(object);\n    for (var index = 0, length_3 = symbols.length, symbol = void 0; index < length_3; ++index) {\n        symbol = symbols[index];\n        if (propertyIsEnumerable.call(object, symbol)) {\n            clone[symbol] = state.copier(object[symbol], state);\n        }\n    }\n    return clone;\n}\n/**\n * Deeply copy the properties (keys and symbols) and values of the original.\n */\nvar copyObjectLoose = SUPPORTS_SYMBOL\n    ? copyObjectLooseModern\n    : copyObjectLooseLegacy;\n/**\n * Deeply copy the properties (keys and symbols) and values of the original, as well\n * as any hidden or non-enumerable properties.\n */\nfunction copyObjectStrict(object, state) {\n    var clone = getCleanClone(state.prototype);\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(object, clone);\n    return copyOwnPropertiesStrict(object, clone, state);\n}\n/**\n * Create a new primitive wrapper from the value of the original.\n */\nfunction copyPrimitiveWrapper(primitiveObject, state) {\n    return new state.Constructor(primitiveObject.valueOf());\n}\n/**\n * Create a new RegExp based on the value and flags of the original.\n */\nfunction copyRegExp(regExp, state) {\n    var clone = new state.Constructor(regExp.source, getRegExpFlags(regExp));\n    clone.lastIndex = regExp.lastIndex;\n    return clone;\n}\n/**\n * Return the original value (an identity function).\n *\n * @note\n * THis is used for objects that cannot be copied, such as WeakMap.\n */\nfunction copySelf(value, _state) {\n    return value;\n}\n/**\n * Deeply copy the values of the original.\n */\nfunction copySetLoose(set, state) {\n    var clone = new state.Constructor();\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(set, clone);\n    set.forEach(function (value) {\n        clone.add(state.copier(value, state));\n    });\n    return clone;\n}\n/**\n * Deeply copy the values of the original, as well as any custom properties.\n */\nfunction copySetStrict(set, state) {\n    return copyOwnPropertiesStrict(set, copySetLoose(set, state), state);\n}\n\nvar isArray = Array.isArray;\nvar assign = Object.assign;\nvar getPrototypeOf = Object.getPrototypeOf || (function (obj) { return obj.__proto__; });\nvar DEFAULT_LOOSE_OPTIONS = {\n    array: copyArrayLoose,\n    arrayBuffer: copyArrayBuffer,\n    blob: copyBlob,\n    dataView: copyDataView,\n    date: copyDate,\n    error: copySelf,\n    map: copyMapLoose,\n    object: copyObjectLoose,\n    regExp: copyRegExp,\n    set: copySetLoose,\n};\nvar DEFAULT_STRICT_OPTIONS = assign({}, DEFAULT_LOOSE_OPTIONS, {\n    array: copyArrayStrict,\n    map: copyMapStrict,\n    object: copyObjectStrict,\n    set: copySetStrict,\n});\n/**\n * Get the copiers used for each specific object tag.\n */\nfunction getTagSpecificCopiers(options) {\n    return {\n        Arguments: options.object,\n        Array: options.array,\n        ArrayBuffer: options.arrayBuffer,\n        Blob: options.blob,\n        Boolean: copyPrimitiveWrapper,\n        DataView: options.dataView,\n        Date: options.date,\n        Error: options.error,\n        Float32Array: options.arrayBuffer,\n        Float64Array: options.arrayBuffer,\n        Int8Array: options.arrayBuffer,\n        Int16Array: options.arrayBuffer,\n        Int32Array: options.arrayBuffer,\n        Map: options.map,\n        Number: copyPrimitiveWrapper,\n        Object: options.object,\n        Promise: copySelf,\n        RegExp: options.regExp,\n        Set: options.set,\n        String: copyPrimitiveWrapper,\n        WeakMap: copySelf,\n        WeakSet: copySelf,\n        Uint8Array: options.arrayBuffer,\n        Uint8ClampedArray: options.arrayBuffer,\n        Uint16Array: options.arrayBuffer,\n        Uint32Array: options.arrayBuffer,\n        Uint64Array: options.arrayBuffer,\n    };\n}\n/**\n * Create a custom copier based on the object-specific copy methods passed.\n */\nfunction createCopier(options) {\n    var normalizedOptions = assign({}, DEFAULT_LOOSE_OPTIONS, options);\n    var tagSpecificCopiers = getTagSpecificCopiers(normalizedOptions);\n    var array = tagSpecificCopiers.Array, object = tagSpecificCopiers.Object;\n    function copier(value, state) {\n        state.prototype = state.Constructor = undefined;\n        if (!value || typeof value !== 'object') {\n            return value;\n        }\n        if (state.cache.has(value)) {\n            return state.cache.get(value);\n        }\n        state.prototype = getPrototypeOf(value);\n        state.Constructor = state.prototype && state.prototype.constructor;\n        // plain objects\n        if (!state.Constructor || state.Constructor === Object) {\n            return object(value, state);\n        }\n        // arrays\n        if (isArray(value)) {\n            return array(value, state);\n        }\n        var tagSpecificCopier = tagSpecificCopiers[getTag(value)];\n        if (tagSpecificCopier) {\n            return tagSpecificCopier(value, state);\n        }\n        return typeof value.then === 'function' ? value : object(value, state);\n    }\n    return function copy(value) {\n        return copier(value, {\n            Constructor: undefined,\n            cache: createCache(),\n            copier: copier,\n            prototype: undefined,\n        });\n    };\n}\n/**\n * Create a custom copier based on the object-specific copy methods passed, defaulting to the\n * same internals as `copyStrict`.\n */\nfunction createStrictCopier(options) {\n    return createCopier(assign({}, DEFAULT_STRICT_OPTIONS, options));\n}\n/**\n * Copy an value deeply as much as possible, where strict recreation of object properties\n * are maintained. All properties (including non-enumerable ones) are copied with their\n * original property descriptors on both objects and arrays.\n */\nvar copyStrict = createStrictCopier({});\n/**\n * Copy an value deeply as much as possible.\n */\nvar index = createCopier({});\n\nexports.copyStrict = copyStrict;\nexports.createCopier = createCopier;\nexports.createStrictCopier = createStrictCopier;\nexports[\"default\"] = index;\n//# sourceMappingURL=index.cjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1jb3B5QDMuMC4yL25vZGVfbW9kdWxlcy9mYXN0LWNvcHkvZGlzdC9janMvaW5kZXguY2pzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLGtCQUFrQjtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGtCQUFrQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGtCQUFrQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnRUFBZ0UsdUJBQXVCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0Isa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIsa0JBQWU7QUFDZiIsInNvdXJjZXMiOlsiL3Jvb3QvcHJvamVjdHMvbXVsdGktdGVuYW50L25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWNvcHlAMy4wLjIvbm9kZV9tb2R1bGVzL2Zhc3QtY29weS9kaXN0L2Nqcy9pbmRleC5janMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdG9TdHJpbmdGdW5jdGlvbiA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbnZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIHRvU3RyaW5nT2JqZWN0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbi8qKlxuICogQGNsYXNzZGVzYyBGYWxsYmFjayBjYWNoZSBmb3Igd2hlbiBXZWFrTWFwIGlzIG5vdCBuYXRpdmVseSBzdXBwb3J0ZWRcbiAqL1xudmFyIExlZ2FjeUNhY2hlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExlZ2FjeUNhY2hlKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0gW107XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtdO1xuICAgIH1cbiAgICBMZWdhY3lDYWNoZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gISF+dGhpcy5fa2V5cy5pbmRleE9mKGtleSk7XG4gICAgfTtcbiAgICBMZWdhY3lDYWNoZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzW3RoaXMuX2tleXMuaW5kZXhPZihrZXkpXTtcbiAgICB9O1xuICAgIExlZ2FjeUNhY2hlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIExlZ2FjeUNhY2hlO1xufSgpKTtcbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlTGVnYWN5KCkge1xuICAgIHJldHVybiBuZXcgTGVnYWN5Q2FjaGUoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlTW9kZXJuKCkge1xuICAgIHJldHVybiBuZXcgV2Vha01hcCgpO1xufVxuLyoqXG4gKiBHZXQgYSBuZXcgY2FjaGUgb2JqZWN0IHRvIHByZXZlbnQgY2lyY3VsYXIgcmVmZXJlbmNlcy5cbiAqL1xudmFyIGNyZWF0ZUNhY2hlID0gdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnID8gY3JlYXRlQ2FjaGVNb2Rlcm4gOiBjcmVhdGVDYWNoZUxlZ2FjeTtcbi8qKlxuICogR2V0IGFuIGVtcHR5IHZlcnNpb24gb2YgdGhlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHByb3RvdHlwZSBpdCBoYXMuXG4gKi9cbmZ1bmN0aW9uIGdldENsZWFuQ2xvbmUocHJvdG90eXBlKSB7XG4gICAgaWYgKCFwcm90b3R5cGUpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgdmFyIENvbnN0cnVjdG9yID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgPyB7fSA6IGNyZWF0ZShwcm90b3R5cGUpO1xuICAgIH1cbiAgICBpZiAoQ29uc3RydWN0b3IgJiZcbiAgICAgICAgfnRvU3RyaW5nRnVuY3Rpb24uY2FsbChDb25zdHJ1Y3RvcikuaW5kZXhPZignW25hdGl2ZSBjb2RlXScpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7IH1cbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZShwcm90b3R5cGUpO1xufVxuZnVuY3Rpb24gZ2V0UmVnRXhwRmxhZ3NMZWdhY3kocmVnRXhwKSB7XG4gICAgdmFyIGZsYWdzID0gJyc7XG4gICAgaWYgKHJlZ0V4cC5nbG9iYWwpIHtcbiAgICAgICAgZmxhZ3MgKz0gJ2cnO1xuICAgIH1cbiAgICBpZiAocmVnRXhwLmlnbm9yZUNhc2UpIHtcbiAgICAgICAgZmxhZ3MgKz0gJ2knO1xuICAgIH1cbiAgICBpZiAocmVnRXhwLm11bHRpbGluZSkge1xuICAgICAgICBmbGFncyArPSAnbSc7XG4gICAgfVxuICAgIGlmIChyZWdFeHAudW5pY29kZSkge1xuICAgICAgICBmbGFncyArPSAndSc7XG4gICAgfVxuICAgIGlmIChyZWdFeHAuc3RpY2t5KSB7XG4gICAgICAgIGZsYWdzICs9ICd5JztcbiAgICB9XG4gICAgcmV0dXJuIGZsYWdzO1xufVxuZnVuY3Rpb24gZ2V0UmVnRXhwRmxhZ3NNb2Rlcm4ocmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ0V4cC5mbGFncztcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyB0byBhcHBseSB0byB0aGUgY29waWVkIHJlZ2V4cC5cbiAqL1xudmFyIGdldFJlZ0V4cEZsYWdzID0gL3Rlc3QvZy5mbGFncyA9PT0gJ2cnID8gZ2V0UmVnRXhwRmxhZ3NNb2Rlcm4gOiBnZXRSZWdFeHBGbGFnc0xlZ2FjeTtcbmZ1bmN0aW9uIGdldFRhZ0xlZ2FjeSh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gdG9TdHJpbmdPYmplY3QuY2FsbCh2YWx1ZSk7XG4gICAgcmV0dXJuIHR5cGUuc3Vic3RyaW5nKDgsIHR5cGUubGVuZ3RoIC0gMSk7XG59XG5mdW5jdGlvbiBnZXRUYWdNb2Rlcm4odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCBnZXRUYWdMZWdhY3kodmFsdWUpO1xufVxuLyoqXG4gKiBHZXQgdGhlIHRhZyBvZiB0aGUgdmFsdWUgcGFzc2VkLCBzbyB0aGF0IHRoZSBjb3JyZWN0IGNvcGllciBjYW4gYmUgdXNlZC5cbiAqL1xudmFyIGdldFRhZyA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gZ2V0VGFnTW9kZXJuIDogZ2V0VGFnTGVnYWN5O1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHksIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcywgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfYSA9IE9iamVjdC5wcm90b3R5cGUsIGhhc093blByb3BlcnR5ID0gX2EuaGFzT3duUHJvcGVydHksIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gX2EucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU1VQUE9SVFNfU1lNQk9MID0gdHlwZW9mIGdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJztcbmZ1bmN0aW9uIGdldFN0cmljdFByb3BlcnRpZXNNb2Rlcm4ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KS5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkpO1xufVxuLyoqXG4gKiBHZXQgdGhlIHByb3Blcml0ZXMgdXNlZCB3aGVuIGNvcHlpbmcgb2JqZWN0cyBzdHJpY3RseS4gVGhpcyBpbmNsdWRlcyBib3RoIGtleXMgYW5kIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTdHJpY3RQcm9wZXJ0aWVzID0gU1VQUE9SVFNfU1lNQk9MXG4gICAgPyBnZXRTdHJpY3RQcm9wZXJ0aWVzTW9kZXJuXG4gICAgOiBnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuLyoqXG4gKiBTdHJpY2x0eSBjb3B5IGFsbCBwcm9wZXJ0aWVzIGNvbnRhaW5lZCBvbiB0aGUgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjb3B5T3duUHJvcGVydGllc1N0cmljdCh2YWx1ZSwgY2xvbmUsIHN0YXRlKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBnZXRTdHJpY3RQcm9wZXJ0aWVzKHZhbHVlKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aF8xID0gcHJvcGVydGllcy5sZW5ndGgsIHByb3BlcnR5ID0gdm9pZCAwLCBkZXNjcmlwdG9yID0gdm9pZCAwOyBpbmRleCA8IGxlbmd0aF8xOyArK2luZGV4KSB7XG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydGllc1tpbmRleF07XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2NhbGxlZScgfHwgcHJvcGVydHkgPT09ICdjYWxsZXInKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgICAgIGlmICghZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgLy8gSW4gZXh0cmEgZWRnZSBjYXNlcyB3aGVyZSB0aGUgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgYmUgcmV0cml2ZWQsIGZhbGwgYmFjayB0b1xuICAgICAgICAgICAgLy8gdGhlIGxvb3NlIGFzc2lnbm1lbnQuXG4gICAgICAgICAgICBjbG9uZVtwcm9wZXJ0eV0gPSBzdGF0ZS5jb3BpZXIodmFsdWVbcHJvcGVydHldLCBzdGF0ZSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPbmx5IGNsb25lIHRoZSB2YWx1ZSBpZiBhY3R1YWxseSBhIHZhbHVlLCBub3QgYSBnZXR0ZXIgLyBzZXR0ZXIuXG4gICAgICAgIGlmICghZGVzY3JpcHRvci5nZXQgJiYgIWRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gc3RhdGUuY29waWVyKGRlc2NyaXB0b3IudmFsdWUsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkoY2xvbmUsIHByb3BlcnR5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRlZSBhYm92ZSBjYW4gZmFpbCBvbiBub2RlIGluIGVkZ2UgY2FzZXMsIHNvIGZhbGwgYmFjayB0byB0aGUgbG9vc2UgYXNzaWdubWVudC5cbiAgICAgICAgICAgIGNsb25lW3Byb3BlcnR5XSA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsb25lO1xufVxuLyoqXG4gKiBEZWVwbHkgY29weSB0aGUgaW5kZXhlZCB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXlMb29zZShhcnJheSwgc3RhdGUpIHtcbiAgICB2YXIgY2xvbmUgPSBuZXcgc3RhdGUuQ29uc3RydWN0b3IoKTtcbiAgICAvLyBzZXQgaW4gdGhlIGNhY2hlIGltbWVkaWF0ZWx5IHRvIGJlIGFibGUgdG8gcmV1c2UgdGhlIG9iamVjdCByZWN1cnNpdmVseVxuICAgIHN0YXRlLmNhY2hlLnNldChhcnJheSwgY2xvbmUpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoXzIgPSBhcnJheS5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoXzI7ICsraW5kZXgpIHtcbiAgICAgICAgY2xvbmVbaW5kZXhdID0gc3RhdGUuY29waWVyKGFycmF5W2luZGV4XSwgc3RhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmU7XG59XG4vKipcbiAqIERlZXBseSBjb3B5IHRoZSBpbmRleGVkIHZhbHVlcyBpbiB0aGUgYXJyYXksIGFzIHdlbGwgYXMgYW55IGN1c3RvbSBwcm9wZXJ0aWVzLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXlTdHJpY3QoYXJyYXksIHN0YXRlKSB7XG4gICAgdmFyIGNsb25lID0gbmV3IHN0YXRlLkNvbnN0cnVjdG9yKCk7XG4gICAgLy8gc2V0IGluIHRoZSBjYWNoZSBpbW1lZGlhdGVseSB0byBiZSBhYmxlIHRvIHJldXNlIHRoZSBvYmplY3QgcmVjdXJzaXZlbHlcbiAgICBzdGF0ZS5jYWNoZS5zZXQoYXJyYXksIGNsb25lKTtcbiAgICByZXR1cm4gY29weU93blByb3BlcnRpZXNTdHJpY3QoYXJyYXksIGNsb25lLCBzdGF0ZSk7XG59XG4vKipcbiAqIENvcHkgdGhlIGNvbnRlbnRzIG9mIHRoZSBBcnJheUJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5QnVmZmVyKGFycmF5QnVmZmVyLCBfc3RhdGUpIHtcbiAgICByZXR1cm4gYXJyYXlCdWZmZXIuc2xpY2UoMCk7XG59XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBCbG9iIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBvcmlnaW5hbC5cbiAqL1xuZnVuY3Rpb24gY29weUJsb2IoYmxvYiwgX3N0YXRlKSB7XG4gICAgcmV0dXJuIGJsb2Iuc2xpY2UoMCwgYmxvYi5zaXplLCBibG9iLnR5cGUpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgRGF0YVZpZXcgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIG9yaWdpbmFsLlxuICovXG5mdW5jdGlvbiBjb3B5RGF0YVZpZXcoZGF0YVZpZXcsIHN0YXRlKSB7XG4gICAgcmV0dXJuIG5ldyBzdGF0ZS5Db25zdHJ1Y3Rvcihjb3B5QXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBEYXRlIGJhc2VkIG9uIHRoZSB0aW1lIG9mIHRoZSBvcmlnaW5hbC5cbiAqL1xuZnVuY3Rpb24gY29weURhdGUoZGF0ZSwgc3RhdGUpIHtcbiAgICByZXR1cm4gbmV3IHN0YXRlLkNvbnN0cnVjdG9yKGRhdGUuZ2V0VGltZSgpKTtcbn1cbi8qKlxuICogRGVlcGx5IGNvcHkgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiB0aGUgb3JpZ2luYWwuXG4gKi9cbmZ1bmN0aW9uIGNvcHlNYXBMb29zZShtYXAsIHN0YXRlKSB7XG4gICAgdmFyIGNsb25lID0gbmV3IHN0YXRlLkNvbnN0cnVjdG9yKCk7XG4gICAgLy8gc2V0IGluIHRoZSBjYWNoZSBpbW1lZGlhdGVseSB0byBiZSBhYmxlIHRvIHJldXNlIHRoZSBvYmplY3QgcmVjdXJzaXZlbHlcbiAgICBzdGF0ZS5jYWNoZS5zZXQobWFwLCBjbG9uZSk7XG4gICAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgY2xvbmUuc2V0KGtleSwgc3RhdGUuY29waWVyKHZhbHVlLCBzdGF0ZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBjbG9uZTtcbn1cbi8qKlxuICogRGVlcGx5IGNvcHkgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiB0aGUgb3JpZ2luYWwsIGFzIHdlbGwgYXMgYW55IGN1c3RvbSBwcm9wZXJ0aWVzLlxuICovXG5mdW5jdGlvbiBjb3B5TWFwU3RyaWN0KG1hcCwgc3RhdGUpIHtcbiAgICByZXR1cm4gY29weU93blByb3BlcnRpZXNTdHJpY3QobWFwLCBjb3B5TWFwTG9vc2UobWFwLCBzdGF0ZSksIHN0YXRlKTtcbn1cbmZ1bmN0aW9uIGNvcHlPYmplY3RMb29zZUxlZ2FjeShvYmplY3QsIHN0YXRlKSB7XG4gICAgdmFyIGNsb25lID0gZ2V0Q2xlYW5DbG9uZShzdGF0ZS5wcm90b3R5cGUpO1xuICAgIC8vIHNldCBpbiB0aGUgY2FjaGUgaW1tZWRpYXRlbHkgdG8gYmUgYWJsZSB0byByZXVzZSB0aGUgb2JqZWN0IHJlY3Vyc2l2ZWx5XG4gICAgc3RhdGUuY2FjaGUuc2V0KG9iamVjdCwgY2xvbmUpO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICBjbG9uZVtrZXldID0gc3RhdGUuY29waWVyKG9iamVjdFtrZXldLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsb25lO1xufVxuZnVuY3Rpb24gY29weU9iamVjdExvb3NlTW9kZXJuKG9iamVjdCwgc3RhdGUpIHtcbiAgICB2YXIgY2xvbmUgPSBnZXRDbGVhbkNsb25lKHN0YXRlLnByb3RvdHlwZSk7XG4gICAgLy8gc2V0IGluIHRoZSBjYWNoZSBpbW1lZGlhdGVseSB0byBiZSBhYmxlIHRvIHJldXNlIHRoZSBvYmplY3QgcmVjdXJzaXZlbHlcbiAgICBzdGF0ZS5jYWNoZS5zZXQob2JqZWN0LCBjbG9uZSk7XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgIGNsb25lW2tleV0gPSBzdGF0ZS5jb3BpZXIob2JqZWN0W2tleV0sIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgc3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoXzMgPSBzeW1ib2xzLmxlbmd0aCwgc3ltYm9sID0gdm9pZCAwOyBpbmRleCA8IGxlbmd0aF8zOyArK2luZGV4KSB7XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbHNbaW5kZXhdO1xuICAgICAgICBpZiAocHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCkpIHtcbiAgICAgICAgICAgIGNsb25lW3N5bWJvbF0gPSBzdGF0ZS5jb3BpZXIob2JqZWN0W3N5bWJvbF0sIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xvbmU7XG59XG4vKipcbiAqIERlZXBseSBjb3B5IHRoZSBwcm9wZXJ0aWVzIChrZXlzIGFuZCBzeW1ib2xzKSBhbmQgdmFsdWVzIG9mIHRoZSBvcmlnaW5hbC5cbiAqL1xudmFyIGNvcHlPYmplY3RMb29zZSA9IFNVUFBPUlRTX1NZTUJPTFxuICAgID8gY29weU9iamVjdExvb3NlTW9kZXJuXG4gICAgOiBjb3B5T2JqZWN0TG9vc2VMZWdhY3k7XG4vKipcbiAqIERlZXBseSBjb3B5IHRoZSBwcm9wZXJ0aWVzIChrZXlzIGFuZCBzeW1ib2xzKSBhbmQgdmFsdWVzIG9mIHRoZSBvcmlnaW5hbCwgYXMgd2VsbFxuICogYXMgYW55IGhpZGRlbiBvciBub24tZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0U3RyaWN0KG9iamVjdCwgc3RhdGUpIHtcbiAgICB2YXIgY2xvbmUgPSBnZXRDbGVhbkNsb25lKHN0YXRlLnByb3RvdHlwZSk7XG4gICAgLy8gc2V0IGluIHRoZSBjYWNoZSBpbW1lZGlhdGVseSB0byBiZSBhYmxlIHRvIHJldXNlIHRoZSBvYmplY3QgcmVjdXJzaXZlbHlcbiAgICBzdGF0ZS5jYWNoZS5zZXQob2JqZWN0LCBjbG9uZSk7XG4gICAgcmV0dXJuIGNvcHlPd25Qcm9wZXJ0aWVzU3RyaWN0KG9iamVjdCwgY2xvbmUsIHN0YXRlKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHByaW1pdGl2ZSB3cmFwcGVyIGZyb20gdGhlIHZhbHVlIG9mIHRoZSBvcmlnaW5hbC5cbiAqL1xuZnVuY3Rpb24gY29weVByaW1pdGl2ZVdyYXBwZXIocHJpbWl0aXZlT2JqZWN0LCBzdGF0ZSkge1xuICAgIHJldHVybiBuZXcgc3RhdGUuQ29uc3RydWN0b3IocHJpbWl0aXZlT2JqZWN0LnZhbHVlT2YoKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBSZWdFeHAgYmFzZWQgb24gdGhlIHZhbHVlIGFuZCBmbGFncyBvZiB0aGUgb3JpZ2luYWwuXG4gKi9cbmZ1bmN0aW9uIGNvcHlSZWdFeHAocmVnRXhwLCBzdGF0ZSkge1xuICAgIHZhciBjbG9uZSA9IG5ldyBzdGF0ZS5Db25zdHJ1Y3RvcihyZWdFeHAuc291cmNlLCBnZXRSZWdFeHBGbGFncyhyZWdFeHApKTtcbiAgICBjbG9uZS5sYXN0SW5kZXggPSByZWdFeHAubGFzdEluZGV4O1xuICAgIHJldHVybiBjbG9uZTtcbn1cbi8qKlxuICogUmV0dXJuIHRoZSBvcmlnaW5hbCB2YWx1ZSAoYW4gaWRlbnRpdHkgZnVuY3Rpb24pLlxuICpcbiAqIEBub3RlXG4gKiBUSGlzIGlzIHVzZWQgZm9yIG9iamVjdHMgdGhhdCBjYW5ub3QgYmUgY29waWVkLCBzdWNoIGFzIFdlYWtNYXAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTZWxmKHZhbHVlLCBfc3RhdGUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIERlZXBseSBjb3B5IHRoZSB2YWx1ZXMgb2YgdGhlIG9yaWdpbmFsLlxuICovXG5mdW5jdGlvbiBjb3B5U2V0TG9vc2Uoc2V0LCBzdGF0ZSkge1xuICAgIHZhciBjbG9uZSA9IG5ldyBzdGF0ZS5Db25zdHJ1Y3RvcigpO1xuICAgIC8vIHNldCBpbiB0aGUgY2FjaGUgaW1tZWRpYXRlbHkgdG8gYmUgYWJsZSB0byByZXVzZSB0aGUgb2JqZWN0IHJlY3Vyc2l2ZWx5XG4gICAgc3RhdGUuY2FjaGUuc2V0KHNldCwgY2xvbmUpO1xuICAgIHNldC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBjbG9uZS5hZGQoc3RhdGUuY29waWVyKHZhbHVlLCBzdGF0ZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBjbG9uZTtcbn1cbi8qKlxuICogRGVlcGx5IGNvcHkgdGhlIHZhbHVlcyBvZiB0aGUgb3JpZ2luYWwsIGFzIHdlbGwgYXMgYW55IGN1c3RvbSBwcm9wZXJ0aWVzLlxuICovXG5mdW5jdGlvbiBjb3B5U2V0U3RyaWN0KHNldCwgc3RhdGUpIHtcbiAgICByZXR1cm4gY29weU93blByb3BlcnRpZXNTdHJpY3Qoc2V0LCBjb3B5U2V0TG9vc2Uoc2V0LCBzdGF0ZSksIHN0YXRlKTtcbn1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai5fX3Byb3RvX187IH0pO1xudmFyIERFRkFVTFRfTE9PU0VfT1BUSU9OUyA9IHtcbiAgICBhcnJheTogY29weUFycmF5TG9vc2UsXG4gICAgYXJyYXlCdWZmZXI6IGNvcHlBcnJheUJ1ZmZlcixcbiAgICBibG9iOiBjb3B5QmxvYixcbiAgICBkYXRhVmlldzogY29weURhdGFWaWV3LFxuICAgIGRhdGU6IGNvcHlEYXRlLFxuICAgIGVycm9yOiBjb3B5U2VsZixcbiAgICBtYXA6IGNvcHlNYXBMb29zZSxcbiAgICBvYmplY3Q6IGNvcHlPYmplY3RMb29zZSxcbiAgICByZWdFeHA6IGNvcHlSZWdFeHAsXG4gICAgc2V0OiBjb3B5U2V0TG9vc2UsXG59O1xudmFyIERFRkFVTFRfU1RSSUNUX09QVElPTlMgPSBhc3NpZ24oe30sIERFRkFVTFRfTE9PU0VfT1BUSU9OUywge1xuICAgIGFycmF5OiBjb3B5QXJyYXlTdHJpY3QsXG4gICAgbWFwOiBjb3B5TWFwU3RyaWN0LFxuICAgIG9iamVjdDogY29weU9iamVjdFN0cmljdCxcbiAgICBzZXQ6IGNvcHlTZXRTdHJpY3QsXG59KTtcbi8qKlxuICogR2V0IHRoZSBjb3BpZXJzIHVzZWQgZm9yIGVhY2ggc3BlY2lmaWMgb2JqZWN0IHRhZy5cbiAqL1xuZnVuY3Rpb24gZ2V0VGFnU3BlY2lmaWNDb3BpZXJzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBBcmd1bWVudHM6IG9wdGlvbnMub2JqZWN0LFxuICAgICAgICBBcnJheTogb3B0aW9ucy5hcnJheSxcbiAgICAgICAgQXJyYXlCdWZmZXI6IG9wdGlvbnMuYXJyYXlCdWZmZXIsXG4gICAgICAgIEJsb2I6IG9wdGlvbnMuYmxvYixcbiAgICAgICAgQm9vbGVhbjogY29weVByaW1pdGl2ZVdyYXBwZXIsXG4gICAgICAgIERhdGFWaWV3OiBvcHRpb25zLmRhdGFWaWV3LFxuICAgICAgICBEYXRlOiBvcHRpb25zLmRhdGUsXG4gICAgICAgIEVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgICAgICBGbG9hdDMyQXJyYXk6IG9wdGlvbnMuYXJyYXlCdWZmZXIsXG4gICAgICAgIEZsb2F0NjRBcnJheTogb3B0aW9ucy5hcnJheUJ1ZmZlcixcbiAgICAgICAgSW50OEFycmF5OiBvcHRpb25zLmFycmF5QnVmZmVyLFxuICAgICAgICBJbnQxNkFycmF5OiBvcHRpb25zLmFycmF5QnVmZmVyLFxuICAgICAgICBJbnQzMkFycmF5OiBvcHRpb25zLmFycmF5QnVmZmVyLFxuICAgICAgICBNYXA6IG9wdGlvbnMubWFwLFxuICAgICAgICBOdW1iZXI6IGNvcHlQcmltaXRpdmVXcmFwcGVyLFxuICAgICAgICBPYmplY3Q6IG9wdGlvbnMub2JqZWN0LFxuICAgICAgICBQcm9taXNlOiBjb3B5U2VsZixcbiAgICAgICAgUmVnRXhwOiBvcHRpb25zLnJlZ0V4cCxcbiAgICAgICAgU2V0OiBvcHRpb25zLnNldCxcbiAgICAgICAgU3RyaW5nOiBjb3B5UHJpbWl0aXZlV3JhcHBlcixcbiAgICAgICAgV2Vha01hcDogY29weVNlbGYsXG4gICAgICAgIFdlYWtTZXQ6IGNvcHlTZWxmLFxuICAgICAgICBVaW50OEFycmF5OiBvcHRpb25zLmFycmF5QnVmZmVyLFxuICAgICAgICBVaW50OENsYW1wZWRBcnJheTogb3B0aW9ucy5hcnJheUJ1ZmZlcixcbiAgICAgICAgVWludDE2QXJyYXk6IG9wdGlvbnMuYXJyYXlCdWZmZXIsXG4gICAgICAgIFVpbnQzMkFycmF5OiBvcHRpb25zLmFycmF5QnVmZmVyLFxuICAgICAgICBVaW50NjRBcnJheTogb3B0aW9ucy5hcnJheUJ1ZmZlcixcbiAgICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYSBjdXN0b20gY29waWVyIGJhc2VkIG9uIHRoZSBvYmplY3Qtc3BlY2lmaWMgY29weSBtZXRob2RzIHBhc3NlZC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29waWVyKG9wdGlvbnMpIHtcbiAgICB2YXIgbm9ybWFsaXplZE9wdGlvbnMgPSBhc3NpZ24oe30sIERFRkFVTFRfTE9PU0VfT1BUSU9OUywgb3B0aW9ucyk7XG4gICAgdmFyIHRhZ1NwZWNpZmljQ29waWVycyA9IGdldFRhZ1NwZWNpZmljQ29waWVycyhub3JtYWxpemVkT3B0aW9ucyk7XG4gICAgdmFyIGFycmF5ID0gdGFnU3BlY2lmaWNDb3BpZXJzLkFycmF5LCBvYmplY3QgPSB0YWdTcGVjaWZpY0NvcGllcnMuT2JqZWN0O1xuICAgIGZ1bmN0aW9uIGNvcGllcih2YWx1ZSwgc3RhdGUpIHtcbiAgICAgICAgc3RhdGUucHJvdG90eXBlID0gc3RhdGUuQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5jYWNoZS5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuY2FjaGUuZ2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5wcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgICAgIHN0YXRlLkNvbnN0cnVjdG9yID0gc3RhdGUucHJvdG90eXBlICYmIHN0YXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgLy8gcGxhaW4gb2JqZWN0c1xuICAgICAgICBpZiAoIXN0YXRlLkNvbnN0cnVjdG9yIHx8IHN0YXRlLkNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QodmFsdWUsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhcnJheXNcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkodmFsdWUsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFnU3BlY2lmaWNDb3BpZXIgPSB0YWdTcGVjaWZpY0NvcGllcnNbZ2V0VGFnKHZhbHVlKV07XG4gICAgICAgIGlmICh0YWdTcGVjaWZpY0NvcGllcikge1xuICAgICAgICAgICAgcmV0dXJuIHRhZ1NwZWNpZmljQ29waWVyKHZhbHVlLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nID8gdmFsdWUgOiBvYmplY3QodmFsdWUsIHN0YXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvcHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGNvcGllcih2YWx1ZSwge1xuICAgICAgICAgICAgQ29uc3RydWN0b3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNhY2hlOiBjcmVhdGVDYWNoZSgpLFxuICAgICAgICAgICAgY29waWVyOiBjb3BpZXIsXG4gICAgICAgICAgICBwcm90b3R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgY3VzdG9tIGNvcGllciBiYXNlZCBvbiB0aGUgb2JqZWN0LXNwZWNpZmljIGNvcHkgbWV0aG9kcyBwYXNzZWQsIGRlZmF1bHRpbmcgdG8gdGhlXG4gKiBzYW1lIGludGVybmFscyBhcyBgY29weVN0cmljdGAuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0cmljdENvcGllcihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvcGllcihhc3NpZ24oe30sIERFRkFVTFRfU1RSSUNUX09QVElPTlMsIG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ29weSBhbiB2YWx1ZSBkZWVwbHkgYXMgbXVjaCBhcyBwb3NzaWJsZSwgd2hlcmUgc3RyaWN0IHJlY3JlYXRpb24gb2Ygb2JqZWN0IHByb3BlcnRpZXNcbiAqIGFyZSBtYWludGFpbmVkLiBBbGwgcHJvcGVydGllcyAoaW5jbHVkaW5nIG5vbi1lbnVtZXJhYmxlIG9uZXMpIGFyZSBjb3BpZWQgd2l0aCB0aGVpclxuICogb3JpZ2luYWwgcHJvcGVydHkgZGVzY3JpcHRvcnMgb24gYm90aCBvYmplY3RzIGFuZCBhcnJheXMuXG4gKi9cbnZhciBjb3B5U3RyaWN0ID0gY3JlYXRlU3RyaWN0Q29waWVyKHt9KTtcbi8qKlxuICogQ29weSBhbiB2YWx1ZSBkZWVwbHkgYXMgbXVjaCBhcyBwb3NzaWJsZS5cbiAqL1xudmFyIGluZGV4ID0gY3JlYXRlQ29waWVyKHt9KTtcblxuZXhwb3J0cy5jb3B5U3RyaWN0ID0gY29weVN0cmljdDtcbmV4cG9ydHMuY3JlYXRlQ29waWVyID0gY3JlYXRlQ29waWVyO1xuZXhwb3J0cy5jcmVhdGVTdHJpY3RDb3BpZXIgPSBjcmVhdGVTdHJpY3RDb3BpZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNqcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/fast-copy@3.0.2/node_modules/fast-copy/dist/cjs/index.cjs\n");

/***/ })

};
;