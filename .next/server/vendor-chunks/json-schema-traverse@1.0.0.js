"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/json-schema-traverse@1.0.0";
exports.ids = ["vendor-chunks/json-schema-traverse@1.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

eval("\n\nvar traverse = module.exports = function (schema, opts, cb) {\n  // Legacy support for v0.3.1 and earlier.\n  if (typeof opts == 'function') {\n    cb = opts;\n    opts = {};\n  }\n\n  cb = opts.cb || cb;\n  var pre = (typeof cb == 'function') ? cb : cb.pre || function() {};\n  var post = cb.post || function() {};\n\n  _traverse(opts, pre, post, schema, '', schema);\n};\n\n\ntraverse.keywords = {\n  additionalItems: true,\n  items: true,\n  contains: true,\n  additionalProperties: true,\n  propertyNames: true,\n  not: true,\n  if: true,\n  then: true,\n  else: true\n};\n\ntraverse.arrayKeywords = {\n  items: true,\n  allOf: true,\n  anyOf: true,\n  oneOf: true\n};\n\ntraverse.propsKeywords = {\n  $defs: true,\n  definitions: true,\n  properties: true,\n  patternProperties: true,\n  dependencies: true\n};\n\ntraverse.skipKeywords = {\n  default: true,\n  enum: true,\n  const: true,\n  required: true,\n  maximum: true,\n  minimum: true,\n  exclusiveMaximum: true,\n  exclusiveMinimum: true,\n  multipleOf: true,\n  maxLength: true,\n  minLength: true,\n  pattern: true,\n  format: true,\n  maxItems: true,\n  minItems: true,\n  uniqueItems: true,\n  maxProperties: true,\n  minProperties: true\n};\n\n\nfunction _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {\n  if (schema && typeof schema == 'object' && !Array.isArray(schema)) {\n    pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);\n    for (var key in schema) {\n      var sch = schema[key];\n      if (Array.isArray(sch)) {\n        if (key in traverse.arrayKeywords) {\n          for (var i=0; i<sch.length; i++)\n            _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);\n        }\n      } else if (key in traverse.propsKeywords) {\n        if (sch && typeof sch == 'object') {\n          for (var prop in sch)\n            _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);\n        }\n      } else if (key in traverse.keywords || (opts.allKeys && !(key in traverse.skipKeywords))) {\n        _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);\n      }\n    }\n    post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);\n  }\n}\n\n\nfunction escapeJsonPtr(str) {\n  return str.replace(/~/g, '~0').replace(/\\//g, '~1');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vanNvbi1zY2hlbWEtdHJhdmVyc2VAMS4wLjAvbm9kZV9tb2R1bGVzL2pzb24tc2NoZW1hLXRyYXZlcnNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvcm9vdC9wcm9qZWN0cy9tdWx0aS10ZW5hbnQvbm9kZV9tb2R1bGVzLy5wbnBtL2pzb24tc2NoZW1hLXRyYXZlcnNlQDEuMC4wL25vZGVfbW9kdWxlcy9qc29uLXNjaGVtYS10cmF2ZXJzZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciB0cmF2ZXJzZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjaGVtYSwgb3B0cywgY2IpIHtcbiAgLy8gTGVnYWN5IHN1cHBvcnQgZm9yIHYwLjMuMSBhbmQgZWFybGllci5cbiAgaWYgKHR5cGVvZiBvcHRzID09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG5cbiAgY2IgPSBvcHRzLmNiIHx8IGNiO1xuICB2YXIgcHJlID0gKHR5cGVvZiBjYiA9PSAnZnVuY3Rpb24nKSA/IGNiIDogY2IucHJlIHx8IGZ1bmN0aW9uKCkge307XG4gIHZhciBwb3N0ID0gY2IucG9zdCB8fCBmdW5jdGlvbigpIHt9O1xuXG4gIF90cmF2ZXJzZShvcHRzLCBwcmUsIHBvc3QsIHNjaGVtYSwgJycsIHNjaGVtYSk7XG59O1xuXG5cbnRyYXZlcnNlLmtleXdvcmRzID0ge1xuICBhZGRpdGlvbmFsSXRlbXM6IHRydWUsXG4gIGl0ZW1zOiB0cnVlLFxuICBjb250YWluczogdHJ1ZSxcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHRydWUsXG4gIHByb3BlcnR5TmFtZXM6IHRydWUsXG4gIG5vdDogdHJ1ZSxcbiAgaWY6IHRydWUsXG4gIHRoZW46IHRydWUsXG4gIGVsc2U6IHRydWVcbn07XG5cbnRyYXZlcnNlLmFycmF5S2V5d29yZHMgPSB7XG4gIGl0ZW1zOiB0cnVlLFxuICBhbGxPZjogdHJ1ZSxcbiAgYW55T2Y6IHRydWUsXG4gIG9uZU9mOiB0cnVlXG59O1xuXG50cmF2ZXJzZS5wcm9wc0tleXdvcmRzID0ge1xuICAkZGVmczogdHJ1ZSxcbiAgZGVmaW5pdGlvbnM6IHRydWUsXG4gIHByb3BlcnRpZXM6IHRydWUsXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiB0cnVlLFxuICBkZXBlbmRlbmNpZXM6IHRydWVcbn07XG5cbnRyYXZlcnNlLnNraXBLZXl3b3JkcyA9IHtcbiAgZGVmYXVsdDogdHJ1ZSxcbiAgZW51bTogdHJ1ZSxcbiAgY29uc3Q6IHRydWUsXG4gIHJlcXVpcmVkOiB0cnVlLFxuICBtYXhpbXVtOiB0cnVlLFxuICBtaW5pbXVtOiB0cnVlLFxuICBleGNsdXNpdmVNYXhpbXVtOiB0cnVlLFxuICBleGNsdXNpdmVNaW5pbXVtOiB0cnVlLFxuICBtdWx0aXBsZU9mOiB0cnVlLFxuICBtYXhMZW5ndGg6IHRydWUsXG4gIG1pbkxlbmd0aDogdHJ1ZSxcbiAgcGF0dGVybjogdHJ1ZSxcbiAgZm9ybWF0OiB0cnVlLFxuICBtYXhJdGVtczogdHJ1ZSxcbiAgbWluSXRlbXM6IHRydWUsXG4gIHVuaXF1ZUl0ZW1zOiB0cnVlLFxuICBtYXhQcm9wZXJ0aWVzOiB0cnVlLFxuICBtaW5Qcm9wZXJ0aWVzOiB0cnVlXG59O1xuXG5cbmZ1bmN0aW9uIF90cmF2ZXJzZShvcHRzLCBwcmUsIHBvc3QsIHNjaGVtYSwganNvblB0ciwgcm9vdFNjaGVtYSwgcGFyZW50SnNvblB0ciwgcGFyZW50S2V5d29yZCwgcGFyZW50U2NoZW1hLCBrZXlJbmRleCkge1xuICBpZiAoc2NoZW1hICYmIHR5cGVvZiBzY2hlbWEgPT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoc2NoZW1hKSkge1xuICAgIHByZShzY2hlbWEsIGpzb25QdHIsIHJvb3RTY2hlbWEsIHBhcmVudEpzb25QdHIsIHBhcmVudEtleXdvcmQsIHBhcmVudFNjaGVtYSwga2V5SW5kZXgpO1xuICAgIGZvciAodmFyIGtleSBpbiBzY2hlbWEpIHtcbiAgICAgIHZhciBzY2ggPSBzY2hlbWFba2V5XTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNjaCkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0cmF2ZXJzZS5hcnJheUtleXdvcmRzKSB7XG4gICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNjaC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIF90cmF2ZXJzZShvcHRzLCBwcmUsIHBvc3QsIHNjaFtpXSwganNvblB0ciArICcvJyArIGtleSArICcvJyArIGksIHJvb3RTY2hlbWEsIGpzb25QdHIsIGtleSwgc2NoZW1hLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgaW4gdHJhdmVyc2UucHJvcHNLZXl3b3Jkcykge1xuICAgICAgICBpZiAoc2NoICYmIHR5cGVvZiBzY2ggPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNjaClcbiAgICAgICAgICAgIF90cmF2ZXJzZShvcHRzLCBwcmUsIHBvc3QsIHNjaFtwcm9wXSwganNvblB0ciArICcvJyArIGtleSArICcvJyArIGVzY2FwZUpzb25QdHIocHJvcCksIHJvb3RTY2hlbWEsIGpzb25QdHIsIGtleSwgc2NoZW1hLCBwcm9wKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgaW4gdHJhdmVyc2Uua2V5d29yZHMgfHwgKG9wdHMuYWxsS2V5cyAmJiAhKGtleSBpbiB0cmF2ZXJzZS5za2lwS2V5d29yZHMpKSkge1xuICAgICAgICBfdHJhdmVyc2Uob3B0cywgcHJlLCBwb3N0LCBzY2gsIGpzb25QdHIgKyAnLycgKyBrZXksIHJvb3RTY2hlbWEsIGpzb25QdHIsIGtleSwgc2NoZW1hKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcG9zdChzY2hlbWEsIGpzb25QdHIsIHJvb3RTY2hlbWEsIHBhcmVudEpzb25QdHIsIHBhcmVudEtleXdvcmQsIHBhcmVudFNjaGVtYSwga2V5SW5kZXgpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gZXNjYXBlSnNvblB0cihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9+L2csICd+MCcpLnJlcGxhY2UoL1xcLy9nLCAnfjEnKTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

eval("\n\nvar traverse = module.exports = function (schema, opts, cb) {\n  // Legacy support for v0.3.1 and earlier.\n  if (typeof opts == 'function') {\n    cb = opts;\n    opts = {};\n  }\n\n  cb = opts.cb || cb;\n  var pre = (typeof cb == 'function') ? cb : cb.pre || function() {};\n  var post = cb.post || function() {};\n\n  _traverse(opts, pre, post, schema, '', schema);\n};\n\n\ntraverse.keywords = {\n  additionalItems: true,\n  items: true,\n  contains: true,\n  additionalProperties: true,\n  propertyNames: true,\n  not: true,\n  if: true,\n  then: true,\n  else: true\n};\n\ntraverse.arrayKeywords = {\n  items: true,\n  allOf: true,\n  anyOf: true,\n  oneOf: true\n};\n\ntraverse.propsKeywords = {\n  $defs: true,\n  definitions: true,\n  properties: true,\n  patternProperties: true,\n  dependencies: true\n};\n\ntraverse.skipKeywords = {\n  default: true,\n  enum: true,\n  const: true,\n  required: true,\n  maximum: true,\n  minimum: true,\n  exclusiveMaximum: true,\n  exclusiveMinimum: true,\n  multipleOf: true,\n  maxLength: true,\n  minLength: true,\n  pattern: true,\n  format: true,\n  maxItems: true,\n  minItems: true,\n  uniqueItems: true,\n  maxProperties: true,\n  minProperties: true\n};\n\n\nfunction _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {\n  if (schema && typeof schema == 'object' && !Array.isArray(schema)) {\n    pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);\n    for (var key in schema) {\n      var sch = schema[key];\n      if (Array.isArray(sch)) {\n        if (key in traverse.arrayKeywords) {\n          for (var i=0; i<sch.length; i++)\n            _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);\n        }\n      } else if (key in traverse.propsKeywords) {\n        if (sch && typeof sch == 'object') {\n          for (var prop in sch)\n            _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);\n        }\n      } else if (key in traverse.keywords || (opts.allKeys && !(key in traverse.skipKeywords))) {\n        _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);\n      }\n    }\n    post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);\n  }\n}\n\n\nfunction escapeJsonPtr(str) {\n  return str.replace(/~/g, '~0').replace(/\\//g, '~1');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vanNvbi1zY2hlbWEtdHJhdmVyc2VAMS4wLjAvbm9kZV9tb2R1bGVzL2pzb24tc2NoZW1hLXRyYXZlcnNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvcm9vdC9wcm9qZWN0cy9tdWx0aS10ZW5hbnQvbm9kZV9tb2R1bGVzLy5wbnBtL2pzb24tc2NoZW1hLXRyYXZlcnNlQDEuMC4wL25vZGVfbW9kdWxlcy9qc29uLXNjaGVtYS10cmF2ZXJzZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciB0cmF2ZXJzZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjaGVtYSwgb3B0cywgY2IpIHtcbiAgLy8gTGVnYWN5IHN1cHBvcnQgZm9yIHYwLjMuMSBhbmQgZWFybGllci5cbiAgaWYgKHR5cGVvZiBvcHRzID09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG5cbiAgY2IgPSBvcHRzLmNiIHx8IGNiO1xuICB2YXIgcHJlID0gKHR5cGVvZiBjYiA9PSAnZnVuY3Rpb24nKSA/IGNiIDogY2IucHJlIHx8IGZ1bmN0aW9uKCkge307XG4gIHZhciBwb3N0ID0gY2IucG9zdCB8fCBmdW5jdGlvbigpIHt9O1xuXG4gIF90cmF2ZXJzZShvcHRzLCBwcmUsIHBvc3QsIHNjaGVtYSwgJycsIHNjaGVtYSk7XG59O1xuXG5cbnRyYXZlcnNlLmtleXdvcmRzID0ge1xuICBhZGRpdGlvbmFsSXRlbXM6IHRydWUsXG4gIGl0ZW1zOiB0cnVlLFxuICBjb250YWluczogdHJ1ZSxcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHRydWUsXG4gIHByb3BlcnR5TmFtZXM6IHRydWUsXG4gIG5vdDogdHJ1ZSxcbiAgaWY6IHRydWUsXG4gIHRoZW46IHRydWUsXG4gIGVsc2U6IHRydWVcbn07XG5cbnRyYXZlcnNlLmFycmF5S2V5d29yZHMgPSB7XG4gIGl0ZW1zOiB0cnVlLFxuICBhbGxPZjogdHJ1ZSxcbiAgYW55T2Y6IHRydWUsXG4gIG9uZU9mOiB0cnVlXG59O1xuXG50cmF2ZXJzZS5wcm9wc0tleXdvcmRzID0ge1xuICAkZGVmczogdHJ1ZSxcbiAgZGVmaW5pdGlvbnM6IHRydWUsXG4gIHByb3BlcnRpZXM6IHRydWUsXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiB0cnVlLFxuICBkZXBlbmRlbmNpZXM6IHRydWVcbn07XG5cbnRyYXZlcnNlLnNraXBLZXl3b3JkcyA9IHtcbiAgZGVmYXVsdDogdHJ1ZSxcbiAgZW51bTogdHJ1ZSxcbiAgY29uc3Q6IHRydWUsXG4gIHJlcXVpcmVkOiB0cnVlLFxuICBtYXhpbXVtOiB0cnVlLFxuICBtaW5pbXVtOiB0cnVlLFxuICBleGNsdXNpdmVNYXhpbXVtOiB0cnVlLFxuICBleGNsdXNpdmVNaW5pbXVtOiB0cnVlLFxuICBtdWx0aXBsZU9mOiB0cnVlLFxuICBtYXhMZW5ndGg6IHRydWUsXG4gIG1pbkxlbmd0aDogdHJ1ZSxcbiAgcGF0dGVybjogdHJ1ZSxcbiAgZm9ybWF0OiB0cnVlLFxuICBtYXhJdGVtczogdHJ1ZSxcbiAgbWluSXRlbXM6IHRydWUsXG4gIHVuaXF1ZUl0ZW1zOiB0cnVlLFxuICBtYXhQcm9wZXJ0aWVzOiB0cnVlLFxuICBtaW5Qcm9wZXJ0aWVzOiB0cnVlXG59O1xuXG5cbmZ1bmN0aW9uIF90cmF2ZXJzZShvcHRzLCBwcmUsIHBvc3QsIHNjaGVtYSwganNvblB0ciwgcm9vdFNjaGVtYSwgcGFyZW50SnNvblB0ciwgcGFyZW50S2V5d29yZCwgcGFyZW50U2NoZW1hLCBrZXlJbmRleCkge1xuICBpZiAoc2NoZW1hICYmIHR5cGVvZiBzY2hlbWEgPT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoc2NoZW1hKSkge1xuICAgIHByZShzY2hlbWEsIGpzb25QdHIsIHJvb3RTY2hlbWEsIHBhcmVudEpzb25QdHIsIHBhcmVudEtleXdvcmQsIHBhcmVudFNjaGVtYSwga2V5SW5kZXgpO1xuICAgIGZvciAodmFyIGtleSBpbiBzY2hlbWEpIHtcbiAgICAgIHZhciBzY2ggPSBzY2hlbWFba2V5XTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNjaCkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0cmF2ZXJzZS5hcnJheUtleXdvcmRzKSB7XG4gICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNjaC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIF90cmF2ZXJzZShvcHRzLCBwcmUsIHBvc3QsIHNjaFtpXSwganNvblB0ciArICcvJyArIGtleSArICcvJyArIGksIHJvb3RTY2hlbWEsIGpzb25QdHIsIGtleSwgc2NoZW1hLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgaW4gdHJhdmVyc2UucHJvcHNLZXl3b3Jkcykge1xuICAgICAgICBpZiAoc2NoICYmIHR5cGVvZiBzY2ggPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNjaClcbiAgICAgICAgICAgIF90cmF2ZXJzZShvcHRzLCBwcmUsIHBvc3QsIHNjaFtwcm9wXSwganNvblB0ciArICcvJyArIGtleSArICcvJyArIGVzY2FwZUpzb25QdHIocHJvcCksIHJvb3RTY2hlbWEsIGpzb25QdHIsIGtleSwgc2NoZW1hLCBwcm9wKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgaW4gdHJhdmVyc2Uua2V5d29yZHMgfHwgKG9wdHMuYWxsS2V5cyAmJiAhKGtleSBpbiB0cmF2ZXJzZS5za2lwS2V5d29yZHMpKSkge1xuICAgICAgICBfdHJhdmVyc2Uob3B0cywgcHJlLCBwb3N0LCBzY2gsIGpzb25QdHIgKyAnLycgKyBrZXksIHJvb3RTY2hlbWEsIGpzb25QdHIsIGtleSwgc2NoZW1hKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcG9zdChzY2hlbWEsIGpzb25QdHIsIHJvb3RTY2hlbWEsIHBhcmVudEpzb25QdHIsIHBhcmVudEtleXdvcmQsIHBhcmVudFNjaGVtYSwga2V5SW5kZXgpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gZXNjYXBlSnNvblB0cihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9+L2csICd+MCcpLnJlcGxhY2UoL1xcLy9nLCAnfjEnKTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js\n");

/***/ })

};
;