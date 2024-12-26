"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/postgres-array@2.0.0";
exports.ids = ["vendor-chunks/postgres-array@2.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/postgres-array@2.0.0/node_modules/postgres-array/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/postgres-array@2.0.0/node_modules/postgres-array/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.parse = function (source, transform) {\n  return new ArrayParser(source, transform).parse()\n}\n\nclass ArrayParser {\n  constructor (source, transform) {\n    this.source = source\n    this.transform = transform || identity\n    this.position = 0\n    this.entries = []\n    this.recorded = []\n    this.dimension = 0\n  }\n\n  isEof () {\n    return this.position >= this.source.length\n  }\n\n  nextCharacter () {\n    var character = this.source[this.position++]\n    if (character === '\\\\') {\n      return {\n        value: this.source[this.position++],\n        escaped: true\n      }\n    }\n    return {\n      value: character,\n      escaped: false\n    }\n  }\n\n  record (character) {\n    this.recorded.push(character)\n  }\n\n  newEntry (includeEmpty) {\n    var entry\n    if (this.recorded.length > 0 || includeEmpty) {\n      entry = this.recorded.join('')\n      if (entry === 'NULL' && !includeEmpty) {\n        entry = null\n      }\n      if (entry !== null) entry = this.transform(entry)\n      this.entries.push(entry)\n      this.recorded = []\n    }\n  }\n\n  consumeDimensions () {\n    if (this.source[0] === '[') {\n      while (!this.isEof()) {\n        var char = this.nextCharacter()\n        if (char.value === '=') break\n      }\n    }\n  }\n\n  parse (nested) {\n    var character, parser, quote\n    this.consumeDimensions()\n    while (!this.isEof()) {\n      character = this.nextCharacter()\n      if (character.value === '{' && !quote) {\n        this.dimension++\n        if (this.dimension > 1) {\n          parser = new ArrayParser(this.source.substr(this.position - 1), this.transform)\n          this.entries.push(parser.parse(true))\n          this.position += parser.position - 2\n        }\n      } else if (character.value === '}' && !quote) {\n        this.dimension--\n        if (!this.dimension) {\n          this.newEntry()\n          if (nested) return this.entries\n        }\n      } else if (character.value === '\"' && !character.escaped) {\n        if (quote) this.newEntry(true)\n        quote = !quote\n      } else if (character.value === ',' && !quote) {\n        this.newEntry()\n      } else {\n        this.record(character.value)\n      }\n    }\n    if (this.dimension !== 0) {\n      throw new Error('array dimension not balanced')\n    }\n    return this.entries\n  }\n}\n\nfunction identity (value) {\n  return value\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vcG9zdGdyZXMtYXJyYXlAMi4wLjAvbm9kZV9tb2R1bGVzL3Bvc3RncmVzLWFycmF5L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9yb290L3Byb2plY3RzL211bHRpLXRlbmFudC9ub2RlX21vZHVsZXMvLnBucG0vcG9zdGdyZXMtYXJyYXlAMi4wLjAvbm9kZV9tb2R1bGVzL3Bvc3RncmVzLWFycmF5L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHNvdXJjZSwgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBuZXcgQXJyYXlQYXJzZXIoc291cmNlLCB0cmFuc2Zvcm0pLnBhcnNlKClcbn1cblxuY2xhc3MgQXJyYXlQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAoc291cmNlLCB0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZVxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtIHx8IGlkZW50aXR5XG4gICAgdGhpcy5wb3NpdGlvbiA9IDBcbiAgICB0aGlzLmVudHJpZXMgPSBbXVxuICAgIHRoaXMucmVjb3JkZWQgPSBbXVxuICAgIHRoaXMuZGltZW5zaW9uID0gMFxuICB9XG5cbiAgaXNFb2YgKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID49IHRoaXMuc291cmNlLmxlbmd0aFxuICB9XG5cbiAgbmV4dENoYXJhY3RlciAoKSB7XG4gICAgdmFyIGNoYXJhY3RlciA9IHRoaXMuc291cmNlW3RoaXMucG9zaXRpb24rK11cbiAgICBpZiAoY2hhcmFjdGVyID09PSAnXFxcXCcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZVt0aGlzLnBvc2l0aW9uKytdLFxuICAgICAgICBlc2NhcGVkOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogY2hhcmFjdGVyLFxuICAgICAgZXNjYXBlZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICByZWNvcmQgKGNoYXJhY3Rlcikge1xuICAgIHRoaXMucmVjb3JkZWQucHVzaChjaGFyYWN0ZXIpXG4gIH1cblxuICBuZXdFbnRyeSAoaW5jbHVkZUVtcHR5KSB7XG4gICAgdmFyIGVudHJ5XG4gICAgaWYgKHRoaXMucmVjb3JkZWQubGVuZ3RoID4gMCB8fCBpbmNsdWRlRW1wdHkpIHtcbiAgICAgIGVudHJ5ID0gdGhpcy5yZWNvcmRlZC5qb2luKCcnKVxuICAgICAgaWYgKGVudHJ5ID09PSAnTlVMTCcgJiYgIWluY2x1ZGVFbXB0eSkge1xuICAgICAgICBlbnRyeSA9IG51bGxcbiAgICAgIH1cbiAgICAgIGlmIChlbnRyeSAhPT0gbnVsbCkgZW50cnkgPSB0aGlzLnRyYW5zZm9ybShlbnRyeSlcbiAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KVxuICAgICAgdGhpcy5yZWNvcmRlZCA9IFtdXG4gICAgfVxuICB9XG5cbiAgY29uc3VtZURpbWVuc2lvbnMgKCkge1xuICAgIGlmICh0aGlzLnNvdXJjZVswXSA9PT0gJ1snKSB7XG4gICAgICB3aGlsZSAoIXRoaXMuaXNFb2YoKSkge1xuICAgICAgICB2YXIgY2hhciA9IHRoaXMubmV4dENoYXJhY3RlcigpXG4gICAgICAgIGlmIChjaGFyLnZhbHVlID09PSAnPScpIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGFyc2UgKG5lc3RlZCkge1xuICAgIHZhciBjaGFyYWN0ZXIsIHBhcnNlciwgcXVvdGVcbiAgICB0aGlzLmNvbnN1bWVEaW1lbnNpb25zKClcbiAgICB3aGlsZSAoIXRoaXMuaXNFb2YoKSkge1xuICAgICAgY2hhcmFjdGVyID0gdGhpcy5uZXh0Q2hhcmFjdGVyKClcbiAgICAgIGlmIChjaGFyYWN0ZXIudmFsdWUgPT09ICd7JyAmJiAhcXVvdGUpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb24rK1xuICAgICAgICBpZiAodGhpcy5kaW1lbnNpb24gPiAxKSB7XG4gICAgICAgICAgcGFyc2VyID0gbmV3IEFycmF5UGFyc2VyKHRoaXMuc291cmNlLnN1YnN0cih0aGlzLnBvc2l0aW9uIC0gMSksIHRoaXMudHJhbnNmb3JtKVxuICAgICAgICAgIHRoaXMuZW50cmllcy5wdXNoKHBhcnNlci5wYXJzZSh0cnVlKSlcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uICs9IHBhcnNlci5wb3NpdGlvbiAtIDJcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIudmFsdWUgPT09ICd9JyAmJiAhcXVvdGUpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb24tLVxuICAgICAgICBpZiAoIXRoaXMuZGltZW5zaW9uKSB7XG4gICAgICAgICAgdGhpcy5uZXdFbnRyeSgpXG4gICAgICAgICAgaWYgKG5lc3RlZCkgcmV0dXJuIHRoaXMuZW50cmllc1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3Rlci52YWx1ZSA9PT0gJ1wiJyAmJiAhY2hhcmFjdGVyLmVzY2FwZWQpIHtcbiAgICAgICAgaWYgKHF1b3RlKSB0aGlzLm5ld0VudHJ5KHRydWUpXG4gICAgICAgIHF1b3RlID0gIXF1b3RlXG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3Rlci52YWx1ZSA9PT0gJywnICYmICFxdW90ZSkge1xuICAgICAgICB0aGlzLm5ld0VudHJ5KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVjb3JkKGNoYXJhY3Rlci52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZGltZW5zaW9uICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FycmF5IGRpbWVuc2lvbiBub3QgYmFsYW5jZWQnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzXG4gIH1cbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/postgres-array@2.0.0/node_modules/postgres-array/index.js\n");

/***/ })

};
;