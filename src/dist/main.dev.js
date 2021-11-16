"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventBus = void 0;

require("@babel/polyfill");

require("mutationobserver-shim");

require("bootstrap");

require("bootstrap/dist/css/bootstrap.css");

require("jquery/dist/jquery.js");

require("popper.js/dist/popper.js");

require("../assets/css/variables.css");

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var eventBus = (0, _vue.createApp)(_App["default"]);
exports.eventBus = eventBus;
(0, _vue.createApp)(_App["default"]).mount('#app');