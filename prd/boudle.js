/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
  "use strict";
  function d(a, b) {
    return M(new (M(function () {}, { prototype: a }))(), b);
  }function e(a) {
    return L(arguments, function (b) {
      b !== a && L(b, function (b, c) {
        a.hasOwnProperty(c) || (a[c] = b);
      });
    }), a;
  }function f(a, b) {
    var c = [];for (var d in a.path) {
      if (a.path[d] !== b.path[d]) break;c.push(a.path[d]);
    }return c;
  }function g(a) {
    if (Object.keys) return Object.keys(a);var c = [];return b.forEach(a, function (a, b) {
      c.push(b);
    }), c;
  }function h(a, b) {
    if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);var c = a.length >>> 0,
        d = Number(arguments[2]) || 0;for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++) {
      if (d in a && a[d] === b) return d;
    }return -1;
  }function i(a, b, c, d) {
    var e,
        i = f(c, d),
        j = {},
        k = [];for (var l in i) {
      if (i[l].params && (e = g(i[l].params), e.length)) for (var m in e) {
        h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
      }
    }return M({}, j, b);
  }function j(a, b, c) {
    if (!c) {
      c = [];for (var d in a) {
        c.push(d);
      }
    }for (var e = 0; e < c.length; e++) {
      var f = c[e];if (a[f] != b[f]) return !1;
    }return !0;
  }function k(a, b) {
    var c = {};return L(a, function (a) {
      c[a] = b[a];
    }), c;
  }function l(a) {
    var b = {},
        c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));for (var d in a) {
      -1 == h(c, d) && (b[d] = a[d]);
    }return b;
  }function m(a, b) {
    var c = K(a),
        d = c ? [] : {};return L(a, function (a, e) {
      b(a, e) && (d[c ? d.length : e] = a);
    }), d;
  }function n(a, b) {
    var c = K(a) ? [] : {};return L(a, function (a, d) {
      c[d] = b(a, d);
    }), c;
  }function o(a, b) {
    var d = 1,
        f = 2,
        i = {},
        j = [],
        k = i,
        m = M(a.when(i), { $$promises: i, $$values: i });this.study = function (i) {
      function n(a, c) {
        if (s[c] !== f) {
          if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));if (s[c] = d, I(a)) q.push(c, [function () {
            return b.get(a);
          }], j);else {
            var e = b.annotate(a);L(e, function (a) {
              a !== c && i.hasOwnProperty(a) && n(i[a], a);
            }), q.push(c, a, e);
          }r.pop(), s[c] = f;
        }
      }function o(a) {
        return J(a) && a.then && a.$$promises;
      }if (!J(i)) throw new Error("'invocables' must be an object");var p = g(i || {}),
          q = [],
          r = [],
          s = {};return L(i, n), i = r = s = null, function (d, f, g) {
        function h() {
          --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t));
        }function i(a) {
          r.$$failure = a, n.reject(a);
        }function j(c, e, f) {
          function j(a) {
            l.reject(a), i(a);
          }function k() {
            if (!G(r.$$failure)) try {
              l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
                t[c] = a, h();
              }, j);
            } catch (a) {
              j(a);
            }
          }var l = a.defer(),
              m = 0;L(f, function (a) {
            s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
              t[a] = b, --m || k();
            }, j));
          }), m || k(), s[c] = l.promise;
        }if (o(d) && g === c && (g = f, f = d, d = null), d) {
          if (!J(d)) throw new Error("'locals' must be an object");
        } else d = k;if (f) {
          if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
        } else f = m;var n = a.defer(),
            r = n.promise,
            s = r.$$promises = {},
            t = M({}, d),
            u = 1 + q.length / 3,
            v = !1;if (G(f.$$failure)) return i(f.$$failure), r;f.$$inheritedValues && e(t, l(f.$$inheritedValues, p)), M(s, f.$$promises), f.$$values ? (v = e(t, l(f.$$values, p)), r.$$inheritedValues = l(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = l(f.$$inheritedValues, p)), f.then(h, i));for (var w = 0, x = q.length; x > w; w += 3) {
          d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
        }return r;
      };
    }, this.resolve = function (a, b, c, d) {
      return this.study(a)(b, c, d);
    };
  }function p(a, b, c) {
    this.fromConfig = function (a, b, c) {
      return G(a.template) ? this.fromString(a.template, b) : G(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : G(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null;
    }, this.fromString = function (a, b) {
      return H(a) ? a(b) : a;
    }, this.fromUrl = function (c, d) {
      return H(c) && (c = c(d)), null == c ? null : a.get(c, { cache: b, headers: { Accept: "text/html" } }).then(function (a) {
        return a.data;
      });
    }, this.fromProvider = function (a, b, d) {
      return c.invoke(a, null, d || { params: b });
    };
  }function q(a, b, e) {
    function f(b, c, d, e) {
      if (q.push(b), o[b]) return o[b];if (!/^\w+(-+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");return p[b] = new O.Param(b, c, d, e), p[b];
    }function g(a, b, c) {
      var d = ["", ""],
          e = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");if (!b) return e;switch (c) {case !1:
          d = ["(", ")"];break;case !0:
          d = ["?(", ")?"];break;default:
          d = ["(" + c + "|", ")?"];}return e + d[0] + b + d[1];
    }function h(c, e) {
      var f, g, h, i, j;return f = c[2] || c[3], j = b.params[f], h = a.substring(m, c.index), g = e ? c[4] : c[4] || ("*" == c[1] ? ".*" : null), i = O.type(g || "string") || d(O.type("string"), { pattern: new RegExp(g) }), { id: f, regexp: g, segment: h, type: i, cfg: j };
    }b = M({ params: {} }, J(b) ? b : {});var i,
        j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        k = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        l = "^",
        m = 0,
        n = this.segments = [],
        o = e ? e.params : {},
        p = this.params = e ? e.params.$$new() : new O.ParamSet(),
        q = [];this.source = a;for (var r, s, t; (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) {
      s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash), n.push(r.segment), m = j.lastIndex;
    }t = a.substring(m);var u = t.indexOf("?");if (u >= 0) {
      var v = this.sourceSearch = t.substring(u);if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0) for (m = 0; i = k.exec(v);) {
        r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex;
      }
    } else this.sourcePath = a, this.sourceSearch = "";l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q;
  }function r(a) {
    M(this, a);
  }function s() {
    function a(a) {
      return null != a ? a.toString().replace(/\//g, "%2F") : a;
    }function e(a) {
      return null != a ? a.toString().replace(/%2F/g, "/") : a;
    }function f(a) {
      return this.pattern.test(a);
    }function i() {
      return { strict: t, caseInsensitive: p };
    }function j(a) {
      return H(a) || K(a) && H(a[a.length - 1]);
    }function k() {
      for (; x.length;) {
        var a = x.shift();if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");b.extend(v[a.name], o.invoke(a.def));
      }
    }function l(a) {
      M(this, a || {});
    }O = this;var o,
        p = !1,
        t = !0,
        u = !1,
        v = {},
        w = !0,
        x = [],
        y = { string: { encode: a, decode: e, is: f, pattern: /[^/]*/ }, "int": { encode: a, decode: function decode(a) {
          return parseInt(a, 10);
        }, is: function is(a) {
          return G(a) && this.decode(a.toString()) === a;
        }, pattern: /\d+/ }, bool: { encode: function encode(a) {
          return a ? 1 : 0;
        }, decode: function decode(a) {
          return 0 !== parseInt(a, 10);
        }, is: function is(a) {
          return a === !0 || a === !1;
        }, pattern: /0|1/ }, date: { encode: function encode(a) {
          return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c;
        }, decode: function decode(a) {
          if (this.is(a)) return a;var b = this.capture.exec(a);return b ? new Date(b[1], b[2] - 1, b[3]) : c;
        }, is: function is(a) {
          return a instanceof Date && !isNaN(a.valueOf());
        }, equals: function equals(a, b) {
          return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();
        }, pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/, capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/ }, json: { encode: b.toJson, decode: b.fromJson, is: b.isObject, equals: b.equals, pattern: /[^/]*/ }, any: { encode: b.identity, decode: b.identity, is: b.identity, equals: b.equals, pattern: /.*/ } };s.$$getDefaultValue = function (a) {
      if (!j(a.value)) return a.value;if (!o) throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(a.value);
    }, this.caseInsensitive = function (a) {
      return G(a) && (p = a), p;
    }, this.strictMode = function (a) {
      return G(a) && (t = a), t;
    }, this.defaultSquashPolicy = function (a) {
      if (!G(a)) return u;if (a !== !0 && a !== !1 && !I(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");return u = a, a;
    }, this.compile = function (a, b) {
      return new q(a, M(i(), b));
    }, this.isMatcher = function (a) {
      if (!J(a)) return !1;var b = !0;return L(q.prototype, function (c, d) {
        H(c) && (b = b && G(a[d]) && H(a[d]));
      }), b;
    }, this.type = function (a, b, c) {
      if (!G(b)) return v[a];if (v.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");return v[a] = new r(M({ name: a }, b)), c && (x.push({ name: a, def: c }), w || k()), this;
    }, L(y, function (a, b) {
      v[b] = new r(M({ name: b }, a));
    }), v = d(v, {}), this.$get = ["$injector", function (a) {
      return o = a, w = !1, k(), L(y, function (a, b) {
        v[b] || (v[b] = new r(a));
      }), this;
    }], this.Param = function (a, b, d, e) {
      function f(a) {
        var b = J(a) ? g(a) : [],
            c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");return c && (a = { value: a }), a.$$fn = j(a.value) ? a.value : function () {
          return a.value;
        }, a;
      }function i(b, c, d) {
        if (b.type && c) throw new Error("Param '" + a + "' has two type configurations.");return c ? c : b.type ? b.type instanceof r ? b.type : new r(b.type) : "config" === d ? v.any : v.string;
      }function k() {
        var b = { array: "search" === e ? "auto" : !1 },
            c = a.match(/\[\]$/) ? { array: !0 } : {};return M(b, c, d).array;
      }function l(a, b) {
        var c = a.squash;if (!b || c === !1) return !1;if (!G(c) || null == c) return u;if (c === !0 || I(c)) return c;throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string");
      }function p(a, b, d, e) {
        var f,
            g,
            i = [{ from: "", to: d || b ? c : "" }, { from: null, to: d || b ? c : "" }];return f = K(a.replace) ? a.replace : [], I(e) && f.push({ from: e, to: c }), g = n(f, function (a) {
          return a.from;
        }), m(i, function (a) {
          return -1 === h(g, a.from);
        }).concat(f);
      }function q() {
        if (!o) throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(d.$$fn);
      }function s(a) {
        function b(a) {
          return function (b) {
            return b.from === a;
          };
        }function c(a) {
          var c = n(m(w.replace, b(a)), function (a) {
            return a.to;
          });return c.length ? c[0] : a;
        }return a = c(a), G(a) ? w.type.decode(a) : q();
      }function t() {
        return "{Param:" + a + " " + b + " squash: '" + z + "' optional: " + y + "}";
      }var w = this;d = f(d), b = i(d, b, e);var x = k();b = x ? b.$asArray(x, "search" === e) : b, "string" !== b.name || x || "path" !== e || d.value !== c || (d.value = "");var y = d.value !== c,
          z = l(d, y),
          A = p(d, x, y, z);M(this, { id: a, type: b, location: e, array: x, squash: z, replace: A, isOptional: y, value: s, dynamic: c, config: d, toString: t });
    }, l.prototype = { $$new: function $$new() {
        return d(this, M(new l(), { $$parent: this }));
      }, $$keys: function $$keys() {
        for (var a = [], b = [], c = this, d = g(l.prototype); c;) {
          b.push(c), c = c.$$parent;
        }return b.reverse(), L(b, function (b) {
          L(g(b), function (b) {
            -1 === h(a, b) && -1 === h(d, b) && a.push(b);
          });
        }), a;
      }, $$values: function $$values(a) {
        var b = {},
            c = this;return L(c.$$keys(), function (d) {
          b[d] = c[d].value(a && a[d]);
        }), b;
      }, $$equals: function $$equals(a, b) {
        var c = !0,
            d = this;return L(d.$$keys(), function (e) {
          var f = a && a[e],
              g = b && b[e];d[e].type.equals(f, g) || (c = !1);
        }), c;
      }, $$validates: function $$validates(a) {
        var b,
            c,
            d,
            e = !0,
            f = this;return L(this.$$keys(), function (g) {
          d = f[g], c = a[g], b = !c && d.isOptional, e = e && (b || !!d.type.is(c));
        }), e;
      }, $$parent: c }, this.ParamSet = l;
  }function t(a, d) {
    function e(a) {
      var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null != b ? b[1].replace(/\\(.)/g, "$1") : "";
    }function f(a, b) {
      return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
        return b["$" === c ? 0 : Number(c)];
      });
    }function g(a, b, c) {
      if (!c) return !1;var d = a.invoke(b, b, { $match: c });return G(d) ? d : !0;
    }function h(d, e, f, g) {
      function h(a, b, c) {
        return "/" === p ? a : b ? p.slice(0, -1) + a : c ? p.slice(1) + a : a;
      }function m(a) {
        function b(a) {
          var b = a(f, d);return b ? (I(b) && d.replace().url(b), !0) : !1;
        }if (!a || !a.defaultPrevented) {
          var e = o && d.url() === o;if (o = c, e) return !0;var g,
              h = j.length;for (g = 0; h > g; g++) {
            if (b(j[g])) return;
          }k && b(k);
        }
      }function n() {
        return i = i || e.$on("$locationChangeSuccess", m);
      }var o,
          p = g.baseHref(),
          q = d.url();return l || n(), { sync: function sync() {
          m();
        }, listen: function listen() {
          return n();
        }, update: function update(a) {
          return a ? void (q = d.url()) : void (d.url() !== q && (d.url(q), d.replace()));
        }, push: function push(a, b, e) {
          d.url(a.format(b || {})), o = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace();
        }, href: function href(c, e, f) {
          if (!c.validates(e)) return null;var g = a.html5Mode();b.isObject(g) && (g = g.enabled);var i = c.format(e);if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), i = h(i, g, f.absolute), !f.absolute || !i) return i;var j = !g && i ? "/" : "",
              k = d.port();return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("");
        } };
    }var i,
        j = [],
        k = null,
        l = !1;this.rule = function (a) {
      if (!H(a)) throw new Error("'rule' must be a function");return j.push(a), this;
    }, this.otherwise = function (a) {
      if (I(a)) {
        var b = a;a = function a() {
          return b;
        };
      } else if (!H(a)) throw new Error("'rule' must be a function");return k = a, this;
    }, this.when = function (a, b) {
      var c,
          h = I(b);if (I(a) && (a = d.compile(a)), !h && !H(b) && !K(b)) throw new Error("invalid 'handler' in when()");var i = { matcher: function matcher(a, b) {
          return h && (c = d.compile(b), b = ["$match", function (a) {
            return c.format(a);
          }]), M(function (c, d) {
            return g(c, b, a.exec(d.path(), d.search()));
          }, { prefix: I(a.prefix) ? a.prefix : "" });
        }, regex: function regex(a, b) {
          if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");return h && (c = b, b = ["$match", function (a) {
            return f(c, a);
          }]), M(function (c, d) {
            return g(c, b, a.exec(d.path()));
          }, { prefix: e(a) });
        } },
          j = { matcher: d.isMatcher(a), regex: a instanceof RegExp };for (var k in j) {
        if (j[k]) return this.rule(i[k](a, b));
      }throw new Error("invalid 'what' in when()");
    }, this.deferIntercept = function (a) {
      a === c && (a = !0), l = a;
    }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser"];
  }function u(a, e) {
    function f(a) {
      return 0 === a.indexOf(".") || 0 === a.indexOf("^");
    }function l(a, b) {
      if (!a) return c;var d = I(a),
          e = d ? a : a.name,
          g = f(e);if (g) {
        if (!b) throw new Error("No reference point given for path '" + e + "'");b = l(b);for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++) {
          if ("" !== h[i] || 0 !== i) {
            if ("^" !== h[i]) break;if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");k = k.parent;
          } else k = b;
        }h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h;
      }var m = y[e];return !m || !d && (d || m !== a && m.self !== a) ? c : m;
    }function m(a, b) {
      z[a] || (z[a] = []), z[a].push(b);
    }function o(a) {
      for (var b = z[a] || []; b.length;) {
        p(b.shift());
      }
    }function p(b) {
      b = d(b, { self: b, resolve: b.resolve || {}, toString: function toString() {
          return this.name;
        } });var c = b.name;if (!I(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");if (y.hasOwnProperty(c)) throw new Error("State '" + c + "'' is already defined");var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : I(b.parent) ? b.parent : J(b.parent) && I(b.parent.name) ? b.parent.name : "";if (e && !y[e]) return m(e, b.self);for (var f in B) {
        H(B[f]) && (b[f] = B[f](b, B.$delegates[f]));
      }return y[c] = b, !b[A] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
        x.$current.navigable == b && j(a, c) || x.transitionTo(b, a, { inherit: !0, location: !1 });
      }]), o(c), b;
    }function q(a) {
      return a.indexOf("*") > -1;
    }function r(a) {
      var b = a.split("."),
          c = x.$current.name.split(".");if ("**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length) return !1;for (var d = 0, e = b.length; e > d; d++) {
        "*" === b[d] && (c[d] = "*");
      }return c.join("") === b.join("");
    }function s(a, b) {
      return I(a) && !G(b) ? B[a] : H(b) && I(a) ? (B[a] && !B.$delegates[a] && (B.$delegates[a] = B[a]), B[a] = b, this) : this;
    }function t(a, b) {
      return J(a) ? b = a : b.name = a, p(b), this;
    }function u(a, e, f, h, m, o, p) {
      function s(b, c, d, f) {
        var g = a.$broadcast("$stateNotFound", b, c, d);if (g.defaultPrevented) return p.update(), B;if (!g.retry) return null;if (f.$retry) return p.update(), C;var h = x.transition = e.when(g.retry);return h.then(function () {
          return h !== x.transition ? u : (b.options.$retry = !0, x.transitionTo(b.to, b.toParams, b.options));
        }, function () {
          return B;
        }), p.update(), h;
      }function t(a, c, d, g, i, j) {
        var l = d ? c : k(a.params.$$keys(), c),
            n = { $stateParams: l };i.resolve = m.resolve(a.resolve, n, i.resolve, a);var o = [i.resolve.then(function (a) {
          i.globals = a;
        })];return g && o.push(g), L(a.views, function (c, d) {
          var e = c.resolve && c.resolve !== a.resolve ? c.resolve : {};e.$template = [function () {
            return f.load(d, { view: c, locals: n, params: l, notify: j.notify }) || "";
          }], o.push(m.resolve(e, n, i.resolve, a).then(function (f) {
            if (H(c.controllerProvider) || K(c.controllerProvider)) {
              var g = b.extend({}, e, n);f.$$controller = h.invoke(c.controllerProvider, null, g);
            } else f.$$controller = c.controller;f.$$state = a, f.$$controllerAs = c.controllerAs, i[d] = f;
          }));
        }), e.all(o).then(function () {
          return i;
        });
      }var u = e.reject(new Error("transition superseded")),
          z = e.reject(new Error("transition prevented")),
          B = e.reject(new Error("transition aborted")),
          C = e.reject(new Error("transition failed"));return w.locals = { resolve: null, globals: { $stateParams: {} } }, x = { params: {}, current: w.self, $current: w, transition: null }, x.reload = function () {
        return x.transitionTo(x.current, o, { reload: !0, inherit: !1, notify: !0 });
      }, x.go = function (a, b, c) {
        return x.transitionTo(a, b, M({ inherit: !0, relative: x.$current }, c));
      }, x.transitionTo = function (b, c, f) {
        c = c || {}, f = M({ location: !0, inherit: !1, relative: null, notify: !0, reload: !1, $retry: !1 }, f || {});var g,
            j = x.$current,
            m = x.params,
            n = j.path,
            q = l(b, f.relative);if (!G(q)) {
          var r = { to: b, toParams: c, options: f },
              y = s(r, j.self, m, f);if (y) return y;if (b = r.to, c = r.toParams, f = r.options, q = l(b, f.relative), !G(q)) {
            if (!f.relative) throw new Error("No such state '" + b + "'");throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'");
          }
        }if (q[A]) throw new Error("Cannot transition to abstract state '" + b + "'");if (f.inherit && (c = i(o, c || {}, x.$current, q)), !q.params.$$validates(c)) return C;c = q.params.$$values(c), b = q;var B = b.path,
            D = 0,
            E = B[D],
            F = w.locals,
            H = [];if (!f.reload) for (; E && E === n[D] && E.ownParams.$$equals(c, m);) {
          F = H[D] = E.locals, D++, E = B[D];
        }if (v(b, j, F, f)) return b.self.reloadOnSearch !== !1 && p.update(), x.transition = null, e.when(x.current);if (c = k(b.params.$$keys(), c || {}), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, m).defaultPrevented) return p.update(), z;for (var I = e.when(F), J = D; J < B.length; J++, E = B[J]) {
          F = H[J] = d(F), I = t(E, c, E === b, I, F, f);
        }var K = x.transition = I.then(function () {
          var d, e, g;if (x.transition !== K) return u;for (d = n.length - 1; d >= D; d--) {
            g = n[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
          }for (d = D; d < B.length; d++) {
            e = B[d], e.locals = H[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
          }return x.transition !== K ? u : (x.$current = b, x.current = b.self, x.params = c, N(x.params, o), x.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, { $$avoidResync: !0, replace: "replace" === f.location }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, m), p.update(!0), x.current);
        }, function (d) {
          return x.transition !== K ? u : (x.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, m, d), g.defaultPrevented || p.update(), e.reject(d));
        });return K;
      }, x.is = function (a, b, d) {
        d = M({ relative: x.$current }, d || {});var e = l(a, d.relative);return G(e) ? x.$current !== e ? !1 : b ? j(e.params.$$values(b), o) : !0 : c;
      }, x.includes = function (a, b, d) {
        if (d = M({ relative: x.$current }, d || {}), I(a) && q(a)) {
          if (!r(a)) return !1;a = x.$current.name;
        }var e = l(a, d.relative);return G(e) ? G(x.$current.includes[e.name]) ? b ? j(e.params.$$values(b), o, g(b)) : !0 : !1 : c;
      }, x.href = function (a, b, d) {
        d = M({ lossy: !0, inherit: !0, absolute: !1, relative: x.$current }, d || {});var e = l(a, d.relative);if (!G(e)) return null;d.inherit && (b = i(o, b || {}, x.$current, e));var f = e && d.lossy ? e.navigable : e;return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys(), b || {}), { absolute: d.absolute }) : null;
      }, x.get = function (a, b) {
        if (0 === arguments.length) return n(g(y), function (a) {
          return y[a].self;
        });var c = l(a, b || x.$current);return c && c.self ? c.self : null;
      }, x;
    }function v(a, b, c, d) {
      return a !== b || (c !== b.locals || d.reload) && a.self.reloadOnSearch !== !1 ? void 0 : !0;
    }var w,
        x,
        y = {},
        z = {},
        A = "abstract",
        B = { parent: function parent(a) {
        if (G(a.parent) && a.parent) return l(a.parent);var b = /^(.+)\.[^.]+$/.exec(a.name);return b ? l(b[1]) : w;
      }, data: function data(a) {
        return a.parent && a.parent.data && (a.data = a.self.data = M({}, a.parent.data, a.data)), a.data;
      }, url: function url(a) {
        var b = a.url,
            c = { params: a.params || {} };if (I(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || w).url.concat(b, c);if (!b || e.isMatcher(b)) return b;throw new Error("Invalid url '" + b + "' in state '" + a + "'");
      }, navigable: function navigable(a) {
        return a.url ? a : a.parent ? a.parent.navigable : null;
      }, ownParams: function ownParams(a) {
        var b = a.url && a.url.params || new O.ParamSet();return L(a.params || {}, function (a, c) {
          b[c] || (b[c] = new O.Param(c, null, a, "config"));
        }), b;
      }, params: function params(a) {
        return a.parent && a.parent.params ? M(a.parent.params.$$new(), a.ownParams) : new O.ParamSet();
      }, views: function views(a) {
        var b = {};return L(G(a.views) ? a.views : { "": a }, function (c, d) {
          d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c;
        }), b;
      }, path: function path(a) {
        return a.parent ? a.parent.path.concat(a) : [];
      }, includes: function includes(a) {
        var b = a.parent ? M({}, a.parent.includes) : {};return b[a.name] = !0, b;
      }, $delegates: {} };w = p({ name: "", url: "^", views: null, "abstract": !0 }), w.navigable = null, this.decorator = s, this.state = t, this.$get = u, u.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"];
  }function v() {
    function a(a, b) {
      return { load: function load(c, d) {
          var e,
              f = { template: null, controller: null, view: null, locals: null, notify: !0, async: !0, params: {} };return d = M(f, d), d.view && (e = b.fromConfig(d.view, d.params, d.locals)), e && d.notify && a.$broadcast("$viewContentLoading", d), e;
        } };
    }this.$get = a, a.$inject = ["$rootScope", "$templateFactory"];
  }function w() {
    var a = !1;this.useAnchorScroll = function () {
      a = !0;
    }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
      return a ? b : function (a) {
        c(function () {
          a[0].scrollIntoView();
        }, 0, !1);
      };
    }];
  }function x(a, c, d, e) {
    function f() {
      return c.has ? function (a) {
        return c.has(a) ? c.get(a) : null;
      } : function (a) {
        try {
          return c.get(a);
        } catch (b) {
          return null;
        }
      };
    }function g(a, b) {
      var c = function c() {
        return { enter: function enter(a, b, c) {
            b.after(a), c();
          }, leave: function leave(a, b) {
            a.remove(), b();
          } };
      };if (j) return { enter: function enter(a, b, c) {
          var d = j.enter(a, null, b, c);d && d.then && d.then(c);
        }, leave: function leave(a, b) {
          var c = j.leave(a, b);c && c.then && c.then(b);
        } };if (i) {
        var d = i && i(b, a);return { enter: function enter(a, b, c) {
            d.enter(a, null, b), c();
          }, leave: function leave(a, b) {
            d.leave(a), b();
          } };
      }return c();
    }var h = f(),
        i = h("$animator"),
        j = h("$animate"),
        k = { restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function compile(c, f, h) {
        return function (c, f, i) {
          function j() {
            l && (l.remove(), l = null), n && (n.$destroy(), n = null), m && (r.leave(m, function () {
              l = null;
            }), l = m, m = null);
          }function k(g) {
            var k,
                l = z(c, i, f, e),
                s = l && a.$current && a.$current.locals[l];if (g || s !== o) {
              k = c.$new(), o = a.$current.locals[l];var t = h(k, function (a) {
                r.enter(a, f, function () {
                  n && n.$emit("$viewContentAnimationEnded"), (b.isDefined(q) && !q || c.$eval(q)) && d(a);
                }), j();
              });m = t, n = k, n.$emit("$viewContentLoaded"), n.$eval(p);
            }
          }var l,
              m,
              n,
              o,
              p = i.onload || "",
              q = i.autoscroll,
              r = g(i, c);c.$on("$stateChangeSuccess", function () {
            k(!1);
          }), c.$on("$viewContentLoading", function () {
            k(!1);
          }), k(!0);
        };
      } };return k;
  }function y(a, b, c, d) {
    return { restrict: "ECA", priority: -400, compile: function compile(e) {
        var f = e.html();return function (e, g, h) {
          var i = c.$current,
              j = z(e, h, g, d),
              k = i && i.locals[j];if (k) {
            g.data("$uiView", { name: j, state: k.$$state }), g.html(k.$template ? k.$template : f);var l = a(g.contents());if (k.$$controller) {
              k.$scope = e;var m = b(k.$$controller, k);k.$$controllerAs && (e[k.$$controllerAs] = m), g.data("$ngControllerController", m), g.children().data("$ngControllerController", m);
            }l(e);
          }
        };
      } };
  }function z(a, b, c, d) {
    var e = d(b.uiView || b.name || "")(a),
        f = c.inheritedData("$uiView");return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "");
  }function A(a, b) {
    var c,
        d = a.match(/^\s*({[^}]*})\s*$/);if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");return { state: c[1], paramExpr: c[3] || null };
  }function B(a) {
    var b = a.parent().inheritedData("$uiView");return b && b.state && b.state.name ? b.state : void 0;
  }function C(a, c) {
    var d = ["location", "inherit", "reload"];return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(e, f, g, h) {
        var i = A(g.uiSref, a.current.name),
            j = null,
            k = B(f) || a.$current,
            l = null,
            m = "A" === f.prop("tagName"),
            n = "FORM" === f[0].nodeName,
            o = n ? "action" : "href",
            p = !0,
            q = { relative: k, inherit: !0 },
            r = e.$eval(g.uiSrefOpts) || {};b.forEach(d, function (a) {
          a in r && (q[a] = r[a]);
        });var s = function s(c) {
          if (c && (j = b.copy(c)), p) {
            l = a.href(i.state, j, q);var d = h[1] || h[0];return d && d.$$setStateInfo(i.state, j), null === l ? (p = !1, !1) : void g.$set(o, l);
          }
        };i.paramExpr && (e.$watch(i.paramExpr, function (a) {
          a !== j && s(a);
        }, !0), j = b.copy(e.$eval(i.paramExpr))), s(), n || f.bind("click", function (b) {
          var d = b.which || b.button;if (!(d > 1 || b.ctrlKey || b.metaKey || b.shiftKey || f.attr("target"))) {
            var e = c(function () {
              a.go(i.state, j, q);
            });b.preventDefault();var g = m && !l ? 1 : 0;b.preventDefault = function () {
              g-- <= 0 && c.cancel(e);
            };
          }
        });
      } };
  }function D(a, b, c) {
    return { restrict: "A", controller: ["$scope", "$element", "$attrs", function (b, d, e) {
        function f() {
          g() ? d.addClass(j) : d.removeClass(j);
        }function g() {
          return "undefined" != typeof e.uiSrefActiveEq ? h && a.is(h.name, i) : h && a.includes(h.name, i);
        }var h, i, j;j = c(e.uiSrefActiveEq || e.uiSrefActive || "", !1)(b), this.$$setStateInfo = function (b, c) {
          h = a.get(b, B(d)), i = c, f();
        }, b.$on("$stateChangeSuccess", f);
      }] };
  }function E(a) {
    var b = function b(_b) {
      return a.is(_b);
    };return b.$stateful = !0, b;
  }function F(a) {
    var b = function b(_b2) {
      return a.includes(_b2);
    };return b.$stateful = !0, b;
  }var G = b.isDefined,
      H = b.isFunction,
      I = b.isString,
      J = b.isObject,
      K = b.isArray,
      L = b.forEach,
      M = b.extend,
      N = b.copy;b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), o.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", o), p.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", p);var O;q.prototype.concat = function (a, b) {
    var c = { caseInsensitive: O.caseInsensitive(), strict: O.strictMode(), squash: O.defaultSquashPolicy() };return new q(this.sourcePath + a + this.sourceSearch, M(c, b), this);
  }, q.prototype.toString = function () {
    return this.source;
  }, q.prototype.exec = function (a, b) {
    function c(a) {
      function b(a) {
        return a.split("").reverse().join("");
      }function c(a) {
        return a.replace(/\\-/, "-");
      }var d = b(a).split(/-(?!\\)/),
          e = n(d, b);return n(e, c).reverse();
    }var d = this.regexp.exec(a);if (!d) return null;b = b || {};var e,
        f,
        g,
        h = this.parameters(),
        i = h.length,
        j = this.segments.length - 1,
        k = {};if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");for (e = 0; j > e; e++) {
      g = h[e];var l = this.params[g],
          m = d[e + 1];for (f = 0; f < l.replace; f++) {
        l.replace[f].from === m && (m = l.replace[f].to);
      }m && l.array === !0 && (m = c(m)), k[g] = l.value(m);
    }for (; i > e; e++) {
      g = h[e], k[g] = this.params[g].value(b[g]);
    }return k;
  }, q.prototype.parameters = function (a) {
    return G(a) ? this.params[a] || null : this.$$paramNames;
  }, q.prototype.validates = function (a) {
    return this.params.$$validates(a);
  }, q.prototype.format = function (a) {
    function b(a) {
      return encodeURIComponent(a).replace(/-/g, function (a) {
        return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase();
      });
    }a = a || {};var c = this.segments,
        d = this.parameters(),
        e = this.params;if (!this.validates(a)) return null;var f,
        g = !1,
        h = c.length - 1,
        i = d.length,
        j = c[0];for (f = 0; i > f; f++) {
      var k = h > f,
          l = d[f],
          m = e[l],
          o = m.value(a[l]),
          p = m.isOptional && m.type.equals(m.value(), o),
          q = p ? m.squash : !1,
          r = m.type.encode(o);if (k) {
        var s = c[f + 1];if (q === !1) null != r && (j += K(r) ? n(r, b).join("-") : encodeURIComponent(r)), j += s;else if (q === !0) {
          var t = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;j += s.match(t)[1];
        } else I(q) && (j += q + s);
      } else {
        if (null == r || p && q !== !1) continue;K(r) || (r = [r]), r = n(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0;
      }
    }return j;
  }, r.prototype.is = function () {
    return !0;
  }, r.prototype.encode = function (a) {
    return a;
  }, r.prototype.decode = function (a) {
    return a;
  }, r.prototype.equals = function (a, b) {
    return a == b;
  }, r.prototype.$subPattern = function () {
    var a = this.pattern.toString();return a.substr(1, a.length - 2);
  }, r.prototype.pattern = /.*/, r.prototype.toString = function () {
    return "{Type:" + this.name + "}";
  }, r.prototype.$asArray = function (a, b) {
    function d(a, b) {
      function d(a, b) {
        return function () {
          return a[b].apply(a, arguments);
        };
      }function e(a) {
        return K(a) ? a : G(a) ? [a] : [];
      }function f(a) {
        switch (a.length) {case 0:
            return c;case 1:
            return "auto" === b ? a[0] : a;default:
            return a;}
      }function g(a) {
        return !a;
      }function h(a, b) {
        return function (c) {
          c = e(c);var d = n(c, a);return b === !0 ? 0 === m(d, g).length : f(d);
        };
      }function i(a) {
        return function (b, c) {
          var d = e(b),
              f = e(c);if (d.length !== f.length) return !1;for (var g = 0; g < d.length; g++) {
            if (!a(d[g], f[g])) return !1;
          }return !0;
        };
      }this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$arrayMode = b;
    }if (!a) return this;if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");return new d(this, a);
  }, b.module("ui.router.util").provider("$urlMatcherFactory", s), b.module("ui.router.util").run(["$urlMatcherFactory", function () {}]), t.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", t), u.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").value("$stateParams", {}).provider("$state", u), v.$inject = [], b.module("ui.router.state").provider("$view", v), b.module("ui.router.state").provider("$uiViewScroll", w), x.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], y.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", x), b.module("ui.router.state").directive("uiView", y), C.$inject = ["$state", "$timeout"], D.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", C).directive("uiSrefActive", D).directive("uiSrefActiveEq", D), E.$inject = ["$state"], F.$inject = ["$state"], b.module("ui.router.state").filter("isState", E).filter("includedByState", F);
}(window, window.angular);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 AngularJS v1.5.3
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (T, P, u) {
  'use strict';
  function O(a) {
    return function () {
      var b = arguments[0],
          d;d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.3/" + (a ? a + "/" : "") + b;for (b = 1; b < arguments.length; b++) {
        d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";var c = encodeURIComponent,
            e;e = arguments[b];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;d += c(e);
      }return Error(d);
    };
  }function za(a) {
    if (null == a || Ya(a)) return !1;if (M(a) || y(a) || H && a instanceof H) return !0;
    var b = "length" in Object(a) && a.length;return R(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item);
  }function q(a, b, d) {
    var c, e;if (a) if (D(a)) for (c in a) {
      "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);
    } else if (M(a) || za(a)) {
      var f = "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a));c = 0;for (e = a.length; c < e; c++) {
        (f || c in a) && b.call(d, a[c], c, a);
      }
    } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);else if (oc(a)) for (c in a) {
      b.call(d, a[c], c, a);
    } else if ("function" === typeof a.hasOwnProperty) for (c in a) {
      a.hasOwnProperty(c) && b.call(d, a[c], c, a);
    } else for (c in a) {
      va.call(a, c) && b.call(d, a[c], c, a);
    }return a;
  }function pc(a, b, d) {
    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) {
      b.call(d, a[c[e]], c[e]);
    }return c;
  }function qc(a) {
    return function (b, d) {
      a(d, b);
    };
  }function Wd() {
    return ++qb;
  }function Ob(a, b, d) {
    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
      var g = b[e];if (J(g) || D(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
        var m = h[k],
            n = g[m];d && J(n) ? fa(n) ? a[m] = new Date(n.valueOf()) : Za(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Pb(n) ? a[m] = n.clone() : (J(a[m]) || (a[m] = M(n) ? [] : {}), Ob(a[m], [n], !0)) : a[m] = n;
      }
    }c ? a.$$hashKey = c : delete a.$$hashKey;return a;
  }function S(a) {
    return Ob(a, Aa.call(arguments, 1), !1);
  }function Xd(a) {
    return Ob(a, Aa.call(arguments, 1), !0);
  }function Y(a) {
    return parseInt(a, 10);
  }function Qb(a, b) {
    return S(Object.create(a), b);
  }function E() {}function $a(a) {
    return a;
  }function da(a) {
    return function () {
      return a;
    };
  }function rc(a) {
    return D(a.toString) && a.toString !== ka;
  }function z(a) {
    return "undefined" === typeof a;
  }function A(a) {
    return "undefined" !== typeof a;
  }function J(a) {
    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a));
  }function oc(a) {
    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && !sc(a);
  }function y(a) {
    return "string" === typeof a;
  }function R(a) {
    return "number" === typeof a;
  }function fa(a) {
    return "[object Date]" === ka.call(a);
  }function D(a) {
    return "function" === typeof a;
  }function Za(a) {
    return "[object RegExp]" === ka.call(a);
  }function Ya(a) {
    return a && a.window === a;
  }function ab(a) {
    return a && a.$evalAsync && a.$watch;
  }function Oa(a) {
    return "boolean" === typeof a;
  }function Yd(a) {
    return a && R(a.length) && Zd.test(ka.call(a));
  }function Pb(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
  }function $d(a) {
    var b = {};a = a.split(",");var d;for (d = 0; d < a.length; d++) {
      b[a[d]] = !0;
    }return b;
  }function oa(a) {
    return N(a.nodeName || a[0] && a[0].nodeName);
  }function bb(a, b) {
    var d = a.indexOf(b);0 <= d && a.splice(d, 1);return d;
  }function pa(a, b) {
    function d(a, b) {
      var d = b.$$hashKey,
          e;if (M(a)) {
        e = 0;for (var f = a.length; e < f; e++) {
          b.push(c(a[e]));
        }
      } else if (oc(a)) for (e in a) {
        b[e] = c(a[e]);
      } else if (a && "function" === typeof a.hasOwnProperty) for (e in a) {
        a.hasOwnProperty(e) && (b[e] = c(a[e]));
      } else for (e in a) {
        va.call(a, e) && (b[e] = c(a[e]));
      }d ? b.$$hashKey = d : delete b.$$hashKey;return b;
    }function c(a) {
      if (!J(a)) return a;var b = f.indexOf(a);if (-1 !== b) return g[b];if (Ya(a) || ab(a)) throw Ba("cpws");var b = !1,
          c = e(a);c === u && (c = M(a) ? [] : Object.create(sc(a)), b = !0);f.push(a);g.push(c);return b ? d(a, c) : c;
    }function e(a) {
      switch (ka.call(a)) {case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
          return new a.constructor(c(a.buffer));
        case "[object ArrayBuffer]":
          if (!a.slice) {
            var b = new ArrayBuffer(a.byteLength);new Uint8Array(b).set(new Uint8Array(a));return b;
          }return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":
          return new a.constructor(a.valueOf());case "[object RegExp]":
          return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;case "[object Blob]":
          return new a.constructor([a], { type: a.type });}if (D(a.cloneNode)) return a.cloneNode(!0);
    }var f = [],
        g = [];if (b) {
      if (Yd(b) || "[object ArrayBuffer]" === ka.call(b)) throw Ba("cpta");if (a === b) throw Ba("cpi");M(b) ? b.length = 0 : q(b, function (a, c) {
        "$$hashKey" !== c && delete b[c];
      });f.push(a);g.push(b);return d(a, b);
    }return c(a);
  }function ia(a, b) {
    if (M(a)) {
      b = b || [];for (var d = 0, c = a.length; d < c; d++) {
        b[d] = a[d];
      }
    } else if (J(a)) for (d in b = b || {}, a) {
      if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
    }return b || a;
  }function na(a, b) {
    if (a === b) return !0;if (null === a || null === b) return !1;if (a !== a && b !== b) return !0;var d = typeof a === "undefined" ? "undefined" : _typeof(a),
        c;if (d == (typeof b === "undefined" ? "undefined" : _typeof(b)) && "object" == d) if (M(a)) {
      if (!M(b)) return !1;if ((d = a.length) == b.length) {
        for (c = 0; c < d; c++) {
          if (!na(a[c], b[c])) return !1;
        }return !0;
      }
    } else {
      if (fa(a)) return fa(b) ? na(a.getTime(), b.getTime()) : !1;if (Za(a)) return Za(b) ? a.toString() == b.toString() : !1;if (ab(a) || ab(b) || Ya(a) || Ya(b) || M(b) || fa(b) || Za(b)) return !1;d = V();for (c in a) {
        if ("$" !== c.charAt(0) && !D(a[c])) {
          if (!na(a[c], b[c])) return !1;d[c] = !0;
        }
      }for (c in b) {
        if (!(c in d) && "$" !== c.charAt(0) && A(b[c]) && !D(b[c])) return !1;
      }return !0;
    }return !1;
  }function cb(a, b, d) {
    return a.concat(Aa.call(b, d));
  }function tc(a, b) {
    var d = 2 < arguments.length ? Aa.call(arguments, 2) : [];return !D(b) || b instanceof RegExp ? b : d.length ? function () {
      return arguments.length ? b.apply(a, cb(d, arguments, 0)) : b.apply(a, d);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }function ae(a, b) {
    var d = b;"string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = u : Ya(b) ? d = "$WINDOW" : b && P === b ? d = "$DOCUMENT" : ab(b) && (d = "$SCOPE");return d;
  }function db(a, b) {
    if (z(a)) return u;R(b) || (b = b ? 2 : null);return JSON.stringify(a, ae, b);
  }function uc(a) {
    return y(a) ? JSON.parse(a) : a;
  }function vc(a, b) {
    a = a.replace(be, "");var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;return isNaN(d) ? b : d;
  }function Rb(a, b, d) {
    d = d ? -1 : 1;var c = a.getTimezoneOffset();b = vc(b, c);d *= b - c;a = new Date(a.getTime());a.setMinutes(a.getMinutes() + d);return a;
  }function wa(a) {
    a = H(a).clone();try {
      a.empty();
    } catch (b) {}var d = H("<div>").append(a).html();try {
      return a[0].nodeType === Pa ? N(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return "<" + N(b);
      });
    } catch (c) {
      return N(d);
    }
  }function wc(a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {}
  }
  function xc(a) {
    var b = {};q((a || "").split("&"), function (a) {
      var c, e, f;a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = wc(e), A(e) && (f = A(f) ? wc(f) : !0, va.call(b, e) ? M(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f));
    });return b;
  }function Sb(a) {
    var b = [];q(a, function (a, c) {
      M(a) ? q(a, function (a) {
        b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)));
      }) : b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)));
    });return b.length ? b.join("&") : "";
  }function rb(a) {
    return ja(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
  }function ja(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
  }function ce(a, b) {
    var d,
        c,
        e = Qa.length;for (c = 0; c < e; ++c) {
      if (d = Qa[c] + b, y(d = a.getAttribute(d))) return d;
    }return null;
  }function de(a, b) {
    var d,
        c,
        e = {};q(Qa, function (b) {
      b += "app";!d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
    });q(Qa, function (b) {
      b += "app";var e;!d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
    });d && (e.strictDi = null !== ce(d, "strict-di"), b(d, c ? [c] : [], e));
  }function yc(a, b, d) {
    J(d) || (d = {});d = S({ strictDi: !1 }, d);var c = function c() {
      a = H(a);if (a.injector()) {
        var c = a[0] === P ? "document" : wa(a);throw Ba("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }b = b || [];b.unshift(["$provide", function (b) {
        b.value("$rootElement", a);
      }]);d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(!0);
      }]);b.unshift("ng");c = eb(b, d.strictDi);c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
        a.$apply(function () {
          b.data("$injector", d);c(b)(a);
        });
      }]);return c;
    },
        e = /^NG_ENABLE_DEBUG_INFO!/,
        f = /^NG_DEFER_BOOTSTRAP!/;T && e.test(T.name) && (d.debugInfoEnabled = !0, T.name = T.name.replace(e, ""));if (T && !f.test(T.name)) return c();T.name = T.name.replace(f, "");ea.resumeBootstrap = function (a) {
      q(a, function (a) {
        b.push(a);
      });return c();
    };D(ea.resumeDeferredBootstrap) && ea.resumeDeferredBootstrap();
  }function ee() {
    T.name = "NG_ENABLE_DEBUG_INFO!" + T.name;T.location.reload();
  }
  function fe(a) {
    a = ea.element(a).injector();if (!a) throw Ba("test");return a.get("$$testability");
  }function zc(a, b) {
    b = b || "_";return a.replace(ge, function (a, c) {
      return (c ? b : "") + a.toLowerCase();
    });
  }function he() {
    var a;if (!Ac) {
      var b = sb();($ = z(b) ? T.jQuery : b ? T[b] : u) && $.fn.on ? (H = $, S($.fn, { scope: Ra.scope, isolateScope: Ra.isolateScope, controller: Ra.controller, injector: Ra.injector, inheritedData: Ra.inheritedData }), a = $.cleanData, $.cleanData = function (b) {
        for (var c, e = 0, f; null != (f = b[e]); e++) {
          (c = $._data(f, "events")) && c.$destroy && $(f).triggerHandler("$destroy");
        }a(b);
      }) : H = U;ea.element = H;Ac = !0;
    }
  }function tb(a, b, d) {
    if (!a) throw Ba("areq", b || "?", d || "required");return a;
  }function Sa(a, b, d) {
    d && M(a) && (a = a[a.length - 1]);tb(D(a), b, "not a function, got " + (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) ? a.constructor.name || "Object" : typeof a === "undefined" ? "undefined" : _typeof(a)));return a;
  }function Ta(a, b) {
    if ("hasOwnProperty" === a) throw Ba("badname", b);
  }function Bc(a, b, d) {
    if (!b) return a;b = b.split(".");for (var c, e = a, f = b.length, g = 0; g < f; g++) {
      c = b[g], a && (a = (e = a)[c]);
    }return !d && D(a) ? tc(e, a) : a;
  }function ub(a) {
    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) {
      if (c || a[e] !== b) c || (c = H(Aa.call(a, 0, e))), c.push(b);
    }return c || a;
  }function V() {
    return Object.create(null);
  }function ie(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c());
    }var d = O("$injector"),
        c = O("ng");a = b(a, "angular", Object);a.$$minErr = a.$$minErr || O;return b(a, "module", function () {
      var a = {};return function (f, g, h) {
        if ("hasOwnProperty" === f) throw c("badname", "module");g && a.hasOwnProperty(f) && (a[f] = null);return b(a, f, function () {
          function a(b, d, e, f) {
            f || (f = c);return function () {
              f[e || "push"]([b, d, arguments]);return L;
            };
          }function b(a, d) {
            return function (b, e) {
              e && D(e) && (e.$$moduleName = f);c.push([a, d, arguments]);return L;
            };
          }if (!g) throw d("nomod", f);var c = [],
              e = [],
              p = [],
              F = a("$injector", "invoke", "push", e),
              L = { _invokeQueue: c, _configBlocks: e, _runBlocks: p, requires: g, name: f, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide", "decorator"), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), component: b("$compileProvider", "component"), config: F, run: function run(a) {
              p.push(a);return this;
            } };h && F(h);return L;
        });
      };
    });
  }function je(a) {
    S(a, { bootstrap: yc, copy: pa, extend: S, merge: Xd, equals: na, element: H, forEach: q, injector: eb, noop: E, bind: tc, toJson: db, fromJson: uc, identity: $a, isUndefined: z, isDefined: A, isString: y, isFunction: D, isObject: J, isNumber: R, isElement: Pb, isArray: M,
      version: ke, isDate: fa, lowercase: N, uppercase: vb, callbacks: { counter: 0 }, getTestability: fe, $$minErr: O, $$csp: Ga, reloadWithDebugInfo: ee });Tb = ie(T);Tb("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({ $$sanitizeUri: le });a.provider("$compile", Cc).directive({ a: me, input: Dc, textarea: Dc, form: ne, script: oe, select: pe, style: qe, option: re, ngBind: se, ngBindHtml: te, ngBindTemplate: ue, ngClass: ve, ngClassEven: we, ngClassOdd: xe, ngCloak: ye, ngController: ze, ngForm: Ae, ngHide: Be, ngIf: Ce, ngInclude: De, ngInit: Ee, ngNonBindable: Fe,
        ngPluralize: Ge, ngRepeat: He, ngShow: Ie, ngStyle: Je, ngSwitch: Ke, ngSwitchWhen: Le, ngSwitchDefault: Me, ngOptions: Ne, ngTransclude: Oe, ngModel: Pe, ngList: Qe, ngChange: Re, pattern: Ec, ngPattern: Ec, required: Fc, ngRequired: Fc, minlength: Gc, ngMinlength: Gc, maxlength: Hc, ngMaxlength: Hc, ngValue: Se, ngModelOptions: Te }).directive({ ngInclude: Ue }).directive(wb).directive(Ic);a.provider({ $anchorScroll: Ve, $animate: We, $animateCss: Xe, $$animateJs: Ye, $$animateQueue: Ze, $$AnimateRunner: $e, $$animateAsyncRun: af, $browser: bf, $cacheFactory: cf,
        $controller: df, $document: ef, $exceptionHandler: ff, $filter: Jc, $$forceReflow: gf, $interpolate: hf, $interval: jf, $http: kf, $httpParamSerializer: lf, $httpParamSerializerJQLike: mf, $httpBackend: nf, $xhrFactory: of, $location: pf, $log: qf, $parse: rf, $rootScope: sf, $q: tf, $$q: uf, $sce: vf, $sceDelegate: wf, $sniffer: xf, $templateCache: yf, $templateRequest: zf, $$testability: Af, $timeout: Bf, $window: Cf, $$rAF: Df, $$jqLite: Ef, $$HashMap: Ff, $$cookieReader: Gf });
    }]);
  }function fb(a) {
    return a.replace(Hf, function (a, d, c, e) {
      return e ? c.toUpperCase() : c;
    }).replace(If, "Moz$1");
  }function Kc(a) {
    a = a.nodeType;return 1 === a || !a || 9 === a;
  }function Lc(a, b) {
    var d,
        c,
        e = b.createDocumentFragment(),
        f = [];if (Ub.test(a)) {
      d = d || e.appendChild(b.createElement("div"));c = (Jf.exec(a) || ["", ""])[1].toLowerCase();c = ha[c] || ha._default;d.innerHTML = c[1] + a.replace(Kf, "<$1></$2>") + c[2];for (c = c[0]; c--;) {
        d = d.lastChild;
      }f = cb(f, d.childNodes);d = e.firstChild;d.textContent = "";
    } else f.push(b.createTextNode(a));e.textContent = "";e.innerHTML = "";q(f, function (a) {
      e.appendChild(a);
    });return e;
  }function Mc(a, b) {
    var d = a.parentNode;d && d.replaceChild(b, a);b.appendChild(a);
  }function U(a) {
    if (a instanceof U) return a;var b;y(a) && (a = W(a), b = !0);if (!(this instanceof U)) {
      if (b && "<" != a.charAt(0)) throw Vb("nosel");return new U(a);
    }if (b) {
      b = P;var d;a = (d = Lf.exec(a)) ? [b.createElement(d[1])] : (d = Lc(a, b)) ? d.childNodes : [];
    }Nc(this, a);
  }function Wb(a) {
    return a.cloneNode(!0);
  }function xb(a, b) {
    b || gb(a);if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) {
      gb(d[c]);
    }
  }function Oc(a, b, d, c) {
    if (A(c)) throw Vb("offargs");
    var e = (c = yb(a)) && c.events,
        f = c && c.handle;if (f) if (b) {
      var g = function g(b) {
        var c = e[b];A(d) && bb(c || [], d);A(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b]);
      };q(b.split(" "), function (a) {
        g(a);zb[a] && g(zb[a]);
      });
    } else for (b in e) {
      "$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b];
    }
  }function gb(a, b) {
    var d = a.ng339,
        c = d && hb[d];c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Oc(a)), delete hb[d], a.ng339 = u));
  }function yb(a, b) {
    var d = a.ng339,
        d = d && hb[d];b && !d && (a.ng339 = d = ++Mf, d = hb[d] = { events: {}, data: {}, handle: u });return d;
  }function Xb(a, b, d) {
    if (Kc(a)) {
      var c = A(d),
          e = !c && b && !J(b),
          f = !b;a = (a = yb(a, !e)) && a.data;if (c) a[b] = d;else {
        if (f) return a;if (e) return a && a[b];S(a, b);
      }
    }
  }function Ab(a, b) {
    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
  }function Bb(a, b) {
    b && a.setAttribute && q(b.split(" "), function (b) {
      a.setAttribute("class", W((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + W(b) + " ", " ")));
    });
  }function Cb(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");q(b.split(" "), function (a) {
        a = W(a);-1 === d.indexOf(" " + a + " ") && (d += a + " ");
      });a.setAttribute("class", W(d));
    }
  }function Nc(a, b) {
    if (b) if (b.nodeType) a[a.length++] = b;else {
      var d = b.length;if ("number" === typeof d && b.window !== b) {
        if (d) for (var c = 0; c < d; c++) {
          a[a.length++] = b[c];
        }
      } else a[a.length++] = b;
    }
  }function Pc(a, b) {
    return Db(a, "$" + (b || "ngController") + "Controller");
  }function Db(a, b, d) {
    9 == a.nodeType && (a = a.documentElement);for (b = M(b) ? b : [b]; a;) {
      for (var c = 0, e = b.length; c < e; c++) {
        if (A(d = H.data(a, b[c]))) return d;
      }a = a.parentNode || 11 === a.nodeType && a.host;
    }
  }function Qc(a) {
    for (xb(a, !0); a.firstChild;) {
      a.removeChild(a.firstChild);
    }
  }function Yb(a, b) {
    b || xb(a);var d = a.parentNode;d && d.removeChild(a);
  }function Nf(a, b) {
    b = b || T;if ("complete" === b.document.readyState) b.setTimeout(a);else H(b).on("load", a);
  }function Rc(a, b) {
    var d = Eb[b.toLowerCase()];return d && Sc[oa(a)] && d;
  }function Of(a, b) {
    var d = function d(c, _d) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };
      var f = b[_d || c.type],
          g = f ? f.length : 0;if (g) {
        if (z(c.immediatePropagationStopped)) {
          var h = c.stopImmediatePropagation;c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = !0;c.stopPropagation && c.stopPropagation();h && h.call(c);
          };
        }c.isImmediatePropagationStopped = function () {
          return !0 === c.immediatePropagationStopped;
        };var k = f.specialHandlerWrapper || Pf;1 < g && (f = ia(f));for (var l = 0; l < g; l++) {
          c.isImmediatePropagationStopped() || k(a, c, f[l]);
        }
      }
    };d.elem = a;return d;
  }function Pf(a, b, d) {
    d.call(a, b);
  }function Qf(a, b, d) {
    var c = b.relatedTarget;c && (c === a || Rf.call(a, c)) || d.call(a, b);
  }function Ef() {
    this.$get = function () {
      return S(U, { hasClass: function hasClass(a, b) {
          a.attr && (a = a[0]);return Ab(a, b);
        }, addClass: function addClass(a, b) {
          a.attr && (a = a[0]);return Cb(a, b);
        }, removeClass: function removeClass(a, b) {
          a.attr && (a = a[0]);return Bb(a, b);
        } });
    };
  }function Ha(a, b) {
    var d = a && a.$$hashKey;if (d) return "function" === typeof d && (d = a.$$hashKey()), d;d = typeof a === "undefined" ? "undefined" : _typeof(a);return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Wd)() : d + ":" + a;
  }function Ua(a, b) {
    if (b) {
      var d = 0;this.nextUid = function () {
        return ++d;
      };
    }q(a, this.put, this);
  }function Tc(a) {
    a = a.toString().replace(Sf, "");return a.match(Tf) || a.match(Uf);
  }function Vf(a) {
    return (a = Tc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }function eb(a, b) {
    function d(a) {
      return function (b, c) {
        if (J(b)) q(b, qc(a));else return a(b, c);
      };
    }function c(a, b) {
      Ta(a, "service");if (D(b) || M(b)) b = p.instantiate(b);if (!b.$get) throw Ia("pget", a);return n[a + "Provider"] = b;
    }function e(a, b) {
      return function () {
        var c = x.invoke(b, this);if (z(c)) throw Ia("undef", a);
        return c;
      };
    }function f(a, b, d) {
      return c(a, { $get: !1 !== d ? e(a, b) : b });
    }function g(a) {
      tb(z(a) || M(a), "modulesToLoad", "not an array");var b = [],
          c;q(a, function (a) {
        function d(a) {
          var b, c;b = 0;for (c = a.length; b < c; b++) {
            var e = a[b],
                f = p.get(e[0]);f[e[1]].apply(f, e[2]);
          }
        }if (!m.get(a)) {
          m.put(a, !0);try {
            y(a) ? (c = Tb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : D(a) ? b.push(p.invoke(a)) : M(a) ? b.push(p.invoke(a)) : Sa(a, "module");
          } catch (e) {
            throw M(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ia("modulerr", a, e.stack || e.message || e);
          }
        }
      });return b;
    }function h(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === k) throw Ia("cdep", b + " <- " + l.join(" <- "));return a[b];
        }try {
          return l.unshift(b), a[b] = k, a[b] = c(b, e);
        } catch (f) {
          throw a[b] === k && delete a[b], f;
        } finally {
          l.shift();
        }
      }function e(a, c, f) {
        var g = [];a = eb.$$annotate(a, b, f);for (var h = 0, k = a.length; h < k; h++) {
          var l = a[h];if ("string" !== typeof l) throw Ia("itkn", l);g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
        }return g;
      }return { invoke: function invoke(a, b, c, d) {
          "string" === typeof c && (d = c, c = null);c = e(a, c, d);M(a) && (a = a[a.length - 1]);d = 11 >= Da ? !1 : "function" === typeof a && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a));return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
        }, instantiate: function instantiate(a, b, c) {
          var d = M(a) ? a[a.length - 1] : a;a = e(a, b, c);a.unshift(null);return new (Function.prototype.bind.apply(d, a))();
        }, get: d, annotate: eb.$$annotate, has: function has(b) {
          return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
        } };
    }b = !0 === b;var k = {},
        l = [],
        m = new Ua([], !0),
        n = { $provide: { provider: d(c), factory: d(f), service: d(function (a, b) {
          return f(a, ["$injector", function (a) {
            return a.instantiate(b);
          }]);
        }), value: d(function (a, b) {
          return f(a, da(b), !1);
        }), constant: d(function (a, b) {
          Ta(a, "constant");n[a] = b;F[a] = b;
        }), decorator: function decorator(a, b) {
          var c = p.get(a + "Provider"),
              d = c.$get;c.$get = function () {
            var a = x.invoke(d, c);return x.invoke(b, null, { $delegate: a });
          };
        } } },
        p = n.$injector = h(n, function (a, b) {
      ea.isString(b) && l.push(b);
      throw Ia("unpr", l.join(" <- "));
    }),
        F = {},
        L = h(F, function (a, b) {
      var c = p.get(a + "Provider", b);return x.invoke(c.$get, c, u, a);
    }),
        x = L;n.$injectorProvider = { $get: da(L) };var r = g(a),
        x = L.get("$injector");x.strictDi = b;q(r, function (a) {
      a && x.invoke(a);
    });return x;
  }function Ve() {
    var a = !0;this.disableAutoScrolling = function () {
      a = !1;
    };this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
      function e(a) {
        var b = null;Array.prototype.some.call(a, function (a) {
          if ("a" === oa(a)) return b = a, !0;
        });return b;
      }function f(a) {
        if (a) {
          a.scrollIntoView();
          var c;c = g.yOffset;D(c) ? c = c() : Pb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : R(c) || (c = 0);c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
        } else b.scrollTo(0, 0);
      }function g(a) {
        a = y(a) ? a : d.hash();var b;a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
      }var h = b.document;a && c.$watch(function () {
        return d.hash();
      }, function (a, b) {
        a === b && "" === a || Nf(function () {
          c.$evalAsync(g);
        });
      });return g;
    }];
  }function ib(a, b) {
    if (!a && !b) return "";
    if (!a) return b;if (!b) return a;M(a) && (a = a.join(" "));M(b) && (b = b.join(" "));return a + " " + b;
  }function Wf(a) {
    y(a) && (a = a.split(" "));var b = V();q(a, function (a) {
      a.length && (b[a] = !0);
    });return b;
  }function Ja(a) {
    return J(a) ? a : {};
  }function Xf(a, b, d, c) {
    function e(a) {
      try {
        a.apply(null, Aa.call(arguments, 1));
      } finally {
        if (L--, 0 === L) for (; x.length;) {
          try {
            x.pop()();
          } catch (b) {
            d.error(b);
          }
        }
      }
    }function f() {
      t = null;g();h();
    }function g() {
      r = G();r = z(r) ? null : r;na(r, I) && (r = I);I = r;
    }function h() {
      if (v !== k.url() || w !== r) v = k.url(), w = r, q(C, function (a) {
        a(k.url(), r);
      });
    }var k = this,
        l = a.location,
        m = a.history,
        n = a.setTimeout,
        p = a.clearTimeout,
        F = {};k.isMock = !1;var L = 0,
        x = [];k.$$completeOutstandingRequest = e;k.$$incOutstandingRequestCount = function () {
      L++;
    };k.notifyWhenNoOutstandingRequests = function (a) {
      0 === L ? a() : x.push(a);
    };var r,
        w,
        v = l.href,
        Q = b.find("base"),
        t = null,
        G = c.history ? function () {
      try {
        return m.state;
      } catch (a) {}
    } : E;g();w = r;k.url = function (b, d, e) {
      z(e) && (e = null);l !== a.location && (l = a.location);m !== a.history && (m = a.history);if (b) {
        var f = w === e;if (v === b && (!c.history || f)) return k;
        var h = v && Ka(v) === Ka(b);v = b;w = e;if (!c.history || h && f) {
          if (!h || t) t = b;d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b;l.href !== b && (t = b);
        } else m[d ? "replaceState" : "pushState"](e, "", b), g(), w = r;return k;
      }return t || l.href.replace(/%27/g, "'");
    };k.state = function () {
      return r;
    };var C = [],
        K = !1,
        I = null;k.onUrlChange = function (b) {
      if (!K) {
        if (c.history) H(a).on("popstate", f);H(a).on("hashchange", f);K = !0;
      }C.push(b);return b;
    };k.$$applicationDestroyed = function () {
      H(a).off("hashchange popstate", f);
    };
    k.$$checkUrlChange = h;k.baseHref = function () {
      var a = Q.attr("href");return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
    };k.defer = function (a, b) {
      var c;L++;c = n(function () {
        delete F[c];e(a);
      }, b || 0);F[c] = !0;return c;
    };k.defer.cancel = function (a) {
      return F[a] ? (delete F[a], p(a), e(E), !0) : !1;
    };
  }function bf() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
      return new Xf(a, c, b, d);
    }];
  }function cf() {
    this.$get = function () {
      function a(a, c) {
        function e(a) {
          a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
        }function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }if (a in b) throw O("$cacheFactory")("iid", a);var g = 0,
            h = S({}, c, { id: a }),
            k = V(),
            l = c && c.capacity || Number.MAX_VALUE,
            m = V(),
            n = null,
            p = null;return b[a] = { put: function put(a, b) {
            if (!z(b)) {
              if (l < Number.MAX_VALUE) {
                var c = m[a] || (m[a] = { key: a });e(c);
              }a in k || g++;k[a] = b;g > l && this.remove(p.key);return b;
            }
          }, get: function get(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;e(b);
            }return k[a];
          }, remove: function remove(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;b == n && (n = b.p);b == p && (p = b.n);f(b.n, b.p);delete m[a];
            }a in k && (delete k[a], g--);
          }, removeAll: function removeAll() {
            k = V();g = 0;m = V();n = p = null;
          }, destroy: function destroy() {
            m = h = k = null;delete b[a];
          }, info: function info() {
            return S({}, h, { size: g });
          } };
      }var b = {};a.info = function () {
        var a = {};q(b, function (b, e) {
          a[e] = b.info();
        });return a;
      };a.get = function (a) {
        return b[a];
      };return a;
    };
  }function yf() {
    this.$get = ["$cacheFactory", function (a) {
      return a("templates");
    }];
  }function Cc(a, b) {
    function d(a, b, c) {
      var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
          e = {};q(a, function (a, f) {
        if (a in m) e[f] = m[a];else {
          var g = a.match(d);if (!g) throw ga("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");e[f] = { mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f };g[4] && (m[a] = e[f]);
        }
      });return e;
    }function c(a) {
      var b = a.charAt(0);if (!b || b !== N(b)) throw ga("baddir", a);if (a !== a.trim()) throw ga("baddir", a);
    }var e = {},
        f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        g = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        h = $d("ngSrc,ngSrcset,src,srcset"),
        k = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        l = /^(on[a-z]+|formaction)$/,
        m = V();this.directive = function L(b, d) {
      Ta(b, "directive");y(b) ? (c(b), tb(d, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
        var d = [];q(e[b], function (e, f) {
          try {
            var g = a.invoke(e);D(g) ? g = { compile: da(g) } : !g.compile && g.link && (g.compile = da(g.link));g.priority = g.priority || 0;g.index = f;g.name = g.name || b;g.require = g.require || g.controller && g.name;g.restrict = g.restrict || "EA";g.$$moduleName = e.$$moduleName;d.push(g);
          } catch (h) {
            c(h);
          }
        });return d;
      }])), e[b].push(d)) : q(b, qc(L));return this;
    };this.component = function (a, b) {
      function c(a) {
        function e(b) {
          return D(b) || M(b) ? function (c, d) {
            return a.invoke(b, this, { $element: c, $attrs: d });
          } : b;
        }var f = b.template || b.templateUrl ? b.template : "";return { controller: d, controllerAs: Uc(b.controller) || b.controllerAs || "$ctrl", template: e(f), templateUrl: e(b.templateUrl), transclude: b.transclude, scope: {}, bindToController: b.bindings || {}, restrict: "E", require: b.require };
      }var d = b.controller || E;q(b, function (a, b) {
        "$" === b.charAt(0) && (c[b] = a, d[b] = a);
      });c.$inject = ["$injector"];return this.directive(a, c);
    };this.aHrefSanitizationWhitelist = function (a) {
      return A(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
    };this.imgSrcSanitizationWhitelist = function (a) {
      return A(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
    };var n = !0;this.debugInfoEnabled = function (a) {
      return A(a) ? (n = a, this) : n;
    };var p = 10;this.onChangesTtl = function (a) {
      return arguments.length ? (p = a, this) : p;
    };this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, m, v, Q, t, G, C, K) {
      function I() {
        try {
          if (! --pa) throw $ = u, ga("infchng", p);t.$apply(function () {
            for (var a = 0, b = $.length; a < b; ++a) {
              $[a]();
            }$ = u;
          });
        } finally {
          pa++;
        }
      }function qa(a, b) {
        if (b) {
          var c = Object.keys(b),
              d,
              e,
              f;d = 0;for (e = c.length; d < e; d++) {
            f = c[d], this[f] = b[f];
          }
        } else this.$attr = {};this.$$element = a;
      }function Ca(a, b, c) {
        la.innerHTML = "<span " + b + ">";b = la.firstChild.attributes;var d = b[0];b.removeNamedItem(d.name);
        d.value = c;a.attributes.setNamedItem(d);
      }function B(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }function ba(a, b, c, d, e) {
        a instanceof H || (a = H(a));for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
          var k = a[g];k.nodeType === Pa && k.nodeValue.match(f) && Mc(k, a[g] = P.createElement("span"));
        }var l = xa(a, b, a, c, d, e);ba.$$addScopeClass(a);var m = null;return function (b, c, d) {
          tb(b, "scope");e && e.needsNewScope && (b = b.$parent.$new());d = d || {};var f = d.parentBoundTranscludeFn,
              g = d.transcludeControllers;d = d.futureParentElement;f && f.$$boundTransclude && (f = f.$$boundTransclude);m || (m = (d = d && d[0]) ? "foreignobject" !== oa(d) && ka.call(d).match(/SVG/) ? "svg" : "html" : "html");d = "html" !== m ? H(ca(m, H("<div>").append(a).html())) : c ? Ra.clone.call(a) : a;if (g) for (var h in g) {
            d.data("$" + h + "Controller", g[h].instance);
          }ba.$$addScopeInfo(d, b);c && c(d, b);l && l(b, d, d, f);return d;
        };
      }function xa(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, k, l, m, n, p, G;if (r) for (G = Array(c.length), m = 0; m < h.length; m += 3) {
            f = h[m], G[f] = c[f];
          } else G = c;m = 0;for (n = h.length; m < n;) {
            k = G[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), ba.$$addScopeInfo(H(k), l)) : l = a, p = c.transcludeOnThisElement ? s(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? s(a, b) : null, c(f, l, k, d, p)) : f && f(a, k.childNodes, u, e);
          }
        }for (var h = [], k, l, m, n, r, p = 0; p < a.length; p++) {
          k = new qa();l = A(a[p], [], k, 0 === p ? d : u, e);(f = l.length ? ra(l, a[p], k, b, c, null, [], [], f) : null) && f.scope && ba.$$addScopeClass(k.$$element);k = f && f.terminal || !(m = a[p].childNodes) || !m.length ? null : xa(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || k) h.push(p, f, k), n = !0, r = r || f;f = null;
        }return n ? g : null;
      }function s(a, b, c) {
        function d(e, f, g, h, k) {
          e || (e = a.$new(!1, k), e.$$transcluded = !0);return b(e, f, { parentBoundTranscludeFn: c, transcludeControllers: g, futureParentElement: h });
        }var e = d.$$slots = V(),
            f;for (f in b.$$slots) {
          e[f] = b.$$slots[f] ? s(a, b.$$slots[f], c) : null;
        }return d;
      }function A(a, b, c, d, e) {
        var h = c.$attr,
            k;switch (a.nodeType) {case 1:
            Fa(b, ya(oa(a)), "E", d, e);for (var l, m, n, r = a.attributes, p = 0, G = r && r.length; p < G; p++) {
              var v = !1,
                  C = !1;l = r[p];k = l.name;m = W(l.value);l = ya(k);if (n = za.test(l)) k = k.replace(Vc, "").substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              });(l = l.match(Ba)) && R(l[1]) && (v = k, C = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));l = ya(k.toLowerCase());h[l] = k;if (n || !c.hasOwnProperty(l)) c[l] = m, Rc(a, l) && (c[l] = !0);fa(a, b, m, l, n);Fa(b, l, "A", d, e, v, C);
            }a = a.className;J(a) && (a = a.animVal);if (y(a) && "" !== a) for (; k = g.exec(a);) {
              l = ya(k[2]), Fa(b, l, "C", d, e) && (c[l] = W(k[3])), a = a.substr(k.index + k[0].length);
            }break;case Pa:
            if (11 === Da) for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Pa;) {
              a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
            }Y(b, a.nodeValue);break;case 8:
            try {
              if (k = f.exec(a.nodeValue)) l = ya(k[1]), Fa(b, l, "M", d, e) && (c[l] = W(k[2]));
            } catch (w) {}}b.sort(Z);return b;
      }function Wc(a, b, c) {
        var d = [],
            e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw ga("uterdir", b, c);1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
          } while (0 < e);
        } else d.push(a);return H(d);
      }function O(a, b, c) {
        return function (d, e, f, g, h) {
          e = Wc(e[0], b, c);return a(d, e, f, g, h);
        };
      }function Zb(a, b, c, d, e, f) {
        var g;return a ? ba(b, c, d, e, f) : function () {
          g || (g = ba(b, c, d, e, f), b = c = f = null);return g.apply(this, arguments);
        };
      }function ra(a, b, d, e, f, g, h, k, l) {
        function m(a, b, c, d) {
          if (a) {
            c && (a = O(a, c, d));a.require = B.require;a.directiveName = L;if (C === B || B.$$isolateScope) a = ia(a, { isolateScope: !0 });h.push(a);
          }if (b) {
            c && (b = O(b, c, d));b.require = B.require;b.directiveName = L;if (C === B || B.$$isolateScope) b = ia(b, { isolateScope: !0 });k.push(b);
          }
        }function n(a, c, e, f, g) {
          function l(a, b, c, d) {
            var e;
            ab(a) || (d = c, c = b, b = a, a = u);Ca && (e = K);c || (c = Ca ? t.parent() : t);if (d) {
              var f = g.$$slots[d];if (f) return f(a, b, e, c, s);if (z(f)) throw ga("noslot", d, wa(t));
            } else return g(a, b, e, c, s);
          }var m, r, p, B, I, K, x, t;b === e ? (f = d, t = d.$$element) : (t = H(e), f = new qa(t, d));I = c;C ? B = c.$new(!0) : G && (I = c.$parent);g && (x = l, x.$$boundTransclude = g, x.isSlotFilled = function (a) {
            return !!g.$$slots[a];
          });v && (K = T(t, f, x, v, B, c, C));C && (ba.$$addScopeInfo(t, B, !0, !(w && (w === C || w === C.$$originalDirective))), ba.$$addScopeClass(t, !0), B.$$isolateBindings = C.$$isolateBindings, (p = ha(c, f, B, B.$$isolateBindings, C)) && B.$on("$destroy", p));for (r in K) {
            p = v[r];var Va = K[r],
                Q = p.$$bindings.bindToController;Va.identifier && Q && (m = ha(I, f, Va.instance, Q, p));var L = Va();L !== Va.instance && (Va.instance = L, t.data("$" + p.name + "Controller", L), m && m(), m = ha(I, f, Va.instance, Q, p));
          }q(v, function (a, b) {
            var c = a.require;a.bindToController && !M(c) && J(c) && S(K[b].instance, jb(b, c, t, K));
          });q(K, function (a) {
            var b = a.instance;D(b.$onInit) && b.$onInit();D(b.$onDestroy) && I.$on("$destroy", function () {
              b.$onDestroy();
            });
          });m = 0;for (r = h.length; m < r; m++) {
            p = h[m], ja(p, p.isolateScope ? B : c, t, f, p.require && jb(p.directiveName, p.require, t, K), x);
          }var s = c;C && (C.template || null === C.templateUrl) && (s = B);a && a(s, e.childNodes, u, g);for (m = k.length - 1; 0 <= m; m--) {
            p = k[m], ja(p, p.isolateScope ? B : c, t, f, p.require && jb(p.directiveName, p.require, t, K), x);
          }q(K, function (a) {
            a = a.instance;D(a.$postLink) && a.$postLink();
          });
        }l = l || {};for (var p = -Number.MAX_VALUE, G = l.newScopeDirective, v = l.controllerDirectives, C = l.newIsolateScopeDirective, w = l.templateDirective, I = l.nonTlbTranscludeDirective, K = !1, x = !1, Ca = l.hasElementTranscludeDirective, t = d.$$element = H(b), B, L, Q, s = e, xa, Ea = !1, E = !1, y, ra = 0, N = a.length; ra < N; ra++) {
          B = a[ra];var R = B.$$start,
              Fa = B.$$end;R && (t = Wc(b, R, Fa));Q = u;if (p > B.priority) break;if (y = B.scope) B.templateUrl || (J(y) ? (X("new/isolated scope", C || G, B, t), C = B) : X("new/isolated scope", C, B, t)), G = G || B;L = B.name;if (!Ea && (B.replace && (B.templateUrl || B.template) || B.transclude && !B.$$tlb)) {
            for (y = ra + 1; Ea = a[y++];) {
              if (Ea.transclude && !Ea.$$tlb || Ea.replace && (Ea.templateUrl || Ea.template)) {
                E = !0;break;
              }
            }Ea = !0;
          }!B.templateUrl && B.controller && (y = B.controller, v = v || V(), X("'" + L + "' controller", v[L], B, t), v[L] = B);if (y = B.transclude) if (K = !0, B.$$tlb || (X("transclusion", I, B, t), I = B), "element" == y) Ca = !0, p = B.priority, Q = t, t = d.$$element = H(ba.$$createComment(L, d[L])), b = t[0], da(f, Aa.call(Q, 0), b), Q[0].$$parentNode = Q[0].parentNode, s = Zb(E, Q, e, p, g && g.name, { nonTlbTranscludeDirective: I });else {
            var P = V();Q = H(Wb(b)).contents();if (J(y)) {
              Q = [];var Z = V(),
                  Y = V();q(y, function (a, b) {
                var c = "?" === a.charAt(0);a = c ? a.substring(1) : a;Z[a] = b;P[b] = null;Y[b] = c;
              });q(t.contents(), function (a) {
                var b = Z[ya(oa(a))];b ? (Y[b] = !0, P[b] = P[b] || [], P[b].push(a)) : Q.push(a);
              });q(Y, function (a, b) {
                if (!a) throw ga("reqslot", b);
              });for (var $ in P) {
                P[$] && (P[$] = Zb(E, P[$], e));
              }
            }t.empty();s = Zb(E, Q, e, u, u, { needsNewScope: B.$$isolateScope || B.$$newScope });s.$$slots = P;
          }if (B.template) if (x = !0, X("template", w, B, t), w = B, y = D(B.template) ? B.template(t, d) : B.template, y = ua(y), B.replace) {
            g = B;Q = Ub.test(y) ? Xc(ca(B.templateNamespace, W(y))) : [];b = Q[0];if (1 != Q.length || 1 !== b.nodeType) throw ga("tplrt", L, "");da(f, t, b);N = { $attr: {} };
            y = A(b, [], N);var ea = a.splice(ra + 1, a.length - (ra + 1));(C || G) && Yc(y, C, G);a = a.concat(y).concat(ea);U(d, N);N = a.length;
          } else t.html(y);if (B.templateUrl) x = !0, X("template", w, B, t), w = B, B.replace && (g = B), n = aa(a.splice(ra, a.length - ra), t, d, f, K && s, h, k, { controllerDirectives: v, newScopeDirective: G !== B && G, newIsolateScopeDirective: C, templateDirective: w, nonTlbTranscludeDirective: I }), N = a.length;else if (B.compile) try {
            xa = B.compile(t, d, s), D(xa) ? m(null, xa, R, Fa) : xa && m(xa.pre, xa.post, R, Fa);
          } catch (fa) {
            c(fa, wa(t));
          }B.terminal && (n.terminal = !0, p = Math.max(p, B.priority));
        }n.scope = G && !0 === G.scope;n.transcludeOnThisElement = K;n.templateOnThisElement = x;n.transclude = s;l.hasElementTranscludeDirective = Ca;return n;
      }function jb(a, b, c, d) {
        var e;if (y(b)) {
          var f = b.match(k);b = b.substring(f[0].length);var g = f[1] || f[3],
              f = "?" === f[2];"^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;if (!e) {
            var h = "$" + b + "Controller";e = g ? c.inheritedData(h) : c.data(h);
          }if (!e && !f) throw ga("ctreq", b, a);
        } else if (M(b)) for (e = [], g = 0, f = b.length; g < f; g++) {
          e[g] = jb(a, b[g], c, d);
        } else J(b) && (e = {}, q(b, function (b, f) {
          e[f] = jb(a, b, c, d);
        }));return e || null;
      }function T(a, b, c, d, e, f, g) {
        var h = V(),
            k;for (k in d) {
          var l = d[k],
              m = { $scope: l === g || l.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c },
              n = l.controller;"@" == n && (n = b[l.name]);m = Q(n, m, !0, l.controllerAs);h[l.name] = m;a.data("$" + l.name + "Controller", m.instance);
        }return h;
      }function Yc(a, b, c) {
        for (var d = 0, e = a.length; d < e; d++) {
          a[d] = Qb(a[d], { $$isolateScope: b, $$newScope: c });
        }
      }function Fa(b, f, g, h, k, l, m) {
        if (f === k) return null;k = null;if (e.hasOwnProperty(f)) {
          var n;f = a.get(f + "Directive");for (var p = 0, G = f.length; p < G; p++) {
            try {
              if (n = f[p], (z(h) || h > n.priority) && -1 != n.restrict.indexOf(g)) {
                l && (n = Qb(n, { $$start: l, $$end: m }));if (!n.$$bindings) {
                  var v = n,
                      C = n,
                      w = n.name,
                      B = { isolateScope: null, bindToController: null };J(C.scope) && (!0 === C.bindToController ? (B.bindToController = d(C.scope, w, !0), B.isolateScope = {}) : B.isolateScope = d(C.scope, w, !1));J(C.bindToController) && (B.bindToController = d(C.bindToController, w, !0));if (J(B.bindToController)) {
                    var I = C.controller,
                        K = C.controllerAs;if (!I) throw ga("noctrl", w);if (!Uc(I, K)) throw ga("noident", w);
                  }var x = v.$$bindings = B;J(x.isolateScope) && (n.$$isolateBindings = x.isolateScope);
                }b.push(n);k = n;
              }
            } catch (t) {
              c(t);
            }
          }
        }return k;
      }function R(b) {
        if (e.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++) {
          if (b = c[d], b.multiElement) return !0;
        }return !1;
      }function U(a, b) {
        var c = b.$attr,
            d = a.$attr,
            e = a.$$element;q(a, function (d, e) {
          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
        });q(b, function (b, f) {
          "class" == f ? (B(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
        });
      }function aa(a, b, c, d, e, f, g, h) {
        var k = [],
            l,
            n,
            p = b[0],
            r = a.shift(),
            G = Qb(r, { templateUrl: null, transclude: null, replace: null, $$originalDirective: r }),
            v = D(r.templateUrl) ? r.templateUrl(b, c) : r.templateUrl,
            C = r.templateNamespace;b.empty();m(v).then(function (m) {
          var w, I;m = ua(m);if (r.replace) {
            m = Ub.test(m) ? Xc(ca(C, W(m))) : [];w = m[0];if (1 != m.length || 1 !== w.nodeType) throw ga("tplrt", r.name, v);m = { $attr: {} };da(d, b, w);var K = A(w, [], m);J(r.scope) && Yc(K, !0);a = K.concat(a);U(c, m);
          } else w = p, b.html(m);a.unshift(G);l = ra(a, w, c, e, b, r, f, g, h);q(d, function (a, c) {
            a == w && (d[c] = b[0]);
          });for (n = xa(b[0].childNodes, e); k.length;) {
            m = k.shift();I = k.shift();var x = k.shift(),
                t = k.shift(),
                K = b[0];if (!m.$$destroyed) {
              if (I !== p) {
                var qa = I.className;h.hasElementTranscludeDirective && r.replace || (K = Wb(w));da(x, H(I), K);B(H(K), qa);
              }I = l.transcludeOnThisElement ? s(m, l.transclude, t) : t;l(n, m, K, d, I);
            }
          }k = null;
        });return function (a, b, c, d, e) {
          a = e;b.$$destroyed || (k ? k.push(b, c, d, a) : (l.transcludeOnThisElement && (a = s(b, l.transclude, e)), l(n, b, c, d, a)));
        };
      }function Z(a, b) {
        var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }function X(a, b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : "";
        }if (b) throw ga("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, wa(d));
      }function Y(a, c) {
        var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
            a = a.parent();var b = !!a.length;
            b && ba.$$addBindingClass(a);return function (a, c) {
              var e = c.parent();b || ba.$$addBindingClass(e);ba.$$addBindingInfo(e, d.expressions);a.$watch(d, function (a) {
                c[0].nodeValue = a;
              });
            };
          } });
      }function ca(a, b) {
        a = N(a || "html");switch (a) {case "svg":case "math":
            var c = P.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
            return b;}
      }function ea(a, b) {
        if ("srcdoc" == b) return G.HTML;var c = oa(a);if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return G.RESOURCE_URL;
      }
      function fa(a, c, d, e, f) {
        var g = ea(a, e);f = h[e] || f;var k = b(d, !0, g, f);if (k) {
          if ("multiple" === e && "select" === oa(a)) throw ga("selmulti", wa(a));c.push({ priority: 100, compile: function compile() {
              return { pre: function pre(a, c, h) {
                  c = h.$$observers || (h.$$observers = V());if (l.test(e)) throw ga("nodomevents");var m = h[e];m !== d && (k = m && b(m, !0, g, f), d = m);k && (h[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(k, function (a, b) {
                    "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a);
                  }));
                } };
            } });
        }
      }function da(a, b, c) {
        var d = b[0],
            e = b.length,
            f = d.parentNode,
            g,
            h;if (a) for (g = 0, h = a.length; g < h; g++) {
          if (a[g] == d) {
            a[g++] = c;h = g + e - 1;for (var k = a.length; g < k; g++, h++) {
              h < k ? a[g] = a[h] : delete a[g];
            }a.length -= e - 1;a.context === d && (a.context = c);break;
          }
        }f && f.replaceChild(c, d);a = P.createDocumentFragment();for (g = 0; g < e; g++) {
          a.appendChild(b[g]);
        }H.hasData(d) && (H.data(c, H.data(d)), H(d).off("$destroy"));H.cleanData(a.querySelectorAll("*"));for (g = 1; g < e; g++) {
          delete b[g];
        }b[0] = c;b.length = 1;
      }function ia(a, b) {
        return S(function () {
          return a.apply(null, arguments);
        }, a, b);
      }function ja(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g);
        } catch (h) {
          c(h, wa(d));
        }
      }function ha(a, c, d, e, f) {
        function g(b, c, e) {
          D(d.$onChanges) && c !== e && ($ || (a.$$postDigest(I), $ = []), l || (l = {}, $.push(h)), l[b] && (e = l[b].previousValue), l[b] = { previousValue: e, currentValue: c });
        }function h() {
          d.$onChanges(l);l = u;
        }var k = [],
            l;q(e, function (e, h) {
          var l = e.attrName,
              m = e.optional,
              n,
              r,
              p,
              G;switch (e.mode) {case "@":
              m || va.call(c, l) || (d[h] = c[l] = void 0);c.$observe(l, function (a) {
                y(a) && (g(h, a, d[h]), d[h] = a);
              });c.$$observers[l].$$scope = a;n = c[l];y(n) ? d[h] = b(n)(a) : Oa(n) && (d[h] = n);break;case "=":
              if (!va.call(c, l)) {
                if (m) break;c[l] = void 0;
              }if (m && !c[l]) break;r = v(c[l]);G = r.literal ? na : function (a, b) {
                return a === b || a !== a && b !== b;
              };p = r.assign || function () {
                n = d[h] = r(a);throw ga("nonassign", c[l], l, f.name);
              };n = d[h] = r(a);m = function m(b) {
                G(b, d[h]) || (G(b, n) ? p(a, b = d[h]) : d[h] = b);return n = b;
              };m.$stateful = !0;m = e.collection ? a.$watchCollection(c[l], m) : a.$watch(v(c[l], m), null, r.literal);k.push(m);break;case "<":
              if (!va.call(c, l)) {
                if (m) break;c[l] = void 0;
              }if (m && !c[l]) break;r = v(c[l]);
              d[h] = r(a);m = a.$watch(r, function (a) {
                g(h, a, d[h]);d[h] = a;
              }, r.literal);k.push(m);break;case "&":
              r = c.hasOwnProperty(l) ? v(c[l]) : E;if (r === E && m) break;d[h] = function (b) {
                return r(a, b);
              };}
        });return k.length && function () {
          for (var a = 0, b = k.length; a < b; ++a) {
            k[a]();
          }
        };
      }var ma = /^\w/,
          la = P.createElement("div"),
          pa = p,
          $;qa.prototype = { $normalize: ya, $addClass: function $addClass(a) {
          a && 0 < a.length && C.addClass(this.$$element, a);
        }, $removeClass: function $removeClass(a) {
          a && 0 < a.length && C.removeClass(this.$$element, a);
        }, $updateClass: function $updateClass(a, b) {
          var c = Zc(a, b);c && c.length && C.addClass(this.$$element, c);(c = Zc(b, a)) && c.length && C.removeClass(this.$$element, c);
        }, $set: function $set(a, b, d, e) {
          var f = Rc(this.$$element[0], a),
              g = $c[a],
              h = a;f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = zc(a, "-"));f = oa(this.$$element);if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = K(b, "src" === a);else if ("img" === f && "srcset" === a) {
            for (var f = "", g = W(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) {
              var m = 2 * l,
                  f = f + K(W(g[m]), !0),
                  f = f + (" " + W(g[m + 1]));
            }g = W(g[2 * l]).split(/\s/);f += K(W(g[0]), !0);2 === g.length && (f += " " + W(g[1]));this[a] = b = f;
          }!1 !== d && (null === b || z(b) ? this.$$element.removeAttr(e) : ma.test(e) ? this.$$element.attr(e, b) : Ca(this.$$element[0], e, b));(a = this.$$observers) && q(a[h], function (a) {
            try {
              a(b);
            } catch (d) {
              c(d);
            }
          });
        }, $observe: function $observe(a, b) {
          var c = this,
              d = c.$$observers || (c.$$observers = V()),
              e = d[a] || (d[a] = []);e.push(b);t.$evalAsync(function () {
            e.$$inter || !c.hasOwnProperty(a) || z(c[a]) || b(c[a]);
          });return function () {
            bb(e, b);
          };
        } };var sa = b.startSymbol(),
          ta = b.endSymbol(),
          ua = "{{" == sa && "}}" == ta ? $a : function (a) {
        return a.replace(/\{\{/g, sa).replace(/}}/g, ta);
      },
          za = /^ngAttr[A-Z]/,
          Ba = /^(.+)Start$/;ba.$$addBindingInfo = n ? function (a, b) {
        var c = a.data("$binding") || [];M(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
      } : E;ba.$$addBindingClass = n ? function (a) {
        B(a, "ng-binding");
      } : E;ba.$$addScopeInfo = n ? function (a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : E;ba.$$addScopeClass = n ? function (a, b) {
        B(a, b ? "ng-isolate-scope" : "ng-scope");
      } : E;ba.$$createComment = function (a, b) {
        var c = "";n && (c = " " + (a || "") + ": " + (b || "") + " ");return P.createComment(c);
      };return ba;
    }];
  }function ya(a) {
    return fb(a.replace(Vc, ""));
  }function Zc(a, b) {
    var d = "",
        c = a.split(/\s+/),
        e = b.split(/\s+/),
        f = 0;a: for (; f < c.length; f++) {
      for (var g = c[f], h = 0; h < e.length; h++) {
        if (g == e[h]) continue a;
      }d += (0 < d.length ? " " : "") + g;
    }return d;
  }function Xc(a) {
    a = H(a);var b = a.length;if (1 >= b) return a;for (; b--;) {
      8 === a[b].nodeType && Yf.call(a, b, 1);
    }return a;
  }function Uc(a, b) {
    if (b && y(b)) return b;if (y(a)) {
      var d = ad.exec(a);if (d) return d[3];
    }
  }function df() {
    var a = {},
        b = !1;this.has = function (b) {
      return a.hasOwnProperty(b);
    };this.register = function (b, c) {
      Ta(b, "controller");J(b) ? S(a, b) : a[b] = c;
    };this.allowGlobals = function () {
      b = !0;
    };this.$get = ["$injector", "$window", function (d, c) {
      function e(a, b, c, d) {
        if (!a || !J(a.$scope)) throw O("$controller")("noscp", d, b);a.$scope[b] = c;
      }return function (f, g, h, k) {
        var l, m, n;h = !0 === h;k && y(k) && (n = k);if (y(f)) {
          k = f.match(ad);
          if (!k) throw Zf("ctrlfmt", f);m = k[1];n = n || k[3];f = a.hasOwnProperty(m) ? a[m] : Bc(g.$scope, m, !0) || (b ? Bc(c, m, !0) : u);Sa(f, m, !0);
        }if (h) return h = (M(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n, l, m || f.name), S(function () {
          var a = d.invoke(f, l, g, m);a !== l && (J(a) || D(a)) && (l = a, n && e(g, n, l, m || f.name));return l;
        }, { instance: l, identifier: n });l = d.instantiate(f, g, m);n && e(g, n, l, m || f.name);return l;
      };
    }];
  }function ef() {
    this.$get = ["$window", function (a) {
      return H(a.document);
    }];
  }function ff() {
    this.$get = ["$log", function (a) {
      return function (b, d) {
        a.error.apply(a, arguments);
      };
    }];
  }function $b(a) {
    return J(a) ? fa(a) ? a.toISOString() : db(a) : a;
  }function lf() {
    this.$get = function () {
      return function (a) {
        if (!a) return "";var b = [];pc(a, function (a, c) {
          null === a || z(a) || (M(a) ? q(a, function (a) {
            b.push(ja(c) + "=" + ja($b(a)));
          }) : b.push(ja(c) + "=" + ja($b(a))));
        });return b.join("&");
      };
    };
  }function mf() {
    this.$get = function () {
      return function (a) {
        function b(a, e, f) {
          null === a || z(a) || (M(a) ? q(a, function (a, c) {
            b(a, e + "[" + (J(a) ? c : "") + "]");
          }) : J(a) && !fa(a) ? pc(a, function (a, c) {
            b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
          }) : d.push(ja(e) + "=" + ja($b(a))));
        }if (!a) return "";var d = [];b(a, "", !0);return d.join("&");
      };
    };
  }function ac(a, b) {
    if (y(a)) {
      var d = a.replace($f, "").trim();if (d) {
        var c = b("Content-Type");(c = c && 0 === c.indexOf(bd)) || (c = (c = d.match(ag)) && bg[c[0]].test(d));c && (a = uc(d));
      }
    }return a;
  }function cd(a) {
    var b = V(),
        d;y(a) ? q(a.split("\n"), function (a) {
      d = a.indexOf(":");var e = N(W(a.substr(0, d)));a = W(a.substr(d + 1));e && (b[e] = b[e] ? b[e] + ", " + a : a);
    }) : J(a) && q(a, function (a, d) {
      var f = N(d),
          g = W(a);f && (b[f] = b[f] ? b[f] + ", " + g : g);
    });return b;
  }
  function dd(a) {
    var b;return function (d) {
      b || (b = cd(a));return d ? (d = b[N(d)], void 0 === d && (d = null), d) : b;
    };
  }function ed(a, b, d, c) {
    if (D(c)) return c(a, b, d);q(c, function (c) {
      a = c(a, b, d);
    });return a;
  }function kf() {
    var a = this.defaults = { transformResponse: [ac], transformRequest: [function (a) {
        return J(a) && "[object File]" !== ka.call(a) && "[object Blob]" !== ka.call(a) && "[object FormData]" !== ka.call(a) ? db(a) : a;
      }], headers: { common: { Accept: "application/json, text/plain, */*" }, post: ia(bc), put: ia(bc), patch: ia(bc) }, xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer" },
        b = !1;this.useApplyAsync = function (a) {
      return A(a) ? (b = !!a, this) : b;
    };var d = !0;this.useLegacyPromiseExtensions = function (a) {
      return A(a) ? (d = !!a, this) : d;
    };var c = this.interceptors = [];this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
      function m(b) {
        function c(a) {
          var b = S({}, a);b.data = ed(a.data, a.headers, a.status, f.transformResponse);a = a.status;return 200 <= a && 300 > a ? b : k.reject(b);
        }function e(a, b) {
          var c,
              d = {};q(a, function (a, e) {
            D(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
          });return d;
        }if (!J(b)) throw O("$http")("badreq", b);if (!y(b.url)) throw O("$http")("badreq", b.url);var f = S({ method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse, paramSerializer: a.paramSerializer }, b);f.headers = function (b) {
          var c = a.headers,
              d = S({}, b.headers),
              f,
              g,
              h,
              c = S({}, c.common, c[N(b.method)]);a: for (f in c) {
            g = N(f);for (h in d) {
              if (N(h) === g) continue a;
            }d[f] = c[f];
          }return e(d, ia(b));
        }(b);f.method = vb(f.method);
        f.paramSerializer = y(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;var g = [function (b) {
          var d = b.headers,
              e = ed(b.data, dd(d), u, b.transformRequest);z(e) && q(d, function (a, b) {
            "content-type" === N(b) && delete d[b];
          });z(b.withCredentials) && !z(a.withCredentials) && (b.withCredentials = a.withCredentials);return n(b, e).then(c, c);
        }, u],
            h = k.when(f);for (q(L, function (a) {
          (a.request || a.requestError) && g.unshift(a.request, a.requestError);(a.response || a.responseError) && g.push(a.response, a.responseError);
        }); g.length;) {
          b = g.shift();var m = g.shift(),
              h = h.then(b, m);
        }d ? (h.success = function (a) {
          Sa(a, "fn");h.then(function (b) {
            a(b.data, b.status, b.headers, f);
          });return h;
        }, h.error = function (a) {
          Sa(a, "fn");h.then(null, function (b) {
            a(b.data, b.status, b.headers, f);
          });return h;
        }) : (h.success = fd("success"), h.error = fd("error"));return h;
      }function n(c, d) {
        function g(a, c, d, e) {
          function f() {
            l(c, a, d, e);
          }K && (200 <= a && 300 > a ? K.put(L, [a, c, cd(d), e]) : K.remove(L));b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
        }function l(a, b, d, e) {
          b = -1 <= b ? b : 0;(200 <= b && 300 > b ? G.resolve : G.reject)({ data: a, status: b, headers: dd(d), config: c, statusText: e });
        }function n(a) {
          l(a.data, a.status, ia(a.headers()), a.statusText);
        }function t() {
          var a = m.pendingRequests.indexOf(c);-1 !== a && m.pendingRequests.splice(a, 1);
        }var G = k.defer(),
            C = G.promise,
            K,
            I,
            qa = c.headers,
            L = p(c.url, c.paramSerializer(c.params));m.pendingRequests.push(c);C.then(t, t);!c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (K = J(c.cache) ? c.cache : J(a.cache) ? a.cache : F);K && (I = K.get(L), A(I) ? I && D(I.then) ? I.then(n, n) : M(I) ? l(I[1], I[0], ia(I[2]), I[3]) : l(I, 200, {}, "OK") : K.put(L, C));z(I) && ((I = gd(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : u) && (qa[c.xsrfHeaderName || a.xsrfHeaderName] = I), e(c.method, L, d, g, qa, c.timeout, c.withCredentials, c.responseType));return C;
      }function p(a, b) {
        0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);return a;
      }var F = g("$http");a.paramSerializer = y(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;var L = [];q(c, function (a) {
        L.unshift(y(a) ? l.get(a) : l.invoke(a));
      });m.pendingRequests = [];(function (a) {
        q(arguments, function (a) {
          m[a] = function (b, c) {
            return m(S({}, c || {}, { method: a, url: b }));
          };
        });
      })("get", "delete", "head", "jsonp");(function (a) {
        q(arguments, function (a) {
          m[a] = function (b, c, d) {
            return m(S({}, d || {}, { method: a, url: b, data: c }));
          };
        });
      })("post", "put", "patch");m.defaults = a;return m;
    }];
  }function of() {
    this.$get = function () {
      return function () {
        return new T.XMLHttpRequest();
      };
    };
  }function nf() {
    this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (a, b, d, c) {
      return cg(a, c, a.defer, b.angular.callbacks, d[0]);
    }];
  }function cg(a, b, d, c, e) {
    function f(a, b, d) {
      var f = e.createElement("script"),
          _m = null;f.type = "text/javascript";f.src = a;f.async = !0;_m = function m(a) {
        f.removeEventListener("load", _m, !1);f.removeEventListener("error", _m, !1);e.body.removeChild(f);f = null;var g = -1,
            F = "unknown";a && ("load" !== a.type || c[b].called || (a = { type: "error" }), F = a.type, g = "error" === a.type ? 404 : 200);d && d(g, F);
      };f.addEventListener("load", _m, !1);f.addEventListener("error", _m, !1);e.body.appendChild(f);return _m;
    }return function (e, h, k, l, m, n, p, F) {
      function L() {
        w && w();v && v.abort();
      }
      function x(b, c, e, f, g) {
        A(t) && d.cancel(t);w = v = null;b(c, e, f, g);a.$$completeOutstandingRequest(E);
      }a.$$incOutstandingRequestCount();h = h || a.url();if ("jsonp" == N(e)) {
        var r = "_" + (c.counter++).toString(36);c[r] = function (a) {
          c[r].data = a;c[r].called = !0;
        };var w = f(h.replace("JSON_CALLBACK", "angular.callbacks." + r), r, function (a, b) {
          x(l, a, c[r].data, "", b);c[r] = E;
        });
      } else {
        var v = b(e, h);v.open(e, h, !0);q(m, function (a, b) {
          A(a) && v.setRequestHeader(b, a);
        });v.onload = function () {
          var a = v.statusText || "",
              b = "response" in v ? v.response : v.responseText,
              c = 1223 === v.status ? 204 : v.status;0 === c && (c = b ? 200 : "file" == sa(h).protocol ? 404 : 0);x(l, c, b, v.getAllResponseHeaders(), a);
        };e = function e() {
          x(l, -1, null, null, "");
        };v.onerror = e;v.onabort = e;p && (v.withCredentials = !0);if (F) try {
          v.responseType = F;
        } catch (Q) {
          if ("json" !== F) throw Q;
        }v.send(z(k) ? null : k);
      }if (0 < n) var t = d(L, n);else n && D(n.then) && n.then(L);
    };
  }function hf() {
    var a = "{{",
        b = "}}";this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    };this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    };this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
      function f(a) {
        return "\\\\\\" + a;
      }function g(c) {
        return c.replace(n, a).replace(p, b);
      }function h(a, b, c, d) {
        var e;return e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);
      }function k(f, k, n, r) {
        function p(a) {
          try {
            var b = a;a = n ? e.getTrusted(n, b) : e.valueOf(b);var d;if (r && !A(a)) d = a;else if (null == a) d = "";else {
              switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "string":
                  break;case "number":
                  a = "" + a;break;default:
                  a = db(a);}d = a;
            }return d;
          } catch (g) {
            c(La.interr(f, g));
          }
        }if (!f.length || -1 === f.indexOf(a)) {
          var v;k || (k = g(f), v = da(k), v.exp = f, v.expressions = [], v.$$watchDelegate = h);return v;
        }r = !!r;var q,
            t,
            G = 0,
            C = [],
            K = [];v = f.length;for (var I = [], qa = []; G < v;) {
          if (-1 != (q = f.indexOf(a, G)) && -1 != (t = f.indexOf(b, q + l))) G !== q && I.push(g(f.substring(G, q))), G = f.substring(q + l, t), C.push(G), K.push(d(G, p)), G = t + m, qa.push(I.length), I.push("");else {
            G !== v && I.push(g(f.substring(G)));break;
          }
        }n && 1 < I.length && La.throwNoconcat(f);if (!k || C.length) {
          var Ca = function Ca(a) {
            for (var b = 0, c = C.length; b < c; b++) {
              if (r && z(a[b])) return;I[qa[b]] = a[b];
            }return I.join("");
          };return S(function (a) {
            var b = 0,
                d = C.length,
                e = Array(d);try {
              for (; b < d; b++) {
                e[b] = K[b](a);
              }return Ca(e);
            } catch (g) {
              c(La.interr(f, g));
            }
          }, { exp: f, expressions: C, $$watchDelegate: function $$watchDelegate(a, b) {
              var c;return a.$watchGroup(K, function (d, e) {
                var f = Ca(d);D(b) && b.call(this, f, d !== e ? c : f, a);c = f;
              });
            } });
        }
      }var l = a.length,
          m = b.length,
          n = new RegExp(a.replace(/./g, f), "g"),
          p = new RegExp(b.replace(/./g, f), "g");k.startSymbol = function () {
        return a;
      };k.endSymbol = function () {
        return b;
      };return k;
    }];
  }function jf() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
      function f(f, k, l, m) {
        function n() {
          p ? f.apply(null, F) : f(r);
        }var p = 4 < arguments.length,
            F = p ? Aa.call(arguments, 4) : [],
            q = b.setInterval,
            x = b.clearInterval,
            r = 0,
            w = A(m) && !m,
            v = (w ? c : d).defer(),
            Q = v.promise;l = A(l) ? l : 0;Q.$$intervalId = q(function () {
          w ? e.defer(n) : a.$evalAsync(n);v.notify(r++);0 < l && r >= l && (v.resolve(r), x(Q.$$intervalId), delete g[Q.$$intervalId]);w || a.$apply();
        }, k);g[Q.$$intervalId] = v;return Q;
      }var g = {};f.cancel = function (a) {
        return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
      };return f;
    }];
  }function cc(a) {
    a = a.split("/");for (var b = a.length; b--;) {
      a[b] = rb(a[b]);
    }return a.join("/");
  }function hd(a, b) {
    var d = sa(a);b.$$protocol = d.protocol;b.$$host = d.hostname;b.$$port = Y(d.port) || dg[d.protocol] || null;
  }function id(a, b) {
    var d = "/" !== a.charAt(0);d && (a = "/" + a);var c = sa(a);b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);b.$$search = xc(c.search);b.$$hash = decodeURIComponent(c.hash);b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
  }function la(a, b) {
    if (0 === b.indexOf(a)) return b.substr(a.length);
  }function Ka(a) {
    var b = a.indexOf("#");return -1 == b ? a : a.substr(0, b);
  }function kb(a) {
    return a.replace(/(#.+)|#$/, "$1");
  }function dc(a, b, d) {
    this.$$html5 = !0;d = d || "";hd(a, this);this.$$parse = function (a) {
      var d = la(b, a);if (!y(d)) throw Fb("ipthprfx", a, b);id(d, this);this.$$path || (this.$$path = "/");this.$$compose();
    };this.$$compose = function () {
      var a = Sb(this.$$search),
          d = this.$$hash ? "#" + rb(this.$$hash) : "";this.$$url = cc(this.$$path) + (a ? "?" + a : "") + d;this.$$absUrl = b + this.$$url.substr(1);
    };this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;A(f = la(a, c)) ? (g = f, g = A(f = la(d, f)) ? b + (la("/", f) || f) : a + g) : A(f = la(b, c)) ? g = b + f : b == c + "/" && (g = b);g && this.$$parse(g);return !!g;
    };
  }function ec(a, b, d) {
    hd(a, this);this.$$parse = function (c) {
      var e = la(a, c) || la(b, c),
          f;z(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", z(e) && (a = c, this.replace())) : (f = la(d, e), z(f) && (f = e));id(f, this);c = this.$$path;var e = a,
          g = /^\/[A-Z]:(\/.*)/;0 === f.indexOf(e) && (f = f.replace(e, ""));g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);this.$$path = c;this.$$compose();
    };this.$$compose = function () {
      var b = Sb(this.$$search),
          e = this.$$hash ? "#" + rb(this.$$hash) : "";this.$$url = cc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
    };this.$$parseLinkUrl = function (b, d) {
      return Ka(a) == Ka(b) ? (this.$$parse(b), !0) : !1;
    };
  }function jd(a, b, d) {
    this.$$html5 = !0;ec.apply(this, arguments);this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;a == Ka(c) ? f = c : (g = la(b, c)) ? f = a + d + g : b === c + "/" && (f = b);f && this.$$parse(f);return !!f;
    };this.$$compose = function () {
      var b = Sb(this.$$search),
          e = this.$$hash ? "#" + rb(this.$$hash) : "";this.$$url = cc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + d + this.$$url;
    };
  }function Gb(a) {
    return function () {
      return this[a];
    };
  }function kd(a, b) {
    return function (d) {
      if (z(d)) return this[a];this[a] = b(d);this.$$compose();return this;
    };
  }function pf() {
    var a = "",
        b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (b) {
      return A(b) ? (a = b, this) : a;
    };this.html5Mode = function (a) {
      return Oa(a) ? (b.enabled = a, this) : J(a) ? (Oa(a.enabled) && (b.enabled = a.enabled), Oa(a.requireBase) && (b.requireBase = a.requireBase), Oa(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b;
    };this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
      function h(a, b, d) {
        var e = l.url(),
            f = l.$$state;try {
          c.url(a, b, d), l.$$state = c.state();
        } catch (g) {
          throw l.url(e), l.$$state = f, g;
        }
      }function k(a, b) {
        d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
      }var l, m;m = c.baseHref();var n = c.url(),
          p;if (b.enabled) {
        if (!m && b.requireBase) throw Fb("nobase");p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");m = e.history ? dc : jd;
      } else p = Ka(n), m = ec;var F = p.substr(0, Ka(p).lastIndexOf("/") + 1);l = new m(p, F, "#" + a);l.$$parseLinkUrl(n, n);l.$$state = c.state();var q = /^\s*(javascript|mailto):/i;f.on("click", function (a) {
        if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
          for (var e = H(a.target); "a" !== oa(e[0]);) {
            if (e[0] === f[0] || !(e = e.parent())[0]) return;
          }var h = e.prop("href"),
              k = e.attr("href") || e.attr("xlink:href");J(h) && "[object SVGAnimatedString]" === h.toString() && (h = sa(h.animVal).href);q.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
        }
      });kb(l.absUrl()) != kb(n) && c.url(l.absUrl(), !0);var x = !0;c.onUrlChange(function (a, b) {
        z(la(F, a)) ? g.location.href = a : (d.$evalAsync(function () {
          var c = l.absUrl(),
              e = l.$$state,
              f;a = kb(a);l.$$parse(a);
          l.$$state = b;f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (x = !1, k(c, e)));
        }), d.$$phase || d.$digest());
      });d.$watch(function () {
        var a = kb(c.url()),
            b = kb(l.absUrl()),
            f = c.state(),
            g = l.$$replace,
            m = a !== b || l.$$html5 && e.history && f !== l.$$state;if (x || m) x = !1, d.$evalAsync(function () {
          var b = l.absUrl(),
              c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)));
        });l.$$replace = !1;
      });return l;
    }];
  }function qf() {
    var a = !0,
        b = this;this.debugEnabled = function (b) {
      return A(b) ? (a = b, this) : a;
    };this.$get = ["$window", function (d) {
      function c(a) {
        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
      }function e(a) {
        var b = d.console || {},
            e = b[a] || b.log || E;a = !1;try {
          a = !!e.apply;
        } catch (k) {}return a ? function () {
          var a = [];q(arguments, function (b) {
            a.push(c(b));
          });
          return e.apply(b, a);
        } : function (a, b) {
          e(a, null == b ? "" : b);
        };
      }return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
          var c = e("debug");return function () {
            a && c.apply(b, arguments);
          };
        }() };
    }];
  }function Wa(a, b) {
    if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw ca("isecfld", b);return a;
  }function eg(a) {
    return a + "";
  }function ta(a, b) {
    if (a) {
      if (a.constructor === a) throw ca("isecfn", b);if (a.window === a) throw ca("isecwindow", b);if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ca("isecdom", b);if (a === Object) throw ca("isecobj", b);
    }return a;
  }function ld(a, b) {
    if (a) {
      if (a.constructor === a) throw ca("isecfn", b);if (a === fg || a === gg || a === hg) throw ca("isecff", b);
    }
  }function Hb(a, b) {
    if (a && (a === 0 .constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw ca("isecaf", b);
  }function ig(a, b) {
    return "undefined" !== typeof a ? a : b;
  }function md(a, b) {
    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
  }function aa(a, b) {
    var d, c;switch (a.type) {case s.Program:
        d = !0;q(a.body, function (a) {
          aa(a.expression, b);d = d && a.expression.constant;
        });a.constant = d;break;case s.Literal:
        a.constant = !0;a.toWatch = [];break;case s.UnaryExpression:
        aa(a.argument, b);a.constant = a.argument.constant;a.toWatch = a.argument.toWatch;break;case s.BinaryExpression:
        aa(a.left, b);aa(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:
        aa(a.left, b);aa(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.constant ? [] : [a];break;case s.ConditionalExpression:
        aa(a.test, b);aa(a.alternate, b);aa(a.consequent, b);a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;a.toWatch = a.constant ? [] : [a];break;case s.Identifier:
        a.constant = !1;a.toWatch = [a];break;case s.MemberExpression:
        aa(a.object, b);a.computed && aa(a.property, b);a.constant = a.object.constant && (!a.computed || a.property.constant);a.toWatch = [a];break;case s.CallExpression:
        d = a.filter ? !b(a.callee.name).$stateful : !1;c = [];q(a.arguments, function (a) {
          aa(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
        });a.constant = d;a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];break;case s.AssignmentExpression:
        aa(a.left, b);aa(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = [a];break;case s.ArrayExpression:
        d = !0;c = [];q(a.elements, function (a) {
          aa(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
        });a.constant = d;a.toWatch = c;break;case s.ObjectExpression:
        d = !0;c = [];q(a.properties, function (a) {
          aa(a.value, b);d = d && a.value.constant;a.value.constant || c.push.apply(c, a.value.toWatch);
        });a.constant = d;a.toWatch = c;break;case s.ThisExpression:
        a.constant = !1;a.toWatch = [];break;case s.LocalsExpression:
        a.constant = !1, a.toWatch = [];}
  }function nd(a) {
    if (1 == a.length) {
      a = a[0].expression;var b = a.toWatch;return 1 !== b.length ? b : b[0] !== a ? b : u;
    }
  }function od(a) {
    return a.type === s.Identifier || a.type === s.MemberExpression;
  }function pd(a) {
    if (1 === a.body.length && od(a.body[0].expression)) return { type: s.AssignmentExpression,
      left: a.body[0].expression, right: { type: s.NGValueParameter }, operator: "=" };
  }function qd(a) {
    return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
  }function rd(a, b) {
    this.astBuilder = a;this.$filter = b;
  }function sd(a, b) {
    this.astBuilder = a;this.$filter = b;
  }function Ib(a) {
    return "constructor" == a;
  }function fc(a) {
    return D(a.valueOf) ? a.valueOf() : jg.call(a);
  }function rf() {
    var a = V(),
        b = V(),
        d = { "true": !0,
      "false": !1, "null": null, undefined: u };this.addLiteral = function (a, b) {
      d[a] = b;
    };this.$get = ["$filter", function (c) {
      function e(d, e, g) {
        var p, t, G;g = g || x;switch (typeof d === "undefined" ? "undefined" : _typeof(d)) {case "string":
            G = d = d.trim();var C = g ? b : a;p = C[G];if (!p) {
              ":" === d.charAt(0) && ":" === d.charAt(1) && (t = !0, d = d.substring(2));p = g ? L : F;var K = new gc(p);p = new hc(K, c, p).parse(d);p.constant ? p.$$watchDelegate = m : t ? p.$$watchDelegate = p.literal ? l : k : p.inputs && (p.$$watchDelegate = h);g && (p = f(p));C[G] = p;
            }return n(p, e);case "function":
            return n(d, e);default:
            return n(E, e);}
      }function f(a) {
        function b(c, d, e, f) {
          var g = x;x = !0;try {
            return a(c, d, e, f);
          } finally {
            x = g;
          }
        }if (!a) return a;b.$$watchDelegate = a.$$watchDelegate;b.assign = f(a.assign);b.constant = a.constant;b.literal = a.literal;for (var c = 0; a.inputs && c < a.inputs.length; ++c) {
          a.inputs[c] = f(a.inputs[c]);
        }b.inputs = a.inputs;return b;
      }function g(a, b) {
        return null == a || null == b ? a === b : "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && (a = fc(a), "object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) ? !1 : a === b || a !== a && b !== b;
      }function h(a, b, c, d, e) {
        var f = d.inputs,
            h;if (1 === f.length) {
          var k = g,
              f = f[0];return a.$watch(function (a) {
            var b = f(a);g(b, k) || (h = d(a, u, u, [b]), k = b && fc(b));return h;
          }, b, c, e);
        }for (var l = [], m = [], n = 0, p = f.length; n < p; n++) {
          l[n] = g, m[n] = null;
        }return a.$watch(function (a) {
          for (var b = !1, c = 0, e = f.length; c < e; c++) {
            var k = f[c](a);if (b || (b = !g(k, l[c]))) m[c] = k, l[c] = k && fc(k);
          }b && (h = d(a, u, u, m));return h;
        }, b, c, e);
      }function k(a, b, c, d) {
        var e, f;return e = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          f = a;D(b) && b.apply(this, arguments);A(a) && d.$$postDigest(function () {
            A(f) && e();
          });
        }, c);
      }function l(a, b, c, d) {
        function e(a) {
          var b = !0;q(a, function (a) {
            A(a) || (b = !1);
          });return b;
        }var f, g;return f = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          g = a;D(b) && b.call(this, a, c, d);e(a) && d.$$postDigest(function () {
            e(g) && f();
          });
        }, c);
      }function m(a, b, c, d) {
        var e;return e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);
      }function n(a, b) {
        if (!b) return a;var c = a.$$watchDelegate,
            d = !1,
            c = c !== l && c !== k ? function (c, e, f, g) {
          f = d && g ? g[0] : a(c, e, f, g);return b(f, c, e);
        } : function (c, d, e, f) {
          e = a(c, d, e, f);c = b(e, c, d);return A(e) ? c : e;
        };a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);return c;
      }var p = Ga().noUnsafeEval,
          F = { csp: p, expensiveChecks: !1, literals: pa(d) },
          L = { csp: p, expensiveChecks: !0, literals: pa(d) },
          x = !1;e.$$runningExpensiveChecks = function () {
        return x;
      };return e;
    }];
  }function tf() {
    this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
      return td(function (b) {
        a.$evalAsync(b);
      }, b);
    }];
  }function uf() {
    this.$get = ["$browser", "$exceptionHandler", function (a, b) {
      return td(function (b) {
        a.defer(b);
      }, b);
    }];
  }function td(a, b) {
    function d() {
      this.$$state = { status: 0 };
    }function c(a, b) {
      return function (c) {
        b.call(a, c);
      };
    }function e(c) {
      !c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
        var a, d, e;e = c.pending;c.processScheduled = !1;c.pending = u;for (var f = 0, g = e.length; f < g; ++f) {
          d = e[f][0];a = e[f][c.status];try {
            D(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
          } catch (h) {
            d.reject(h), b(h);
          }
        }
      }));
    }function f() {
      this.promise = new d();
    }var g = O("$q", TypeError);S(d.prototype, { then: function then(a, b, c) {
        if (z(a) && z(b) && z(c)) return this;var d = new f();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && e(this.$$state);return d.promise;
      }, "catch": function _catch(a) {
        return this.then(null, a);
      }, "finally": function _finally(a, b) {
        return this.then(function (b) {
          return k(b, !0, a);
        }, function (b) {
          return k(b, !1, a);
        }, b);
      } });S(f.prototype, { resolve: function resolve(a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle", a)) : this.$$resolve(a));
      }, $$resolve: function $$resolve(a) {
        function d(a) {
          k || (k = !0, h.$$resolve(a));
        }
        function f(a) {
          k || (k = !0, h.$$reject(a));
        }var g,
            h = this,
            k = !1;try {
          if (J(a) || D(a)) g = a && a.then;D(g) ? (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state));
        } catch (l) {
          f(l), b(l);
        }
      }, reject: function reject(a) {
        this.promise.$$state.status || this.$$reject(a);
      }, $$reject: function $$reject(a) {
        this.promise.$$state.value = a;this.promise.$$state.status = 2;e(this.promise.$$state);
      }, notify: function notify(c) {
        var d = this.promise.$$state.pending;0 >= this.promise.$$state.status && d && d.length && a(function () {
          for (var a, e, f = 0, g = d.length; f < g; f++) {
            e = d[f][0];a = d[f][3];try {
              e.notify(D(a) ? a(c) : c);
            } catch (h) {
              b(h);
            }
          }
        });
      } });var h = function h(a, b) {
      var c = new f();b ? c.resolve(a) : c.reject(a);return c.promise;
    },
        k = function k(a, b, c) {
      var d = null;try {
        D(c) && (d = c());
      } catch (e) {
        return h(e, !1);
      }return d && D(d.then) ? d.then(function () {
        return h(a, b);
      }, function (a) {
        return h(a, !1);
      }) : h(a, b);
    },
        l = function l(a, b, c, d) {
      var e = new f();e.resolve(a);return e.promise.then(b, c, d);
    },
        m = function m(a) {
      if (!D(a)) throw g("norslvr", a);var b = new f();a(function (a) {
        b.resolve(a);
      }, function (a) {
        b.reject(a);
      });return b.promise;
    };m.prototype = d.prototype;m.defer = function () {
      var a = new f();a.resolve = c(a, a.resolve);a.reject = c(a, a.reject);a.notify = c(a, a.notify);return a;
    };m.reject = function (a) {
      var b = new f();b.reject(a);return b.promise;
    };m.when = l;m.resolve = l;m.all = function (a) {
      var b = new f(),
          c = 0,
          d = M(a) ? [] : {};q(a, function (a, e) {
        c++;l(a).then(function (a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
        }, function (a) {
          d.hasOwnProperty(e) || b.reject(a);
        });
      });0 === c && b.resolve(d);return b.promise;
    };return m;
  }function Df() {
    this.$get = ["$window", "$timeout", function (a, b) {
      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
          c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
          e = !!d,
          f = e ? function (a) {
        var b = d(a);return function () {
          c(b);
        };
      } : function (a) {
        var c = b(a, 16.66, !1);return function () {
          b.cancel(c);
        };
      };f.supported = e;return f;
    }];
  }function sf() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++qb;this.$$ChildScope = null;
      }b.prototype = a;return b;
    }var b = 10,
        d = O("$rootScope"),
        c = null,
        e = null;this.digestTtl = function (a) {
      arguments.length && (b = a);return b;
    };this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
      function k(a) {
        a.currentScope.$$destroyed = !0;
      }function l(a) {
        9 === Da && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
      }function m() {
        this.$id = ++qb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;
      }function n(a) {
        if (w.$$phase) throw d("inprog", w.$$phase);w.$$phase = a;
      }function p(a, b) {
        do {
          a.$$watchersCount += b;
        } while (a = a.$parent);
      }function F(a, b, c) {
        do {
          a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
        } while (a = a.$parent);
      }function s() {}function x() {
        for (; t.length;) {
          try {
            t.shift()();
          } catch (a) {
            f(a);
          }
        }e = null;
      }function r() {
        null === e && (e = h.defer(function () {
          w.$apply(x);
        }));
      }m.prototype = { constructor: m, $new: function $new(b, c) {
          var d;c = c || this;b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(b || c != this) && d.$on("$destroy", k);return d;
        }, $watch: function $watch(a, b, d, e) {
          var f = g(a);if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);var h = this,
              k = h.$$watchers,
              l = { fn: b, last: s, get: f, exp: e || a, eq: !!d };c = null;D(b) || (l.fn = E);k || (k = h.$$watchers = []);k.unshift(l);p(this, 1);return function () {
            0 <= bb(k, l) && p(h, -1);c = null;
          };
        }, $watchGroup: function $watchGroup(a, b) {
          function c() {
            h = !1;k ? (k = !1, b(e, e, g)) : b(e, d, g);
          }var d = Array(a.length),
              e = Array(a.length),
              f = [],
              g = this,
              h = !1,
              k = !0;if (!a.length) {
            var l = !0;g.$evalAsync(function () {
              l && b(e, e, g);
            });return function () {
              l = !1;
            };
          }if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
            e[0] = a;d[0] = c;b(e, a === c ? e : d, f);
          });q(a, function (a, b) {
            var k = g.$watch(a, function (a, f) {
              e[b] = a;d[b] = f;h || (h = !0, g.$evalAsync(c));
            });f.push(k);
          });return function () {
            for (; f.length;) {
              f.shift()();
            }
          };
        }, $watchCollection: function $watchCollection(a, b) {
          function c(a) {
            e = a;var b, d, g, h;if (!z(e)) {
              if (J(e)) {
                if (za(e)) for (f !== n && (f = n, v = f.length = 0, l++), a = e.length, v !== a && (l++, f.length = v = a), b = 0; b < a; b++) {
                  h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                } else {
                  f !== p && (f = p = {}, v = 0, l++);a = 0;for (b in e) {
                    va.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (v++, f[b] = g, l++));
                  }if (v > a) for (b in l++, f) {
                    va.call(e, b) || (v--, delete f[b]);
                  }
                }
              } else f !== e && (f = e, l++);return l;
            }
          }c.$stateful = !0;var d = this,
              e,
              f,
              h,
              k = 1 < b.length,
              l = 0,
              m = g(a, c),
              n = [],
              p = {},
              r = !0,
              v = 0;return this.$watch(m, function () {
            r ? (r = !1, b(e, e, d)) : b(e, h, d);if (k) if (J(e)) {
              if (za(e)) {
                h = Array(e.length);for (var a = 0; a < e.length; a++) {
                  h[a] = e[a];
                }
              } else for (a in h = {}, e) {
                va.call(e, a) && (h[a] = e[a]);
              }
            } else h = e;
          });
        }, $digest: function $digest() {
          var a,
              g,
              k,
              l,
              m,
              p,
              r,
              q,
              t = b,
              F,
              A = [],
              z,
              y;n("$digest");h.$$checkUrlChange();this === w && null !== e && (h.defer.cancel(e), x());c = null;do {
            q = !1;
            for (F = this; v.length;) {
              try {
                y = v.shift(), y.scope.$eval(y.expression, y.locals);
              } catch (E) {
                f(E);
              }c = null;
            }a: do {
              if (p = F.$$watchers) for (r = p.length; r--;) {
                try {
                  if (a = p[r]) if (m = a.get, (g = m(F)) !== (k = a.last) && !(a.eq ? na(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k))) q = !0, c = a, a.last = a.eq ? pa(g, null) : g, l = a.fn, l(g, k === s ? g : k, F), 5 > t && (z = 4 - t, A[z] || (A[z] = []), A[z].push({ msg: D(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: g, oldVal: k }));else if (a === c) {
                    q = !1;break a;
                  }
                } catch (H) {
                  f(H);
                }
              }if (!(p = F.$$watchersCount && F.$$childHead || F !== this && F.$$nextSibling)) for (; F !== this && !(p = F.$$nextSibling);) {
                F = F.$parent;
              }
            } while (F = p);if ((q || v.length) && !t--) throw w.$$phase = null, d("infdig", b, A);
          } while (q || v.length);for (w.$$phase = null; u.length;) {
            try {
              u.shift()();
            } catch (J) {
              f(J);
            }
          }
        }, $destroy: function $destroy() {
          if (!this.$$destroyed) {
            var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;this === w && h.$$applicationDestroyed();p(this, -this.$$watchersCount);for (var b in this.$$listenerCount) {
              F(this, this.$$listenerCount[b], b);
            }a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = E;this.$on = this.$watch = this.$watchGroup = function () {
              return E;
            };this.$$listeners = {};this.$$nextSibling = null;l(this);
          }
        }, $eval: function $eval(a, b) {
          return g(a)(this, b);
        }, $evalAsync: function $evalAsync(a, b) {
          w.$$phase || v.length || h.defer(function () {
            v.length && w.$digest();
          });v.push({ scope: this, expression: g(a), locals: b });
        }, $$postDigest: function $$postDigest(a) {
          u.push(a);
        }, $apply: function $apply(a) {
          try {
            n("$apply");try {
              return this.$eval(a);
            } finally {
              w.$$phase = null;
            }
          } catch (b) {
            f(b);
          } finally {
            try {
              w.$digest();
            } catch (c) {
              throw f(c), c;
            }
          }
        }, $applyAsync: function $applyAsync(a) {
          function b() {
            c.$eval(a);
          }var c = this;a && t.push(b);a = g(a);r();
        }, $on: function $on(a, b) {
          var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do {
            d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
          } while (d = d.$parent);var e = this;return function () {
            var d = c.indexOf(b);-1 !== d && (c[d] = null, F(e, 1, a));
          };
        }, $emit: function $emit(a, b) {
          var c = [],
              d,
              e = this,
              g = !1,
              h = { name: a, targetScope: e, stopPropagation: function stopPropagation() {
              g = !0;
            }, preventDefault: function preventDefault() {
              h.defaultPrevented = !0;
            }, defaultPrevented: !1 },
              k = cb([h], arguments, 1),
              l,
              m;do {
            d = e.$$listeners[a] || c;h.currentScope = e;l = 0;for (m = d.length; l < m; l++) {
              if (d[l]) try {
                d[l].apply(null, k);
              } catch (n) {
                f(n);
              } else d.splice(l, 1), l--, m--;
            }if (g) return h.currentScope = null, h;e = e.$parent;
          } while (e);
          h.currentScope = null;return h;
        }, $broadcast: function $broadcast(a, b) {
          var c = this,
              d = this,
              e = { name: a, targetScope: this, preventDefault: function preventDefault() {
              e.defaultPrevented = !0;
            }, defaultPrevented: !1 };if (!this.$$listenerCount[a]) return e;for (var g = cb([e], arguments, 1), h, k; c = d;) {
            e.currentScope = c;d = c.$$listeners[a] || [];h = 0;for (k = d.length; h < k; h++) {
              if (d[h]) try {
                d[h].apply(null, g);
              } catch (l) {
                f(l);
              } else d.splice(h, 1), h--, k--;
            }if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) {
              c = c.$parent;
            }
          }e.currentScope = null;return e;
        } };var w = new m(),
          v = w.$$asyncQueue = [],
          u = w.$$postDigestQueue = [],
          t = w.$$applyAsyncQueue = [];return w;
    }];
  }function le() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (b) {
      return A(b) ? (a = b, this) : a;
    };this.imgSrcSanitizationWhitelist = function (a) {
      return A(a) ? (b = a, this) : b;
    };this.$get = function () {
      return function (d, c) {
        var e = c ? b : a,
            f;f = sa(d).href;return "" === f || f.match(e) ? d : "unsafe:" + f;
      };
    };
  }function kg(a) {
    if ("self" === a) return a;
    if (y(a)) {
      if (-1 < a.indexOf("***")) throw ua("iwcard", a);a = ud(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");return new RegExp("^" + a + "$");
    }if (Za(a)) return new RegExp("^" + a.source + "$");throw ua("imatcher");
  }function vd(a) {
    var b = [];A(a) && q(a, function (a) {
      b.push(kg(a));
    });return b;
  }function wf() {
    this.SCE_CONTEXTS = ma;var a = ["self"],
        b = [];this.resourceUrlWhitelist = function (b) {
      arguments.length && (a = vd(b));return a;
    };this.resourceUrlBlacklist = function (a) {
      arguments.length && (b = vd(a));return b;
    };this.$get = ["$injector", function (d) {
      function c(a, b) {
        return "self" === a ? gd(b) : !!a.exec(b.href);
      }function e(a) {
        var b = function b(a) {
          this.$$unwrapTrustedValue = function () {
            return a;
          };
        };a && (b.prototype = new a());b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue();
        };b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString();
        };return b;
      }var f = function f(a) {
        throw ua("unsafe");
      };d.has("$sanitize") && (f = d.get("$sanitize"));var g = e(),
          h = {};h[ma.HTML] = e(g);h[ma.CSS] = e(g);h[ma.URL] = e(g);h[ma.JS] = e(g);h[ma.RESOURCE_URL] = e(h[ma.URL]);return { trustAs: function trustAs(a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;if (!c) throw ua("icontext", a, b);if (null === b || z(b) || "" === b) return b;if ("string" !== typeof b) throw ua("itype", a);return new c(b);
        }, getTrusted: function getTrusted(d, e) {
          if (null === e || z(e) || "" === e) return e;var g = h.hasOwnProperty(d) ? h[d] : null;if (g && e instanceof g) return e.$$unwrapTrustedValue();if (d === ma.RESOURCE_URL) {
            var g = sa(e.toString()),
                n,
                p,
                q = !1;n = 0;for (p = a.length; n < p; n++) {
              if (c(a[n], g)) {
                q = !0;break;
              }
            }if (q) for (n = 0, p = b.length; n < p; n++) {
              if (c(b[n], g)) {
                q = !1;break;
              }
            }if (q) return e;throw ua("insecurl", e.toString());
          }if (d === ma.HTML) return f(e);throw ua("unsafe");
        }, valueOf: function valueOf(a) {
          return a instanceof g ? a.$$unwrapTrustedValue() : a;
        } };
    }];
  }function vf() {
    var a = !0;this.enabled = function (b) {
      arguments.length && (a = !!b);return a;
    };this.$get = ["$parse", "$sceDelegate", function (b, d) {
      if (a && 8 > Da) throw ua("iequirks");var c = ia(ma);c.isEnabled = function () {
        return a;
      };c.trustAs = d.trustAs;c.getTrusted = d.getTrusted;c.valueOf = d.valueOf;a || (c.trustAs = c.getTrusted = function (a, b) {
        return b;
      }, c.valueOf = $a);c.parseAs = function (a, d) {
        var e = b(d);return e.literal && e.constant ? e : b(d, function (b) {
          return c.getTrusted(a, b);
        });
      };var e = c.parseAs,
          f = c.getTrusted,
          g = c.trustAs;q(ma, function (a, b) {
        var d = N(b);c[fb("parse_as_" + d)] = function (b) {
          return e(a, b);
        };c[fb("get_trusted_" + d)] = function (b) {
          return f(a, b);
        };c[fb("trust_as_" + d)] = function (b) {
          return g(a, b);
        };
      });return c;
    }];
  }function xf() {
    this.$get = ["$window", "$document", function (a, b) {
      var d = {},
          c = !(a.chrome && a.chrome.app && a.chrome.app.runtime) && a.history && a.history.pushState,
          e = Y((/android (\d+)/.exec(N((a.navigator || {}).userAgent)) || [])[1]),
          f = /Boxee/i.test((a.navigator || {}).userAgent),
          g = b[0] || {},
          h,
          k = /^(Moz|webkit|ms)(?=[A-Z])/,
          l = g.body && g.body.style,
          m = !1,
          n = !1;if (l) {
        for (var p in l) {
          if (m = k.exec(p)) {
            h = m[0];h = h.substr(0, 1).toUpperCase() + h.substr(1);break;
          }
        }h || (h = "WebkitOpacity" in l && "webkit");m = !!("transition" in l || h + "Transition" in l);n = !!("animation" in l || h + "Animation" in l);!e || m && n || (m = y(l.webkitTransition), n = y(l.webkitAnimation));
      }return { history: !(!c || 4 > e || f), hasEvent: function hasEvent(a) {
          if ("input" === a && 11 >= Da) return !1;if (z(d[a])) {
            var b = g.createElement("div");d[a] = "on" + a in b;
          }return d[a];
        }, csp: Ga(), vendorPrefix: h, transitions: m, animations: n, android: e };
    }];
  }function zf() {
    var a;this.httpOptions = function (b) {
      return b ? (a = b, this) : a;
    };this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
      function f(g, h) {
        f.totalPendingRequests++;y(g) && b.get(g) || (g = e.getTrustedResourceUrl(g));var k = d.defaults && d.defaults.transformResponse;M(k) ? k = k.filter(function (a) {
          return a !== ac;
        }) : k === ac && (k = null);return d.get(g, S({ cache: b, transformResponse: k }, a))["finally"](function () {
          f.totalPendingRequests--;
        }).then(function (a) {
          b.put(g, a.data);return a.data;
        }, function (a) {
          if (!h) throw lg("tpload", g, a.status, a.statusText);return c.reject(a);
        });
      }f.totalPendingRequests = 0;return f;
    }];
  }function Af() {
    this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
      return { findBindings: function findBindings(a, b, d) {
          a = a.getElementsByClassName("ng-binding");var g = [];q(a, function (a) {
            var c = ea.element(a).data("$binding");c && q(c, function (c) {
              d ? new RegExp("(^|\\s)" + ud(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a);
            });
          });return g;
        }, findModels: function findModels(a, b, d) {
          for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
            var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');if (k.length) return k;
          }
        }, getLocation: function getLocation() {
          return d.url();
        }, setLocation: function setLocation(b) {
          b !== d.url() && (d.url(b), a.$digest());
        }, whenStable: function whenStable(a) {
          b.notifyWhenNoOutstandingRequests(a);
        } };
    }];
  }function Bf() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
      function f(f, k, l) {
        D(f) || (l = k, k = f, f = E);var m = Aa.call(arguments, 3),
            n = A(l) && !l,
            p = (n ? c : d).defer(),
            q = p.promise,
            s;s = b.defer(function () {
          try {
            p.resolve(f.apply(null, m));
          } catch (b) {
            p.reject(b), e(b);
          } finally {
            delete g[q.$$timeoutId];
          }n || a.$apply();
        }, k);q.$$timeoutId = s;g[s] = p;return q;
      }var g = {};f.cancel = function (a) {
        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
      };return f;
    }];
  }function sa(a) {
    Da && (Z.setAttribute("href", a), a = Z.href);Z.setAttribute("href", a);return { href: Z.href, protocol: Z.protocol ? Z.protocol.replace(/:$/, "") : "", host: Z.host, search: Z.search ? Z.search.replace(/^\?/, "") : "", hash: Z.hash ? Z.hash.replace(/^#/, "") : "", hostname: Z.hostname, port: Z.port, pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname };
  }function gd(a) {
    a = y(a) ? sa(a) : a;return a.protocol === wd.protocol && a.host === wd.host;
  }function Cf() {
    this.$get = da(T);
  }function xd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }var d = a[0] || {},
        c = {},
        e = "";return function () {
      var a, g, h, k, l;a = d.cookie || "";if (a !== e) for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) {
        g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), z(c[l]) && (c[l] = b(g.substring(k + 1))));
      }return c;
    };
  }function Gf() {
    this.$get = xd;
  }function Jc(a) {
    function b(d, c) {
      if (J(d)) {
        var e = {};q(d, function (a, c) {
          e[c] = b(c, a);
        });return e;
      }return a.factory(d + "Filter", c);
    }this.register = b;this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + "Filter");
      };
    }];b("currency", yd);b("date", zd);b("filter", mg);
    b("json", ng);b("limitTo", og);b("lowercase", pg);b("number", Ad);b("orderBy", Bd);b("uppercase", qg);
  }function mg() {
    return function (a, b, d) {
      if (!za(a)) {
        if (null == a) return a;throw O("filter")("notarray", a);
      }var c;switch (ic(b)) {case "function":
          break;case "boolean":case "null":case "number":case "string":
          c = !0;case "object":
          b = rg(b, d, c);break;default:
          return a;}return Array.prototype.filter.call(a, b);
    };
  }function rg(a, b, d) {
    var c = J(a) && "$" in a;!0 === b ? b = na : D(b) || (b = function b(a, _b) {
      if (z(a)) return !1;if (null === a || null === _b) return a === _b;if (J(_b) || J(a) && !rc(a)) return !1;a = N("" + a);_b = N("" + _b);return -1 !== a.indexOf(_b);
    });return function (e) {
      return c && !J(e) ? Ma(e, a.$, b, !1) : Ma(e, a, b, d);
    };
  }function Ma(a, b, d, c, e) {
    var f = ic(a),
        g = ic(b);if ("string" === g && "!" === b.charAt(0)) return !Ma(a, b.substring(1), d, c);if (M(a)) return a.some(function (a) {
      return Ma(a, b, d, c);
    });switch (f) {case "object":
        var h;if (c) {
          for (h in a) {
            if ("$" !== h.charAt(0) && Ma(a[h], b, d, !0)) return !0;
          }return e ? !1 : Ma(a, b, d, !1);
        }if ("object" === g) {
          for (h in b) {
            if (e = b[h], !D(e) && !z(e) && (f = "$" === h, !Ma(f ? a : a[h], e, d, f, f))) return !1;
          }return !0;
        }return d(a, b);case "function":
        return !1;default:
        return d(a, b);}
  }function ic(a) {
    return null === a ? "null" : typeof a === "undefined" ? "undefined" : _typeof(a);
  }function yd(a) {
    var b = a.NUMBER_FORMATS;return function (a, c, e) {
      z(c) && (c = b.CURRENCY_SYM);z(e) && (e = b.PATTERNS[1].maxFrac);return null == a ? a : Cd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
    };
  }function Ad(a) {
    var b = a.NUMBER_FORMATS;return function (a, c) {
      return null == a ? a : Cd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }function sg(a) {
    var b = 0,
        d,
        c,
        e,
        f,
        g;-1 < (c = a.indexOf(Dd)) && (a = a.replace(Dd, ""));0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);for (e = 0; a.charAt(e) == jc; e++) {}if (e == (g = a.length)) d = [0], c = 1;else {
      for (g--; a.charAt(g) == jc;) {
        g--;
      }c -= e;d = [];for (f = 0; e <= g; e++, f++) {
        d[f] = +a.charAt(e);
      }
    }c > Ed && (d = d.splice(0, Ed - 1), b = c - 1, c = 1);return { d: d, e: b, i: c };
  }function tg(a, b, d, c) {
    var e = a.d,
        f = e.length - a.i;b = z(b) ? Math.min(Math.max(d, f), c) : +b;d = b + a.i;c = e[d];if (0 < d) {
      e.splice(Math.max(a.i, d));for (var g = d; g < e.length; g++) {
        e[g] = 0;
      }
    } else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) {
      e[g] = 0;
    }if (5 <= c) if (0 > d - 1) {
      for (c = 0; c > d; c--) {
        e.unshift(0), a.i++;
      }e.unshift(1);a.i++;
    } else e[d - 1]++;for (; f < Math.max(0, b); f++) {
      e.push(0);
    }if (b = e.reduceRight(function (a, b, c, d) {
      b += a;d[c] = b % 10;return Math.floor(b / 10);
    }, 0)) e.unshift(b), a.i++;
  }function Cd(a, b, d, c, e) {
    if (!y(a) && !R(a) || isNaN(a)) return "";var f = !isFinite(a),
        g = !1,
        h = Math.abs(a) + "",
        k = "";if (f) k = "\u221E";else {
      g = sg(h);tg(g, e, b.minFrac, b.maxFrac);k = g.d;h = g.i;e = g.e;f = [];for (g = k.reduce(function (a, b) {
        return a && !b;
      }, !0); 0 > h;) {
        k.unshift(0), h++;
      }0 < h ? f = k.splice(h) : (f = k, k = [0]);h = [];for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize).join("")); k.length > b.gSize;) {
        h.unshift(k.splice(-b.gSize).join(""));
      }k.length && h.unshift(k.join(""));k = h.join(d);f.length && (k += c + f.join(""));e && (k += "e+" + e);
    }return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
  }function Jb(a, b, d, c) {
    var e = "";if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");for (a = "" + a; a.length < b;) {
      a = jc + a;
    }d && (a = a.substr(a.length - b));return e + a;
  }function X(a, b, d, c, e) {
    d = d || 0;return function (f) {
      f = f["get" + a]();if (0 < d || f > -d) f += d;0 === f && -12 == d && (f = 12);return Jb(f, b, c, e);
    };
  }function lb(a, b, d) {
    return function (c, e) {
      var f = c["get" + a](),
          g = vb((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);return e[g][f];
    };
  }function Fd(a) {
    var b = new Date(a, 0, 1).getDay();return new Date(a, 0, (4 >= b ? 5 : 12) - b);
  }function Gd(a) {
    return function (b) {
      var d = Fd(b.getFullYear());b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;b = 1 + Math.round(b / 6048E5);return Jb(b, a);
    };
  }function kc(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
  }function zd(a) {
    function b(a) {
      var b;if (b = a.match(d)) {
        a = new Date(0);var f = 0,
            g = 0,
            h = b[8] ? a.setUTCFullYear : a.setFullYear,
            k = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = Y(b[9] + b[10]), g = Y(b[9] + b[11]));h.call(a, Y(b[1]), Y(b[2]) - 1, Y(b[3]));f = Y(b[4] || 0) - f;g = Y(b[5] || 0) - g;h = Y(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));k.call(a, f, g, h, b);
      }return a;
    }var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, d, f) {
      var g = "",
          h = [],
          k,
          l;d = d || "mediumDate";d = a.DATETIME_FORMATS[d] || d;y(c) && (c = ug.test(c) ? Y(c) : b(c));R(c) && (c = new Date(c));if (!fa(c) || !isFinite(c.getTime())) return c;for (; d;) {
        (l = vg.exec(d)) ? (h = cb(h, l, 1), d = h.pop()) : (h.push(d), d = null);
      }var m = c.getTimezoneOffset();f && (m = vc(f, m), c = Rb(c, f, !0));q(h, function (b) {
        k = wg[b];g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });return g;
    };
  }function ng() {
    return function (a, b) {
      z(b) && (b = 2);return db(a, b);
    };
  }function og() {
    return function (a, b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : Y(b);if (isNaN(b)) return a;R(a) && (a = a.toString());if (!M(a) && !y(a)) return a;d = !d || isNaN(d) ? 0 : Y(d);d = 0 > d ? Math.max(0, a.length + d) : d;return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b), d);
    };
  }function Bd(a) {
    function b(b, d) {
      d = d ? -1 : 1;return b.map(function (b) {
        var c = 1,
            h = $a;if (D(b)) h = b;else if (y(b)) {
          if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);if ("" !== b && (h = a(b), h.constant)) var k = h(),
              h = function h(a) {
            return a[k];
          };
        }return { get: h,
          descending: c * d };
      });
    }function d(a) {
      switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "number":case "boolean":case "string":
          return !0;default:
          return !1;}
    }return function (a, e, f) {
      if (null == a) return a;if (!za(a)) throw O("orderBy")("notarray", a);M(e) || (e = [e]);0 === e.length && (e = ["+"]);var g = b(e, f);g.push({ get: function get() {
          return {};
        }, descending: f ? -1 : 1 });a = Array.prototype.map.call(a, function (a, b) {
        return { value: a, predicateValues: g.map(function (c) {
            var e = c.get(a);c = typeof e === "undefined" ? "undefined" : _typeof(e);if (null === e) c = "string", e = "null";else if ("string" === c) e = e.toLowerCase();else if ("object" === c) a: {
              if ("function" === typeof e.valueOf && (e = e.valueOf(), d(e))) break a;if (rc(e) && (e = e.toString(), d(e))) break a;e = b;
            }return { value: e, type: c };
          }) };
      });a.sort(function (a, b) {
        for (var c = 0, d = 0, e = g.length; d < e; ++d) {
          var c = a.predicateValues[d],
              f = b.predicateValues[d],
              q = 0;c.type === f.type ? c.value !== f.value && (q = c.value < f.value ? -1 : 1) : q = c.type < f.type ? -1 : 1;if (c = q * g[d].descending) break;
        }return c;
      });return a = a.map(function (a) {
        return a.value;
      });
    };
  }function Na(a) {
    D(a) && (a = { link: a });a.restrict = a.restrict || "AC";return da(a);
  }function Hd(a, b, d, c, e) {
    var f = this,
        g = [];f.$error = {};f.$$success = {};f.$pending = u;f.$name = e(b.name || b.ngForm || "")(d);f.$dirty = !1;f.$pristine = !0;f.$valid = !0;f.$invalid = !1;f.$submitted = !1;f.$$parentForm = Kb;f.$rollbackViewValue = function () {
      q(g, function (a) {
        a.$rollbackViewValue();
      });
    };f.$commitViewValue = function () {
      q(g, function (a) {
        a.$commitViewValue();
      });
    };f.$addControl = function (a) {
      Ta(a.$name, "input");g.push(a);a.$name && (f[a.$name] = a);a.$$parentForm = f;
    };f.$$renameControl = function (a, b) {
      var c = a.$name;f[c] === a && delete f[c];f[b] = a;a.$name = b;
    };f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];q(f.$pending, function (b, c) {
        f.$setValidity(c, null, a);
      });q(f.$error, function (b, c) {
        f.$setValidity(c, null, a);
      });q(f.$$success, function (b, c) {
        f.$setValidity(c, null, a);
      });bb(g, a);a.$$parentForm = Kb;
    };Id({ ctrl: this, $element: a, set: function set(a, b, c) {
        var d = a[b];d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
      }, unset: function unset(a, b, c) {
        var d = a[b];d && (bb(d, c), 0 === d.length && delete a[b]);
      }, $animate: c });f.$setDirty = function () {
      c.removeClass(a, Xa);c.addClass(a, Lb);f.$dirty = !0;f.$pristine = !1;f.$$parentForm.$setDirty();
    };f.$setPristine = function () {
      c.setClass(a, Xa, Lb + " ng-submitted");f.$dirty = !1;f.$pristine = !0;f.$submitted = !1;q(g, function (a) {
        a.$setPristine();
      });
    };f.$setUntouched = function () {
      q(g, function (a) {
        a.$setUntouched();
      });
    };f.$setSubmitted = function () {
      c.addClass(a, "ng-submitted");f.$submitted = !0;f.$$parentForm.$setSubmitted();
    };
  }function lc(a) {
    a.$formatters.push(function (b) {
      return a.$isEmpty(b) ? b : b.toString();
    });
  }function mb(a, b, d, c, e, f) {
    var g = N(b[0].type);if (!e.android) {
      var h = !1;b.on("compositionstart", function () {
        h = !0;
      });b.on("compositionend", function () {
        h = !1;l();
      });
    }var k,
        l = function l(a) {
      k && (f.defer.cancel(k), k = null);if (!h) {
        var e = b.val();a = a && a.type;"password" === g || d.ngTrim && "false" === d.ngTrim || (e = W(e));(c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
      }
    };if (e.hasEvent("input")) b.on("input", l);else {
      var m = function m(a, b, c) {
        k || (k = f.defer(function () {
          k = null;b && b.value === c || l(a);
        }));
      };b.on("keydown", function (a) {
        var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });if (e.hasEvent("paste")) b.on("paste cut", m);
    }b.on("change", l);if (Jd[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
      if (!k) {
        var b = this.validity,
            c = b.badInput,
            d = b.typeMismatch;k = f.defer(function () {
          k = null;b.badInput === c && b.typeMismatch === d || l(a);
        });
      }
    });c.$render = function () {
      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;b.val() !== a && b.val(a);
    };
  }function Mb(a, b) {
    return function (d, c) {
      var e, f;if (fa(d)) return d;if (y(d)) {
        '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));if (xg.test(d)) return new Date(d);a.lastIndex = 0;if (e = a.exec(d)) return e.shift(), f = c ? { yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, q(e, function (a, c) {
          c < b.length && (f[b[c]] = +a);
        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
      }return NaN;
    };
  }function nb(a, b, d, c) {
    return function (e, f, g, h, k, l, m) {
      function n(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }function p(a) {
        return A(a) && !fa(a) ? d(a) || u : a;
      }Kd(e, f, g, h);mb(e, f, g, h, k, l);var q = h && h.$options && h.$options.timezone,
          s;h.$$parserName = a;h.$parsers.push(function (a) {
        return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, s), q && (a = Rb(a, q)), a) : u;
      });h.$formatters.push(function (a) {
        if (a && !fa(a)) throw ob("datefmt", a);if (n(a)) return (s = a) && q && (s = Rb(s, q, !0)), m("date")(a, c, q);s = null;return "";
      });if (A(g.min) || g.ngMin) {
        var x;h.$validators.min = function (a) {
          return !n(a) || z(x) || d(a) >= x;
        };g.$observe("min", function (a) {
          x = p(a);h.$validate();
        });
      }if (A(g.max) || g.ngMax) {
        var r;h.$validators.max = function (a) {
          return !n(a) || z(r) || d(a) <= r;
        };g.$observe("max", function (a) {
          r = p(a);h.$validate();
        });
      }
    };
  }function Kd(a, b, d, c) {
    (c.$$hasNativeValidators = J(b[0].validity)) && c.$parsers.push(function (a) {
      var c = b.prop("validity") || {};return c.badInput || c.typeMismatch ? u : a;
    });
  }function Ld(a, b, d, c, e) {
    if (A(c)) {
      a = a(c);if (!a.constant) throw ob("constexpr", d, c);return a(b);
    }return e;
  }function mc(a, b) {
    a = "ngClass" + a;return ["$animate", function (d) {
      function c(a, b) {
        var c = [],
            d = 0;a: for (; d < a.length; d++) {
          for (var e = a[d], m = 0; m < b.length; m++) {
            if (e == b[m]) continue a;
          }c.push(e);
        }return c;
      }function e(a) {
        var b = [];return M(a) ? (q(a, function (a) {
          b = b.concat(e(a));
        }), b) : y(a) ? a.split(" ") : J(a) ? (q(a, function (a, c) {
          a && (b = b.concat(c.split(" ")));
        }), b) : a;
      }return { restrict: "AC", link: function link(f, g, h) {
          function k(a, b) {
            var c = g.data("$classCounts") || V(),
                d = [];q(a, function (a) {
              if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
            });g.data("$classCounts", c);return d.join(" ");
          }function l(a) {
            if (!0 === b || f.$index % 2 === b) {
              var l = e(a || []);if (!m) {
                var q = k(l, 1);h.$addClass(q);
              } else if (!na(a, m)) {
                var s = e(m),
                    q = c(l, s),
                    l = c(s, l),
                    q = k(q, 1),
                    l = k(l, -1);q && q.length && d.addClass(g, q);l && l.length && d.removeClass(g, l);
              }
            }m = ia(a);
          }var m;f.$watch(h[a], l, !0);h.$observe("class", function (b) {
            l(f.$eval(h[a]));
          });"ngClass" !== a && f.$watch("$index", function (c, d) {
            var g = c & 1;if (g !== (d & 1)) {
              var l = e(f.$eval(h[a]));g === b ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g));
            }
          });
        } };
    }];
  }function Id(a) {
    function b(a, b) {
      b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
    }function d(a, c) {
      a = a ? "-" + zc(a, "-") : "";b(pb + a, !0 === c);b(Md + a, !1 === c);
    }var c = a.ctrl,
        e = a.$element,
        f = {},
        g = a.set,
        h = a.unset,
        k = a.$animate;f[Md] = !(f[pb] = e.hasClass(pb));c.$setValidity = function (a, e, f) {
      z(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Nd(c.$pending) && (c.$pending = u));Oa(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));c.$pending ? (b(Od, !0), c.$valid = c.$invalid = u, d("", null)) : (b(Od, !1), c.$valid = Nd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));e = c.$pending && c.$pending[a] ? u : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;d(a, e);c.$$parentForm.$setValidity(a, e, c);
    };
  }function Nd(a) {
    if (a) for (var b in a) {
      if (a.hasOwnProperty(b)) return !1;
    }return !0;
  }var yg = /^\/(.+)\/([a-z]*)$/,
      va = Object.prototype.hasOwnProperty,
      N = function N(a) {
    return y(a) ? a.toLowerCase() : a;
  },
      vb = function vb(a) {
    return y(a) ? a.toUpperCase() : a;
  },
      Da,
      H,
      $,
      Aa = [].slice,
      Yf = [].splice,
      zg = [].push,
      ka = Object.prototype.toString,
      sc = Object.getPrototypeOf,
      Ba = O("ng"),
      ea = T.angular || (T.angular = {}),
      Tb,
      qb = 0;Da = P.documentMode;E.$inject = [];$a.$inject = [];var M = Array.isArray,
      Zd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
      W = function W(a) {
    return y(a) ? a.trim() : a;
  },
      ud = function ud(a) {
    return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  },
      Ga = function Ga() {
    if (!A(Ga.rules)) {
      var a = P.querySelector("[ng-csp]") || P.querySelector("[data-ng-csp]");if (a) {
        var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
        Ga.rules = { noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"), noInlineStyle: !b || -1 !== b.indexOf("no-inline-style") };
      } else {
        a = Ga;try {
          new Function(""), b = !1;
        } catch (d) {
          b = !0;
        }a.rules = { noUnsafeEval: b, noInlineStyle: !1 };
      }
    }return Ga.rules;
  },
      sb = function sb() {
    if (A(sb.name_)) return sb.name_;var a,
        b,
        d = Qa.length,
        c,
        e;for (b = 0; b < d; ++b) {
      if (c = Qa[b], a = P.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
        e = a.getAttribute(c + "jq");break;
      }
    }return sb.name_ = e;
  },
      be = /:/g,
      Qa = ["ng-", "data-ng-", "ng:", "x-ng-"],
      ge = /[A-Z]/g,
      Ac = !1,
      Pa = 3,
      ke = { full: "1.5.3",
    major: 1, minor: 5, dot: 3, codeName: "diplohaplontic-meiosis" };U.expando = "ng339";var hb = U.cache = {},
      Mf = 1;U._data = function (a) {
    return this.cache[a[this.expando]] || {};
  };var Hf = /([\:\-\_]+(.))/g,
      If = /^moz([A-Z])/,
      zb = { mouseleave: "mouseout", mouseenter: "mouseover" },
      Vb = O("jqLite"),
      Lf = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      Ub = /<|&#?\w+;/,
      Jf = /<([\w:-]+)/,
      Kf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ha = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ha.optgroup = ha.option;ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead;ha.th = ha.td;var Rf = Node.prototype.contains || function (a) {
    return !!(this.compareDocumentPosition(a) & 16);
  },
      Ra = U.prototype = { ready: function ready(a) {
      function b() {
        d || (d = !0, a());
      }var d = !1;"complete" === P.readyState ? setTimeout(b) : (this.on("DOMContentLoaded", b), U(T).on("load", b));
    }, toString: function toString() {
      var a = [];q(this, function (b) {
        a.push("" + b);
      });return "[" + a.join(", ") + "]";
    }, eq: function eq(a) {
      return 0 <= a ? H(this[a]) : H(this[this.length + a]);
    }, length: 0, push: zg, sort: [].sort, splice: [].splice },
      Eb = {};q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
    Eb[N(a)] = a;
  });var Sc = {};q("input select option textarea button form details".split(" "), function (a) {
    Sc[a] = !0;
  });var $c = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern" };q({ data: Xb, removeData: gb,
    hasData: function hasData(a) {
      for (var b in hb[a.ng339]) {
        return !0;
      }return !1;
    }, cleanData: function cleanData(a) {
      for (var b = 0, d = a.length; b < d; b++) {
        gb(a[b]);
      }
    } }, function (a, b) {
    U[b] = a;
  });q({ data: Xb, inheritedData: Db, scope: function scope(a) {
      return H.data(a, "$scope") || Db(a.parentNode || a, ["$isolateScope", "$scope"]);
    }, isolateScope: function isolateScope(a) {
      return H.data(a, "$isolateScope") || H.data(a, "$isolateScopeNoTemplate");
    }, controller: Pc, injector: function injector(a) {
      return Db(a, "$injector");
    }, removeAttr: function removeAttr(a, b) {
      a.removeAttribute(b);
    }, hasClass: Ab, css: function css(a, b, d) {
      b = fb(b);if (A(d)) a.style[b] = d;else return a.style[b];
    }, attr: function attr(a, b, d) {
      var c = a.nodeType;if (c !== Pa && 2 !== c && 8 !== c) if (c = N(b), Eb[c]) {
        if (A(d)) d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c));else return a[b] || (a.attributes.getNamedItem(b) || E).specified ? c : u;
      } else if (A(d)) a.setAttribute(b, d);else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? u : a;
    }, prop: function prop(a, b, d) {
      if (A(d)) a[b] = d;else return a[b];
    }, text: function () {
      function a(a, d) {
        if (z(d)) {
          var c = a.nodeType;return 1 === c || c === Pa ? a.textContent : "";
        }a.textContent = d;
      }a.$dv = "";return a;
    }(), val: function val(a, b) {
      if (z(b)) {
        if (a.multiple && "select" === oa(a)) {
          var d = [];q(a.options, function (a) {
            a.selected && d.push(a.value || a.text);
          });return 0 === d.length ? null : d;
        }return a.value;
      }a.value = b;
    }, html: function html(a, b) {
      if (z(b)) return a.innerHTML;xb(a, !0);a.innerHTML = b;
    }, empty: Qc }, function (a, b) {
    U.prototype[b] = function (b, c) {
      var e,
          f,
          g = this.length;if (a !== Qc && z(2 == a.length && a !== Ab && a !== Pc ? b : c)) {
        if (J(b)) {
          for (e = 0; e < g; e++) {
            if (a === Xb) a(this[e], b);else for (f in b) {
              a(this[e], f, b[f]);
            }
          }return this;
        }e = a.$dv;g = z(e) ? Math.min(g, 1) : g;for (f = 0; f < g; f++) {
          var h = a(this[f], b, c);e = e ? e + h : h;
        }return e;
      }for (e = 0; e < g; e++) {
        a(this[e], b, c);
      }return this;
    };
  });q({ removeData: gb, on: function on(a, b, d, c) {
      if (A(c)) throw Vb("onargs");if (Kc(a)) {
        c = yb(a, !0);var e = c.events,
            f = c.handle;f || (f = c.handle = Of(a, e));c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];for (var g = c.length, h = function h(b, c, g) {
          var h = e[b];h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1));h.push(d);
        }; g--;) {
          b = c[g], zb[b] ? (h(zb[b], Qf), h(b, u, !0)) : h(b);
        }
      }
    }, off: Oc, one: function one(a, b, d) {
      a = H(a);a.on(b, function e() {
        a.off(b, d);a.off(b, e);
      });a.on(b, d);
    }, replaceWith: function replaceWith(a, b) {
      var d,
          c = a.parentNode;xb(a);q(new U(b), function (b) {
        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);d = b;
      });
    }, children: function children(a) {
      var b = [];q(a.childNodes, function (a) {
        1 === a.nodeType && b.push(a);
      });return b;
    }, contents: function contents(a) {
      return a.contentDocument || a.childNodes || [];
    }, append: function append(a, b) {
      var d = a.nodeType;if (1 === d || 11 === d) {
        b = new U(b);for (var d = 0, c = b.length; d < c; d++) {
          a.appendChild(b[d]);
        }
      }
    },
    prepend: function prepend(a, b) {
      if (1 === a.nodeType) {
        var d = a.firstChild;q(new U(b), function (b) {
          a.insertBefore(b, d);
        });
      }
    }, wrap: function wrap(a, b) {
      Mc(a, H(b).eq(0).clone()[0]);
    }, remove: Yb, detach: function detach(a) {
      Yb(a, !0);
    }, after: function after(a, b) {
      var d = a,
          c = a.parentNode;b = new U(b);for (var e = 0, f = b.length; e < f; e++) {
        var g = b[e];c.insertBefore(g, d.nextSibling);d = g;
      }
    }, addClass: Cb, removeClass: Bb, toggleClass: function toggleClass(a, b, d) {
      b && q(b.split(" "), function (b) {
        var e = d;z(e) && (e = !Ab(a, b));(e ? Cb : Bb)(a, b);
      });
    }, parent: function parent(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    }, next: function next(a) {
      return a.nextElementSibling;
    }, find: function find(a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
    }, clone: Wb, triggerHandler: function triggerHandler(a, b, d) {
      var c,
          e,
          f = b.type || b,
          g = yb(a);if (g = (g = g && g.events) && g[f]) c = { preventDefault: function preventDefault() {
          this.defaultPrevented = !0;
        }, isDefaultPrevented: function isDefaultPrevented() {
          return !0 === this.defaultPrevented;
        }, stopImmediatePropagation: function stopImmediatePropagation() {
          this.immediatePropagationStopped = !0;
        }, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
          return !0 === this.immediatePropagationStopped;
        },
        stopPropagation: E, type: f, target: a }, b.type && (c = S(c, b)), b = ia(g), e = d ? [c].concat(d) : [c], q(b, function (b) {
        c.isImmediatePropagationStopped() || b.apply(a, e);
      });
    } }, function (a, b) {
    U.prototype[b] = function (b, c, e) {
      for (var f, g = 0, h = this.length; g < h; g++) {
        z(f) ? (f = a(this[g], b, c, e), A(f) && (f = H(f))) : Nc(f, a(this[g], b, c, e));
      }return A(f) ? f : this;
    };U.prototype.bind = U.prototype.on;U.prototype.unbind = U.prototype.off;
  });Ua.prototype = { put: function put(a, b) {
      this[Ha(a, this.nextUid)] = b;
    }, get: function get(a) {
      return this[Ha(a, this.nextUid)];
    }, remove: function remove(a) {
      var b = this[a = Ha(a, this.nextUid)];delete this[a];return b;
    } };var Ff = [function () {
    this.$get = [function () {
      return Ua;
    }];
  }],
      Tf = /^([^\(]+?)=>/,
      Uf = /^[^\(]*\(\s*([^\)]*)\)/m,
      Ag = /,/,
      Bg = /^\s*(_?)(\S+?)\1\s*$/,
      Sf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      Ia = O("$injector");eb.$$annotate = function (a, b, d) {
    var c;if ("function" === typeof a) {
      if (!(c = a.$inject)) {
        c = [];if (a.length) {
          if (b) throw y(d) && d || (d = a.name || Vf(a)), Ia("strictdi", d);b = Tc(a);q(b[1].split(Ag), function (a) {
            a.replace(Bg, function (a, b, d) {
              c.push(d);
            });
          });
        }a.$inject = c;
      }
    } else M(a) ? (b = a.length - 1, Sa(a[b], "fn"), c = a.slice(0, b)) : Sa(a, "fn", !0);return c;
  };var Pd = O("$animate"),
      Ye = function Ye() {
    this.$get = E;
  },
      Ze = function Ze() {
    var a = new Ua(),
        b = [];this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
      function e(a, b, c) {
        var d = !1;b && (b = y(b) ? b.split(" ") : M(b) ? b : [], q(b, function (b) {
          b && (d = !0, a[b] = c);
        }));return d;
      }function f() {
        q(b, function (b) {
          var c = a.get(b);if (c) {
            var d = Wf(b.attr("class")),
                e = "",
                f = "";q(c, function (a, b) {
              a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
            });q(b, function (a) {
              e && Cb(a, e);f && Bb(a, f);
            });a.remove(b);
          }
        });b.length = 0;
      }return { enabled: E, on: E, off: E, pin: E, push: function push(g, h, k, l) {
          l && l();k = k || {};k.from && g.css(k.from);k.to && g.css(k.to);if (k.addClass || k.removeClass) if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);g = new d();g.complete();return g;
        } };
    }];
  },
      We = ["$provide", function (a) {
    var b = this;this.$$registeredAnimations = Object.create(null);this.register = function (d, c) {
      if (d && "." !== d.charAt(0)) throw Pd("notcsel", d);var e = d + "-animation";b.$$registeredAnimations[d.substr(1)] = e;a.factory(e, c);
    };this.classNameFilter = function (a) {
      if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Pd("nongcls", "ng-animate");return this.$$classNameFilter;
    };this.$get = ["$$animateQueue", function (a) {
      function b(a, c, d) {
        if (d) {
          var h;a: {
            for (h = 0; h < d.length; h++) {
              var k = d[h];if (1 === k.nodeType) {
                h = k;break a;
              }
            }h = void 0;
          }!h || h.parentNode || h.previousElementSibling || (d = null);
        }d ? d.after(a) : c.prepend(a);
      }return { on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function cancel(a) {
          a.end && a.end();
        }, enter: function enter(e, f, g, h) {
          f = f && H(f);g = g && H(g);f = f || g.parent();b(e, f, g);return a.push(e, "enter", Ja(h));
        }, move: function move(e, f, g, h) {
          f = f && H(f);g = g && H(g);f = f || g.parent();b(e, f, g);return a.push(e, "move", Ja(h));
        }, leave: function leave(b, c) {
          return a.push(b, "leave", Ja(c), function () {
            b.remove();
          });
        }, addClass: function addClass(b, c, g) {
          g = Ja(g);g.addClass = ib(g.addclass, c);return a.push(b, "addClass", g);
        }, removeClass: function removeClass(b, c, g) {
          g = Ja(g);g.removeClass = ib(g.removeClass, c);return a.push(b, "removeClass", g);
        }, setClass: function setClass(b, c, g, h) {
          h = Ja(h);h.addClass = ib(h.addClass, c);h.removeClass = ib(h.removeClass, g);return a.push(b, "setClass", h);
        }, animate: function animate(b, c, g, h, k) {
          k = Ja(k);k.from = k.from ? S(k.from, c) : c;k.to = k.to ? S(k.to, g) : g;k.tempClasses = ib(k.tempClasses, h || "ng-inline-animate");return a.push(b, "animate", k);
        } };
    }];
  }],
      af = function af() {
    this.$get = ["$$rAF", function (a) {
      function b(b) {
        d.push(b);1 < d.length || a(function () {
          for (var a = 0; a < d.length; a++) {
            d[a]();
          }d = [];
        });
      }var d = [];return function () {
        var a = !1;b(function () {
          a = !0;
        });return function (d) {
          a ? d() : b(d);
        };
      };
    }];
  },
      $e = function $e() {
    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, d, c, e) {
      function f(a) {
        this.setHost(a);var b = d();this._doneCallbacks = [];this._tick = function (a) {
          var d = c[0];d && d.hidden ? e(a, 0, !1) : b(a);
        };this._state = 0;
      }f.chain = function (a, b) {
        function c() {
          if (d === a.length) b(!0);else a[d](function (a) {
            !1 === a ? b(!1) : (d++, c());
          });
        }var d = 0;c();
      };f.all = function (a, b) {
        function c(f) {
          e = e && f;++d === a.length && b(e);
        }var d = 0,
            e = !0;q(a, function (a) {
          a.done(c);
        });
      };f.prototype = { setHost: function setHost(a) {
          this.host = a || {};
        }, done: function done(a) {
          2 === this._state ? a() : this._doneCallbacks.push(a);
        }, progress: E, getPromise: function getPromise() {
          if (!this.promise) {
            var b = this;this.promise = a(function (a, c) {
              b.done(function (b) {
                !1 === b ? c() : a();
              });
            });
          }return this.promise;
        }, then: function then(a, b) {
          return this.getPromise().then(a, b);
        }, "catch": function _catch(a) {
          return this.getPromise()["catch"](a);
        }, "finally": function _finally(a) {
          return this.getPromise()["finally"](a);
        }, pause: function pause() {
          this.host.pause && this.host.pause();
        }, resume: function resume() {
          this.host.resume && this.host.resume();
        }, end: function end() {
          this.host.end && this.host.end();this._resolve(!0);
        }, cancel: function cancel() {
          this.host.cancel && this.host.cancel();this._resolve(!1);
        }, complete: function complete(a) {
          var b = this;0 === b._state && (b._state = 1, b._tick(function () {
            b._resolve(a);
          }));
        }, _resolve: function _resolve(a) {
          2 !== this._state && (q(this._doneCallbacks, function (b) {
            b(a);
          }), this._doneCallbacks.length = 0, this._state = 2);
        } };return f;
    }];
  },
      Xe = function Xe() {
    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
      return function (b, e) {
        function f() {
          a(function () {
            g.addClass && (b.addClass(g.addClass), g.addClass = null);g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);g.to && (b.css(g.to), g.to = null);h || k.complete();h = !0;
          });return k;
        }var g = e || {};g.$$prepared || (g = pa(g));g.cleanupStyles && (g.from = g.to = null);g.from && (b.css(g.from), g.from = null);var h,
            k = new d();return { start: f, end: f };
      };
    }];
  },
      ga = O("$compile");Cc.$inject = ["$provide", "$$sanitizeUriProvider"];var Vc = /^((?:x|data)[\:\-_])/i,
      Zf = O("$controller"),
      ad = /^(\S+)(\s+as\s+([\w$]+))?$/,
      gf = function gf() {
    this.$get = ["$document", function (a) {
      return function (b) {
        b ? !b.nodeType && b instanceof H && (b = b[0]) : b = a[0].body;return b.offsetWidth + 1;
      };
    }];
  },
      bd = "application/json",
      bc = { "Content-Type": bd + ";charset=utf-8" },
      ag = /^\[|^\{(?!\{)/,
      bg = { "[": /]$/, "{": /}$/ },
      $f = /^\)\]\}',?\n/,
      Cg = O("$http"),
      fd = function fd(a) {
    return function () {
      throw Cg("legacy", a);
    };
  },
      La = ea.$interpolateMinErr = O("$interpolate");La.throwNoconcat = function (a) {
    throw La("noconcat", a);
  };La.interr = function (a, b) {
    return La("interr", a, b.toString());
  };var Dg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      dg = { http: 80, https: 443, ftp: 21 },
      Fb = O("$location"),
      Eg = { $$html5: !1, $$replace: !1, absUrl: Gb("$$absUrl"), url: function url(a) {
      if (z(a)) return this.$$url;var b = Dg.exec(a);(b[1] || "" === a) && this.path(decodeURIComponent(b[1]));(b[2] || b[1] || "" === a) && this.search(b[3] || "");this.hash(b[5] || "");return this;
    }, protocol: Gb("$$protocol"), host: Gb("$$host"), port: Gb("$$port"), path: kd("$$path", function (a) {
      a = null !== a ? a.toString() : "";return "/" == a.charAt(0) ? a : "/" + a;
    }), search: function search(a, b) {
      switch (arguments.length) {case 0:
          return this.$$search;case 1:
          if (y(a) || R(a)) a = a.toString(), this.$$search = xc(a);else if (J(a)) a = pa(a, {}), q(a, function (b, c) {
            null == b && delete a[c];
          }), this.$$search = a;else throw Fb("isrcharg");break;default:
          z(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;}this.$$compose();return this;
    }, hash: kd("$$hash", function (a) {
      return null !== a ? a.toString() : "";
    }), replace: function replace() {
      this.$$replace = !0;return this;
    } };q([jd, ec, dc], function (a) {
    a.prototype = Object.create(Eg);a.prototype.state = function (b) {
      if (!arguments.length) return this.$$state;if (a !== dc || !this.$$html5) throw Fb("nostate");this.$$state = z(b) ? null : b;return this;
    };
  });var ca = O("$parse"),
      fg = Function.prototype.call,
      gg = Function.prototype.apply,
      hg = Function.prototype.bind,
      Nb = V();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
    Nb[a] = !0;
  });var Fg = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
      gc = function gc(a) {
    this.options = a;
  };gc.prototype = { constructor: gc, lex: function lex(a) {
      this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) {
        if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdent(a)) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
          var b = a + this.peek(),
              d = b + this.peek(2),
              c = Nb[b],
              e = Nb[d];Nb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
        }
      }return this.tokens;
    }, is: function is(a, b) {
      return -1 !== b.indexOf(a);
    }, peek: function peek(a) {
      a = a || 1;return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    }, isNumber: function isNumber(a) {
      return "0" <= a && "9" >= a && "string" === typeof a;
    }, isWhitespace: function isWhitespace(a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\xA0" === a;
    }, isIdent: function isIdent(a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
    }, isExpOperator: function isExpOperator(a) {
      return "-" === a || "+" === a || this.isNumber(a);
    }, throwError: function throwError(a, b, d) {
      d = d || this.index;b = A(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;throw ca("lexerr", a, b, this.text);
    }, readNumber: function readNumber() {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var d = N(this.text.charAt(this.index));if ("." == d || this.isNumber(d)) a += d;else {
          var c = this.peek();if ("e" == d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
        }this.index++;
      }this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
    }, readIdent: function readIdent() {
      for (var a = this.index; this.index < this.text.length;) {
        var b = this.text.charAt(this.index);if (!this.isIdent(b) && !this.isNumber(b)) break;this.index++;
      }this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
    }, readString: function readString(a) {
      var b = this.index;this.index++;for (var d = "", c = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index),
            c = c + f;if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Fg[f] || f, e = !1;else if ("\\" === f) e = !0;else {
          if (f === a) {
            this.index++;this.tokens.push({ index: b, text: c, constant: !0, value: d });return;
          }d += f;
        }this.index++;
      }this.throwError("Unterminated quote", b);
    } };var s = function s(a, b) {
    this.lexer = a;this.options = b;
  };s.Program = "Program";s.ExpressionStatement = "ExpressionStatement";s.AssignmentExpression = "AssignmentExpression";s.ConditionalExpression = "ConditionalExpression";s.LogicalExpression = "LogicalExpression";s.BinaryExpression = "BinaryExpression";s.UnaryExpression = "UnaryExpression";s.CallExpression = "CallExpression";s.MemberExpression = "MemberExpression";s.Identifier = "Identifier";s.Literal = "Literal";s.ArrayExpression = "ArrayExpression";s.Property = "Property";s.ObjectExpression = "ObjectExpression";s.ThisExpression = "ThisExpression";s.LocalsExpression = "LocalsExpression";
  s.NGValueParameter = "NGValueParameter";s.prototype = { ast: function ast(a) {
      this.text = a;this.tokens = this.lexer.lex(a);a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);return a;
    }, program: function program() {
      for (var a = [];;) {
        if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return { type: s.Program, body: a };
      }
    }, expressionStatement: function expressionStatement() {
      return { type: s.ExpressionStatement, expression: this.filterChain() };
    }, filterChain: function filterChain() {
      for (var a = this.expression(); this.expect("|");) {
        a = this.filter(a);
      }return a;
    }, expression: function expression() {
      return this.assignment();
    }, assignment: function assignment() {
      var a = this.ternary();this.expect("=") && (a = { type: s.AssignmentExpression, left: a, right: this.assignment(), operator: "=" });return a;
    }, ternary: function ternary() {
      var a = this.logicalOR(),
          b,
          d;return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), { type: s.ConditionalExpression, test: a, alternate: b, consequent: d }) : a;
    }, logicalOR: function logicalOR() {
      for (var a = this.logicalAND(); this.expect("||");) {
        a = { type: s.LogicalExpression, operator: "||", left: a, right: this.logicalAND() };
      }return a;
    }, logicalAND: function logicalAND() {
      for (var a = this.equality(); this.expect("&&");) {
        a = { type: s.LogicalExpression, operator: "&&", left: a, right: this.equality() };
      }return a;
    }, equality: function equality() {
      for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.relational() };
      }return a;
    }, relational: function relational() {
      for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) {
        a = { type: s.BinaryExpression,
          operator: b.text, left: a, right: this.additive() };
      }return a;
    }, additive: function additive() {
      for (var a = this.multiplicative(), b; b = this.expect("+", "-");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.multiplicative() };
      }return a;
    }, multiplicative: function multiplicative() {
      for (var a = this.unary(), b; b = this.expect("*", "/", "%");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.unary() };
      }return a;
    }, unary: function unary() {
      var a;return (a = this.expect("+", "-", "!")) ? { type: s.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary() } : this.primary();
    }, primary: function primary() {
      var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = pa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = { type: s.Literal, value: this.options.literals[this.consume().text] } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var b; b = this.expect("(", "[", ".");) {
        "(" === b.text ? (a = { type: s.CallExpression, callee: a, arguments: this.parseArguments() }, this.consume(")")) : "[" === b.text ? (a = { type: s.MemberExpression, object: a, property: this.expression(), computed: !0 }, this.consume("]")) : "." === b.text ? a = { type: s.MemberExpression, object: a, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE");
      }return a;
    }, filter: function filter(a) {
      a = [a];for (var b = { type: s.CallExpression, callee: this.identifier(), arguments: a, filter: !0 }; this.expect(":");) {
        a.push(this.expression());
      }return b;
    }, parseArguments: function parseArguments() {
      var a = [];if (")" !== this.peekToken().text) {
        do {
          a.push(this.expression());
        } while (this.expect(","));
      }return a;
    }, identifier: function identifier() {
      var a = this.consume();a.identifier || this.throwError("is not a valid identifier", a);return { type: s.Identifier, name: a.text };
    }, constant: function constant() {
      return { type: s.Literal, value: this.consume().value };
    }, arrayDeclaration: function arrayDeclaration() {
      var a = [];if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]")) break;a.push(this.expression());
        } while (this.expect(","));
      }this.consume("]");
      return { type: s.ArrayExpression, elements: a };
    }, object: function object() {
      var a = [],
          b;if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}")) break;b = { type: s.Property, kind: "init" };this.peek().constant ? b.key = this.constant() : this.peek().identifier ? b.key = this.identifier() : this.throwError("invalid key", this.peek());this.consume(":");b.value = this.expression();a.push(b);
        } while (this.expect(","));
      }this.consume("}");return { type: s.ObjectExpression, properties: a };
    }, throwError: function throwError(a, b) {
      throw ca("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    }, consume: function consume(a) {
      if (0 === this.tokens.length) throw ca("ueoe", this.text);var b = this.expect(a);b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return b;
    }, peekToken: function peekToken() {
      if (0 === this.tokens.length) throw ca("ueoe", this.text);return this.tokens[0];
    }, peek: function peek(a, b, d, c) {
      return this.peekAhead(0, a, b, d, c);
    }, peekAhead: function peekAhead(a, b, d, c, e) {
      if (this.tokens.length > a) {
        a = this.tokens[a];var f = a.text;if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
      }return !1;
    },
    expect: function expect(a, b, d, c) {
      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
    }, selfReferential: { "this": { type: s.ThisExpression }, $locals: { type: s.LocalsExpression } } };rd.prototype = { compile: function compile(a, b) {
      var d = this,
          c = this.astBuilder.ast(a);this.state = { nextId: 0, filters: {}, expensiveChecks: b, fn: { vars: [], body: [], own: {} }, assign: { vars: [], body: [], own: {} }, inputs: [] };aa(c, d.$filter);var e = "",
          f;this.stage = "assign";if (f = pd(c)) this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");f = nd(c.body);d.stage = "inputs";q(f, function (a, b) {
        var c = "fn" + b;d.state[c] = { vars: [], body: [], own: {} };d.state.computing = c;var e = d.nextId();d.recurse(a, e);d.return_(e);d.state.inputs.push(c);a.watchId = b;
      });this.state.computing = "fn";this.stage = "main";this.recurse(c);e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";e = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e)(this.$filter, Wa, ta, ld, eg, Hb, ig, md, a);this.state = this.stage = u;e.literal = qd(c);e.constant = c.constant;return e;
    }, USE: "use", STRICT: "strict", watchFns: function watchFns() {
      var a = [],
          b = this.state.inputs,
          d = this;q(b, function (b) {
        a.push("var " + b + "=" + d.generateFunction(b, "s"));
      });b.length && a.push("fn.inputs=[" + b.join(",") + "];");return a.join("");
    }, generateFunction: function generateFunction(a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
    }, filterPrefix: function filterPrefix() {
      var a = [],
          b = this;q(this.state.filters, function (d, c) {
        a.push(d + "=$filter(" + b.escape(c) + ")");
      });return a.length ? "var " + a.join(",") + ";" : "";
    }, varsPrefix: function varsPrefix(a) {
      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
    }, body: function body(a) {
      return this.state[a].body.join("");
    }, recurse: function recurse(a, b, d, c, e, f) {
      var g,
          h,
          k = this,
          l,
          m;c = c || E;if (!f && A(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));else switch (a.type) {case s.Program:
          q(a.body, function (b, c) {
            k.recurse(b.expression, u, u, function (a) {
              h = a;
            });c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
          });break;case s.Literal:
          m = this.escape(a.value);this.assign(b, m);c(m);break;case s.UnaryExpression:
          this.recurse(a.argument, u, u, function (a) {
            h = a;
          });m = a.operator + "(" + this.ifDefined(h, 0) + ")";this.assign(b, m);c(m);break;case s.BinaryExpression:
          this.recurse(a.left, u, u, function (a) {
            g = a;
          });this.recurse(a.right, u, u, function (a) {
            h = a;
          });m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";this.assign(b, m);c(m);break;case s.LogicalExpression:
          b = b || this.nextId();k.recurse(a.left, b);k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));c(b);break;case s.ConditionalExpression:
          b = b || this.nextId();k.recurse(a.test, b);k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));c(b);break;case s.Identifier:
          b = b || this.nextId();d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);Wa(a.name);k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
            k.if_("inputs" === k.stage || "s", function () {
              e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));k.assign(b, k.nonComputedMember("s", a.name));
            });
          }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));(k.state.expensiveChecks || Ib(a.name)) && k.addEnsureSafeObject(b);c(b);
          break;case s.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();b = b || this.nextId();k.recurse(a.object, g, u, function () {
            k.if_(k.notNull(g), function () {
              e && 1 !== e && k.addEnsureSafeAssignContext(g);if (a.computed) h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h);else {
                Wa(a.property.name);e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));m = k.nonComputedMember(g, a.property.name);if (k.state.expensiveChecks || Ib(a.property.name)) m = k.ensureSafeObject(m);k.assign(b, m);d && (d.computed = !1, d.name = a.property.name);
              }
            }, function () {
              k.assign(b, "undefined");
            });c(b);
          }, !!e);break;case s.CallExpression:
          b = b || this.nextId();a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
            var b = k.nextId();k.recurse(a, b);l.push(b);
          }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
            k.if_(k.notNull(h), function () {
              k.addEnsureSafeFunction(h);q(a.arguments, function (a) {
                k.recurse(a, k.nextId(), u, function (a) {
                  l.push(k.ensureSafeObject(a));
                });
              });g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";m = k.ensureSafeObject(m);k.assign(b, m);
            }, function () {
              k.assign(b, "undefined");
            });c(b);
          }));break;case s.AssignmentExpression:
          h = this.nextId();g = {};if (!od(a.left)) throw ca("lval");this.recurse(a.left, u, g, function () {
            k.if_(k.notNull(g.context), function () {
              k.recurse(a.right, h);k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));k.addEnsureSafeAssignContext(g.context);m = k.member(g.context, g.name, g.computed) + a.operator + h;k.assign(b, m);c(b || m);
            });
          }, 1);break;case s.ArrayExpression:
          l = [];q(a.elements, function (a) {
            k.recurse(a, k.nextId(), u, function (a) {
              l.push(a);
            });
          });m = "[" + l.join(",") + "]";this.assign(b, m);c(m);break;case s.ObjectExpression:
          l = [];q(a.properties, function (a) {
            k.recurse(a.value, k.nextId(), u, function (b) {
              l.push(k.escape(a.key.type === s.Identifier ? a.key.name : "" + a.key.value) + ":" + b);
            });
          });m = "{" + l.join(",") + "}";this.assign(b, m);c(m);break;case s.ThisExpression:
          this.assign(b, "s");c("s");break;case s.LocalsExpression:
          this.assign(b, "l");c("l");break;case s.NGValueParameter:
          this.assign(b, "v"), c("v");}
    }, getHasOwnProperty: function getHasOwnProperty(a, b) {
      var d = a + "." + b,
          c = this.current().own;c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));return c[d];
    }, assign: function assign(a, b) {
      if (a) return this.current().body.push(a, "=", b, ";"), a;
    }, filter: function filter(a) {
      this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));return this.state.filters[a];
    }, ifDefined: function ifDefined(a, b) {
      return "ifDefined(" + a + "," + this.escape(b) + ")";
    }, plus: function plus(a, b) {
      return "plus(" + a + "," + b + ")";
    }, return_: function return_(a) {
      this.current().body.push("return ", a, ";");
    }, if_: function if_(a, b, d) {
      if (!0 === a) b();else {
        var c = this.current().body;c.push("if(", a, "){");b();c.push("}");
        d && (c.push("else{"), d(), c.push("}"));
      }
    }, not: function not(a) {
      return "!(" + a + ")";
    }, notNull: function notNull(a) {
      return a + "!=null";
    }, nonComputedMember: function nonComputedMember(a, b) {
      return a + "." + b;
    }, computedMember: function computedMember(a, b) {
      return a + "[" + b + "]";
    }, member: function member(a, b, d) {
      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
    }, addEnsureSafeObject: function addEnsureSafeObject(a) {
      this.current().body.push(this.ensureSafeObject(a), ";");
    }, addEnsureSafeMemberName: function addEnsureSafeMemberName(a) {
      this.current().body.push(this.ensureSafeMemberName(a), ";");
    }, addEnsureSafeFunction: function addEnsureSafeFunction(a) {
      this.current().body.push(this.ensureSafeFunction(a), ";");
    }, addEnsureSafeAssignContext: function addEnsureSafeAssignContext(a) {
      this.current().body.push(this.ensureSafeAssignContext(a), ";");
    }, ensureSafeObject: function ensureSafeObject(a) {
      return "ensureSafeObject(" + a + ",text)";
    }, ensureSafeMemberName: function ensureSafeMemberName(a) {
      return "ensureSafeMemberName(" + a + ",text)";
    }, ensureSafeFunction: function ensureSafeFunction(a) {
      return "ensureSafeFunction(" + a + ",text)";
    }, getStringValue: function getStringValue(a) {
      this.assign(a, "getStringValue(" + a + ")");
    }, ensureSafeAssignContext: function ensureSafeAssignContext(a) {
      return "ensureSafeAssignContext(" + a + ",text)";
    }, lazyRecurse: function lazyRecurse(a, b, d, c, e, f) {
      var g = this;return function () {
        g.recurse(a, b, d, c, e, f);
      };
    }, lazyAssign: function lazyAssign(a, b) {
      var d = this;return function () {
        d.assign(a, b);
      };
    }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function stringEscapeFn(a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }, escape: function escape(a) {
      if (y(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";if (R(a)) return a.toString();if (!0 === a) return "true";if (!1 === a) return "false";if (null === a) return "null";if ("undefined" === typeof a) return "undefined";throw ca("esc");
    }, nextId: function nextId(a, b) {
      var d = "v" + this.state.nextId++;a || this.current().vars.push(d + (b ? "=" + b : ""));return d;
    }, current: function current() {
      return this.state[this.state.computing];
    } };sd.prototype = { compile: function compile(a, b) {
      var d = this,
          c = this.astBuilder.ast(a);this.expression = a;this.expensiveChecks = b;aa(c, d.$filter);var e, f;if (e = pd(c)) f = this.recurse(e);e = nd(c.body);var g;e && (g = [], q(e, function (a, b) {
        var c = d.recurse(a);a.input = c;g.push(c);a.watchId = b;
      }));var h = [];q(c.body, function (a) {
        h.push(d.recurse(a.expression));
      });e = 0 === c.body.length ? E : 1 === c.body.length ? h[0] : function (a, b) {
        var c;q(h, function (d) {
          c = d(a, b);
        });return c;
      };f && (e.assign = function (a, b, c) {
        return f(a, c, b);
      });g && (e.inputs = g);e.literal = qd(c);e.constant = c.constant;return e;
    }, recurse: function recurse(a, b, d) {
      var c,
          e,
          f = this,
          g;if (a.input) return this.inputs(a.input, a.watchId);switch (a.type) {case s.Literal:
          return this.value(a.value, b);case s.UnaryExpression:
          return e = this.recurse(a.argument), this["unary" + a.operator](e, b);case s.BinaryExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.LogicalExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.ConditionalExpression:
          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);case s.Identifier:
          return Wa(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Ib(a.name), b, d, f.expression);case s.MemberExpression:
          return c = this.recurse(a.object, !1, !!d), a.computed || (Wa(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);case s.CallExpression:
          return g = [], q(a.arguments, function (a) {
            g.push(f.recurse(a));
          }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
            for (var n = [], p = 0; p < g.length; ++p) {
              n.push(g[p](a, c, d, f));
            }a = e.apply(u, n, f);return b ? { context: u, name: u, value: a } : a;
          } : function (a, c, d, m) {
            var n = e(a, c, d, m),
                p;if (null != n.value) {
              ta(n.context, f.expression);ld(n.value, f.expression);p = [];for (var q = 0; q < g.length; ++q) {
                p.push(ta(g[q](a, c, d, m), f.expression));
              }p = ta(n.value.apply(n.context, p), f.expression);
            }return b ? { value: p } : p;
          };case s.AssignmentExpression:
          return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
            var n = c(a, d, g, m);a = e(a, d, g, m);ta(n.value, f.expression);Hb(n.context);n.context[n.name] = a;return b ? { value: a } : a;
          };case s.ArrayExpression:
          return g = [], q(a.elements, function (a) {
            g.push(f.recurse(a));
          }), function (a, c, d, e) {
            for (var f = [], p = 0; p < g.length; ++p) {
              f.push(g[p](a, c, d, e));
            }return b ? { value: f } : f;
          };case s.ObjectExpression:
          return g = [], q(a.properties, function (a) {
            g.push({ key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, value: f.recurse(a.value) });
          }), function (a, c, d, e) {
            for (var f = {}, p = 0; p < g.length; ++p) {
              f[g[p].key] = g[p].value(a, c, d, e);
            }return b ? { value: f } : f;
          };case s.ThisExpression:
          return function (a) {
            return b ? { value: a } : a;
          };case s.LocalsExpression:
          return function (a, c) {
            return b ? { value: c } : c;
          };case s.NGValueParameter:
          return function (a, c, d) {
            return b ? { value: d } : d;
          };}
    }, "unary+": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);d = A(d) ? +d : 0;return b ? { value: d } : d;
      };
    }, "unary-": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);d = A(d) ? -d : 0;return b ? { value: d } : d;
      };
    }, "unary!": function unary(a, b) {
      return function (d, c, e, f) {
        d = !a(d, c, e, f);return b ? { value: d } : d;
      };
    }, "binary+": function binary(a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);c = b(c, e, f, g);h = md(h, c);return d ? { value: h } : h;
      };
    }, "binary-": function binary(a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);c = b(c, e, f, g);
        h = (A(h) ? h : 0) - (A(c) ? c : 0);return d ? { value: h } : h;
      };
    }, "binary*": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) * b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary/": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) / b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary%": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) % b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary===": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) === b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary!==": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) !== b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary==": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) == b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary!=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) != b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary<": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) < b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary>": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) > b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary<=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) <= b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary>=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) >= b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary&&": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) && b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary||": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) || b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "ternary?:": function ternary(a, b, d, c) {
      return function (e, f, g, h) {
        e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);return c ? { value: e } : e;
      };
    }, value: function value(a, b) {
      return function () {
        return b ? { context: u,
          name: u, value: a } : a;
      };
    }, identifier: function identifier(a, b, d, c, e) {
      return function (f, g, h, k) {
        f = g && a in g ? g : f;c && 1 !== c && f && !f[a] && (f[a] = {});g = f ? f[a] : u;b && ta(g, e);return d ? { context: f, name: a, value: g } : g;
      };
    }, computedMember: function computedMember(a, b, d, c, e) {
      return function (f, g, h, k) {
        var l = a(f, g, h, k),
            m,
            n;null != l && (m = b(f, g, h, k), m += "", Wa(m, e), c && 1 !== c && (Hb(l), l && !l[m] && (l[m] = {})), n = l[m], ta(n, e));return d ? { context: l, name: m, value: n } : n;
      };
    }, nonComputedMember: function nonComputedMember(a, b, d, c, e, f) {
      return function (g, h, k, l) {
        g = a(g, h, k, l);e && 1 !== e && (Hb(g), g && !g[b] && (g[b] = {}));h = null != g ? g[b] : u;(d || Ib(b)) && ta(h, f);return c ? { context: g, name: b, value: h } : h;
      };
    }, inputs: function inputs(a, b) {
      return function (d, c, e, f) {
        return f ? f[b] : a(d, c, e);
      };
    } };var hc = function hc(a, b, d) {
    this.lexer = a;this.$filter = b;this.options = d;this.ast = new s(a, d);this.astCompiler = d.csp ? new sd(this.ast, b) : new rd(this.ast, b);
  };hc.prototype = { constructor: hc, parse: function parse(a) {
      return this.astCompiler.compile(a, this.options.expensiveChecks);
    } };var jg = Object.prototype.valueOf,
      ua = O("$sce"),
      ma = { HTML: "html", CSS: "css", URL: "url",
    RESOURCE_URL: "resourceUrl", JS: "js" },
      lg = O("$compile"),
      Z = P.createElement("a"),
      wd = sa(T.location.href);xd.$inject = ["$document"];Jc.$inject = ["$provide"];var Ed = 22,
      Dd = ".",
      jc = "0";yd.$inject = ["$locale"];Ad.$inject = ["$locale"];var wg = { yyyy: X("FullYear", 4, 0, !1, !0), yy: X("FullYear", 2, 0, !0, !0), y: X("FullYear", 1, 0, !1, !0), MMMM: lb("Month"), MMM: lb("Month", !0), MM: X("Month", 2, 1), M: X("Month", 1, 1), LLLL: lb("Month", !1, !0), dd: X("Date", 2), d: X("Date", 1), HH: X("Hours", 2), H: X("Hours", 1), hh: X("Hours", 2, -12), h: X("Hours", 1, -12),
    mm: X("Minutes", 2), m: X("Minutes", 1), ss: X("Seconds", 2), s: X("Seconds", 1), sss: X("Milliseconds", 3), EEEE: lb("Day"), EEE: lb("Day", !0), a: function a(_a, b) {
      return 12 > _a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
    }, Z: function Z(a, b, d) {
      a = -1 * d;return a = (0 <= a ? "+" : "") + (Jb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Jb(Math.abs(a % 60), 2));
    }, ww: Gd(2), w: Gd(1), G: kc, GG: kc, GGG: kc, GGGG: function GGGG(a, b) {
      return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
    } },
      vg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
      ug = /^\-?\d+$/;zd.$inject = ["$locale"];var pg = da(N),
      qg = da(vb);Bd.$inject = ["$parse"];var me = da({ restrict: "E", compile: function compile(a, b) {
      if (!b.href && !b.xlinkHref) return function (a, b) {
        if ("a" === b[0].nodeName.toLowerCase()) {
          var e = "[object SVGAnimatedString]" === ka.call(b.prop("href")) ? "xlink:href" : "href";b.on("click", function (a) {
            b.attr(e) || a.preventDefault();
          });
        }
      };
    } }),
      wb = {};q(Eb, function (a, b) {
    function d(a, d, e) {
      a.$watch(e[c], function (a) {
        e.$set(b, !!a);
      });
    }if ("multiple" != a) {
      var c = ya("ng-" + b),
          e = d;"checked" === a && (e = function e(a, b, _e) {
        _e.ngModel !== _e[c] && d(a, b, _e);
      });wb[c] = function () {
        return { restrict: "A", priority: 100, link: e };
      };
    }
  });q($c, function (a, b) {
    wb[b] = function () {
      return { priority: 100, link: function link(a, c, e) {
          if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(yg))) {
            e.$set("ngPattern", new RegExp(c[1], c[2]));return;
          }a.$watch(e[b], function (a) {
            e.$set(b, a);
          });
        } };
    };
  });q(["src", "srcset", "href"], function (a) {
    var b = ya("ng-" + a);wb[b] = function () {
      return { priority: 99, link: function link(d, c, e) {
          var f = a,
              g = a;"href" === a && "[object SVGAnimatedString]" === ka.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);e.$observe(b, function (b) {
            b ? (e.$set(g, b), Da && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null);
          });
        } };
    };
  });var Kb = { $addControl: E, $$renameControl: function $$renameControl(a, b) {
      a.$name = b;
    }, $removeControl: E, $setValidity: E, $setDirty: E, $setPristine: E, $setSubmitted: E };Hd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];var Qd = function Qd(a) {
    return ["$timeout", "$parse", function (b, d) {
      function c(a) {
        return "" === a ? d('this[""]').assign : d(a).assign || E;
      }return { name: "form",
        restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Hd, compile: function compile(d, f) {
          d.addClass(Xa).addClass(pb);var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, e, f) {
              var n = f[0];if (!("action" in e)) {
                var p = function p(b) {
                  a.$apply(function () {
                    n.$commitViewValue();n.$setSubmitted();
                  });b.preventDefault();
                };d[0].addEventListener("submit", p, !1);d.on("$destroy", function () {
                  b(function () {
                    d[0].removeEventListener("submit", p, !1);
                  }, 0, !1);
                });
              }(f[1] || n.$$parentForm).$addControl(n);var q = g ? c(n.$name) : E;g && (q(a, n), e.$observe(g, function (b) {
                n.$name !== b && (q(a, u), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n));
              }));d.on("$destroy", function () {
                n.$$parentForm.$removeControl(n);q(a, u);S(n, Kb);
              });
            } };
        } };
    }];
  },
      ne = Qd(),
      Ae = Qd(!0),
      xg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
      Gg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      Hg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
      Ig = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      Rd = /^(\d{4,})-(\d{2})-(\d{2})$/,
      Sd = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      nc = /^(\d{4,})-W(\d\d)$/,
      Td = /^(\d{4,})-(\d\d)$/,
      Ud = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Jd = V();q(["date", "datetime-local", "month", "time", "week"], function (a) {
    Jd[a] = !0;
  });var Vd = { text: function text(a, b, d, c, e, f) {
      mb(a, b, d, c, e, f);lc(c);
    }, date: nb("date", Rd, Mb(Rd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": nb("datetimelocal", Sd, Mb(Sd, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: nb("time", Ud, Mb(Ud, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: nb("week", nc, function (a, b) {
      if (fa(a)) return a;if (y(a)) {
        nc.lastIndex = 0;var d = nc.exec(a);if (d) {
          var c = +d[1],
              e = +d[2],
              f = d = 0,
              g = 0,
              h = 0,
              k = Fd(c),
              e = 7 * (e - 1);b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());return new Date(c, 0, k.getDate() + e, d, f, g, h);
        }
      }return NaN;
    }, "yyyy-Www"), month: nb("month", Td, Mb(Td, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, b, d, c, e, f) {
      Kd(a, b, d, c);mb(a, b, d, c, e, f);c.$$parserName = "number";c.$parsers.push(function (a) {
        return c.$isEmpty(a) ? null : Ig.test(a) ? parseFloat(a) : u;
      });c.$formatters.push(function (a) {
        if (!c.$isEmpty(a)) {
          if (!R(a)) throw ob("numfmt", a);a = a.toString();
        }return a;
      });if (A(d.min) || d.ngMin) {
        var g;c.$validators.min = function (a) {
          return c.$isEmpty(a) || z(g) || a >= g;
        };d.$observe("min", function (a) {
          A(a) && !R(a) && (a = parseFloat(a, 10));g = R(a) && !isNaN(a) ? a : u;c.$validate();
        });
      }if (A(d.max) || d.ngMax) {
        var h;c.$validators.max = function (a) {
          return c.$isEmpty(a) || z(h) || a <= h;
        };d.$observe("max", function (a) {
          A(a) && !R(a) && (a = parseFloat(a, 10));h = R(a) && !isNaN(a) ? a : u;c.$validate();
        });
      }
    }, url: function url(a, b, d, c, e, f) {
      mb(a, b, d, c, e, f);lc(c);c.$$parserName = "url";c.$validators.url = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || Gg.test(d);
      };
    }, email: function email(a, b, d, c, e, f) {
      mb(a, b, d, c, e, f);lc(c);c.$$parserName = "email";c.$validators.email = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || Hg.test(d);
      };
    }, radio: function radio(a, b, d, c) {
      z(d.name) && b.attr("name", ++qb);b.on("click", function (a) {
        b[0].checked && c.$setViewValue(d.value, a && a.type);
      });c.$render = function () {
        b[0].checked = d.value == c.$viewValue;
      };d.$observe("value", c.$render);
    }, checkbox: function checkbox(a, b, d, c, e, f, g, h) {
      var k = Ld(h, a, "ngTrueValue", d.ngTrueValue, !0),
          l = Ld(h, a, "ngFalseValue", d.ngFalseValue, !1);b.on("click", function (a) {
        c.$setViewValue(b[0].checked, a && a.type);
      });c.$render = function () {
        b[0].checked = c.$viewValue;
      };c.$isEmpty = function (a) {
        return !1 === a;
      };c.$formatters.push(function (a) {
        return na(a, k);
      });c.$parsers.push(function (a) {
        return a ? k : l;
      });
    }, hidden: E, button: E, submit: E, reset: E, file: E },
      Dc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
    return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(e, f, g, h) {
          h[0] && (Vd[N(g.type)] || Vd.text)(e, f, g, h[0], b, a, d, c);
        } } };
  }],
      Jg = /^(true|false|\d+)$/,
      Se = function Se() {
    return { restrict: "A", priority: 100, compile: function compile(a, b) {
        return Jg.test(b.ngValue) ? function (a, b, e) {
          e.$set("value", a.$eval(e.ngValue));
        } : function (a, b, e) {
          a.$watch(e.ngValue, function (a) {
            e.$set("value", a);
          });
        };
      } };
  },
      se = ["$compile", function (a) {
    return { restrict: "AC", compile: function compile(b) {
        a.$$addBindingClass(b);
        return function (b, c, e) {
          a.$$addBindingInfo(c, e.ngBind);c = c[0];b.$watch(e.ngBind, function (a) {
            c.textContent = z(a) ? "" : a;
          });
        };
      } };
  }],
      ue = ["$interpolate", "$compile", function (a, b) {
    return { compile: function compile(d) {
        b.$$addBindingClass(d);return function (c, d, f) {
          c = a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d, c.expressions);d = d[0];f.$observe("ngBindTemplate", function (a) {
            d.textContent = z(a) ? "" : a;
          });
        };
      } };
  }],
      te = ["$sce", "$parse", "$compile", function (a, b, d) {
    return { restrict: "A", compile: function compile(c, e) {
        var f = b(e.ngBindHtml),
            g = b(e.ngBindHtml, function (a) {
          return (a || "").toString();
        });d.$$addBindingClass(c);return function (b, c, e) {
          d.$$addBindingInfo(c, e.ngBindHtml);b.$watch(g, function () {
            c.html(a.getTrustedHtml(f(b)) || "");
          });
        };
      } };
  }],
      Re = da({ restrict: "A", require: "ngModel", link: function link(a, b, d, c) {
      c.$viewChangeListeners.push(function () {
        a.$eval(d.ngChange);
      });
    } }),
      ve = mc("", !0),
      xe = mc("Odd", 0),
      we = mc("Even", 1),
      ye = Na({ compile: function compile(a, b) {
      b.$set("ngCloak", u);a.removeClass("ng-cloak");
    } }),
      ze = [function () {
    return { restrict: "A", scope: !0, controller: "@",
      priority: 500 };
  }],
      Ic = {},
      Kg = { blur: !0, focus: !0 };q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var b = ya("ng-" + a);Ic[b] = ["$parse", "$rootScope", function (d, c) {
      return { restrict: "A", compile: function compile(e, f) {
          var g = d(f[b], null, !0);return function (b, d) {
            d.on(a, function (d) {
              var e = function e() {
                g(b, { $event: d });
              };Kg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
            });
          };
        } };
    }];
  });var Ce = ["$animate", "$compile", function (a, b) {
    return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(d, c, e, f, g) {
        var h, k, l;d.$watch(e.ngIf, function (d) {
          d ? k || g(function (d, f) {
            k = f;d[d.length++] = b.$$createComment("end ngIf", e.ngIf);h = { clone: d };a.enter(d, c.parent(), c);
          }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = ub(h.clone), a.leave(l).then(function () {
            l = null;
          }), h = null));
        });
      } };
  }],
      De = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
    return { restrict: "ECA", priority: 400, terminal: !0,
      transclude: "element", controller: ea.noop, compile: function compile(c, e) {
        var f = e.ngInclude || e.src,
            g = e.onload || "",
            h = e.autoscroll;return function (c, e, m, n, p) {
          var q = 0,
              s,
              x,
              r,
              w = function w() {
            x && (x.remove(), x = null);s && (s.$destroy(), s = null);r && (d.leave(r).then(function () {
              x = null;
            }), x = r, r = null);
          };c.$watch(f, function (f) {
            var m = function m() {
              !A(h) || h && !c.$eval(h) || b();
            },
                t = ++q;f ? (a(f, !0).then(function (a) {
              if (!c.$$destroyed && t === q) {
                var b = c.$new();n.template = a;a = p(b, function (a) {
                  w();d.enter(a, null, e).then(m);
                });s = b;r = a;s.$emit("$includeContentLoaded", f);c.$eval(g);
              }
            }, function () {
              c.$$destroyed || t !== q || (w(), c.$emit("$includeContentError", f));
            }), c.$emit("$includeContentRequested", f)) : (w(), n.template = null);
          });
        };
      } };
  }],
      Ue = ["$compile", function (a) {
    return { restrict: "ECA", priority: -400, require: "ngInclude", link: function link(b, d, c, e) {
        ka.call(d[0]).match(/SVG/) ? (d.empty(), a(Lc(e.template, P).childNodes)(b, function (a) {
          d.append(a);
        }, { futureParentElement: d })) : (d.html(e.template), a(d.contents())(b));
      } };
  }],
      Ee = Na({ priority: 450, compile: function compile() {
      return { pre: function pre(a, b, d) {
          a.$eval(d.ngInit);
        } };
    } }),
      Qe = function Qe() {
    return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, b, d, c) {
        var e = b.attr(d.$attr.ngList) || ", ",
            f = "false" !== d.ngTrim,
            g = f ? W(e) : e;c.$parsers.push(function (a) {
          if (!z(a)) {
            var b = [];a && q(a.split(g), function (a) {
              a && b.push(f ? W(a) : a);
            });return b;
          }
        });c.$formatters.push(function (a) {
          return M(a) ? a.join(e) : u;
        });c.$isEmpty = function (a) {
          return !a || !a.length;
        };
      } };
  },
      pb = "ng-valid",
      Md = "ng-invalid",
      Xa = "ng-pristine",
      Lb = "ng-dirty",
      Od = "ng-pending",
      ob = O("ngModel"),
      Lg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
    this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = u;this.$validators = {};this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = u;this.$name = l(d.name || "", !1)(a);this.$$parentForm = Kb;var m = e(d.ngModel),
        n = m.assign,
        p = m,
        s = n,
        y = null,
        x,
        r = this;this.$$setOptions = function (a) {
      if ((r.$options = a) && a.getterSetter) {
        var b = e(d.ngModel + "()"),
            f = e(d.ngModel + "($$$p)");p = function p(a) {
          var c = m(a);D(c) && (c = b(a));return c;
        };s = function s(a, b) {
          D(m(a)) ? f(a, { $$$p: b }) : n(a, b);
        };
      } else if (!m.assign) throw ob("nonassign", d.ngModel, wa(c));
    };this.$render = E;this.$isEmpty = function (a) {
      return z(a) || "" === a || null === a || a !== a;
    };this.$$updateEmptyClasses = function (a) {
      r.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"), f.addClass(c, "ng-not-empty"));
    };var w = 0;Id({ ctrl: this, $element: c, set: function set(a, b) {
        a[b] = !0;
      }, unset: function unset(a, b) {
        delete a[b];
      }, $animate: f });this.$setPristine = function () {
      r.$dirty = !1;r.$pristine = !0;f.removeClass(c, Lb);f.addClass(c, Xa);
    };this.$setDirty = function () {
      r.$dirty = !0;r.$pristine = !1;f.removeClass(c, Xa);f.addClass(c, Lb);r.$$parentForm.$setDirty();
    };this.$setUntouched = function () {
      r.$touched = !1;r.$untouched = !0;f.setClass(c, "ng-untouched", "ng-touched");
    };this.$setTouched = function () {
      r.$touched = !0;r.$untouched = !1;f.setClass(c, "ng-touched", "ng-untouched");
    };this.$rollbackViewValue = function () {
      g.cancel(y);r.$viewValue = r.$$lastCommittedViewValue;r.$render();
    };this.$validate = function () {
      if (!R(r.$modelValue) || !isNaN(r.$modelValue)) {
        var a = r.$$rawModelValue,
            b = r.$valid,
            c = r.$modelValue,
            d = r.$options && r.$options.allowInvalid;r.$$runValidators(a, r.$$lastCommittedViewValue, function (e) {
          d || b === e || (r.$modelValue = e ? a : u, r.$modelValue !== c && r.$$writeModelToScope());
        });
      }
    };this.$$runValidators = function (a, b, c) {
      function d() {
        var c = !0;q(r.$validators, function (d, e) {
          var g = d(a, b);c = c && g;f(e, g);
        });return c ? !0 : (q(r.$asyncValidators, function (a, b) {
          f(b, null);
        }), !1);
      }function e() {
        var c = [],
            d = !0;q(r.$asyncValidators, function (e, g) {
          var h = e(a, b);if (!h || !D(h.then)) throw ob("nopromise", h);f(g, u);c.push(h.then(function () {
            f(g, !0);
          }, function () {
            d = !1;f(g, !1);
          }));
        });c.length ? k.all(c).then(function () {
          g(d);
        }, E) : g(!0);
      }function f(a, b) {
        h === w && r.$setValidity(a, b);
      }function g(a) {
        h === w && c(a);
      }w++;var h = w;(function () {
        var a = r.$$parserName || "parse";if (z(x)) f(a, null);else return x || (q(r.$validators, function (a, b) {
          f(b, null);
        }), q(r.$asyncValidators, function (a, b) {
          f(b, null);
        })), f(a, x), x;return !0;
      })() ? d() ? e() : g(!1) : g(!1);
    };this.$commitViewValue = function () {
      var a = r.$viewValue;g.cancel(y);if (r.$$lastCommittedViewValue !== a || "" === a && r.$$hasNativeValidators) r.$$updateEmptyClasses(a), r.$$lastCommittedViewValue = a, r.$pristine && this.$setDirty(), this.$$parseAndValidate();
    };this.$$parseAndValidate = function () {
      var b = r.$$lastCommittedViewValue;if (x = z(b) ? u : !0) for (var c = 0; c < r.$parsers.length; c++) {
        if (b = r.$parsers[c](b), z(b)) {
          x = !1;break;
        }
      }R(r.$modelValue) && isNaN(r.$modelValue) && (r.$modelValue = p(a));var d = r.$modelValue,
          e = r.$options && r.$options.allowInvalid;r.$$rawModelValue = b;e && (r.$modelValue = b, r.$modelValue !== d && r.$$writeModelToScope());r.$$runValidators(b, r.$$lastCommittedViewValue, function (a) {
        e || (r.$modelValue = a ? b : u, r.$modelValue !== d && r.$$writeModelToScope());
      });
    };this.$$writeModelToScope = function () {
      s(a, r.$modelValue);q(r.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (c) {
          b(c);
        }
      });
    };this.$setViewValue = function (a, b) {
      r.$viewValue = a;r.$options && !r.$options.updateOnDefault || r.$$debounceViewValueCommit(b);
    };this.$$debounceViewValueCommit = function (b) {
      var c = 0,
          d = r.$options;d && A(d.debounce) && (d = d.debounce, R(d) ? c = d : R(d[b]) ? c = d[b] : R(d["default"]) && (c = d["default"]));g.cancel(y);c ? y = g(function () {
        r.$commitViewValue();
      }, c) : h.$$phase ? r.$commitViewValue() : a.$apply(function () {
        r.$commitViewValue();
      });
    };a.$watch(function () {
      var b = p(a);if (b !== r.$modelValue && (r.$modelValue === r.$modelValue || b === b)) {
        r.$modelValue = r.$$rawModelValue = b;x = u;for (var c = r.$formatters, d = c.length, e = b; d--;) {
          e = c[d](e);
        }r.$viewValue !== e && (r.$$updateEmptyClasses(e), r.$viewValue = r.$$lastCommittedViewValue = e, r.$render(), r.$$runValidators(b, e, E));
      }return b;
    });
  }],
      Pe = ["$rootScope", function (a) {
    return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Lg, priority: 1, compile: function compile(b) {
        b.addClass(Xa).addClass("ng-untouched").addClass(pb);return { pre: function pre(a, b, e, f) {
            var g = f[0];b = f[1] || g.$$parentForm;g.$$setOptions(f[2] && f[2].$options);b.$addControl(g);
            e.$observe("name", function (a) {
              g.$name !== a && g.$$parentForm.$$renameControl(g, a);
            });a.$on("$destroy", function () {
              g.$$parentForm.$removeControl(g);
            });
          }, post: function post(b, c, e, f) {
            var g = f[0];if (g.$options && g.$options.updateOn) c.on(g.$options.updateOn, function (a) {
              g.$$debounceViewValueCommit(a && a.type);
            });c.on("blur", function () {
              g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched));
            });
          } };
      } };
  }],
      Mg = /(\s+|^)default(\s+|$)/,
      Te = function Te() {
    return { restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
        var d = this;this.$options = pa(a.$eval(b.ngModelOptions));A(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = W(this.$options.updateOn.replace(Mg, function () {
          d.$options.updateOnDefault = !0;return " ";
        }))) : this.$options.updateOnDefault = !0;
      }] };
  },
      Fe = Na({ terminal: !0, priority: 1E3 }),
      Ng = O("ngOptions"),
      Og = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      Ne = ["$compile", "$parse", function (a, b) {
    function d(a, c, d) {
      function e(a, b, c, d, f) {
        this.selectValue = a;this.viewValue = b;this.label = c;this.group = d;this.disabled = f;
      }function l(a) {
        var b;if (!p && za(a)) b = a;else {
          b = [];for (var c in a) {
            a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
          }
        }return b;
      }var m = a.match(Og);if (!m) throw Ng("iexp", a, wa(c));var n = m[5] || m[7],
          p = m[6];a = / as /.test(m[0]) && m[1];var q = m[9];c = b(m[2] ? m[1] : n);var s = a && b(a) || c,
          x = q && b(q),
          r = q ? function (a, b) {
        return x(d, b);
      } : function (a) {
        return Ha(a);
      },
          w = function w(a, b) {
        return r(a, y(a, b));
      },
          v = b(m[2] || m[1]),
          u = b(m[3] || ""),
          t = b(m[4] || ""),
          G = b(m[8]),
          C = {},
          y = p ? function (a, b) {
        C[p] = b;C[n] = a;return C;
      } : function (a) {
        C[n] = a;return C;
      };return { trackBy: q, getTrackByValue: w, getWatchables: b(G, function (a) {
          var b = [];a = a || [];for (var c = l(a), e = c.length, f = 0; f < e; f++) {
            var g = a === c ? f : c[f],
                k = a[g],
                g = y(k, g),
                k = r(k, g);b.push(k);if (m[2] || m[1]) k = v(d, g), b.push(k);m[4] && (g = t(d, g), b.push(g));
          }return b;
        }), getOptions: function getOptions() {
          for (var a = [], b = {}, c = G(d) || [], f = l(c), g = f.length, m = 0; m < g; m++) {
            var n = c === f ? m : f[m],
                p = y(c[n], n),
                x = s(d, p),
                n = r(x, p),
                C = v(d, p),
                A = u(d, p),
                p = t(d, p),
                x = new e(n, x, C, A, p);a.push(x);b[n] = x;
          }return { items: a, selectValueMap: b, getOptionFromViewValue: function getOptionFromViewValue(a) {
              return b[w(a)];
            }, getViewValueFromOption: function getViewValueFromOption(a) {
              return q ? ea.copy(a.viewValue) : a.viewValue;
            } };
        } };
    }var c = P.createElement("option"),
        e = P.createElement("optgroup");return { restrict: "A", terminal: !0, require: ["select", "ngModel"], link: { pre: function pre(a, b, c, d) {
          d[0].registerOption = E;
        }, post: function post(b, g, h, k) {
          function l(a, b) {
            a.element = b;b.disabled = a.disabled;
            a.label !== b.label && (b.label = a.label, b.textContent = a.label);a.value !== b.value && (b.value = a.selectValue);
          }function m(a, b, c, d) {
            b && N(b.nodeName) === c ? c = b : (c = d.cloneNode(!1), b ? a.insertBefore(c, b) : a.appendChild(c));return c;
          }function n(a) {
            for (var b; a;) {
              b = a.nextSibling, Yb(a), a = b;
            }
          }function p(a) {
            var b = w && w[0],
                c = G && G[0];if (b || c) for (; a && (a === b || a === c || 8 === a.nodeType || "option" === oa(a) && "" === a.value);) {
              a = a.nextSibling;
            }return a;
          }function s() {
            var a = C && u.readValue();C = z.getOptions();var b = {},
                d = g[0].firstChild;t && g.prepend(w);
            d = p(d);C.items.forEach(function (a) {
              var f, h;A(a.group) ? (f = b[a.group], f || (f = m(g[0], d, "optgroup", e), d = f.nextSibling, f.label = a.group, f = b[a.group] = { groupElement: f, currentOptionElement: f.firstChild }), h = m(f.groupElement, f.currentOptionElement, "option", c), l(a, h), f.currentOptionElement = h.nextSibling) : (h = m(g[0], d, "option", c), l(a, h), d = h.nextSibling);
            });Object.keys(b).forEach(function (a) {
              n(b[a].currentOptionElement);
            });n(d);x.$render();if (!x.$isEmpty(a)) {
              var f = u.readValue();(z.trackBy || r ? na(a, f) : a === f) || (x.$setViewValue(f), x.$render());
            }
          }var u = k[0],
              x = k[1],
              r = h.multiple,
              w;k = 0;for (var v = g.children(), y = v.length; k < y; k++) {
            if ("" === v[k].value) {
              w = v.eq(k);break;
            }
          }var t = !!w,
              G = H(c.cloneNode(!1));G.val("?");var C,
              z = d(h.ngOptions, g, b);r ? (x.$isEmpty = function (a) {
            return !a || 0 === a.length;
          }, u.writeValue = function (a) {
            C.items.forEach(function (a) {
              a.element.selected = !1;
            });a && a.forEach(function (a) {
              (a = C.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0);
            });
          }, u.readValue = function () {
            var a = g.val() || [],
                b = [];q(a, function (a) {
              (a = C.selectValueMap[a]) && !a.disabled && b.push(C.getViewValueFromOption(a));
            });return b;
          }, z.trackBy && b.$watchCollection(function () {
            if (M(x.$viewValue)) return x.$viewValue.map(function (a) {
              return z.getTrackByValue(a);
            });
          }, function () {
            x.$render();
          })) : (u.writeValue = function (a) {
            var b = C.getOptionFromViewValue(a);b && !b.disabled ? (g[0].value !== b.selectValue && (G.remove(), t || w.remove(), g[0].value = b.selectValue, b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || t ? (G.remove(), t || g.prepend(w), g.val(""), w.prop("selected", !0), w.attr("selected", !0)) : (t || w.remove(), g.prepend(G), g.val("?"), G.prop("selected", !0), G.attr("selected", !0));
          }, u.readValue = function () {
            var a = C.selectValueMap[g.val()];return a && !a.disabled ? (t || w.remove(), G.remove(), C.getViewValueFromOption(a)) : null;
          }, z.trackBy && b.$watch(function () {
            return z.getTrackByValue(x.$viewValue);
          }, function () {
            x.$render();
          }));t ? (w.remove(), a(w)(b), w.removeClass("ng-scope")) : w = H(c.cloneNode(!1));s();b.$watchCollection(z.getWatchables, s);
        } } };
  }],
      Ge = ["$locale", "$interpolate", "$log", function (a, b, d) {
    var c = /{}/g,
        e = /^when(Minus)?(.+)$/;return { link: function link(f, g, h) {
        function k(a) {
          g.text(a || "");
        }var l = h.count,
            m = h.$attr.when && g.attr(h.$attr.when),
            n = h.offset || 0,
            p = f.$eval(m) || {},
            s = {},
            u = b.startSymbol(),
            x = b.endSymbol(),
            r = u + l + "-" + n + x,
            w = ea.noop,
            v;q(h, function (a, b) {
          var c = e.exec(b);c && (c = (c[1] ? "-" : "") + N(c[2]), p[c] = g.attr(h.$attr[b]));
        });q(p, function (a, d) {
          s[d] = b(a.replace(c, r));
        });f.$watch(l, function (b) {
          var c = parseFloat(b),
              e = isNaN(c);e || c in p || (c = a.pluralCat(c - n));c === v || e && R(v) && isNaN(v) || (w(), e = s[c], z(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), w = E, k()) : w = f.$watch(e, k), v = c);
        });
      } };
  }],
      He = ["$parse", "$animate", "$compile", function (a, b, d) {
    var c = O("ngRepeat"),
        e = function e(a, b, c, d, _e2, m, n) {
      a[c] = d;_e2 && (a[_e2] = m);a.$index = b;a.$first = 0 === b;a.$last = b === n - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (b & 1));
    };return { restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(f, g) {
        var h = g.ngRepeat,
            k = d.$$createComment("end ngRepeat", h),
            l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
        if (!l) throw c("iexp", h);var m = l[1],
            n = l[2],
            p = l[3],
            s = l[4],
            l = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if (!l) throw c("iidexp", m);var y = l[3] || l[1],
            x = l[2];if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);var r,
            w,
            v,
            z,
            t = { $id: Ha };s ? r = a(s) : (v = function v(a, b) {
          return Ha(b);
        }, z = function z(a) {
          return a;
        });return function (a, d, f, g, l) {
          r && (w = function w(b, c, d) {
            x && (t[x] = b);t[y] = c;t.$index = d;return r(a, t);
          });var m = V();a.$watchCollection(n, function (f) {
            var g,
                n,
                r = d[0],
                s,
                t = V(),
                A,
                E,
                H,
                D,
                I,
                F,
                J;p && (a[p] = f);if (za(f)) I = f, n = w || v;else for (J in n = w || z, I = [], f) {
              va.call(f, J) && "$" !== J.charAt(0) && I.push(J);
            }A = I.length;J = Array(A);for (g = 0; g < A; g++) {
              if (E = f === I ? g : I[g], H = f[E], D = n(E, H, g), m[D]) F = m[D], delete m[D], t[D] = F, J[g] = F;else {
                if (t[D]) throw q(J, function (a) {
                  a && a.scope && (m[a.id] = a);
                }), c("dupes", h, D, H);J[g] = { id: D, scope: u, clone: u };t[D] = !0;
              }
            }for (s in m) {
              F = m[s];D = ub(F.clone);b.leave(D);if (D[0].parentNode) for (g = 0, n = D.length; g < n; g++) {
                D[g].$$NG_REMOVED = !0;
              }F.scope.$destroy();
            }for (g = 0; g < A; g++) {
              if (E = f === I ? g : I[g], H = f[E], F = J[g], F.scope) {
                s = r;do {
                  s = s.nextSibling;
                } while (s && s.$$NG_REMOVED);F.clone[0] != s && b.move(ub(F.clone), null, r);r = F.clone[F.clone.length - 1];e(F.scope, g, y, H, x, E, A);
              } else l(function (a, c) {
                F.scope = c;var d = k.cloneNode(!1);a[a.length++] = d;b.enter(a, null, r);r = d;F.clone = a;t[F.id] = F;e(F.scope, g, y, H, x, E, A);
              });
            }m = t;
          });
        };
      } };
  }],
      Ie = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngShow, function (b) {
          a[b ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      Be = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngHide, function (b) {
          a[b ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      Je = Na(function (a, b, d) {
    a.$watch(d.ngStyle, function (a, d) {
      d && a !== d && q(d, function (a, c) {
        b.css(c, "");
      });a && b.css(a);
    }, !0);
  }),
      Ke = ["$animate", "$compile", function (a, b) {
    return { require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {};
      }],
      link: function link(d, c, e, f) {
        var g = [],
            h = [],
            k = [],
            l = [],
            m = function m(a, b) {
          return function () {
            a.splice(b, 1);
          };
        };d.$watch(e.ngSwitch || e.on, function (c) {
          var d, e;d = 0;for (e = k.length; d < e; ++d) {
            a.cancel(k[d]);
          }d = k.length = 0;for (e = l.length; d < e; ++d) {
            var s = ub(h[d].clone);l[d].$destroy();(k[d] = a.leave(s)).then(m(k, d));
          }h.length = 0;l.length = 0;(g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
            c.transclude(function (d, e) {
              l.push(e);var f = c.element;d[d.length++] = b.$$createComment("end ngSwitchWhen");h.push({ clone: d });a.enter(d, f.parent(), f);
            });
          });
        });
      } };
  }],
      Le = Na({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
      c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];c.cases["!" + d.ngSwitchWhen].push({ transclude: e, element: b });
    } }),
      Me = Na({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
      c.cases["?"] = c.cases["?"] || [];c.cases["?"].push({ transclude: e, element: b });
    } }),
      Pg = O("ngTransclude"),
      Oe = Na({ restrict: "EAC", link: function link(a, b, d, c, e) {
      d.ngTransclude === d.$attr.ngTransclude && (d.ngTransclude = "");if (!e) throw Pg("orphan", wa(b));e(function (a) {
        a.length && (b.empty(), b.append(a));
      }, null, d.ngTransclude || d.ngTranscludeSlot);
    } }),
      oe = ["$templateCache", function (a) {
    return { restrict: "E", terminal: !0, compile: function compile(b, d) {
        "text/ng-template" == d.type && a.put(d.id, b[0].text);
      } };
  }],
      Qg = { $setViewValue: E, $render: E },
      Rg = ["$element", "$scope", function (a, b) {
    var d = this,
        c = new Ua();d.ngModelCtrl = Qg;d.unknownOption = H(P.createElement("option"));d.renderUnknownOption = function (b) {
      b = "? " + Ha(b) + " ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b);
    };b.$on("$destroy", function () {
      d.renderUnknownOption = E;
    });d.removeUnknownOption = function () {
      d.unknownOption.parent() && d.unknownOption.remove();
    };d.readValue = function () {
      d.removeUnknownOption();return a.val();
    };d.writeValue = function (b) {
      d.hasOption(b) ? (d.removeUnknownOption(), a.val(b), "" === b && d.emptyOption.prop("selected", !0)) : null == b && d.emptyOption ? (d.removeUnknownOption(), a.val("")) : d.renderUnknownOption(b);
    };d.addOption = function (a, b) {
      if (8 !== b[0].nodeType) {
        Ta(a, '"option value"');"" === a && (d.emptyOption = b);var g = c.get(a) || 0;c.put(a, g + 1);d.ngModelCtrl.$render();b[0].hasAttribute("selected") && (b[0].selected = !0);
      }
    };d.removeOption = function (a) {
      var b = c.get(a);b && (1 === b ? (c.remove(a), "" === a && (d.emptyOption = u)) : c.put(a, b - 1));
    };d.hasOption = function (a) {
      return !!c.get(a);
    };d.registerOption = function (a, b, c, h, k) {
      if (h) {
        var l;c.$observe("value", function (a) {
          A(l) && d.removeOption(l);l = a;d.addOption(a, b);
        });
      } else k ? a.$watch(k, function (a, e) {
        c.$set("value", a);e !== a && d.removeOption(e);d.addOption(a, b);
      }) : d.addOption(c.value, b);b.on("$destroy", function () {
        d.removeOption(c.value);d.ngModelCtrl.$render();
      });
    };
  }],
      pe = function pe() {
    return { restrict: "E", require: ["select", "?ngModel"], controller: Rg, priority: 1, link: { pre: function pre(a, b, d, c) {
          var e = c[1];if (e) {
            var f = c[0];f.ngModelCtrl = e;b.on("change", function () {
              a.$apply(function () {
                e.$setViewValue(f.readValue());
              });
            });if (d.multiple) {
              f.readValue = function () {
                var a = [];q(b.find("option"), function (b) {
                  b.selected && a.push(b.value);
                });return a;
              };
              f.writeValue = function (a) {
                var c = new Ua(a);q(b.find("option"), function (a) {
                  a.selected = A(c.get(a.value));
                });
              };var g,
                  h = NaN;a.$watch(function () {
                h !== e.$viewValue || na(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render());h = e.$viewValue;
              });e.$isEmpty = function (a) {
                return !a || 0 === a.length;
              };
            }
          }
        }, post: function post(a, b, d, c) {
          var e = c[1];if (e) {
            var f = c[0];e.$render = function () {
              f.writeValue(e.$viewValue);
            };
          }
        } } };
  },
      re = ["$interpolate", function (a) {
    return { restrict: "E", priority: 100, compile: function compile(b, d) {
        if (A(d.value)) var c = a(d.value, !0);else {
          var e = a(b.text(), !0);e || d.$set("value", b.text());
        }return function (a, b, d) {
          var k = b.parent();(k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e);
        };
      } };
  }],
      qe = da({ restrict: "E", terminal: !1 }),
      Fc = function Fc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        c && (d.required = !0, c.$validators.required = function (a, b) {
          return !d.required || !c.$isEmpty(b);
        }, d.$observe("required", function () {
          c.$validate();
        }));
      } };
  },
      Ec = function Ec() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e,
              f = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
            y(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw O("ngPattern")("noregexp", f, a, wa(b));e = a || u;c.$validate();
          });c.$validators.pattern = function (a, b) {
            return c.$isEmpty(b) || z(e) || e.test(b);
          };
        }
      } };
  },
      Hc = function Hc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e = -1;d.$observe("maxlength", function (a) {
            a = Y(a);e = isNaN(a) ? -1 : a;c.$validate();
          });c.$validators.maxlength = function (a, b) {
            return 0 > e || c.$isEmpty(b) || b.length <= e;
          };
        }
      } };
  },
      Gc = function Gc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e = 0;d.$observe("minlength", function (a) {
            e = Y(a) || 0;c.$validate();
          });c.$validators.minlength = function (a, b) {
            return c.$isEmpty(b) || b.length >= e;
          };
        }
      } };
  };T.angular.bootstrap ? T.console && console.log("WARNING: Tried to load angular more than once.") : (he(), je(ea), ea.module("ngLocale", [], ["$provide", function (a) {
    function b(a) {
      a += "";var b = a.indexOf(".");return -1 == b ? 0 : a.length - b - 1;
    }a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), STANDALONEMONTH: "January February March April May June July August September October November December".split(" "), WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\xA4", negSuf: "", posPre: "\xA4", posSuf: "" }] }, id: "en-us", localeID: "en_US", pluralCat: function pluralCat(a, c) {
        var e = a | 0,
            f = c;u === f && (f = Math.min(b(a), 3));Math.pow(10, f);return 1 == e && 0 == f ? "one" : "other";
      } });
  }]), H(P).ready(function () {
    de(P, yc);
  }));
})(window, document);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Swiper 3.4.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: October 16, 2016
 */
!function () {
  "use strict";
  function e(e) {
    e.fn.swiper = function (a) {
      var s;return e(this).each(function () {
        var e = new t(this, a);s || (s = e);
      }), s;
    };
  }var a,
      t = function t(e, i) {
    function n(e) {
      return Math.floor(e);
    }function o() {
      var e = S.params.autoplay,
          a = S.slides.eq(S.activeIndex);a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || S.params.autoplay), S.autoplayTimeoutId = setTimeout(function () {
        S.params.loop ? (S.fixLoop(), S._slideNext(), S.emit("onAutoplay", S)) : S.isEnd ? i.autoplayStopOnLast ? S.stopAutoplay() : (S._slideTo(0), S.emit("onAutoplay", S)) : (S._slideNext(), S.emit("onAutoplay", S));
      }, e);
    }function l(e, t) {
      var s = a(e.target);if (!s.is(t)) if ("string" == typeof t) s = s.parents(t);else if (t.nodeType) {
        var i;return s.parents().each(function (e, a) {
          a === t && (i = t);
        }), i ? t : void 0;
      }if (0 !== s.length) return s[0];
    }function p(e, a) {
      a = a || {};var t = window.MutationObserver || window.WebkitMutationObserver,
          s = new t(function (e) {
        e.forEach(function (e) {
          S.onResize(!0), S.emit("onObserverUpdate", S, e);
        });
      });s.observe(e, { attributes: "undefined" == typeof a.attributes || a.attributes, childList: "undefined" == typeof a.childList || a.childList, characterData: "undefined" == typeof a.characterData || a.characterData }), S.observers.push(s);
    }function d(e) {
      e.originalEvent && (e = e.originalEvent);var a = e.keyCode || e.charCode;if (!S.params.allowSwipeToNext && (S.isHorizontal() && 39 === a || !S.isHorizontal() && 40 === a)) return !1;if (!S.params.allowSwipeToPrev && (S.isHorizontal() && 37 === a || !S.isHorizontal() && 38 === a)) return !1;if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
        if (37 === a || 39 === a || 38 === a || 40 === a) {
          var t = !1;if (S.container.parents("." + S.params.slideClass).length > 0 && 0 === S.container.parents("." + S.params.slideActiveClass).length) return;var s = { left: window.pageXOffset, top: window.pageYOffset },
              i = window.innerWidth,
              r = window.innerHeight,
              n = S.container.offset();S.rtl && (n.left = n.left - S.container[0].scrollLeft);for (var o = [[n.left, n.top], [n.left + S.width, n.top], [n.left, n.top + S.height], [n.left + S.width, n.top + S.height]], l = 0; l < o.length; l++) {
            var p = o[l];p[0] >= s.left && p[0] <= s.left + i && p[1] >= s.top && p[1] <= s.top + r && (t = !0);
          }if (!t) return;
        }S.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !S.rtl || 37 === a && S.rtl) && S.slideNext(), (37 === a && !S.rtl || 39 === a && S.rtl) && S.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && S.slideNext(), 38 === a && S.slidePrev());
      }
    }function u() {
      var e = "onwheel",
          a = e in document;if (!a) {
        var t = document.createElement("div");t.setAttribute(e, "return;"), a = "function" == typeof t[e];
      }return !a && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a;
    }function c(e) {
      e.originalEvent && (e = e.originalEvent);var a = 0,
          t = S.rtl ? -1 : 1,
          s = m(e);if (S.params.mousewheelForceToAxis) {
        if (S.isHorizontal()) {
          if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return;a = s.pixelX * t;
        } else {
          if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return;a = s.pixelY;
        }
      } else a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;if (0 !== a) {
        if (S.params.mousewheelInvert && (a = -a), S.params.freeMode) {
          var i = S.getWrapperTranslate() + a * S.params.mousewheelSensitivity,
              r = S.isBeginning,
              n = S.isEnd;if (i >= S.minTranslate() && (i = S.minTranslate()), i <= S.maxTranslate() && (i = S.maxTranslate()), S.setWrapperTransition(0), S.setWrapperTranslate(i), S.updateProgress(), S.updateActiveIndex(), (!r && S.isBeginning || !n && S.isEnd) && S.updateClasses(), S.params.freeModeSticky ? (clearTimeout(S.mousewheel.timeout), S.mousewheel.timeout = setTimeout(function () {
            S.slideReset();
          }, 300)) : S.params.lazyLoading && S.lazy && S.lazy.load(), S.emit("onScroll", S, e), S.params.autoplay && S.params.autoplayDisableOnInteraction && S.stopAutoplay(), 0 === i || i === S.maxTranslate()) return;
        } else {
          if (new window.Date().getTime() - S.mousewheel.lastScrollTime > 60) if (a < 0) {
            if (S.isEnd && !S.params.loop || S.animating) {
              if (S.params.mousewheelReleaseOnEdges) return !0;
            } else S.slideNext(), S.emit("onScroll", S, e);
          } else if (S.isBeginning && !S.params.loop || S.animating) {
            if (S.params.mousewheelReleaseOnEdges) return !0;
          } else S.slidePrev(), S.emit("onScroll", S, e);S.mousewheel.lastScrollTime = new window.Date().getTime();
        }return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
      }
    }function m(e) {
      var a = 10,
          t = 40,
          s = 800,
          i = 0,
          r = 0,
          n = 0,
          o = 0;return "detail" in e && (r = e.detail), "wheelDelta" in e && (r = -e.wheelDelta / 120), "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (i = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (i = r, r = 0), n = i * a, o = r * a, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || o) && e.deltaMode && (1 === e.deltaMode ? (n *= t, o *= t) : (n *= s, o *= s)), n && !i && (i = n < 1 ? -1 : 1), o && !r && (r = o < 1 ? -1 : 1), { spinX: i, spinY: r, pixelX: n, pixelY: o };
    }function h(e, t) {
      e = a(e);var s,
          i,
          r,
          n = S.rtl ? -1 : 1;s = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), r = e.attr("data-swiper-parallax-y"), i || r ? (i = i || "0", r = r || "0") : S.isHorizontal() ? (i = s, r = "0") : (r = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px", r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px", e.transform("translate3d(" + i + ", " + r + ",0px)");
    }function g(e) {
      return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e;
    }if (!(this instanceof t)) return new t(e, i);var f = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, zoom: !1, zoomMax: 3, zoomMin: 1, zoomToggle: !0, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, mousewheelEventsTarged: "container", hashnav: !1, hashnavWatchState: !1, history: !1, replaceState: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", normalizeSlideIndex: !0, allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", paginationClickableClass: "swiper-pagination-clickable", paginationModifierClass: "swiper-pagination-", lazyLoadingClass: "swiper-lazy", lazyStatusLoadingClass: "swiper-lazy-loading", lazyStatusLoadedClass: "swiper-lazy-loaded", lazyPreloaderClass: "swiper-lazy-preloader", notificationClass: "swiper-notification", preloaderClass: "preloader", zoomContainerClass: "swiper-zoom-container", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
        v = i && i.virtualTranslate;i = i || {};var w = {};for (var y in i) {
      if ("object" != _typeof(i[y]) || null === i[y] || i[y].nodeType || i[y] === window || i[y] === document || "undefined" != typeof s && i[y] instanceof s || "undefined" != typeof jQuery && i[y] instanceof jQuery) w[y] = i[y];else {
        w[y] = {};for (var x in i[y]) {
          w[y][x] = i[y][x];
        }
      }
    }for (var T in f) {
      if ("undefined" == typeof i[T]) i[T] = f[T];else if ("object" == _typeof(i[T])) for (var b in f[T]) {
        "undefined" == typeof i[T][b] && (i[T][b] = f[T][b]);
      }
    }var S = this;if (S.params = i, S.originalParams = w, S.classNames = [], "undefined" != typeof a && "undefined" != typeof s && (a = s), ("undefined" != typeof a || (a = "undefined" == typeof s ? window.Dom7 || window.Zepto || window.jQuery : s)) && (S.$ = a, S.currentBreakpoint = void 0, S.getActiveBreakpoint = function () {
      if (!S.params.breakpoints) return !1;var e,
          a = !1,
          t = [];for (e in S.params.breakpoints) {
        S.params.breakpoints.hasOwnProperty(e) && t.push(e);
      }t.sort(function (e, a) {
        return parseInt(e, 10) > parseInt(a, 10);
      });for (var s = 0; s < t.length; s++) {
        e = t[s], e >= window.innerWidth && !a && (a = e);
      }return a || "max";
    }, S.setBreakpoint = function () {
      var e = S.getActiveBreakpoint();if (e && S.currentBreakpoint !== e) {
        var a = e in S.params.breakpoints ? S.params.breakpoints[e] : S.originalParams,
            t = S.params.loop && a.slidesPerView !== S.params.slidesPerView;for (var s in a) {
          S.params[s] = a[s];
        }S.currentBreakpoint = e, t && S.destroyLoop && S.reLoop(!0);
      }
    }, S.params.breakpoints && S.setBreakpoint(), S.container = a(e), 0 !== S.container.length)) {
      if (S.container.length > 1) {
        var C = [];return S.container.each(function () {
          C.push(new t(this, i));
        }), C;
      }S.container[0].swiper = S, S.container.data("swiper", S), S.classNames.push(S.params.containerModifierClass + S.params.direction), S.params.freeMode && S.classNames.push(S.params.containerModifierClass + "free-mode"), S.support.flexbox || (S.classNames.push(S.params.containerModifierClass + "no-flexbox"), S.params.slidesPerColumn = 1), S.params.autoHeight && S.classNames.push(S.params.containerModifierClass + "autoheight"), (S.params.parallax || S.params.watchSlidesVisibility) && (S.params.watchSlidesProgress = !0), S.params.touchReleaseOnEdges && (S.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(S.params.effect) >= 0 && (S.support.transforms3d ? (S.params.watchSlidesProgress = !0, S.classNames.push(S.params.containerModifierClass + "3d")) : S.params.effect = "slide"), "slide" !== S.params.effect && S.classNames.push(S.params.containerModifierClass + S.params.effect), "cube" === S.params.effect && (S.params.resistanceRatio = 0, S.params.slidesPerView = 1, S.params.slidesPerColumn = 1, S.params.slidesPerGroup = 1, S.params.centeredSlides = !1, S.params.spaceBetween = 0, S.params.virtualTranslate = !0, S.params.setWrapperSize = !1), "fade" !== S.params.effect && "flip" !== S.params.effect || (S.params.slidesPerView = 1, S.params.slidesPerColumn = 1, S.params.slidesPerGroup = 1, S.params.watchSlidesProgress = !0, S.params.spaceBetween = 0, S.params.setWrapperSize = !1, "undefined" == typeof v && (S.params.virtualTranslate = !0)), S.params.grabCursor && S.support.touch && (S.params.grabCursor = !1), S.wrapper = S.container.children("." + S.params.wrapperClass), S.params.pagination && (S.paginationContainer = a(S.params.pagination), S.params.uniqueNavElements && "string" == typeof S.params.pagination && S.paginationContainer.length > 1 && 1 === S.container.find(S.params.pagination).length && (S.paginationContainer = S.container.find(S.params.pagination)), "bullets" === S.params.paginationType && S.params.paginationClickable ? S.paginationContainer.addClass(S.params.paginationModifierClass + "clickable") : S.params.paginationClickable = !1, S.paginationContainer.addClass(S.params.paginationModifierClass + S.params.paginationType)), (S.params.nextButton || S.params.prevButton) && (S.params.nextButton && (S.nextButton = a(S.params.nextButton), S.params.uniqueNavElements && "string" == typeof S.params.nextButton && S.nextButton.length > 1 && 1 === S.container.find(S.params.nextButton).length && (S.nextButton = S.container.find(S.params.nextButton))), S.params.prevButton && (S.prevButton = a(S.params.prevButton), S.params.uniqueNavElements && "string" == typeof S.params.prevButton && S.prevButton.length > 1 && 1 === S.container.find(S.params.prevButton).length && (S.prevButton = S.container.find(S.params.prevButton)))), S.isHorizontal = function () {
        return "horizontal" === S.params.direction;
      }, S.rtl = S.isHorizontal() && ("rtl" === S.container[0].dir.toLowerCase() || "rtl" === S.container.css("direction")), S.rtl && S.classNames.push(S.params.containerModifierClass + "rtl"), S.rtl && (S.wrongRTL = "-webkit-box" === S.wrapper.css("display")), S.params.slidesPerColumn > 1 && S.classNames.push(S.params.containerModifierClass + "multirow"), S.device.android && S.classNames.push(S.params.containerModifierClass + "android"), S.container.addClass(S.classNames.join(" ")), S.translate = 0, S.progress = 0, S.velocity = 0, S.lockSwipeToNext = function () {
        S.params.allowSwipeToNext = !1, S.params.allowSwipeToPrev === !1 && S.params.grabCursor && S.unsetGrabCursor();
      }, S.lockSwipeToPrev = function () {
        S.params.allowSwipeToPrev = !1, S.params.allowSwipeToNext === !1 && S.params.grabCursor && S.unsetGrabCursor();
      }, S.lockSwipes = function () {
        S.params.allowSwipeToNext = S.params.allowSwipeToPrev = !1, S.params.grabCursor && S.unsetGrabCursor();
      }, S.unlockSwipeToNext = function () {
        S.params.allowSwipeToNext = !0, S.params.allowSwipeToPrev === !0 && S.params.grabCursor && S.setGrabCursor();
      }, S.unlockSwipeToPrev = function () {
        S.params.allowSwipeToPrev = !0, S.params.allowSwipeToNext === !0 && S.params.grabCursor && S.setGrabCursor();
      }, S.unlockSwipes = function () {
        S.params.allowSwipeToNext = S.params.allowSwipeToPrev = !0, S.params.grabCursor && S.setGrabCursor();
      }, S.setGrabCursor = function (e) {
        S.container[0].style.cursor = "move", S.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", S.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", S.container[0].style.cursor = e ? "grabbing" : "grab";
      }, S.unsetGrabCursor = function () {
        S.container[0].style.cursor = "";
      }, S.params.grabCursor && S.setGrabCursor(), S.imagesToLoad = [], S.imagesLoaded = 0, S.loadImage = function (e, a, t, s, i, r) {
        function n() {
          r && r();
        }var o;e.complete && i ? n() : a ? (o = new window.Image(), o.onload = n, o.onerror = n, s && (o.sizes = s), t && (o.srcset = t), a && (o.src = a)) : n();
      }, S.preloadImages = function () {
        function e() {
          "undefined" != typeof S && null !== S && (void 0 !== S.imagesLoaded && S.imagesLoaded++, S.imagesLoaded === S.imagesToLoad.length && (S.params.updateOnImagesReady && S.update(), S.emit("onImagesReady", S)));
        }S.imagesToLoad = S.container.find("img");for (var a = 0; a < S.imagesToLoad.length; a++) {
          S.loadImage(S.imagesToLoad[a], S.imagesToLoad[a].currentSrc || S.imagesToLoad[a].getAttribute("src"), S.imagesToLoad[a].srcset || S.imagesToLoad[a].getAttribute("srcset"), S.imagesToLoad[a].sizes || S.imagesToLoad[a].getAttribute("sizes"), !0, e);
        }
      }, S.autoplayTimeoutId = void 0, S.autoplaying = !1, S.autoplayPaused = !1, S.startAutoplay = function () {
        return "undefined" == typeof S.autoplayTimeoutId && !!S.params.autoplay && !S.autoplaying && (S.autoplaying = !0, S.emit("onAutoplayStart", S), void o());
      }, S.stopAutoplay = function (e) {
        S.autoplayTimeoutId && (S.autoplayTimeoutId && clearTimeout(S.autoplayTimeoutId), S.autoplaying = !1, S.autoplayTimeoutId = void 0, S.emit("onAutoplayStop", S));
      }, S.pauseAutoplay = function (e) {
        S.autoplayPaused || (S.autoplayTimeoutId && clearTimeout(S.autoplayTimeoutId), S.autoplayPaused = !0, 0 === e ? (S.autoplayPaused = !1, o()) : S.wrapper.transitionEnd(function () {
          S && (S.autoplayPaused = !1, S.autoplaying ? o() : S.stopAutoplay());
        }));
      }, S.minTranslate = function () {
        return -S.snapGrid[0];
      }, S.maxTranslate = function () {
        return -S.snapGrid[S.snapGrid.length - 1];
      }, S.updateAutoHeight = function () {
        var e = [],
            a = 0;if ("auto" !== S.params.slidesPerView && S.params.slidesPerView > 1) for (r = 0; r < Math.ceil(S.params.slidesPerView); r++) {
          var t = S.activeIndex + r;if (t > S.slides.length) break;e.push(S.slides.eq(t)[0]);
        } else e.push(S.slides.eq(S.activeIndex)[0]);for (r = 0; r < e.length; r++) {
          if ("undefined" != typeof e[r]) {
            var s = e[r].offsetHeight;a = s > a ? s : a;
          }
        }a && S.wrapper.css("height", a + "px");
      }, S.updateContainerSize = function () {
        var e, a;e = "undefined" != typeof S.params.width ? S.params.width : S.container[0].clientWidth, a = "undefined" != typeof S.params.height ? S.params.height : S.container[0].clientHeight, 0 === e && S.isHorizontal() || 0 === a && !S.isHorizontal() || (e = e - parseInt(S.container.css("padding-left"), 10) - parseInt(S.container.css("padding-right"), 10), a = a - parseInt(S.container.css("padding-top"), 10) - parseInt(S.container.css("padding-bottom"), 10), S.width = e, S.height = a, S.size = S.isHorizontal() ? S.width : S.height);
      }, S.updateSlidesSize = function () {
        S.slides = S.wrapper.children("." + S.params.slideClass), S.snapGrid = [], S.slidesGrid = [], S.slidesSizesGrid = [];var e,
            a = S.params.spaceBetween,
            t = -S.params.slidesOffsetBefore,
            s = 0,
            i = 0;if ("undefined" != typeof S.size) {
          "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * S.size), S.virtualSize = -a, S.rtl ? S.slides.css({ marginLeft: "", marginTop: "" }) : S.slides.css({ marginRight: "", marginBottom: "" });var r;S.params.slidesPerColumn > 1 && (r = Math.floor(S.slides.length / S.params.slidesPerColumn) === S.slides.length / S.params.slidesPerColumn ? S.slides.length : Math.ceil(S.slides.length / S.params.slidesPerColumn) * S.params.slidesPerColumn, "auto" !== S.params.slidesPerView && "row" === S.params.slidesPerColumnFill && (r = Math.max(r, S.params.slidesPerView * S.params.slidesPerColumn)));var o,
              l = S.params.slidesPerColumn,
              p = r / l,
              d = p - (S.params.slidesPerColumn * p - S.slides.length);for (e = 0; e < S.slides.length; e++) {
            o = 0;var u = S.slides.eq(e);if (S.params.slidesPerColumn > 1) {
              var c, m, h;"column" === S.params.slidesPerColumnFill ? (m = Math.floor(e / l), h = e - m * l, (m > d || m === d && h === l - 1) && ++h >= l && (h = 0, m++), c = m + h * r / l, u.css({ "-webkit-box-ordinal-group": c, "-moz-box-ordinal-group": c, "-ms-flex-order": c, "-webkit-order": c, order: c })) : (h = Math.floor(e / p), m = e - h * p), u.css("margin-" + (S.isHorizontal() ? "top" : "left"), 0 !== h && S.params.spaceBetween && S.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h);
            }"none" !== u.css("display") && ("auto" === S.params.slidesPerView ? (o = S.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), S.params.roundLengths && (o = n(o))) : (o = (S.size - (S.params.slidesPerView - 1) * a) / S.params.slidesPerView, S.params.roundLengths && (o = n(o)), S.isHorizontal() ? S.slides[e].style.width = o + "px" : S.slides[e].style.height = o + "px"), S.slides[e].swiperSlideSize = o, S.slidesSizesGrid.push(o), S.params.centeredSlides ? (t = t + o / 2 + s / 2 + a, 0 === e && (t = t - S.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % S.params.slidesPerGroup === 0 && S.snapGrid.push(t), S.slidesGrid.push(t)) : (i % S.params.slidesPerGroup === 0 && S.snapGrid.push(t), S.slidesGrid.push(t), t = t + o + a), S.virtualSize += o + a, s = o, i++);
          }S.virtualSize = Math.max(S.virtualSize, S.size) + S.params.slidesOffsetAfter;var g;if (S.rtl && S.wrongRTL && ("slide" === S.params.effect || "coverflow" === S.params.effect) && S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }), S.support.flexbox && !S.params.setWrapperSize || (S.isHorizontal() ? S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }) : S.wrapper.css({ height: S.virtualSize + S.params.spaceBetween + "px" })), S.params.slidesPerColumn > 1 && (S.virtualSize = (o + S.params.spaceBetween) * r, S.virtualSize = Math.ceil(S.virtualSize / S.params.slidesPerColumn) - S.params.spaceBetween, S.isHorizontal() ? S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }) : S.wrapper.css({ height: S.virtualSize + S.params.spaceBetween + "px" }), S.params.centeredSlides)) {
            for (g = [], e = 0; e < S.snapGrid.length; e++) {
              S.snapGrid[e] < S.virtualSize + S.snapGrid[0] && g.push(S.snapGrid[e]);
            }S.snapGrid = g;
          }if (!S.params.centeredSlides) {
            for (g = [], e = 0; e < S.snapGrid.length; e++) {
              S.snapGrid[e] <= S.virtualSize - S.size && g.push(S.snapGrid[e]);
            }S.snapGrid = g, Math.floor(S.virtualSize - S.size) - Math.floor(S.snapGrid[S.snapGrid.length - 1]) > 1 && S.snapGrid.push(S.virtualSize - S.size);
          }0 === S.snapGrid.length && (S.snapGrid = [0]), 0 !== S.params.spaceBetween && (S.isHorizontal() ? S.rtl ? S.slides.css({ marginLeft: a + "px" }) : S.slides.css({ marginRight: a + "px" }) : S.slides.css({ marginBottom: a + "px" })), S.params.watchSlidesProgress && S.updateSlidesOffset();
        }
      }, S.updateSlidesOffset = function () {
        for (var e = 0; e < S.slides.length; e++) {
          S.slides[e].swiperSlideOffset = S.isHorizontal() ? S.slides[e].offsetLeft : S.slides[e].offsetTop;
        }
      }, S.updateSlidesProgress = function (e) {
        if ("undefined" == typeof e && (e = S.translate || 0), 0 !== S.slides.length) {
          "undefined" == typeof S.slides[0].swiperSlideOffset && S.updateSlidesOffset();var a = -e;S.rtl && (a = e), S.slides.removeClass(S.params.slideVisibleClass);for (var t = 0; t < S.slides.length; t++) {
            var s = S.slides[t],
                i = (a + (S.params.centeredSlides ? S.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + S.params.spaceBetween);if (S.params.watchSlidesVisibility) {
              var r = -(a - s.swiperSlideOffset),
                  n = r + S.slidesSizesGrid[t],
                  o = r >= 0 && r < S.size || n > 0 && n <= S.size || r <= 0 && n >= S.size;o && S.slides.eq(t).addClass(S.params.slideVisibleClass);
            }s.progress = S.rtl ? -i : i;
          }
        }
      }, S.updateProgress = function (e) {
        "undefined" == typeof e && (e = S.translate || 0);var a = S.maxTranslate() - S.minTranslate(),
            t = S.isBeginning,
            s = S.isEnd;0 === a ? (S.progress = 0, S.isBeginning = S.isEnd = !0) : (S.progress = (e - S.minTranslate()) / a, S.isBeginning = S.progress <= 0, S.isEnd = S.progress >= 1), S.isBeginning && !t && S.emit("onReachBeginning", S), S.isEnd && !s && S.emit("onReachEnd", S), S.params.watchSlidesProgress && S.updateSlidesProgress(e), S.emit("onProgress", S, S.progress);
      }, S.updateActiveIndex = function () {
        var e,
            a,
            t,
            s = S.rtl ? S.translate : -S.translate;for (a = 0; a < S.slidesGrid.length; a++) {
          "undefined" != typeof S.slidesGrid[a + 1] ? s >= S.slidesGrid[a] && s < S.slidesGrid[a + 1] - (S.slidesGrid[a + 1] - S.slidesGrid[a]) / 2 ? e = a : s >= S.slidesGrid[a] && s < S.slidesGrid[a + 1] && (e = a + 1) : s >= S.slidesGrid[a] && (e = a);
        }S.params.normalizeSlideIndex && (e < 0 || "undefined" == typeof e) && (e = 0), t = Math.floor(e / S.params.slidesPerGroup), t >= S.snapGrid.length && (t = S.snapGrid.length - 1), e !== S.activeIndex && (S.snapIndex = t, S.previousIndex = S.activeIndex, S.activeIndex = e, S.updateClasses(), S.updateRealIndex());
      }, S.updateRealIndex = function () {
        S.realIndex = S.slides.eq(S.activeIndex).attr("data-swiper-slide-index") || S.activeIndex;
      }, S.updateClasses = function () {
        S.slides.removeClass(S.params.slideActiveClass + " " + S.params.slideNextClass + " " + S.params.slidePrevClass + " " + S.params.slideDuplicateActiveClass + " " + S.params.slideDuplicateNextClass + " " + S.params.slideDuplicatePrevClass);var e = S.slides.eq(S.activeIndex);e.addClass(S.params.slideActiveClass), i.loop && (e.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + S.realIndex + '"]').addClass(S.params.slideDuplicateActiveClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + S.realIndex + '"]').addClass(S.params.slideDuplicateActiveClass));var t = e.next("." + S.params.slideClass).addClass(S.params.slideNextClass);S.params.loop && 0 === t.length && (t = S.slides.eq(0), t.addClass(S.params.slideNextClass));var s = e.prev("." + S.params.slideClass).addClass(S.params.slidePrevClass);if (S.params.loop && 0 === s.length && (s = S.slides.eq(-1), s.addClass(S.params.slidePrevClass)), i.loop && (t.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicateNextClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicateNextClass), s.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicatePrevClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicatePrevClass)), S.paginationContainer && S.paginationContainer.length > 0) {
          var r,
              n = S.params.loop ? Math.ceil((S.slides.length - 2 * S.loopedSlides) / S.params.slidesPerGroup) : S.snapGrid.length;if (S.params.loop ? (r = Math.ceil((S.activeIndex - S.loopedSlides) / S.params.slidesPerGroup), r > S.slides.length - 1 - 2 * S.loopedSlides && (r -= S.slides.length - 2 * S.loopedSlides), r > n - 1 && (r -= n), r < 0 && "bullets" !== S.params.paginationType && (r = n + r)) : r = "undefined" != typeof S.snapIndex ? S.snapIndex : S.activeIndex || 0, "bullets" === S.params.paginationType && S.bullets && S.bullets.length > 0 && (S.bullets.removeClass(S.params.bulletActiveClass), S.paginationContainer.length > 1 ? S.bullets.each(function () {
            a(this).index() === r && a(this).addClass(S.params.bulletActiveClass);
          }) : S.bullets.eq(r).addClass(S.params.bulletActiveClass)), "fraction" === S.params.paginationType && (S.paginationContainer.find("." + S.params.paginationCurrentClass).text(r + 1), S.paginationContainer.find("." + S.params.paginationTotalClass).text(n)), "progress" === S.params.paginationType) {
            var o = (r + 1) / n,
                l = o,
                p = 1;S.isHorizontal() || (p = o, l = 1), S.paginationContainer.find("." + S.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(S.params.speed);
          }"custom" === S.params.paginationType && S.params.paginationCustomRender && (S.paginationContainer.html(S.params.paginationCustomRender(S, r + 1, n)), S.emit("onPaginationRendered", S, S.paginationContainer[0]));
        }S.params.loop || (S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.isBeginning ? (S.prevButton.addClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.disable(S.prevButton)) : (S.prevButton.removeClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.enable(S.prevButton))), S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.isEnd ? (S.nextButton.addClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.disable(S.nextButton)) : (S.nextButton.removeClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.enable(S.nextButton))));
      }, S.updatePagination = function () {
        if (S.params.pagination && S.paginationContainer && S.paginationContainer.length > 0) {
          var e = "";if ("bullets" === S.params.paginationType) {
            for (var a = S.params.loop ? Math.ceil((S.slides.length - 2 * S.loopedSlides) / S.params.slidesPerGroup) : S.snapGrid.length, t = 0; t < a; t++) {
              e += S.params.paginationBulletRender ? S.params.paginationBulletRender(S, t, S.params.bulletClass) : "<" + S.params.paginationElement + ' class="' + S.params.bulletClass + '"></' + S.params.paginationElement + ">";
            }S.paginationContainer.html(e), S.bullets = S.paginationContainer.find("." + S.params.bulletClass), S.params.paginationClickable && S.params.a11y && S.a11y && S.a11y.initPagination();
          }"fraction" === S.params.paginationType && (e = S.params.paginationFractionRender ? S.params.paginationFractionRender(S, S.params.paginationCurrentClass, S.params.paginationTotalClass) : '<span class="' + S.params.paginationCurrentClass + '"></span> / <span class="' + S.params.paginationTotalClass + '"></span>', S.paginationContainer.html(e)), "progress" === S.params.paginationType && (e = S.params.paginationProgressRender ? S.params.paginationProgressRender(S, S.params.paginationProgressbarClass) : '<span class="' + S.params.paginationProgressbarClass + '"></span>', S.paginationContainer.html(e)), "custom" !== S.params.paginationType && S.emit("onPaginationRendered", S, S.paginationContainer[0]);
        }
      }, S.update = function (e) {
        function a() {
          S.rtl ? -S.translate : S.translate;s = Math.min(Math.max(S.translate, S.maxTranslate()), S.minTranslate()), S.setWrapperTranslate(s), S.updateActiveIndex(), S.updateClasses();
        }if (S.updateContainerSize(), S.updateSlidesSize(), S.updateProgress(), S.updatePagination(), S.updateClasses(), S.params.scrollbar && S.scrollbar && S.scrollbar.set(), e) {
          var t, s;S.controller && S.controller.spline && (S.controller.spline = void 0), S.params.freeMode ? (a(), S.params.autoHeight && S.updateAutoHeight()) : (t = ("auto" === S.params.slidesPerView || S.params.slidesPerView > 1) && S.isEnd && !S.params.centeredSlides ? S.slideTo(S.slides.length - 1, 0, !1, !0) : S.slideTo(S.activeIndex, 0, !1, !0), t || a());
        } else S.params.autoHeight && S.updateAutoHeight();
      }, S.onResize = function (e) {
        S.params.breakpoints && S.setBreakpoint();var a = S.params.allowSwipeToPrev,
            t = S.params.allowSwipeToNext;S.params.allowSwipeToPrev = S.params.allowSwipeToNext = !0, S.updateContainerSize(), S.updateSlidesSize(), ("auto" === S.params.slidesPerView || S.params.freeMode || e) && S.updatePagination(), S.params.scrollbar && S.scrollbar && S.scrollbar.set(), S.controller && S.controller.spline && (S.controller.spline = void 0);var s = !1;if (S.params.freeMode) {
          var i = Math.min(Math.max(S.translate, S.maxTranslate()), S.minTranslate());S.setWrapperTranslate(i), S.updateActiveIndex(), S.updateClasses(), S.params.autoHeight && S.updateAutoHeight();
        } else S.updateClasses(), s = ("auto" === S.params.slidesPerView || S.params.slidesPerView > 1) && S.isEnd && !S.params.centeredSlides ? S.slideTo(S.slides.length - 1, 0, !1, !0) : S.slideTo(S.activeIndex, 0, !1, !0);S.params.lazyLoading && !s && S.lazy && S.lazy.load(), S.params.allowSwipeToPrev = a, S.params.allowSwipeToNext = t;
      }, S.touchEventsDesktop = { start: "mousedown", move: "mousemove", end: "mouseup" }, window.navigator.pointerEnabled ? S.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled && (S.touchEventsDesktop = { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }), S.touchEvents = { start: S.support.touch || !S.params.simulateTouch ? "touchstart" : S.touchEventsDesktop.start, move: S.support.touch || !S.params.simulateTouch ? "touchmove" : S.touchEventsDesktop.move, end: S.support.touch || !S.params.simulateTouch ? "touchend" : S.touchEventsDesktop.end }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === S.params.touchEventsTarget ? S.container : S.wrapper).addClass("swiper-wp8-" + S.params.direction), S.initEvents = function (e) {
        var a = e ? "off" : "on",
            t = e ? "removeEventListener" : "addEventListener",
            s = "container" === S.params.touchEventsTarget ? S.container[0] : S.wrapper[0],
            r = S.support.touch ? s : document,
            n = !!S.params.nested;if (S.browser.ie) s[t](S.touchEvents.start, S.onTouchStart, !1), r[t](S.touchEvents.move, S.onTouchMove, n), r[t](S.touchEvents.end, S.onTouchEnd, !1);else {
          if (S.support.touch) {
            var o = !("touchstart" !== S.touchEvents.start || !S.support.passiveListener || !S.params.passiveListeners) && { passive: !0, capture: !1 };s[t](S.touchEvents.start, S.onTouchStart, o), s[t](S.touchEvents.move, S.onTouchMove, n), s[t](S.touchEvents.end, S.onTouchEnd, o);
          }(i.simulateTouch && !S.device.ios && !S.device.android || i.simulateTouch && !S.support.touch && S.device.ios) && (s[t]("mousedown", S.onTouchStart, !1), document[t]("mousemove", S.onTouchMove, n), document[t]("mouseup", S.onTouchEnd, !1));
        }window[t]("resize", S.onResize), S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.nextButton[a]("click", S.onClickNext), S.params.a11y && S.a11y && S.nextButton[a]("keydown", S.a11y.onEnterKey)), S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.prevButton[a]("click", S.onClickPrev), S.params.a11y && S.a11y && S.prevButton[a]("keydown", S.a11y.onEnterKey)), S.params.pagination && S.params.paginationClickable && (S.paginationContainer[a]("click", "." + S.params.bulletClass, S.onClickIndex), S.params.a11y && S.a11y && S.paginationContainer[a]("keydown", "." + S.params.bulletClass, S.a11y.onEnterKey)), (S.params.preventClicks || S.params.preventClicksPropagation) && s[t]("click", S.preventClicks, !0);
      }, S.attachEvents = function () {
        S.initEvents();
      }, S.detachEvents = function () {
        S.initEvents(!0);
      }, S.allowClick = !0, S.preventClicks = function (e) {
        S.allowClick || (S.params.preventClicks && e.preventDefault(), S.params.preventClicksPropagation && S.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }, S.onClickNext = function (e) {
        e.preventDefault(), S.isEnd && !S.params.loop || S.slideNext();
      }, S.onClickPrev = function (e) {
        e.preventDefault(), S.isBeginning && !S.params.loop || S.slidePrev();
      }, S.onClickIndex = function (e) {
        e.preventDefault();var t = a(this).index() * S.params.slidesPerGroup;S.params.loop && (t += S.loopedSlides), S.slideTo(t);
      }, S.updateClickedSlide = function (e) {
        var t = l(e, "." + S.params.slideClass),
            s = !1;if (t) for (var i = 0; i < S.slides.length; i++) {
          S.slides[i] === t && (s = !0);
        }if (!t || !s) return S.clickedSlide = void 0, void (S.clickedIndex = void 0);if (S.clickedSlide = t, S.clickedIndex = a(t).index(), S.params.slideToClickedSlide && void 0 !== S.clickedIndex && S.clickedIndex !== S.activeIndex) {
          var r,
              n = S.clickedIndex;if (S.params.loop) {
            if (S.animating) return;r = a(S.clickedSlide).attr("data-swiper-slide-index"), S.params.centeredSlides ? n < S.loopedSlides - S.params.slidesPerView / 2 || n > S.slides.length - S.loopedSlides + S.params.slidesPerView / 2 ? (S.fixLoop(), n = S.wrapper.children("." + S.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + S.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
              S.slideTo(n);
            }, 0)) : S.slideTo(n) : n > S.slides.length - S.params.slidesPerView ? (S.fixLoop(), n = S.wrapper.children("." + S.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + S.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
              S.slideTo(n);
            }, 0)) : S.slideTo(n);
          } else S.slideTo(n);
        }
      };var z,
          M,
          E,
          P,
          I,
          k,
          L,
          D,
          B,
          H,
          G = "input, select, textarea, button, video",
          X = Date.now(),
          Y = [];S.animating = !1, S.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };var A, O;S.onTouchStart = function (e) {
        if (e.originalEvent && (e = e.originalEvent), A = "touchstart" === e.type, A || !("which" in e) || 3 !== e.which) {
          if (S.params.noSwiping && l(e, "." + S.params.noSwipingClass)) return void (S.allowClick = !0);if (!S.params.swipeHandler || l(e, S.params.swipeHandler)) {
            var t = S.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                s = S.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;if (!(S.device.ios && S.params.iOSEdgeSwipeDetection && t <= S.params.iOSEdgeSwipeThreshold)) {
              if (z = !0, M = !1, E = !0, I = void 0, O = void 0, S.touches.startX = t, S.touches.startY = s, P = Date.now(), S.allowClick = !0, S.updateContainerSize(), S.swipeDirection = void 0, S.params.threshold > 0 && (D = !1), "touchstart" !== e.type) {
                var i = !0;a(e.target).is(G) && (i = !1), document.activeElement && a(document.activeElement).is(G) && document.activeElement.blur(), i && e.preventDefault();
              }S.emit("onTouchStart", S, e);
            }
          }
        }
      }, S.onTouchMove = function (e) {
        if (e.originalEvent && (e = e.originalEvent), !A || "mousemove" !== e.type) {
          if (e.preventedByNestedSwiper) return S.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void (S.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);if (S.params.onlyExternal) return S.allowClick = !1, void (z && (S.touches.startX = S.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, S.touches.startY = S.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, P = Date.now()));if (A && S.params.touchReleaseOnEdges && !S.params.loop) if (S.isHorizontal()) {
            if (S.touches.currentX < S.touches.startX && S.translate <= S.maxTranslate() || S.touches.currentX > S.touches.startX && S.translate >= S.minTranslate()) return;
          } else if (S.touches.currentY < S.touches.startY && S.translate <= S.maxTranslate() || S.touches.currentY > S.touches.startY && S.translate >= S.minTranslate()) return;if (A && document.activeElement && e.target === document.activeElement && a(e.target).is(G)) return M = !0, void (S.allowClick = !1);if (E && S.emit("onTouchMove", S, e), !(e.targetTouches && e.targetTouches.length > 1)) {
            if (S.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, S.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof I) {
              var t;S.isHorizontal() && S.touches.currentY === S.touches.startY || !S.isHorizontal() && S.touches.currentX !== S.touches.startX ? I = !1 : (t = 180 * Math.atan2(Math.abs(S.touches.currentY - S.touches.startY), Math.abs(S.touches.currentX - S.touches.startX)) / Math.PI, I = S.isHorizontal() ? t > S.params.touchAngle : 90 - t > S.params.touchAngle);
            }if (I && S.emit("onTouchMoveOpposite", S, e), "undefined" == typeof O && S.browser.ieTouch && (S.touches.currentX === S.touches.startX && S.touches.currentY === S.touches.startY || (O = !0)), z) {
              if (I) return void (z = !1);if (O || !S.browser.ieTouch) {
                S.allowClick = !1, S.emit("onSliderMove", S, e), e.preventDefault(), S.params.touchMoveStopPropagation && !S.params.nested && e.stopPropagation(), M || (i.loop && S.fixLoop(), L = S.getWrapperTranslate(), S.setWrapperTransition(0), S.animating && S.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), S.params.autoplay && S.autoplaying && (S.params.autoplayDisableOnInteraction ? S.stopAutoplay() : S.pauseAutoplay()), H = !1, !S.params.grabCursor || S.params.allowSwipeToNext !== !0 && S.params.allowSwipeToPrev !== !0 || S.setGrabCursor(!0)), M = !0;var s = S.touches.diff = S.isHorizontal() ? S.touches.currentX - S.touches.startX : S.touches.currentY - S.touches.startY;s *= S.params.touchRatio, S.rtl && (s = -s), S.swipeDirection = s > 0 ? "prev" : "next", k = s + L;var r = !0;if (s > 0 && k > S.minTranslate() ? (r = !1, S.params.resistance && (k = S.minTranslate() - 1 + Math.pow(-S.minTranslate() + L + s, S.params.resistanceRatio))) : s < 0 && k < S.maxTranslate() && (r = !1, S.params.resistance && (k = S.maxTranslate() + 1 - Math.pow(S.maxTranslate() - L - s, S.params.resistanceRatio))), r && (e.preventedByNestedSwiper = !0), !S.params.allowSwipeToNext && "next" === S.swipeDirection && k < L && (k = L), !S.params.allowSwipeToPrev && "prev" === S.swipeDirection && k > L && (k = L), S.params.threshold > 0) {
                  if (!(Math.abs(s) > S.params.threshold || D)) return void (k = L);if (!D) return D = !0, S.touches.startX = S.touches.currentX, S.touches.startY = S.touches.currentY, k = L, void (S.touches.diff = S.isHorizontal() ? S.touches.currentX - S.touches.startX : S.touches.currentY - S.touches.startY);
                }S.params.followFinger && ((S.params.freeMode || S.params.watchSlidesProgress) && S.updateActiveIndex(), S.params.freeMode && (0 === Y.length && Y.push({ position: S.touches[S.isHorizontal() ? "startX" : "startY"], time: P }), Y.push({ position: S.touches[S.isHorizontal() ? "currentX" : "currentY"], time: new window.Date().getTime() })), S.updateProgress(k), S.setWrapperTranslate(k));
              }
            }
          }
        }
      }, S.onTouchEnd = function (e) {
        if (e.originalEvent && (e = e.originalEvent), E && S.emit("onTouchEnd", S, e), E = !1, z) {
          S.params.grabCursor && M && z && (S.params.allowSwipeToNext === !0 || S.params.allowSwipeToPrev === !0) && S.setGrabCursor(!1);var t = Date.now(),
              s = t - P;if (S.allowClick && (S.updateClickedSlide(e), S.emit("onTap", S, e), s < 300 && t - X > 300 && (B && clearTimeout(B), B = setTimeout(function () {
            S && (S.params.paginationHide && S.paginationContainer.length > 0 && !a(e.target).hasClass(S.params.bulletClass) && S.paginationContainer.toggleClass(S.params.paginationHiddenClass), S.emit("onClick", S, e));
          }, 300)), s < 300 && t - X < 300 && (B && clearTimeout(B), S.emit("onDoubleTap", S, e))), X = Date.now(), setTimeout(function () {
            S && (S.allowClick = !0);
          }, 0), !z || !M || !S.swipeDirection || 0 === S.touches.diff || k === L) return void (z = M = !1);z = M = !1;var i;if (i = S.params.followFinger ? S.rtl ? S.translate : -S.translate : -k, S.params.freeMode) {
            if (i < -S.minTranslate()) return void S.slideTo(S.activeIndex);if (i > -S.maxTranslate()) return void (S.slides.length < S.snapGrid.length ? S.slideTo(S.snapGrid.length - 1) : S.slideTo(S.slides.length - 1));if (S.params.freeModeMomentum) {
              if (Y.length > 1) {
                var r = Y.pop(),
                    n = Y.pop(),
                    o = r.position - n.position,
                    l = r.time - n.time;S.velocity = o / l, S.velocity = S.velocity / 2, Math.abs(S.velocity) < S.params.freeModeMinimumVelocity && (S.velocity = 0), (l > 150 || new window.Date().getTime() - r.time > 300) && (S.velocity = 0);
              } else S.velocity = 0;S.velocity = S.velocity * S.params.freeModeMomentumVelocityRatio, Y.length = 0;var p = 1e3 * S.params.freeModeMomentumRatio,
                  d = S.velocity * p,
                  u = S.translate + d;S.rtl && (u = -u);var c,
                  m = !1,
                  h = 20 * Math.abs(S.velocity) * S.params.freeModeMomentumBounceRatio;if (u < S.maxTranslate()) S.params.freeModeMomentumBounce ? (u + S.maxTranslate() < -h && (u = S.maxTranslate() - h), c = S.maxTranslate(), m = !0, H = !0) : u = S.maxTranslate();else if (u > S.minTranslate()) S.params.freeModeMomentumBounce ? (u - S.minTranslate() > h && (u = S.minTranslate() + h), c = S.minTranslate(), m = !0, H = !0) : u = S.minTranslate();else if (S.params.freeModeSticky) {
                var g,
                    f = 0;for (f = 0; f < S.snapGrid.length; f += 1) {
                  if (S.snapGrid[f] > -u) {
                    g = f;break;
                  }
                }u = Math.abs(S.snapGrid[g] - u) < Math.abs(S.snapGrid[g - 1] - u) || "next" === S.swipeDirection ? S.snapGrid[g] : S.snapGrid[g - 1], S.rtl || (u = -u);
              }if (0 !== S.velocity) p = S.rtl ? Math.abs((-u - S.translate) / S.velocity) : Math.abs((u - S.translate) / S.velocity);else if (S.params.freeModeSticky) return void S.slideReset();S.params.freeModeMomentumBounce && m ? (S.updateProgress(c), S.setWrapperTransition(p), S.setWrapperTranslate(u), S.onTransitionStart(), S.animating = !0, S.wrapper.transitionEnd(function () {
                S && H && (S.emit("onMomentumBounce", S), S.setWrapperTransition(S.params.speed), S.setWrapperTranslate(c), S.wrapper.transitionEnd(function () {
                  S && S.onTransitionEnd();
                }));
              })) : S.velocity ? (S.updateProgress(u), S.setWrapperTransition(p), S.setWrapperTranslate(u), S.onTransitionStart(), S.animating || (S.animating = !0, S.wrapper.transitionEnd(function () {
                S && S.onTransitionEnd();
              }))) : S.updateProgress(u), S.updateActiveIndex();
            }return void ((!S.params.freeModeMomentum || s >= S.params.longSwipesMs) && (S.updateProgress(), S.updateActiveIndex()));
          }var v,
              w = 0,
              y = S.slidesSizesGrid[0];for (v = 0; v < S.slidesGrid.length; v += S.params.slidesPerGroup) {
            "undefined" != typeof S.slidesGrid[v + S.params.slidesPerGroup] ? i >= S.slidesGrid[v] && i < S.slidesGrid[v + S.params.slidesPerGroup] && (w = v, y = S.slidesGrid[v + S.params.slidesPerGroup] - S.slidesGrid[v]) : i >= S.slidesGrid[v] && (w = v, y = S.slidesGrid[S.slidesGrid.length - 1] - S.slidesGrid[S.slidesGrid.length - 2]);
          }var x = (i - S.slidesGrid[w]) / y;if (s > S.params.longSwipesMs) {
            if (!S.params.longSwipes) return void S.slideTo(S.activeIndex);"next" === S.swipeDirection && (x >= S.params.longSwipesRatio ? S.slideTo(w + S.params.slidesPerGroup) : S.slideTo(w)), "prev" === S.swipeDirection && (x > 1 - S.params.longSwipesRatio ? S.slideTo(w + S.params.slidesPerGroup) : S.slideTo(w));
          } else {
            if (!S.params.shortSwipes) return void S.slideTo(S.activeIndex);"next" === S.swipeDirection && S.slideTo(w + S.params.slidesPerGroup), "prev" === S.swipeDirection && S.slideTo(w);
          }
        }
      }, S._slideTo = function (e, a) {
        return S.slideTo(e, a, !0, !0);
      }, S.slideTo = function (e, a, t, s) {
        "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), e < 0 && (e = 0), S.snapIndex = Math.floor(e / S.params.slidesPerGroup), S.snapIndex >= S.snapGrid.length && (S.snapIndex = S.snapGrid.length - 1);var i = -S.snapGrid[S.snapIndex];if (S.params.autoplay && S.autoplaying && (s || !S.params.autoplayDisableOnInteraction ? S.pauseAutoplay(a) : S.stopAutoplay()), S.updateProgress(i), S.params.normalizeSlideIndex) for (var r = 0; r < S.slidesGrid.length; r++) {
          -Math.floor(100 * i) >= Math.floor(100 * S.slidesGrid[r]) && (e = r);
        }return !(!S.params.allowSwipeToNext && i < S.translate && i < S.minTranslate()) && !(!S.params.allowSwipeToPrev && i > S.translate && i > S.maxTranslate() && (S.activeIndex || 0) !== e) && ("undefined" == typeof a && (a = S.params.speed), S.previousIndex = S.activeIndex || 0, S.activeIndex = e, S.updateRealIndex(), S.rtl && -i === S.translate || !S.rtl && i === S.translate ? (S.params.autoHeight && S.updateAutoHeight(), S.updateClasses(), "slide" !== S.params.effect && S.setWrapperTranslate(i), !1) : (S.updateClasses(), S.onTransitionStart(t), 0 === a || S.browser.lteIE9 ? (S.setWrapperTranslate(i), S.setWrapperTransition(0), S.onTransitionEnd(t)) : (S.setWrapperTranslate(i), S.setWrapperTransition(a), S.animating || (S.animating = !0, S.wrapper.transitionEnd(function () {
          S && S.onTransitionEnd(t);
        }))), !0));
      }, S.onTransitionStart = function (e) {
        "undefined" == typeof e && (e = !0), S.params.autoHeight && S.updateAutoHeight(), S.lazy && S.lazy.onTransitionStart(), e && (S.emit("onTransitionStart", S), S.activeIndex !== S.previousIndex && (S.emit("onSlideChangeStart", S), S.activeIndex > S.previousIndex ? S.emit("onSlideNextStart", S) : S.emit("onSlidePrevStart", S)));
      }, S.onTransitionEnd = function (e) {
        S.animating = !1, S.setWrapperTransition(0), "undefined" == typeof e && (e = !0), S.lazy && S.lazy.onTransitionEnd(), e && (S.emit("onTransitionEnd", S), S.activeIndex !== S.previousIndex && (S.emit("onSlideChangeEnd", S), S.activeIndex > S.previousIndex ? S.emit("onSlideNextEnd", S) : S.emit("onSlidePrevEnd", S))), S.params.history && S.history && S.history.setHistory(S.params.history, S.activeIndex), S.params.hashnav && S.hashnav && S.hashnav.setHash();
      }, S.slideNext = function (e, a, t) {
        if (S.params.loop) {
          if (S.animating) return !1;S.fixLoop();S.container[0].clientLeft;return S.slideTo(S.activeIndex + S.params.slidesPerGroup, a, e, t);
        }return S.slideTo(S.activeIndex + S.params.slidesPerGroup, a, e, t);
      }, S._slideNext = function (e) {
        return S.slideNext(!0, e, !0);
      }, S.slidePrev = function (e, a, t) {
        if (S.params.loop) {
          if (S.animating) return !1;S.fixLoop();S.container[0].clientLeft;return S.slideTo(S.activeIndex - 1, a, e, t);
        }return S.slideTo(S.activeIndex - 1, a, e, t);
      }, S._slidePrev = function (e) {
        return S.slidePrev(!0, e, !0);
      }, S.slideReset = function (e, a, t) {
        return S.slideTo(S.activeIndex, a, e);
      }, S.disableTouchControl = function () {
        return S.params.onlyExternal = !0, !0;
      }, S.enableTouchControl = function () {
        return S.params.onlyExternal = !1, !0;
      }, S.setWrapperTransition = function (e, a) {
        S.wrapper.transition(e), "slide" !== S.params.effect && S.effects[S.params.effect] && S.effects[S.params.effect].setTransition(e), S.params.parallax && S.parallax && S.parallax.setTransition(e), S.params.scrollbar && S.scrollbar && S.scrollbar.setTransition(e), S.params.control && S.controller && S.controller.setTransition(e, a), S.emit("onSetTransition", S, e);
      }, S.setWrapperTranslate = function (e, a, t) {
        var s = 0,
            i = 0,
            r = 0;S.isHorizontal() ? s = S.rtl ? -e : e : i = e, S.params.roundLengths && (s = n(s), i = n(i)), S.params.virtualTranslate || (S.support.transforms3d ? S.wrapper.transform("translate3d(" + s + "px, " + i + "px, " + r + "px)") : S.wrapper.transform("translate(" + s + "px, " + i + "px)")), S.translate = S.isHorizontal() ? s : i;var o,
            l = S.maxTranslate() - S.minTranslate();o = 0 === l ? 0 : (e - S.minTranslate()) / l, o !== S.progress && S.updateProgress(e), a && S.updateActiveIndex(), "slide" !== S.params.effect && S.effects[S.params.effect] && S.effects[S.params.effect].setTranslate(S.translate), S.params.parallax && S.parallax && S.parallax.setTranslate(S.translate), S.params.scrollbar && S.scrollbar && S.scrollbar.setTranslate(S.translate), S.params.control && S.controller && S.controller.setTranslate(S.translate, t), S.emit("onSetTranslate", S, S.translate);
      }, S.getTranslate = function (e, a) {
        var t, s, i, r;return "undefined" == typeof a && (a = "x"), S.params.virtualTranslate ? S.rtl ? -S.translate : S.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = i.transform || i.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function (e) {
          return e.replace(",", ".");
        }).join(", ")), r = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = r.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (s = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), S.rtl && s && (s = -s), s || 0);
      }, S.getWrapperTranslate = function (e) {
        return "undefined" == typeof e && (e = S.isHorizontal() ? "x" : "y"), S.getTranslate(S.wrapper[0], e);
      }, S.observers = [], S.initObservers = function () {
        if (S.params.observeParents) for (var e = S.container.parents(), a = 0; a < e.length; a++) {
          p(e[a]);
        }p(S.container[0], { childList: !1 }), p(S.wrapper[0], { attributes: !1 });
      }, S.disconnectObservers = function () {
        for (var e = 0; e < S.observers.length; e++) {
          S.observers[e].disconnect();
        }S.observers = [];
      }, S.createLoop = function () {
        S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass).remove();var e = S.wrapper.children("." + S.params.slideClass);"auto" !== S.params.slidesPerView || S.params.loopedSlides || (S.params.loopedSlides = e.length), S.loopedSlides = parseInt(S.params.loopedSlides || S.params.slidesPerView, 10), S.loopedSlides = S.loopedSlides + S.params.loopAdditionalSlides, S.loopedSlides > e.length && (S.loopedSlides = e.length);var t,
            s = [],
            i = [];for (e.each(function (t, r) {
          var n = a(this);t < S.loopedSlides && i.push(r), t < e.length && t >= e.length - S.loopedSlides && s.push(r), n.attr("data-swiper-slide-index", t);
        }), t = 0; t < i.length; t++) {
          S.wrapper.append(a(i[t].cloneNode(!0)).addClass(S.params.slideDuplicateClass));
        }for (t = s.length - 1; t >= 0; t--) {
          S.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(S.params.slideDuplicateClass));
        }
      }, S.destroyLoop = function () {
        S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass).remove(), S.slides.removeAttr("data-swiper-slide-index");
      }, S.reLoop = function (e) {
        var a = S.activeIndex - S.loopedSlides;S.destroyLoop(), S.createLoop(), S.updateSlidesSize(), e && S.slideTo(a + S.loopedSlides, 0, !1);
      }, S.fixLoop = function () {
        var e;S.activeIndex < S.loopedSlides ? (e = S.slides.length - 3 * S.loopedSlides + S.activeIndex, e += S.loopedSlides, S.slideTo(e, 0, !1, !0)) : ("auto" === S.params.slidesPerView && S.activeIndex >= 2 * S.loopedSlides || S.activeIndex > S.slides.length - 2 * S.params.slidesPerView) && (e = -S.slides.length + S.activeIndex + S.loopedSlides, e += S.loopedSlides, S.slideTo(e, 0, !1, !0));
      }, S.appendSlide = function (e) {
        if (S.params.loop && S.destroyLoop(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) for (var a = 0; a < e.length; a++) {
          e[a] && S.wrapper.append(e[a]);
        } else S.wrapper.append(e);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0);
      }, S.prependSlide = function (e) {
        S.params.loop && S.destroyLoop();var a = S.activeIndex + 1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) {
          for (var t = 0; t < e.length; t++) {
            e[t] && S.wrapper.prepend(e[t]);
          }a = S.activeIndex + e.length;
        } else S.wrapper.prepend(e);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0), S.slideTo(a, 0, !1);
      }, S.removeSlide = function (e) {
        S.params.loop && (S.destroyLoop(), S.slides = S.wrapper.children("." + S.params.slideClass));var a,
            t = S.activeIndex;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) {
          for (var s = 0; s < e.length; s++) {
            a = e[s], S.slides[a] && S.slides.eq(a).remove(), a < t && t--;
          }t = Math.max(t, 0);
        } else a = e, S.slides[a] && S.slides.eq(a).remove(), a < t && t--, t = Math.max(t, 0);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0), S.params.loop ? S.slideTo(t + S.loopedSlides, 0, !1) : S.slideTo(t, 0, !1);
      }, S.removeAllSlides = function () {
        for (var e = [], a = 0; a < S.slides.length; a++) {
          e.push(a);
        }S.removeSlide(e);
      }, S.effects = { fade: { setTranslate: function setTranslate() {
            for (var e = 0; e < S.slides.length; e++) {
              var a = S.slides.eq(e),
                  t = a[0].swiperSlideOffset,
                  s = -t;S.params.virtualTranslate || (s -= S.translate);var i = 0;S.isHorizontal() || (i = s, s = 0);var r = S.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);a.css({ opacity: r }).transform("translate3d(" + s + "px, " + i + "px, 0px)");
            }
          }, setTransition: function setTransition(e) {
            if (S.slides.transition(e), S.params.virtualTranslate && 0 !== e) {
              var a = !1;S.slides.transitionEnd(function () {
                if (!a && S) {
                  a = !0, S.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) {
                    S.wrapper.trigger(e[t]);
                  }
                }
              });
            }
          } }, flip: { setTranslate: function setTranslate() {
            for (var e = 0; e < S.slides.length; e++) {
              var t = S.slides.eq(e),
                  s = t[0].progress;S.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));var i = t[0].swiperSlideOffset,
                  r = -180 * s,
                  n = r,
                  o = 0,
                  l = -i,
                  p = 0;if (S.isHorizontal() ? S.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(s)) + S.slides.length, S.params.flip.slideShadows) {
                var d = S.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                    u = S.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");0 === d.length && (d = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(u)), d.length && (d[0].style.opacity = Math.max(-s, 0)), u.length && (u[0].style.opacity = Math.max(s, 0));
              }t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
            }
          }, setTransition: function setTransition(e) {
            if (S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), S.params.virtualTranslate && 0 !== e) {
              var t = !1;S.slides.eq(S.activeIndex).transitionEnd(function () {
                if (!t && S && a(this).hasClass(S.params.slideActiveClass)) {
                  t = !0, S.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < e.length; s++) {
                    S.wrapper.trigger(e[s]);
                  }
                }
              });
            }
          } }, cube: { setTranslate: function setTranslate() {
            var e,
                t = 0;S.params.cube.shadow && (S.isHorizontal() ? (e = S.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), S.wrapper.append(e)), e.css({ height: S.width + "px" })) : (e = S.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), S.container.append(e))));for (var s = 0; s < S.slides.length; s++) {
              var i = S.slides.eq(s),
                  r = 90 * s,
                  n = Math.floor(r / 360);S.rtl && (r = -r, n = Math.floor(-r / 360));var o = Math.max(Math.min(i[0].progress, 1), -1),
                  l = 0,
                  p = 0,
                  d = 0;s % 4 === 0 ? (l = 4 * -n * S.size, d = 0) : (s - 1) % 4 === 0 ? (l = 0, d = 4 * -n * S.size) : (s - 2) % 4 === 0 ? (l = S.size + 4 * n * S.size, d = S.size) : (s - 3) % 4 === 0 && (l = -S.size, d = 3 * S.size + 4 * S.size * n), S.rtl && (l = -l), S.isHorizontal() || (p = l, l = 0);var u = "rotateX(" + (S.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (S.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";if (o <= 1 && o > -1 && (t = 90 * s + 90 * o, S.rtl && (t = 90 * -s - 90 * o)), i.transform(u), S.params.cube.slideShadows) {
                var c = S.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                    m = S.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), i.append(c)), 0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0));
              }
            }if (S.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + S.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + S.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + S.size / 2 + "px", "transform-origin": "50% 50% -" + S.size / 2 + "px" }), S.params.cube.shadow) if (S.isHorizontal()) e.transform("translate3d(0px, " + (S.width / 2 + S.params.cube.shadowOffset) + "px, " + -S.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + S.params.cube.shadowScale + ")");else {
              var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                  g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                  f = S.params.cube.shadowScale,
                  v = S.params.cube.shadowScale / g,
                  w = S.params.cube.shadowOffset;e.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (S.height / 2 + w) + "px, " + -S.height / 2 / v + "px) rotateX(-90deg)");
            }var y = S.isSafari || S.isUiWebView ? -S.size / 2 : 0;S.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (S.isHorizontal() ? 0 : t) + "deg) rotateY(" + (S.isHorizontal() ? -t : 0) + "deg)");
          }, setTransition: function setTransition(e) {
            S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), S.params.cube.shadow && !S.isHorizontal() && S.container.find(".swiper-cube-shadow").transition(e);
          } }, coverflow: { setTranslate: function setTranslate() {
            for (var e = S.translate, t = S.isHorizontal() ? -e + S.width / 2 : -e + S.height / 2, s = S.isHorizontal() ? S.params.coverflow.rotate : -S.params.coverflow.rotate, i = S.params.coverflow.depth, r = 0, n = S.slides.length; r < n; r++) {
              var o = S.slides.eq(r),
                  l = S.slidesSizesGrid[r],
                  p = o[0].swiperSlideOffset,
                  d = (t - p - l / 2) / l * S.params.coverflow.modifier,
                  u = S.isHorizontal() ? s * d : 0,
                  c = S.isHorizontal() ? 0 : s * d,
                  m = -i * Math.abs(d),
                  h = S.isHorizontal() ? 0 : S.params.coverflow.stretch * d,
                  g = S.isHorizontal() ? S.params.coverflow.stretch * d : 0;Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);var f = "translate3d(" + g + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";if (o.transform(f), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, S.params.coverflow.slideShadows) {
                var v = S.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                    w = S.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");0 === v.length && (v = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0);
              }
            }if (S.browser.ie) {
              var y = S.wrapper[0].style;y.perspectiveOrigin = t + "px 50%";
            }
          }, setTransition: function setTransition(e) {
            S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
          } } }, S.lazy = { initialImageLoaded: !1, loadImageInSlide: function loadImageInSlide(e, t) {
          if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== S.slides.length)) {
            var s = S.slides.eq(e),
                i = s.find("." + S.params.lazyLoadingClass + ":not(." + S.params.lazyStatusLoadedClass + "):not(." + S.params.lazyStatusLoadingClass + ")");!s.hasClass(S.params.lazyLoadingClass) || s.hasClass(S.params.lazyStatusLoadedClass) || s.hasClass(S.params.lazyStatusLoadingClass) || (i = i.add(s[0])), 0 !== i.length && i.each(function () {
              var e = a(this);e.addClass(S.params.lazyStatusLoadingClass);var i = e.attr("data-background"),
                  r = e.attr("data-src"),
                  n = e.attr("data-srcset"),
                  o = e.attr("data-sizes");S.loadImage(e[0], r || i, n, o, !1, function () {
                if (i ? (e.css("background-image", 'url("' + i + '")'), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), o && (e.attr("sizes", o), e.removeAttr("data-sizes")), r && (e.attr("src", r), e.removeAttr("data-src"))), e.addClass(S.params.lazyStatusLoadedClass).removeClass(S.params.lazyStatusLoadingClass), s.find("." + S.params.lazyPreloaderClass + ", ." + S.params.preloaderClass).remove(), S.params.loop && t) {
                  var a = s.attr("data-swiper-slide-index");if (s.hasClass(S.params.slideDuplicateClass)) {
                    var l = S.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + S.params.slideDuplicateClass + ")");S.lazy.loadImageInSlide(l.index(), !1);
                  } else {
                    var p = S.wrapper.children("." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');S.lazy.loadImageInSlide(p.index(), !1);
                  }
                }S.emit("onLazyImageReady", S, s[0], e[0]);
              }), S.emit("onLazyImageLoad", S, s[0], e[0]);
            });
          }
        }, load: function load() {
          var e,
              t = S.params.slidesPerView;if ("auto" === t && (t = 0), S.lazy.initialImageLoaded || (S.lazy.initialImageLoaded = !0), S.params.watchSlidesVisibility) S.wrapper.children("." + S.params.slideVisibleClass).each(function () {
            S.lazy.loadImageInSlide(a(this).index());
          });else if (t > 1) for (e = S.activeIndex; e < S.activeIndex + t; e++) {
            S.slides[e] && S.lazy.loadImageInSlide(e);
          } else S.lazy.loadImageInSlide(S.activeIndex);if (S.params.lazyLoadingInPrevNext) if (t > 1 || S.params.lazyLoadingInPrevNextAmount && S.params.lazyLoadingInPrevNextAmount > 1) {
            var s = S.params.lazyLoadingInPrevNextAmount,
                i = t,
                r = Math.min(S.activeIndex + i + Math.max(s, i), S.slides.length),
                n = Math.max(S.activeIndex - Math.max(i, s), 0);for (e = S.activeIndex + t; e < r; e++) {
              S.slides[e] && S.lazy.loadImageInSlide(e);
            }for (e = n; e < S.activeIndex; e++) {
              S.slides[e] && S.lazy.loadImageInSlide(e);
            }
          } else {
            var o = S.wrapper.children("." + S.params.slideNextClass);o.length > 0 && S.lazy.loadImageInSlide(o.index());var l = S.wrapper.children("." + S.params.slidePrevClass);l.length > 0 && S.lazy.loadImageInSlide(l.index());
          }
        }, onTransitionStart: function onTransitionStart() {
          S.params.lazyLoading && (S.params.lazyLoadingOnTransitionStart || !S.params.lazyLoadingOnTransitionStart && !S.lazy.initialImageLoaded) && S.lazy.load();
        }, onTransitionEnd: function onTransitionEnd() {
          S.params.lazyLoading && !S.params.lazyLoadingOnTransitionStart && S.lazy.load();
        } }, S.scrollbar = { isTouched: !1, setDragPosition: function setDragPosition(e) {
          var a = S.scrollbar,
              t = S.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
              s = t - a.track.offset()[S.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
              i = -S.minTranslate() * a.moveDivider,
              r = -S.maxTranslate() * a.moveDivider;s < i ? s = i : s > r && (s = r), s = -s / a.moveDivider, S.updateProgress(s), S.setWrapperTranslate(s, !0);
        }, dragStart: function dragStart(e) {
          var a = S.scrollbar;a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), S.params.scrollbarHide && a.track.css("opacity", 1), S.wrapper.transition(100), a.drag.transition(100), S.emit("onScrollbarDragStart", S);
        }, dragMove: function dragMove(e) {
          var a = S.scrollbar;a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), S.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), S.emit("onScrollbarDragMove", S));
        }, dragEnd: function dragEnd(e) {
          var a = S.scrollbar;a.isTouched && (a.isTouched = !1, S.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
            a.track.css("opacity", 0), a.track.transition(400);
          }, 1e3)), S.emit("onScrollbarDragEnd", S), S.params.scrollbarSnapOnRelease && S.slideReset());
        }, draggableEvents: function () {
          return S.params.simulateTouch !== !1 || S.support.touch ? S.touchEvents : S.touchEventsDesktop;
        }(), enableDraggable: function enableDraggable() {
          var e = S.scrollbar,
              t = S.support.touch ? e.track : document;a(e.track).on(e.draggableEvents.start, e.dragStart), a(t).on(e.draggableEvents.move, e.dragMove), a(t).on(e.draggableEvents.end, e.dragEnd);
        }, disableDraggable: function disableDraggable() {
          var e = S.scrollbar,
              t = S.support.touch ? e.track : document;a(e.track).off(S.draggableEvents.start, e.dragStart), a(t).off(S.draggableEvents.move, e.dragMove), a(t).off(S.draggableEvents.end, e.dragEnd);
        }, set: function set() {
          if (S.params.scrollbar) {
            var e = S.scrollbar;e.track = a(S.params.scrollbar), S.params.uniqueNavElements && "string" == typeof S.params.scrollbar && e.track.length > 1 && 1 === S.container.find(S.params.scrollbar).length && (e.track = S.container.find(S.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = S.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = S.size / S.virtualSize, e.moveDivider = e.divider * (e.trackSize / S.size), e.dragSize = e.trackSize * e.divider, S.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", S.params.scrollbarHide && (e.track[0].style.opacity = 0);
          }
        }, setTranslate: function setTranslate() {
          if (S.params.scrollbar) {
            var e,
                a = S.scrollbar,
                t = (S.translate || 0, a.dragSize);e = (a.trackSize - a.dragSize) * S.progress, S.rtl && S.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), S.isHorizontal() ? (S.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (S.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), S.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
              a.track[0].style.opacity = 0, a.track.transition(400);
            }, 1e3));
          }
        }, setTransition: function setTransition(e) {
          S.params.scrollbar && S.scrollbar.drag.transition(e);
        } }, S.controller = { LinearSpline: function LinearSpline(e, a) {
          this.x = e, this.y = a, this.lastIndex = e.length - 1;var t, s;this.x.length;this.interpolate = function (e) {
            return e ? (s = i(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0;
          };var i = function () {
            var e, a, t;return function (s, i) {
              for (a = -1, e = s.length; e - a > 1;) {
                s[t = e + a >> 1] <= i ? a = t : e = t;
              }return e;
            };
          }();
        }, getInterpolateFunction: function getInterpolateFunction(e) {
          S.controller.spline || (S.controller.spline = S.params.loop ? new S.controller.LinearSpline(S.slidesGrid, e.slidesGrid) : new S.controller.LinearSpline(S.snapGrid, e.snapGrid));
        }, setTranslate: function setTranslate(e, a) {
          function s(a) {
            e = a.rtl && "horizontal" === a.params.direction ? -S.translate : S.translate, "slide" === S.params.controlBy && (S.controller.getInterpolateFunction(a), r = -S.controller.spline.interpolate(-e)), r && "container" !== S.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (S.maxTranslate() - S.minTranslate()), r = (e - S.minTranslate()) * i + a.minTranslate()), S.params.controlInverse && (r = a.maxTranslate() - r), a.updateProgress(r), a.setWrapperTranslate(r, !1, S), a.updateActiveIndex();
          }var i,
              r,
              n = S.params.control;if (S.isArray(n)) for (var o = 0; o < n.length; o++) {
            n[o] !== a && n[o] instanceof t && s(n[o]);
          } else n instanceof t && a !== n && s(n);
        }, setTransition: function setTransition(e, a) {
          function s(a) {
            a.setWrapperTransition(e, S), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
              r && (a.params.loop && "slide" === S.params.controlBy && a.fixLoop(), a.onTransitionEnd());
            }));
          }var i,
              r = S.params.control;if (S.isArray(r)) for (i = 0; i < r.length; i++) {
            r[i] !== a && r[i] instanceof t && s(r[i]);
          } else r instanceof t && a !== r && s(r);
        } }, S.hashnav = { onHashCange: function onHashCange(e, a) {
          var t = document.location.hash.replace("#", ""),
              s = S.slides.eq(S.activeIndex).attr("data-hash");t !== s && S.slideTo(S.wrapper.children("." + S.params.slideClass + '[data-hash="' + t + '"]').index());
        }, attachEvents: function attachEvents(e) {
          var t = e ? "off" : "on";a(window)[t]("hashchange", S.hashnav.onHashCange);
        }, setHash: function setHash() {
          if (S.hashnav.initialized && S.params.hashnav) if (S.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + S.slides.eq(S.activeIndex).attr("data-hash") || "");else {
            var e = S.slides.eq(S.activeIndex),
                a = e.attr("data-hash") || e.attr("data-history");document.location.hash = a || "";
          }
        }, init: function init() {
          if (S.params.hashnav && !S.params.history) {
            S.hashnav.initialized = !0;var e = document.location.hash.replace("#", "");if (e) {
              for (var a = 0, t = 0, s = S.slides.length; t < s; t++) {
                var i = S.slides.eq(t),
                    r = i.attr("data-hash") || i.attr("data-history");if (r === e && !i.hasClass(S.params.slideDuplicateClass)) {
                  var n = i.index();S.slideTo(n, a, S.params.runCallbacksOnInit, !0);
                }
              }S.params.hashnavWatchState && S.hashnav.attachEvents();
            }
          }
        }, destroy: function destroy() {
          S.params.hashnavWatchState && S.hashnav.attachEvents(!0);
        } }, S.history = { init: function init() {
          if (S.params.history) {
            if (!window.history || !window.history.pushState) return S.params.history = !1, void (S.params.hashnav = !0);S.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, S.params.runCallbacksOnInit), S.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
          }
        }, setHistoryPopState: function setHistoryPopState() {
          S.history.paths = S.history.getPathValues(), S.history.scrollToSlide(S.params.speed, S.history.paths.value, !1);
        }, getPathValues: function getPathValues() {
          var e = window.location.pathname.slice(1).split("/"),
              a = e.length,
              t = e[a - 2],
              s = e[a - 1];return { key: t, value: s };
        }, setHistory: function setHistory(e, a) {
          if (S.history.initialized && S.params.history) {
            var t = S.slides.eq(a),
                s = this.slugify(t.attr("data-history"));window.location.pathname.includes(e) || (s = e + "/" + s), S.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s);
          }
        }, slugify: function slugify(e) {
          return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        }, scrollToSlide: function scrollToSlide(e, a, t) {
          if (a) for (var s = 0, i = S.slides.length; s < i; s++) {
            var r = S.slides.eq(s),
                n = this.slugify(r.attr("data-history"));if (n === a && !r.hasClass(S.params.slideDuplicateClass)) {
              var o = r.index();S.slideTo(o, e, t);
            }
          } else S.slideTo(0, e, t);
        } }, S.disableKeyboardControl = function () {
        S.params.keyboardControl = !1, a(document).off("keydown", d);
      }, S.enableKeyboardControl = function () {
        S.params.keyboardControl = !0, a(document).on("keydown", d);
      }, S.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }, S.params.mousewheelControl && (S.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : u() ? "wheel" : "mousewheel"), S.disableMousewheelControl = function () {
        if (!S.mousewheel.event) return !1;var e = S.container;return "container" !== S.params.mousewheelEventsTarged && (e = a(S.params.mousewheelEventsTarged)), e.off(S.mousewheel.event, c), !0;
      }, S.enableMousewheelControl = function () {
        if (!S.mousewheel.event) return !1;var e = S.container;return "container" !== S.params.mousewheelEventsTarged && (e = a(S.params.mousewheelEventsTarged)), e.on(S.mousewheel.event, c), !0;
      }, S.parallax = { setTranslate: function setTranslate() {
          S.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            h(this, S.progress);
          }), S.slides.each(function () {
            var e = a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              var a = Math.min(Math.max(e[0].progress, -1), 1);h(this, a);
            });
          });
        }, setTransition: function setTransition(e) {
          "undefined" == typeof e && (e = S.params.speed), S.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            var t = a(this),
                s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;0 === e && (s = 0), t.transition(s);
          });
        } }, S.zoom = { scale: 1, currentScale: 1, isScaling: !1, gesture: { slide: void 0, slideWidth: void 0, slideHeight: void 0, image: void 0, imageWrap: void 0, zoomMax: S.params.zoomMax }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 }, getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
          if (e.targetTouches.length < 2) return 1;var a = e.targetTouches[0].pageX,
              t = e.targetTouches[0].pageY,
              s = e.targetTouches[1].pageX,
              i = e.targetTouches[1].pageY,
              r = Math.sqrt(Math.pow(s - a, 2) + Math.pow(i - t, 2));return r;
        }, onGestureStart: function onGestureStart(e) {
          var t = S.zoom;if (!S.support.gestures) {
            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;t.gesture.scaleStart = t.getDistanceBetweenTouches(e);
          }return t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = a(this), 0 === t.gesture.slide.length && (t.gesture.slide = S.slides.eq(S.activeIndex)), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + S.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || S.params.zoomMax, 0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0), void (t.isScaling = !0)) : void (t.gesture.image = void 0);
        }, onGestureChange: function onGestureChange(e) {
          var a = S.zoom;if (!S.support.gestures) {
            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;a.gesture.scaleMove = a.getDistanceBetweenTouches(e);
          }a.gesture.image && 0 !== a.gesture.image.length && (S.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)), a.scale < S.params.zoomMin && (a.scale = S.params.zoomMin + 1 - Math.pow(S.params.zoomMin - a.scale + 1, .5)), a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
        }, onGestureEnd: function onGestureEnd(e) {
          var a = S.zoom;!S.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), S.params.zoomMin), a.gesture.image.transition(S.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0));
        }, onTouchStart: function onTouchStart(e, a) {
          var t = e.zoom;t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY));
        }, onTouchMove: function onTouchMove(e) {
          var a = S.zoom;if (a.gesture.image && 0 !== a.gesture.image.length && (S.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
            a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = S.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = S.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0));var t = a.image.width * a.scale,
                s = a.image.height * a.scale;if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
              if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                if (S.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void (a.image.isTouched = !1);if (!S.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void (a.image.isTouched = !1);
              }e.preventDefault(), e.stopPropagation(), a.image.isMoved = !0, a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX, a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY, a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)), a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)), a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)), a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)), a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x), a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y), a.velocity.prevTime || (a.velocity.prevTime = Date.now()), a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2, a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2, Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0), Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0), a.velocity.prevPositionX = a.image.touchesCurrent.x, a.velocity.prevPositionY = a.image.touchesCurrent.y, a.velocity.prevTime = Date.now(), a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)");
            }
          }
        }, onTouchEnd: function onTouchEnd(e, a) {
          var t = e.zoom;if (t.gesture.image && 0 !== t.gesture.image.length) {
            if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1, void (t.image.isMoved = !1);t.image.isTouched = !1, t.image.isMoved = !1;var s = 300,
                i = 300,
                r = t.velocity.x * s,
                n = t.image.currentX + r,
                o = t.velocity.y * i,
                l = t.image.currentY + o;0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)), 0 !== t.velocity.y && (i = Math.abs((l - t.image.currentY) / t.velocity.y));var p = Math.max(s, i);t.image.currentX = n, t.image.currentY = l;var d = t.image.width * t.scale,
                u = t.image.height * t.scale;t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0), t.image.maxY = -t.image.minY, t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX), t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY), t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)");
          }
        }, onTransitionEnd: function onTransitionEnd(e) {
          var a = e.zoom;a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"), a.gesture.imageWrap.transform("translate3d(0,0,0)"), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1);
        }, toggleZoom: function toggleZoom(e, t) {
          var s = e.zoom;if (s.gesture.slide || (s.gesture.slide = e.clickedSlide ? a(e.clickedSlide) : e.slides.eq(e.activeIndex), s.gesture.image = s.gesture.slide.find("img, svg, canvas"), s.gesture.imageWrap = s.gesture.image.parent("." + e.params.zoomContainerClass)), s.gesture.image && 0 !== s.gesture.image.length) {
            var i, r, n, o, l, p, d, u, c, m, h, g, f, v, w, y, x, T;"undefined" == typeof s.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = s.image.touchesStart.x, r = s.image.touchesStart.y), s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1, s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, t ? (x = s.gesture.slide[0].offsetWidth, T = s.gesture.slide[0].offsetHeight, n = s.gesture.slide.offset().left, o = s.gesture.slide.offset().top, l = n + x / 2 - i, p = o + T / 2 - r, c = s.gesture.image[0].offsetWidth, m = s.gesture.image[0].offsetHeight, h = c * s.scale, g = m * s.scale, f = Math.min(x / 2 - h / 2, 0), v = Math.min(T / 2 - g / 2, 0), w = -f, y = -v, d = l * s.scale, u = p * s.scale, d < f && (d = f), d > w && (d = w), u < v && (u = v), u > y && (u = y)) : (d = 0, u = 0), s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"));
          }
        }, attachEvents: function attachEvents(e) {
          var t = e ? "off" : "on";if (S.params.zoom) {
            var s = (S.slides, !("touchstart" !== S.touchEvents.start || !S.support.passiveListener || !S.params.passiveListeners) && { passive: !0, capture: !1 });S.support.gestures ? (S.slides[t]("gesturestart", S.zoom.onGestureStart, s), S.slides[t]("gesturechange", S.zoom.onGestureChange, s), S.slides[t]("gestureend", S.zoom.onGestureEnd, s)) : "touchstart" === S.touchEvents.start && (S.slides[t](S.touchEvents.start, S.zoom.onGestureStart, s), S.slides[t](S.touchEvents.move, S.zoom.onGestureChange, s), S.slides[t](S.touchEvents.end, S.zoom.onGestureEnd, s)), S[t]("touchStart", S.zoom.onTouchStart), S.slides.each(function (e, s) {
              a(s).find("." + S.params.zoomContainerClass).length > 0 && a(s)[t](S.touchEvents.move, S.zoom.onTouchMove);
            }), S[t]("touchEnd", S.zoom.onTouchEnd), S[t]("transitionEnd", S.zoom.onTransitionEnd), S.params.zoomToggle && S.on("doubleTap", S.zoom.toggleZoom);
          }
        }, init: function init() {
          S.zoom.attachEvents();
        }, destroy: function destroy() {
          S.zoom.attachEvents(!0);
        } }, S._plugins = [];for (var N in S.plugins) {
        var W = S.plugins[N](S, S.params[N]);W && S._plugins.push(W);
      }return S.callPlugins = function (e) {
        for (var a = 0; a < S._plugins.length; a++) {
          e in S._plugins[a] && S._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
      }, S.emitterEventListeners = {}, S.emit = function (e) {
        S.params[e] && S.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);var a;if (S.emitterEventListeners[e]) for (a = 0; a < S.emitterEventListeners[e].length; a++) {
          S.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }S.callPlugins && S.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      }, S.on = function (e, a) {
        return e = g(e), S.emitterEventListeners[e] || (S.emitterEventListeners[e] = []), S.emitterEventListeners[e].push(a), S;
      }, S.off = function (e, a) {
        var t;if (e = g(e), "undefined" == typeof a) return S.emitterEventListeners[e] = [], S;if (S.emitterEventListeners[e] && 0 !== S.emitterEventListeners[e].length) {
          for (t = 0; t < S.emitterEventListeners[e].length; t++) {
            S.emitterEventListeners[e][t] === a && S.emitterEventListeners[e].splice(t, 1);
          }return S;
        }
      }, S.once = function (e, a) {
        e = g(e);var t = function t() {
          a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), S.off(e, t);
        };return S.on(e, t), S;
      }, S.a11y = { makeFocusable: function makeFocusable(e) {
          return e.attr("tabIndex", "0"), e;
        }, addRole: function addRole(e, a) {
          return e.attr("role", a), e;
        }, addLabel: function addLabel(e, a) {
          return e.attr("aria-label", a), e;
        }, disable: function disable(e) {
          return e.attr("aria-disabled", !0), e;
        }, enable: function enable(e) {
          return e.attr("aria-disabled", !1), e;
        }, onEnterKey: function onEnterKey(e) {
          13 === e.keyCode && (a(e.target).is(S.params.nextButton) ? (S.onClickNext(e), S.isEnd ? S.a11y.notify(S.params.lastSlideMessage) : S.a11y.notify(S.params.nextSlideMessage)) : a(e.target).is(S.params.prevButton) && (S.onClickPrev(e), S.isBeginning ? S.a11y.notify(S.params.firstSlideMessage) : S.a11y.notify(S.params.prevSlideMessage)), a(e.target).is("." + S.params.bulletClass) && a(e.target)[0].click());
        }, liveRegion: a('<span class="' + S.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'), notify: function notify(e) {
          var a = S.a11y.liveRegion;0 !== a.length && (a.html(""), a.html(e));
        }, init: function init() {
          S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.a11y.makeFocusable(S.nextButton), S.a11y.addRole(S.nextButton, "button"), S.a11y.addLabel(S.nextButton, S.params.nextSlideMessage)), S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.a11y.makeFocusable(S.prevButton), S.a11y.addRole(S.prevButton, "button"), S.a11y.addLabel(S.prevButton, S.params.prevSlideMessage)), a(S.container).append(S.a11y.liveRegion);
        }, initPagination: function initPagination() {
          S.params.pagination && S.params.paginationClickable && S.bullets && S.bullets.length && S.bullets.each(function () {
            var e = a(this);S.a11y.makeFocusable(e), S.a11y.addRole(e, "button"), S.a11y.addLabel(e, S.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
          });
        }, destroy: function destroy() {
          S.a11y.liveRegion && S.a11y.liveRegion.length > 0 && S.a11y.liveRegion.remove();
        } }, S.init = function () {
        S.params.loop && S.createLoop(), S.updateContainerSize(), S.updateSlidesSize(), S.updatePagination(), S.params.scrollbar && S.scrollbar && (S.scrollbar.set(), S.params.scrollbarDraggable && S.scrollbar.enableDraggable()), "slide" !== S.params.effect && S.effects[S.params.effect] && (S.params.loop || S.updateProgress(), S.effects[S.params.effect].setTranslate()), S.params.loop ? S.slideTo(S.params.initialSlide + S.loopedSlides, 0, S.params.runCallbacksOnInit) : (S.slideTo(S.params.initialSlide, 0, S.params.runCallbacksOnInit), 0 === S.params.initialSlide && (S.parallax && S.params.parallax && S.parallax.setTranslate(), S.lazy && S.params.lazyLoading && (S.lazy.load(), S.lazy.initialImageLoaded = !0))), S.attachEvents(), S.params.observer && S.support.observer && S.initObservers(), S.params.preloadImages && !S.params.lazyLoading && S.preloadImages(), S.params.zoom && S.zoom && S.zoom.init(), S.params.autoplay && S.startAutoplay(), S.params.keyboardControl && S.enableKeyboardControl && S.enableKeyboardControl(), S.params.mousewheelControl && S.enableMousewheelControl && S.enableMousewheelControl(), S.params.hashnavReplaceState && (S.params.replaceState = S.params.hashnavReplaceState), S.params.history && S.history && S.history.init(), S.params.hashnav && S.hashnav && S.hashnav.init(), S.params.a11y && S.a11y && S.a11y.init(), S.emit("onInit", S);
      }, S.cleanupStyles = function () {
        S.container.removeClass(S.classNames.join(" ")).removeAttr("style"), S.wrapper.removeAttr("style"), S.slides && S.slides.length && S.slides.removeClass([S.params.slideVisibleClass, S.params.slideActiveClass, S.params.slideNextClass, S.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), S.paginationContainer && S.paginationContainer.length && S.paginationContainer.removeClass(S.params.paginationHiddenClass), S.bullets && S.bullets.length && S.bullets.removeClass(S.params.bulletActiveClass), S.params.prevButton && a(S.params.prevButton).removeClass(S.params.buttonDisabledClass), S.params.nextButton && a(S.params.nextButton).removeClass(S.params.buttonDisabledClass), S.params.scrollbar && S.scrollbar && (S.scrollbar.track && S.scrollbar.track.length && S.scrollbar.track.removeAttr("style"), S.scrollbar.drag && S.scrollbar.drag.length && S.scrollbar.drag.removeAttr("style"));
      }, S.destroy = function (e, a) {
        S.detachEvents(), S.stopAutoplay(), S.params.scrollbar && S.scrollbar && S.params.scrollbarDraggable && S.scrollbar.disableDraggable(), S.params.loop && S.destroyLoop(), a && S.cleanupStyles(), S.disconnectObservers(), S.params.zoom && S.zoom && S.zoom.destroy(), S.params.keyboardControl && S.disableKeyboardControl && S.disableKeyboardControl(), S.params.mousewheelControl && S.disableMousewheelControl && S.disableMousewheelControl(), S.params.a11y && S.a11y && S.a11y.destroy(), S.params.history && !S.params.replaceState && window.removeEventListener("popstate", S.history.setHistoryPopState), S.params.hashnav && S.hashnav && S.hashnav.destroy(), S.emit("onDestroy"), e !== !1 && (S = null);
      }, S.init(), S;
    }
  };t.prototype = { isSafari: function () {
      var e = navigator.userAgent.toLowerCase();return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
    }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), isArray: function isArray(e) {
      return "[object Array]" === Object.prototype.toString.apply(e);
    }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1, lteIE9: function () {
        var e = document.createElement("div");return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length;
      }() }, device: function () {
      var e = navigator.userAgent,
          a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          t = e.match(/(iPad).*OS\s([\d_]+)/),
          s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          i = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);return { ios: t || i || s, android: a };
    }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
      }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
        var e = document.createElement("div").style;return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
      }(), flexbox: function () {
        for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++) {
          if (a[t] in e) return !0;
        }
      }(), observer: function () {
        return "MutationObserver" in window || "WebkitMutationObserver" in window;
      }(), passiveListener: function () {
        var e = !1;try {
          var a = Object.defineProperty({}, "passive", { get: function get() {
              e = !0;
            } });window.addEventListener("testPassiveListener", null, a);
        } catch (e) {}return e;
      }(), gestures: function () {
        return "ongesturestart" in window;
      }() }, plugins: {} };for (var s = function () {
    var e = function e(_e) {
      var a = this,
          t = 0;for (t = 0; t < _e.length; t++) {
        a[t] = _e[t];
      }return a.length = _e.length, this;
    },
        a = function a(_a, t) {
      var s = [],
          i = 0;if (_a && !t && _a instanceof e) return _a;if (_a) if ("string" == typeof _a) {
        var r,
            n,
            o = _a.trim();if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
          var l = "div";for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = _a, i = 0; i < n.childNodes.length; i++) {
            s.push(n.childNodes[i]);
          }
        } else for (r = t || "#" !== _a[0] || _a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(_a) : [document.getElementById(_a.split("#")[1])], i = 0; i < r.length; i++) {
          r[i] && s.push(r[i]);
        }
      } else if (_a.nodeType || _a === window || _a === document) s.push(_a);else if (_a.length > 0 && _a[0].nodeType) for (i = 0; i < _a.length; i++) {
        s.push(_a[i]);
      }return new e(s);
    };return e.prototype = { addClass: function addClass(e) {
        if ("undefined" == typeof e) return this;for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.add(a[t]);
          }
        }return this;
      }, removeClass: function removeClass(e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.remove(a[t]);
          }
        }return this;
      }, hasClass: function hasClass(e) {
        return !!this[0] && this[0].classList.contains(e);
      }, toggleClass: function toggleClass(e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.toggle(a[t]);
          }
        }return this;
      }, attr: function attr(e, a) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var t = 0; t < this.length; t++) {
          if (2 === arguments.length) this[t].setAttribute(e, a);else for (var s in e) {
            this[t][s] = e[s], this[t].setAttribute(s, e[s]);
          }
        }return this;
      }, removeAttr: function removeAttr(e) {
        for (var a = 0; a < this.length; a++) {
          this[a].removeAttribute(e);
        }return this;
      }, data: function data(e, a) {
        if ("undefined" != typeof a) {
          for (var t = 0; t < this.length; t++) {
            var s = this[t];s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = a;
          }return this;
        }if (this[0]) {
          var i = this[0].getAttribute("data-" + e);return i ? i : this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[e] : void 0;
        }
      }, transform: function transform(e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
        }return this;
      }, transition: function transition(e) {
        "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
        }return this;
      }, on: function on(e, t, s, i) {
        function r(e) {
          var i = e.target;if (a(i).is(t)) s.call(i, e);else for (var r = a(i).parents(), n = 0; n < r.length; n++) {
            a(r[n]).is(t) && s.call(r[n], e);
          }
        }var n,
            o,
            l = e.split(" ");for (n = 0; n < this.length; n++) {
          if ("function" == typeof t || t === !1) for ("function" == typeof t && (s = arguments[1], i = arguments[2] || !1), o = 0; o < l.length; o++) {
            this[n].addEventListener(l[o], s, i);
          } else for (o = 0; o < l.length; o++) {
            this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({ listener: s, liveListener: r }), this[n].addEventListener(l[o], r, i);
          }
        }return this;
      }, off: function off(e, a, t, s) {
        for (var i = e.split(" "), r = 0; r < i.length; r++) {
          for (var n = 0; n < this.length; n++) {
            if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], s = arguments[2] || !1), this[n].removeEventListener(i[r], t, s);else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) {
              this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[r], this[n].dom7LiveListeners[o].liveListener, s);
            }
          }
        }return this;
      }, once: function once(e, a, t, s) {
        function i(n) {
          t(n), r.off(e, a, i, s);
        }var r = this;"function" == typeof a && (a = !1, t = arguments[1], s = arguments[2]), r.on(e, a, i, s);
      }, trigger: function trigger(e, a) {
        for (var t = 0; t < this.length; t++) {
          var s;try {
            s = new window.CustomEvent(e, { detail: a, bubbles: !0, cancelable: !0 });
          } catch (t) {
            s = document.createEvent("Event"), s.initEvent(e, !0, !0), s.detail = a;
          }this[t].dispatchEvent(s);
        }return this;
      }, transitionEnd: function transitionEnd(e) {
        function a(r) {
          if (r.target === this) for (e.call(this, r), t = 0; t < s.length; t++) {
            i.off(s[t], a);
          }
        }var t,
            s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            i = this;if (e) for (t = 0; t < s.length; t++) {
          i.on(s[t], a);
        }return this;
      }, width: function width() {
        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
      }, outerWidth: function outerWidth(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
      }, height: function height() {
        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
      }, outerHeight: function outerHeight(e) {
        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
      }, offset: function offset() {
        if (this.length > 0) {
          var e = this[0],
              a = e.getBoundingClientRect(),
              t = document.body,
              s = e.clientTop || t.clientTop || 0,
              i = e.clientLeft || t.clientLeft || 0,
              r = window.pageYOffset || e.scrollTop,
              n = window.pageXOffset || e.scrollLeft;return { top: a.top + r - s, left: a.left + n - i };
        }return null;
      }, css: function css(e, a) {
        var t;if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (t = 0; t < this.length; t++) {
              for (var s in e) {
                this[t].style[s] = e[s];
              }
            }return this;
          }if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
        }if (2 === arguments.length && "string" == typeof e) {
          for (t = 0; t < this.length; t++) {
            this[t].style[e] = a;
          }return this;
        }return this;
      }, each: function each(e) {
        for (var a = 0; a < this.length; a++) {
          e.call(this[a], a, this[a]);
        }return this;
      }, html: function html(e) {
        if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;for (var a = 0; a < this.length; a++) {
          this[a].innerHTML = e;
        }return this;
      }, text: function text(e) {
        if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;for (var a = 0; a < this.length; a++) {
          this[a].textContent = e;
        }return this;
      }, is: function is(t) {
        if (!this[0]) return !1;var s, i;if ("string" == typeof t) {
          var r = this[0];if (r === document) return t === document;if (r === window) return t === window;if (r.matches) return r.matches(t);if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);if (r.mozMatchesSelector) return r.mozMatchesSelector(t);if (r.msMatchesSelector) return r.msMatchesSelector(t);for (s = a(t), i = 0; i < s.length; i++) {
            if (s[i] === this[0]) return !0;
          }return !1;
        }if (t === document) return this[0] === document;if (t === window) return this[0] === window;if (t.nodeType || t instanceof e) {
          for (s = t.nodeType ? [t] : t, i = 0; i < s.length; i++) {
            if (s[i] === this[0]) return !0;
          }return !1;
        }return !1;
      }, index: function index() {
        if (this[0]) {
          for (var e = this[0], a = 0; null !== (e = e.previousSibling);) {
            1 === e.nodeType && a++;
          }return a;
        }
      }, eq: function eq(a) {
        if ("undefined" == typeof a) return this;var t,
            s = this.length;return a > s - 1 ? new e([]) : a < 0 ? (t = s + a, new e(t < 0 ? [] : [this[t]])) : new e([this[a]]);
      }, append: function append(a) {
        var t, s;for (t = 0; t < this.length; t++) {
          if ("string" == typeof a) {
            var i = document.createElement("div");for (i.innerHTML = a; i.firstChild;) {
              this[t].appendChild(i.firstChild);
            }
          } else if (a instanceof e) for (s = 0; s < a.length; s++) {
            this[t].appendChild(a[s]);
          } else this[t].appendChild(a);
        }return this;
      }, prepend: function prepend(a) {
        var t, s;for (t = 0; t < this.length; t++) {
          if ("string" == typeof a) {
            var i = document.createElement("div");for (i.innerHTML = a, s = i.childNodes.length - 1; s >= 0; s--) {
              this[t].insertBefore(i.childNodes[s], this[t].childNodes[0]);
            }
          } else if (a instanceof e) for (s = 0; s < a.length; s++) {
            this[t].insertBefore(a[s], this[t].childNodes[0]);
          } else this[t].insertBefore(a, this[t].childNodes[0]);
        }return this;
      }, insertBefore: function insertBefore(e) {
        for (var t = a(e), s = 0; s < this.length; s++) {
          if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0]);else if (t.length > 1) for (var i = 0; i < t.length; i++) {
            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i]);
          }
        }
      }, insertAfter: function insertAfter(e) {
        for (var t = a(e), s = 0; s < this.length; s++) {
          if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0].nextSibling);else if (t.length > 1) for (var i = 0; i < t.length; i++) {
            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i].nextSibling);
          }
        }
      }, next: function next(t) {
        return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
      }, nextAll: function nextAll(t) {
        var s = [],
            i = this[0];if (!i) return new e([]);for (; i.nextElementSibling;) {
          var r = i.nextElementSibling;t ? a(r).is(t) && s.push(r) : s.push(r), i = r;
        }return new e(s);
      }, prev: function prev(t) {
        return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
      }, prevAll: function prevAll(t) {
        var s = [],
            i = this[0];if (!i) return new e([]);for (; i.previousElementSibling;) {
          var r = i.previousElementSibling;t ? a(r).is(t) && s.push(r) : s.push(r), i = r;
        }return new e(s);
      }, parent: function parent(e) {
        for (var t = [], s = 0; s < this.length; s++) {
          e ? a(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode);
        }return a(a.unique(t));
      }, parents: function parents(e) {
        for (var t = [], s = 0; s < this.length; s++) {
          for (var i = this[s].parentNode; i;) {
            e ? a(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
          }
        }return a(a.unique(t));
      }, find: function find(a) {
        for (var t = [], s = 0; s < this.length; s++) {
          for (var i = this[s].querySelectorAll(a), r = 0; r < i.length; r++) {
            t.push(i[r]);
          }
        }return new e(t);
      }, children: function children(t) {
        for (var s = [], i = 0; i < this.length; i++) {
          for (var r = this[i].childNodes, n = 0; n < r.length; n++) {
            t ? 1 === r[n].nodeType && a(r[n]).is(t) && s.push(r[n]) : 1 === r[n].nodeType && s.push(r[n]);
          }
        }return new e(a.unique(s));
      }, remove: function remove() {
        for (var e = 0; e < this.length; e++) {
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        }return this;
      }, add: function add() {
        var e,
            t,
            s = this;for (e = 0; e < arguments.length; e++) {
          var i = a(arguments[e]);for (t = 0; t < i.length; t++) {
            s[s.length] = i[t], s.length++;
          }
        }return s;
      } }, a.fn = e.prototype, a.unique = function (e) {
      for (var a = [], t = 0; t < e.length; t++) {
        a.indexOf(e[t]) === -1 && a.push(e[t]);
      }return a;
    }, a;
  }(), i = ["jQuery", "Zepto", "Dom7"], r = 0; r < i.length; r++) {
    window[i[r]] && e(window[i[r]]);
  }var n;n = "undefined" == typeof s ? window.Dom7 || window.Zepto || window.jQuery : s, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function (e) {
    function a(r) {
      if (r.target === this) for (e.call(this, r), t = 0; t < s.length; t++) {
        i.off(s[t], a);
      }
    }var t,
        s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
        i = this;if (e) for (t = 0; t < s.length; t++) {
      i.on(s[t], a);
    }return this;
  }), "transform" in n.fn || (n.fn.transform = function (e) {
    for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
    }return this;
  }), "transition" in n.fn || (n.fn.transition = function (e) {
    "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
    }return this;
  }), "outerWidth" in n.fn || (n.fn.outerWidth = function (e) {
    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
  })), window.Swiper = t;
}(),  true ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
  "use strict";
  return window.Swiper;
});
//# sourceMappingURL=maps/swiper.min.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
	angular.module("myApp", ['ui.router']);
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("myApp").config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("guide");
    $stateProvider.state("guide", {
        url: "/guide",
        templateUrl: "./tpl/guide.html",
        controller: "guideCtrl"
    }).state("main", {
        url: "/main",
        templateUrl: "./tpl/main.html"
    }).state("main.home", {
        url: "/home",
        templateUrl: "./tpl/home.html",
        controller: "homeCtrl"
    }).state("detail", {
        url: "/detail:id",
        templateUrl: "./tpl/detail.html",
        controller: "detailCtrl"
    }).state("main.search", {
        url: "/search",
        templateUrl: "./tpl/search.html"
    }).state("main.photo", {
        url: "/photo",
        templateUrl: "./tpl/photo.html"
    }).state("main.myinform", {
        url: "/myinform",
        templateUrl: "./tpl/myinform.html"
    }).state("main.back", {
        url: "/back",
        templateUrl: "./tpl/back.html"
    });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp').controller("guideCtrl", function () {
    var mySwiper = new Swiper('.swiper-container');
}).controller("detailCtrl", function ($rootScope, $scope, $stateParams, $state) {
    console.log($stateParams.id);
    var new_ary = $rootScope.arr;
    for (var i = 0; i < new_ary.length; i++) {
        if (new_ary[i].id == $stateParams.id) {
            $scope.img = new_ary[i].img;
            $scope.title = new_ary[i].title;
        }
    }
    $scope.back = function () {
        $state.go("main.home");
    };
}).controller("homeCtrl", ["$scope", "$http", "$timeout", "$rootScope", function ($scope, $http, $timeout, $rootScope) {
    $http({
        url: "./json/livelist.json"
    }).success(function (data) {
        $scope.data = data.data;
        $rootScope.arr = data.data;
    });

    var mySwiper1 = new Swiper(".swiper-container1", {
        // onlyExternal: true,
        onSlideChangeStart: function onSlideChangeStart(swiper) {
            var ind = $("#ps span").eq(swiper.activeIndex);
            ind.addClass("bg").siblings().removeClass();
        }
    });
    $("#ps span").click(function () {
        var ind = $(this).index();
        $(this).addClass("bg").siblings().removeClass();
        mySwiper1.slideTo(ind, 1000, false);
    });

    var mySwiper2 = new Swiper(".swiper-container2", {
        // onlyExternal: true,
        onSlideChangeStart: function onSlideChangeStart(swiper) {
            var $el = $("#move li").eq(swiper.activeIndex);
            $el.addClass("le").siblings().removeClass();
        }
    });
    $("#move li").click(function () {
        var ind = $(this).index();
        $(this).addClass("le").siblings().removeClass();
        mySwiper2.slideTo(ind, 1000, false);
    });

    var myScroll,
        pullDown = $("#pullDown"),
        pullUp = $("#pullUp"),
        pullDownLabel = $(".pullDownLabel"),
        pullUpLabel = $(".pullUpLabel"),
        container = $(".dls"),
        loadingStep = 0;

    $timeout(function () {
        myScroll = new IScroll("#wrapper", {
            scrollbars: false,
            mouseWheel: false,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            scrollY: true,
            probeType: 3,
            bindToWrapper: true
        });
        load();
    }, 100);

    function load() {
        //加载状态0默认，1显示加载状态，2执行加载数据，只有当为0时才能再次加载，这是防止过快拉动刷新
        pullDown.hide();
        pullUp.hide();
        myScroll.on("scroll", onScroll);
        myScroll.on("scrollEnd", onScrollEnd);
        $(document).on("touchmove", function (e) {
            e.preventDefault();
        });
    }

    function onScroll() {
        if (this.y > 40 && loadingStep == 0) {
            $(".pulldown-tips").hide();
            pullDown.addClass("refresh").show();
            pullDownLabel.text("松手刷新数据");
            loadingStep = 1;
            myScroll.refresh();
        } else if (this.y < this.maxScrollY - 30 && loadingStep == 0) {
            $(".pullup-tips").hide();
            pullUp.addClass("loading").show();
            pullUpLabel.text("松手载入数据");
            loadingStep = 1;
            myScroll.refresh();
        }
    }

    function onScrollEnd() {
        if (loadingStep == 1 && pullDown.attr("class").match("refresh")) {
            //下拉刷新操作
            pullDown.removeClass("refresh");
            pullDownLabel.text("正在刷新");
            loadingStep = 2;
            pullDownAction();
        } else if (loadingStep == 1 && pullUp.attr("class").match("loading")) {
            pullUp.removeClass("loading");
            pullUpLabel.text("正在加载");
            loadingStep = 2;
            pullUpAction();
        }
    }

    function pullDownAction() {
        setTimeout(function () {
            var strs = "";
            strs += "<dl>" + "<dt>" + "<img src=" + $scope.data[0].img + ">" + "</dt>" + "<dd>" + "<span>" + $scope.data[0].title + "</span>" + "</dd>" + "</dl>" + "<dl>" + "<dt>" + "<img src=" + $scope.data[1].img + ">" + "</dt>" + "<dd>" + "<span>" + $scope.data[1].title + "</span>" + "</dd>" + "</dl>";
            container.prepend($(strs));
            loadingStep = 0;
            pullDown.hide();
            myScroll.refresh();
            $(".pulldown-tips").show();
        }, 1000);
    }

    function pullUpAction() {
        var strs = "";
        strs += "<dl>" + "<dt>" + "<img src=" + $scope.data[0].img + ">" + "</dt>" + "<dd>" + "<span>" + $scope.data[0].title + "</span>" + "</dd>" + "</dl>" + "<dl>" + "<dt>" + "<img src=" + $scope.data[1].img + ">" + "</dt>" + "<dd>" + "<span>" + $scope.data[1].title + "</span>" + "</dd>" + "</dl>";
        container.append($(strs));
        loadingStep = 0;
        pullUp.hide();
        myScroll.refresh();
        $(".pullup-tips").show();
    }

    window.addEventListener('DOMContentLoaded', load, false);
}]);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

__webpack_require__(1);

__webpack_require__(0);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

/***/ })
/******/ ]);
//# sourceMappingURL=boudle.js.map