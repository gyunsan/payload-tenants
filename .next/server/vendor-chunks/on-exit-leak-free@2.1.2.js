"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/on-exit-leak-free@2.1.2";
exports.ids = ["vendor-chunks/on-exit-leak-free@2.1.2"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/on-exit-leak-free@2.1.2/node_modules/on-exit-leak-free/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/on-exit-leak-free@2.1.2/node_modules/on-exit-leak-free/index.js ***!
  \********************************************************************************************/
/***/ ((module) => {

eval("\n\nconst refs = {\n  exit: [],\n  beforeExit: []\n}\nconst functions = {\n  exit: onExit,\n  beforeExit: onBeforeExit\n}\n\nlet registry\n\nfunction ensureRegistry () {\n  if (registry === undefined) {\n    registry = new FinalizationRegistry(clear)\n  }\n}\n\nfunction install (event) {\n  if (refs[event].length > 0) {\n    return\n  }\n\n  process.on(event, functions[event])\n}\n\nfunction uninstall (event) {\n  if (refs[event].length > 0) {\n    return\n  }\n  process.removeListener(event, functions[event])\n  if (refs.exit.length === 0 && refs.beforeExit.length === 0) {\n    registry = undefined\n  }\n}\n\nfunction onExit () {\n  callRefs('exit')\n}\n\nfunction onBeforeExit () {\n  callRefs('beforeExit')\n}\n\nfunction callRefs (event) {\n  for (const ref of refs[event]) {\n    const obj = ref.deref()\n    const fn = ref.fn\n\n    // This should always happen, however GC is\n    // undeterministic so it might not happen.\n    /* istanbul ignore else */\n    if (obj !== undefined) {\n      fn(obj, event)\n    }\n  }\n  refs[event] = []\n}\n\nfunction clear (ref) {\n  for (const event of ['exit', 'beforeExit']) {\n    const index = refs[event].indexOf(ref)\n    refs[event].splice(index, index + 1)\n    uninstall(event)\n  }\n}\n\nfunction _register (event, obj, fn) {\n  if (obj === undefined) {\n    throw new Error('the object can\\'t be undefined')\n  }\n  install(event)\n  const ref = new WeakRef(obj)\n  ref.fn = fn\n\n  ensureRegistry()\n  registry.register(obj, ref)\n  refs[event].push(ref)\n}\n\nfunction register (obj, fn) {\n  _register('exit', obj, fn)\n}\n\nfunction registerBeforeExit (obj, fn) {\n  _register('beforeExit', obj, fn)\n}\n\nfunction unregister (obj) {\n  if (registry === undefined) {\n    return\n  }\n  registry.unregister(obj)\n  for (const event of ['exit', 'beforeExit']) {\n    refs[event] = refs[event].filter((ref) => {\n      const _obj = ref.deref()\n      return _obj && _obj !== obj\n    })\n    uninstall(event)\n  }\n}\n\nmodule.exports = {\n  register,\n  registerBeforeExit,\n  unregister\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vb24tZXhpdC1sZWFrLWZyZWVAMi4xLjIvbm9kZV9tb2R1bGVzL29uLWV4aXQtbGVhay1mcmVlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL3Jvb3QvcHJvamVjdHMvbXVsdGktdGVuYW50L25vZGVfbW9kdWxlcy8ucG5wbS9vbi1leGl0LWxlYWstZnJlZUAyLjEuMi9ub2RlX21vZHVsZXMvb24tZXhpdC1sZWFrLWZyZWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHJlZnMgPSB7XG4gIGV4aXQ6IFtdLFxuICBiZWZvcmVFeGl0OiBbXVxufVxuY29uc3QgZnVuY3Rpb25zID0ge1xuICBleGl0OiBvbkV4aXQsXG4gIGJlZm9yZUV4aXQ6IG9uQmVmb3JlRXhpdFxufVxuXG5sZXQgcmVnaXN0cnlcblxuZnVuY3Rpb24gZW5zdXJlUmVnaXN0cnkgKCkge1xuICBpZiAocmVnaXN0cnkgPT09IHVuZGVmaW5lZCkge1xuICAgIHJlZ2lzdHJ5ID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KGNsZWFyKVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGwgKGV2ZW50KSB7XG4gIGlmIChyZWZzW2V2ZW50XS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBwcm9jZXNzLm9uKGV2ZW50LCBmdW5jdGlvbnNbZXZlbnRdKVxufVxuXG5mdW5jdGlvbiB1bmluc3RhbGwgKGV2ZW50KSB7XG4gIGlmIChyZWZzW2V2ZW50XS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgZnVuY3Rpb25zW2V2ZW50XSlcbiAgaWYgKHJlZnMuZXhpdC5sZW5ndGggPT09IDAgJiYgcmVmcy5iZWZvcmVFeGl0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJlZ2lzdHJ5ID0gdW5kZWZpbmVkXG4gIH1cbn1cblxuZnVuY3Rpb24gb25FeGl0ICgpIHtcbiAgY2FsbFJlZnMoJ2V4aXQnKVxufVxuXG5mdW5jdGlvbiBvbkJlZm9yZUV4aXQgKCkge1xuICBjYWxsUmVmcygnYmVmb3JlRXhpdCcpXG59XG5cbmZ1bmN0aW9uIGNhbGxSZWZzIChldmVudCkge1xuICBmb3IgKGNvbnN0IHJlZiBvZiByZWZzW2V2ZW50XSkge1xuICAgIGNvbnN0IG9iaiA9IHJlZi5kZXJlZigpXG4gICAgY29uc3QgZm4gPSByZWYuZm5cblxuICAgIC8vIFRoaXMgc2hvdWxkIGFsd2F5cyBoYXBwZW4sIGhvd2V2ZXIgR0MgaXNcbiAgICAvLyB1bmRldGVybWluaXN0aWMgc28gaXQgbWlnaHQgbm90IGhhcHBlbi5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChvYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgZm4ob2JqLCBldmVudClcbiAgICB9XG4gIH1cbiAgcmVmc1tldmVudF0gPSBbXVxufVxuXG5mdW5jdGlvbiBjbGVhciAocmVmKSB7XG4gIGZvciAoY29uc3QgZXZlbnQgb2YgWydleGl0JywgJ2JlZm9yZUV4aXQnXSkge1xuICAgIGNvbnN0IGluZGV4ID0gcmVmc1tldmVudF0uaW5kZXhPZihyZWYpXG4gICAgcmVmc1tldmVudF0uc3BsaWNlKGluZGV4LCBpbmRleCArIDEpXG4gICAgdW5pbnN0YWxsKGV2ZW50KVxuICB9XG59XG5cbmZ1bmN0aW9uIF9yZWdpc3RlciAoZXZlbnQsIG9iaiwgZm4pIHtcbiAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgb2JqZWN0IGNhblxcJ3QgYmUgdW5kZWZpbmVkJylcbiAgfVxuICBpbnN0YWxsKGV2ZW50KVxuICBjb25zdCByZWYgPSBuZXcgV2Vha1JlZihvYmopXG4gIHJlZi5mbiA9IGZuXG5cbiAgZW5zdXJlUmVnaXN0cnkoKVxuICByZWdpc3RyeS5yZWdpc3RlcihvYmosIHJlZilcbiAgcmVmc1tldmVudF0ucHVzaChyZWYpXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyIChvYmosIGZuKSB7XG4gIF9yZWdpc3RlcignZXhpdCcsIG9iaiwgZm4pXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQmVmb3JlRXhpdCAob2JqLCBmbikge1xuICBfcmVnaXN0ZXIoJ2JlZm9yZUV4aXQnLCBvYmosIGZuKVxufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyIChvYmopIHtcbiAgaWYgKHJlZ2lzdHJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuICByZWdpc3RyeS51bnJlZ2lzdGVyKG9iailcbiAgZm9yIChjb25zdCBldmVudCBvZiBbJ2V4aXQnLCAnYmVmb3JlRXhpdCddKSB7XG4gICAgcmVmc1tldmVudF0gPSByZWZzW2V2ZW50XS5maWx0ZXIoKHJlZikgPT4ge1xuICAgICAgY29uc3QgX29iaiA9IHJlZi5kZXJlZigpXG4gICAgICByZXR1cm4gX29iaiAmJiBfb2JqICE9PSBvYmpcbiAgICB9KVxuICAgIHVuaW5zdGFsbChldmVudClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVnaXN0ZXIsXG4gIHJlZ2lzdGVyQmVmb3JlRXhpdCxcbiAgdW5yZWdpc3RlclxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/on-exit-leak-free@2.1.2/node_modules/on-exit-leak-free/index.js\n");

/***/ })

};
;