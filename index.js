(() => {
  'use strict';
  var __webpack_modules__ = {
    607: (e, t, n) => {
      n(442).default
    }, 353: function (e, t) {
      var n = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))((function (i, o) {
          function u(e) {
            try {
              a(r.next(e))
            } catch (e) {
              o(e)
            }
          }
          
          function s(e) {
            try {
              a(r.throw(e))
            } catch (e) {
              o(e)
            }
          }
          
          function a(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
              e(t)
            }))).then(u, s)
          }
          
          a((r = r.apply(e, t || [])).next())
        }))
      }, r = this && this.__generator || function (e, t) {
        var n, r, i, o, u = {
          label: 0, sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1]
          }, trys: [], ops: []
        };
        return o = {
          next: s(0),
          throw: s(1),
          return: s(2)
        }, 'function' == typeof Symbol && (o[Symbol.iterator] = function () {
          return this
        }), o;
        
        function s(o) {
          return function (s) {
            return function (o) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; u;) try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return u.label++, {value: o[1], done: !1};
                  case 5:
                    u.label++, r = o[1], o = [0];
                    continue;
                  case 7:
                    o = u.ops.pop(), u.trys.pop();
                    continue;
                  default:
                    if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                      u = 0;
                      continue
                    }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                      u.label = o[1];
                      break
                    }
                    if (6 === o[0] && u.label < i[1]) {
                      u.label = i[1], i = o;
                      break
                    }
                    if (i && u.label < i[2]) {
                      u.label = i[2], u.ops.push(o);
                      break
                    }
                    i[2] && u.ops.pop(), u.trys.pop();
                    continue
                }
                o = t.call(e, u)
              } catch (e) {
                o = [6, e], r = 0
              } finally {
                n = i = 0
              }
              if (5 & o[0]) throw o[1];
              return {value: o[0] ? o[1] : void 0, done: !0}
            }([o, s])
          }
        }
      };
      Object.defineProperty(t, '__esModule', {value: !0});
      var i = function () {
        function e() {
        }
        
        return e.getModules = function () {
          return this.modules
        }, e.add = function (e) {
          this.find(e.name) || this.modules.push(e)
        }, e.delete = function (e) {
          this.find(e.name) && this.modules.splice(this.modules.indexOf(e), 1)
        }, e.find = function (e) {
          return this.modules.find((function (t) {
            return t.name === e
          }))
        }, e.createScriptModule = function (e) {
          var t = document.createElement('script');
          return t.id = e.name, t.src = e.src, t
        }, e.createNativeModule = function (e) {
          return n(this, void 0, void 0, (function () {
            return r(this, (function (t) {
              switch (t.label) {
                case 0:
                  return [4, new Promise((function (t, n) {
                    var r = new XMLHttpRequest;
                    r.open('GET', e.src, !0), r.onload = function () {
                      200 === this.status ? t(r.responseText) : n(new Error('ECONNREFUSED'))
                    }, r.onerror = function () {
                      n(new Error('ECONNREFUSED'))
                    }, r.send()
                  }))];
                case 1:
                  return [2, t.sent()]
              }
            }))
          }))
        }, e.modules = [], e
      }();
      t.default = i
    }, 821: (e, t) => {
      Object.defineProperty(t, '__esModule', {value: !0});
      var n = function () {
        function e(e) {
          var t;
          this.modulesList = [], this.moduleTarget = null === (t = document.getElementsByTagName('head')) || void 0 === t ? void 0 : t[0], this.modulesList = e
        }
        
        return e.prototype.getModulesList = function () {
          return this.modulesList
        }, e.prototype.exist = function (e) {
          return !!this.modulesList.find((function (t) {
            return t.name === e.name
          }))
        }, e.prototype.addModule = function (e) {
          this.exist(e) || this.modulesList.push(e)
        }, e.prototype.removeModule = function (e) {
          this.exist(e) && (this.modulesList = this.modulesList.splice(this.modulesList.indexOf(e), 1))
        }, e
      }();
      t.default = n
    }, 442: function (__unused_webpack_module, exports, __webpack_require__) {
      var __extends = this && this.__extends || (extendStatics = function (e, t) {
        return (extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
          e.__proto__ = t
        } || function (e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        })(e, t)
      }, function (e, t) {
        function n() {
          this.constructor = e
        }
        
        extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }), extendStatics, __assign = this && this.__assign || function () {
        return (__assign = Object.assign || function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }).apply(this, arguments)
      }, __awaiter = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))((function (i, o) {
          function u(e) {
            try {
              a(r.next(e))
            } catch (e) {
              o(e)
            }
          }
          
          function s(e) {
            try {
              a(r.throw(e))
            } catch (e) {
              o(e)
            }
          }
          
          function a(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
              e(t)
            }))).then(u, s)
          }
          
          a((r = r.apply(e, t || [])).next())
        }))
      }, __generator = this && this.__generator || function (e, t) {
        var n, r, i, o, u = {
          label: 0, sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1]
          }, trys: [], ops: []
        };
        return o = {
          next: s(0),
          throw: s(1),
          return: s(2)
        }, 'function' == typeof Symbol && (o[Symbol.iterator] = function () {
          return this
        }), o;
        
        function s(o) {
          return function (s) {
            return function (o) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; u;) try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return u.label++, {value: o[1], done: !1};
                  case 5:
                    u.label++, r = o[1], o = [0];
                    continue;
                  case 7:
                    o = u.ops.pop(), u.trys.pop();
                    continue;
                  default:
                    if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                      u = 0;
                      continue
                    }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                      u.label = o[1];
                      break
                    }
                    if (6 === o[0] && u.label < i[1]) {
                      u.label = i[1], i = o;
                      break
                    }
                    if (i && u.label < i[2]) {
                      u.label = i[2], u.ops.push(o);
                      break
                    }
                    i[2] && u.ops.pop(), u.trys.pop();
                    continue
                }
                o = t.call(e, u)
              } catch (e) {
                o = [6, e], r = 0
              } finally {
                n = i = 0
              }
              if (5 & o[0]) throw o[1];
              return {value: o[0] ? o[1] : void 0, done: !0}
            }([o, s])
          }
        }
      };
      Object.defineProperty(exports, '__esModule', {value: !0});
      var frame_types_1 = __webpack_require__(625), Frame_1 = __webpack_require__(821),
        Container_1 = __webpack_require__(353), Services = function (_super) {
          function Services(e) {
            var t = _super.call(this, e) || this;
            return t.servicesList = [], t
          }
          
          return __extends(Services, _super), Services.prototype.load = function (e) {
            var t;
            return __awaiter(this, void 0, void 0, (function () {
              var n, r, i;
              return __generator(this, (function (o) {
                switch (o.label) {
                  case 0:
                    return (n = this.getModule(e)) ? n.type !== frame_types_1.StaticTypes.dynamic ? [3, 2] : [4, Container_1.default.createNativeModule(n)] : [3, 3];
                  case 1:
                    r = o.sent(), this.addService(n, r), o.label = 2;
                  case 2:
                    n.type === frame_types_1.StaticTypes.static && (i = Container_1.default.createScriptModule(n), this.moduleTarget.appendChild(i), this.addService(n, '', i)), o.label = 3;
                  case 3:
                    return [2, null !== (t = this.getService(e)) && void 0 !== t ? t : null]
                }
              }))
            }))
          }, Services.prototype.getService = function (e) {
            return this.servicesList.find((function (t) {
              return t.name === e
            }))
          }, Services.prototype.addService = function (e, t, n) {
            void 0 === n && (n = null);
            var r = __assign(__assign({}, e), {context: t ? Services.createRuntimeModule(t) : null, node: n});
            this.existService(r) || (this.servicesList.push(r), Container_1.default.add(e))
          }, Services.prototype.getModule = function (e) {
            return this.getModulesList().find((function (t) {
              return t.name === e
            }))
          }, Services.prototype.existService = function (e) {
            return this.servicesList.find((function (t) {
              return t.name === e.name
            }))
          }, Services.createRuntimeModule = function (codeString) {
            return eval(codeString + 'delete this.createRuntimeModule; this')
          }, Services
        }(Frame_1.default);
      exports.default = Services
    }, 625: (e, t) => {
      var n;
      Object.defineProperty(t, '__esModule', {value: !0}), t.StaticTypes = void 0, (n = t.StaticTypes || (t.StaticTypes = {})).static = 'static', n.dynamic = 'dynamic'
    }
  }, __webpack_module_cache__ = {};
  
  function __webpack_require__(e) {
    if (__webpack_module_cache__[e]) return __webpack_module_cache__[e].exports;
    var t = __webpack_module_cache__[e] = {exports: {}};
    return __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports
  }
  
  __webpack_require__(607)
})();
