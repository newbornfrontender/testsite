define(["./my-app.js"],function(_myApp){"use strict";var _templateObject_515e0920b4ce11e8924b4d626ba32a4d=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n\n          padding: 10px 20px;\n        }\n      </style>\n\n      Oops you hit a 404. <a href=\"[[rootPath]]\">Head back to home.</a>\n    "]),MyView404=function(_PolymerElement){babelHelpers.inherits(MyView404,_PolymerElement);function MyView404(){babelHelpers.classCallCheck(this,MyView404);return babelHelpers.possibleConstructorReturn(this,(MyView404.__proto__||Object.getPrototypeOf(MyView404)).apply(this,arguments))}babelHelpers.createClass(MyView404,null,[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_515e0920b4ce11e8924b4d626ba32a4d)}}]);return MyView404}(_myApp.PolymerElement);window.customElements.define("my-view404",MyView404)});