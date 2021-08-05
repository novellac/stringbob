(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.stringbob = {}));
}(this, (function (exports) { 'use strict';

  var re = /[a-zA-Z]/im;

  var randCase = function randCase(letter) {
    return Math.random() < 0.5 ? letter.toUpperCase() : letter.toLowerCase();
  };

  var stringbobify = function stringbobify(str) {
    return str.split("").map(function (letter) {
      return letter.match(re) ? randCase(letter) : letter;
    }).join("");
  };

  exports.stringbobify = stringbobify;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
