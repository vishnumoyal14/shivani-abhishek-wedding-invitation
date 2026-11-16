(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../opt/files/node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l2 = /* @__PURE__ */ Symbol.for("react.element");
      var n = /* @__PURE__ */ Symbol.for("react.portal");
      var p2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var q2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var x2 = /* @__PURE__ */ Symbol.for("react.memo");
      var y = /* @__PURE__ */ Symbol.for("react.lazy");
      var z3 = Symbol.iterator;
      function A2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z3 && a[z3] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B3 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C2 = Object.assign;
      var D2 = {};
      function E2(a, b, e2) {
        this.props = a;
        this.context = b;
        this.refs = D2;
        this.updater = e2 || B3;
      }
      E2.prototype.isReactComponent = {};
      E2.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E2.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F2() {
      }
      F2.prototype = E2.prototype;
      function G2(a, b, e2) {
        this.props = a;
        this.context = b;
        this.refs = D2;
        this.updater = e2 || B3;
      }
      var H2 = G2.prototype = new F2();
      H2.constructor = G2;
      C2(H2, E2.prototype);
      H2.isPureReactComponent = true;
      var I2 = Array.isArray;
      var J2 = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L2 = { key: true, ref: true, __self: true, __source: true };
      function M2(a, b, e2) {
        var d, c = {}, k2 = null, h = null;
        if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b) J2.call(b, d) && !L2.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e2;
        else if (1 < g) {
          for (var f2 = Array(g), m = 0; m < g; m++) f2[m] = arguments[m + 2];
          c.children = f2;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l2, type: a, key: k2, ref: h, props: c, _owner: K.current };
      }
      function N3(a, b) {
        return { $$typeof: l2, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O3(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l2;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P2 = /\/+/g;
      function Q2(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R2(a, b, e2, d, c) {
        var k2 = typeof a;
        if ("undefined" === k2 || "boolean" === k2) a = null;
        var h = false;
        if (null === a) h = true;
        else switch (k2) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l2:
              case n:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q2(h, 0) : d, I2(c) ? (e2 = "", null != a && (e2 = a.replace(P2, "$&/") + "/"), R2(c, b, e2, "", function(a2) {
          return a2;
        })) : null != c && (O3(c) && (c = N3(c, e2 + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P2, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I2(a)) for (var g = 0; g < a.length; g++) {
          k2 = a[g];
          var f2 = d + Q2(k2, g);
          h += R2(k2, b, e2, f2, c);
        }
        else if (f2 = A2(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q2(k2, g++), h += R2(k2, b, e2, f2, c);
        else if ("object" === k2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S2(a, b, e2) {
        if (null == a) return a;
        var d = [], c = 0;
        R2(a, d, "", "", function(a2) {
          return b.call(e2, a2, c++);
        });
        return d;
      }
      function T2(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U3 = { current: null };
      var V2 = { transition: null };
      var W3 = { ReactCurrentDispatcher: U3, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K };
      function X3() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S2, forEach: function(a, b, e2) {
        S2(a, function() {
          b.apply(this, arguments);
        }, e2);
      }, count: function(a) {
        var b = 0;
        S2(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S2(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O3(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E2;
      exports.Fragment = p2;
      exports.Profiler = r;
      exports.PureComponent = G2;
      exports.StrictMode = q2;
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W3;
      exports.act = X3;
      exports.cloneElement = function(a, b, e2) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C2({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k2 = b.ref, h = K.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f2 in b) J2.call(b, f2) && !L2.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2) d.children = e2;
        else if (1 < f2) {
          g = Array(f2);
          for (var m = 0; m < f2; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l2, type: a.type, key: c, ref: k2, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M2;
      exports.createFactory = function(a) {
        var b = M2.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O3;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T2 };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x2, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V2.transition;
        V2.transition = {};
        try {
          a();
        } finally {
          V2.transition = b;
        }
      };
      exports.unstable_act = X3;
      exports.useCallback = function(a, b) {
        return U3.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U3.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U3.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U3.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U3.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e2) {
        return U3.current.useImperativeHandle(a, b, e2);
      };
      exports.useInsertionEffect = function(a, b) {
        return U3.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U3.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U3.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e2) {
        return U3.current.useReducer(a, b, e2);
      };
      exports.useRef = function(a) {
        return U3.current.useRef(a);
      };
      exports.useState = function(a) {
        return U3.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e2) {
        return U3.current.useSyncExternalStore(a, b, e2);
      };
      exports.useTransition = function() {
        return U3.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // ../../opt/files/node_modules/react/index.js
  var require_react = __commonJS({
    "../../opt/files/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e2 = a[d];
          if (0 < g(e2, b)) a[d] = b, a[c] = e2, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
            var m = 2 * (d + 1) - 1, C2 = a[m], n = m + 1, x2 = a[n];
            if (0 > g(C2, c)) n < e2 && 0 > g(x2, C2) ? (a[d] = x2, a[n] = c, d = n) : (a[d] = C2, a[m] = c, d = m);
            else if (n < e2 && 0 > g(x2, c)) a[d] = x2, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p2 = Date, q2 = p2.now();
        exports.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var l2;
      var p2;
      var q2;
      var r = [];
      var t = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z3 = false;
      var A2 = false;
      var B3 = false;
      var D2 = "function" === typeof setTimeout ? setTimeout : null;
      var E2 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback) k2(t);
          else if (b.startTime <= a) k2(t), b.sortIndex = b.expirationTime, f2(r, b);
          else break;
          b = h(t);
        }
      }
      function H2(a) {
        B3 = false;
        G2(a);
        if (!A2) if (null !== h(r)) A2 = true, I2(J2);
        else {
          var b = h(t);
          null !== b && K(H2, b.startTime - a);
        }
      }
      function J2(a, b) {
        A2 = false;
        B3 && (B3 = false, E2(L2), L2 = -1);
        z3 = true;
        var c = y;
        try {
          G2(b);
          for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M2()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e2 = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e2 ? v.callback = e2 : v === h(r) && k2(r);
              G2(b);
            } else k2(r);
            v = h(r);
          }
          if (null !== v) var w2 = true;
          else {
            var m = h(t);
            null !== m && K(H2, m.startTime - b);
            w2 = false;
          }
          return w2;
        } finally {
          v = null, y = c, z3 = false;
        }
      }
      var N3 = false;
      var O3 = null;
      var L2 = -1;
      var P2 = 5;
      var Q2 = -1;
      function M2() {
        return exports.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O3) {
          var a = exports.unstable_now();
          Q2 = a;
          var b = true;
          try {
            b = O3(true, a);
          } finally {
            b ? S2() : (N3 = false, O3 = null);
          }
        } else N3 = false;
      }
      var S2;
      if ("function" === typeof F2) S2 = function() {
        F2(R2);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T2 = new MessageChannel(), U3 = T2.port2;
        T2.port1.onmessage = R2;
        S2 = function() {
          U3.postMessage(null);
        };
      } else S2 = function() {
        D2(R2, 0);
      };
      var T2;
      var U3;
      function I2(a) {
        O3 = a;
        N3 || (N3 = true, S2());
      }
      function K(a, b) {
        L2 = D2(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A2 || z3 || (A2 = true, I2(J2));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c + e2;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t, a), null === h(r) && a === h(t) && (B3 ? (E2(L2), L2 = -1) : B3 = true, K(H2, c - d))) : (a.sortIndex = e2, f2(r, a), A2 || z3 || (A2 = true, I2(J2)));
        return a;
      };
      exports.unstable_shouldYield = M2;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });

  // ../../opt/files/node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "../../opt/files/node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa2 = require_react();
      var ca = require_scheduler();
      function p2(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da2 = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa(a, b) {
        ha2(a, b);
        ha2(a + "Capture", b);
      }
      function ha2(a, b) {
        ea2[a] = b;
        for (a = 0; a < b.length; a++) da2.add(b[a]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa2(a) {
        if (ja.call(ma, a)) return true;
        if (ja.call(la, a)) return false;
        if (ka2.test(a)) return ma[a] = true;
        la[a] = true;
        return false;
      }
      function pa(a, b, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa2(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function v(a, b, c, d, e2, f2, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e2;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f2;
        this.removeEmptyString = g;
      }
      var z3 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z3[a] = new v(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z3[b] = new v(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z3[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z3[a] = new v(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z3[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z3[a] = new v(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z3[a] = new v(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z3[a] = new v(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z3[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra2 = /[\-:]([a-z])/g;
      function sa2(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          ra2,
          sa2
        );
        z3[b] = new v(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(ra2, sa2);
        z3[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(ra2, sa2);
        z3[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z3[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z3.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z3[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta2(a, b, c, d) {
        var e2 = z3.hasOwnProperty(b) ? z3[b] : null;
        if (null !== e2 ? 0 !== e2.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa2(b, c, e2, d) && (c = null), d || null === e2 ? oa2(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b = e2.attributeName, d = e2.attributeNamespace, null === c ? a.removeAttribute(b) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ua2 = aa2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va2 = /* @__PURE__ */ Symbol.for("react.element");
      var wa2 = /* @__PURE__ */ Symbol.for("react.portal");
      var ya2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var za = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa2 = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba2 = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca2 = /* @__PURE__ */ Symbol.for("react.context");
      var Da = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa2 = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga2 = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia2 = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja = Symbol.iterator;
      function Ka2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja && a[Ja] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A2 = Object.assign;
      var La2;
      function Ma2(a) {
        if (void 0 === La2) try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          La2 = b && b[1] || "";
        }
        return "\n" + La2 + a;
      }
      var Na = false;
      function Oa2(a, b) {
        if (!a || Na) return "";
        Na = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l2) {
              var d = l2;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l2) {
              d = l2;
            }
            a.call(b.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l2) {
              d = l2;
            }
            a();
          }
        } catch (l2) {
          if (l2 && d && "string" === typeof l2.stack) {
            for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e2[g] !== f2[h]; ) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e2[g] !== f2[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e2[g] !== f2[h]) {
                    var k2 = "\n" + e2[g].replace(" at new ", " at ");
                    a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                    return k2;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma2(a) : "";
      }
      function Pa2(a) {
        switch (a.tag) {
          case 5:
            return Ma2(a.type);
          case 16:
            return Ma2("Lazy");
          case 13:
            return Ma2("Suspense");
          case 19:
            return Ma2("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa2(a.type, false), a;
          case 11:
            return a = Oa2(a.type.render, false), a;
          case 1:
            return a = Oa2(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa2(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya2:
            return "Fragment";
          case wa2:
            return "Portal";
          case Aa2:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea2:
            return "Suspense";
          case Fa2:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca2:
            return (a.displayName || "Context") + ".Consumer";
          case Ba2:
            return (a._context.displayName || "Context") + ".Provider";
          case Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga2:
            return b = a.displayName || null, null !== b ? b : Qa2(a.type) || "Memo";
          case Ha2:
            b = a._payload;
            a = a._init;
            try {
              return Qa2(a(b));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra2(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa2(b);
          case 8:
            return b === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function Sa2(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta2(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua2(a) {
        var b = Ta2(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e2 = c.get, f2 = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e2.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f2.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va2(a) {
        a._valueTracker || (a._valueTracker = Ua2(a));
      }
      function Wa(a) {
        if (!a) return false;
        var b = a._valueTracker;
        if (!b) return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta2(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya2(a, b) {
        var c = b.checked;
        return A2({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = Sa2(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a, b) {
        b = b.checked;
        null != b && ta2(a, "checked", b, false);
      }
      function bb(a, b) {
        ab(a, b);
        var c = Sa2(b.value), d = b.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa2(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function db(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b, c) {
        if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e2 = 0; e2 < c.length; e2++) b["$" + c[e2]] = true;
          for (c = 0; c < a.length; c++) e2 = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa2(c);
          b = null;
          for (e2 = 0; e2 < a.length; e2++) {
            if (a[e2].value === c) {
              a[e2].selected = true;
              d && (a[e2].defaultSelected = true);
              return;
            }
            null !== b || a[e2].disabled || (b = a[e2]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(p2(91));
        return A2({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b) throw Error(p2(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p2(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa2(c) };
      }
      function ib(a, b) {
        var c = Sa2(b.value), d = Sa2(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e2) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e2);
          });
        } : a;
      })(function(a, b) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b.firstChild; ) a.appendChild(b.firstChild);
        }
      });
      function ob(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b] = pb[a];
        });
      });
      function rb(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
      }
      function sb(a, b) {
        a = a.style;
        for (var c in b) if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e2 = rb(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e2) : a[c] = e2;
        }
      }
      var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b) {
        if (b) {
          if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p2(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p2(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p2(61));
          }
          if (null != b.style && "object" !== typeof b.style) throw Error(p2(62));
        }
      }
      function vb(a, b) {
        if (-1 === a.indexOf("-")) return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p2(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b, c) {
        if (Ib) return a(b, c);
        Ib = true;
        try {
          return Gb(a, b, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b];
        a: switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p2(231, b, typeof c));
        return c;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b, c, d, e2, f2, g, h, k2) {
        var l2 = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l2);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b, c, d, e2, f2, g, h, k2) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b, c, d, e2, f2, g, h, k2) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l2 = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p2(198));
          Qb || (Qb = true, Rb = l2);
        }
      }
      function Vb(a) {
        var b = a, c = a;
        if (a.alternate) for (; b.return; ) b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b) return b.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p2(188));
      }
      function Yb(a) {
        var b = a.alternate;
        if (!b) {
          b = Vb(a);
          if (null === b) throw Error(p2(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e2 = c.return;
          if (null === e2) break;
          var f2 = e2.alternate;
          if (null === f2) {
            d = e2.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e2.child === f2.child) {
            for (f2 = e2.child; f2; ) {
              if (f2 === c) return Xb(e2), a;
              if (f2 === d) return Xb(e2), b;
              f2 = f2.sibling;
            }
            throw Error(p2(188));
          }
          if (c.return !== d.return) c = e2, d = f2;
          else {
            for (var g = false, h = e2.child; h; ) {
              if (h === c) {
                g = true;
                c = e2;
                d = f2;
                break;
              }
              if (h === d) {
                g = true;
                d = e2;
                c = f2;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f2.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f2;
                  d = e2;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f2;
                  c = e2;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(p2(189));
            }
          }
          if (c.alternate !== d) throw Error(p2(190));
        }
        if (3 !== c.tag) throw Error(p2(188));
        return c.stateNode.current === c ? a : b;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b = $b(a);
          if (null !== b) return b;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B3 = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e2;
          0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
        } else g = c & ~e2, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e2) && (e2 = d & -d, f2 = b & -b, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e2 = 1 << c, d |= a[c], b &= ~e2;
        return d;
      }
      function vc(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
          var g = 31 - oc(f2), h = 1 << g, k2 = e2[g];
          if (-1 === k2) {
            if (0 === (h & c) || 0 !== (h & d)) e2[g] = vc(h, b);
          } else k2 <= b && (a.expiredLanes |= h);
          f2 &= ~h;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b = [], c = 0; 31 > c; c++) b.push(a);
        return b;
      }
      function Ac(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - oc(b);
        a[b] = c;
      }
      function Bc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e2 = 31 - oc(c), f2 = 1 << e2;
          b[e2] = 0;
          d[e2] = -1;
          a[e2] = -1;
          c &= ~f2;
        }
      }
      function Cc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e2 = 1 << d;
          e2 & b | a[d] & b && (a[d] |= b);
          c &= ~e2;
        }
      }
      var C2 = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a, b, c, d, e2, f2) {
        if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e2 && -1 === b.indexOf(e2) && b.push(e2);
        return a;
      }
      function Uc(a, b, c, d, e2) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a, b, c, d, e2), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b, c, d, e2), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b, c, d, e2), true;
          case "pointerover":
            var f2 = e2.pointerId;
            Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e2));
            return true;
          case "gotpointercapture":
            return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e2)), true;
        }
        return false;
      }
      function Vc(a) {
        var b = Wc(a.target);
        if (null !== b) {
          var c = Vb(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Zc(a, b, c) {
        Xc(a) && c.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b(b2) {
          return ad(b2, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd2 = ua2.ReactCurrentBatchConfig;
      var dd2 = true;
      function ed2(a, b, c, d) {
        var e2 = C2, f2 = cd2.transition;
        cd2.transition = null;
        try {
          C2 = 1, fd2(a, b, c, d);
        } finally {
          C2 = e2, cd2.transition = f2;
        }
      }
      function gd(a, b, c, d) {
        var e2 = C2, f2 = cd2.transition;
        cd2.transition = null;
        try {
          C2 = 4, fd2(a, b, c, d);
        } finally {
          C2 = e2, cd2.transition = f2;
        }
      }
      function fd2(a, b, c, d) {
        if (dd2) {
          var e2 = Yc(a, b, c, d);
          if (null === e2) hd2(a, b, d, id2, c), Sc(a, d);
          else if (Uc(e2, a, b, c, d)) d.stopPropagation();
          else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e2; ) {
              var f2 = Cb(e2);
              null !== f2 && Ec(f2);
              f2 = Yc(a, b, c, d);
              null === f2 && hd2(a, b, d, id2, c);
              if (f2 === e2) break;
              e2 = f2;
            }
            null !== e2 && d.stopPropagation();
          } else hd2(a, b, d, null, c);
        }
      }
      var id2 = null;
      function Yc(a, b, c, d) {
        id2 = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b = Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
          a = Wb(b);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else b !== a && (a = null);
        id2 = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd2 = null;
      var ld2 = null;
      var md2 = null;
      function nd2() {
        if (md2) return md2;
        var a, b = ld2, c = b.length, d, e2 = "value" in kd2 ? kd2.value : kd2.textContent, f2 = e2.length;
        for (a = 0; a < c && b[a] === e2[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e2[f2 - d]; d++) ;
        return md2 = e2.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od2(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd2() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd2(a) {
        function b(b2, d, e2, f2, g) {
          this._reactName = b2;
          this._targetInst = e2;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd2 : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A2(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd2);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd2);
        }, persist: function() {
        }, isPersistent: pd2 });
        return b;
      }
      var sd2 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd2(sd2);
      var ud2 = A2({}, sd2, { view: 0, detail: 0 });
      var vd2 = rd2(ud2);
      var wd;
      var xd;
      var yd;
      var Ad2 = A2({}, ud2, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd2, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
      } });
      var Bd2 = rd2(Ad2);
      var Cd2 = A2({}, Ad2, { dataTransfer: 0 });
      var Dd2 = rd2(Cd2);
      var Ed2 = A2({}, ud2, { relatedTarget: 0 });
      var Fd2 = rd2(Ed2);
      var Gd2 = A2({}, sd2, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd2(Gd2);
      var Id = A2({}, sd2, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd2(Id);
      var Kd2 = A2({}, sd2, { data: 0 });
      var Ld = rd2(Kd2);
      var Md2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd2 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd2(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od2[a]) ? !!b[a] : false;
      }
      function zd2() {
        return Pd2;
      }
      var Qd = A2({}, ud2, { key: function(a) {
        if (a.key) {
          var b = Md2[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od2(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd2[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd2, charCode: function(a) {
        return "keypress" === a.type ? od2(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od2(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd2 = rd2(Qd);
      var Sd2 = A2({}, Ad2, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td2 = rd2(Sd2);
      var Ud2 = A2({}, ud2, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd2 });
      var Vd2 = rd2(Ud2);
      var Wd = A2({}, sd2, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd2 = rd2(Wd);
      var Yd = A2({}, Ad2, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd2(Yd);
      var $d2 = [9, 13, 27, 32];
      var ae3 = ia && "CompositionEvent" in window;
      var be3 = null;
      ia && "documentMode" in document && (be3 = document.documentMode);
      var ce3 = ia && "TextEvent" in window && !be3;
      var de2 = ia && (!ae3 || be3 && 8 < be3 && 11 >= be3);
      var ee2 = String.fromCharCode(32);
      var fe3 = false;
      function ge3(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== $d2.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he3(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie3 = false;
      function je3(a, b) {
        switch (a) {
          case "compositionend":
            return he3(b);
          case "keypress":
            if (32 !== b.which) return null;
            fe3 = true;
            return ee2;
          case "textInput":
            return a = b.data, a === ee2 && fe3 ? null : a;
          default:
            return null;
        }
      }
      function ke2(a, b) {
        if (ie3) return "compositionend" === a || !ae3 && ge3(a, b) ? (a = nd2(), md2 = ld2 = kd2 = null, ie3 = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de2 && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le3 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me3(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le3[a.type] : "textarea" === b ? true : false;
      }
      function ne3(a, b, c, d) {
        Eb(d);
        b = oe3(b, "onChange");
        0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe3 = null;
      var qe3 = null;
      function re3(a) {
        se3(a, 0);
      }
      function te3(a) {
        var b = ue3(a);
        if (Wa(b)) return a;
      }
      function ve3(a, b) {
        if ("change" === a) return b;
      }
      var we3 = false;
      if (ia) {
        if (ia) {
          ye3 = "oninput" in document;
          if (!ye3) {
            ze3 = document.createElement("div");
            ze3.setAttribute("oninput", "return;");
            ye3 = "function" === typeof ze3.oninput;
          }
          xe3 = ye3;
        } else xe3 = false;
        we3 = xe3 && (!document.documentMode || 9 < document.documentMode);
      }
      var xe3;
      var ye3;
      var ze3;
      function Ae3() {
        pe3 && (pe3.detachEvent("onpropertychange", Be3), qe3 = pe3 = null);
      }
      function Be3(a) {
        if ("value" === a.propertyName && te3(qe3)) {
          var b = [];
          ne3(b, qe3, a, xb(a));
          Jb(re3, b);
        }
      }
      function Ce3(a, b, c) {
        "focusin" === a ? (Ae3(), pe3 = b, qe3 = c, pe3.attachEvent("onpropertychange", Be3)) : "focusout" === a && Ae3();
      }
      function De3(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te3(qe3);
      }
      function Ee3(a, b) {
        if ("click" === a) return te3(b);
      }
      function Fe3(a, b) {
        if ("input" === a || "change" === a) return te3(b);
      }
      function Ge2(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He3 = "function" === typeof Object.is ? Object.is : Ge2;
      function Ie3(a, b) {
        if (He3(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e2 = c[d];
          if (!ja.call(b, e2) || !He3(a[e2], b[e2])) return false;
        }
        return true;
      }
      function Je3(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke3(a, b) {
        var c = Je3(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je3(c);
        }
      }
      function Le3(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le3(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me3() {
        for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b.contentWindow;
          else break;
          b = Xa(a.document);
        }
        return b;
      }
      function Ne3(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe3(a) {
        var b = Me3(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le3(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne3(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
              d = void 0 === d.end ? f2 : Math.min(d.end, e2);
              !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
              e2 = Ke3(c, f2);
              var g = Ke3(
                c,
                d
              );
              e2 && g && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe3 = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe3 = null;
      var Re3 = null;
      var Se3 = null;
      var Te3 = false;
      function Ue3(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te3 || null == Qe3 || Qe3 !== Xa(d) || (d = Qe3, "selectionStart" in d && Ne3(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se3 && Ie3(Se3, d) || (Se3 = d, d = oe3(Re3, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe3)));
      }
      function Ve3(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We3 = { animationend: Ve3("Animation", "AnimationEnd"), animationiteration: Ve3("Animation", "AnimationIteration"), animationstart: Ve3("Animation", "AnimationStart"), transitionend: Ve3("Transition", "TransitionEnd") };
      var Xe3 = {};
      var Ye3 = {};
      ia && (Ye3 = document.createElement("div").style, "AnimationEvent" in window || (delete We3.animationend.animation, delete We3.animationiteration.animation, delete We3.animationstart.animation), "TransitionEvent" in window || delete We3.transitionend.transition);
      function Ze2(a) {
        if (Xe3[a]) return Xe3[a];
        if (!We3[a]) return a;
        var b = We3[a], c;
        for (c in b) if (b.hasOwnProperty(c) && c in Ye3) return Xe3[a] = b[c];
        return a;
      }
      var $e3 = Ze2("animationend");
      var af = Ze2("animationiteration");
      var bf = Ze2("animationstart");
      var cf = Ze2("transitionend");
      var df2 = /* @__PURE__ */ new Map();
      var ef2 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df2.set(a, b);
        fa(b, [a]);
      }
      for (gf = 0; gf < ef2.length; gf++) {
        hf = ef2[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e3, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha2("onMouseEnter", ["mouseout", "mouseover"]);
      ha2("onMouseLeave", ["mouseout", "mouseover"]);
      ha2("onPointerEnter", ["pointerout", "pointerover"]);
      ha2("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se3(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e2 = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b) for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k2 = h.instance, l2 = h.currentTarget;
              h = h.listener;
              if (k2 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h, l2);
              f2 = k2;
            }
            else for (g = 0; g < d.length; g++) {
              h = d[g];
              k2 = h.instance;
              l2 = h.currentTarget;
              h = h.listener;
              if (k2 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h, l2);
              f2 = k2;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D2(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf2(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf2(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf2(a) {
        if (!a[rf]) {
          a[rf] = true;
          da2.forEach(function(b2) {
            "selectionchange" !== b2 && (mf2.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf2(a, b, c, d) {
        switch (jd(b)) {
          case 1:
            var e2 = ed2;
            break;
          case 4:
            e2 = gd;
            break;
          default:
            e2 = fd2;
        }
        c = e2.bind(null, b, c, a);
        e2 = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e2 = true);
        d ? void 0 !== e2 ? a.addEventListener(b, c, { capture: true, passive: e2 }) : a.addEventListener(b, c, true) : void 0 !== e2 ? a.addEventListener(b, c, { passive: e2 }) : a.addEventListener(b, c, false);
      }
      function hd2(a, b, c, d, e2) {
        var f2 = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e2 || 8 === h.nodeType && h.parentNode === e2) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
              }
              g = g.return;
            }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g) return;
              k2 = g.tag;
              if (5 === k2 || 6 === k2) {
                d = f2 = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f2, e3 = xb(c), g2 = [];
          a: {
            var h2 = df2.get(a);
            if (void 0 !== h2) {
              var k3 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od2(c)) break a;
                case "keydown":
                case "keyup":
                  k3 = Rd2;
                  break;
                case "focusin":
                  n = "focus";
                  k3 = Fd2;
                  break;
                case "focusout":
                  n = "blur";
                  k3 = Fd2;
                  break;
                case "beforeblur":
                case "afterblur":
                  k3 = Fd2;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k3 = Bd2;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k3 = Dd2;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k3 = Vd2;
                  break;
                case $e3:
                case af:
                case bf:
                  k3 = Hd;
                  break;
                case cf:
                  k3 = Xd2;
                  break;
                case "scroll":
                  k3 = vd2;
                  break;
                case "wheel":
                  k3 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k3 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k3 = Td2;
              }
              var t = 0 !== (b & 4), J2 = !t && "scroll" === a, x2 = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w2 = d2, u; null !== w2; ) {
                u = w2;
                var F2 = u.stateNode;
                5 === u.tag && null !== F2 && (u = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t.push(tf(w2, F2, u))));
                if (J2) break;
                w2 = w2.return;
              }
              0 < t.length && (h2 = new k3(h2, n, null, c, e3), g2.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a || "pointerover" === a;
              k3 = "mouseout" === a || "pointerout" === a;
              if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
              if (k3 || h2) {
                h2 = e3.window === e3 ? e3 : (h2 = e3.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k3) {
                  if (n = c.relatedTarget || c.toElement, k3 = d2, n = n ? Wc(n) : null, null !== n && (J2 = Vb(n), n !== J2 || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k3 = null, n = d2;
                if (k3 !== n) {
                  t = Bd2;
                  F2 = "onMouseLeave";
                  x2 = "onMouseEnter";
                  w2 = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td2, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                  J2 = null == k3 ? h2 : ue3(k3);
                  u = null == n ? h2 : ue3(n);
                  h2 = new t(F2, w2 + "leave", k3, c, e3);
                  h2.target = J2;
                  h2.relatedTarget = u;
                  F2 = null;
                  Wc(e3) === d2 && (t = new t(x2, w2 + "enter", n, c, e3), t.target = u, t.relatedTarget = J2, F2 = t);
                  J2 = F2;
                  if (k3 && n) b: {
                    t = k3;
                    x2 = n;
                    w2 = 0;
                    for (u = t; u; u = vf(u)) w2++;
                    u = 0;
                    for (F2 = x2; F2; F2 = vf(F2)) u++;
                    for (; 0 < w2 - u; ) t = vf(t), w2--;
                    for (; 0 < u - w2; ) x2 = vf(x2), u--;
                    for (; w2--; ) {
                      if (t === x2 || null !== x2 && t === x2.alternate) break b;
                      t = vf(t);
                      x2 = vf(x2);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k3 && wf(g2, h2, k3, t, false);
                  null !== n && null !== J2 && wf(g2, J2, n, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue3(d2) : window;
              k3 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k3 || "input" === k3 && "file" === h2.type) var na2 = ve3;
              else if (me3(h2)) if (we3) na2 = Fe3;
              else {
                na2 = De3;
                var xa2 = Ce3;
              }
              else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na2 = Ee3);
              if (na2 && (na2 = na2(a, d2))) {
                ne3(g2, na2, c, e3);
                break a;
              }
              xa2 && xa2(a, h2, d2);
              "focusout" === a && (xa2 = h2._wrapperState) && xa2.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa2 = d2 ? ue3(d2) : window;
            switch (a) {
              case "focusin":
                if (me3(xa2) || "true" === xa2.contentEditable) Qe3 = xa2, Re3 = d2, Se3 = null;
                break;
              case "focusout":
                Se3 = Re3 = Qe3 = null;
                break;
              case "mousedown":
                Te3 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te3 = false;
                Ue3(g2, c, e3);
                break;
              case "selectionchange":
                if (Pe3) break;
              case "keydown":
              case "keyup":
                Ue3(g2, c, e3);
            }
            var $a;
            if (ae3) b: {
              switch (a) {
                case "compositionstart":
                  var ba2 = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba2 = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba2 = "onCompositionUpdate";
                  break b;
              }
              ba2 = void 0;
            }
            else ie3 ? ge3(a, c) && (ba2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba2 = "onCompositionStart");
            ba2 && (de2 && "ko" !== c.locale && (ie3 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie3 && ($a = nd2()) : (kd2 = e3, ld2 = "value" in kd2 ? kd2.value : kd2.textContent, ie3 = true)), xa2 = oe3(d2, ba2), 0 < xa2.length && (ba2 = new Ld(ba2, a, null, c, e3), g2.push({ event: ba2, listeners: xa2 }), $a ? ba2.data = $a : ($a = he3(c), null !== $a && (ba2.data = $a))));
            if ($a = ce3 ? je3(a, c) : ke2(a, c)) d2 = oe3(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a);
          }
          se3(g2, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe3(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e2 = a, f2 = e2.stateNode;
          5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e2)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e2) {
        for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
          var h = c, k2 = h.alternate, l2 = h.stateNode;
          if (null !== k2 && k2 === d) break;
          5 === h.tag && null !== l2 && (h = l2, e2 ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e2 || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b, c) {
        b = zf(b);
        if (zf(a) !== b && c) throw Error(p2(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b) {
        var c = b, d = 0;
        do {
          var e2 = c.nextSibling;
          a.removeChild(c);
          if (e2 && 8 === e2.nodeType) if (c = e2.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e2);
              bd(b);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e2;
        } while (c);
        bd(b);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b) break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b) return a;
              b--;
            } else "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b = a[Of];
        if (b) return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue3(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p2(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E2(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G2(a, b) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b;
      }
      var Vf = {};
      var H2 = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e2 = {}, f2;
        for (f2 in c) e2[f2] = b[f2];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e2);
        return e2;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E2(Wf);
        E2(H2);
      }
      function ag(a, b, c) {
        if (H2.current !== Vf) throw Error(p2(168));
        G2(H2, b);
        G2(Wf, c);
      }
      function bg(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e2 in d) if (!(e2 in b)) throw Error(p2(108, Ra2(a) || "Unknown", e2));
        return A2({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H2.current;
        G2(H2, a);
        G2(Wf, Wf.current);
        return true;
      }
      function dg(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(p2(169));
        c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E2(Wf), E2(H2), G2(H2, a)) : E2(Wf);
        G2(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b = C2;
          try {
            var c = eg;
            for (C2 = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e2) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
          } finally {
            C2 = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b;
      }
      function ug(a, b, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e2 = 32 - oc(d) - 1;
        d &= ~(1 << e2);
        c += 1;
        var f2 = 32 - oc(b) + e2;
        if (30 < f2) {
          var g = e2 - e2 % 5;
          f2 = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e2 -= g;
          rg = 1 << 32 - oc(b) + e2 | c << e2 | d;
          sg = f2 + a;
        } else rg = 1 << f2 | c << e2 | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I2 = false;
      var zg = null;
      function Ag(a, b) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function Cg(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I2) {
          var b = yg;
          if (b) {
            var c = b;
            if (!Cg(a, b)) {
              if (Dg(a)) throw Error(p2(418));
              b = Lf(c.nextSibling);
              var d = xg;
              b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I2 = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p2(418));
            a.flags = a.flags & -4097 | 2;
            I2 = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I2) return Fg(a), I2 = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a)) throw Hg(), Error(p2(418));
          for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p2(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I2 = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua2.ReactCurrentBatchConfig;
      function Lg(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p2(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p2(147, a));
            var e2 = d, f2 = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
            b = function(a2) {
              var b2 = e2.refs;
              null === a2 ? delete b2[f2] : b2[f2] = a2;
            };
            b._stringRef = f2;
            return b;
          }
          if ("string" !== typeof a) throw Error(p2(284));
          if (!c._owner) throw Error(p2(290, a));
        }
        return a;
      }
      function Mg(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b = a._init;
        return b(a._payload);
      }
      function Og(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e2(a2, b2) {
          a2 = Pg(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f2(b2, c2, d2) {
          b2.index = d2;
          if (!a) return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e2(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k2(a2, b2, c2, d2) {
          var f3 = c2.type;
          if (f3 === ya2) return m(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha2 && Ng(f3) === b2.type)) return d2 = e2(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l2(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e2(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f3) {
          if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
          b2 = e2(b2, c2);
          b2.return = a2;
          return b2;
        }
        function q2(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va2:
                return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
              case wa2:
                return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
              case Ha2:
                var d2 = b2._init;
                return q2(a2, d2(b2._payload), c2);
            }
            if (eb(b2) || Ka2(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
            Mg(a2, b2);
          }
          return null;
        }
        function r(a2, b2, c2, d2) {
          var e3 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e3 ? null : h(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va2:
                return c2.key === e3 ? k2(a2, b2, c2, d2) : null;
              case wa2:
                return c2.key === e3 ? l2(a2, b2, c2, d2) : null;
              case Ha2:
                return e3 = c2._init, r(
                  a2,
                  b2,
                  e3(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka2(c2)) return null !== e3 ? null : m(a2, b2, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y(a2, b2, c2, d2, e3) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e3);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e3);
              case wa2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e3);
              case Ha2:
                var f3 = d2._init;
                return y(a2, b2, c2, f3(d2._payload), e3);
            }
            if (eb(d2) || Ka2(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e3, null);
            Mg(b2, d2);
          }
          return null;
        }
        function n(e3, g2, h2, k3) {
          for (var l3 = null, m2 = null, u = g2, w2 = g2 = 0, x2 = null; null !== u && w2 < h2.length; w2++) {
            u.index > w2 ? (x2 = u, u = null) : x2 = u.sibling;
            var n2 = r(e3, u, h2[w2], k3);
            if (null === n2) {
              null === u && (u = x2);
              break;
            }
            a && u && null === n2.alternate && b(e3, u);
            g2 = f2(n2, g2, w2);
            null === m2 ? l3 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x2;
          }
          if (w2 === h2.length) return c(e3, u), I2 && tg(e3, w2), l3;
          if (null === u) {
            for (; w2 < h2.length; w2++) u = q2(e3, h2[w2], k3), null !== u && (g2 = f2(u, g2, w2), null === m2 ? l3 = u : m2.sibling = u, m2 = u);
            I2 && tg(e3, w2);
            return l3;
          }
          for (u = d(e3, u); w2 < h2.length; w2++) x2 = y(u, e3, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m2 ? l3 = x2 : m2.sibling = x2, m2 = x2);
          a && u.forEach(function(a2) {
            return b(e3, a2);
          });
          I2 && tg(e3, w2);
          return l3;
        }
        function t(e3, g2, h2, k3) {
          var l3 = Ka2(h2);
          if ("function" !== typeof l3) throw Error(p2(150));
          h2 = l3.call(h2);
          if (null == h2) throw Error(p2(151));
          for (var u = l3 = null, m2 = g2, w2 = g2 = 0, x2 = null, n2 = h2.next(); null !== m2 && !n2.done; w2++, n2 = h2.next()) {
            m2.index > w2 ? (x2 = m2, m2 = null) : x2 = m2.sibling;
            var t2 = r(e3, m2, n2.value, k3);
            if (null === t2) {
              null === m2 && (m2 = x2);
              break;
            }
            a && m2 && null === t2.alternate && b(e3, m2);
            g2 = f2(t2, g2, w2);
            null === u ? l3 = t2 : u.sibling = t2;
            u = t2;
            m2 = x2;
          }
          if (n2.done) return c(
            e3,
            m2
          ), I2 && tg(e3, w2), l3;
          if (null === m2) {
            for (; !n2.done; w2++, n2 = h2.next()) n2 = q2(e3, n2.value, k3), null !== n2 && (g2 = f2(n2, g2, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
            I2 && tg(e3, w2);
            return l3;
          }
          for (m2 = d(e3, m2); !n2.done; w2++, n2 = h2.next()) n2 = y(m2, e3, w2, n2.value, k3), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w2 : n2.key), g2 = f2(n2, g2, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
          a && m2.forEach(function(a2) {
            return b(e3, a2);
          });
          I2 && tg(e3, w2);
          return l3;
        }
        function J2(a2, d2, f3, h2) {
          "object" === typeof f3 && null !== f3 && f3.type === ya2 && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va2:
                a: {
                  for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                    if (l3.key === k3) {
                      k3 = f3.type;
                      if (k3 === ya2) {
                        if (7 === l3.tag) {
                          c(a2, l3.sibling);
                          d2 = e2(l3, f3.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha2 && Ng(k3) === l3.type) {
                        c(a2, l3.sibling);
                        d2 = e2(l3, f3.props);
                        d2.ref = Lg(a2, l3, f3);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l3);
                      break;
                    } else b(a2, l3);
                    l3 = l3.sibling;
                  }
                  f3.type === ya2 ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case wa2:
                a: {
                  for (l3 = f3.key; null !== d2; ) {
                    if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c(a2, d2.sibling);
                      d2 = e2(d2, f3.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f3, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha2:
                return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
            }
            if (eb(f3)) return n(a2, d2, f3, h2);
            if (Ka2(f3)) return t(a2, d2, f3, h2);
            Mg(a2, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e2(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J2;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b = Wg.current;
        E2(Wg);
        a._currentValue = b;
      }
      function bh(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg) throw Error(p2(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b, c, d) {
        var e2 = b.interleaved;
        null === e2 ? (c.next = c, gh(b)) : (c.next = e2.next, e2.next = c);
        b.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K & 2)) {
          var e2 = d.pending;
          null === e2 ? b.next = b : (b.next = e2.next, e2.next = b);
          d.pending = b;
          return ih(a, c);
        }
        e2 = d.interleaved;
        null === e2 ? (b.next = b, gh(d)) : (b.next = e2.next, e2.next = b);
        d.interleaved = b;
        return ih(a, c);
      }
      function oh(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      function ph(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e2 = null, f2 = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f2 ? e2 = f2 = g : f2 = f2.next = g;
              c = c.next;
            } while (null !== c);
            null === f2 ? e2 = f2 = b : f2 = f2.next = b;
          } else e2 = f2 = b;
          c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function qh(a, b, c, d) {
        var e2 = a.updateQueue;
        jh = false;
        var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h = e2.shared.pending;
        if (null !== h) {
          e2.shared.pending = null;
          var k2 = h, l2 = k2.next;
          k2.next = null;
          null === g ? f2 = l2 : g.next = l2;
          g = k2;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l2 : h.next = l2, m.lastBaseUpdate = k2));
        }
        if (null !== f2) {
          var q2 = e2.baseState;
          g = 0;
          m = l2 = k2 = null;
          h = f2;
          do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a, t = h;
                r = b;
                y = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q2 = n.call(y, q2, r);
                      break a;
                    }
                    q2 = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y, q2, r) : n;
                    if (null === r || void 0 === r) break a;
                    q2 = A2({}, q2, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e2.effects, null === r ? e2.effects = [h] : r.push(h));
            } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l2 = m = y, k2 = q2) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) if (h = e2.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
          } while (1);
          null === m && (k2 = q2);
          e2.baseState = k2;
          e2.firstBaseUpdate = l2;
          e2.lastBaseUpdate = m;
          b = e2.shared.interleaved;
          if (null !== b) {
            e2 = b;
            do
              g |= e2.lane, e2 = e2.next;
            while (e2 !== b);
          } else null === f2 && (e2.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q2;
        }
      }
      function sh(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a) for (b = 0; b < a.length; b++) {
          var d = a[b], e2 = d.callback;
          if (null !== e2) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e2) throw Error(p2(191, e2));
            e2.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p2(174));
        return a;
      }
      function yh(a, b) {
        G2(wh, b);
        G2(vh, a);
        G2(uh, th);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
        }
        E2(uh);
        G2(uh, b);
      }
      function zh() {
        E2(uh);
        E2(vh);
        E2(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b = xh(uh.current);
        var c = lb(b, a.type);
        b !== c && (G2(vh, a), G2(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E2(uh), E2(vh));
      }
      var L2 = Uf(0);
      function Ch(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua2.ReactCurrentDispatcher;
      var Gh = ua2.ReactCurrentBatchConfig;
      var Hh = 0;
      var M2 = null;
      var N3 = null;
      var O3 = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P2() {
        throw Error(p2(321));
      }
      function Mh(a, b) {
        if (null === b) return false;
        for (var c = 0; c < b.length && c < a.length; c++) if (!He3(a[c], b[c])) return false;
        return true;
      }
      function Nh(a, b, c, d, e2, f2) {
        Hh = f2;
        M2 = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e2);
        if (Jh) {
          f2 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f2) throw Error(p2(301));
            f2 += 1;
            O3 = N3 = null;
            b.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e2);
          } while (Jh);
        }
        Fh.current = Rh;
        b = null !== N3 && null !== N3.next;
        Hh = 0;
        O3 = N3 = M2 = null;
        Ih = false;
        if (b) throw Error(p2(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O3 ? M2.memoizedState = O3 = a : O3 = O3.next = a;
        return O3;
      }
      function Uh() {
        if (null === N3) {
          var a = M2.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N3.next;
        var b = null === O3 ? M2.memoizedState : O3.next;
        if (null !== b) O3 = b, N3 = a;
        else {
          if (null === a) throw Error(p2(310));
          N3 = a;
          a = { memoizedState: N3.memoizedState, baseState: N3.baseState, baseQueue: N3.baseQueue, queue: N3.queue, next: null };
          null === O3 ? M2.memoizedState = O3 = a : O3 = O3.next = a;
        }
        return O3;
      }
      function Vh(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function Wh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p2(311));
        c.lastRenderedReducer = a;
        var d = N3, e2 = d.baseQueue, f2 = c.pending;
        if (null !== f2) {
          if (null !== e2) {
            var g = e2.next;
            e2.next = f2.next;
            f2.next = g;
          }
          d.baseQueue = e2 = f2;
          c.pending = null;
        }
        if (null !== e2) {
          f2 = e2.next;
          d = d.baseState;
          var h = g = null, k2 = null, l2 = f2;
          do {
            var m = l2.lane;
            if ((Hh & m) === m) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
            else {
              var q2 = {
                lane: m,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
              M2.lanes |= m;
              rh |= m;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f2);
          null === k2 ? g = d : k2.next = h;
          He3(d, b.memoizedState) || (dh = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k2;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e2 = a;
          do
            f2 = e2.lane, M2.lanes |= f2, rh |= f2, e2 = e2.next;
          while (e2 !== a);
        } else null === e2 && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p2(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e2 = c.pending, f2 = b.memoizedState;
        if (null !== e2) {
          c.pending = null;
          var g = e2 = e2.next;
          do
            f2 = a(f2, g.action), g = g.next;
          while (g !== e2);
          He3(f2, b.memoizedState) || (dh = true);
          b.memoizedState = f2;
          null === b.baseQueue && (b.baseState = f2);
          c.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function Yh() {
      }
      function Zh(a, b) {
        var c = M2, d = Uh(), e2 = b(), f2 = !He3(d.memoizedState, e2);
        f2 && (d.memoizedState = e2, dh = true);
        d = d.queue;
        $h(ai.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f2 || null !== O3 && O3.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi2(9, ci2.bind(null, c, d, e2, b), void 0, null);
          if (null === Q2) throw Error(p2(349));
          0 !== (Hh & 30) || di2(c, b, e2);
        }
        return e2;
      }
      function di2(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = M2.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M2.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function ci2(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        ei(b) && fi2(a);
      }
      function ai(a, b, c) {
        return c(function() {
          ei(b) && fi2(a);
        });
      }
      function ei(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !He3(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi2(a) {
        var b = ih(a, 1);
        null !== b && gi2(b, a, 1, -1);
      }
      function hi2(a) {
        var b = Th();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ii2.bind(null, M2, a);
        return [b.memoizedState, a];
      }
      function bi2(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = M2.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M2.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function ji2() {
        return Uh().memoizedState;
      }
      function ki2(a, b, c, d) {
        var e2 = Th();
        M2.flags |= a;
        e2.memoizedState = bi2(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function li2(a, b, c, d) {
        var e2 = Uh();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== N3) {
          var g = N3.memoizedState;
          f2 = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e2.memoizedState = bi2(b, c, f2, d);
            return;
          }
        }
        M2.flags |= a;
        e2.memoizedState = bi2(1 | b, c, f2, d);
      }
      function mi2(a, b) {
        return ki2(8390656, 8, a, b);
      }
      function $h(a, b) {
        return li2(2048, 8, a, b);
      }
      function ni2(a, b) {
        return li2(4, 2, a, b);
      }
      function oi2(a, b) {
        return li2(4, 4, a, b);
      }
      function pi2(a, b) {
        if ("function" === typeof b) return a = a(), b(a), function() {
          b(null);
        };
        if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
          b.current = null;
        };
      }
      function qi2(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li2(4, 4, pi2.bind(null, b, a), c);
      }
      function ri2() {
      }
      function si2(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function ti2(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function ui2(a, b, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He3(c, b) || (c = yc(), M2.lanes |= c, rh |= c, a.baseState = true);
        return b;
      }
      function vi2(a, b) {
        var c = C2;
        C2 = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b();
        } finally {
          C2 = c, Gh.transition = d;
        }
      }
      function wi2() {
        return Uh().memoizedState;
      }
      function xi2(a, b, c) {
        var d = yi2(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, c);
        else if (c = hh(a, b, c, d), null !== c) {
          var e2 = R2();
          gi2(c, a, d, e2);
          Bi2(c, b, d);
        }
      }
      function ii2(a, b, c) {
        var d = yi2(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, e2);
        else {
          var f2 = a.alternate;
          if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
            var g = b.lastRenderedState, h = f2(g, c);
            e2.hasEagerState = true;
            e2.eagerState = h;
            if (He3(h, g)) {
              var k2 = b.interleaved;
              null === k2 ? (e2.next = e2, gh(b)) : (e2.next = k2.next, k2.next = e2);
              b.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
          c = hh(a, b, e2, d);
          null !== c && (e2 = R2(), gi2(c, a, d, e2), Bi2(c, b, d));
        }
      }
      function zi(a) {
        var b = a.alternate;
        return a === M2 || null !== b && b === M2;
      }
      function Ai(a, b) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Bi2(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P2, useContext: P2, useEffect: P2, useImperativeHandle: P2, useInsertionEffect: P2, useLayoutEffect: P2, useMemo: P2, useReducer: P2, useRef: P2, useState: P2, useDebugValue: P2, useDeferredValue: P2, useTransition: P2, useMutableSource: P2, useSyncExternalStore: P2, useId: P2, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b) {
        Th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: eh, useEffect: mi2, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki2(
          4194308,
          4,
          pi2.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ki2(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ki2(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = xi2.bind(null, M2, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = Th();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: hi2, useDebugValue: ri2, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi2(false), b = a[0];
        a = vi2.bind(null, a[1]);
        Th().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = M2, e2 = Th();
        if (I2) {
          if (void 0 === c) throw Error(p2(407));
          c = c();
        } else {
          c = b();
          if (null === Q2) throw Error(p2(349));
          0 !== (Hh & 30) || di2(d, b, c);
        }
        e2.memoizedState = c;
        var f2 = { value: c, getSnapshot: b };
        e2.queue = f2;
        mi2(ai.bind(
          null,
          d,
          f2,
          a
        ), [a]);
        d.flags |= 2048;
        bi2(9, ci2.bind(null, d, f2, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b = Q2.identifierPrefix;
        if (I2) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Kh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si2,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi2,
        useInsertionEffect: ni2,
        useLayoutEffect: oi2,
        useMemo: ti2,
        useReducer: Wh,
        useRef: ji2,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri2,
        useDeferredValue: function(a) {
          var b = Uh();
          return ui2(b, N3.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b = Uh().memoizedState;
          return [a, b];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi2,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si2, useContext: eh, useEffect: $h, useImperativeHandle: qi2, useInsertionEffect: ni2, useLayoutEffect: oi2, useMemo: ti2, useReducer: Xh, useRef: ji2, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri2, useDeferredValue: function(a) {
        var b = Uh();
        return null === N3 ? b.memoizedState = a : ui2(b, N3.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi2, unstable_isNewReconciler: false };
      function Ci2(a, b) {
        if (a && a.defaultProps) {
          b = A2({}, b);
          a = a.defaultProps;
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      function Di2(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A2({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei2 = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = R2(), e2 = yi2(a), f2 = mh(d, e2);
        f2.payload = b;
        void 0 !== c && null !== c && (f2.callback = c);
        b = nh(a, f2, e2);
        null !== b && (gi2(b, a, e2, d), oh(b, a, e2));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = R2(), e2 = yi2(a), f2 = mh(d, e2);
        f2.tag = 1;
        f2.payload = b;
        void 0 !== c && null !== c && (f2.callback = c);
        b = nh(a, f2, e2);
        null !== b && (gi2(b, a, e2, d), oh(b, a, e2));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = R2(), d = yi2(a), e2 = mh(c, d);
        e2.tag = 2;
        void 0 !== b && null !== b && (e2.callback = b);
        b = nh(a, e2, d);
        null !== b && (gi2(b, a, d, c), oh(b, a, d));
      } };
      function Fi2(a, b, c, d, e2, f2, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie3(c, d) || !Ie3(e2, f2) : true;
      }
      function Gi(a, b, c) {
        var d = false, e2 = Vf;
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b) ? Xf : H2.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
        b = new b(c, f2);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Ei2;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
        return b;
      }
      function Hi(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Ei2.enqueueReplaceState(b, b.state, null);
      }
      function Ii2(a, b, c, d) {
        var e2 = a.stateNode;
        e2.props = c;
        e2.state = a.memoizedState;
        e2.refs = {};
        kh(a);
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b) ? Xf : H2.current, e2.context = Yf(a, f2));
        e2.state = a.memoizedState;
        f2 = b.getDerivedStateFromProps;
        "function" === typeof f2 && (Di2(a, b, f2, c), e2.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b !== e2.state && Ei2.enqueueReplaceState(e2, e2.state, null), qh(a, c, e2, d), e2.state = a.memoizedState);
        "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
      }
      function Ji(a, b) {
        try {
          var c = "", d = b;
          do
            c += Pa2(d), d = d.return;
          while (d);
          var e2 = c;
        } catch (f2) {
          e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a, source: b, stack: e2, digest: null };
      }
      function Ki(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Li2(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Oi2 || (Oi2 = true, Pi = d);
          Li2(a, b);
        };
        return c;
      }
      function Qi(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e2 = b.value;
          c.payload = function() {
            return d(e2);
          };
          c.callback = function() {
            Li2(a, b);
          };
        }
        var f2 = a.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
          Li2(a, b);
          "function" !== typeof d && (null === Ri2 ? Ri2 = /* @__PURE__ */ new Set([this]) : Ri2.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si2(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi();
          var e2 = /* @__PURE__ */ new Set();
          d.set(b, e2);
        } else e2 = d.get(b), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b, e2));
        e2.has(c) || (e2.add(c), a = Ti2.bind(null, a, b, c), b.then(a, a));
      }
      function Ui2(a) {
        do {
          var b;
          if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi2(a, b, c, d, e2) {
        if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e2;
        return a;
      }
      var Wi = ua2.ReactCurrentOwner;
      var dh = false;
      function Xi2(a, b, c, d) {
        b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
      }
      function Yi(a, b, c, d, e2) {
        c = c.render;
        var f2 = b.ref;
        ch(b, e2);
        d = Nh(a, b, c, d, f2, e2);
        c = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, Zi2(a, b, e2);
        I2 && c && vg(b);
        b.flags |= 1;
        Xi2(a, b, d, e2);
        return b.child;
      }
      function $i2(a, b, c, d, e2) {
        if (null === a) {
          var f2 = c.type;
          if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e2);
          a = Rg(c.type, null, d, b, b.mode, e2);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f2 = a.child;
        if (0 === (a.lanes & e2)) {
          var g = f2.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie3;
          if (c(g, d) && a.ref === b.ref) return Zi2(a, b, e2);
        }
        b.flags |= 1;
        a = Pg(f2, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function bj(a, b, c, d, e2) {
        if (null !== a) {
          var f2 = a.memoizedProps;
          if (Ie3(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
          else return b.lanes = a.lanes, Zi2(a, b, e2);
        }
        return cj(a, b, c, d, e2);
      }
      function dj(a, b, c) {
        var d = b.pendingProps, e2 = d.children, f2 = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G2(ej, fj), fj |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f2 ? f2.baseLanes : c;
          G2(ej, fj);
          fj |= d;
        }
        else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G2(ej, fj), fj |= d;
        Xi2(a, b, e2, c);
        return b.child;
      }
      function gj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
      }
      function cj(a, b, c, d, e2) {
        var f2 = Zf(c) ? Xf : H2.current;
        f2 = Yf(b, f2);
        ch(b, e2);
        c = Nh(a, b, c, d, f2, e2);
        d = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, Zi2(a, b, e2);
        I2 && d && vg(b);
        b.flags |= 1;
        Xi2(a, b, c, e2);
        return b.child;
      }
      function hj(a, b, c, d, e2) {
        if (Zf(c)) {
          var f2 = true;
          cg(b);
        } else f2 = false;
        ch(b, e2);
        if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii2(b, c, d, e2), d = true;
        else if (null === a) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k2 = g.context, l2 = c.contextType;
          "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H2.current, l2 = Yf(b, l2));
          var m = c.getDerivedStateFromProps, q2 = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b, g, d, l2);
          jh = false;
          var r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e2);
          k2 = b.memoizedState;
          h !== d || r !== k2 || Wf.current || jh ? ("function" === typeof m && (Di2(b, c, m, d), k2 = b.memoizedState), (h = jh || Fi2(b, c, h, d, r, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          lh(a, b);
          h = b.memoizedProps;
          l2 = b.type === b.elementType ? h : Ci2(b.type, h);
          g.props = l2;
          q2 = b.pendingProps;
          r = g.context;
          k2 = c.contextType;
          "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H2.current, k2 = Yf(b, k2));
          var y = c.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r !== k2) && Hi(b, g, d, k2);
          jh = false;
          r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e2);
          var n = b.memoizedState;
          h !== q2 || r !== n || Wf.current || jh ? ("function" === typeof y && (Di2(b, c, y, d), n = b.memoizedState), (l2 = jh || Fi2(b, c, l2, d, r, n, k2) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return jj(a, b, c, d, f2, e2);
      }
      function jj(a, b, c, d, e2, f2) {
        gj(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g) return e2 && dg(b, c, false), Zi2(a, b, f2);
        d = b.stateNode;
        Wi.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi2(a, b, h, f2);
        b.memoizedState = d.state;
        e2 && dg(b, c, true);
        return b.child;
      }
      function kj(a) {
        var b = a.stateNode;
        b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
        yh(a, b.containerInfo);
      }
      function lj(a, b, c, d, e2) {
        Ig();
        Jg(e2);
        b.flags |= 256;
        Xi2(a, b, c, d);
        return b.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b, c) {
        var d = b.pendingProps, e2 = L2.current, f2 = false, g = 0 !== (b.flags & 128), h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
        if (h) f2 = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState) e2 |= 1;
        G2(L2, e2 & 1);
        if (null === a) {
          Eg(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
        }
        e2 = a.memoizedState;
        if (null !== e2 && (h = e2.dehydrated, null !== h)) return rj(a, b, g, d, h, e2, c);
        if (f2) {
          f2 = d.fallback;
          g = b.mode;
          e2 = a.child;
          h = e2.sibling;
          var k2 = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e2 ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Pg(e2, k2), d.subtreeFlags = e2.subtreeFlags & 14680064);
          null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
          f2.return = b;
          d.return = b;
          d.sibling = f2;
          b.child = d;
          d = f2;
          f2 = b.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f2.memoizedState = g;
          f2.childLanes = a.childLanes & ~c;
          b.memoizedState = mj;
          return d;
        }
        f2 = a.child;
        a = f2.sibling;
        d = Pg(f2, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function qj(a, b) {
        b = pj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function sj(a, b, c, d) {
        null !== d && Jg(d);
        Ug(b, a.child, null, c);
        a = qj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function rj(a, b, c, d, e2, f2, g) {
        if (c) {
          if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p2(422))), sj(a, b, g, d);
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f2 = d.fallback;
          e2 = b.mode;
          d = pj({ mode: "visible", children: d.children }, e2, 0, null);
          f2 = Tg(f2, e2, g, null);
          f2.flags |= 2;
          d.return = b;
          f2.return = b;
          d.sibling = f2;
          b.child = d;
          0 !== (b.mode & 1) && Ug(b, a.child, null, g);
          b.child.memoizedState = nj(g);
          b.memoizedState = mj;
          return f2;
        }
        if (0 === (b.mode & 1)) return sj(a, b, g, null);
        if ("$!" === e2.data) {
          d = e2.nextSibling && e2.nextSibling.dataset;
          if (d) var h = d.dgst;
          d = h;
          f2 = Error(p2(419));
          d = Ki(f2, d, void 0);
          return sj(a, b, g, d);
        }
        h = 0 !== (g & a.childLanes);
        if (dh || h) {
          d = Q2;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e2 = 2;
                break;
              case 16:
                e2 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e2 = 32;
                break;
              case 536870912:
                e2 = 268435456;
                break;
              default:
                e2 = 0;
            }
            e2 = 0 !== (e2 & (d.suspendedLanes | g)) ? 0 : e2;
            0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi2(d, a, e2, -1));
          }
          tj();
          d = Ki(Error(p2(421)));
          return sj(a, b, g, d);
        }
        if ("$?" === e2.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e2._reactRetry = b, null;
        a = f2.treeContext;
        yg = Lf(e2.nextSibling);
        xg = b;
        I2 = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
        b = qj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function vj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        bh(a.return, b, c);
      }
      function wj(a, b, c, d, e2) {
        var f2 = a.memoizedState;
        null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
      }
      function xj(a, b, c) {
        var d = b.pendingProps, e2 = d.revealOrder, f2 = d.tail;
        Xi2(a, b, d.children, c);
        d = L2.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
            else if (19 === a.tag) vj(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G2(L2, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;
        else switch (e2) {
          case "forwards":
            c = b.child;
            for (e2 = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e2 = c), c = c.sibling;
            c = e2;
            null === c ? (e2 = b.child, b.child = null) : (e2 = c.sibling, c.sibling = null);
            wj(b, false, e2, c, f2);
            break;
          case "backwards":
            c = null;
            e2 = b.child;
            for (b.child = null; null !== e2; ) {
              a = e2.alternate;
              if (null !== a && null === Ch(a)) {
                b.child = e2;
                break;
              }
              a = e2.sibling;
              e2.sibling = c;
              c = e2;
              e2 = a;
            }
            wj(b, true, c, null, f2);
            break;
          case "together":
            wj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function ij(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function Zi2(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        rh |= b.lanes;
        if (0 === (c & b.childLanes)) return null;
        if (null !== a && b.child !== a.child) throw Error(p2(153));
        if (null !== b.child) {
          a = b.child;
          c = Pg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function yj(a, b, c) {
        switch (b.tag) {
          case 3:
            kj(b);
            Ig();
            break;
          case 5:
            Ah(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            yh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e2 = b.memoizedProps.value;
            G2(Wg, d._currentValue);
            d._currentValue = e2;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G2(L2, L2.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
              G2(L2, L2.current & 1);
              a = Zi2(a, b, c);
              return null !== a ? a.sibling : null;
            }
            G2(L2, L2.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b, c);
              b.flags |= 128;
            }
            e2 = b.memoizedState;
            null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
            G2(L2, L2.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b.lanes = 0, dj(a, b, c);
        }
        return Zi2(a, b, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b, c, d) {
        var e2 = a.memoizedProps;
        if (e2 !== d) {
          a = b.stateNode;
          xh(uh.current);
          var f2 = null;
          switch (c) {
            case "input":
              e2 = Ya2(a, e2);
              d = Ya2(a, d);
              f2 = [];
              break;
            case "select":
              e2 = A2({}, e2, { value: void 0 });
              d = A2({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e2 = gb(a, e2);
              d = gb(a, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l2 in e2) if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
            var h = e2[l2];
            for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea2.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
          for (l2 in d) {
            var k2 = d[l2];
            h = null != e2 ? e2[l2] : void 0;
            if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
              for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
            } else c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
            else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea2.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D2("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
          }
          c && (f2 = f2 || []).push("style", c);
          var l2 = f2;
          if (b.updateQueue = l2) b.flags |= 4;
        }
      };
      Cj = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Dj(a, b) {
        if (!I2) switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S2(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b) for (var e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
        else for (e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a, e2 = e2.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Ej(a, b, c) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S2(b), null;
          case 1:
            return Zf(b.type) && $f(), S2(b), null;
          case 3:
            d = b.stateNode;
            zh();
            E2(Wf);
            E2(H2);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b);
            S2(b);
            return null;
          case 5:
            Bh(b);
            var e2 = xh(wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Bj(a, b, c, d, e2), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode) throw Error(p2(166));
                S2(b);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.type;
                var f2 = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f2;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    D2("cancel", d);
                    D2("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D2("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], d);
                    break;
                  case "source":
                    D2("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D2(
                      "error",
                      d
                    );
                    D2("load", d);
                    break;
                  case "details":
                    D2("toggle", d);
                    break;
                  case "input":
                    Za(d, f2);
                    D2("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D2("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D2("invalid", d);
                }
                ub(c, f2);
                e2 = null;
                for (var g in f2) if (f2.hasOwnProperty(g)) {
                  var h = f2[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e2 = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a
                  ), e2 = ["children", "" + h]) : ea2.hasOwnProperty(g) && null != h && "onScroll" === g && D2("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va2(d);
                    db(d, f2, true);
                    break;
                  case "textarea":
                    Va2(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e2;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b;
                a[Pf] = d;
                zj(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D2("cancel", a);
                      D2("close", a);
                      e2 = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D2("load", a);
                      e2 = d;
                      break;
                    case "video":
                    case "audio":
                      for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], a);
                      e2 = d;
                      break;
                    case "source":
                      D2("error", a);
                      e2 = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D2(
                        "error",
                        a
                      );
                      D2("load", a);
                      e2 = d;
                      break;
                    case "details":
                      D2("toggle", a);
                      e2 = d;
                      break;
                    case "input":
                      Za(a, d);
                      e2 = Ya2(a, d);
                      D2("invalid", a);
                      break;
                    case "option":
                      e2 = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e2 = A2({}, d, { value: void 0 });
                      D2("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e2 = gb(a, d);
                      D2("invalid", a);
                      break;
                    default:
                      e2 = d;
                  }
                  ub(c, e2);
                  h = e2;
                  for (f2 in h) if (h.hasOwnProperty(f2)) {
                    var k2 = h[f2];
                    "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea2.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D2("scroll", a) : null != k2 && ta2(a, f2, k2, g));
                  }
                  switch (c) {
                    case "input":
                      Va2(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va2(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa2(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e2.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S2(b);
            return null;
          case 6:
            if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(p2(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Of] = b;
                if (f2 = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f2 && (b.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S2(b);
            return null;
          case 13:
            E2(L2);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I2 && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
              else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f2) throw Error(p2(318));
                  f2 = b.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2) throw Error(p2(317));
                  f2[Of] = b;
                } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S2(b);
                f2 = false;
              } else null !== zg && (Fj(zg), zg = null), f2 = true;
              if (!f2) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L2.current & 1) ? 0 === T2 && (T2 = 3) : tj()));
            null !== b.updateQueue && (b.flags |= 4);
            S2(b);
            return null;
          case 4:
            return zh(), Aj(a, b), null === a && sf2(b.stateNode.containerInfo), S2(b), null;
          case 10:
            return ah(b.type._context), S2(b), null;
          case 17:
            return Zf(b.type) && $f(), S2(b), null;
          case 19:
            E2(L2);
            f2 = b.memoizedState;
            if (null === f2) return S2(b), null;
            d = 0 !== (b.flags & 128);
            g = f2.rendering;
            if (null === g) if (d) Dj(f2, false);
            else {
              if (0 !== T2 || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b.flags |= 128;
                  Dj(f2, false);
                  d = g.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G2(L2, L2.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
              null !== f2.tail && B3() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I2) return S2(b), null;
              } else 2 * B3() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
              f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
            }
            if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B3(), b.sibling = null, c = L2.current, G2(L2, d ? c & 1 | 2 : c & 1), b;
            S2(b);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S2(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S2(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p2(156, b.tag));
      }
      function Ij(a, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return zh(), E2(Wf), E2(H2), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Bh(b), null;
          case 13:
            E2(L2);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate) throw Error(p2(340));
              Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E2(L2), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U3 = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V2 = null;
      function Lj(a, b) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W3(a, b, d);
        }
        else c.current = null;
      }
      function Mj(a, b, c) {
        try {
          c();
        } catch (d) {
          W3(a, b, d);
        }
      }
      var Nj = false;
      function Oj(a, b) {
        Cf = dd2;
        a = Me3();
        if (Ne3(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e2 = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f2.nodeType;
              } catch (F2) {
                c = null;
                break a;
              }
              var g = 0, h = -1, k2 = -1, l2 = 0, m = 0, q2 = a, r = null;
              b: for (; ; ) {
                for (var y; ; ) {
                  q2 !== c || 0 !== e2 && 3 !== q2.nodeType || (h = g + e2);
                  q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                  3 === q2.nodeType && (g += q2.nodeValue.length);
                  if (null === (y = q2.firstChild)) break;
                  r = q2;
                  q2 = y;
                }
                for (; ; ) {
                  if (q2 === a) break b;
                  r === c && ++l2 === e2 && (h = g);
                  r === f2 && ++m === d && (k2 = g);
                  if (null !== (y = q2.nextSibling)) break;
                  q2 = r;
                  r = q2.parentNode;
                }
                q2 = y;
              }
              c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd2 = false;
        for (V2 = b; null !== V2; ) if (b = V2, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V2 = a;
        else for (; null !== V2; ) {
          b = V2;
          try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J2 = n.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci2(b.type, t), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u = b.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p2(163));
            }
          } catch (F2) {
            W3(b, b.return, F2);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V2 = a;
            break;
          }
          V2 = b.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e2 = d = d.next;
          do {
            if ((e2.tag & a) === a) {
              var f2 = e2.destroy;
              e2.destroy = void 0;
              void 0 !== f2 && Mj(b, c, f2);
            }
            e2 = e2.next;
          } while (e2 !== d);
        }
      }
      function Qj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Rj(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Sj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Sj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
      }
      function Wj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
      }
      var X3 = null;
      var Xj = false;
      function Yj(a, b, c) {
        for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
      }
      function Zj(a, b, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h) {
        }
        switch (c.tag) {
          case 5:
            U3 || Lj(c, b);
          case 6:
            var d = X3, e2 = Xj;
            X3 = null;
            Yj(a, b, c);
            X3 = d;
            Xj = e2;
            null !== X3 && (Xj ? (a = X3, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X3.removeChild(c.stateNode));
            break;
          case 18:
            null !== X3 && (Xj ? (a = X3, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X3, c.stateNode));
            break;
          case 4:
            d = X3;
            e2 = Xj;
            X3 = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b, c);
            X3 = d;
            Xj = e2;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U3 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e2 = d = d.next;
              do {
                var f2 = e2, g = f2.destroy;
                f2 = f2.tag;
                void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
                e2 = e2.next;
              } while (e2 !== d);
            }
            Yj(a, b, c);
            break;
          case 1:
            if (!U3 && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
              W3(c, b, h);
            }
            Yj(a, b, c);
            break;
          case 21:
            Yj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (U3 = (d = U3) || null !== c.memoizedState, Yj(a, b, c), U3 = d) : Yj(a, b, c);
            break;
          default:
            Yj(a, b, c);
        }
      }
      function ak(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b.forEach(function(b2) {
            var d = bk.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function ck(a, b) {
        var c = b.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e2 = c[d];
          try {
            var f2 = a, g = b, h = g;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X3 = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X3 = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X3 = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X3) throw Error(p2(160));
            Zj(f2, g, e2);
            X3 = null;
            Xj = false;
            var k2 = e2.alternate;
            null !== k2 && (k2.return = null);
            e2.return = null;
          } catch (l2) {
            W3(e2, b, l2);
          }
        }
        if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
      }
      function dk(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W3(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e2 = a.stateNode;
              try {
                ob(e2, "");
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            if (d & 4 && (e2 = a.stateNode, null != e2)) {
              var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
              a.updateQueue = null;
              if (null !== k2) try {
                "input" === h && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h, g);
                var l2 = vb(h, f2);
                for (g = 0; g < k2.length; g += 2) {
                  var m = k2[g], q2 = k2[g + 1];
                  "style" === m ? sb(e2, q2) : "dangerouslySetInnerHTML" === m ? nb(e2, q2) : "children" === m ? ob(e2, q2) : ta2(e2, m, q2, l2);
                }
                switch (h) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y = f2.value;
                    null != y ? fb(e2, !!f2.multiple, y, false) : r !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p2(162));
              e2 = a.stateNode;
              f2 = a.memoizedProps;
              try {
                e2.nodeValue = f2;
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b.containerInfo);
            } catch (t) {
              W3(a, a.return, t);
            }
            break;
          case 4:
            ck(b, a);
            ek(a);
            break;
          case 13:
            ck(b, a);
            ek(a);
            e2 = a.child;
            e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B3()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U3 = (l2 = U3) || m, ck(b, a), U3 = l2) : ck(b, a);
            ek(a);
            if (d & 8192) {
              l2 = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l2) && !m && 0 !== (a.mode & 1)) for (V2 = a, m = a.child; null !== m; ) {
                for (q2 = V2 = m; null !== V2; ) {
                  r = V2;
                  y = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W3(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q2);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r, V2 = y) : gk(q2);
                }
                m = m.sibling;
              }
              a: for (m = null, q2 = a; ; ) {
                if (5 === q2.tag) {
                  if (null === m) {
                    m = q2;
                    try {
                      e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                    } catch (t) {
                      W3(a, a.return, t);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === m) try {
                    q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                  } catch (t) {
                    W3(a, a.return, t);
                  }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a) break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a) break a;
                  m === q2 && (m = null);
                  q2 = q2.return;
                }
                m === q2 && (m = null);
                q2.sibling.return = q2.return;
                q2 = q2.sibling;
              }
            }
            break;
          case 19:
            ck(b, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p2(160));
            }
            switch (d.tag) {
              case 5:
                var e2 = d.stateNode;
                d.flags & 32 && (ob(e2, ""), d.flags &= -33);
                var f2 = Uj(a);
                Wj(a, f2, e2);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Uj(a);
                Vj(a, h, g);
                break;
              default:
                throw Error(p2(161));
            }
          } catch (k2) {
            W3(a, a.return, k2);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function hk(a, b, c) {
        V2 = a;
        ik(a, b, c);
      }
      function ik(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== V2; ) {
          var e2 = V2, f2 = e2.child;
          if (22 === e2.tag && d) {
            var g = null !== e2.memoizedState || Jj;
            if (!g) {
              var h = e2.alternate, k2 = null !== h && null !== h.memoizedState || U3;
              h = Jj;
              var l2 = U3;
              Jj = g;
              if ((U3 = k2) && !l2) for (V2 = e2; null !== V2; ) g = V2, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g, V2 = k2) : jk(e2);
              for (; null !== f2; ) V2 = f2, ik(f2, b, c), f2 = f2.sibling;
              V2 = e2;
              Jj = h;
              U3 = l2;
            }
            kk(a, b, c);
          } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V2 = f2) : kk(a, b, c);
        }
      }
      function kk(a) {
        for (; null !== V2; ) {
          var b = V2;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U3 || Qj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !U3) if (null === c) d.componentDidMount();
                  else {
                    var e2 = b.elementType === b.type ? c.memoizedProps : Ci2(b.type, c.memoizedProps);
                    d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f2 = b.updateQueue;
                  null !== f2 && sh(b, f2, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                    sh(b, g, c);
                  }
                  break;
                case 5:
                  var h = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h;
                    var k2 = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k2.autoFocus && c.focus();
                        break;
                      case "img":
                        k2.src && (c.src = k2.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l2 = b.alternate;
                    if (null !== l2) {
                      var m = l2.memoizedState;
                      if (null !== m) {
                        var q2 = m.dehydrated;
                        null !== q2 && bd(q2);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p2(163));
              }
              U3 || b.flags & 512 && Rj(b);
            } catch (r) {
              W3(b, b.return, r);
            }
          }
          if (b === a) {
            V2 = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V2 = c;
            break;
          }
          V2 = b.return;
        }
      }
      function gk(a) {
        for (; null !== V2; ) {
          var b = V2;
          if (b === a) {
            V2 = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V2 = c;
            break;
          }
          V2 = b.return;
        }
      }
      function jk(a) {
        for (; null !== V2; ) {
          var b = V2;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Qj(4, b);
                } catch (k2) {
                  W3(b, c, k2);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e2 = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k2) {
                    W3(b, e2, k2);
                  }
                }
                var f2 = b.return;
                try {
                  Rj(b);
                } catch (k2) {
                  W3(b, f2, k2);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Rj(b);
                } catch (k2) {
                  W3(b, g, k2);
                }
            }
          } catch (k2) {
            W3(b, b.return, k2);
          }
          if (b === a) {
            V2 = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V2 = h;
            break;
          }
          V2 = b.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua2.ReactCurrentDispatcher;
      var nk = ua2.ReactCurrentOwner;
      var ok = ua2.ReactCurrentBatchConfig;
      var K = 0;
      var Q2 = null;
      var Y2 = null;
      var Z2 = 0;
      var fj = 0;
      var ej = Uf(0);
      var T2 = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi2 = false;
      var Pi = null;
      var Ri2 = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R2() {
        return 0 !== (K & 6) ? B3() : -1 !== Ak ? Ak : Ak = B3();
      }
      function yi2(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z2) return Z2 & -Z2;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a = C2;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi2(a, b, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p2(185));
        Ac(a, c, d);
        if (0 === (K & 2) || a !== Q2) a === Q2 && (0 === (K & 2) && (qk |= c), 4 === T2 && Ck(a, Z2)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B3() + 500, fg && jg());
      }
      function Dk(a, b) {
        var c = a.callbackNode;
        wc(a, b);
        var d = uc(a, a === Q2 ? Z2 : 0);
        if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && bc(c);
          if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
          }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Gk(a, b) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K & 6)) throw Error(p2(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc(a, a === Q2 ? Z2 : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
        else {
          b = d;
          var e2 = K;
          K |= 2;
          var f2 = Jk();
          if (Q2 !== a || Z2 !== b) uk = null, Gj = B3() + 500, Kk(a, b);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a, h);
            }
          while (1);
          $g();
          mk.current = f2;
          K = e2;
          null !== Y2 ? b = 0 : (Q2 = null, Z2 = 0, b = T2);
        }
        if (0 !== b) {
          2 === b && (e2 = xc(a), 0 !== e2 && (d = e2, b = Nk(a, e2)));
          if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B3()), c;
          if (6 === b) Ck(a, d);
          else {
            e2 = a.current.alternate;
            if (0 === (d & 30) && !Ok(e2) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B3()), c;
            a.finishedWork = e2;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p2(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b = fk + 500 - B3(), 10 < b)) {
                  if (0 !== uc(a, 0)) break;
                  e2 = a.suspendedLanes;
                  if ((e2 & d) !== d) {
                    R2();
                    a.pingedLanes |= a.suspendedLanes & e2;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b = a.eventTimes;
                for (e2 = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f2 = 1 << g;
                  g = b[g];
                  g > e2 && (e2 = g);
                  d &= ~f2;
                }
                d = e2;
                d = B3() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p2(329));
            }
          }
        }
        Dk(a, B3());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
        a = Ik(a, b);
        2 !== a && (b = tk, tk = c, null !== b && Fj(b));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e2 = c[d], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He3(f2(), e2)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
          else {
            if (b === a) break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Ck(a, b) {
        b &= ~rk;
        b &= ~qk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - oc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K & 6)) throw Error(p2(327));
        Hk();
        var b = uc(a, 0);
        if (0 === (b & 1)) return Dk(a, B3()), null;
        var c = Ik(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B3()), c;
        if (6 === c) throw Error(p2(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Pk(a, tk, uk);
        Dk(a, B3());
        return null;
      }
      function Qk(a, b) {
        var c = K;
        K |= 1;
        try {
          return a(b);
        } finally {
          K = c, 0 === K && (Gj = B3() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
        var b = K;
        K |= 1;
        var c = ok.transition, d = C2;
        try {
          if (ok.transition = null, C2 = 1, a) return a();
        } finally {
          C2 = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E2(ej);
      }
      function Kk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y2) for (c = Y2.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E2(Wf);
              E2(H2);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E2(L2);
              break;
            case 19:
              E2(L2);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q2 = a;
        Y2 = a = Pg(a.current, null);
        Z2 = fj = b;
        T2 = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e2 = d.next, f2 = c.pending;
            if (null !== f2) {
              var g = f2.next;
              f2.next = e2;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b) {
        do {
          var c = Y2;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M2.memoizedState; null !== d; ) {
                var e2 = d.queue;
                null !== e2 && (e2.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O3 = N3 = M2 = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T2 = 1;
              pk = b;
              Y2 = null;
              break;
            }
            a: {
              var f2 = a, g = c.return, h = c, k2 = b;
              b = Z2;
              h.flags |= 32768;
              if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
                var l2 = k2, m = h, q2 = m.tag;
                if (0 === (m.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Ui2(g);
                if (null !== y) {
                  y.flags &= -257;
                  Vi2(y, g, h, f2, b);
                  y.mode & 1 && Si2(f2, l2, b);
                  b = y;
                  k2 = l2;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k2);
                    b.updateQueue = t;
                  } else n.add(k2);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Si2(f2, l2, b);
                    tj();
                    break a;
                  }
                  k2 = Error(p2(426));
                }
              } else if (I2 && h.mode & 1) {
                var J2 = Ui2(g);
                if (null !== J2) {
                  0 === (J2.flags & 65536) && (J2.flags |= 256);
                  Vi2(J2, g, h, f2, b);
                  Jg(Ji(k2, h));
                  break a;
                }
              }
              f2 = k2 = Ji(k2, h);
              4 !== T2 && (T2 = 2);
              null === sk ? sk = [f2] : sk.push(f2);
              f2 = g;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b &= -b;
                    f2.lanes |= b;
                    var x2 = Ni(f2, k2, b);
                    ph(f2, x2);
                    break a;
                  case 1:
                    h = k2;
                    var w2 = f2.type, u = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri2 || !Ri2.has(u)))) {
                      f2.flags |= 65536;
                      b &= -b;
                      f2.lanes |= b;
                      var F2 = Qi(f2, h, b);
                      ph(f2, F2);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Sk(c);
          } catch (na2) {
            b = na2;
            Y2 === c && null !== c && (Y2 = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T2 || 3 === T2 || 2 === T2) T2 = 4;
        null === Q2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q2, Z2);
      }
      function Ik(a, b) {
        var c = K;
        K |= 2;
        var d = Jk();
        if (Q2 !== a || Z2 !== b) uk = null, Kk(a, b);
        do
          try {
            Tk();
            break;
          } catch (e2) {
            Mk(a, e2);
          }
        while (1);
        $g();
        K = c;
        mk.current = d;
        if (null !== Y2) throw Error(p2(261));
        Q2 = null;
        Z2 = 0;
        return T2;
      }
      function Tk() {
        for (; null !== Y2; ) Uk(Y2);
      }
      function Lk() {
        for (; null !== Y2 && !cc(); ) Uk(Y2);
      }
      function Uk(a) {
        var b = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b ? Sk(a) : Y2 = b;
        nk.current = null;
      }
      function Sk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Ej(c, b, fj), null !== c) {
              Y2 = c;
              return;
            }
          } else {
            c = Ij(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y2 = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T2 = 6;
              Y2 = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y2 = b;
            return;
          }
          Y2 = b = a;
        } while (null !== b);
        0 === T2 && (T2 = 5);
      }
      function Pk(a, b, c) {
        var d = C2, e2 = ok.transition;
        try {
          ok.transition = null, C2 = 1, Wk(a, b, c, d);
        } finally {
          ok.transition = e2, C2 = d;
        }
        return null;
      }
      function Wk(a, b, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K & 6)) throw Error(p2(327));
        c = a.finishedWork;
        var e2 = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p2(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f2 = c.lanes | c.childLanes;
        Bc(a, f2);
        a === Q2 && (Y2 = Q2 = null, Z2 = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f2 = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f2) {
          f2 = ok.transition;
          ok.transition = null;
          var g = C2;
          C2 = 1;
          var h = K;
          K |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe3(Df);
          dd2 = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e2);
          dc();
          K = h;
          C2 = g;
          ok.transition = f2;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e2);
        f2 = a.pendingLanes;
        0 === f2 && (Ri2 = null);
        mc(c.stateNode, d);
        Dk(a, B3());
        if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e2 = b[c], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
        if (Oi2) throw Oi2 = false, a = Pi, Pi = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f2 = a.pendingLanes;
        0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc(xk), b = ok.transition, c = C2;
          try {
            ok.transition = null;
            C2 = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K & 6)) throw Error(p2(331));
              var e2 = K;
              K |= 4;
              for (V2 = a.current; null !== V2; ) {
                var f2 = V2, g = f2.child;
                if (0 !== (V2.flags & 16)) {
                  var h = f2.deletions;
                  if (null !== h) {
                    for (var k2 = 0; k2 < h.length; k2++) {
                      var l2 = h[k2];
                      for (V2 = l2; null !== V2; ) {
                        var m = V2;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f2);
                        }
                        var q2 = m.child;
                        if (null !== q2) q2.return = m, V2 = q2;
                        else for (; null !== V2; ) {
                          m = V2;
                          var r = m.sibling, y = m.return;
                          Sj(m);
                          if (m === l2) {
                            V2 = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y;
                            V2 = r;
                            break;
                          }
                          V2 = y;
                        }
                      }
                    }
                    var n = f2.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J2 = t.sibling;
                          t.sibling = null;
                          t = J2;
                        } while (null !== t);
                      }
                    }
                    V2 = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V2 = g;
                else b: for (; null !== V2; ) {
                  f2 = V2;
                  if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f2, f2.return);
                  }
                  var x2 = f2.sibling;
                  if (null !== x2) {
                    x2.return = f2.return;
                    V2 = x2;
                    break b;
                  }
                  V2 = f2.return;
                }
              }
              var w2 = a.current;
              for (V2 = w2; null !== V2; ) {
                g = V2;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V2 = u;
                else b: for (g = w2; null !== V2; ) {
                  h = V2;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na2) {
                    W3(h, h.return, na2);
                  }
                  if (h === g) {
                    V2 = null;
                    break b;
                  }
                  var F2 = h.sibling;
                  if (null !== F2) {
                    F2.return = h.return;
                    V2 = F2;
                    break b;
                  }
                  V2 = h.return;
                }
              }
              K = e2;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na2) {
              }
              d = true;
            }
            return d;
          } finally {
            C2 = c, ok.transition = b;
          }
        }
        return false;
      }
      function Xk(a, b, c) {
        b = Ji(c, b);
        b = Ni(a, b, 1);
        a = nh(a, b, 1);
        b = R2();
        null !== a && (Ac(a, 1, b), Dk(a, b));
      }
      function W3(a, b, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b; ) {
          if (3 === b.tag) {
            Xk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri2 || !Ri2.has(d))) {
              a = Ji(c, a);
              a = Qi(b, a, 1);
              b = nh(b, a, 1);
              a = R2();
              null !== b && (Ac(b, 1, a), Dk(b, a));
              break;
            }
          }
          b = b.return;
        }
      }
      function Ti2(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = R2();
        a.pingedLanes |= a.suspendedLanes & c;
        Q2 === a && (Z2 & c) === c && (4 === T2 || 3 === T2 && (Z2 & 130023424) === Z2 && 500 > B3() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b);
      }
      function Yk(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = R2();
        a = ih(a, b);
        null !== a && (Ac(a, b, c), Dk(a, c));
      }
      function uj(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        Yk(a, c);
      }
      function bk(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e2 = a.memoizedState;
            null !== e2 && (c = e2.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p2(314));
        }
        null !== d && d.delete(b);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b, c) {
        if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I2 && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            ij(a, b);
            a = b.pendingProps;
            var e2 = Yf(b, H2.current);
            ch(b, c);
            e2 = Nh(null, b, d, a, e2, c);
            var f2 = Sh();
            b.flags |= 1;
            "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b), e2.updater = Ei2, b.stateNode = e2, e2._reactInternals = b, Ii2(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I2 && f2 && vg(b), Xi2(null, b, e2, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              ij(a, b);
              a = b.pendingProps;
              e2 = d._init;
              d = e2(d._payload);
              b.type = d;
              e2 = b.tag = Zk(d);
              a = Ci2(d, a);
              switch (e2) {
                case 0:
                  b = cj(null, b, d, a, c);
                  break a;
                case 1:
                  b = hj(null, b, d, a, c);
                  break a;
                case 11:
                  b = Yi(null, b, d, a, c);
                  break a;
                case 14:
                  b = $i2(null, b, d, Ci2(d.type, a), c);
                  break a;
              }
              throw Error(p2(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), cj(a, b, d, e2, c);
          case 1:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), hj(a, b, d, e2, c);
          case 3:
            a: {
              kj(b);
              if (null === a) throw Error(p2(387));
              d = b.pendingProps;
              f2 = b.memoizedState;
              e2 = f2.element;
              lh(a, b);
              qh(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
                e2 = Ji(Error(p2(423)), b);
                b = lj(a, b, d, c, e2);
                break a;
              } else if (d !== e2) {
                e2 = Ji(Error(p2(424)), b);
                b = lj(a, b, d, c, e2);
                break a;
              } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I2 = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e2) {
                  b = Zi2(a, b, c);
                  break a;
                }
                Xi2(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Ah(b), null === a && Eg(b), d = b.type, e2 = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e2.children, Ef(d, e2) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi2(a, b, g, c), b.child;
          case 6:
            return null === a && Eg(b), null;
          case 13:
            return oj(a, b, c);
          case 4:
            return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi2(a, b, d, c), b.child;
          case 11:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), Yi(a, b, d, e2, c);
          case 7:
            return Xi2(a, b, b.pendingProps, c), b.child;
          case 8:
            return Xi2(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Xi2(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e2 = b.pendingProps;
              f2 = b.memoizedProps;
              g = e2.value;
              G2(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f2) if (He3(f2.value, g)) {
                if (f2.children === e2.children && !Wf.current) {
                  b = Zi2(a, b, c);
                  break a;
                }
              } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                var h = f2.dependencies;
                if (null !== h) {
                  g = f2.child;
                  for (var k2 = h.firstContext; null !== k2; ) {
                    if (k2.context === d) {
                      if (1 === f2.tag) {
                        k2 = mh(-1, c & -c);
                        k2.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m = l2.pending;
                          null === m ? k2.next = k2 : (k2.next = m.next, m.next = k2);
                          l2.pending = k2;
                        }
                      }
                      f2.lanes |= c;
                      k2 = f2.alternate;
                      null !== k2 && (k2.lanes |= c);
                      bh(
                        f2.return,
                        c,
                        b
                      );
                      h.lanes |= c;
                      break;
                    }
                    k2 = k2.next;
                  }
                } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g = f2.return;
                  if (null === g) throw Error(p2(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  bh(g, c, b);
                  g = f2.sibling;
                } else g = f2.child;
                if (null !== g) g.return = f2;
                else for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
                f2 = g;
              }
              Xi2(a, b, e2.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e2 = b.type, d = b.pendingProps.children, ch(b, c), e2 = eh(e2), d = d(e2), b.flags |= 1, Xi2(a, b, d, c), b.child;
          case 14:
            return d = b.type, e2 = Ci2(d, b.pendingProps), e2 = Ci2(d.type, e2), $i2(a, b, d, e2, c);
          case 15:
            return bj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e2), Ii2(b, d, e2, c), jj(null, b, d, true, a, c);
          case 19:
            return xj(a, b, c);
          case 22:
            return dj(a, b, c);
        }
        throw Error(p2(156, b.tag));
      };
      function Fk(a, b) {
        return ac(a, b);
      }
      function $k(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b, c, d) {
        return new $k(a, b, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da) return 11;
          if (a === Ga2) return 14;
        }
        return 2;
      }
      function Pg(a, b) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b, c, d, e2, f2) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya2:
            return Tg(c.children, e2, f2, b);
          case za:
            g = 8;
            e2 |= 8;
            break;
          case Aa2:
            return a = Bg(12, c, b, e2 | 2), a.elementType = Aa2, a.lanes = f2, a;
          case Ea2:
            return a = Bg(13, c, b, e2), a.elementType = Ea2, a.lanes = f2, a;
          case Fa2:
            return a = Bg(19, c, b, e2), a.elementType = Fa2, a.lanes = f2, a;
          case Ia2:
            return pj(c, e2, f2, b);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba2:
                g = 10;
                break a;
              case Ca2:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga2:
                g = 14;
                break a;
              case Ha2:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p2(130, null == a ? a : typeof a, ""));
        }
        b = Bg(g, c, b, e2);
        b.elementType = a;
        b.type = d;
        b.lanes = f2;
        return b;
      }
      function Tg(a, b, c, d) {
        a = Bg(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function pj(a, b, c, d) {
        a = Bg(22, a, d, b);
        a.elementType = Ia2;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b, c) {
        a = Bg(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function Sg(a, b, c) {
        b = Bg(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function al(a, b, c, d, e2) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e2;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl2(a, b, c, d, e2, f2, g, h, k2) {
        a = new al(a, b, c, h, k2);
        1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
        f2 = Bg(3, null, null, b);
        a.current = f2;
        f2.stateNode = a;
        f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f2);
        return a;
      }
      function cl2(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa2, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function dl2(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p2(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p2(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b);
        }
        return b;
      }
      function el(a, b, c, d, e2, f2, g, h, k2) {
        a = bl2(c, d, true, a, e2, f2, g, h, k2);
        a.context = dl2(null);
        c = a.current;
        d = R2();
        e2 = yi2(c);
        f2 = mh(d, e2);
        f2.callback = void 0 !== b && null !== b ? b : null;
        nh(c, f2, e2);
        a.current.lanes = e2;
        Ac(a, e2, d);
        Dk(a, d);
        return a;
      }
      function fl2(a, b, c, d) {
        var e2 = b.current, f2 = R2(), g = yi2(e2);
        c = dl2(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = mh(f2, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = nh(e2, b, g);
        null !== a && (gi2(a, e2, g, f2), oh(a, e2, g));
        return g;
      }
      function gl2(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl2(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function il2(a, b) {
        hl2(a, b);
        (a = a.alternate) && hl2(a, b);
      }
      function jl2() {
        return null;
      }
      var kl2 = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.render = ll2.prototype.render = function(a) {
        var b = this._internalRoot;
        if (null === b) throw Error(p2(409));
        fl2(a, b, null, null);
      };
      ml2.prototype.unmount = ll2.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Rk(function() {
            fl2(null, a, null, null);
          });
          b[uf] = null;
        }
      };
      function ml2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Hc();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function nl2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl2() {
      }
      function ql2(a, b, c, d, e2) {
        if (e2) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a2 = gl2(g);
              f2.call(a2);
            };
          }
          var g = el(b, d, a, 0, null, false, false, "", pl2);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf2(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e2 = a.lastChild; ) a.removeChild(e2);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a2 = gl2(k2);
            h.call(a2);
          };
        }
        var k2 = bl2(a, 0, false, null, null, false, false, "", pl2);
        a._reactRootContainer = k2;
        a[uf] = k2.current;
        sf2(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl2(b, k2, c, d);
        });
        return k2;
      }
      function rl2(a, b, c, d, e2) {
        var f2 = c._reactRootContainer;
        if (f2) {
          var g = f2;
          if ("function" === typeof e2) {
            var h = e2;
            e2 = function() {
              var a2 = gl2(g);
              h.call(a2);
            };
          }
          fl2(b, g, a, e2);
        } else g = ql2(c, b, a, e2, d);
        return gl2(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = tc(b.pendingLanes);
              0 !== c && (Cc(b, c | 1), Dk(b, B3()), 0 === (K & 6) && (Gj = B3() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b2 = ih(a, 1);
              if (null !== b2) {
                var c2 = R2();
                gi2(b2, a, 1, c2);
              }
            }), il2(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b = ih(a, 134217728);
          if (null !== b) {
            var c = R2();
            gi2(b, a, 134217728, c);
          }
          il2(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b = yi2(a), c = ih(a, b);
          if (null !== c) {
            var d = R2();
            gi2(c, a, b, d);
          }
          il2(a, b);
        }
      };
      Hc = function() {
        return C2;
      };
      Ic = function(a, b) {
        var c = C2;
        try {
          return C2 = a, b();
        } finally {
          C2 = c;
        }
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e2 = Db(d);
                  if (!e2) throw Error(p2(90));
                  Wa(d);
                  bb(d, e2);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl2 = { usingClientEntryPoint: false, Events: [Cb, ue3, Db, Eb, Fb, Qk] };
      var tl2 = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul2 = { bundleType: tl2.bundleType, version: tl2.version, rendererPackageName: tl2.rendererPackageName, rendererConfig: tl2.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua2.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl2.findFiberByHostInstance || jl2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl2.isDisabled && vl2.supportsFiber) try {
          kc = vl2.inject(ul2), lc = vl2;
        } catch (a) {
        }
      }
      var vl2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl2;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl2(b)) throw Error(p2(200));
        return cl2(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!nl2(a)) throw Error(p2(299));
        var c = false, d = "", e2 = kl2;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e2 = b.onRecoverableError));
        b = bl2(a, 1, false, null, null, c, false, d, e2);
        a[uf] = b.current;
        sf2(8 === a.nodeType ? a.parentNode : a);
        return new ll2(b);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render) throw Error(p2(188));
          a = Object.keys(a).join(",");
          throw Error(p2(268, a));
        }
        a = Zb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!ol2(b)) throw Error(p2(200));
        return rl2(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!nl2(a)) throw Error(p2(405));
        var d = null != c && c.hydratedSources || null, e2 = false, f2 = "", g = kl2;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b = el(b, null, a, 1, null != c ? c : null, e2, false, f2, g);
        a[uf] = b.current;
        sf2(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e2 = c._getVersion, e2 = e2(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e2] : b.mutableSourceEagerHydrationData.push(
          c,
          e2
        );
        return new ml2(b);
      };
      exports.render = function(a, b, c) {
        if (!ol2(b)) throw Error(p2(200));
        return rl2(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol2(a)) throw Error(p2(40));
        return a._reactRootContainer ? (Rk(function() {
          rl2(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!ol2(c)) throw Error(p2(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p2(38));
        return rl2(a, b, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // ../../opt/files/node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "../../opt/files/node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/client.js
  var require_client = __commonJS({
    "../../opt/files/node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // ../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f2 = require_react();
      var k2 = /* @__PURE__ */ Symbol.for("react.element");
      var l2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p2 = { key: true, ref: true, __self: true, __source: true };
      function q2(c, a, g) {
        var b, d = {}, e2 = null, h = null;
        void 0 !== g && (e2 = "" + g);
        void 0 !== a.key && (e2 = "" + a.key);
        void 0 !== a.ref && (h = a.ref);
        for (b in a) m.call(a, b) && !p2.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k2, type: c, key: e2, ref: h, props: d, _owner: n.current };
      }
      exports.Fragment = l2;
      exports.jsx = q2;
      exports.jsxs = q2;
    }
  });

  // ../../opt/files/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "../../opt/files/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client());

  // ../../opt/files/kit/index.tsx
  var import_react29 = __toESM(require_react());

  // ../../opt/files/kit/components.mjs
  var x = __toESM(require_react(), 1);
  var nt = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var import_react2 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function te(e2) {
    var t, r, o = "";
    if (typeof e2 == "string" || typeof e2 == "number") o += e2;
    else if (typeof e2 == "object") if (Array.isArray(e2)) {
      var s = e2.length;
      for (t = 0; t < s; t++) e2[t] && (r = te(e2[t])) && (o && (o += " "), o += r);
    } else for (r in e2) e2[r] && (o && (o += " "), o += r);
    return o;
  }
  function O() {
    for (var e2, t, r = 0, o = "", s = arguments.length; r < s; r++) (e2 = arguments[r]) && (t = te(e2)) && (o && (o += " "), o += t);
    return o;
  }
  var Re = (e2) => {
    let t = Ae(e2), { conflictingClassGroups: r, conflictingClassGroupModifiers: o } = e2;
    return { getClassGroupId: (a) => {
      let i = a.split("-");
      return i[0] === "" && i.length !== 1 && i.shift(), ie(i, t) || ze(a);
    }, getConflictingClassGroupIds: (a, i) => {
      let d = r[a] || [];
      return i && o[a] ? [...d, ...o[a]] : d;
    } };
  };
  var ie = (e2, t) => {
    if (e2.length === 0) return t.classGroupId;
    let r = e2[0], o = t.nextPart.get(r), s = o ? ie(e2.slice(1), o) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    let n = e2.join("-");
    return t.validators.find(({ validator: a }) => a(n))?.classGroupId;
  };
  var re = /^\[(.+)\]$/;
  var ze = (e2) => {
    if (re.test(e2)) {
      let t = re.exec(e2)[1], r = t?.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  };
  var Ae = (e2) => {
    let { theme: t, prefix: r } = e2, o = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
    return Me(Object.entries(e2.classGroups), r).forEach(([n, a]) => {
      X(a, o, n, t);
    }), o;
  };
  var X = (e2, t, r, o) => {
    e2.forEach((s) => {
      if (typeof s == "string") {
        let n = s === "" ? t : oe(t, s);
        n.classGroupId = r;
        return;
      }
      if (typeof s == "function") {
        if (Pe(s)) {
          X(s(o), t, r, o);
          return;
        }
        t.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([n, a]) => {
        X(a, oe(t, n), r, o);
      });
    });
  };
  var oe = (e2, t) => {
    let r = e2;
    return t.split("-").forEach((o) => {
      r.nextPart.has(o) || r.nextPart.set(o, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), r = r.nextPart.get(o);
    }), r;
  };
  var Pe = (e2) => e2.isThemeGetter;
  var Me = (e2, t) => t ? e2.map(([r, o]) => {
    let s = o.map((n) => typeof n == "string" ? t + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([a, i]) => [t + a, i])) : n);
    return [r, s];
  }) : e2;
  var Te = (e2) => {
    if (e2 < 1) return { get: () => {
    }, set: () => {
    } };
    let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = (n, a) => {
      r.set(n, a), t++, t > e2 && (t = 0, o = r, r = /* @__PURE__ */ new Map());
    };
    return { get(n) {
      let a = r.get(n);
      if (a !== void 0) return a;
      if ((a = o.get(n)) !== void 0) return s(n, a), a;
    }, set(n, a) {
      r.has(n) ? r.set(n, a) : s(n, a);
    } };
  };
  var _e = (e2) => {
    let { separator: t, experimentalParseClassName: r } = e2, o = t.length === 1, s = t[0], n = t.length, a = (i) => {
      let d = [], c = 0, u = 0, m;
      for (let p2 = 0; p2 < i.length; p2++) {
        let y = i[p2];
        if (c === 0) {
          if (y === s && (o || i.slice(p2, p2 + n) === t)) {
            d.push(i.slice(u, p2)), u = p2 + n;
            continue;
          }
          if (y === "/") {
            m = p2;
            continue;
          }
        }
        y === "[" ? c++ : y === "]" && c--;
      }
      let h = d.length === 0 ? i : i.substring(u), S2 = h.startsWith("!"), v = S2 ? h.substring(1) : h, g = m && m > u ? m - u : void 0;
      return { modifiers: d, hasImportantModifier: S2, baseClassName: v, maybePostfixModifierPosition: g };
    };
    return r ? (i) => r({ className: i, parseClassName: a }) : a;
  };
  var Ne = (e2) => {
    if (e2.length <= 1) return e2;
    let t = [], r = [];
    return e2.forEach((o) => {
      o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
    }), t.push(...r.sort()), t;
  };
  var Be = (e2) => ({ cache: Te(e2.cacheSize), parseClassName: _e(e2), ...Re(e2) });
  var Ie = /\s+/;
  var Ee = (e2, t) => {
    let { parseClassName: r, getClassGroupId: o, getConflictingClassGroupIds: s } = t, n = [], a = e2.trim().split(Ie), i = "";
    for (let d = a.length - 1; d >= 0; d -= 1) {
      let c = a[d], { modifiers: u, hasImportantModifier: m, baseClassName: h, maybePostfixModifierPosition: S2 } = r(c), v = !!S2, g = o(v ? h.substring(0, S2) : h);
      if (!g) {
        if (!v) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (g = o(h), !g) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        v = false;
      }
      let p2 = Ne(u).join(":"), y = m ? p2 + "!" : p2, w2 = y + g;
      if (n.includes(w2)) continue;
      n.push(w2);
      let T2 = s(g, v);
      for (let A2 = 0; A2 < T2.length; ++A2) {
        let V2 = T2[A2];
        n.push(y + V2);
      }
      i = c + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
  function Le() {
    let e2 = 0, t, r, o = "";
    for (; e2 < arguments.length; ) (t = arguments[e2++]) && (r = ae(t)) && (o && (o += " "), o += r);
    return o;
  }
  var ae = (e2) => {
    if (typeof e2 == "string") return e2;
    let t, r = "";
    for (let o = 0; o < e2.length; o++) e2[o] && (t = ae(e2[o])) && (r && (r += " "), r += t);
    return r;
  };
  function ne(e2, ...t) {
    let r, o, s, n = a;
    function a(d) {
      let c = t.reduce((u, m) => m(u), e2());
      return r = Be(c), o = r.cache.get, s = r.cache.set, n = i, i(d);
    }
    function i(d) {
      let c = o(d);
      if (c) return c;
      let u = Ee(d, r);
      return s(d, u), u;
    }
    return function() {
      return n(Le.apply(null, arguments));
    };
  }
  var f = (e2) => {
    let t = (r) => r[e2] || [];
    return t.isThemeGetter = true, t;
  };
  var le = /^\[(?:([a-z-]+):)?(.+)\]$/i;
  var Ve = /^\d+\/\d+$/;
  var Ge = /* @__PURE__ */ new Set(["px", "full", "screen"]);
  var je = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var Oe = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var We = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  var He = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  var $e = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  var k = (e2) => P(e2) || Ge.has(e2) || Ve.test(e2);
  var R = (e2) => M(e2, "length", Ye);
  var P = (e2) => !!e2 && !Number.isNaN(Number(e2));
  var U = (e2) => M(e2, "number", P);
  var N = (e2) => !!e2 && Number.isInteger(Number(e2));
  var De = (e2) => e2.endsWith("%") && P(e2.slice(0, -1));
  var l = (e2) => le.test(e2);
  var z = (e2) => je.test(e2);
  var Fe = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
  var Ue = (e2) => M(e2, Fe, ce);
  var Xe = (e2) => M(e2, "position", ce);
  var Ke = /* @__PURE__ */ new Set(["image", "url"]);
  var Ze = (e2) => M(e2, Ke, Qe);
  var qe = (e2) => M(e2, "", Je);
  var B = () => true;
  var M = (e2, t, r) => {
    let o = le.exec(e2);
    return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : false;
  };
  var Ye = (e2) => Oe.test(e2) && !We.test(e2);
  var ce = () => false;
  var Je = (e2) => He.test(e2);
  var Qe = (e2) => $e.test(e2);
  var se = () => {
    let e2 = f("colors"), t = f("spacing"), r = f("blur"), o = f("brightness"), s = f("borderColor"), n = f("borderRadius"), a = f("borderSpacing"), i = f("borderWidth"), d = f("contrast"), c = f("grayscale"), u = f("hueRotate"), m = f("invert"), h = f("gap"), S2 = f("gradientColorStops"), v = f("gradientColorStopPositions"), g = f("inset"), p2 = f("margin"), y = f("opacity"), w2 = f("padding"), T2 = f("saturate"), A2 = f("scale"), V2 = f("sepia"), K = f("skew"), Z2 = f("space"), q2 = f("translate"), H2 = () => ["auto", "contain", "none"], $2 = () => ["auto", "hidden", "clip", "visible", "scroll"], D2 = () => ["auto", l, t], b = () => [l, t], Y2 = () => ["", k, R], G2 = () => ["auto", P, l], J2 = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], Q2 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F2 = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], _2 = () => ["", "0", l], ee2 = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C2 = () => [P, l];
    return { cacheSize: 500, separator: ":", theme: { colors: [B], spacing: [k, R], blur: ["none", "", z, l], brightness: C2(), borderColor: [e2], borderRadius: ["none", "", "full", z, l], borderSpacing: b(), borderWidth: Y2(), contrast: C2(), grayscale: _2(), hueRotate: C2(), invert: _2(), gap: b(), gradientColorStops: [e2], gradientColorStopPositions: [De, R], inset: D2(), margin: D2(), opacity: C2(), padding: b(), saturate: C2(), scale: C2(), sepia: _2(), skew: C2(), space: b(), translate: b() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l] }], container: ["container"], columns: [{ columns: [z] }], "break-after": [{ "break-after": ee2() }], "break-before": [{ "break-before": ee2() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...J2(), l] }], overflow: [{ overflow: $2() }], "overflow-x": [{ "overflow-x": $2() }], "overflow-y": [{ "overflow-y": $2() }], overscroll: [{ overscroll: H2() }], "overscroll-x": [{ "overscroll-x": H2() }], "overscroll-y": [{ "overscroll-y": H2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [g] }], "inset-x": [{ "inset-x": [g] }], "inset-y": [{ "inset-y": [g] }], start: [{ start: [g] }], end: [{ end: [g] }], top: [{ top: [g] }], right: [{ right: [g] }], bottom: [{ bottom: [g] }], left: [{ left: [g] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", N, l] }], basis: [{ basis: D2() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l] }], grow: [{ grow: _2() }], shrink: [{ shrink: _2() }], order: [{ order: ["first", "last", "none", N, l] }], "grid-cols": [{ "grid-cols": [B] }], "col-start-end": [{ col: ["auto", { span: ["full", N, l] }, l] }], "col-start": [{ "col-start": G2() }], "col-end": [{ "col-end": G2() }], "grid-rows": [{ "grid-rows": [B] }], "row-start-end": [{ row: ["auto", { span: [N, l] }, l] }], "row-start": [{ "row-start": G2() }], "row-end": [{ "row-end": G2() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }], gap: [{ gap: [h] }], "gap-x": [{ "gap-x": [h] }], "gap-y": [{ "gap-y": [h] }], "justify-content": [{ justify: ["normal", ...F2()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...F2(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...F2(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [w2] }], px: [{ px: [w2] }], py: [{ py: [w2] }], ps: [{ ps: [w2] }], pe: [{ pe: [w2] }], pt: [{ pt: [w2] }], pr: [{ pr: [w2] }], pb: [{ pb: [w2] }], pl: [{ pl: [w2] }], m: [{ m: [p2] }], mx: [{ mx: [p2] }], my: [{ my: [p2] }], ms: [{ ms: [p2] }], me: [{ me: [p2] }], mt: [{ mt: [p2] }], mr: [{ mr: [p2] }], mb: [{ mb: [p2] }], ml: [{ ml: [p2] }], "space-x": [{ "space-x": [Z2] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [Z2] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", l, t] }], "min-w": [{ "min-w": [l, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [l, t, "none", "full", "min", "max", "fit", "prose", { screen: [z] }, z] }], h: [{ h: [l, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [l, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [l, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [l, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", z, R] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", U] }], "font-family": [{ font: [B] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l] }], "line-clamp": [{ "line-clamp": ["none", P, U] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", k, l] }], "list-image": [{ "list-image": ["none", l] }], "list-style-type": [{ list: ["none", "disc", "decimal", l] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e2] }], "placeholder-opacity": [{ "placeholder-opacity": [y] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e2] }], "text-opacity": [{ "text-opacity": [y] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...j(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", k, R] }], "underline-offset": [{ "underline-offset": ["auto", k, l] }], "text-decoration-color": [{ decoration: [e2] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: b() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [y] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...J2(), Xe] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", Ue] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Ze] }], "bg-color": [{ bg: [e2] }], "gradient-from-pos": [{ from: [v] }], "gradient-via-pos": [{ via: [v] }], "gradient-to-pos": [{ to: [v] }], "gradient-from": [{ from: [S2] }], "gradient-via": [{ via: [S2] }], "gradient-to": [{ to: [S2] }], rounded: [{ rounded: [n] }], "rounded-s": [{ "rounded-s": [n] }], "rounded-e": [{ "rounded-e": [n] }], "rounded-t": [{ "rounded-t": [n] }], "rounded-r": [{ "rounded-r": [n] }], "rounded-b": [{ "rounded-b": [n] }], "rounded-l": [{ "rounded-l": [n] }], "rounded-ss": [{ "rounded-ss": [n] }], "rounded-se": [{ "rounded-se": [n] }], "rounded-ee": [{ "rounded-ee": [n] }], "rounded-es": [{ "rounded-es": [n] }], "rounded-tl": [{ "rounded-tl": [n] }], "rounded-tr": [{ "rounded-tr": [n] }], "rounded-br": [{ "rounded-br": [n] }], "rounded-bl": [{ "rounded-bl": [n] }], "border-w": [{ border: [i] }], "border-w-x": [{ "border-x": [i] }], "border-w-y": [{ "border-y": [i] }], "border-w-s": [{ "border-s": [i] }], "border-w-e": [{ "border-e": [i] }], "border-w-t": [{ "border-t": [i] }], "border-w-r": [{ "border-r": [i] }], "border-w-b": [{ "border-b": [i] }], "border-w-l": [{ "border-l": [i] }], "border-opacity": [{ "border-opacity": [y] }], "border-style": [{ border: [...j(), "hidden"] }], "divide-x": [{ "divide-x": [i] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [y] }], "divide-style": [{ divide: j() }], "border-color": [{ border: [s] }], "border-color-x": [{ "border-x": [s] }], "border-color-y": [{ "border-y": [s] }], "border-color-s": [{ "border-s": [s] }], "border-color-e": [{ "border-e": [s] }], "border-color-t": [{ "border-t": [s] }], "border-color-r": [{ "border-r": [s] }], "border-color-b": [{ "border-b": [s] }], "border-color-l": [{ "border-l": [s] }], "divide-color": [{ divide: [s] }], "outline-style": [{ outline: ["", ...j()] }], "outline-offset": [{ "outline-offset": [k, l] }], "outline-w": [{ outline: [k, R] }], "outline-color": [{ outline: [e2] }], "ring-w": [{ ring: Y2() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e2] }], "ring-opacity": [{ "ring-opacity": [y] }], "ring-offset-w": [{ "ring-offset": [k, R] }], "ring-offset-color": [{ "ring-offset": [e2] }], shadow: [{ shadow: ["", "inner", "none", z, qe] }], "shadow-color": [{ shadow: [B] }], opacity: [{ opacity: [y] }], "mix-blend": [{ "mix-blend": [...Q2(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": Q2() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [r] }], brightness: [{ brightness: [o] }], contrast: [{ contrast: [d] }], "drop-shadow": [{ "drop-shadow": ["", "none", z, l] }], grayscale: [{ grayscale: [c] }], "hue-rotate": [{ "hue-rotate": [u] }], invert: [{ invert: [m] }], saturate: [{ saturate: [T2] }], sepia: [{ sepia: [V2] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [r] }], "backdrop-brightness": [{ "backdrop-brightness": [o] }], "backdrop-contrast": [{ "backdrop-contrast": [d] }], "backdrop-grayscale": [{ "backdrop-grayscale": [c] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }], "backdrop-invert": [{ "backdrop-invert": [m] }], "backdrop-opacity": [{ "backdrop-opacity": [y] }], "backdrop-saturate": [{ "backdrop-saturate": [T2] }], "backdrop-sepia": [{ "backdrop-sepia": [V2] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [a] }], "border-spacing-x": [{ "border-spacing-x": [a] }], "border-spacing-y": [{ "border-spacing-y": [a] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l] }], duration: [{ duration: C2() }], ease: [{ ease: ["linear", "in", "out", "in-out", l] }], delay: [{ delay: C2() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [A2] }], "scale-x": [{ "scale-x": [A2] }], "scale-y": [{ "scale-y": [A2] }], rotate: [{ rotate: [N, l] }], "translate-x": [{ "translate-x": [q2] }], "translate-y": [{ "translate-y": [q2] }], "skew-x": [{ "skew-x": [K] }], "skew-y": [{ "skew-y": [K] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l] }], accent: [{ accent: ["auto", e2] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l] }], "caret-color": [{ caret: [e2] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": b() }], "scroll-mx": [{ "scroll-mx": b() }], "scroll-my": [{ "scroll-my": b() }], "scroll-ms": [{ "scroll-ms": b() }], "scroll-me": [{ "scroll-me": b() }], "scroll-mt": [{ "scroll-mt": b() }], "scroll-mr": [{ "scroll-mr": b() }], "scroll-mb": [{ "scroll-mb": b() }], "scroll-ml": [{ "scroll-ml": b() }], "scroll-p": [{ "scroll-p": b() }], "scroll-px": [{ "scroll-px": b() }], "scroll-py": [{ "scroll-py": b() }], "scroll-ps": [{ "scroll-ps": b() }], "scroll-pe": [{ "scroll-pe": b() }], "scroll-pt": [{ "scroll-pt": b() }], "scroll-pr": [{ "scroll-pr": b() }], "scroll-pb": [{ "scroll-pb": b() }], "scroll-pl": [{ "scroll-pl": b() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l] }], fill: [{ fill: [e2, "none"] }], "stroke-w": [{ stroke: [k, R, U] }], stroke: [{ stroke: [e2, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
  };
  var et = (e2, { cacheSize: t, prefix: r, separator: o, experimentalParseClassName: s, extend: n = {}, override: a = {} }) => {
    I(e2, "cacheSize", t), I(e2, "prefix", r), I(e2, "separator", o), I(e2, "experimentalParseClassName", s);
    for (let i in a) tt(e2[i], a[i]);
    for (let i in n) rt(e2[i], n[i]);
    return e2;
  };
  var I = (e2, t, r) => {
    r !== void 0 && (e2[t] = r);
  };
  var tt = (e2, t) => {
    if (t) for (let r in t) I(e2, r, t[r]);
  };
  var rt = (e2, t) => {
    if (t) for (let r in t) {
      let o = t[r];
      o !== void 0 && (e2[r] = (e2[r] || []).concat(o));
    }
  };
  var de = (e2, ...t) => typeof e2 == "function" ? ne(se, e2, ...t) : ne(() => et(se(), e2), ...t);
  var ue = { size4xl: "2.1125rem", size3xl: "1.75625rem", size2xl: "1.40625rem", sizeXl: "1.175rem", sizeLg: "1.0625rem", sizeBody: "0.875rem", sizeSm: "0.75rem", sizeXs: "0.6875rem", sizeMono: "0.875rem" };
  var pe = { leading4xl: "2.625rem", leading3xl: "2.5rem", leading2xl: "2.25rem", leadingXl: "2rem", leadingLg: "1.75rem", leadingBody: "1.5rem", leadingSm: "1.125rem", leadingXs: "1rem", leadingMono: "1.5rem" };
  var ot = de({ extend: { classGroups: { "font-size": [{ text: Object.keys(ue) }], leading: [{ leading: Object.keys(pe) }] } } });
  function E(...e2) {
    return ot(O(e2));
  }
  function fe(e2, t) {
    if (typeof e2 == "function") return e2(t);
    e2 != null && (e2.current = t);
  }
  function be(...e2) {
    return (t) => {
      let r = false, o = e2.map((s) => {
        let n = fe(s, t);
        return !r && typeof n == "function" && (r = true), n;
      });
      if (r) return () => {
        for (let s = 0; s < o.length; s++) {
          let n = o[s];
          typeof n == "function" ? n() : fe(e2[s], null);
        }
      };
    };
  }
  var st = /* @__PURE__ */ Symbol.for("react.lazy");
  var W = x[" use ".trim().toString()];
  function it(e2) {
    return typeof e2 == "object" && e2 !== null && "then" in e2;
  }
  function ge(e2) {
    return e2 != null && typeof e2 == "object" && "$$typeof" in e2 && e2.$$typeof === st && "_payload" in e2 && it(e2._payload);
  }
  function at(e2) {
    let t = lt(e2), r = x.forwardRef((o, s) => {
      let { children: n, ...a } = o;
      ge(n) && typeof W == "function" && (n = W(n._payload));
      let i = x.Children.toArray(n), d = i.find(dt);
      if (d) {
        let c = d.props.children, u = i.map((m) => m === d ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : m);
        return (0, import_jsx_runtime.jsx)(t, { ...a, ref: s, children: x.isValidElement(c) ? x.cloneElement(c, void 0, u) : null });
      }
      return (0, import_jsx_runtime.jsx)(t, { ...a, ref: s, children: n });
    });
    return r.displayName = `${e2}.Slot`, r;
  }
  var L = at("Slot");
  function lt(e2) {
    let t = x.forwardRef((r, o) => {
      let { children: s, ...n } = r;
      if (ge(s) && typeof W == "function" && (s = W(s._payload)), x.isValidElement(s)) {
        let a = pt(s), i = ut(n, s.props);
        return s.type !== x.Fragment && (i.ref = o ? be(o, a) : a), x.cloneElement(s, i);
      }
      return x.Children.count(s) > 1 ? x.Children.only(null) : null;
    });
    return t.displayName = `${e2}.SlotClone`, t;
  }
  var ct = /* @__PURE__ */ Symbol("radix.slottable");
  function dt(e2) {
    return x.isValidElement(e2) && typeof e2.type == "function" && "__radixId" in e2.type && e2.type.__radixId === ct;
  }
  function ut(e2, t) {
    let r = { ...t };
    for (let o in t) {
      let s = e2[o], n = t[o];
      /^on[A-Z]/.test(o) ? s && n ? r[o] = (...i) => {
        let d = n(...i);
        return s(...i), d;
      } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...n } : o === "className" && (r[o] = [s, n].filter(Boolean).join(" "));
    }
    return { ...e2, ...r };
  }
  function pt(e2) {
    let t = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
    return r ? e2.ref : (t = Object.getOwnPropertyDescriptor(e2, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e2.props.ref : e2.props.ref || e2.ref);
  }
  var xe = (e2) => typeof e2 == "boolean" ? `${e2}` : e2 === 0 ? "0" : e2;
  var he = O;
  var ye = (e2, t) => (r) => {
    var o;
    if (t?.variants == null) return he(e2, r?.class, r?.className);
    let { variants: s, defaultVariants: n } = t, a = Object.keys(s).map((c) => {
      let u = r?.[c], m = n?.[c];
      if (u === null) return null;
      let h = xe(u) || xe(m);
      return s[c][h];
    }), i = r && Object.entries(r).reduce((c, u) => {
      let [m, h] = u;
      return h === void 0 || (c[m] = h), c;
    }, {}), d = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, u) => {
      let { class: m, className: h, ...S2 } = u;
      return Object.entries(S2).every((v) => {
        let [g, p2] = v;
        return Array.isArray(p2) ? p2.includes({ ...n, ...i }[g]) : { ...n, ...i }[g] === p2;
      }) ? [...c, m, h] : c;
    }, []);
    return he(e2, a, d, r?.class, r?.className);
  };
  var bt = ye("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "border border-border bg-card text-card-foreground shadow-sm hover:bg-muted", primary: "bg-foreground text-background hover:bg-foreground/90", destructive: "bg-red-600 text-white hover:bg-red-700", outline: "border border-border bg-transparent text-textSecondary hover:bg-muted hover:text-textPrimary", secondary: "bg-secondary text-textPrimary hover:bg-secondary/80", ghost: "text-textSecondary hover:bg-muted hover:text-textPrimary", link: "text-textSecondary underline-offset-4 hover:underline hover:text-textPrimary", danger: "bg-destructive/10 text-destructive hover:bg-destructive/20", destructiveOutline: "border border-destructive/40 bg-card text-destructive shadow-sm hover:bg-destructive/5" }, size: { default: "h-10 px-4 py-2 rounded-full", sm: "h-8 px-3 text-xs rounded-full", lg: "h-11 px-6 rounded-full", icon: "h-9 w-9 rounded-lg", control: "h-8 px-4 rounded font-normal", controlIcon: "h-8 w-8 rounded" } }, defaultVariants: { variant: "default", size: "default" } });
  var ve = (0, import_react.forwardRef)(({ className: e2, variant: t, size: r, asChild: o = false, ...s }, n) => (0, import_jsx_runtime2.jsx)(o ? L : "button", { className: E(bt({ variant: t, size: r, className: e2 })), ref: n, ...s }));
  ve.displayName = "Button";
  var gt = { primary: "border-ds-foreground1 bg-ds-foreground1 text-ds-onPrimary", secondary: "border-transparent bg-ds-background1 text-ds-foreground1 shadow-[0_0_0_1px_var(--ds-hairline)] disabled:bg-ds-background2 disabled:shadow-[0_0_0_1px_var(--ds-hairline)]", ghost: "border-transparent bg-transparent font-semibold text-ds-foreground1 underline [text-underline-position:from-font] disabled:bg-transparent disabled:font-medium", destructive: "border-transparent bg-ds-dangerWash text-ds-danger", success: "border-transparent bg-ds-successWash text-ds-success" };
  function xt({ variant: e2 = "primary", fullWidth: t = false, large: r = false, className: o }) {
    return E("m-px box-border inline-flex h-[var(--ds-control-compact)] cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap border font-text text-sizeBody font-medium leading-none transition-[background-color,border-color,color,transform] [transition-duration:120ms] [[data-app-motion]_&]:motion-safe:enabled:active:scale-[0.98]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-foreground4", "disabled:cursor-default disabled:border-transparent disabled:bg-ds-muted disabled:text-ds-foreground4 disabled:shadow-none", r ? "h-[var(--ds-control)] rounded-[var(--ds-radius)] px-3.5" : "rounded-[var(--ds-radius-compact)] px-2.5", t && "flex w-[calc(100%-2px)]", gt[e2], o);
  }
  var Se = (0, import_react2.forwardRef)(({ variant: e2, fullWidth: t, large: r, className: o, asChild: s = false, iconBefore: n, iconAfter: a, type: i = "button", children: d, ...c }, u) => {
    let m = xt({ variant: e2, fullWidth: t, large: r, className: o });
    return s ? (0, import_jsx_runtime3.jsx)(L, { ref: u, className: m, ...c, children: d }) : (0, import_jsx_runtime3.jsxs)("button", { ref: u, type: i, className: m, ...c, children: [n, d, a] });
  });
  Se.displayName = "DsButton";
  var Ce = (0, import_react2.forwardRef)(({ label: e2, className: t, asChild: r = false, type: o = "button", ...s }, n) => (0, import_jsx_runtime3.jsx)(r ? L : "button", { ref: n, type: r ? void 0 : o, "aria-label": e2, title: e2, className: E("inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-[var(--ds-radius-compact)] border-0 bg-transparent p-2 leading-none text-ds-ink transition-[background-color,color,transform] [transition-duration:120ms] [[data-app-motion]_&]:motion-safe:enabled:active:scale-[0.94] hover:bg-ds-hover active:bg-ds-hoverStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4 disabled:cursor-default disabled:bg-transparent disabled:text-ds-ink4 [&_svg]:h-4 [&_svg]:w-4", t), ...s }));
  Ce.displayName = "DsIconButton";

  // ../../opt/files/kit/library.mjs
  var import_react3 = __toESM(require_react(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var import_react5 = __toESM(require_react(), 1);
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);
  var import_react8 = __toESM(require_react(), 1);
  var import_react9 = __toESM(require_react(), 1);
  var import_react10 = __toESM(require_react(), 1);
  var import_react11 = __toESM(require_react(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_react13 = __toESM(require_react(), 1);
  var import_react14 = __toESM(require_react(), 1);
  var import_react15 = __toESM(require_react(), 1);
  var import_react16 = __toESM(require_react(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_react17 = __toESM(require_react(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react18 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_react19 = __toESM(require_react(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_react20 = __toESM(require_react(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_react21 = __toESM(require_react(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var import_react22 = __toESM(require_react(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
  var import_react23 = __toESM(require_react(), 1);
  var import_react24 = __toESM(require_react(), 1);
  var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
  var import_react25 = __toESM(require_react(), 1);
  var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
  var import_react26 = __toESM(require_react(), 1);
  var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
  var import_react27 = __toESM(require_react(), 1);
  var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
  var import_react28 = __toESM(require_react(), 1);
  var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
  var bu = Object.create;
  var tl = Object.defineProperty;
  var yu = Object.getOwnPropertyDescriptor;
  var wu = Object.getOwnPropertyNames;
  var ku = Object.getPrototypeOf;
  var Pu = Object.prototype.hasOwnProperty;
  var Mu = (e2, a) => () => (a || e2((a = { exports: {} }).exports, a), a.exports);
  var Au = (e2, a, t, o) => {
    if (a && typeof a == "object" || typeof a == "function") for (let r of wu(a)) !Pu.call(e2, r) && r !== t && tl(e2, r, { get: () => a[r], enumerable: !(o = yu(a, r)) || o.enumerable });
    return e2;
  };
  var ol = (e2, a, t) => (t = e2 != null ? bu(ku(e2)) : {}, Au(a || !e2 || !e2.__esModule ? tl(t, "default", { value: e2, enumerable: true }) : t, e2));
  var ar = Mu((Nh, Mt2) => {
    (function() {
      "use strict";
      var e2 = {}.hasOwnProperty;
      function a() {
        for (var r = "", l2 = 0; l2 < arguments.length; l2++) {
          var s = arguments[l2];
          s && (r = o(r, t(s)));
        }
        return r;
      }
      function t(r) {
        if (typeof r == "string" || typeof r == "number") return r;
        if (typeof r != "object") return "";
        if (Array.isArray(r)) return a.apply(null, r);
        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) return r.toString();
        var l2 = "";
        for (var s in r) e2.call(r, s) && r[s] && (l2 = o(l2, s));
        return l2;
      }
      function o(r, l2) {
        return l2 ? r ? r + " " + l2 : r + l2 : r;
      }
      typeof Mt2 < "u" && Mt2.exports ? (a.default = a, Mt2.exports = a) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
        return a;
      }) : window.classNames = a;
    })();
  });
  var ee = (e2) => e2;
  var G = (e2) => e2.toLocaleLowerCase();
  var Ka = { myPick: "My pick", recommended: "Recommended", rangeLegend: "low \xB7 now \xB7 high", noPhoto: "No photo supplied", noData: "No data to display.", noMatches: "No matching items.", chartData: "View chart data", observation: "Observation", observationNumber: (e2) => `Observation ${e2}`, value: "Value", noObservation: "No observation", attribute: "Attribute", price: "Price", was: ", was ", close: "Close", previousPhoto: "Previous photo", nextPhoto: "Next photo", photoCount: (e2, a) => `${e2} of ${a}`, photosOf: (e2) => `Photos of ${e2}`, fullScreen: (e2) => `${e2}, full screen`, view: (e2) => `View ${e2}`, viewAt: (e2) => `View at ${e2}`, buy: "Let\u2019s buy this", buyShort: "Buy this", sending: "Sending\u2026", sentToInstinct: "Sent to Instinct", sent: "Sent", soldOut: "Sold out", retry: "Retry", copy: "Copy", copied: "Copied", copyFailed: "Copy blocked", choose: (e2) => `Choose ${/^[aeiou]/i.test(e2) ? "an" : "a"} ${G(e2)}`, chooseToCheckStock: (e2) => `${Ka.choose(e2)} to check stock`, soldOutIn: (e2) => `Sold out in ${e2}`, onlyLeftIn: (e2, a) => `Only ${e2} left in ${a}`, inStockIn: (e2) => `In stock in ${e2}`, inStock: (e2) => `${e2} in stock`, valuesSoldOut: (e2) => `${e2.join(", ")} sold out`, valueSoldOut: (e2, a) => `${e2}, sold out${a ? ` in ${a}` : ""}`, plural: (e2) => /(s|sh|ch|x|z)$/i.test(e2) ? `${e2}es` : /[^aeiou]y$/i.test(e2) ? `${e2.slice(0, -1)}ies` : `${e2}s`, optionIn: (e2, a) => `${e2} in ${a}`, andMore: (e2) => ` and ${e2} more`, loadingState: "Loading saved state\u2026", savingState: "Saving\u2026", savedState: "Saved on this device", unsavedState: "Not saved. Changes last only while this File is open.", wakeAccepted: "Sent to your agent", wakeWait: (e2) => `Please wait ${e2} seconds, then retry.`, wakeRetryNow: "You can retry now.", wakeUnconfirmed: "Delivery not confirmed. Retry to check without sending twice.", wakeForbidden: "Sign in as the File owner to send this to your agent.", wakeCanceled: "This request was canceled. You can send a new request.", wakeFailed: "This request could not be sent.", wakeUnavailable: "Agent actions are unavailable here." };
  var Ru = { myPick: "Mi elecci\xF3n", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 actual \xB7 m\xE1x.", noPhoto: "Sin foto", noData: "No hay datos que mostrar.", noMatches: "No hay resultados.", chartData: "Ver los datos del gr\xE1fico", observation: "Observaci\xF3n", observationNumber: (e2) => `Observaci\xF3n ${e2}`, value: "Valor", noObservation: "Sin observaci\xF3n", attribute: "Atributo", price: "Precio", was: ", antes ", close: "Cerrar", previousPhoto: "Foto anterior", nextPhoto: "Foto siguiente", photoCount: (e2, a) => `${e2} de ${a}`, photosOf: (e2) => `Fotos de ${e2}`, fullScreen: (e2) => `${e2}, pantalla completa`, view: (e2) => `Ver ${e2}`, viewAt: (e2) => `Ver en ${e2}`, buy: "Vamos a comprarlo", buyShort: "Comprar", sending: "Enviando\u2026", sentToInstinct: "Enviado a Instinct", sent: "Enviado", soldOut: "Agotado", retry: "Reintentar", copy: "Copiar", copied: "Copiado", copyFailed: "No se pudo copiar", choose: (e2) => `Elige ${G(e2)}`, chooseToCheckStock: (e2) => `Elige ${G(e2)} para ver la disponibilidad`, soldOutIn: (e2) => `Agotado en ${e2}`, onlyLeftIn: (e2, a) => `Solo quedan ${e2} en ${a}`, inStockIn: (e2) => `Disponible en ${e2}`, inStock: (e2) => `${e2} disponible`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "agotados" : "agotado"}`, valueSoldOut: (e2, a) => `${e2}, agotado${a ? ` en ${a}` : ""}`, plural: ee, optionIn: (e2, a) => `${e2} en ${a}`, andMore: (e2) => ` y ${e2} m\xE1s`, loadingState: "Cargando lo guardado\u2026", savingState: "Guardando\u2026", savedState: "Guardado en este dispositivo", unsavedState: "Sin guardar. Los cambios duran solo mientras este File est\xE9 abierto.", wakeAccepted: "Enviado a tu agente", wakeWait: (e2) => `Espera ${e2} segundos y vuelve a intentarlo.`, wakeRetryNow: "Ya puedes reintentarlo.", wakeUnconfirmed: "Entrega sin confirmar. Reintenta para comprobarlo sin enviarlo dos veces.", wakeForbidden: "Inicia sesi\xF3n como due\xF1o del File para envi\xE1rselo a tu agente.", wakeCanceled: "Se cancel\xF3 esta solicitud. Puedes enviar una nueva.", wakeFailed: "No se pudo enviar esta solicitud.", wakeUnavailable: "Las acciones del agente no est\xE1n disponibles aqu\xED." };
  var Du = { myPick: "Mon choix", recommended: "Recommand\xE9", rangeLegend: "min \xB7 actuel \xB7 max", noPhoto: "Pas de photo", noData: "Aucune donn\xE9e \xE0 afficher.", noMatches: "Aucun r\xE9sultat.", chartData: "Voir les donn\xE9es du graphique", observation: "Observation", observationNumber: (e2) => `Observation ${e2}`, value: "Valeur", noObservation: "Aucune observation", attribute: "Attribut", price: "Prix", was: ", au lieu de ", close: "Fermer", previousPhoto: "Photo pr\xE9c\xE9dente", nextPhoto: "Photo suivante", photoCount: (e2, a) => `${e2} sur ${a}`, photosOf: (e2) => `Photos de ${e2}`, fullScreen: (e2) => `${e2}, plein \xE9cran`, view: (e2) => `Voir ${e2}`, viewAt: (e2) => `Voir chez ${e2}`, buy: "On l\u2019ach\xE8te", buyShort: "Acheter", sending: "Envoi\u2026", sentToInstinct: "Envoy\xE9 \xE0 Instinct", sent: "Envoy\xE9", soldOut: "\xC9puis\xE9", retry: "R\xE9essayer", copy: "Copier", copied: "Copi\xE9", copyFailed: "Copie impossible", choose: (e2) => `${e2} \xE0 choisir`, chooseToCheckStock: (e2) => `Choisissez ${G(e2)} pour voir le stock`, soldOutIn: (e2) => `\xC9puis\xE9 en ${e2}`, onlyLeftIn: (e2, a) => `Plus que ${e2} en ${a}`, inStockIn: (e2) => `En stock en ${e2}`, inStock: (e2) => `${e2} en stock`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "\xE9puis\xE9s" : "\xE9puis\xE9"}`, valueSoldOut: (e2, a) => `${e2}, \xE9puis\xE9${a ? ` en ${a}` : ""}`, plural: ee, optionIn: (e2, a) => `${e2} en ${a}`, andMore: (e2) => ` et ${e2} de plus`, loadingState: "Chargement de l\u2019\xE9tat enregistr\xE9\u2026", savingState: "Enregistrement\u2026", savedState: "Enregistr\xE9 sur cet appareil", unsavedState: "Non enregistr\xE9. Les modifications durent tant que ce File reste ouvert.", wakeAccepted: "Envoy\xE9 \xE0 votre agent", wakeWait: (e2) => `Attendez ${e2} secondes, puis r\xE9essayez.`, wakeRetryNow: "Vous pouvez r\xE9essayer.", wakeUnconfirmed: "Envoi non confirm\xE9. R\xE9essayez pour v\xE9rifier sans envoyer deux fois.", wakeForbidden: "Connectez-vous en tant que propri\xE9taire du File pour l\u2019envoyer \xE0 votre agent.", wakeCanceled: "Cette demande a \xE9t\xE9 annul\xE9e. Vous pouvez en envoyer une nouvelle.", wakeFailed: "Cette demande n\u2019a pas pu \xEAtre envoy\xE9e.", wakeUnavailable: "Les actions de l\u2019agent ne sont pas disponibles ici." };
  var Tu = { myPick: "Meine Wahl", recommended: "Empfohlen", rangeLegend: "min. \xB7 aktuell \xB7 max.", noPhoto: "Kein Foto", noData: "Keine Daten vorhanden.", noMatches: "Keine Treffer.", chartData: "Diagrammdaten anzeigen", observation: "Messpunkt", observationNumber: (e2) => `Messpunkt ${e2}`, value: "Wert", noObservation: "Kein Messwert", attribute: "Merkmal", price: "Preis", was: ", vorher ", close: "Schlie\xDFen", previousPhoto: "Vorheriges Foto", nextPhoto: "N\xE4chstes Foto", photoCount: (e2, a) => `${e2} von ${a}`, photosOf: (e2) => `Fotos von ${e2}`, fullScreen: (e2) => `${e2}, Vollbild`, view: (e2) => `${e2} ansehen`, viewAt: (e2) => `Bei ${e2} ansehen`, buy: "Lass es uns kaufen", buyShort: "Kaufen", sending: "Wird gesendet\u2026", sentToInstinct: "An Instinct gesendet", sent: "Gesendet", soldOut: "Ausverkauft", retry: "Erneut versuchen", copy: "Kopieren", copied: "Kopiert", copyFailed: "Kopieren blockiert", choose: (e2) => `${e2} w\xE4hlen`, chooseToCheckStock: (e2) => `${e2} w\xE4hlen, um den Bestand zu sehen`, soldOutIn: (e2) => `Ausverkauft in ${e2}`, onlyLeftIn: (e2, a) => `Nur noch ${e2} in ${a}`, inStockIn: (e2) => `Verf\xFCgbar in ${e2}`, inStock: (e2) => `${e2} verf\xFCgbar`, valuesSoldOut: (e2) => `${e2.join(", ")} ausverkauft`, valueSoldOut: (e2, a) => `${e2}, ausverkauft${a ? ` in ${a}` : ""}`, plural: ee, optionIn: (e2, a) => `${e2} in ${a}`, andMore: (e2) => ` und ${e2} weitere`, loadingState: "Gespeicherter Stand wird geladen\u2026", savingState: "Wird gespeichert\u2026", savedState: "Auf diesem Ger\xE4t gespeichert", unsavedState: "Nicht gespeichert. \xC4nderungen bleiben nur, solange dieses File offen ist.", wakeAccepted: "An deinen Agenten gesendet", wakeWait: (e2) => `Bitte warte ${e2} Sekunden und versuche es dann erneut.`, wakeRetryNow: "Du kannst es jetzt erneut versuchen.", wakeUnconfirmed: "Zustellung nicht best\xE4tigt. Versuche es erneut, um ohne doppeltes Senden nachzusehen.", wakeForbidden: "Melde dich als Besitzer dieses Files an, um es an deinen Agenten zu senden.", wakeCanceled: "Diese Anfrage wurde abgebrochen. Du kannst eine neue senden.", wakeFailed: "Diese Anfrage konnte nicht gesendet werden.", wakeUnavailable: "Agentenaktionen sind hier nicht verf\xFCgbar." };
  var Bu = { myPick: "La mia scelta", recommended: "Consigliato", rangeLegend: "min \xB7 attuale \xB7 max", noPhoto: "Nessuna foto", noData: "Nessun dato da mostrare.", noMatches: "Nessun risultato.", chartData: "Vedi i dati del grafico", observation: "Osservazione", observationNumber: (e2) => `Osservazione ${e2}`, value: "Valore", noObservation: "Nessuna osservazione", attribute: "Attributo", price: "Prezzo", was: ", prima ", close: "Chiudi", previousPhoto: "Foto precedente", nextPhoto: "Foto successiva", photoCount: (e2, a) => `${e2} di ${a}`, photosOf: (e2) => `Foto di ${e2}`, fullScreen: (e2) => `${e2}, schermo intero`, view: (e2) => `Vedi ${e2}`, viewAt: (e2) => `Vedi su ${e2}`, buy: "Compriamolo", buyShort: "Compra", sending: "Invio\u2026", sentToInstinct: "Inviato a Instinct", sent: "Inviato", soldOut: "Esaurito", retry: "Riprova", copy: "Copia", copied: "Copiato", copyFailed: "Copia bloccata", choose: (e2) => `Scegli ${G(e2)}`, chooseToCheckStock: (e2) => `Scegli ${G(e2)} per vedere la disponibilit\xE0`, soldOutIn: (e2) => `Esaurito in ${e2}`, onlyLeftIn: (e2, a) => `Solo ${e2} rimasti in ${a}`, inStockIn: (e2) => `Disponibile in ${e2}`, inStock: (e2) => `${e2} disponibile`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "esauriti" : "esaurito"}`, valueSoldOut: (e2, a) => `${e2}, esaurito${a ? ` in ${a}` : ""}`, plural: ee, optionIn: (e2, a) => `${e2} in ${a}`, andMore: (e2) => ` e altri ${e2}`, loadingState: "Caricamento dello stato salvato\u2026", savingState: "Salvataggio\u2026", savedState: "Salvato su questo dispositivo", unsavedState: "Non salvato. Le modifiche durano solo finch\xE9 questo File resta aperto.", wakeAccepted: "Inviato al tuo agente", wakeWait: (e2) => `Aspetta ${e2} secondi, poi riprova.`, wakeRetryNow: "Ora puoi riprovare.", wakeUnconfirmed: "Consegna non confermata. Riprova per controllare senza inviare due volte.", wakeForbidden: "Accedi come proprietario del File per inviarlo al tuo agente.", wakeCanceled: "Questa richiesta \xE8 stata annullata. Puoi inviarne una nuova.", wakeFailed: "Non \xE8 stato possibile inviare questa richiesta.", wakeUnavailable: "Le azioni dell\u2019agente non sono disponibili qui." };
  var Ou = { myPick: "Minha escolha", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 atual \xB7 m\xE1x.", noPhoto: "Sem foto", noData: "N\xE3o h\xE1 dados para mostrar.", noMatches: "Nenhum resultado.", chartData: "Ver os dados do gr\xE1fico", observation: "Observa\xE7\xE3o", observationNumber: (e2) => `Observa\xE7\xE3o ${e2}`, value: "Valor", noObservation: "Sem observa\xE7\xE3o", attribute: "Atributo", price: "Pre\xE7o", was: ", antes ", close: "Fechar", previousPhoto: "Foto anterior", nextPhoto: "Pr\xF3xima foto", photoCount: (e2, a) => `${e2} de ${a}`, photosOf: (e2) => `Fotos de ${e2}`, fullScreen: (e2) => `${e2}, tela cheia`, view: (e2) => `Ver ${e2}`, viewAt: (e2) => `Ver em ${e2}`, buy: "Vamos comprar", buyShort: "Comprar", sending: "Enviando\u2026", sentToInstinct: "Enviado ao Instinct", sent: "Enviado", soldOut: "Esgotado", retry: "Tentar de novo", copy: "Copiar", copied: "Copiado", copyFailed: "C\xF3pia bloqueada", choose: (e2) => `Selecione ${G(e2)}`, chooseToCheckStock: (e2) => `Selecione ${G(e2)} para ver o estoque`, soldOutIn: (e2) => `Esgotado em ${e2}`, onlyLeftIn: (e2, a) => `S\xF3 restam ${e2} em ${a}`, inStockIn: (e2) => `Dispon\xEDvel em ${e2}`, inStock: (e2) => `${e2} dispon\xEDvel`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "esgotados" : "esgotado"}`, valueSoldOut: (e2, a) => `${e2}, esgotado${a ? ` em ${a}` : ""}`, plural: ee, optionIn: (e2, a) => `${e2} em ${a}`, andMore: (e2) => ` e mais ${e2}`, loadingState: "Carregando o que foi salvo\u2026", savingState: "Salvando\u2026", savedState: "Salvo neste dispositivo", unsavedState: "N\xE3o salvo. As altera\xE7\xF5es duram s\xF3 enquanto este File estiver aberto.", wakeAccepted: "Enviado ao seu agente", wakeWait: (e2) => `Aguarde ${e2} segundos e tente de novo.`, wakeRetryNow: "Voc\xEA j\xE1 pode tentar de novo.", wakeUnconfirmed: "Entrega n\xE3o confirmada. Tente de novo para verificar sem enviar duas vezes.", wakeForbidden: "Entre como dono do File para enviar isto ao seu agente.", wakeCanceled: "Esta solicita\xE7\xE3o foi cancelada. Voc\xEA pode enviar uma nova.", wakeFailed: "N\xE3o foi poss\xEDvel enviar esta solicita\xE7\xE3o.", wakeUnavailable: "As a\xE7\xF5es do agente n\xE3o est\xE3o dispon\xEDveis aqui." };
  var Nu = { myPick: "La meva tria", recommended: "Recomanat", rangeLegend: "m\xEDn. \xB7 actual \xB7 m\xE0x.", noPhoto: "Sense foto", noData: "No hi ha dades per mostrar.", noMatches: "Cap resultat.", chartData: "Mostra les dades del gr\xE0fic", observation: "Observaci\xF3", observationNumber: (e2) => `Observaci\xF3 ${e2}`, value: "Valor", noObservation: "Sense observaci\xF3", attribute: "Atribut", price: "Preu", was: ", abans ", close: "Tanca", previousPhoto: "Foto anterior", nextPhoto: "Foto seg\xFCent", photoCount: (e2, a) => `${e2} de ${a}`, photosOf: (e2) => `Fotos de ${e2}`, fullScreen: (e2) => `${e2}, pantalla completa`, view: (e2) => `Mostra ${e2}`, viewAt: (e2) => `Mostra a ${e2}`, buy: "Comprem-ho", buyShort: "Compra", sending: "S\u2019est\xE0 enviant\u2026", sentToInstinct: "Enviat a Instinct", sent: "Enviat", soldOut: "Esgotat", retry: "Torna-ho a provar", copy: "Copia", copied: "Copiat", copyFailed: "No s\u2019ha pogut copiar", choose: (e2) => `Tria ${G(e2)}`, chooseToCheckStock: (e2) => `Tria ${G(e2)} per veure la disponibilitat`, soldOutIn: (e2) => `Esgotat en ${e2}`, onlyLeftIn: (e2, a) => `Nom\xE9s en queden ${e2} en ${a}`, inStockIn: (e2) => `Disponible en ${e2}`, inStock: (e2) => `${e2} disponible`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "esgotats" : "esgotat"}`, valueSoldOut: (e2, a) => `${e2}, esgotat${a ? ` en ${a}` : ""}`, plural: ee, optionIn: (e2, a) => `${e2} en ${a}`, andMore: (e2) => ` i ${e2} m\xE9s`, loadingState: "S\u2019est\xE0 carregant l\u2019estat desat\u2026", savingState: "S\u2019est\xE0 desant\u2026", savedState: "Desat en aquest dispositiu", unsavedState: "No desat. Els canvis nom\xE9s duren mentre aquest File estigui obert.", wakeAccepted: "Enviat al teu agent", wakeWait: (e2) => `Espera ${e2} segons i torna-ho a provar.`, wakeRetryNow: "Ja ho pots tornar a provar.", wakeUnconfirmed: "Lliurament no confirmat. Torna-ho a provar per comprovar-ho sense enviar-ho dues vegades.", wakeForbidden: "Inicia la sessi\xF3 com a propietari del File per enviar-ho al teu agent.", wakeCanceled: "S\u2019ha cancel\xB7lat aquesta sol\xB7licitud. Pots enviar-ne una de nova.", wakeFailed: "No s\u2019ha pogut enviar aquesta sol\xB7licitud.", wakeUnavailable: "Les accions de l\u2019agent no estan disponibles aqu\xED." };
  var qu = { myPick: "Mijn keuze", recommended: "Aanbevolen", rangeLegend: "laag \xB7 nu \xB7 hoog", noPhoto: "Geen foto", noData: "Geen gegevens om te tonen.", noMatches: "Geen resultaten.", chartData: "Grafiekgegevens bekijken", observation: "Meting", observationNumber: (e2) => `Meting ${e2}`, value: "Waarde", noObservation: "Geen meting", attribute: "Kenmerk", price: "Prijs", was: ", was ", close: "Sluiten", previousPhoto: "Vorige foto", nextPhoto: "Volgende foto", photoCount: (e2, a) => `${e2} van ${a}`, photosOf: (e2) => `Foto\u2019s van ${e2}`, fullScreen: (e2) => `${e2}, volledig scherm`, view: (e2) => `${e2} bekijken`, viewAt: (e2) => `Bekijken bij ${e2}`, buy: "Laten we dit kopen", buyShort: "Kopen", sending: "Versturen\u2026", sentToInstinct: "Naar Instinct gestuurd", sent: "Verstuurd", soldOut: "Uitverkocht", retry: "Opnieuw", copy: "Kopi\xEBren", copied: "Gekopieerd", copyFailed: "Kopi\xEBren geblokkeerd", choose: (e2) => `Kies ${G(e2)}`, chooseToCheckStock: (e2) => `Kies ${G(e2)} om de voorraad te zien`, soldOutIn: (e2) => `Uitverkocht in ${e2}`, onlyLeftIn: (e2, a) => `Nog maar ${e2} in ${a}`, inStockIn: (e2) => `Op voorraad in ${e2}`, inStock: (e2) => `${e2} op voorraad`, valuesSoldOut: (e2) => `${e2.join(", ")} uitverkocht`, valueSoldOut: (e2, a) => `${e2}, uitverkocht${a ? ` in ${a}` : ""}`, plural: ee, optionIn: (e2, a) => `${e2} in ${a}`, andMore: (e2) => ` en nog ${e2}`, loadingState: "Opgeslagen stand laden\u2026", savingState: "Opslaan\u2026", savedState: "Opgeslagen op dit apparaat", unsavedState: "Niet opgeslagen. Wijzigingen blijven alleen zolang dit File open is.", wakeAccepted: "Naar je agent gestuurd", wakeWait: (e2) => `Wacht ${e2} seconden en probeer het dan opnieuw.`, wakeRetryNow: "Je kunt het nu opnieuw proberen.", wakeUnconfirmed: "Bezorging niet bevestigd. Probeer opnieuw om te controleren zonder dubbel te versturen.", wakeForbidden: "Log in als eigenaar van dit File om dit naar je agent te sturen.", wakeCanceled: "Dit verzoek is geannuleerd. Je kunt een nieuw verzoek sturen.", wakeFailed: "Dit verzoek kon niet worden verstuurd.", wakeUnavailable: "Agentacties zijn hier niet beschikbaar." };
  var Hu = { myPick: "Alegerea mea", recommended: "Recomandat", rangeLegend: "min. \xB7 acum \xB7 max.", noPhoto: "F\u0103r\u0103 fotografie", noData: "Nu exist\u0103 date de afi\u0219at.", noMatches: "Niciun rezultat.", chartData: "Vezi datele graficului", observation: "Observa\u021Bie", observationNumber: (e2) => `Observa\u021Bia ${e2}`, value: "Valoare", noObservation: "F\u0103r\u0103 observa\u021Bie", attribute: "Atribut", price: "Pre\u021B", was: ", \xEEnainte ", close: "\xCEnchide", previousPhoto: "Fotografia anterioar\u0103", nextPhoto: "Fotografia urm\u0103toare", photoCount: (e2, a) => `${e2} din ${a}`, photosOf: (e2) => `Fotografii cu ${e2}`, fullScreen: (e2) => `${e2}, ecran complet`, view: (e2) => `Vezi ${e2}`, viewAt: (e2) => `Vezi la ${e2}`, buy: "Hai s\u0103-l cump\u0103r\u0103m", buyShort: "Cump\u0103r\u0103", sending: "Se trimite\u2026", sentToInstinct: "Trimis la Instinct", sent: "Trimis", soldOut: "Epuizat", retry: "Re\xEEncearc\u0103", copy: "Copiaz\u0103", copied: "Copiat", copyFailed: "Copiere blocat\u0103", choose: (e2) => `Alege ${G(e2)}`, chooseToCheckStock: (e2) => `Alege ${G(e2)} ca s\u0103 vezi stocul`, soldOutIn: (e2) => `Epuizat \xEEn ${e2}`, onlyLeftIn: (e2, a) => `Doar ${e2} r\u0103mase \xEEn ${a}`, inStockIn: (e2) => `\xCEn stoc \xEEn ${e2}`, inStock: (e2) => `${e2} \xEEn stoc`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "epuizate" : "epuizat"}`, valueSoldOut: (e2, a) => `${e2}, epuizat${a ? ` \xEEn ${a}` : ""}`, plural: ee, optionIn: (e2, a) => `${e2} \xEEn ${a}`, andMore: (e2) => ` \u0219i \xEEnc\u0103 ${e2}`, loadingState: "Se \xEEncarc\u0103 starea salvat\u0103\u2026", savingState: "Se salveaz\u0103\u2026", savedState: "Salvat pe acest dispozitiv", unsavedState: "Nesalvat. Modific\u0103rile r\u0103m\xE2n doar c\xE2t timp acest File e deschis.", wakeAccepted: "Trimis agentului t\u0103u", wakeWait: (e2) => `A\u0219teapt\u0103 ${e2} secunde, apoi re\xEEncearc\u0103.`, wakeRetryNow: "Po\u021Bi re\xEEncerca acum.", wakeUnconfirmed: "Livrare neconfirmat\u0103. Re\xEEncearc\u0103 pentru a verifica f\u0103r\u0103 a trimite de dou\u0103 ori.", wakeForbidden: "Conecteaz\u0103-te ca proprietar al File-ului ca s\u0103-l trimi\u021Bi agentului t\u0103u.", wakeCanceled: "Cererea a fost anulat\u0103. Po\u021Bi trimite una nou\u0103.", wakeFailed: "Cererea nu a putut fi trimis\u0103.", wakeUnavailable: "Ac\u021Biunile agentului nu sunt disponibile aici." };
  var Uu = { myPick: "\u041C\u043E\u0439 \u0432\u044B\u0431\u043E\u0440", recommended: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E", rangeLegend: "\u043C\u0438\u043D. \xB7 \u0441\u0435\u0439\u0447\u0430\u0441 \xB7 \u043C\u0430\u043A\u0441.", noPhoto: "\u041D\u0435\u0442 \u0444\u043E\u0442\u043E", noData: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445.", noMatches: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.", chartData: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0433\u0440\u0430\u0444\u0438\u043A\u0430", observation: "\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435", observationNumber: (e2) => `\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 ${e2}`, value: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", noObservation: "\u041D\u0435\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F", attribute: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440", price: "\u0426\u0435\u043D\u0430", was: ", \u0431\u044B\u043B\u043E ", close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", previousPhoto: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0444\u043E\u0442\u043E", nextPhoto: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0444\u043E\u0442\u043E", photoCount: (e2, a) => `${e2} \u0438\u0437 ${a}`, photosOf: (e2) => `\u0424\u043E\u0442\u043E: ${e2}`, fullScreen: (e2) => `${e2}, \u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D`, view: (e2) => `\u041E\u0442\u043A\u0440\u044B\u0442\u044C ${e2}`, viewAt: (e2) => `\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 ${e2}`, buy: "\u0414\u0430\u0432\u0430\u0439 \u043A\u0443\u043F\u0438\u043C", buyShort: "\u041A\u0443\u043F\u0438\u0442\u044C", sending: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430\u2026", sentToInstinct: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432 Instinct", sent: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E", soldOut: "\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438", retry: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C", copy: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C", copied: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E", copyFailed: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E", choose: (e2) => `\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ${G(e2)}`, chooseToCheckStock: (e2) => `\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ${G(e2)}, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430\u043B\u0438\u0447\u0438\u0435`, soldOutIn: (e2) => `\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ${e2}`, onlyLeftIn: (e2, a) => `\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${e2}: ${a}`, inStockIn: (e2) => `\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ${e2}`, inStock: (e2) => `${e2} \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438`, valuesSoldOut: (e2) => `${e2.join(", ")} \u043D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438`, valueSoldOut: (e2, a) => `${e2}, \u043D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438${a ? ` (${a})` : ""}`, plural: ee, optionIn: (e2, a) => `${e2}: ${a}`, andMore: (e2) => ` \u0438 \u0435\u0449\u0451 ${e2}`, loadingState: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u043E\u0433\u043E\u2026", savingState: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u2026", savedState: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435", unsavedState: "\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0442, \u043F\u043E\u043A\u0430 \u044D\u0442\u043E\u0442 File \u043E\u0442\u043A\u0440\u044B\u0442.", wakeAccepted: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0433\u0435\u043D\u0442\u0443", wakeWait: (e2) => `\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 ${e2} \u0441 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435.`, wakeRetryNow: "\u041C\u043E\u0436\u043D\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C.", wakeUnconfirmed: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438.", wakeForbidden: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u043A\u0430\u043A \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 File, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u043E \u0430\u0433\u0435\u043D\u0442\u0443.", wakeCanceled: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043E\u0442\u043C\u0435\u043D\u0451\u043D. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439.", wakeFailed: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441.", wakeUnavailable: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0430\u0433\u0435\u043D\u0442\u0430 \u0437\u0434\u0435\u0441\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B." };
  var rl = { myPick: "\u05D4\u05D1\u05D7\u05D9\u05E8\u05D4 \u05E9\u05DC\u05D9", recommended: "\u05DE\u05D5\u05DE\u05DC\u05E5", rangeLegend: "\u05DE\u05D9\u05E0\u05D9\u05DE\u05D5\u05DD \xB7 \u05E2\u05DB\u05E9\u05D9\u05D5 \xB7 \u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD", noPhoto: "\u05D0\u05D9\u05DF \u05EA\u05DE\u05D5\u05E0\u05D4", noData: "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4.", noMatches: "\u05D0\u05D9\u05DF \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA.", chartData: "\u05D4\u05E6\u05D2\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9 \u05D4\u05EA\u05E8\u05E9\u05D9\u05DD", observation: "\u05DE\u05D3\u05D9\u05D3\u05D4", observationNumber: (e2) => `\u05DE\u05D3\u05D9\u05D3\u05D4 ${e2}`, value: "\u05E2\u05E8\u05DA", noObservation: "\u05D0\u05D9\u05DF \u05DE\u05D3\u05D9\u05D3\u05D4", attribute: "\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF", price: "\u05DE\u05D7\u05D9\u05E8", was: ", \u05D1\u05DE\u05E7\u05D5\u05DD ", close: "\u05E1\u05D2\u05D9\u05E8\u05D4", previousPhoto: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05E7\u05D5\u05D3\u05DE\u05EA", nextPhoto: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05D1\u05D0\u05D4", photoCount: (e2, a) => `${e2} \u05DE\u05EA\u05D5\u05DA ${a}`, photosOf: (e2) => `\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC ${e2}`, fullScreen: (e2) => `${e2}, \u05DE\u05E1\u05DA \u05DE\u05DC\u05D0`, view: (e2) => `\u05D4\u05E6\u05D2\u05EA ${e2}`, viewAt: (e2) => `\u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1-${e2}`, buy: "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05E7\u05E0\u05D4 \u05D0\u05EA \u05D6\u05D4", buyShort: "\u05DC\u05E7\u05E0\u05D5\u05EA", sending: "\u05E9\u05D5\u05DC\u05D7\u2026", sentToInstinct: "\u05E0\u05E9\u05DC\u05D7 \u05DC-Instinct", sent: "\u05E0\u05E9\u05DC\u05D7", soldOut: "\u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9", retry: "\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1", copy: "\u05D4\u05E2\u05EA\u05E7\u05D4", copied: "\u05D4\u05D5\u05E2\u05EA\u05E7", copyFailed: "\u05D4\u05D4\u05E2\u05EA\u05E7\u05D4 \u05E0\u05D7\u05E1\u05DE\u05D4", choose: (e2) => `\u05D1\u05D7\u05E8\u05D5 ${e2}`, chooseToCheckStock: (e2) => `\u05D1\u05D7\u05E8\u05D5 ${e2} \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05DE\u05DC\u05D0\u05D9`, soldOutIn: (e2) => `\u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9 \u05D1-${e2}`, onlyLeftIn: (e2, a) => `\u05E0\u05E9\u05D0\u05E8\u05D5 \u05E8\u05E7 ${e2} \u05D1-${a}`, inStockIn: (e2) => `\u05D1\u05DE\u05DC\u05D0\u05D9 \u05D1-${e2}`, inStock: (e2) => `${e2} \u05D1\u05DE\u05DC\u05D0\u05D9`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "\u05D0\u05D6\u05DC\u05D5" : "\u05D0\u05D6\u05DC"}`, valueSoldOut: (e2, a) => `${e2}, \u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9${a ? ` \u05D1-${a}` : ""}`, plural: ee, optionIn: (e2, a) => `${e2} \u05D1-${a}`, andMore: (e2) => ` \u05D5\u05E2\u05D5\u05D3 ${e2}`, loadingState: "\u05D8\u05D5\u05E2\u05DF \u05D0\u05EA \u05DE\u05D4 \u05E9\u05E0\u05E9\u05DE\u05E8\u2026", savingState: "\u05E9\u05D5\u05DE\u05E8\u2026", savedState: "\u05E0\u05E9\u05DE\u05E8 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4", unsavedState: "\u05DC\u05D0 \u05E0\u05E9\u05DE\u05E8. \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05E0\u05E9\u05D0\u05E8\u05D9\u05DD \u05E8\u05E7 \u05DB\u05DC \u05E2\u05D5\u05D3 \u05D4-File \u05E4\u05EA\u05D5\u05D7.", wakeAccepted: "\u05E0\u05E9\u05DC\u05D7 \u05DC\u05E1\u05D5\u05DB\u05DF \u05E9\u05DC\u05DA", wakeWait: (e2) => `\u05D9\u05E9 \u05DC\u05D4\u05DE\u05EA\u05D9\u05DF ${e2} \u05E9\u05E0\u05D9\u05D5\u05EA \u05D5\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1.`, wakeRetryNow: "\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1 \u05E2\u05DB\u05E9\u05D9\u05D5.", wakeUnconfirmed: "\u05D4\u05DE\u05E1\u05D9\u05E8\u05D4 \u05DC\u05D0 \u05D0\u05D5\u05E9\u05E8\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1 \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D1\u05DC\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD.", wakeForbidden: "\u05D9\u05E9 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8 \u05DB\u05D1\u05E2\u05DC\u05D9\u05DD \u05E9\u05DC \u05D4-File \u05DB\u05D3\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D6\u05D4 \u05DC\u05E1\u05D5\u05DB\u05DF \u05E9\u05DC\u05DA.", wakeCanceled: "\u05D4\u05D1\u05E7\u05E9\u05D4 \u05D1\u05D5\u05D8\u05DC\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D1\u05E7\u05E9\u05D4 \u05D7\u05D3\u05E9\u05D4.", wakeFailed: "\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05E0\u05D5 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D1\u05E7\u05E9\u05D4.", wakeUnavailable: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05E1\u05D5\u05DB\u05DF \u05DC\u05D0 \u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05DB\u05D0\u05DF." };
  var Eu = { myPick: "\u0627\u062E\u062A\u064A\u0627\u0631\u064A", recommended: "\u0645\u0648\u0635\u0649 \u0628\u0647", rangeLegend: "\u0627\u0644\u0623\u062F\u0646\u0649 \xB7 \u0627\u0644\u062D\u0627\u0644\u064A \xB7 \u0627\u0644\u0623\u0639\u0644\u0649", noPhoto: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0648\u0631\u0629", noData: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0639\u0631\u0636\u0647\u0627.", noMatches: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C.", chartData: "\u0639\u0631\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0631\u0633\u0645", observation: "\u0642\u064A\u0627\u0633", observationNumber: (e2) => `\u0627\u0644\u0642\u064A\u0627\u0633 ${e2}`, value: "\u0627\u0644\u0642\u064A\u0645\u0629", noObservation: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0642\u064A\u0627\u0633", attribute: "\u0627\u0644\u062E\u0627\u0635\u064A\u0629", price: "\u0627\u0644\u0633\u0639\u0631", was: "\u060C \u0628\u062F\u0644\u064B\u0627 \u0645\u0646 ", close: "\u0625\u063A\u0644\u0627\u0642", previousPhoto: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629", nextPhoto: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629", photoCount: (e2, a) => `${e2} \u0645\u0646 ${a}`, photosOf: (e2) => `\u0635\u0648\u0631 ${e2}`, fullScreen: (e2) => `${e2}\u060C \u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629`, view: (e2) => `\u0639\u0631\u0636 ${e2}`, viewAt: (e2) => `\u0639\u0631\u0636 \u0644\u062F\u0649 ${e2}`, buy: "\u0644\u0646\u0634\u062A\u0631\u0650 \u0647\u0630\u0627", buyShort: "\u0634\u0631\u0627\u0621", sending: "\u062C\u0627\u0631\u064D \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026", sentToInstinct: "\u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 Instinct", sent: "\u0623\u064F\u0631\u0633\u0644", soldOut: "\u0646\u0641\u062F", retry: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629", copy: "\u0646\u0633\u062E", copied: "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E", copyFailed: "\u062A\u0639\u0630\u0651\u0631 \u0627\u0644\u0646\u0633\u062E", choose: (e2) => `\u0627\u062E\u062A\u0631 ${e2}`, chooseToCheckStock: (e2) => `\u0627\u062E\u062A\u0631 ${e2} \u0644\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062A\u0648\u0641\u0631`, soldOutIn: (e2) => `\u0646\u0641\u062F \u0641\u064A ${e2}`, onlyLeftIn: (e2, a) => `\u0628\u0642\u064A ${e2} \u0641\u0642\u0637 \u0641\u064A ${a}`, inStockIn: (e2) => `\u0645\u062A\u0648\u0641\u0631 \u0641\u064A ${e2}`, inStock: (e2) => `${e2} \u0645\u062A\u0648\u0641\u0631`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "\u0646\u0641\u062F\u062A" : "\u0646\u0641\u062F"}`, valueSoldOut: (e2, a) => `${e2}\u060C \u0646\u0641\u062F${a ? ` \u0641\u064A ${a}` : ""}`, plural: ee, optionIn: (e2, a) => `${e2} \u0641\u064A ${a}`, andMore: (e2) => ` \u0648${e2} \u0623\u062E\u0631\u0649`, loadingState: "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629\u2026", savingState: "\u062C\u0627\u0631\u064D \u0627\u0644\u062D\u0641\u0638\u2026", savedState: "\u0645\u062D\u0641\u0648\u0638 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632", unsavedState: "\u063A\u064A\u0631 \u0645\u062D\u0641\u0648\u0638. \u062A\u0628\u0642\u0649 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0645\u0627 \u062F\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u0640 File \u0645\u0641\u062A\u0648\u062D\u064B\u0627 \u0641\u0642\u0637.", wakeAccepted: "\u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 \u0648\u0643\u064A\u0644\u0643", wakeWait: (e2) => `\u0627\u0646\u062A\u0638\u0631 ${e2} \u062B\u0627\u0646\u064A\u0629\u060C \u062B\u0645 \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629.`, wakeRetryNow: "\u064A\u0645\u0643\u0646\u0643 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u0622\u0646.", wakeUnconfirmed: "\u0644\u0645 \u064A\u062A\u0623\u0643\u062F \u0627\u0644\u062A\u0633\u0644\u064A\u0645. \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0644\u062A\u062D\u0642\u0642 \u062F\u0648\u0646 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0645\u0631\u062A\u064A\u0646.", wakeForbidden: "\u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0635\u0641\u062A\u0643 \u0645\u0627\u0644\u0643 \u0627\u0644\u0640 File \u0644\u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0625\u0644\u0649 \u0648\u0643\u064A\u0644\u0643.", wakeCanceled: "\u0623\u064F\u0644\u063A\u064A \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628. \u064A\u0645\u0643\u0646\u0643 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F.", wakeFailed: "\u062A\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628.", wakeUnavailable: "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0648\u0643\u064A\u0644 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629 \u0647\u0646\u0627." };
  var $u = new Map(Object.entries({ en: Ka, es: Ru, fr: Du, de: Tu, it: Bu, pt: Ou, ca: Nu, nl: qu, ro: Hu, ru: Uu, he: rl, iw: rl, ar: Eu }));
  var Xe2 = (0, import_react4.createContext)(Ka);
  function w() {
    return (0, import_react4.useContext)(Xe2);
  }
  var Wu = "root";
  var Gu = "Region";
  var et2 = "Collection";
  var at2 = "Item";
  function sl() {
    return { values: {}, nodes: { [Wu]: { type: Gu, props: {}, children: [] } } };
  }
  function Xu(e2, a) {
    return Object.keys(e2.nodes).find((t) => e2.nodes[t].children.includes(a));
  }
  function ul(e2, a) {
    let t = e2[a];
    delete e2[a];
    for (let o of t.children) ul(e2, o);
  }
  function nl(e2, a) {
    if (a.op === "set") return { ...e2, values: { ...e2.values, [a.key]: a.value } };
    if (a.op === "add") {
      if (e2.nodes[a.id]) return e2;
      let r = { ...e2.nodes, [a.id]: { type: a.type, props: a.props ?? {}, children: [] } };
      if (!a.parent) return { ...e2, nodes: r };
      let l2 = e2.nodes[a.parent], s = a.after ? l2.children.indexOf(a.after) + 1 : l2.children.length;
      return r[a.parent] = { ...l2, children: [...l2.children.slice(0, s), a.id, ...l2.children.slice(s)] }, { ...e2, nodes: r };
    }
    if (a.op === "update") {
      let r = { ...e2.nodes[a.id].props };
      for (let [l2, s] of Object.entries(a.props)) s === null ? delete r[l2] : r[l2] = s;
      return { ...e2, nodes: { ...e2.nodes, [a.id]: { ...e2.nodes[a.id], props: r } } };
    }
    if (!e2.nodes[a.id]) return e2;
    let t = { ...e2.nodes }, o = Xu(e2, a.id);
    return o && (t[o] = { ...t[o], children: t[o].children.filter((r) => r !== a.id) }), ul(t, a.id), { ...e2, nodes: t };
  }
  function Pe2(e2, a) {
    return e2 == null || a == null ? NaN : e2 < a ? -1 : e2 > a ? 1 : e2 >= a ? 0 : NaN;
  }
  function Yt(e2, a) {
    return e2 == null || a == null ? NaN : a < e2 ? -1 : a > e2 ? 1 : a >= e2 ? 0 : NaN;
  }
  function tt2(e2) {
    let a, t, o;
    e2.length !== 2 ? (a = Pe2, t = (u, n) => Pe2(e2(u), n), o = (u, n) => e2(u) - n) : (a = e2 === Pe2 || e2 === Yt ? e2 : Zu, t = e2, o = e2);
    function r(u, n, d = 0, i = u.length) {
      if (d < i) {
        if (a(n, n) !== 0) return i;
        do {
          let f2 = d + i >>> 1;
          t(u[f2], n) < 0 ? d = f2 + 1 : i = f2;
        } while (d < i);
      }
      return d;
    }
    function l2(u, n, d = 0, i = u.length) {
      if (d < i) {
        if (a(n, n) !== 0) return i;
        do {
          let f2 = d + i >>> 1;
          t(u[f2], n) <= 0 ? d = f2 + 1 : i = f2;
        } while (d < i);
      }
      return d;
    }
    function s(u, n, d = 0, i = u.length) {
      let f2 = r(u, n, d, i - 1);
      return f2 > d && o(u[f2 - 1], n) > -o(u[f2], n) ? f2 - 1 : f2;
    }
    return { left: r, center: s, right: l2 };
  }
  function Zu() {
    return 0;
  }
  function Qt(e2) {
    return e2 === null ? NaN : +e2;
  }
  var dl = tt2(Pe2);
  var il = dl.right;
  var _u = dl.left;
  var Ku = tt2(Qt).center;
  var Jt = il;
  var _e2 = class extends Map {
    constructor(a, t = Qu) {
      if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: t } }), a != null) for (let [o, r] of a) this.set(o, r);
    }
    get(a) {
      return super.get(fl(this, a));
    }
    has(a) {
      return super.has(fl(this, a));
    }
    set(a, t) {
      return super.set(ju(this, a), t);
    }
    delete(a) {
      return super.delete(Yu(this, a));
    }
  };
  function fl({ _intern: e2, _key: a }, t) {
    let o = a(t);
    return e2.has(o) ? e2.get(o) : t;
  }
  function ju({ _intern: e2, _key: a }, t) {
    let o = a(t);
    return e2.has(o) ? e2.get(o) : (e2.set(o, t), t);
  }
  function Yu({ _intern: e2, _key: a }, t) {
    let o = a(t);
    return e2.has(o) && (t = e2.get(o), e2.delete(o)), t;
  }
  function Qu(e2) {
    return e2 !== null && typeof e2 == "object" ? e2.valueOf() : e2;
  }
  var eo = Math.sqrt(50);
  var ao = Math.sqrt(10);
  var to = Math.sqrt(2);
  function ot2(e2, a, t) {
    var o, r = -1, l2, s, u;
    if (a = +a, e2 = +e2, t = +t, e2 === a && t > 0) return [e2];
    if ((o = a < e2) && (l2 = e2, e2 = a, a = l2), (u = rt2(e2, a, t)) === 0 || !isFinite(u)) return [];
    if (u > 0) {
      let n = Math.round(e2 / u), d = Math.round(a / u);
      for (n * u < e2 && ++n, d * u > a && --d, s = new Array(l2 = d - n + 1); ++r < l2; ) s[r] = (n + r) * u;
    } else {
      u = -u;
      let n = Math.round(e2 * u), d = Math.round(a * u);
      for (n / u < e2 && ++n, d / u > a && --d, s = new Array(l2 = d - n + 1); ++r < l2; ) s[r] = (n + r) / u;
    }
    return o && s.reverse(), s;
  }
  function rt2(e2, a, t) {
    var o = (a - e2) / Math.max(0, t), r = Math.floor(Math.log(o) / Math.LN10), l2 = o / Math.pow(10, r);
    return r >= 0 ? (l2 >= eo ? 10 : l2 >= ao ? 5 : l2 >= to ? 2 : 1) * Math.pow(10, r) : -Math.pow(10, -r) / (l2 >= eo ? 10 : l2 >= ao ? 5 : l2 >= to ? 2 : 1);
  }
  function oo(e2, a, t) {
    var o = Math.abs(a - e2) / Math.max(0, t), r = Math.pow(10, Math.floor(Math.log(o) / Math.LN10)), l2 = o / r;
    return l2 >= eo ? r *= 10 : l2 >= ao ? r *= 5 : l2 >= to && (r *= 2), a < e2 ? -r : r;
  }
  function lt2(e2, a, t) {
    e2 = +e2, a = +a, t = (r = arguments.length) < 2 ? (a = e2, e2 = 0, 1) : r < 3 ? 1 : +t;
    for (var o = -1, r = Math.max(0, Math.ceil((a - e2) / t)) | 0, l2 = new Array(r); ++o < r; ) l2[o] = e2 + o * t;
    return l2;
  }
  function Ke2(e2, a) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(e2);
        break;
      default:
        this.range(a).domain(e2);
        break;
    }
    return this;
  }
  var cl = /* @__PURE__ */ Symbol("implicit");
  function st2() {
    var e2 = new _e2(), a = [], t = [], o = cl;
    function r(l2) {
      let s = e2.get(l2);
      if (s === void 0) {
        if (o !== cl) return o;
        e2.set(l2, s = a.push(l2) - 1);
      }
      return t[s % t.length];
    }
    return r.domain = function(l2) {
      if (!arguments.length) return a.slice();
      a = [], e2 = new _e2();
      for (let s of l2) e2.has(s) || e2.set(s, a.push(s) - 1);
      return r;
    }, r.range = function(l2) {
      return arguments.length ? (t = Array.from(l2), r) : t.slice();
    }, r.unknown = function(l2) {
      return arguments.length ? (o = l2, r) : o;
    }, r.copy = function() {
      return st2(a, t).unknown(o);
    }, Ke2.apply(r, arguments), r;
  }
  function Ia() {
    var e2 = st2().unknown(void 0), a = e2.domain, t = e2.range, o = 0, r = 1, l2, s, u = false, n = 0, d = 0, i = 0.5;
    delete e2.unknown;
    function f2() {
      var m = a().length, c = r < o, g = c ? r : o, L2 = c ? o : r;
      l2 = (L2 - g) / Math.max(1, m - n + d * 2), u && (l2 = Math.floor(l2)), g += (L2 - g - l2 * (m - n)) * i, s = l2 * (1 - n), u && (g = Math.round(g), s = Math.round(s));
      var h = lt2(m).map(function(b) {
        return g + l2 * b;
      });
      return t(c ? h.reverse() : h);
    }
    return e2.domain = function(m) {
      return arguments.length ? (a(m), f2()) : a();
    }, e2.range = function(m) {
      return arguments.length ? ([o, r] = m, o = +o, r = +r, f2()) : [o, r];
    }, e2.rangeRound = function(m) {
      return [o, r] = m, o = +o, r = +r, u = true, f2();
    }, e2.bandwidth = function() {
      return s;
    }, e2.step = function() {
      return l2;
    }, e2.round = function(m) {
      return arguments.length ? (u = !!m, f2()) : u;
    }, e2.padding = function(m) {
      return arguments.length ? (n = Math.min(1, d = +m), f2()) : n;
    }, e2.paddingInner = function(m) {
      return arguments.length ? (n = Math.min(1, m), f2()) : n;
    }, e2.paddingOuter = function(m) {
      return arguments.length ? (d = +m, f2()) : d;
    }, e2.align = function(m) {
      return arguments.length ? (i = Math.max(0, Math.min(1, m)), f2()) : i;
    }, e2.copy = function() {
      return Ia(a(), [o, r]).round(u).paddingInner(n).paddingOuter(d).align(i);
    }, Ke2.apply(f2(), arguments);
  }
  function ie2(e2, a, t) {
    e2.prototype = a.prototype = t, t.constructor = e2;
  }
  function me2(e2, a) {
    var t = Object.create(e2.prototype);
    for (var o in a) t[o] = a[o];
    return t;
  }
  function le2() {
  }
  var he2 = 0.7;
  var Fe2 = 1 / he2;
  var je2 = "\\s*([+-]?\\d+)\\s*";
  var Ca = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var re2 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var Ju = /^#([0-9a-f]{3,8})$/;
  var en = new RegExp(`^rgb\\(${je2},${je2},${je2}\\)$`);
  var an = new RegExp(`^rgb\\(${re2},${re2},${re2}\\)$`);
  var tn = new RegExp(`^rgba\\(${je2},${je2},${je2},${Ca}\\)$`);
  var on = new RegExp(`^rgba\\(${re2},${re2},${re2},${Ca}\\)$`);
  var rn = new RegExp(`^hsl\\(${Ca},${re2},${re2}\\)$`);
  var ln = new RegExp(`^hsla\\(${Ca},${re2},${re2},${Ca}\\)$`);
  var pl = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  ie2(le2, ge2, { copy(e2) {
    return Object.assign(new this.constructor(), this, e2);
  }, displayable() {
    return this.rgb().displayable();
  }, hex: ml, formatHex: ml, formatHex8: sn, formatHsl: un, formatRgb: hl, toString: hl });
  function ml() {
    return this.rgb().formatHex();
  }
  function sn() {
    return this.rgb().formatHex8();
  }
  function un() {
    return Sl(this).formatHsl();
  }
  function hl() {
    return this.rgb().formatRgb();
  }
  function ge2(e2) {
    var a, t;
    return e2 = (e2 + "").trim().toLowerCase(), (a = Ju.exec(e2)) ? (t = a[1].length, a = parseInt(a[1], 16), t === 6 ? gl(a) : t === 3 ? new V(a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, (a & 15) << 4 | a & 15, 1) : t === 8 ? ut2(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, (a & 255) / 255) : t === 4 ? ut2(a >> 12 & 15 | a >> 8 & 240, a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, ((a & 15) << 4 | a & 15) / 255) : null) : (a = en.exec(e2)) ? new V(a[1], a[2], a[3], 1) : (a = an.exec(e2)) ? new V(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, 1) : (a = tn.exec(e2)) ? ut2(a[1], a[2], a[3], a[4]) : (a = on.exec(e2)) ? ut2(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, a[4]) : (a = rn.exec(e2)) ? Il(a[1], a[2] / 100, a[3] / 100, 1) : (a = ln.exec(e2)) ? Il(a[1], a[2] / 100, a[3] / 100, a[4]) : pl.hasOwnProperty(e2) ? gl(pl[e2]) : e2 === "transparent" ? new V(NaN, NaN, NaN, 0) : null;
  }
  function gl(e2) {
    return new V(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
  }
  function ut2(e2, a, t, o) {
    return o <= 0 && (e2 = a = t = NaN), new V(e2, a, t, o);
  }
  function Sa(e2) {
    return e2 instanceof le2 || (e2 = ge2(e2)), e2 ? (e2 = e2.rgb(), new V(e2.r, e2.g, e2.b, e2.opacity)) : new V();
  }
  function Ye2(e2, a, t, o) {
    return arguments.length === 1 ? Sa(e2) : new V(e2, a, t, o ?? 1);
  }
  function V(e2, a, t, o) {
    this.r = +e2, this.g = +a, this.b = +t, this.opacity = +o;
  }
  ie2(V, Ye2, me2(le2, { brighter(e2) {
    return e2 = e2 == null ? Fe2 : Math.pow(Fe2, e2), new V(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? he2 : Math.pow(he2, e2), new V(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, rgb() {
    return this;
  }, clamp() {
    return new V(Ae2(this.r), Ae2(this.g), Ae2(this.b), dt2(this.opacity));
  }, displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: Ll, formatHex: Ll, formatHex8: nn, formatRgb: xl, toString: xl }));
  function Ll() {
    return `#${Me2(this.r)}${Me2(this.g)}${Me2(this.b)}`;
  }
  function nn() {
    return `#${Me2(this.r)}${Me2(this.g)}${Me2(this.b)}${Me2((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function xl() {
    let e2 = dt2(this.opacity);
    return `${e2 === 1 ? "rgb(" : "rgba("}${Ae2(this.r)}, ${Ae2(this.g)}, ${Ae2(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
  }
  function dt2(e2) {
    return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
  }
  function Ae2(e2) {
    return Math.max(0, Math.min(255, Math.round(e2) || 0));
  }
  function Me2(e2) {
    return e2 = Ae2(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
  }
  function Il(e2, a, t, o) {
    return o <= 0 ? e2 = a = t = NaN : t <= 0 || t >= 1 ? e2 = a = NaN : a <= 0 && (e2 = NaN), new ae2(e2, a, t, o);
  }
  function Sl(e2) {
    if (e2 instanceof ae2) return new ae2(e2.h, e2.s, e2.l, e2.opacity);
    if (e2 instanceof le2 || (e2 = ge2(e2)), !e2) return new ae2();
    if (e2 instanceof ae2) return e2;
    e2 = e2.rgb();
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = Math.min(a, t, o), l2 = Math.max(a, t, o), s = NaN, u = l2 - r, n = (l2 + r) / 2;
    return u ? (a === l2 ? s = (t - o) / u + (t < o) * 6 : t === l2 ? s = (o - a) / u + 2 : s = (a - t) / u + 4, u /= n < 0.5 ? l2 + r : 2 - l2 - r, s *= 60) : u = n > 0 && n < 1 ? 0 : s, new ae2(s, u, n, e2.opacity);
  }
  function va(e2, a, t, o) {
    return arguments.length === 1 ? Sl(e2) : new ae2(e2, a, t, o ?? 1);
  }
  function ae2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  ie2(ae2, va, me2(le2, { brighter(e2) {
    return e2 = e2 == null ? Fe2 : Math.pow(Fe2, e2), new ae2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? he2 : Math.pow(he2, e2), new ae2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = this.h % 360 + (this.h < 0) * 360, a = isNaN(e2) || isNaN(this.s) ? 0 : this.s, t = this.l, o = t + (t < 0.5 ? t : 1 - t) * a, r = 2 * t - o;
    return new V(ro(e2 >= 240 ? e2 - 240 : e2 + 120, r, o), ro(e2, r, o), ro(e2 < 120 ? e2 + 240 : e2 - 120, r, o), this.opacity);
  }, clamp() {
    return new ae2(Cl(this.h), nt2(this.s), nt2(this.l), dt2(this.opacity));
  }, displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl() {
    let e2 = dt2(this.opacity);
    return `${e2 === 1 ? "hsl(" : "hsla("}${Cl(this.h)}, ${nt2(this.s) * 100}%, ${nt2(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
  } }));
  function Cl(e2) {
    return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
  }
  function nt2(e2) {
    return Math.max(0, Math.min(1, e2 || 0));
  }
  function ro(e2, a, t) {
    return (e2 < 60 ? a + (t - a) * e2 / 60 : e2 < 180 ? t : e2 < 240 ? a + (t - a) * (240 - e2) / 60 : a) * 255;
  }
  var it2 = Math.PI / 180;
  var ft2 = 180 / Math.PI;
  var ct2 = 18;
  var vl = 0.96422;
  var bl = 1;
  var yl = 0.82521;
  var wl = 4 / 29;
  var Qe2 = 6 / 29;
  var kl = 3 * Qe2 * Qe2;
  var dn = Qe2 * Qe2 * Qe2;
  function Pl(e2) {
    if (e2 instanceof se2) return new se2(e2.l, e2.a, e2.b, e2.opacity);
    if (e2 instanceof fe2) return Ml(e2);
    e2 instanceof V || (e2 = Sa(e2));
    var a = no(e2.r), t = no(e2.g), o = no(e2.b), r = lo((0.2225045 * a + 0.7168786 * t + 0.0606169 * o) / bl), l2, s;
    return a === t && t === o ? l2 = s = r : (l2 = lo((0.4360747 * a + 0.3850649 * t + 0.1430804 * o) / vl), s = lo((0.0139322 * a + 0.0971045 * t + 0.7141733 * o) / yl)), new se2(116 * r - 16, 500 * (l2 - r), 200 * (r - s), e2.opacity);
  }
  function Je2(e2, a, t, o) {
    return arguments.length === 1 ? Pl(e2) : new se2(e2, a, t, o ?? 1);
  }
  function se2(e2, a, t, o) {
    this.l = +e2, this.a = +a, this.b = +t, this.opacity = +o;
  }
  ie2(se2, Je2, me2(le2, { brighter(e2) {
    return new se2(this.l + ct2 * (e2 ?? 1), this.a, this.b, this.opacity);
  }, darker(e2) {
    return new se2(this.l - ct2 * (e2 ?? 1), this.a, this.b, this.opacity);
  }, rgb() {
    var e2 = (this.l + 16) / 116, a = isNaN(this.a) ? e2 : e2 + this.a / 500, t = isNaN(this.b) ? e2 : e2 - this.b / 200;
    return a = vl * so(a), e2 = bl * so(e2), t = yl * so(t), new V(uo(3.1338561 * a - 1.6168667 * e2 - 0.4906146 * t), uo(-0.9787684 * a + 1.9161415 * e2 + 0.033454 * t), uo(0.0719453 * a - 0.2289914 * e2 + 1.4052427 * t), this.opacity);
  } }));
  function lo(e2) {
    return e2 > dn ? Math.pow(e2, 1 / 3) : e2 / kl + wl;
  }
  function so(e2) {
    return e2 > Qe2 ? e2 * e2 * e2 : kl * (e2 - wl);
  }
  function uo(e2) {
    return 255 * (e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * Math.pow(e2, 1 / 2.4) - 0.055);
  }
  function no(e2) {
    return (e2 /= 255) <= 0.04045 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4);
  }
  function fn(e2) {
    if (e2 instanceof fe2) return new fe2(e2.h, e2.c, e2.l, e2.opacity);
    if (e2 instanceof se2 || (e2 = Pl(e2)), e2.a === 0 && e2.b === 0) return new fe2(NaN, 0 < e2.l && e2.l < 100 ? 0 : NaN, e2.l, e2.opacity);
    var a = Math.atan2(e2.b, e2.a) * ft2;
    return new fe2(a < 0 ? a + 360 : a, Math.sqrt(e2.a * e2.a + e2.b * e2.b), e2.l, e2.opacity);
  }
  function ba(e2, a, t, o) {
    return arguments.length === 1 ? fn(e2) : new fe2(e2, a, t, o ?? 1);
  }
  function fe2(e2, a, t, o) {
    this.h = +e2, this.c = +a, this.l = +t, this.opacity = +o;
  }
  function Ml(e2) {
    if (isNaN(e2.h)) return new se2(e2.l, 0, 0, e2.opacity);
    var a = e2.h * it2;
    return new se2(e2.l, Math.cos(a) * e2.c, Math.sin(a) * e2.c, e2.opacity);
  }
  ie2(fe2, ba, me2(le2, { brighter(e2) {
    return new fe2(this.h, this.c, this.l + ct2 * (e2 ?? 1), this.opacity);
  }, darker(e2) {
    return new fe2(this.h, this.c, this.l - ct2 * (e2 ?? 1), this.opacity);
  }, rgb() {
    return Ml(this).rgb();
  } }));
  var Dl = -0.14861;
  var io = 1.78277;
  var fo = -0.29227;
  var pt2 = -0.90649;
  var ya = 1.97294;
  var Al = ya * pt2;
  var Fl = ya * io;
  var Rl = io * fo - pt2 * Dl;
  function cn(e2) {
    if (e2 instanceof Re2) return new Re2(e2.h, e2.s, e2.l, e2.opacity);
    e2 instanceof V || (e2 = Sa(e2));
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = (Rl * o + Al * a - Fl * t) / (Rl + Al - Fl), l2 = o - r, s = (ya * (t - r) - fo * l2) / pt2, u = Math.sqrt(s * s + l2 * l2) / (ya * r * (1 - r)), n = u ? Math.atan2(s, l2) * ft2 - 120 : NaN;
    return new Re2(n < 0 ? n + 360 : n, u, r, e2.opacity);
  }
  function ea(e2, a, t, o) {
    return arguments.length === 1 ? cn(e2) : new Re2(e2, a, t, o ?? 1);
  }
  function Re2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  ie2(Re2, ea, me2(le2, { brighter(e2) {
    return e2 = e2 == null ? Fe2 : Math.pow(Fe2, e2), new Re2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? he2 : Math.pow(he2, e2), new Re2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = isNaN(this.h) ? 0 : (this.h + 120) * it2, a = +this.l, t = isNaN(this.s) ? 0 : this.s * a * (1 - a), o = Math.cos(e2), r = Math.sin(e2);
    return new V(255 * (a + t * (Dl * o + io * r)), 255 * (a + t * (fo * o + pt2 * r)), 255 * (a + t * (ya * o)), this.opacity);
  } }));
  function co(e2, a, t, o, r) {
    var l2 = e2 * e2, s = l2 * e2;
    return ((1 - 3 * e2 + 3 * l2 - s) * a + (4 - 6 * l2 + 3 * s) * t + (1 + 3 * e2 + 3 * l2 - 3 * s) * o + s * r) / 6;
  }
  function Tl(e2) {
    var a = e2.length - 1;
    return function(t) {
      var o = t <= 0 ? t = 0 : t >= 1 ? (t = 1, a - 1) : Math.floor(t * a), r = e2[o], l2 = e2[o + 1], s = o > 0 ? e2[o - 1] : 2 * r - l2, u = o < a - 1 ? e2[o + 2] : 2 * l2 - r;
      return co((t - o / a) * a, s, r, l2, u);
    };
  }
  function Bl(e2) {
    var a = e2.length;
    return function(t) {
      var o = Math.floor(((t %= 1) < 0 ? ++t : t) * a), r = e2[(o + a - 1) % a], l2 = e2[o % a], s = e2[(o + 1) % a], u = e2[(o + 2) % a];
      return co((t - o / a) * a, r, l2, s, u);
    };
  }
  var aa = (e2) => () => e2;
  function Ol(e2, a) {
    return function(t) {
      return e2 + t * a;
    };
  }
  function pn(e2, a, t) {
    return e2 = Math.pow(e2, t), a = Math.pow(a, t) - e2, t = 1 / t, function(o) {
      return Math.pow(e2 + o * a, t);
    };
  }
  function ta(e2, a) {
    var t = a - e2;
    return t ? Ol(e2, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : aa(isNaN(e2) ? a : e2);
  }
  function Nl(e2) {
    return (e2 = +e2) == 1 ? N2 : function(a, t) {
      return t - a ? pn(a, t, e2) : aa(isNaN(a) ? t : a);
    };
  }
  function N2(e2, a) {
    var t = a - e2;
    return t ? Ol(e2, t) : aa(isNaN(e2) ? a : e2);
  }
  var oa = (function e(a) {
    var t = Nl(a);
    function o(r, l2) {
      var s = t((r = Ye2(r)).r, (l2 = Ye2(l2)).r), u = t(r.g, l2.g), n = t(r.b, l2.b), d = N2(r.opacity, l2.opacity);
      return function(i) {
        return r.r = s(i), r.g = u(i), r.b = n(i), r.opacity = d(i), r + "";
      };
    }
    return o.gamma = e, o;
  })(1);
  function ql(e2) {
    return function(a) {
      var t = a.length, o = new Array(t), r = new Array(t), l2 = new Array(t), s, u;
      for (s = 0; s < t; ++s) u = Ye2(a[s]), o[s] = u.r || 0, r[s] = u.g || 0, l2[s] = u.b || 0;
      return o = e2(o), r = e2(r), l2 = e2(l2), u.opacity = 1, function(n) {
        return u.r = o(n), u.g = r(n), u.b = l2(n), u + "";
      };
    };
  }
  var mn = ql(Tl);
  var hn = ql(Bl);
  function Hl(e2, a) {
    a || (a = []);
    var t = e2 ? Math.min(a.length, e2.length) : 0, o = a.slice(), r;
    return function(l2) {
      for (r = 0; r < t; ++r) o[r] = e2[r] * (1 - l2) + a[r] * l2;
      return o;
    };
  }
  function Ul(e2) {
    return ArrayBuffer.isView(e2) && !(e2 instanceof DataView);
  }
  function El(e2, a) {
    var t = a ? a.length : 0, o = e2 ? Math.min(t, e2.length) : 0, r = new Array(o), l2 = new Array(t), s;
    for (s = 0; s < o; ++s) r[s] = De2(e2[s], a[s]);
    for (; s < t; ++s) l2[s] = a[s];
    return function(u) {
      for (s = 0; s < o; ++s) l2[s] = r[s](u);
      return l2;
    };
  }
  function $l(e2, a) {
    var t = /* @__PURE__ */ new Date();
    return e2 = +e2, a = +a, function(o) {
      return t.setTime(e2 * (1 - o) + a * o), t;
    };
  }
  function Le2(e2, a) {
    return e2 = +e2, a = +a, function(t) {
      return e2 * (1 - t) + a * t;
    };
  }
  function Vl(e2, a) {
    var t = {}, o = {}, r;
    (e2 === null || typeof e2 != "object") && (e2 = {}), (a === null || typeof a != "object") && (a = {});
    for (r in a) r in e2 ? t[r] = De2(e2[r], a[r]) : o[r] = a[r];
    return function(l2) {
      for (r in t) o[r] = t[r](l2);
      return o;
    };
  }
  var mo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var po = new RegExp(mo.source, "g");
  function gn(e2) {
    return function() {
      return e2;
    };
  }
  function Ln(e2) {
    return function(a) {
      return e2(a) + "";
    };
  }
  function zl(e2, a) {
    var t = mo.lastIndex = po.lastIndex = 0, o, r, l2, s = -1, u = [], n = [];
    for (e2 = e2 + "", a = a + ""; (o = mo.exec(e2)) && (r = po.exec(a)); ) (l2 = r.index) > t && (l2 = a.slice(t, l2), u[s] ? u[s] += l2 : u[++s] = l2), (o = o[0]) === (r = r[0]) ? u[s] ? u[s] += r : u[++s] = r : (u[++s] = null, n.push({ i: s, x: Le2(o, r) })), t = po.lastIndex;
    return t < a.length && (l2 = a.slice(t), u[s] ? u[s] += l2 : u[++s] = l2), u.length < 2 ? n[0] ? Ln(n[0].x) : gn(a) : (a = n.length, function(d) {
      for (var i = 0, f2; i < a; ++i) u[(f2 = n[i]).i] = f2.x(d);
      return u.join("");
    });
  }
  function De2(e2, a) {
    var t = typeof a, o;
    return a == null || t === "boolean" ? aa(a) : (t === "number" ? Le2 : t === "string" ? (o = ge2(a)) ? (a = o, oa) : zl : a instanceof ge2 ? oa : a instanceof Date ? $l : Ul(a) ? Hl : Array.isArray(a) ? El : typeof a.valueOf != "function" && typeof a.toString != "function" || isNaN(a) ? Vl : Le2)(e2, a);
  }
  function wa(e2, a) {
    return e2 = +e2, a = +a, function(t) {
      return Math.round(e2 * (1 - t) + a * t);
    };
  }
  function Wl(e2) {
    return function(a, t) {
      var o = e2((a = va(a)).h, (t = va(t)).h), r = N2(a.s, t.s), l2 = N2(a.l, t.l), s = N2(a.opacity, t.opacity);
      return function(u) {
        return a.h = o(u), a.s = r(u), a.l = l2(u), a.opacity = s(u), a + "";
      };
    };
  }
  var ho = Wl(ta);
  var go = Wl(N2);
  function mt2(e2, a) {
    var t = N2((e2 = Je2(e2)).l, (a = Je2(a)).l), o = N2(e2.a, a.a), r = N2(e2.b, a.b), l2 = N2(e2.opacity, a.opacity);
    return function(s) {
      return e2.l = t(s), e2.a = o(s), e2.b = r(s), e2.opacity = l2(s), e2 + "";
    };
  }
  function Gl(e2) {
    return function(a, t) {
      var o = e2((a = ba(a)).h, (t = ba(t)).h), r = N2(a.c, t.c), l2 = N2(a.l, t.l), s = N2(a.opacity, t.opacity);
      return function(u) {
        return a.h = o(u), a.c = r(u), a.l = l2(u), a.opacity = s(u), a + "";
      };
    };
  }
  var Lo = Gl(ta);
  var xo = Gl(N2);
  function Xl(e2) {
    return (function a(t) {
      t = +t;
      function o(r, l2) {
        var s = e2((r = ea(r)).h, (l2 = ea(l2)).h), u = N2(r.s, l2.s), n = N2(r.l, l2.l), d = N2(r.opacity, l2.opacity);
        return function(i) {
          return r.h = s(i), r.s = u(i), r.l = n(Math.pow(i, t)), r.opacity = d(i), r + "";
        };
      }
      return o.gamma = a, o;
    })(1);
  }
  var Io = Xl(ta);
  var Co = Xl(N2);
  function So(e2) {
    return function() {
      return e2;
    };
  }
  function vo(e2) {
    return +e2;
  }
  var Zl = [0, 1];
  function ra(e2) {
    return e2;
  }
  function bo(e2, a) {
    return (a -= e2 = +e2) ? function(t) {
      return (t - e2) / a;
    } : So(isNaN(a) ? NaN : 0.5);
  }
  function xn(e2, a) {
    var t;
    return e2 > a && (t = e2, e2 = a, a = t), function(o) {
      return Math.max(e2, Math.min(a, o));
    };
  }
  function In(e2, a, t) {
    var o = e2[0], r = e2[1], l2 = a[0], s = a[1];
    return r < o ? (o = bo(r, o), l2 = t(s, l2)) : (o = bo(o, r), l2 = t(l2, s)), function(u) {
      return l2(o(u));
    };
  }
  function Cn(e2, a, t) {
    var o = Math.min(e2.length, a.length) - 1, r = new Array(o), l2 = new Array(o), s = -1;
    for (e2[o] < e2[0] && (e2 = e2.slice().reverse(), a = a.slice().reverse()); ++s < o; ) r[s] = bo(e2[s], e2[s + 1]), l2[s] = t(a[s], a[s + 1]);
    return function(u) {
      var n = Jt(e2, u, 1, o) - 1;
      return l2[n](r[n](u));
    };
  }
  function _l(e2, a) {
    return a.domain(e2.domain()).range(e2.range()).interpolate(e2.interpolate()).clamp(e2.clamp()).unknown(e2.unknown());
  }
  function Sn() {
    var e2 = Zl, a = Zl, t = De2, o, r, l2, s = ra, u, n, d;
    function i() {
      var m = Math.min(e2.length, a.length);
      return s !== ra && (s = xn(e2[0], e2[m - 1])), u = m > 2 ? Cn : In, n = d = null, f2;
    }
    function f2(m) {
      return m == null || isNaN(m = +m) ? l2 : (n || (n = u(e2.map(o), a, t)))(o(s(m)));
    }
    return f2.invert = function(m) {
      return s(r((d || (d = u(a, e2.map(o), Le2)))(m)));
    }, f2.domain = function(m) {
      return arguments.length ? (e2 = Array.from(m, vo), i()) : e2.slice();
    }, f2.range = function(m) {
      return arguments.length ? (a = Array.from(m), i()) : a.slice();
    }, f2.rangeRound = function(m) {
      return a = Array.from(m), t = wa, i();
    }, f2.clamp = function(m) {
      return arguments.length ? (s = m ? true : ra, i()) : s !== ra;
    }, f2.interpolate = function(m) {
      return arguments.length ? (t = m, i()) : t;
    }, f2.unknown = function(m) {
      return arguments.length ? (l2 = m, f2) : l2;
    }, function(m, c) {
      return o = m, r = c, i();
    };
  }
  function yo() {
    return Sn()(ra, ra);
  }
  function Kl(e2) {
    return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
  }
  function Te2(e2, a) {
    if ((t = (e2 = a ? e2.toExponential(a - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
    var t, o = e2.slice(0, t);
    return [o.length > 1 ? o[0] + o.slice(2) : o, +e2.slice(t + 1)];
  }
  function ue2(e2) {
    return e2 = Te2(Math.abs(e2)), e2 ? e2[1] : NaN;
  }
  function jl(e2, a) {
    return function(t, o) {
      for (var r = t.length, l2 = [], s = 0, u = e2[0], n = 0; r > 0 && u > 0 && (n + u + 1 > o && (u = Math.max(1, o - n)), l2.push(t.substring(r -= u, r + u)), !((n += u + 1) > o)); ) u = e2[s = (s + 1) % e2.length];
      return l2.reverse().join(a);
    };
  }
  function Yl(e2) {
    return function(a) {
      return a.replace(/[0-9]/g, function(t) {
        return e2[+t];
      });
    };
  }
  var vn = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function xe2(e2) {
    if (!(a = vn.exec(e2))) throw new Error("invalid format: " + e2);
    var a;
    return new ht2({ fill: a[1], align: a[2], sign: a[3], symbol: a[4], zero: a[5], width: a[6], comma: a[7], precision: a[8] && a[8].slice(1), trim: a[9], type: a[10] });
  }
  xe2.prototype = ht2.prototype;
  function ht2(e2) {
    this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
  }
  ht2.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  function Ql(e2) {
    e: for (var a = e2.length, t = 1, o = -1, r; t < a; ++t) switch (e2[t]) {
      case ".":
        o = r = t;
        break;
      case "0":
        o === 0 && (o = t), r = t;
        break;
      default:
        if (!+e2[t]) break e;
        o > 0 && (o = 0);
        break;
    }
    return o > 0 ? e2.slice(0, o) + e2.slice(r + 1) : e2;
  }
  var wo;
  function Jl(e2, a) {
    var t = Te2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1], l2 = r - (wo = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, s = o.length;
    return l2 === s ? o : l2 > s ? o + new Array(l2 - s + 1).join("0") : l2 > 0 ? o.slice(0, l2) + "." + o.slice(l2) : "0." + new Array(1 - l2).join("0") + Te2(e2, Math.max(0, a + l2 - 1))[0];
  }
  function ko(e2, a) {
    var t = Te2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1];
    return r < 0 ? "0." + new Array(-r).join("0") + o : o.length > r + 1 ? o.slice(0, r + 1) + "." + o.slice(r + 1) : o + new Array(r - o.length + 2).join("0");
  }
  var Po = { "%": (e2, a) => (e2 * 100).toFixed(a), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: Kl, e: (e2, a) => e2.toExponential(a), f: (e2, a) => e2.toFixed(a), g: (e2, a) => e2.toPrecision(a), o: (e2) => Math.round(e2).toString(8), p: (e2, a) => ko(e2 * 100, a), r: ko, s: Jl, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
  function Mo(e2) {
    return e2;
  }
  var es = Array.prototype.map;
  var as = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function ts(e2) {
    var a = e2.grouping === void 0 || e2.thousands === void 0 ? Mo : jl(es.call(e2.grouping, Number), e2.thousands + ""), t = e2.currency === void 0 ? "" : e2.currency[0] + "", o = e2.currency === void 0 ? "" : e2.currency[1] + "", r = e2.decimal === void 0 ? "." : e2.decimal + "", l2 = e2.numerals === void 0 ? Mo : Yl(es.call(e2.numerals, String)), s = e2.percent === void 0 ? "%" : e2.percent + "", u = e2.minus === void 0 ? "\u2212" : e2.minus + "", n = e2.nan === void 0 ? "NaN" : e2.nan + "";
    function d(f2) {
      f2 = xe2(f2);
      var m = f2.fill, c = f2.align, g = f2.sign, L2 = f2.symbol, h = f2.zero, b = f2.width, R2 = f2.comma, P2 = f2.precision, v = f2.trim, M2 = f2.type;
      M2 === "n" ? (R2 = true, M2 = "g") : Po[M2] || (P2 === void 0 && (P2 = 12), v = true, M2 = "g"), (h || m === "0" && c === "=") && (h = true, m = "0", c = "=");
      var I2 = L2 === "$" ? t : L2 === "#" && /[boxX]/.test(M2) ? "0" + M2.toLowerCase() : "", x2 = L2 === "$" ? o : /[%p]/.test(M2) ? s : "", y = Po[M2], E2 = /[defgprs%]/.test(M2);
      P2 = P2 === void 0 ? 6 : /[gprs]/.test(M2) ? Math.max(1, Math.min(21, P2)) : Math.max(0, Math.min(20, P2));
      function K(k2) {
        var ke2 = I2, j = x2, Ge2, al, Xa;
        if (M2 === "c") j = y(k2) + j, k2 = "";
        else {
          k2 = +k2;
          var Za = k2 < 0 || 1 / k2 < 0;
          if (k2 = isNaN(k2) ? n : y(Math.abs(k2), P2), v && (k2 = Ql(k2)), Za && +k2 == 0 && g !== "+" && (Za = false), ke2 = (Za ? g === "(" ? g : u : g === "-" || g === "(" ? "" : g) + ke2, j = (M2 === "s" ? as[8 + wo / 3] : "") + j + (Za && g === "(" ? ")" : ""), E2) {
            for (Ge2 = -1, al = k2.length; ++Ge2 < al; ) if (Xa = k2.charCodeAt(Ge2), 48 > Xa || Xa > 57) {
              j = (Xa === 46 ? r + k2.slice(Ge2 + 1) : k2.slice(Ge2)) + j, k2 = k2.slice(0, Ge2);
              break;
            }
          }
        }
        R2 && !h && (k2 = a(k2, 1 / 0));
        var _a = ke2.length + k2.length + j.length, de2 = _a < b ? new Array(b - _a + 1).join(m) : "";
        switch (R2 && h && (k2 = a(de2 + k2, de2.length ? b - j.length : 1 / 0), de2 = ""), c) {
          case "<":
            k2 = ke2 + k2 + j + de2;
            break;
          case "=":
            k2 = ke2 + de2 + k2 + j;
            break;
          case "^":
            k2 = de2.slice(0, _a = de2.length >> 1) + ke2 + k2 + j + de2.slice(_a);
            break;
          default:
            k2 = de2 + ke2 + k2 + j;
            break;
        }
        return l2(k2);
      }
      return K.toString = function() {
        return f2 + "";
      }, K;
    }
    function i(f2, m) {
      var c = d((f2 = xe2(f2), f2.type = "f", f2)), g = Math.max(-8, Math.min(8, Math.floor(ue2(m) / 3))) * 3, L2 = Math.pow(10, -g), h = as[8 + g / 3];
      return function(b) {
        return c(L2 * b) + h;
      };
    }
    return { format: d, formatPrefix: i };
  }
  var gt2;
  var Lt;
  var xt2;
  Ao({ thousands: ",", grouping: [3], currency: ["$", ""] });
  function Ao(e2) {
    return gt2 = ts(e2), Lt = gt2.format, xt2 = gt2.formatPrefix, gt2;
  }
  function Fo(e2) {
    return Math.max(0, -ue2(Math.abs(e2)));
  }
  function Ro(e2, a) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ue2(a) / 3))) * 3 - ue2(Math.abs(e2)));
  }
  function Do(e2, a) {
    return e2 = Math.abs(e2), a = Math.abs(a) - e2, Math.max(0, ue2(a) - ue2(e2)) + 1;
  }
  function To(e2, a, t, o) {
    var r = oo(e2, a, t), l2;
    switch (o = xe2(o ?? ",f"), o.type) {
      case "s": {
        var s = Math.max(Math.abs(e2), Math.abs(a));
        return o.precision == null && !isNaN(l2 = Ro(r, s)) && (o.precision = l2), xt2(o, s);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        o.precision == null && !isNaN(l2 = Do(r, Math.max(Math.abs(e2), Math.abs(a)))) && (o.precision = l2 - (o.type === "e"));
        break;
      }
      case "f":
      case "%": {
        o.precision == null && !isNaN(l2 = Fo(r)) && (o.precision = l2 - (o.type === "%") * 2);
        break;
      }
    }
    return Lt(o);
  }
  function bn(e2) {
    var a = e2.domain;
    return e2.ticks = function(t) {
      var o = a();
      return ot2(o[0], o[o.length - 1], t ?? 10);
    }, e2.tickFormat = function(t, o) {
      var r = a();
      return To(r[0], r[r.length - 1], t ?? 10, o);
    }, e2.nice = function(t) {
      t == null && (t = 10);
      var o = a(), r = 0, l2 = o.length - 1, s = o[r], u = o[l2], n, d, i = 10;
      for (u < s && (d = s, s = u, u = d, d = r, r = l2, l2 = d); i-- > 0; ) {
        if (d = rt2(s, u, t), d === n) return o[r] = s, o[l2] = u, a(o);
        if (d > 0) s = Math.floor(s / d) * d, u = Math.ceil(u / d) * d;
        else if (d < 0) s = Math.ceil(s * d) / d, u = Math.floor(u * d) / d;
        else break;
        n = d;
      }
      return e2;
    }, e2;
  }
  function ka() {
    var e2 = yo();
    return e2.copy = function() {
      return _l(e2, ka());
    }, Ke2.apply(e2, arguments), bn(e2);
  }
  var Bo = /* @__PURE__ */ new Date();
  var Oo = /* @__PURE__ */ new Date();
  function q(e2, a, t, o) {
    function r(l2) {
      return e2(l2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l2)), l2;
    }
    return r.floor = (l2) => (e2(l2 = /* @__PURE__ */ new Date(+l2)), l2), r.ceil = (l2) => (e2(l2 = new Date(l2 - 1)), a(l2, 1), e2(l2), l2), r.round = (l2) => {
      let s = r(l2), u = r.ceil(l2);
      return l2 - s < u - l2 ? s : u;
    }, r.offset = (l2, s) => (a(l2 = /* @__PURE__ */ new Date(+l2), s == null ? 1 : Math.floor(s)), l2), r.range = (l2, s, u) => {
      let n = [];
      if (l2 = r.ceil(l2), u = u == null ? 1 : Math.floor(u), !(l2 < s) || !(u > 0)) return n;
      let d;
      do
        n.push(d = /* @__PURE__ */ new Date(+l2)), a(l2, u), e2(l2);
      while (d < l2 && l2 < s);
      return n;
    }, r.filter = (l2) => q((s) => {
      if (s >= s) for (; e2(s), !l2(s); ) s.setTime(s - 1);
    }, (s, u) => {
      if (s >= s) if (u < 0) for (; ++u <= 0; ) for (; a(s, -1), !l2(s); ) ;
      else for (; --u >= 0; ) for (; a(s, 1), !l2(s); ) ;
    }), t && (r.count = (l2, s) => (Bo.setTime(+l2), Oo.setTime(+s), e2(Bo), e2(Oo), Math.floor(t(Bo, Oo))), r.every = (l2) => (l2 = Math.floor(l2), !isFinite(l2) || !(l2 > 0) ? null : l2 > 1 ? r.filter(o ? (s) => o(s) % l2 === 0 : (s) => r.count(0, s) % l2 === 0) : r)), r;
  }
  var Be2 = q((e2) => {
    e2.setTime(e2 - e2.getMilliseconds());
  }, (e2, a) => {
    e2.setTime(+e2 + a * 1e3);
  }, (e2, a) => (a - e2) / 1e3, (e2) => e2.getUTCSeconds());
  var os = Be2.range;
  var It = q((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getMinutes());
  var yn = It.range;
  var Ct = q((e2) => {
    e2.setUTCSeconds(0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getUTCMinutes());
  var wn = Ct.range;
  var St = q((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3 - e2.getMinutes() * 6e4);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getHours());
  var kn = St.range;
  var vt = q((e2) => {
    e2.setUTCMinutes(0, 0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getUTCHours());
  var Pn = vt.range;
  var bt2 = q((e2) => e2.setHours(0, 0, 0, 0), (e2, a) => e2.setDate(e2.getDate() + a), (e2, a) => (a - e2 - (a.getTimezoneOffset() - e2.getTimezoneOffset()) * 6e4) / 864e5, (e2) => e2.getDate() - 1);
  var Mn = bt2.range;
  var yt = q((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => e2.getUTCDate() - 1);
  var An = yt.range;
  var rs = q((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => Math.floor(e2 / 864e5));
  var Fn = rs.range;
  function Oe2(e2) {
    return q((a) => {
      a.setDate(a.getDate() - (a.getDay() + 7 - e2) % 7), a.setHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setDate(a.getDate() + t * 7);
    }, (a, t) => (t - a - (t.getTimezoneOffset() - a.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  var Pa = Oe2(0);
  var ls = Oe2(1);
  var ss = Oe2(2);
  var us = Oe2(3);
  var ns = Oe2(4);
  var ds = Oe2(5);
  var is = Oe2(6);
  var fs = Pa.range;
  var Dn = ls.range;
  var Tn = ss.range;
  var Bn = us.range;
  var On = ns.range;
  var Nn = ds.range;
  var qn = is.range;
  function Ne2(e2) {
    return q((a) => {
      a.setUTCDate(a.getUTCDate() - (a.getUTCDay() + 7 - e2) % 7), a.setUTCHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setUTCDate(a.getUTCDate() + t * 7);
    }, (a, t) => (t - a) / 6048e5);
  }
  var Ma = Ne2(0);
  var cs = Ne2(1);
  var ps = Ne2(2);
  var ms = Ne2(3);
  var hs = Ne2(4);
  var gs = Ne2(5);
  var Ls = Ne2(6);
  var xs = Ma.range;
  var Hn = cs.range;
  var Un = ps.range;
  var En = ms.range;
  var $n = hs.range;
  var Vn = gs.range;
  var zn = Ls.range;
  var wt = q((e2) => {
    e2.setDate(1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setMonth(e2.getMonth() + a);
  }, (e2, a) => a.getMonth() - e2.getMonth() + (a.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
  var Wn = wt.range;
  var kt = q((e2) => {
    e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCMonth(e2.getUTCMonth() + a);
  }, (e2, a) => a.getUTCMonth() - e2.getUTCMonth() + (a.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
  var Gn = kt.range;
  var Aa = q((e2) => {
    e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setFullYear(e2.getFullYear() + a);
  }, (e2, a) => a.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
  Aa.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : q((a) => {
    a.setFullYear(Math.floor(a.getFullYear() / e2) * e2), a.setMonth(0, 1), a.setHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setFullYear(a.getFullYear() + t * e2);
  });
  var Xn = Aa.range;
  var Fa = q((e2) => {
    e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCFullYear(e2.getUTCFullYear() + a);
  }, (e2, a) => a.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
  Fa.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : q((a) => {
    a.setUTCFullYear(Math.floor(a.getUTCFullYear() / e2) * e2), a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setUTCFullYear(a.getUTCFullYear() + t * e2);
  });
  var Zn = Fa.range;
  function Uo(e2, a) {
    a.domain && ("nice" in e2 || "quantiles" in e2 || "padding" in e2, e2.domain(a.domain));
  }
  function Eo(e2, a) {
    a.range && ("padding" in e2, e2.range(a.range));
  }
  function $o(e2, a) {
    "align" in e2 && "align" in a && typeof a.align < "u" && e2.align(a.align);
  }
  function Vo(e2, a) {
    "base" in e2 && "base" in a && typeof a.base < "u" && e2.base(a.base);
  }
  function zo(e2, a) {
    "clamp" in e2 && "clamp" in a && typeof a.clamp < "u" && e2.clamp(a.clamp);
  }
  function Wo(e2, a) {
    "constant" in e2 && "constant" in a && typeof a.constant < "u" && e2.constant(a.constant);
  }
  function Go(e2, a) {
    "exponent" in e2 && "exponent" in a && typeof a.exponent < "u" && e2.exponent(a.exponent);
  }
  var Is = { lab: mt2, hcl: Lo, "hcl-long": xo, hsl: ho, "hsl-long": go, cubehelix: Io, "cubehelix-long": Co, rgb: oa };
  function Xo(e2) {
    switch (e2) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return Is[e2];
      default:
    }
    var a = e2.type, t = e2.gamma, o = Is[a];
    return typeof t > "u" ? o : o.gamma(t);
  }
  function Zo(e2, a) {
    if ("interpolate" in a && "interpolate" in e2 && typeof a.interpolate < "u") {
      var t = Xo(a.interpolate);
      e2.interpolate(t);
    }
  }
  var _n = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
  var Kn = "%Y-%m-%d %H:%M";
  function _o(e2) {
    var a = e2.tickFormat(1, Kn)(_n);
    return a === "2020-02-02 03:04";
  }
  var Cs = { day: bt2, hour: St, minute: It, month: wt, second: Be2, week: Pa, year: Aa };
  var Ss = { day: yt, hour: vt, minute: Ct, month: kt, second: Be2, week: Ma, year: Fa };
  function Ko(e2, a) {
    if ("nice" in a && typeof a.nice < "u" && "nice" in e2) {
      var t = a.nice;
      if (typeof t == "boolean") t && e2.nice();
      else if (typeof t == "number") e2.nice(t);
      else {
        var o = e2, r = _o(o);
        if (typeof t == "string") o.nice(r ? Ss[t] : Cs[t]);
        else {
          var l2 = t.interval, s = t.step, u = (r ? Ss[l2] : Cs[l2]).every(s);
          u != null && o.nice(u);
        }
      }
    }
  }
  function jo(e2, a) {
    "padding" in e2 && "padding" in a && typeof a.padding < "u" && e2.padding(a.padding), "paddingInner" in e2 && "paddingInner" in a && typeof a.paddingInner < "u" && e2.paddingInner(a.paddingInner), "paddingOuter" in e2 && "paddingOuter" in a && typeof a.paddingOuter < "u" && e2.paddingOuter(a.paddingOuter);
  }
  function Yo(e2, a) {
    if (a.reverse) {
      var t = e2.range().slice().reverse();
      "padding" in e2, e2.range(t);
    }
  }
  function Qo(e2, a) {
    "round" in a && typeof a.round < "u" && (a.round && "interpolate" in a && typeof a.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", a) : "round" in e2 ? e2.round(a.round) : "interpolate" in e2 && a.round && e2.interpolate(wa));
  }
  function Jo(e2, a) {
    "unknown" in e2 && "unknown" in a && typeof a.unknown < "u" && e2.unknown(a.unknown);
  }
  function er(e2, a) {
    if ("zero" in a && a.zero === true) {
      var t = e2.domain(), o = t[0], r = t[1], l2 = r < o, s = l2 ? [r, o] : [o, r], u = s[0], n = s[1], d = [Math.min(0, u), Math.max(0, n)];
      e2.domain(l2 ? d.reverse() : d);
    }
  }
  var jn = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
  var Yn = { domain: Uo, nice: Ko, zero: er, interpolate: Zo, round: Qo, align: $o, base: Vo, clamp: zo, constant: Wo, exponent: Go, padding: jo, range: Eo, reverse: Yo, unknown: Jo };
  function Ra() {
    for (var e2 = arguments.length, a = new Array(e2), t = 0; t < e2; t++) a[t] = arguments[t];
    var o = new Set(a), r = jn.filter(function(l2) {
      return o.has(l2);
    });
    return function(s, u) {
      return typeof u < "u" && r.forEach(function(n) {
        Yn[n](s, u);
      }), s;
    };
  }
  var Qn = Ra("domain", "range", "reverse", "align", "padding", "round");
  function Pt(e2) {
    return Qn(Ia(), e2);
  }
  var Jn = Ra("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
  function qe2(e2) {
    return Jn(ka(), e2);
  }
  var tr = Math.PI;
  var or = 2 * tr;
  var He2 = 1e-6;
  var ed = or - He2;
  function rr() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function vs() {
    return new rr();
  }
  rr.prototype = vs.prototype = { constructor: rr, moveTo: function(e2, a) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a);
  }, closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }, lineTo: function(e2, a) {
    this._ += "L" + (this._x1 = +e2) + "," + (this._y1 = +a);
  }, quadraticCurveTo: function(e2, a, t, o) {
    this._ += "Q" + +e2 + "," + +a + "," + (this._x1 = +t) + "," + (this._y1 = +o);
  }, bezierCurveTo: function(e2, a, t, o, r, l2) {
    this._ += "C" + +e2 + "," + +a + "," + +t + "," + +o + "," + (this._x1 = +r) + "," + (this._y1 = +l2);
  }, arcTo: function(e2, a, t, o, r) {
    e2 = +e2, a = +a, t = +t, o = +o, r = +r;
    var l2 = this._x1, s = this._y1, u = t - e2, n = o - a, d = l2 - e2, i = s - a, f2 = d * d + i * i;
    if (r < 0) throw new Error("negative radius: " + r);
    if (this._x1 === null) this._ += "M" + (this._x1 = e2) + "," + (this._y1 = a);
    else if (f2 > He2) if (!(Math.abs(i * u - n * d) > He2) || !r) this._ += "L" + (this._x1 = e2) + "," + (this._y1 = a);
    else {
      var m = t - l2, c = o - s, g = u * u + n * n, L2 = m * m + c * c, h = Math.sqrt(g), b = Math.sqrt(f2), R2 = r * Math.tan((tr - Math.acos((g + f2 - L2) / (2 * h * b))) / 2), P2 = R2 / b, v = R2 / h;
      Math.abs(P2 - 1) > He2 && (this._ += "L" + (e2 + P2 * d) + "," + (a + P2 * i)), this._ += "A" + r + "," + r + ",0,0," + +(i * m > d * c) + "," + (this._x1 = e2 + v * u) + "," + (this._y1 = a + v * n);
    }
  }, arc: function(e2, a, t, o, r, l2) {
    e2 = +e2, a = +a, t = +t, l2 = !!l2;
    var s = t * Math.cos(o), u = t * Math.sin(o), n = e2 + s, d = a + u, i = 1 ^ l2, f2 = l2 ? o - r : r - o;
    if (t < 0) throw new Error("negative radius: " + t);
    this._x1 === null ? this._ += "M" + n + "," + d : (Math.abs(this._x1 - n) > He2 || Math.abs(this._y1 - d) > He2) && (this._ += "L" + n + "," + d), t && (f2 < 0 && (f2 = f2 % or + or), f2 > ed ? this._ += "A" + t + "," + t + ",0,1," + i + "," + (e2 - s) + "," + (a - u) + "A" + t + "," + t + ",0,1," + i + "," + (this._x1 = n) + "," + (this._y1 = d) : f2 > He2 && (this._ += "A" + t + "," + t + ",0," + +(f2 >= tr) + "," + i + "," + (this._x1 = e2 + t * Math.cos(r)) + "," + (this._y1 = a + t * Math.sin(r))));
  }, rect: function(e2, a, t, o) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a) + "h" + +t + "v" + +o + "h" + -t + "Z";
  }, toString: function() {
    return this._;
  } };
  function bs(e2) {
    this._context = e2;
  }
  bs.prototype = { areaStart: function() {
    this._line = 0;
  }, areaEnd: function() {
    this._line = NaN;
  }, lineStart: function() {
    this._point = 0;
  }, lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, point: function(e2, a) {
    switch (e2 = +e2, a = +a, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e2, a) : this._context.moveTo(e2, a);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e2, a);
        break;
    }
  } };
  var Ms = ol(ar());
  var As = ol(ar());
  var od = ["className", "innerRef"];
  function dr() {
    return dr = Object.assign ? Object.assign.bind() : function(e2) {
      for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e2[o] = t[o]);
      }
      return e2;
    }, dr.apply(this, arguments);
  }
  function rd(e2, a) {
    if (e2 == null) return {};
    var t = {}, o = Object.keys(e2), r, l2;
    for (l2 = 0; l2 < o.length; l2++) r = o[l2], !(a.indexOf(r) >= 0) && (t[r] = e2[r]);
    return t;
  }
  function Ta(e2) {
    var a = e2.className, t = e2.innerRef, o = rd(e2, od);
    return import_react9.default.createElement("rect", dr({ ref: t, className: (0, As.default)("visx-bar", a) }, o));
  }
  var sa = (0, import_react10.createContext)(null);
  function B2(e2) {
    let a = (0, import_react10.useContext)(sa);
    return a === null ? {} : Rs(a, { mark: e2 });
  }
  function ir() {
    return (0, import_react10.useContext)(sa) === null ? {} : { "data-live-mark-text": "" };
  }
  function Rs(e2, a = {}) {
    return a.mark ? { "data-live-id": e2, "data-live-mark": a.mark } : { "data-live-id": e2 };
  }
  var fr = (e2) => (0, import_jsx_runtime4.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: e2 });
  var Ds = fr((0, import_jsx_runtime4.jsx)("path", { d: "M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75" }));
  var Rt = fr((0, import_jsx_runtime4.jsx)("path", { d: "M14.9998 20L7.70696 12.7071C7.31643 12.3166 7.31643 11.6834 7.70695 11.2929L14.9998 4" }));
  var Dt = fr((0, import_jsx_runtime4.jsx)("path", { d: "M9 4L16.2929 11.2929C16.6834 11.6834 16.6834 12.3166 16.2929 12.7071L9 20" }));
  var Ts = { photo: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "9", cy: "9", r: "2" }), (0, import_jsx_runtime4.jsx)("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })] }), food: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 2v20" }), (0, import_jsx_runtime4.jsx)("path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" })] }), poultry: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }), (0, import_jsx_runtime4.jsx)("path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" })] }), meat: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" }), (0, import_jsx_runtime4.jsx)("path", { d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "12.5", cy: "8.5", r: "2.5" })] }), fish: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M18 12v.5" }), (0, import_jsx_runtime4.jsx)("path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" }), (0, import_jsx_runtime4.jsx)("path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }), (0, import_jsx_runtime4.jsx)("path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" })] }), salad: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M7 21h10" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" }), (0, import_jsx_runtime4.jsx)("path", { d: "m13 12 4-4" }), (0, import_jsx_runtime4.jsx)("path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" })] }), bowl: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 21h10" }), (0, import_jsx_runtime4.jsx)("path", { d: "M19.5 12 22 6" }), (0, import_jsx_runtime4.jsx)("path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }), (0, import_jsx_runtime4.jsx)("path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }), (0, import_jsx_runtime4.jsx)("path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" })] }), bread: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" }), (0, import_jsx_runtime4.jsx)("path", { d: "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" }), (0, import_jsx_runtime4.jsx)("path", { d: "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" }), (0, import_jsx_runtime4.jsx)("path", { d: "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" }), (0, import_jsx_runtime4.jsx)("path", { d: "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" })] }), pizza: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "m12 14-1 1" }), (0, import_jsx_runtime4.jsx)("path", { d: "m13.75 18.25-1.25 1.42" }), (0, import_jsx_runtime4.jsx)("path", { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }), (0, import_jsx_runtime4.jsx)("path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7" }), (0, import_jsx_runtime4.jsx)("path", { d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" })] }), sandwich: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }), (0, import_jsx_runtime4.jsx)("path", { d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }), (0, import_jsx_runtime4.jsx)("path", { d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }), (0, import_jsx_runtime4.jsx)("path", { d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }), (0, import_jsx_runtime4.jsx)("rect", { width: "20", height: "4", x: "2", y: "11", rx: "1" })] }), dessert: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M16 13H3" }), (0, import_jsx_runtime4.jsx)("path", { d: "M16 17H3" }), (0, import_jsx_runtime4.jsx)("path", { d: "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "9", cy: "7", r: "2" })] }), fruit: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0" }), (0, import_jsx_runtime4.jsx)("path", { d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" })] }), vegetable: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" }), (0, import_jsx_runtime4.jsx)("path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" })] }), drink: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M5 8h14" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }), (0, import_jsx_runtime4.jsx)("path", { d: "m12 8 1-6h2" })] }), coffee: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M10 2v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M14 2v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" }), (0, import_jsx_runtime4.jsx)("path", { d: "M6 2v2" })] }), wine: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M8 22h8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 10h10" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 15v7" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" })] }), cocktail: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M8 22h8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 11v11" }), (0, import_jsx_runtime4.jsx)("path", { d: "m19 3-7 8-7-8Z" })] }), place: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "12", cy: "10", r: "3" })] }), hotel: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 4v6" }), (0, import_jsx_runtime4.jsx)("path", { d: "M2 18h20" })] }), home: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })] }), building: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M10 12h4" }), (0, import_jsx_runtime4.jsx)("path", { d: "M10 8h4" }), (0, import_jsx_runtime4.jsx)("path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }), (0, import_jsx_runtime4.jsx)("path", { d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" })] }), flight: (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: (0, import_jsx_runtime4.jsx)("path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" }) }), car: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "7", cy: "17", r: "2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M9 17h6" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "17", cy: "17", r: "2" })] }), nature: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7 16v6" }), (0, import_jsx_runtime4.jsx)("path", { d: "M13 19v3" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" })] }), product: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M16 10a4 4 0 0 1-8 0" }), (0, import_jsx_runtime4.jsx)("path", { d: "M3.103 6.034h17.794" }), (0, import_jsx_runtime4.jsx)("path", { d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" })] }), clothing: (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: (0, import_jsx_runtime4.jsx)("path", { d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" }) }), device: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 18h.01" })] }), furniture: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }), (0, import_jsx_runtime4.jsx)("path", { d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M4 18v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M20 18v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M12 4v9" })] }), gift: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M12 7v14" }), (0, import_jsx_runtime4.jsx)("path", { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }), (0, import_jsx_runtime4.jsx)("path", { d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" }), (0, import_jsx_runtime4.jsx)("rect", { x: "3", y: "7", width: "18", height: "4", rx: "1" })] }), book: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M12 7v14" }), (0, import_jsx_runtime4.jsx)("path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" })] }), person: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("circle", { cx: "12", cy: "8", r: "5" }), (0, import_jsx_runtime4.jsx)("path", { d: "M20 21a8 8 0 0 0-16 0" })] }), pet: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("circle", { cx: "11", cy: "4", r: "2" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "18", cy: "8", r: "2" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "20", cy: "16", r: "2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" })] }), music: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M9 18V5l12-2v13" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "6", cy: "18", r: "3" }), (0, import_jsx_runtime4.jsx)("circle", { cx: "18", cy: "16", r: "3" })] }), event: (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime4.jsx)("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), (0, import_jsx_runtime4.jsx)("path", { d: "M13 5v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M13 17v2" }), (0, import_jsx_runtime4.jsx)("path", { d: "M13 11v2" })] }) };
  var ud = Object.keys(Ts);
  function Bs(e2 = "photo") {
    return (0, import_jsx_runtime4.jsx)("svg", { className: "file-placeholder-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: Ts[ud.includes(e2) ? e2 : "photo"] });
  }
  var Tt = (...e2) => e2.filter((a, t, o) => !!a && a.trim() !== "" && o.indexOf(a) === t).join(" ").trim();
  var Os = (e2) => e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var Ns = (e2) => e2.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, t, o) => o ? o.toUpperCase() : t.toLowerCase());
  var cr = (e2) => {
    let a = Ns(e2);
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  var qs = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var Hs = (e2) => {
    for (let a in e2) if (a.startsWith("aria-") || a === "role" || a === "title") return true;
    return false;
  };
  var Es = (0, import_react15.forwardRef)(({ color: e2 = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: o, className: r = "", children: l2, iconNode: s, ...u }, n) => (0, import_react15.createElement)("svg", { ref: n, ...qs, width: a, height: a, stroke: e2, strokeWidth: o ? Number(t) * 24 / Number(a) : t, className: Tt("lucide", r), ...!l2 && !Hs(u) && { "aria-hidden": "true" }, ...u }, [...s.map(([d, i]) => (0, import_react15.createElement)(d, i)), ...Array.isArray(l2) ? l2 : [l2]]));
  var Ie2 = (e2, a) => {
    let t = (0, import_react14.forwardRef)(({ className: o, ...r }, l2) => (0, import_react14.createElement)(Es, { ref: l2, iconNode: a, className: Tt(`lucide-${Os(cr(e2))}`, `lucide-${e2}`, o), ...r }));
    return t.displayName = cr(e2), t;
  };
  var fd = [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]];
  var Ue2 = Ie2("arrow-up-right", fd);
  var cd = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var Ee2 = Ie2("check", cd);
  var pd = [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]];
  var Ba = Ie2("copy", pd);
  var md = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
  var Ce2 = Ie2("loader-circle", md);
  function Y({ variant: e2 = "secondary", compact: a = false, pill: t = false, selected: o, unavailable: r = false, states: l2, state: s, className: u, children: n, ...d }) {
    let i = ["file-button", a && "is-compact", t && "is-pill", r && "is-unavailable", u].filter(Boolean).join(" "), f2 = l2 && s !== void 0 ? { states: l2, state: s } : null, m = f2?.states[f2.state];
    return (0, import_jsx_runtime5.jsx)("button", { type: "button", ...d, className: i, "data-variant": e2, "data-state": f2?.state, "aria-pressed": o, disabled: r || d.disabled || m?.variant === "disabled", children: f2 ? (0, import_jsx_runtime5.jsx)(vd, { ...f2 }) : n });
  }
  function $e2({ label: e2, className: a, ...t }) {
    let o = w();
    return (0, import_jsx_runtime5.jsx)(Y, { variant: "ghost", ...t, className: ["file-close", a].filter(Boolean).join(" "), "aria-label": e2 ?? o.close, children: Ds });
  }
  var Cd = 320;
  var Sd = typeof window > "u" ? import_react16.useEffect : import_react16.useLayoutEffect;
  function $s({ state: e2, className: a, hidden: t = false, faceRef: o }) {
    return (0, import_jsx_runtime5.jsxs)("span", { ref: o, className: a, "aria-hidden": t || void 0, children: [e2.icon, (0, import_jsx_runtime5.jsx)("span", { className: "file-button-label", children: e2.label }), e2.shortLabel && (0, import_jsx_runtime5.jsx)("span", { className: "file-button-label is-short", children: e2.shortLabel })] });
  }
  function vd({ states: e2, state: a }) {
    let t = (0, import_react16.useRef)(null), o = (0, import_react16.useRef)(null), r = (0, import_react16.useRef)(null), [l2, s] = (0, import_react16.useState)(null);
    return Sd(() => {
      let u = o.current.offsetWidth, n = r.current;
      if (r.current = { state: a, width: u }, !n || n.state === a) return;
      let d = t.current;
      d.style.width = `${n.width}px`, d.offsetWidth, d.style.width = `${u}px`, s(n.state);
      let i = setTimeout(() => {
        d.style.width = "", s(null);
      }, Cd);
      return () => clearTimeout(i);
    }, [a]), (0, import_jsx_runtime5.jsxs)("span", { ref: t, className: "file-button-slot", children: [l2 !== null && (0, import_jsx_runtime5.jsx)($s, { state: e2[l2], className: "file-button-face is-leaving", hidden: true }, `leaving-${l2}`), (0, import_jsx_runtime5.jsx)($s, { state: e2[a], className: l2 !== null ? "file-button-face is-entering" : "file-button-face", faceRef: o }, a)] });
  }
  function hr({ href: e2, variant: a = "secondary", compact: t = false, pill: o = false, children: r }) {
    let l2 = gr(e2), s = B2(), u = ["file-button", t && "is-compact", o && "is-pill"].filter(Boolean).join(" ");
    if (!l2) return (0, import_jsx_runtime5.jsx)("span", { ...s, className: u, "data-variant": a, children: r });
    let n = /^(?:https?:|mailto:|tel:|\/\/)/i.test(l2);
    return (0, import_jsx_runtime5.jsxs)("a", { ...s, className: u, "data-variant": a, href: l2, target: n ? "_blank" : void 0, rel: "noopener noreferrer", children: [(0, import_jsx_runtime5.jsx)("span", { children: r }), n && (0, import_jsx_runtime5.jsx)(Ue2, { size: 16, strokeWidth: 2.25, "aria-hidden": "true" })] });
  }
  function ua(e2, a) {
    (0, import_react17.useEffect)(() => {
      if (!a) return;
      let t = e2.current, o = t.ownerDocument.activeElement, r = !o.matches(":focus-visible"), l2 = [];
      for (let s = t.parentElement; s; s = s.parentElement) {
        let u = t.ownerDocument.defaultView.getComputedStyle(s);
        if (s !== t.ownerDocument.scrollingElement && !["auto", "scroll"].includes(u.overflowY)) continue;
        l2.push({ element: s, overflow: s.style.getPropertyValue("overflow-y"), priority: s.style.getPropertyPriority("overflow-y"), gutter: s.style.getPropertyValue("scrollbar-gutter"), gutterPriority: s.style.getPropertyPriority("scrollbar-gutter") }), (s === t.ownerDocument.documentElement ? t.ownerDocument.defaultView.innerWidth - s.clientWidth : s.offsetWidth - s.clientWidth - parseFloat(u.borderLeftWidth) - parseFloat(u.borderRightWidth)) > 0 && !u.scrollbarGutter.includes("stable") && s.style.setProperty("scrollbar-gutter", "stable", "important"), s.style.setProperty("overflow-y", "hidden", "important");
      }
      return t.showModal(), t.focus({ preventScroll: true }), () => {
        t.close();
        for (let { element: s, overflow: u, priority: n, gutter: d, gutterPriority: i } of l2) s.style.setProperty("overflow-y", u, n), s.style.setProperty("scrollbar-gutter", d, i);
        o.isConnected && (r && (o.setAttribute("data-quiet-focus", ""), o.addEventListener("blur", () => o.removeAttribute("data-quiet-focus"), { once: true })), o.focus({ preventScroll: true }));
      };
    }, [e2, a]);
  }
  var Oa = { scale: 1, x: 0, y: 0 };
  var _s = (e2) => Math.min(4, Math.max(1, e2));
  var Gs = (e2, a) => Math.min(a, Math.max(-a, e2));
  var Xs = (e2, a) => Math.hypot(e2.x - a.x, e2.y - a.y);
  var Zs = (e2, a) => ({ x: (e2.x + a.x) / 2, y: (e2.y + a.y) / 2 });
  function Ad(e2, a, t) {
    let o = _s(a.scale), r = o === 1 ? Oa : { scale: o, x: Gs(a.x, e2.offsetWidth * (o - 1) / 2), y: Gs(a.y, e2.offsetHeight * (o - 1) / 2) };
    return e2.style.transition = t ? "transform 200ms ease-out" : "none", e2.style.transform = `translate(${r.x}px, ${r.y}px) scale(${r.scale})`, r;
  }
  function xr(e2, a, t, o) {
    let r = e2.parentElement.getBoundingClientRect(), l2 = { x: r.left + e2.offsetLeft + e2.offsetWidth / 2, y: r.top + e2.offsetTop + e2.offsetHeight / 2 }, s = _s(a), u = s / o.scale;
    return { scale: s, x: o.x + (t.x - l2.x - o.x) * (1 - u), y: o.y + (t.y - l2.y - o.y) * (1 - u) };
  }
  function ze2({ photos: e2, start: a, title: t, detail: o, onClose: r }) {
    let l2 = w(), s = (0, import_react13.useRef)(null), u = (0, import_react13.useRef)(null), n = (0, import_react13.useRef)(Oa), d = (0, import_react13.useRef)(/* @__PURE__ */ new Map()), i = (0, import_react13.useRef)(null), f2 = (0, import_react13.useRef)(null), [m, c] = (0, import_react13.useState)(a), [g, L2] = (0, import_react13.useState)(false);
    ua(s, true);
    let h = (0, import_react13.useCallback)((x2, y) => {
      n.current = Ad(u.current, x2, y), L2(n.current.scale > 1);
    }, []);
    (0, import_react13.useEffect)(() => {
      let x2 = s.current, y = (E2) => {
        E2.preventDefault(), E2.ctrlKey ? h(xr(u.current, n.current.scale * Math.exp(-E2.deltaY * 0.01), { x: E2.clientX, y: E2.clientY }, n.current), false) : n.current.scale > 1 && h({ ...n.current, x: n.current.x - E2.deltaX, y: n.current.y - E2.deltaY }, false);
      };
      return x2.addEventListener("wheel", y, { passive: false }), () => x2.removeEventListener("wheel", y);
    }, [h]), (0, import_react13.useEffect)(() => {
      let x2 = s.current, y = x2.ownerDocument.activeElement;
      g && y !== x2 && x2.contains(y) && x2.focus({ preventScroll: true });
    }, [g]), (0, import_react13.useEffect)(() => {
      let x2 = s.current, y = x2.ownerDocument.activeElement;
      (!y || !x2.contains(y) || y.matches(":disabled")) && x2.focus({ preventScroll: true });
    }, [m]);
    let b = (x2) => {
      let y = Math.min(e2.length - 1, Math.max(0, m + x2));
      y !== m && (n.current = Oa, L2(false), c(y));
    }, R2 = (x2) => {
      let y = x2.target;
      if (y.closest("button")) return;
      let E2 = y.closest(".file-viewer-stage") ? f2.current : "outside";
      f2.current = null, !(E2 === null || E2 === "handled") && (n.current.scale > 1 ? h(Oa, true) : E2 === "outside" && r());
    }, P2 = (x2) => {
      if (x2.target.closest("button")) return;
      x2.preventDefault(), f2.current = null;
      try {
        x2.currentTarget.setPointerCapture(x2.pointerId);
      } catch {
      }
      d.current.set(x2.pointerId, { x: x2.clientX, y: x2.clientY });
      let [y, E2] = [...d.current.values()];
      d.current.size === 1 ? i.current = { type: n.current.scale > 1 ? "pan" : "swipe", start: y, origin: n.current, time: Date.now(), onPhoto: x2.target === u.current } : d.current.size === 2 && (i.current = { type: "pinch", distance: Xs(y, E2), middle: Zs(y, E2), origin: n.current });
    }, v = (x2) => {
      let y = i.current;
      if (!y || !d.current.has(x2.pointerId)) return;
      d.current.set(x2.pointerId, { x: x2.clientX, y: x2.clientY });
      let [E2, K] = [...d.current.values()];
      if (y.type === "pinch" && K) {
        let k2 = Zs(E2, K);
        h(xr(u.current, y.origin.scale * Xs(E2, K) / y.distance, k2, { scale: y.origin.scale, x: y.origin.x + k2.x - y.middle.x, y: y.origin.y + k2.y - y.middle.y }), false);
      } else y.type === "pan" && h({ scale: n.current.scale, x: y.origin.x + x2.clientX - y.start.x, y: y.origin.y + x2.clientY - y.start.y }, false);
    }, M2 = (x2) => {
      if (!d.current.delete(x2.pointerId)) return;
      let y = i.current, [E2] = [...d.current.values()];
      if (E2) {
        y?.type === "pinch" && (i.current = { type: "pan", start: E2, origin: n.current, time: Date.now(), onPhoto: true, afterPinch: true });
        return;
      }
      if (i.current = null, !y) return;
      if (y.type === "pinch" || y.afterPinch) {
        n.current.scale < 1.05 && h(Oa, true);
        return;
      }
      let K = { x: x2.clientX - y.start.x, y: x2.clientY - y.start.y }, k2 = Date.now();
      if (Math.hypot(K.x, K.y) < 10 && k2 - y.time < 300) {
        y.onPhoto && n.current.scale === 1 ? (f2.current = "handled", h(xr(u.current, 4, { x: x2.clientX, y: x2.clientY }, n.current), true)) : f2.current = y.onPhoto ? "photo" : "outside";
        return;
      }
      y.type === "swipe" && Math.abs(K.x) > 40 && Math.abs(K.x) > Math.abs(K.y) && b(K.x < 0 ? 1 : -1);
    }, I2 = e2[m];
    return (0, import_jsx_runtime6.jsxs)("dialog", { ref: s, className: "file-viewer", "data-zoomed": g || void 0, "aria-label": l2.photosOf(t), tabIndex: -1, onClick: R2, onCancel: (x2) => {
      x2.preventDefault(), x2.stopPropagation(), r();
    }, onKeyDown: (x2) => {
      x2.key === "Escape" ? (x2.preventDefault(), x2.stopPropagation(), r()) : (x2.key === "ArrowRight" || x2.key === "ArrowLeft") && (x2.preventDefault(), b(x2.key === "ArrowRight" ? 1 : -1));
    }, children: [(0, import_jsx_runtime6.jsx)("div", { className: "file-viewer-bar", children: (0, import_jsx_runtime6.jsx)($e2, { className: "file-viewer-button", onClick: r }) }), (0, import_jsx_runtime6.jsx)("div", { className: "file-viewer-stage", onPointerDown: P2, onPointerMove: v, onPointerUp: M2, onPointerCancel: M2, onDragStart: (x2) => x2.preventDefault(), children: (0, import_jsx_runtime6.jsx)("img", { ref: u, src: I2.src, alt: I2.alt, draggable: false }, I2.src) }), (0, import_jsx_runtime6.jsxs)("div", { className: "file-viewer-footer", children: [e2.length > 1 && (0, import_jsx_runtime6.jsxs)("div", { className: "file-viewer-steps", children: [(0, import_jsx_runtime6.jsx)(Y, { variant: "ghost", className: "file-viewer-button", "aria-label": l2.previousPhoto, disabled: m === 0, onClick: () => b(-1), children: Rt }), (0, import_jsx_runtime6.jsx)("span", { className: "file-viewer-count", "aria-live": "polite", children: l2.photoCount(m + 1, e2.length) }), (0, import_jsx_runtime6.jsx)(Y, { variant: "ghost", className: "file-viewer-button", "aria-label": l2.nextPhoto, disabled: m === e2.length - 1, onClick: () => b(1), children: Dt })] }), (0, import_jsx_runtime6.jsxs)("span", { className: "file-viewer-title", children: [t, o && ` \xB7 ${o}`] })] })] });
  }
  var Ir = ["pointerdown", "wheel", "touchstart"];
  function js({ atStart: e2, atEnd: a, onPrevious: t, onNext: o }) {
    let r = w();
    return (0, import_jsx_runtime7.jsxs)("div", { className: "file-strip-arrows", children: [(0, import_jsx_runtime7.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": r.previousPhoto, disabled: e2, onClick: t, children: Rt }), (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": r.nextPhoto, disabled: a, onClick: o, children: Dt })] });
  }
  function Dd(e2) {
    let [a, t] = (0, import_react18.useState)(null), o = (0, import_react18.useRef)(null);
    (0, import_react18.useEffect)(() => {
      let l2 = e2.current, s = l2.ownerDocument.defaultView, u = () => {
        o.current = null;
      }, n = () => {
        o.current !== null && Math.abs(l2.scrollLeft - o.current) < 2 && u();
        let d = l2.scrollWidth - l2.clientWidth;
        t(d < 2 ? null : { atStart: l2.scrollLeft < 2, atEnd: l2.scrollLeft > d - 2 });
      };
      n(), l2.addEventListener("scroll", n, { passive: true });
      for (let d of Ir) l2.addEventListener(d, u, { passive: true });
      return l2.addEventListener("load", n, true), s.addEventListener("resize", n), () => {
        l2.removeEventListener("scroll", n);
        for (let d of Ir) l2.removeEventListener(d, u);
        l2.removeEventListener("load", n, true), s.removeEventListener("resize", n);
      };
    }, [e2]);
    let r = (l2) => {
      let s = e2.current, u = [...s.children], n = u.map((m) => m.offsetLeft - u[0].offsetLeft), d = o.current ?? s.scrollLeft, i = l2 > 0 ? n.find((m) => m > d + 2) : [...n].reverse().find((m) => m < d - 2), f2 = Math.min(s.scrollWidth - s.clientWidth, Math.max(0, i ?? (l2 > 0 ? s.scrollWidth : 0)));
      o.current = f2, s.scrollTo({ left: f2, behavior: "smooth" });
    };
    return a && { ...a, onPrevious: () => r(-1), onNext: () => r(1) };
  }
  function Nt({ bleed: e2, className: a, children: t, ...o }) {
    let r = (0, import_react18.useRef)(null), l2 = Dd(r);
    return (0, import_jsx_runtime7.jsxs)("div", { className: "file-strip", "data-bleed": e2 || void 0, children: [(0, import_jsx_runtime7.jsx)("div", { ref: r, ...o, className: [a, e2 && "file-bleed"].filter(Boolean).join(" "), children: t }), l2 && (0, import_jsx_runtime7.jsx)(js, { ...l2 })] });
  }
  function ve2() {
    let e2 = (0, import_react19.useRef)(null), a = (0, import_react19.useRef)(false), t = (o) => {
      e2.current?.pointerId === o.pointerId && (e2.current = null, delete o.currentTarget.dataset.dragging, o.currentTarget.hasPointerCapture(o.pointerId) && o.currentTarget.releasePointerCapture(o.pointerId));
    };
    return { "data-drag-scroll": "", onPointerEnter: (o) => {
      o.currentTarget.toggleAttribute("data-can-drag", o.pointerType === "mouse" && o.currentTarget.scrollWidth > o.currentTarget.clientWidth);
    }, onPointerDown: (o) => {
      a.current = false, !(o.pointerType !== "mouse" || o.button !== 0 || o.currentTarget.scrollWidth <= o.currentTarget.clientWidth) && o.target.closest("[data-drag-scroll], dialog") === o.currentTarget && (e2.current = { pointerId: o.pointerId, startX: o.clientX, scrollLeft: o.currentTarget.scrollLeft, active: false });
    }, onPointerMove: (o) => {
      let r = e2.current;
      if (!r || r.pointerId !== o.pointerId) return;
      let l2 = o.clientX - r.startX;
      !r.active && Math.abs(l2) < 5 || (r.active || (r.active = true, a.current = true, o.currentTarget.dataset.dragging = "", o.currentTarget.setPointerCapture(o.pointerId)), o.preventDefault(), o.currentTarget.scrollLeft = r.scrollLeft - l2);
    }, onPointerUp: t, onPointerCancel: t, onLostPointerCapture: t, onPointerLeave: () => {
      e2.current?.active || (e2.current = null);
    }, onDragStart: (o) => o.preventDefault(), onClickCapture: (o) => {
      !a.current || o.detail === 0 || (a.current = false, o.preventDefault(), o.stopPropagation());
    } };
  }
  function X2(e2) {
    return { objectFit: e2.fit, objectPosition: e2.position, backgroundColor: e2.background };
  }
  function Cr({ icon: e2 }) {
    return (0, import_jsx_runtime8.jsx)("span", { className: "file-placeholder", "aria-hidden": "true", children: Bs(e2) });
  }
  var Ud = ["https:", "http:", "mailto:", "tel:"];
  function gr(e2) {
    if (/^[#./]/.test(e2)) return e2;
    try {
      return Ud.includes(new URL(e2).protocol) ? e2 : void 0;
    } catch {
      return;
    }
  }
  function Sr({ title: e2, fact: a, factKnown: t = false, intro: o }) {
    return (0, import_jsx_runtime8.jsxs)("header", { ...B2(), className: "file-header", children: [(0, import_jsx_runtime8.jsx)("h1", { className: "file-title", children: e2 }), a && (0, import_jsx_runtime8.jsx)("p", { className: t ? "file-fact is-known" : "file-fact", children: a }), o && (0, import_jsx_runtime8.jsx)("p", { className: "file-intro", children: o })] });
  }
  function vr({ label: e2, heading: a = false, children: t }) {
    let o = import_react12.default.useId();
    return (0, import_jsx_runtime8.jsxs)("section", { ...B2("loop"), className: "file-group", "aria-labelledby": o, children: [typeof a == "string" ? (0, import_jsx_runtime8.jsxs)("hgroup", { className: "file-group-head", children: [(0, import_jsx_runtime8.jsx)("p", { className: "file-group-label", children: e2 }), (0, import_jsx_runtime8.jsx)("h2", { id: o, className: "file-group-heading", children: a })] }) : (0, import_jsx_runtime8.jsx)("h2", { id: o, className: a ? "file-group-heading" : "file-group-label", children: e2 }), t] });
  }
  var Js = (0, import_react12.createContext)(false);
  function br({ numbered: e2 = false, children: a }) {
    let t = B2();
    return e2 ? (0, import_jsx_runtime8.jsx)(Js.Provider, { value: true, children: (0, import_jsx_runtime8.jsx)("ol", { ...t, className: "file-rows is-numbered", children: a }) }) : (0, import_jsx_runtime8.jsx)("div", { ...t, className: "file-rows", children: a });
  }
  function yr({ number: e2, thumbnail: a, name: t, detail: o, value: r, valueKnown: l2 = false, checked: s }) {
    let u = (0, import_react12.useContext)(Js);
    return (0, import_jsx_runtime8.jsxs)(u ? "li" : "div", { ...B2("stroke"), className: "file-row", style: u && e2 !== void 0 ? { counterSet: `file-row ${e2}` } : void 0, children: [e2 !== void 0 ? (0, import_jsx_runtime8.jsx)("span", { className: "file-row-slot is-number", children: e2 }) : u && (0, import_jsx_runtime8.jsx)("span", { className: "file-row-slot is-number is-counted" }), s !== void 0 && (0, import_jsx_runtime8.jsx)("span", { className: "file-row-check", role: "checkbox", "aria-checked": s, "aria-readonly": "true", "aria-label": t }), a && (0, import_jsx_runtime8.jsxs)("span", { className: "file-row-slot", children: [(0, import_jsx_runtime8.jsx)(Cr, { icon: a.icon }), a.src && (0, import_jsx_runtime8.jsx)("img", { src: a.src, alt: a.alt, style: X2(a), loading: "lazy" })] }), (0, import_jsx_runtime8.jsxs)("div", { className: "file-row-body", children: [(0, import_jsx_runtime8.jsxs)("div", { className: "file-row-main", children: [(0, import_jsx_runtime8.jsx)("span", { ...ir(), className: "file-strong", children: t }), o && (0, import_jsx_runtime8.jsx)("span", { className: "file-row-detail", children: o })] }), r && (0, import_jsx_runtime8.jsx)("bdi", { className: l2 ? "file-row-value file-known" : "file-row-value", children: r })] })] });
  }
  function We2({ items: e2 }) {
    return (0, import_jsx_runtime8.jsx)("dl", { ...B2(), className: "file-facts", children: e2.map((a) => (0, import_jsx_runtime8.jsxs)("div", { children: [(0, import_jsx_runtime8.jsx)("dt", { children: a.label }), (0, import_jsx_runtime8.jsx)("dd", { children: (0, import_jsx_runtime8.jsx)("bdi", { children: a.value }) })] }, a.label)) });
  }
  function wr({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("div", { ...B2(), className: "file-text", children: e2 });
  }
  function kr({ children: e2, sub: a }) {
    return (0, import_jsx_runtime8.jsxs)("div", { ...B2("stroke"), className: "file-heading", children: [(0, import_jsx_runtime8.jsx)("span", { ...ir(), className: "file-strong", children: e2 }), a && (0, import_jsx_runtime8.jsx)("span", { className: "file-secondary", children: a })] });
  }
  function Pr({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("p", { ...B2("stroke"), className: "file-p", children: e2 });
  }
  function Mr({ items: e2 }) {
    return (0, import_jsx_runtime8.jsx)("ul", { ...B2(), className: "file-bullets", children: e2.map((a, t) => (0, import_jsx_runtime8.jsx)("li", { children: a }, t)) });
  }
  function Ar({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("p", { ...B2("stroke"), className: "file-key file-bar", children: e2 });
  }
  function Fr({ src: e2, alt: a, caption: t, fit: o = "contain", width: r, height: l2 }) {
    let s = o === "contain" && r && l2 ? { width: `min(${r}px, 100%, var(--file-photo-max-height) * ${r / l2})` } : void 0;
    return (0, import_jsx_runtime8.jsxs)("figure", { ...B2("loop"), className: "file-figure", "data-fit": o, children: [(0, import_jsx_runtime8.jsx)("img", { src: e2, alt: a, width: r, height: l2, style: s, loading: "lazy" }), (0, import_jsx_runtime8.jsx)("figcaption", { children: t })] });
  }
  function Rr({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("p", { ...B2("stroke"), className: "file-caption", children: e2 });
  }
  function Dr() {
    return (0, import_jsx_runtime8.jsx)("hr", { ...B2(), className: "file-rule" });
  }
  function Tr({ title: e2, children: a, tone: t = "note" }) {
    return (0, import_jsx_runtime8.jsxs)("aside", { ...B2(), className: "file-callout file-bar", "data-tone": t, children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-strong", children: e2 }), (0, import_jsx_runtime8.jsx)("span", { children: a })] });
  }
  function Br({ items: e2 }) {
    return (0, import_jsx_runtime8.jsx)("ol", { ...B2(), className: "file-steps", children: e2.map((a, t) => (0, import_jsx_runtime8.jsxs)("li", { children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-step-n", children: t + 1 }), (0, import_jsx_runtime8.jsx)("span", { children: a })] }, t)) });
  }
  function Or({ caption: e2, options: a, rows: t }) {
    let o = w(), r = B2("loop"), l2 = (s, u) => ({ order: s * (t.length + 1) + u });
    return (0, import_jsx_runtime8.jsx)("div", { ...r, className: "file-table-scroll", role: "region", "aria-label": e2, tabIndex: 0, children: (0, import_jsx_runtime8.jsxs)("table", { className: "file-table is-options is-stacking", style: { "--file-table-columns": a.length + 1 }, children: [(0, import_jsx_runtime8.jsx)("caption", { className: "file-visually-hidden", children: e2 }), (0, import_jsx_runtime8.jsx)("thead", { children: (0, import_jsx_runtime8.jsxs)("tr", { children: [(0, import_jsx_runtime8.jsx)("th", { scope: "col", className: "file-table-corner", children: (0, import_jsx_runtime8.jsx)("span", { className: "file-visually-hidden", children: o.attribute }) }), a.map((s, u) => (0, import_jsx_runtime8.jsxs)("th", { scope: "col", style: l2(u, 0), children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-strong", children: s.name }), (0, import_jsx_runtime8.jsx)("span", { className: "file-secondary", children: s.number })] }, s.number))] }) }), (0, import_jsx_runtime8.jsx)("tbody", { children: t.map((s, u) => (0, import_jsx_runtime8.jsxs)("tr", { children: [(0, import_jsx_runtime8.jsx)("th", { scope: "row", children: s.label }), s.values.map((n, d) => (0, import_jsx_runtime8.jsxs)("td", { className: s.best === d ? "is-best" : void 0, style: l2(d, u + 1), children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-cell-label", children: s.label }), (0, import_jsx_runtime8.jsx)("bdi", { children: n })] }, d))] }, s.label)) })] }) });
  }
  function qa({ items: e2, label: a, title: t = a, layout: o = "grid", bleed: r = o === "strip" && e2.length > 1 }) {
    let l2 = w(), s = ve2(), u = B2(), [n, d] = (0, import_react12.useState)(null), i = e2.map((m, c) => (0, import_jsx_runtime8.jsx)("button", { type: "button", className: "file-photo-zoom", "aria-label": l2.fullScreen(m.alt), onClick: () => d(c), children: (0, import_jsx_runtime8.jsx)("img", { src: m.src, alt: m.alt, style: X2(m), loading: "lazy" }) }, m.src)), f2 = e2.length === 1 ? " is-single" : "";
    return (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [o === "strip" && e2.length > 1 ? (0, import_jsx_runtime8.jsx)(Nt, { ...s, ...u, bleed: r, className: "file-photos", "data-layout": "strip", role: "region", "aria-label": a, tabIndex: 0, children: i }) : (0, import_jsx_runtime8.jsx)("div", { ...o === "strip" ? s : {}, ...u, className: `file-photos${f2}${o === "strip" && r ? " file-bleed" : ""}`, "data-layout": o, role: "region", "aria-label": a, children: i }), n !== null && (0, import_jsx_runtime8.jsx)(ze2, { photos: e2, start: n, title: t, onClose: () => d(null) })] });
  }
  function Nr({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("footer", { ...B2(), className: "file-closing", children: e2 });
  }
  var zd = (0, import_jsx_runtime9.jsx)("svg", { "aria-hidden": "true", width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: (0, import_jsx_runtime9.jsx)("path", { d: "M11.5497 2.03292C11.7307 1.65569 12.2693 1.65569 12.4503 2.03292L15.0189 7.38732C15.0918 7.53919 15.2367 7.64404 15.4041 7.66599L21.3154 8.44106C21.732 8.49569 21.8986 9.0078 21.5935 9.29588L17.2708 13.3775C17.1479 13.4935 17.0924 13.6637 17.1232 13.8297L18.2087 19.6603C18.2853 20.0717 17.8494 20.388 17.4803 20.1888L12.2376 17.3585C12.0894 17.2785 11.9106 17.2785 11.7624 17.3585L6.51969 20.1888C6.15063 20.388 5.71473 20.0717 5.79132 19.6603L6.87675 13.8297C6.90764 13.6637 6.8521 13.4935 6.7292 13.3775L2.40651 9.29588C2.10142 9.0078 2.26803 8.49569 2.68463 8.44106L8.5959 7.66599C8.7633 7.64404 8.90823 7.53919 8.98108 7.38732L11.5497 2.03292Z" }) });
  var au = (e2) => String(e2);
  var Ha = "var(--ds-teal)";
  var Ht = ["var(--ds-ink-2)", "var(--ds-ink-3)", "var(--ds-ink-4)"];
  var Ua = (e2) => Ht[e2 % Ht.length];
  function be2({ label: e2, summary: a }) {
    return (0, import_jsx_runtime10.jsxs)("div", { className: "file-chart-head", children: [(0, import_jsx_runtime10.jsx)("span", { children: e2 }), a && (0, import_jsx_runtime10.jsx)("span", { children: a })] });
  }
  function Hr(e2, a) {
    if (e2.some((l2) => !Number.isFinite(l2))) throw new RangeError("Chart values must be finite; use null for missing line observations.");
    let t = Math.min(...e2), o = Math.max(...e2);
    if (a) {
      if (!a.every(Number.isFinite) || a[0] >= a[1] || a[0] > t || a[1] < o) throw new RangeError("Chart bounds must be finite, ascending and contain every value.");
      return a;
    }
    let r = t === o ? Math.max(Math.abs(t) * 0.15, 1) : (o - t) * 0.15;
    return [t - r, o + r];
  }
  var eu = (e2) => [...e2].reduce((a, t) => a + (t >= "\u2E80" ? 2 : 1), 0);
  function Kd(e2) {
    let a = Math.floor(30 / e2.length);
    return e2.length <= 5 && e2.every((t) => eu(t.label) <= a * 2 && t.label.split(/\s+/).every((o) => eu(o) <= a));
  }
  function Ur({ label: e2, data: a, format: t = au, max: o, orientation: r = Kd(a) ? "columns" : "bars" }) {
    let l2 = w(), s = B2();
    if (a.length === 0) return (0, import_jsx_runtime10.jsxs)("div", { ...s, className: "file-chart", children: [(0, import_jsx_runtime10.jsx)(be2, { label: e2 }), (0, import_jsx_runtime10.jsx)("p", { children: l2.noData })] });
    let u = [0, ...a.map((L2) => L2.value)], n = Math.min(...u), d = Math.max(...u), i = n === d ? 1 : (d - n) * 0.15, f2 = [n < 0 ? n - i : 0, d > 0 ? d + i : n < 0 ? 0 : 1], m = Hr(u, o === void 0 ? f2 : [n, o]), c = qe2({ domain: m, range: r === "bars" ? [0, 250] : [120, 0] }), g = Pt({ domain: a.map((L2, h) => h), range: [0, 350], paddingInner: 0.35, paddingOuter: 0.35 / 2 });
    return (0, import_jsx_runtime10.jsxs)("div", { ...s, className: "file-chart file-scaled-chart", children: [(0, import_jsx_runtime10.jsx)(be2, { label: e2 }), r === "bars" ? (0, import_jsx_runtime10.jsx)("div", { className: "file-signed-bars", children: a.map((L2, h) => (0, import_jsx_runtime10.jsxs)("div", { children: [(0, import_jsx_runtime10.jsx)("span", { children: L2.label }), (0, import_jsx_runtime10.jsxs)("svg", { viewBox: "0 -2 250 24", "aria-hidden": "true", children: [(0, import_jsx_runtime10.jsx)("line", { x1: c(0), x2: c(0), y1: -2, y2: 22, stroke: "var(--ds-ink-2)" }), (0, import_jsx_runtime10.jsx)(Ta, { x: Math.min(c(0), c(L2.value)), y: 2, width: Math.abs(c(L2.value) - c(0)), height: 16, fill: L2.highlight ? Ha : Ua(h), stroke: "var(--ds-ink-2)" })] }), (0, import_jsx_runtime10.jsx)("strong", { children: (0, import_jsx_runtime10.jsx)("bdi", { children: L2.valueLabel ?? t(L2.value) }) })] }, h)) }) : (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsxs)("svg", { viewBox: "0 -20 350 160", role: "img", "aria-label": `${e2}: ${a.map((L2) => `${L2.label} ${L2.valueLabel ?? t(L2.value)}`).join(", ")}`, children: [c.ticks(3).map((L2) => (0, import_jsx_runtime10.jsx)("line", { x1: 0, x2: 350, y1: c(L2), y2: c(L2), stroke: L2 === 0 ? "var(--ds-ink-2)" : "var(--ds-hairline)" }, L2)), a.map((L2, h) => (0, import_jsx_runtime10.jsxs)("g", { children: [(0, import_jsx_runtime10.jsx)(Ta, { x: g(h), y: Math.min(c(0), c(L2.value)), width: g.bandwidth(), height: Math.abs(c(L2.value) - c(0)), fill: L2.highlight ? Ha : Ua(h), stroke: "var(--ds-ink-2)" }), (0, import_jsx_runtime10.jsx)("text", { x: g(h) + g.bandwidth() / 2, y: c(L2.value) + (L2.value < 0 ? 16 : -6), textAnchor: "middle", fill: "var(--ds-ink-2)", fontSize: 13, children: L2.valueLabel ?? t(L2.value) })] }, h))] }), (0, import_jsx_runtime10.jsx)("div", { className: "file-bar-labels", children: a.map((L2, h) => (0, import_jsx_runtime10.jsx)("span", { children: L2.label }, h)) })] })] });
  }
  function Er({ children: e2 }) {
    return (0, import_jsx_runtime11.jsx)("div", { ...B2(), className: "file-photo-cards", children: e2 });
  }
  function $r({ name: e2, detail: a, icon: t, photo: o, checked: r = false, open: l2, onOpenChange: s, children: u }) {
    let [n, d] = (0, import_react20.useState)(false), i = import_react20.Children.count(u) > 0, f2 = (c) => {
      d(c), s?.(c);
    }, m = (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [(0, import_jsx_runtime11.jsxs)("span", { className: "file-photo-card-photo", children: [(0, import_jsx_runtime11.jsx)(Cr, { icon: t }), o?.src && (0, import_jsx_runtime11.jsx)("img", { src: o.src, alt: o.alt, style: X2(o), loading: "lazy" }), r && (0, import_jsx_runtime11.jsx)("span", { className: "file-row-check file-photo-card-check", role: "checkbox", "aria-checked": true, "aria-readonly": "true", "aria-label": e2 })] }), (0, import_jsx_runtime11.jsxs)("span", { className: "file-photo-card-text", children: [(0, import_jsx_runtime11.jsx)("span", { className: "file-strong", children: e2 }), a && (0, import_jsx_runtime11.jsx)("span", { className: "file-row-detail", children: a })] })] });
    return (0, import_jsx_runtime11.jsxs)("div", { ...B2("loop"), className: "file-photo-card", children: [i ? (0, import_jsx_runtime11.jsx)("button", { type: "button", className: "file-photo-card-open", "aria-haspopup": "dialog", onClick: () => f2(true), children: m }) : m, i && (l2 ?? n) && (0, import_jsx_runtime11.jsx)(li, { name: e2, detail: a, photo: o, onClose: () => f2(false), children: u })] });
  }
  function li({ name: e2, detail: a, photo: t, onClose: o, children: r }) {
    let l2 = (0, import_react20.useRef)(null);
    return ua(l2, true), (0, import_jsx_runtime11.jsxs)("dialog", { ref: l2, className: "file-drawer", "aria-label": e2, tabIndex: -1, onCancel: (s) => {
      s.preventDefault(), o();
    }, onClick: (s) => {
      if (s.target !== s.currentTarget) return;
      let u = s.currentTarget.getBoundingClientRect();
      (s.clientX < u.left || s.clientX > u.right || s.clientY < u.top || s.clientY > u.bottom) && o();
    }, children: [(0, import_jsx_runtime11.jsx)("div", { className: "file-drawer-header", children: (0, import_jsx_runtime11.jsx)($e2, { onClick: o }) }), t?.src && (0, import_jsx_runtime11.jsx)("img", { className: "file-drawer-photo", src: t.src, alt: t.alt, style: X2(t) }), (0, import_jsx_runtime11.jsxs)("hgroup", { className: "file-drawer-title", children: [(0, import_jsx_runtime11.jsx)("h2", { className: "file-group-heading", children: e2 }), a && (0, import_jsx_runtime11.jsx)("p", { className: "file-secondary", children: a })] }), (0, import_jsx_runtime11.jsx)("div", { className: "file-drawer-body", children: r })] });
  }
  var ui = "M0.42 3.09L1.61 2.89L0.48 2.69L1.62 2.43L0.99 2.17L1.97 2.13L1.43 1.9L2.46 1.86L2.15 1.73L2.75 1.64L2.37 1.39L3.35 0.96L2.98 0.79L8.51 0.11L26.87 0.15L26.4 0.56L27.63 0.18L31.8 0.62L38.9 0.13L45.68 0.81L47.76 0.4L55.48 0.77L56.29 1.18L55.58 1.23L58.14 1.65L59.81 1.57L60.9 0.86L60.75 1.02L60.99 1.16L60.77 1.29L60.96 1.36L60.12 1.53L61 1.98L60.66 2.11L60.78 2.4L60.62 2.54L60.91 2.62L60.59 2.74L60.77 2.86L60.64 3.13L60.21 3.27L60.83 4.03L60.31 4.49L60.77 4.95L60.3 5.23L60.56 5.37L60.37 5.65L60.88 5.7L60.33 5.9L60.73 6.04L60.24 6.22L60.41 6.56L53.72 6.69L51.56 7.12L53.3 7.17L53.68 7.37L52.95 7.49L43.88 7.49L43.34 7.17L44.31 7.17L44.04 6.91L36.19 6.62L21.85 7.21L21.55 6.53L20.27 6.65L21.36 6.91L19.71 7.23L16.12 7.16L16.75 7.45L16.16 7.64L16.78 7.65L15.91 7.79L6.54 7.78L2.19 7.22L2.59 6.92L1.52 6.51L1.67 6.34L1.46 6.11L1.89 6.11L1.25 5.8L1.75 5.46L1.07 5.17L1.42 5.03L1.18 4.66L1.6 4.6L0.78 4.06L1.65 3.81L0.57 3.8L1.45 3.75L1.26 3.62L1.67 3.27L1.31 3.25L1.96 3.02L0.68 3.51ZM4.51 7.91L5.27 7.67ZM11.88 7.73L12.5 7.71ZM18.52 7.52L19.25 7.58ZM48.59 7.44L49.2 7.51ZM56.71 7.35L57.69 7.39ZM46.44 7.35L47.22 7.29ZM42.12 7.21L42.92 7.23ZM40.43 7.11L41.23 7.11ZM44.47 7.25L44.94 7.28ZM19.76 7.21L20.66 7.19ZM54.52 7.24L55.14 7.2ZM46.78 7.12L49.14 7.11ZM25.38 7L25.99 7.05ZM40.06 7.06L40.64 6.92ZM17.92 6.98L18.45 6.98ZM31.56 6.87L32.37 6.87ZM51.56 6.74L53.26 6.67ZM59.1 6.78L59.62 6.72ZM21.76 6.42L22.95 6.75ZM16.15 6.52L16.67 6.42ZM17.54 6.49L18.05 6.51ZM0.81 3.97L1.43 3.86ZM58.65 2.16L59.99 2.16ZM0 2.15L0.9 2.03ZM57.21 1.79L57.78 2.15L58.45 1.72ZM0.39 1.96L0.96 1.94ZM59.2 1.89L60.35 1.77ZM55.93 1.38L57.07 1.33ZM59.1 1.38L59.57 1.39ZM57.17 1.29L58.35 1.28ZM59.18 1.23L59.86 1.17ZM55.19 1.1L55.75 1.02ZM53.92 1.05L54.38 1.08ZM2.03 0.84L2.99 0.9ZM59.36 1.02L59.87 1.09ZM56.26 0.83L56.73 0.76ZM46.89 0.54L47.4 0.59ZM48.54 0.56L51.82 0.61ZM28.76 0.57L29.23 0.53ZM30.84 0.35L32.27 0.45ZM32.23 0.33L33.89 0.31ZM39.33 0.17L40.33 0.19Z";
  var ni = "0 0 61 8";
  var ou = "http://www.w3.org/2000/svg";
  var ru = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  function di(e2) {
    let a = [];
    for (let t of e2.filter((o) => o.width > 0 && o.height > 0).sort((o, r) => o.top - r.top || o.left - r.left)) {
      let o = t.top + t.height / 2, r = a.find((u) => o > u.top && o < u.top + u.height);
      if (!r) {
        a.push({ ...t });
        continue;
      }
      let l2 = Math.max(r.left + r.width, t.left + t.width), s = Math.max(r.top + r.height, t.top + t.height);
      r.left = Math.min(r.left, t.left), r.top = Math.min(r.top, t.top), r.width = l2 - r.left, r.height = s - r.top, r.size = Math.max(r.size, t.size);
    }
    return a;
  }
  function ii(e2, a, t) {
    if (t.length === 0) return "loop";
    if (e2 === "stroke" || e2 === "loop") return e2;
    let o = t[t.length - 1];
    return t.length <= 3 && a.height <= o.top + o.height - t[0].top + 48 ? "stroke" : "loop";
  }
  function fi(e2) {
    let a = Math.round(Math.max(160, Math.min(550, 1400 / e2)));
    return Array.from({ length: e2 }, (t, o) => ({ ms: a, wait: Math.round(o * a * 0.9) }));
  }
  function ci(e2, a, t, o, r, l2) {
    let s = t - e2 - 2 * r, u = o - a - 2 * r, n = Math.PI / 2 * r, d = (f2, m, c, g) => {
      let L2 = c + g / n * (Math.PI / 2);
      return [f2 + r * Math.cos(L2), m + r * Math.sin(L2), Math.cos(L2), Math.sin(L2)];
    }, i = l2;
    return i < s ? [e2 + r + i, a, 0, -1] : (i -= s, i < n ? d(t - r, a + r, -Math.PI / 2, i) : (i -= n, i < u ? [t, a + r + i, 1, 0] : (i -= u, i < n ? d(t - r, o - r, 0, i) : (i -= n, i < s ? [t - r - i, o, 0, 1] : (i -= s, i < n ? d(e2 + r, o - r, Math.PI / 2, i) : (i -= n, i < u ? [e2, o - r - i, -1, 0] : d(e2 + r, a + r, Math.PI, i - u)))))));
  }
  var _ = (e2) => Math.round(e2 * 10) / 10;
  function pi(e2, a) {
    let o = 7 + e2 + 3, r = 7 + a + 3, l2 = Math.min(18, (o - 4) / 4, (r - 4) / 4), s = o - 4 - 2 * l2, u = 2 * (s + r - 4 - 2 * l2) + 2 * Math.PI * l2, n = s * 0.22, d = s * 0.42, i = Math.round(Math.max(24, Math.min(160, (u + d) / 8))), f2 = [];
    for (let c = 0; c <= i; c++) {
      let g = (u + d) * c / i, [L2, h, b, R2] = ci(4, 4, o, r, l2, (n + g) % u), v = (g < u ? -1 + 4.7 * (g / u) : 3.7 + 3.2 * ((g - u) / d)) + 0.7 * Math.sin(g / 23 + e2) + 0.4 * Math.sin(g / 9 + a);
      f2.push([L2 + b * v, h + R2 * v]);
    }
    let m = `M${_(f2[0][0])} ${_(f2[0][1])}`;
    for (let c = 0; c < f2.length - 1; c++) {
      let g = f2[Math.max(0, c - 1)], L2 = f2[c], h = f2[c + 1], b = f2[Math.min(f2.length - 1, c + 2)];
      m += `C${_(L2[0] + (h[0] - g[0]) / 6)} ${_(L2[1] + (h[1] - g[1]) / 6)} ${_(h[0] - (b[0] - L2[0]) / 6)} ${_(h[1] - (b[1] - L2[1]) / 6)} ${_(h[0])} ${_(h[1])}`;
    }
    return m;
  }
  function mi(e2, a) {
    return Math.round(Math.max(600, Math.min(1100, 400 + (e2 + a) * 0.96)));
  }
  function hi(e2) {
    for (let a of e2.querySelectorAll("[data-live-mark-text]")) if (a.closest("[data-live-id]") === e2) return a;
    return e2;
  }
  function gi(e2) {
    let a = [], t = e2.closest("dialog"), o = document.createTreeWalker(e2, NodeFilter.SHOW_TEXT), r = document.createRange();
    for (let l2 = o.nextNode(); l2; l2 = o.nextNode()) {
      let s = l2.parentElement;
      if (s.closest(".file-visually-hidden") || s.closest("dialog") !== t) continue;
      let u = parseFloat(getComputedStyle(s).fontSize);
      r.selectNodeContents(l2);
      for (let n of r.getClientRects()) a.push({ left: n.left, top: n.top, width: n.width, height: n.height, size: u });
    }
    return a;
  }
  function lu(e2) {
    for (let t of e2.children) if (t.hasAttribute("data-live-marks")) return t;
    let a = document.createElement("div");
    return a.setAttribute("data-live-marks", ""), a.setAttribute("aria-hidden", "true"), e2.appendChild(a);
  }
  function su(e2, a, t, o, r, l2, s) {
    let u = document.createElementNS(ou, "svg");
    u.setAttribute("data-live-drawn", e2), u.setAttribute("data-live-for", a), u.setAttribute("viewBox", o), u.setAttribute("preserveAspectRatio", "none"), u.style.cssText = `left:${_(t.left)}px;top:${_(t.top)}px;width:${_(t.width)}px;height:${_(t.height)}px;--file-live-mark-ms:${l2}ms;--file-live-mark-wait:${s}ms`;
    let n = document.createElementNS(ou, "path");
    return n.setAttribute("d", r), e2 === "loop" && n.setAttribute("pathLength", "1"), u.appendChild(n), u;
  }
  function Li(e2, a) {
    let t = () => {
      r.disconnect(), clearTimeout(l2);
    }, o = () => {
      t(), a();
    }, r = new IntersectionObserver((s) => s.some((u) => u.intersectionRatio >= 0.5) && o(), { threshold: 0.5 }), l2 = setTimeout(o, 700);
    return r.observe(e2), t;
  }
  var Ut = class {
    drawn = /* @__PURE__ */ new Map();
    point(a, t, o) {
      let r = this.drawn.get(a);
      if (r?.id === t && r.element === o) {
        r.nodes.length > 0 && this.stay(a, r);
        return;
      }
      r && this.release(r, 200);
      let l2 = { id: t, element: o, nodes: [], drawMs: 0, stop: () => {
      } };
      this.drawn.set(a, l2), l2.stop = Li(o, () => this.draw(a, l2));
    }
    check() {
      for (let [a, t] of this.drawn) {
        if (!t.place) continue;
        let o = t.element.isConnected ? this.place(t.element) : void 0;
        o && Math.abs(o.left - t.place.left) < 1 && Math.abs(o.top - t.place.top) < 1 && Math.abs(o.width - t.place.width) < 1 && Math.abs(o.height - t.place.height) < 1 || (this.drawn.delete(a), this.release(t, 200));
      }
    }
    area(a) {
      return a.closest("dialog") ?? document.body;
    }
    within(a, t) {
      let o = lu(this.area(a)).getBoundingClientRect();
      return { left: t.left - o.left, top: t.top - o.top, width: t.width, height: t.height };
    }
    place(a) {
      return this.within(a, a.getBoundingClientRect());
    }
    draw(a, t) {
      if (!t.element.isConnected) {
        this.drawn.delete(a);
        return;
      }
      let o = lu(this.area(t.element)), r = this.place(t.element), l2 = di(gi(hi(t.element)));
      if (ii(t.element.getAttribute("data-live-mark"), r, l2) === "stroke") {
        let s = fi(l2.length);
        if (l2.forEach((u, n) => {
          let d = this.within(t.element, u), i = { left: d.left - 0.18 * u.size, top: d.top + d.height - (0.13 + 0.42) * u.size, width: d.width + 2 * 0.18 * u.size, height: 0.42 * u.size };
          t.nodes.push(su("stroke", t.id, i, ni, ui, s[n].ms, s[n].wait));
        }), t.drawMs = s[s.length - 1].wait + s[s.length - 1].ms, getComputedStyle(t.element).direction === "rtl") for (let u of t.nodes) u.setAttribute("data-rtl", "");
      } else {
        let u = Math.max(r.left, 10), n = Math.min(r.left + r.width, this.area(t.element).clientWidth - 10) - u, d = { left: u - 7, top: r.top - 7, width: n + 14, height: r.height + 14 };
        t.drawMs = mi(n, r.height), t.nodes.push(su("loop", t.id, d, `0 0 ${_(d.width)} ${_(d.height)}`, pi(n, r.height), t.drawMs, 0));
      }
      ru() && (t.drawMs = 0), t.place = r;
      for (let s of t.nodes) o.appendChild(s);
      o.getBoundingClientRect();
      for (let s of t.nodes) s.setAttribute("data-phase", "shown");
      this.stay(a, t);
    }
    stay(a, t) {
      clearTimeout(t.hold), t.hold = setTimeout(() => {
        this.drawn.get(a) === t && this.drawn.delete(a), this.release(t, 400);
      }, t.drawMs + 1100);
    }
    release(a, t) {
      a.stop(), clearTimeout(a.hold);
      for (let o of a.nodes) {
        if (ru()) {
          o.remove();
          continue;
        }
        o.style.setProperty("--file-live-mark-fade", `${t}ms`), o.setAttribute("data-phase", "leaving"), setTimeout(() => o.remove(), t);
      }
    }
  };
  var Ii = 30;
  var Ci = 360;
  var Si = 200;
  var vi = 2e3;
  var bi = 280;
  var yi = "cubic-bezier(0.2, 0.7, 0.2, 1)";
  var Vr = () => [...document.querySelectorAll("[data-live-id]")];
  var uu = () => [...document.querySelectorAll("[data-live-reveal]")];
  var du = [];
  var wi = /* @__PURE__ */ new Set(["PhotoCard"]);
  var nu = 16;
  function ki(e2, a) {
    let t = e2.getBoundingClientRect(), o = e2.querySelector(".file-drawer-header")?.getBoundingClientRect().bottom ?? t.top, r = t.bottom - (parseFloat(getComputedStyle(e2).scrollPaddingBottom) || 0), l2 = a.getBoundingClientRect(), s = r - o - l2.height, u = s > 2 * nu ? s / 2 : nu, n = matchMedia("(prefers-reduced-motion: reduce)").matches;
    e2.scrollTo({ top: e2.scrollTop + l2.top - o - u, behavior: n ? "auto" : "smooth" });
  }
  var zr = class {
    constructor(a) {
      this.runtime = a;
    }
    data = sl();
    seq = null;
    reading = false;
    pending = [];
    started = false;
    listeners = /* @__PURE__ */ new Set();
    marks = new Ut();
    open = null;
    details = /* @__PURE__ */ new Set();
    entering = /* @__PURE__ */ new Map();
    gliding = /* @__PURE__ */ new WeakMap();
    enterSlot = 0;
    itemOf = /* @__PURE__ */ new WeakMap();
    lists = /* @__PURE__ */ new Map();
    subscribe = (a) => (this.listeners.add(a), () => {
      this.listeners.delete(a);
    });
    getData = () => this.data;
    getOpen = () => this.open;
    setOpen(a) {
      this.open !== a && (this.open = a, this.emit());
    }
    holdDetail(a) {
      return this.details.add(a), () => {
        this.details.delete(a);
      };
    }
    drawerOf(a) {
      let t = this.data.nodes;
      for (let o = a; o !== void 0; o = Object.keys(t).find((r) => t[r].children.includes(o))) {
        let r = t[o];
        if (r && r.children.length > 0 && (wi.has(r.type) || this.details.has(o))) return o;
      }
      return null;
    }
    start() {
      if (this.started || typeof window > "u") return;
      this.started = true;
      let a = this.runtime()?.live;
      a?.subscribe((o) => this.receive(o));
      let t = this.read();
      t && a?.hold?.(t);
    }
    item(a) {
      let t = this.data.nodes[a];
      if (t?.type !== at2) return;
      let o = this.itemOf.get(t);
      return o || (o = { ...t.props, id: a }, this.itemOf.set(t, o)), o;
    }
    items(a) {
      let t = this.data.nodes[a];
      if (t?.type !== et2) return du;
      let o = t.children.map((s) => this.data.nodes[s]), r = this.lists.get(a);
      if (r?.collection === t && o.every((s, u) => s === r.nodes[u])) return r.items;
      let l2 = t.children.map((s) => this.item(s));
      return this.lists.set(a, { collection: t, nodes: o, items: l2 }), l2;
    }
    emit() {
      for (let a of [...this.listeners]) a();
    }
    read() {
      let a = this.runtime();
      if (!(this.reading || !a?.request)) return this.reading = true, a.request("live.read", null).then((t) => {
        this.reading = false, t.status === "ok" && typeof t.seq == "number" && typeof t.data == "string" && (this.seq === null || t.seq > this.seq) ? this.load(t.seq, JSON.parse(t.data)) : this.drain();
      }, () => {
        this.reading = false, this.drain();
      });
    }
    load(a, t) {
      this.data = t, this.seq = a, this.drain();
    }
    drain() {
      let a = this.pending;
      this.pending = [];
      for (let t of a) this.apply(t);
      this.emit();
    }
    inStep(a) {
      return this.seq !== null && a.seq === this.seq + 1;
    }
    apply(a) {
      this.inStep(a) && (this.data = nl(this.data, a.op), this.seq = a.seq);
    }
    receive(a) {
      if (a.kind === "resync") this.read();
      else if (a.kind === "op") {
        if (this.seq !== null && a.seq <= this.seq) return;
        if (this.reading || !this.inStep(a)) {
          this.pending.push(a), this.read();
          return;
        }
        let t = this.data.nodes, o = new Map(Vr().map((l2) => [l2, l2.getBoundingClientRect()])), r = new Set(uu());
        this.apply(a), a.op.op === "add" && !(a.op.id in t) && this.entering.set(a.op.id, this.nextEnter()), this.emit(), requestAnimationFrame(() => this.settle(o, r));
      } else this.setOpen(this.drawerOf(a.id)), this.focus(a, Ii);
    }
    nextEnter() {
      let a = performance.now();
      return this.enterSlot = Math.min(Math.max(a, this.enterSlot + Si), a + vi), this.enterSlot - a;
    }
    settle(a, t) {
      let o = Vr();
      for (let u of o) this.gliding.get(u)?.cancel();
      let r = uu().filter((u) => !t.has(u));
      for (let u of r) {
        let n = o.find((d) => u.contains(d) && this.entering.has(d.getAttribute("data-live-id")));
        this.enter(u, n ? this.entering.get(n.getAttribute("data-live-id")) : this.nextEnter());
      }
      let l2 = new Map(o.map((u) => [u, u.getBoundingClientRect()])), s = /* @__PURE__ */ new Map();
      for (let u of o) {
        let n = a.get(u), d = this.entering.get(u.getAttribute("data-live-id"));
        if (!n) {
          d !== void 0 && !r.some((L2) => L2.contains(u)) && this.enter(u, d);
          continue;
        }
        let i = l2.get(u), f2 = { x: n.left - i.left, y: n.top - i.top };
        s.set(u, f2);
        let m = u.parentElement?.closest("[data-live-id]"), c = (m && s.get(m)) ?? { x: 0, y: 0 }, g = { x: f2.x - c.x, y: f2.y - c.y };
        Math.abs(g.x) < 1 && Math.abs(g.y) < 1 || matchMedia("(prefers-reduced-motion: reduce)").matches || this.gliding.set(u, u.animate([{ transform: `translate(${g.x}px, ${g.y}px)` }, { transform: "none" }], { duration: bi, easing: yi }));
      }
      this.entering.clear(), this.marks.check();
    }
    enter(a, t) {
      a.style.setProperty("--file-live-enter-delay", `${Math.round(t)}ms`), a.setAttribute("data-live-enter", ""), setTimeout(() => this.endEnter(a), t + Ci);
    }
    endEnter(a) {
      a.removeAttribute("data-live-enter"), a.style.removeProperty("--file-live-enter-delay");
    }
    focus(a, t) {
      let o = Vr().find((l2) => l2.getAttribute("data-live-id") === a.id);
      if (!o) {
        t > 0 && requestAnimationFrame(() => this.focus(a, t - 1));
        return;
      }
      if (this.open === a.id) return;
      let r = o.closest("dialog");
      r ? ki(r, o) : this.runtime()?.live?.reveal(a.request, o);
      for (let l2 = o; l2; l2 = l2.parentElement?.closest("[data-live-id]")) this.endEnter(l2), this.gliding.get(l2)?.cancel();
      this.marks.point(a.actor, a.id, o);
    }
  };
  var Q = new zr(() => window.instinctFile);
  function Ea(e2, a) {
    return Q.start(), (0, import_react21.useSyncExternalStore)(Q.subscribe, e2, () => a);
  }
  function Et() {
    return Ea(Q.getOpen, null);
  }
  function $t(e2) {
    return Ea(() => Q.getData().nodes[e2], void 0);
  }
  function ye2(e2) {
    return typeof e2 == "string" ? e2 : "";
  }
  function Ri({ props: e2, children: a }) {
    let t = (0, import_react6.useContext)(sa), o = Et() === t;
    return (0, import_jsx_runtime12.jsx)($r, { ...e2, open: o, onOpenChange: (r) => Q.setOpen(r ? t : null), children: a });
  }
  var iu = { Region: (e2, a) => (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children: a }), Group: (e2, a) => (0, import_jsx_runtime12.jsx)(vr, { ...e2, children: a }), Rows: (e2, a) => (0, import_jsx_runtime12.jsx)(br, { ...e2, children: a }), PhotoCards: (e2, a) => (0, import_jsx_runtime12.jsx)(Er, { children: a }), Text: (e2, a) => (0, import_jsx_runtime12.jsx)(wr, { children: a }), Header: (e2) => (0, import_jsx_runtime12.jsx)(Sr, { ...e2 }), Row: (e2) => (0, import_jsx_runtime12.jsx)(yr, { ...e2 }), PhotoCard: (e2, a) => (0, import_jsx_runtime12.jsx)(Ri, { props: e2, children: a }), Facts: (e2) => (0, import_jsx_runtime12.jsx)(We2, { ...e2 }), Heading: (e2) => (0, import_jsx_runtime12.jsx)(kr, { sub: typeof e2.sub == "string" ? e2.sub : void 0, children: ye2(e2.text) }), Paragraph: (e2) => (0, import_jsx_runtime12.jsx)(Pr, { children: ye2(e2.text) }), Bullets: (e2) => (0, import_jsx_runtime12.jsx)(Mr, { ...e2 }), KeySentence: (e2) => (0, import_jsx_runtime12.jsx)(Ar, { children: ye2(e2.text) }), Callout: (e2) => (0, import_jsx_runtime12.jsx)(Tr, { title: ye2(e2.title), tone: e2.tone, children: ye2(e2.text) }), NumberedList: (e2) => (0, import_jsx_runtime12.jsx)(Br, { ...e2 }), Table: (e2) => (0, import_jsx_runtime12.jsx)(Or, { ...e2 }), Caption: (e2) => (0, import_jsx_runtime12.jsx)(Rr, { children: ye2(e2.text) }), Rule: () => (0, import_jsx_runtime12.jsx)(Dr, {}), Closing: (e2) => (0, import_jsx_runtime12.jsx)(Nr, { children: ye2(e2.text) }), Figure: (e2) => (0, import_jsx_runtime12.jsx)(Fr, { ...e2 }), Photos: (e2) => (0, import_jsx_runtime12.jsx)(qa, { ...e2 }), BarChart: (e2) => (0, import_jsx_runtime12.jsx)(Ur, { ...e2 }), ButtonLink: (e2) => (0, import_jsx_runtime12.jsx)(hr, { ...e2, children: ye2(e2.label) }) };
  var fu = /* @__PURE__ */ new Set();
  function cu(e2, a) {
    let t = `${e2}:${a}`;
    fu.has(t) || (fu.add(t), console.warn(`Live node "${e2}" ${a}`));
  }
  var Wr = class extends import_react5.Component {
    state = { failed: false };
    static getDerivedStateFromError() {
      return { failed: true };
    }
    componentDidCatch(a) {
      cu(this.props.id, `could not render as ${this.props.node.type}: ${a.message}`);
    }
    componentDidUpdate(a) {
      this.state.failed && a.node !== this.props.node && this.setState({ failed: false });
    }
    render() {
      return this.state.failed ? null : this.props.children;
    }
  };
  var pu = (0, import_react5.memo)(function({ id: a }) {
    let t = $t(a);
    if (!t || t.type === et2 || t.type === at2) return null;
    let o = iu[t.type];
    if (!o) return cu(a, `has unknown type "${t.type}"; this File's kit cannot render it`), null;
    let r = t.children.map((l2) => (0, import_jsx_runtime13.jsx)(pu, { id: l2 }, l2));
    return (0, import_jsx_runtime13.jsx)(Wr, { id: a, node: t, children: (0, import_jsx_runtime13.jsx)(sa.Provider, { value: a, children: o(t.props, r) }) });
  });

  // ../../opt/files/node_modules/react-router/dist/development/chunk-BV7QT456.mjs
  var React = __toESM(require_react(), 1);
  var React2 = __toESM(require_react(), 1);
  var React3 = __toESM(require_react(), 1);
  var React4 = __toESM(require_react(), 1);
  var React9 = __toESM(require_react(), 1);
  var React8 = __toESM(require_react(), 1);
  var React7 = __toESM(require_react(), 1);
  var React6 = __toESM(require_react(), 1);
  var React5 = __toESM(require_react(), 1);
  var React10 = __toESM(require_react(), 1);
  var React11 = __toESM(require_react(), 1);
  var import_meta = {};
  var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
  var PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
  function normalizeProtocolRelativeUrl(url, protocol) {
    return protocol + url.replace(/\\/g, "/");
  }
  function isLocation(obj) {
    return typeof obj === "object" && obj != null && "pathname" in obj && "search" in obj && "hash" in obj && "state" in obj && "key" in obj;
  }
  function createMemoryHistory(options = {}) {
    let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
    let entries;
    entries = initialEntries.map(
      (entry, index2) => createMemoryLocation(
        entry,
        typeof entry === "string" ? null : entry.state,
        index2 === 0 ? "default" : void 0,
        typeof entry === "string" ? void 0 : entry.mask
      )
    );
    let index = clampIndex(
      initialIndex == null ? entries.length - 1 : initialIndex
    );
    let action = "POP";
    let listener = null;
    function clampIndex(n) {
      return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
      return entries[index];
    }
    function createMemoryLocation(to2, state = null, key, mask) {
      let location = createLocation(
        entries ? getCurrentLocation().pathname : "/",
        to2,
        state,
        key,
        mask
      );
      warning(
        location.pathname.charAt(0) === "/",
        `relative pathnames are not supported in memory history: ${JSON.stringify(
          to2
        )}`
      );
      return location;
    }
    function createHref2(to2) {
      return typeof to2 === "string" ? to2 : createPath(to2);
    }
    let history = {
      get index() {
        return index;
      },
      get action() {
        return action;
      },
      get location() {
        return getCurrentLocation();
      },
      createHref: createHref2,
      createURL(to2) {
        return new URL(createHref2(to2), "http://localhost");
      },
      encodeLocation(to2) {
        let path = typeof to2 === "string" ? parsePath(to2) : to2;
        return {
          pathname: path.pathname || "",
          search: path.search || "",
          hash: path.hash || ""
        };
      },
      push(to2, state) {
        action = "PUSH";
        let nextLocation = isLocation(to2) ? to2 : createMemoryLocation(to2, state);
        index += 1;
        entries.splice(index, entries.length, nextLocation);
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 1 });
        }
      },
      replace(to2, state) {
        action = "REPLACE";
        let nextLocation = isLocation(to2) ? to2 : createMemoryLocation(to2, state);
        entries[index] = nextLocation;
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 0 });
        }
      },
      go(delta) {
        action = "POP";
        let nextIndex = clampIndex(index + delta);
        let nextLocation = entries[nextIndex];
        index = nextIndex;
        if (listener) {
          listener({ action, location: nextLocation, delta });
        }
      },
      listen(fn2) {
        listener = fn2;
        return () => {
          listener = null;
        };
      }
    };
    return history;
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined") console.warn(message);
      try {
        throw new Error(message);
      } catch (e2) {
      }
    }
  }
  function createKey() {
    return Math.random().toString(36).substring(2, 10);
  }
  function createLocation(current, to2, state = null, key, mask) {
    let location = {
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: "",
      ...typeof to2 === "string" ? parsePath(to2) : to2,
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to2 && to2.key || key || createKey(),
      mask
    };
    return location;
  }
  function createPath({
    pathname = "/",
    search = "",
    hash = ""
  }) {
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substring(hashIndex);
        path = path.substring(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substring(searchIndex);
        path = path.substring(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  var _map;
  _map = /* @__PURE__ */ new WeakMap();
  function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial, precomputedBranches) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = precomputedBranches ?? flattenAndRankRoutes(routes);
    let matches = null;
    let decoded = decodePath(pathname);
    for (let i = 0; matches == null && i < branches.length; ++i) {
      matches = matchRouteBranch(
        branches[i],
        decoded,
        allowPartial
      );
    }
    return matches;
  }
  function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
      id: route.id,
      pathname,
      params,
      data: loaderData[route.id],
      loaderData: loaderData[route.id],
      handle: route.handle
    };
  }
  function flattenAndRankRoutes(routes) {
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    return branches;
  }
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
    let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
          return;
        }
        invariant(
          meta.relativePath.startsWith(parentPath),
          `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        );
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
        );
        flattenRoutes(
          route.children,
          branches,
          routesMeta,
          path,
          hasParentOptionalSegments
        );
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta: routesMeta.map((meta2, i) => {
          let [matcher, params] = compilePath(
            meta2.relativePath,
            meta2.caseSensitive,
            i === routesMeta.length - 1
          );
          return {
            ...meta2,
            matcher,
            compiledParams: params
          };
        })
      });
    };
    routes.forEach((route, index) => {
      if (route.path === "" || !route.path?.includes("?")) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, true, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(
      ...restExploded.map(
        (subpath) => subpath === "" ? required : [required, subpath].join("/")
      )
    );
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map(
      (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
    );
  }
  function rankRouteBranches(branches) {
    branches.sort(
      (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
        a.routesMeta.map((meta) => meta.childrenIndex),
        b.routesMeta.map((meta) => meta.childrenIndex)
      )
    );
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce(
      (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
  }
  function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b[b.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let pattern = {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      };
      let match = (
        // Use precomputed matcher if it exists
        meta.matcher && meta.compiledParams ? matchPathImpl(
          pattern,
          remainingPathname,
          meta.matcher,
          meta.compiledParams
        ) : matchPath(pattern, remainingPathname)
      );
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath(
          {
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          },
          remainingPathname
        );
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(
          joinPaths([matchedPathname, match.pathnameBase])
        ),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(
      pattern.path,
      pattern.caseSensitive,
      pattern.end
    );
    return matchPathImpl(pattern, pathname, matcher, compiledParams);
  }
  function matchPathImpl(pattern, pathname, matcher, compiledParams) {
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = removeTrailingSlash(matchedPathname, 1);
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce(
      (memo2, { paramName, isOptional }, index) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = removeTrailingSlash(
            matchedPathname.slice(0, matchedPathname.length - splatValue.length),
            1
          );
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo2[paramName] = void 0;
        } else {
          memo2[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo2;
      },
      {}
    );
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive = false, end = true) {
    warning(
      path === "*" || !path.endsWith("*") || path.endsWith("/*"),
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
      /\/:([\w-]+)(\?)?/g,
      (match, paramName, isOptional, index, str) => {
        params.push({ paramName, isOptional: isOptional != null });
        if (isOptional) {
          let nextChar = str.charAt(index + match.length);
          if (nextChar && nextChar !== "/") {
            return "/([^\\/]*)";
          }
          return "(?:/([^\\/]*))?";
        }
        return "/([^\\/]+)";
      }
    ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    if (path.endsWith("*")) {
      params.push({ paramName: "*" });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else {
    }
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(
        false,
        `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
      );
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function resolvePath(to2, fromPathname = "/") {
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to2 === "string" ? parsePath(to2) : to2;
    let pathname;
    if (toPathname) {
      toPathname = removeDoubleSlashes(toPathname);
      if (toPathname.startsWith("/") || toPathname.startsWith("\\")) {
        pathname = resolvePathname(toPathname.substring(1), "/");
      } else {
        pathname = resolvePathname(toPathname, fromPathname);
      }
    } else {
      pathname = fromPathname;
    }
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = removeTrailingSlash(fromPathname).split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
      path
    )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function getPathContributingMatches(matches) {
    return matches.filter(
      (match, index) => index === 0 || match.route.path && match.route.path.length > 0
    );
  }
  function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map(
      (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
    );
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to2;
    if (typeof toArg === "string") {
      to2 = parsePath(toArg);
    } else {
      to2 = { ...toArg };
      invariant(
        !to2.pathname || !to2.pathname.includes("?"),
        getInvalidPathError("?", "pathname", "search", to2)
      );
      invariant(
        !to2.pathname || !to2.pathname.includes("#"),
        getInvalidPathError("#", "pathname", "hash", to2)
      );
      invariant(
        !to2.search || !to2.search.includes("#"),
        getInvalidPathError("#", "search", "hash", to2)
      );
    }
    let isEmptyPath = toArg === "" || to2.pathname === "";
    let toPathname = isEmptyPath ? "/" : to2.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to2.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to2, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var removeDoubleSlashes = (path) => path.replace(/[\\/]{2,}/g, "/");
  var joinPaths = (paths) => removeDoubleSlashes(paths.join("/"));
  function removeTrailingSlash(path, minLength = 0) {
    let end = path.length;
    while (end > minLength && path.charCodeAt(end - 1) === 47) {
      end--;
    }
    return end === path.length ? path : path.slice(0, end);
  }
  var normalizePathname = (pathname) => removeTrailingSlash(pathname).replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  var ErrorResponseImpl = class {
    constructor(status, statusText, data2, internal = false) {
      this.status = status;
      this.statusText = statusText || "";
      this.internal = internal;
      if (data2 instanceof Error) {
        this.data = data2.toString();
        this.error = data2;
      } else {
        this.data = data2;
      }
    }
  };
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  function getRoutePattern(matches) {
    let parts = matches.map((m) => m.route.path).filter(Boolean);
    return joinPaths(parts) || "/";
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  function parseToInfo(_to, basename) {
    let to2 = _to;
    if (typeof to2 !== "string" || !ABSOLUTE_URL_REGEX.test(to2)) {
      return {
        absoluteURL: void 0,
        isExternal: false,
        to: to2
      };
    }
    let absoluteURL = to2;
    let isExternal = false;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = PROTOCOL_RELATIVE_URL_REGEX.test(to2) ? new URL(normalizeProtocolRelativeUrl(to2, currentUrl.protocol)) : new URL(to2);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to2 = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
        warning(
          false,
          `<Link to="${to2}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    }
    return {
      absoluteURL,
      isExternal,
      to: to2
    };
  }
  var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var DEFAULT_NAVIGATION_URL = new URL("http://localhost");
  function getNavigatorCurrentUrl(navigator2) {
    if (navigator2.createURL) {
      return navigator2.createURL("/");
    }
    try {
      return new URL(navigator2.createHref("/"), DEFAULT_NAVIGATION_URL);
    } catch {
      return DEFAULT_NAVIGATION_URL;
    }
  }
  function isSameOrigin(a, b) {
    return a.origin === b.origin && (a.origin !== "null" || a.protocol === b.protocol && a.host === b.host);
  }
  function isExplicitUrl(destination, target) {
    if (destination.startsWith("//")) {
      return true;
    }
    let protocol = target.protocol.toLowerCase();
    if (!destination.toLowerCase().startsWith(protocol)) {
      return false;
    }
    return target.host === "" || destination.slice(protocol.length).startsWith("//");
  }
  function validateNavigationTarget(original, resolved, currentUrl, externalPolicy) {
    let originalUrl = null;
    try {
      originalUrl = original == null ? null : new URL(original, currentUrl);
    } catch {
    }
    let resolvedUrl = new URL(resolved, currentUrl);
    let originalIsExternal = originalUrl != null && !isSameOrigin(originalUrl, currentUrl);
    let resolvedIsExternal = !isSameOrigin(resolvedUrl, currentUrl);
    if (externalPolicy === "reject") {
      if (originalIsExternal || resolvedIsExternal) {
        throw new Error("External navigation is not allowed");
      }
    } else if (resolvedIsExternal) {
      if (originalUrl == null || !isExplicitUrl(original, originalUrl) || !isSameOrigin(originalUrl, resolvedUrl)) {
        throw new Error("External navigation is not allowed");
      }
    }
  }
  var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  var validMutationMethods = new Set(
    validMutationMethodsArr
  );
  var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
  ];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var _routes;
  var _branches;
  var _hmrRoutes;
  var _hmrBranches;
  _routes = /* @__PURE__ */ new WeakMap();
  _branches = /* @__PURE__ */ new WeakMap();
  _hmrRoutes = /* @__PURE__ */ new WeakMap();
  _hmrBranches = /* @__PURE__ */ new WeakMap();
  var invalidProtocols = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  function hasInvalidProtocol(location) {
    try {
      return invalidProtocols.includes(new URL(location).protocol);
    } catch {
      return false;
    }
  }
  var DataRouterContext = React.createContext(null);
  DataRouterContext.displayName = "DataRouter";
  var DataRouterStateContext = React.createContext(null);
  DataRouterStateContext.displayName = "DataRouterState";
  var RSCRouterContext = React.createContext(false);
  function useIsRSCRouterContext() {
    return React.useContext(RSCRouterContext);
  }
  var ViewTransitionContext = React.createContext({
    isTransitioning: false
  });
  ViewTransitionContext.displayName = "ViewTransition";
  var FetchersContext = React.createContext(
    /* @__PURE__ */ new Map()
  );
  FetchersContext.displayName = "Fetchers";
  var AwaitContext = React.createContext(null);
  AwaitContext.displayName = "Await";
  var NavigationContext = React.createContext(
    null
  );
  NavigationContext.displayName = "Navigation";
  var LocationContext = React.createContext(
    null
  );
  LocationContext.displayName = "Location";
  var RouteContext = React.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  RouteContext.displayName = "Route";
  var RouteErrorContext = React.createContext(null);
  RouteErrorContext.displayName = "RouteError";
  var ENABLE_DEV_WARNINGS = true;
  var ERROR_DIGEST_BASE = "REACT_ROUTER_ERROR";
  var ERROR_DIGEST_REDIRECT = "REDIRECT";
  var ERROR_DIGEST_ROUTE_ERROR_RESPONSE = "ROUTE_ERROR_RESPONSE";
  function decodeRedirectErrorDigest(digest) {
    if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`)) {
      try {
        let parsed = JSON.parse(digest.slice(28));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string" && typeof parsed.location === "string" && typeof parsed.reloadDocument === "boolean" && typeof parsed.replace === "boolean") {
          return parsed;
        }
      } catch {
      }
    }
  }
  function decodeRouteErrorResponseDigest(digest) {
    if (digest.startsWith(
      `${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`
    )) {
      try {
        let parsed = JSON.parse(digest.slice(40));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string") {
          return new ErrorResponseImpl(
            parsed.status,
            parsed.statusText,
            parsed.data
          );
        }
      } catch {
      }
    }
  }
  function useHref(to2, { relative } = {}) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useHref() may be used only in the context of a <Router> component.`
    );
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to2, { relative });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator2.createHref({ pathname: joinedPathname, search, hash });
  }
  function useInRouterContext() {
    return React2.useContext(LocationContext) != null;
  }
  function useLocation() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useLocation() may be used only in the context of a <Router> component.`
    );
    return React2.useContext(LocationContext).location;
  }
  var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function useIsomorphicLayoutEffect(cb) {
    let isStatic = React2.useContext(NavigationContext).static;
    if (!isStatic) {
      React2.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let { isDataRoute } = React2.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useNavigate() may be used only in the context of a <Router> component.`
    );
    let dataRouterContext = React2.useContext(DataRouterContext);
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      (to2, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to2 === "number") {
          navigator2.go(to2);
          return;
        }
        let path = resolveTo(
          to2,
          JSON.parse(routePathnamesJson),
          locationPathname,
          options.relative === "path"
        );
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        validateNavigationTarget(
          typeof to2 === "string" ? to2 : createPath(to2),
          navigator2.createHref(path),
          getNavigatorCurrentUrl(navigator2),
          "reject"
        );
        (!!options.replace ? navigator2.replace : navigator2.push)(
          path,
          options.state,
          options
        );
      },
      [
        basename,
        navigator2,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
      ]
    );
    return navigate;
  }
  var OutletContext = React2.createContext(null);
  function useResolvedPath(to2, { relative } = {}) {
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return React2.useMemo(
      () => resolveTo(
        to2,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === "path"
      ),
      [to2, routePathnamesJson, locationPathname, relative]
    );
  }
  function useRoutesImpl(routes, locationArg, dataRouterOpts) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useRoutes() may be used only in the context of a <Router> component.`
    );
    let { navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches: parentMatches } = React2.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (ENABLE_DEV_WARNINGS) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(
        parentPathname,
        !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
      );
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      invariant(
        parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
      );
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = dataRouterOpts && dataRouterOpts.state.matches.length ? (
      // If we're in a data router, use the matches we've already identified but ensure
      // we have the latest route instances from the manifest in case elements have changed
      dataRouterOpts.state.matches.map(
        (m) => Object.assign(m, {
          route: dataRouterOpts.manifest[m.route.id] || m.route
        })
      )
    ) : matchRoutes(routes, { pathname: remainingPathname });
    if (ENABLE_DEV_WARNINGS) {
      warning(
        parentRoute || matches != null,
        `No routes matched location "${location.pathname}${location.search}${location.hash}" `
      );
      warning(
        matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    }
    let renderedMatches = _renderMatches(
      matches && matches.map(
        (match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes.
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathname
          ]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathnameBase
          ])
        })
      ),
      parentMatches,
      dataRouterOpts
    );
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React2.createElement(
        LocationContext.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              mask: void 0,
              ...location
            },
            navigationType: "POP"
            /* Pop */
          }
        },
        renderedMatches
      );
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
    let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
    let devInfo = null;
    if (ENABLE_DEV_WARNINGS) {
      console.error(
        "Error handled by React Router default ErrorBoundary:",
        error
      );
      devInfo = /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React2.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React2.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React2.createElement("pre", { style: preStyles }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React2.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React2.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      if (this.props.onError) {
        this.props.onError(error, errorInfo);
      } else {
        console.error(
          "React Router caught the following error during render",
          error
        );
      }
    }
    render() {
      let error = this.state.error;
      if (this.context && typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
        const decoded = decodeRouteErrorResponseDigest(error.digest);
        if (decoded) error = decoded;
      }
      let result = error !== void 0 ? /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React2.createElement(
        RouteErrorContext.Provider,
        {
          value: error,
          children: this.props.component
        }
      )) : this.props.children;
      if (this.context) {
        return /* @__PURE__ */ React2.createElement(RSCErrorHandler, { error }, result);
      }
      return result;
    }
  };
  RenderErrorBoundary.contextType = RSCRouterContext;
  var errorRedirectHandledMap = /* @__PURE__ */ new WeakMap();
  function RSCErrorHandler({
    children,
    error
  }) {
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
      let redirect2 = decodeRedirectErrorDigest(error.digest);
      if (redirect2) {
        let existingRedirect = errorRedirectHandledMap.get(error);
        if (existingRedirect) throw existingRedirect;
        let parsed = parseToInfo(redirect2.location, basename);
        let target = parsed.absoluteURL || parsed.to;
        validateNavigationTarget(
          redirect2.location,
          target,
          getNavigatorCurrentUrl(navigator2),
          "allow-explicit"
        );
        if (hasInvalidProtocol(target)) {
          throw new Error("Invalid redirect location");
        }
        if (isBrowser && !errorRedirectHandledMap.get(error)) {
          if (parsed.isExternal || redirect2.reloadDocument) {
            window.location.href = target;
          } else {
            const redirectPromise = Promise.resolve().then(
              () => window.__reactRouterDataRouter.navigate(parsed.to, {
                replace: redirect2.replace
              })
            );
            errorRedirectHandledMap.set(error, redirectPromise);
            throw redirectPromise;
          }
        }
        return /* @__PURE__ */ React2.createElement("meta", { httpEquiv: "refresh", content: `0;url=${target}` });
      }
    }
    return children;
  }
  function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = React2.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: routeContext }, children);
  }
  function _renderMatches(matches, parentMatches = [], dataRouterOpts) {
    let dataRouterState = dataRouterOpts?.state;
    if (matches == null) {
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = dataRouterState?.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex(
        (m) => m.route.id && errors?.[m.route.id] !== void 0
      );
      invariant(
        errorIndex >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          errors
        ).join(",")}`
      );
      renderedMatches = renderedMatches.slice(
        0,
        Math.min(renderedMatches.length, errorIndex + 1)
      );
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterOpts && dataRouterState) {
      renderFallback = dataRouterState.renderFallback;
      for (let i = 0; i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let { loaderData, errors: errors2 } = dataRouterState;
          let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            if (dataRouterOpts.isStatic) {
              renderFallback = true;
            }
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    let onErrorHandler = dataRouterOpts?.onError;
    let onError = dataRouterState && onErrorHandler ? (error, errorInfo) => {
      onErrorHandler(error, {
        location: dataRouterState.location,
        params: dataRouterState.matches?.[0]?.params ?? {},
        pattern: getRoutePattern(dataRouterState.matches),
        errorInfo
      });
    } : void 0;
    return renderedMatches.reduceRight(
      (outlet, match, index) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index === 0) {
              warningOnce(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration"
              );
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ React2.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ React2.createElement(
            RenderedRoute,
            {
              match,
              routeContext: {
                outlet,
                matches: matches2,
                isDataRoute: dataRouterState != null
              },
              children
            }
          );
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React2.createElement(
          RenderErrorBoundary,
          {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: { outlet: null, matches: matches2, isDataRoute: true },
            onError
          }
        ) : getChildren();
      },
      null
    );
  }
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = React2.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React2.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useRouteContext(hookName) {
    let route = React2.useContext(RouteContext);
    invariant(route, getDataRouterConsoleError(hookName));
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant(
      thisRoute.route.id,
      `${hookName} can only be used on routes that contain a unique "id"`
    );
    return thisRoute.route.id;
  }
  function useRouteId() {
    return useCurrentRouteId(
      "useRouteId"
      /* UseRouteId */
    );
  }
  function useNavigation() {
    let state = useDataRouterState(
      "useNavigation"
      /* UseNavigation */
    );
    return React2.useMemo(() => {
      let { matches, historyAction, ...rest } = state.navigation;
      return rest;
    }, [state.navigation]);
  }
  function useMatches() {
    let { matches, loaderData } = useDataRouterState(
      "useMatches"
      /* UseMatches */
    );
    return React2.useMemo(
      () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
      [matches, loaderData]
    );
  }
  function useRouteError() {
    let error = React2.useContext(RouteErrorContext);
    let state = useDataRouterState(
      "useRouteError"
      /* UseRouteError */
    );
    let routeId = useCurrentRouteId(
      "useRouteError"
      /* UseRouteError */
    );
    if (error !== void 0) {
      return error;
    }
    return state.errors?.[routeId];
  }
  function useNavigateStable() {
    let { router } = useDataRouterContext(
      "useNavigate"
      /* UseNavigateStable */
    );
    let id2 = useCurrentRouteId(
      "useNavigate"
      /* UseNavigateStable */
    );
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      async (to2, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to2 === "number") {
          await router.navigate(to2);
        } else {
          await router.navigate(to2, { fromRouteId: id2, ...options });
        }
      },
      [router, id2]
    );
    return navigate;
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning(false, message);
    }
  }
  var USE_OPTIMISTIC = "useOptimistic";
  var useOptimisticImpl = React3[USE_OPTIMISTIC];
  var MemoizedDataRoutes = React3.memo(DataRoutes2);
  function DataRoutes2({
    routes,
    manifest,
    future,
    state,
    isStatic,
    onError
  }) {
    return useRoutesImpl(routes, void 0, {
      manifest,
      state,
      isStatic,
      onError,
      future
    });
  }
  function MemoryRouter({
    basename,
    children,
    initialEntries,
    initialIndex,
    useTransitions
  }) {
    let historyRef = React3.useRef();
    if (historyRef.current == null) {
      historyRef.current = createMemoryHistory({
        initialEntries,
        initialIndex,
        v5Compat: true
      });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React3.useState({
      action: history.action,
      location: history.location
    });
    let setState = React3.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React3.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React3.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React3.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  function Router({
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP",
    navigator: navigator2,
    static: staticProp = false,
    useTransitions
  }) {
    invariant(
      !useInRouterContext(),
      `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
    );
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React3.useMemo(
      () => ({
        basename,
        navigator: navigator2,
        static: staticProp,
        useTransitions,
        future: {}
      }),
      [basename, navigator2, staticProp, useTransitions]
    );
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default",
      mask
    } = locationProp;
    let locationContext = React3.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key,
          mask
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType, mask]);
    warning(
      locationContext != null,
      `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
    );
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return typeof HTMLElement !== "undefined" && object instanceof HTMLElement;
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
  }
  var _formDataSupportsSubmitter = null;
  function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
      try {
        new FormData(
          document.createElement("form"),
          // @ts-expect-error if FormData supports the submitter parameter, this will throw
          0
        );
        _formDataSupportsSubmitter = false;
      } catch (e2) {
        _formDataSupportsSubmitter = true;
      }
    }
    return _formDataSupportsSubmitter;
  }
  var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
      warning(
        false,
        `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
      );
      return null;
    }
    return encType;
  }
  function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
      let attr = target.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(
          `Cannot submit a <button> or <input type="submit"> without a <form>`
        );
      }
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(form, target);
      if (!isFormDataSubmitterSupported()) {
        let { name, type, value } = target;
        if (type === "image") {
          let prefix = name ? `${name}.` : "";
          formData.append(`${prefix}x`, "0");
          formData.append(`${prefix}y`, "0");
        } else if (name) {
          formData.append(name, value);
        }
      }
    } else if (isHtmlElement(target)) {
      throw new Error(
        `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
      );
    } else {
      method = defaultMethod;
      action = null;
      encType = defaultEncType;
      body = target;
    }
    if (formData && encType === "text/plain") {
      body = formData;
      formData = void 0;
    }
    return { action, method: method.toLowerCase(), encType, formData, body };
  }
  var objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  function escapeHtml(html) {
    return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
  }
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function singleFetchUrl(reqUrl, basename, trailingSlashAware, extension) {
    let url = typeof reqUrl === "string" ? new URL(
      reqUrl,
      // This can be called during the SSR flow via PrefetchPageLinksImpl so
      // don't assume window is available
      typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
    ) : reqUrl;
    if (trailingSlashAware) {
      if (url.pathname.endsWith("/")) {
        url.pathname = `${url.pathname}_.${extension}`;
      } else {
        url.pathname = `${url.pathname}.${extension}`;
      }
    } else {
      if (url.pathname === "/") {
        url.pathname = `_root.${extension}`;
      } else if (basename && stripBasename(url.pathname, basename) === "/") {
        url.pathname = `${removeTrailingSlash(basename)}/_root.${extension}`;
      } else {
        url.pathname = `${removeTrailingSlash(url.pathname)}.${extension}`;
      }
    }
    return url;
  }
  async function loadRouteModule(route, routeModulesCache) {
    if (route.id in routeModulesCache) {
      return routeModulesCache[route.id];
    }
    try {
      let routeModule = await import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        route.module
      );
      routeModulesCache[route.id] = routeModule;
      return routeModule;
    } catch (error) {
      console.error(
        `Error loading route module \`${route.module}\`, reloading page...`
      );
      console.error(error);
      if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
      import_meta.hot) {
        throw error;
      }
      window.location.reload();
      return new Promise(() => {
      });
    }
  }
  function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
  }
  function isHtmlLinkDescriptor(object) {
    if (object == null) {
      return false;
    }
    if (object.href == null) {
      return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
  }
  async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    let links = await Promise.all(
      matches.map(async (match) => {
        let route = manifest.routes[match.route.id];
        if (route) {
          let mod = await loadRouteModule(route, routeModules);
          return mod.links ? mod.links() : [];
        }
        return [];
      })
    );
    return dedupeLinkDescriptors(
      links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
        (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
      )
    );
  }
  function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
    let isNew = (match, index) => {
      if (!currentMatches[index]) return true;
      return match.route.id !== currentMatches[index].route.id;
    };
    let matchPathChanged = (match, index) => {
      return (
        // param change, /users/123 -> /users/456
        currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
      );
    };
    if (mode === "assets") {
      return nextMatches.filter(
        (match, index) => isNew(match, index) || matchPathChanged(match, index)
      );
    }
    if (mode === "data") {
      return nextMatches.filter((match, index) => {
        let manifestRoute = manifest.routes[match.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldRevalidate) {
          let routeChoice = match.route.shouldRevalidate({
            currentUrl: new URL(
              location.pathname + location.search + location.hash,
              window.origin
            ),
            currentParams: currentMatches[0]?.params || {},
            nextUrl: new URL(page, window.origin),
            nextParams: match.params,
            defaultShouldRevalidate: true
          });
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return true;
      });
    }
    return [];
  }
  function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(
      matches.map((match) => {
        let route = manifest.routes[match.route.id];
        if (!route) return [];
        let hrefs = [route.module];
        if (route.clientActionModule) {
          hrefs = hrefs.concat(route.clientActionModule);
        }
        if (route.clientLoaderModule) {
          hrefs = hrefs.concat(route.clientLoaderModule);
        }
        if (includeHydrateFallback && route.hydrateFallbackModule) {
          hrefs = hrefs.concat(route.hydrateFallbackModule);
        }
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1)
    );
  }
  function dedupeHrefs(hrefs) {
    return [...new Set(hrefs)];
  }
  function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
      sorted[key] = obj[key];
    }
    return sorted;
  }
  function dedupeLinkDescriptors(descriptors, preloads) {
    let set = /* @__PURE__ */ new Set();
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor) => {
      let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
      if (alreadyModulePreload) {
        return deduped;
      }
      let key = JSON.stringify(sortKeys(descriptor));
      if (!set.has(key)) {
        set.add(key);
        deduped.push({ key, link: descriptor });
      }
      return deduped;
    }, []);
  }
  function useDataRouterContext2() {
    let context = React8.useContext(DataRouterContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterContext.Provider> element"
    );
    return context;
  }
  function useDataRouterStateContext() {
    let context = React8.useContext(DataRouterStateContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    );
    return context;
  }
  var FrameworkContext = React8.createContext(void 0);
  FrameworkContext.displayName = "FrameworkContext";
  function useFrameworkContext() {
    let context = React8.useContext(FrameworkContext);
    invariant2(
      context,
      "You must render this element inside a <HydratedRouter> element"
    );
    return context;
  }
  function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = React8.useContext(FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = React8.useState(false);
    let [shouldPrefetch, setShouldPrefetch] = React8.useState(false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = React8.useRef(null);
    React8.useEffect(() => {
      if (prefetch === "render") {
        setShouldPrefetch(true);
      }
      if (prefetch === "viewport") {
        let callback = (entries) => {
          entries.forEach((entry) => {
            setShouldPrefetch(entry.isIntersecting);
          });
        };
        let observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [prefetch]);
    React8.useEffect(() => {
      if (maybePrefetch) {
        let id2 = setTimeout(() => {
          setShouldPrefetch(true);
        }, 100);
        return () => {
          clearTimeout(id2);
        };
      }
    }, [maybePrefetch]);
    let setIntent = () => {
      setMaybePrefetch(true);
    };
    let cancelIntent = () => {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    };
    if (!frameworkContext) {
      return [false, ref, {}];
    }
    if (prefetch !== "intent") {
      return [shouldPrefetch, ref, {}];
    }
    return [
      shouldPrefetch,
      ref,
      {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }
    ];
  }
  function composeEventHandlers(theirHandler, ourHandler) {
    return (event) => {
      theirHandler && theirHandler(event);
      if (!event.defaultPrevented) {
        ourHandler(event);
      }
    };
  }
  function PrefetchPageLinks({ page, ...linkProps }) {
    let rsc = useIsRSCRouterContext();
    let { nonce: contextNonce } = useFrameworkContext();
    let { router } = useDataRouterContext2();
    let matches = React8.useMemo(
      () => matchRoutes(router.routes, page, router.basename),
      [router.routes, page, router.basename]
    );
    if (!matches) {
      return null;
    }
    if (linkProps.nonce == null && contextNonce) {
      linkProps = { ...linkProps, nonce: contextNonce };
    }
    if (rsc) {
      return /* @__PURE__ */ React8.createElement(RSCPrefetchPageLinksImpl, { page, matches, ...linkProps });
    }
    return /* @__PURE__ */ React8.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
  }
  function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React8.useState([]);
    React8.useEffect(() => {
      let interrupted = false;
      void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
        (links) => {
          if (!interrupted) {
            setKeyedPrefetchLinks(links);
          }
        }
      );
      return () => {
        interrupted = true;
      };
    }, [matches, manifest, routeModules]);
    return keyedPrefetchLinks;
  }
  function RSCPrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "rsc"
      );
      let hasSomeRoutesWithShouldRevalidate = false;
      let targetRoutes = [];
      for (let match of nextMatches) {
        if (typeof match.route.shouldRevalidate === "function") {
          hasSomeRoutesWithShouldRevalidate = true;
        } else {
          targetRoutes.push(match.route.id);
        }
      }
      if (hasSomeRoutesWithShouldRevalidate && targetRoutes.length > 0) {
        url.searchParams.set("_routes", targetRoutes.join(","));
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      page,
      location,
      nextMatches
    ]);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })));
  }
  function PrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future, manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "data"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let newMatchesForAssets = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "assets"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let routesParams = /* @__PURE__ */ new Set();
      let foundOptOutRoute = false;
      nextMatches.forEach((m) => {
        let manifestRoute = manifest.routes[m.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return;
        }
        if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
          foundOptOutRoute = true;
        } else if (manifestRoute.hasClientLoader) {
          foundOptOutRoute = true;
        } else {
          routesParams.add(m.route.id);
        }
      });
      if (routesParams.size === 0) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "data"
      );
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
        );
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      loaderData,
      location,
      manifest,
      newMatchesForData,
      nextMatches,
      page,
      routeModules
    ]);
    let moduleHrefs = React8.useMemo(
      () => getModuleLinkHrefs(newMatchesForAssets, manifest),
      [newMatchesForAssets, manifest]
    );
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ React8.createElement(
        "link",
        {
          key,
          nonce: linkProps.nonce,
          ...link,
          crossOrigin: link.crossOrigin ?? linkProps.crossOrigin
        }
      )
    )));
  }
  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }
  var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  try {
    if (isBrowser2) {
      window.__reactRouterVersion = // @ts-expect-error
      "7.18.3";
    }
  } catch (e2) {
  }
  function HistoryRouter({
    basename,
    children,
    history,
    useTransitions
  }) {
    let [state, setStateImpl] = React10.useState({
      action: history.action,
      location: history.location
    });
    let setState = React10.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React10.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React10.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  HistoryRouter.displayName = "unstable_HistoryRouter";
  var Link = React10.forwardRef(
    function LinkWithRef({
      onClick,
      discover = "render",
      prefetch = "none",
      relative,
      reloadDocument,
      replace: replace2,
      mask,
      state,
      target,
      to: to2,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...rest
    }, forwardedRef) {
      let { basename, navigator: navigator2, useTransitions } = React10.useContext(NavigationContext);
      let isAbsolute = typeof to2 === "string" && ABSOLUTE_URL_REGEX.test(to2);
      let parsed = parseToInfo(to2, basename);
      to2 = parsed.to;
      let href = useHref(to2, { relative });
      let location = useLocation();
      let maskedHref = null;
      if (mask) {
        let resolved = resolveTo(
          mask,
          [],
          location.mask ? location.mask.pathname : "/",
          true
        );
        if (basename !== "/") {
          resolved.pathname = resolved.pathname === "/" ? basename : joinPaths([basename, resolved.pathname]);
        }
        maskedHref = navigator2.createHref(resolved);
      }
      let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
        prefetch,
        rest
      );
      let internalOnClick = useLinkClickHandler(to2, {
        replace: replace2,
        mask,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      });
      function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      let isSpaLink = !(parsed.isExternal || reloadDocument);
      let link = (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ React10.createElement(
          "a",
          {
            ...rest,
            ...prefetchHandlers,
            href: (isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href,
            onClick: isSpaLink ? handleClick : onClick,
            ref: mergeRefs(forwardedRef, prefetchRef),
            target,
            "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
          }
        )
      );
      return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
    }
  );
  Link.displayName = "Link";
  var NavLink = React10.forwardRef(
    function NavLinkWithRef({
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to: to2,
      viewTransition,
      children,
      ...rest
    }, ref) {
      let path = useResolvedPath(to2, { relative: rest.relative });
      let location = useLocation();
      let routerState = React10.useContext(DataRouterStateContext);
      let { navigator: navigator2, basename } = React10.useContext(NavigationContext);
      let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useViewTransitionState(path) && viewTransition === true;
      let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
      let locationPathname = location.pathname;
      let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
      }
      if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
      }
      const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
      let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
      let renderProps = {
        isActive,
        isPending,
        isTransitioning
      };
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
      } else {
        className = [
          classNameProp,
          isActive ? "active" : null,
          isPending ? "pending" : null,
          isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
      return /* @__PURE__ */ React10.createElement(
        Link,
        {
          ...rest,
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to: to2,
          viewTransition
        },
        typeof children === "function" ? children(renderProps) : children
      );
    }
  );
  NavLink.displayName = "NavLink";
  var Form = React10.forwardRef(
    ({
      discover = "render",
      fetcherKey,
      navigate,
      reloadDocument,
      replace: replace2,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...props
    }, forwardedRef) => {
      let { useTransitions } = React10.useContext(NavigationContext);
      let submit = useSubmit();
      let formAction = useFormAction(action, { relative });
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX.test(action);
      let submitHandler = (event) => {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = submitter?.getAttribute("formmethod") || method;
        let doSubmit = () => submit(submitter || event.currentTarget, {
          fetcherKey,
          method: submitMethod,
          navigate,
          replace: replace2,
          state,
          relative,
          preventScrollReset,
          viewTransition,
          defaultShouldRevalidate
        });
        if (useTransitions && navigate !== false) {
          React10.startTransition(() => doSubmit());
        } else {
          doSubmit();
        }
      };
      return /* @__PURE__ */ React10.createElement(
        "form",
        {
          ref: forwardedRef,
          method: formMethod,
          action: formAction,
          onSubmit: reloadDocument ? onSubmit : submitHandler,
          ...props,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      );
    }
  );
  Form.displayName = "Form";
  function ScrollRestoration({
    getKey,
    storageKey,
    ...props
  }) {
    let remixContext = React10.useContext(FrameworkContext);
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    useScrollRestoration({ getKey, storageKey });
    let ssrKey = React10.useMemo(
      () => {
        if (!remixContext || !getKey) return null;
        let userKey = getScrollRestorationKey(
          location,
          matches,
          basename,
          getKey
        );
        return userKey !== location.key ? userKey : null;
      },
      // Nah, we only need this the first time for the SSR render
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    if (!remixContext || remixContext.isSpaMode) {
      return null;
    }
    let restoreScroll = ((storageKey2, restoreKey) => {
      if (!window.history.state || !window.history.state.key) {
        let key = Math.random().toString(32).slice(2);
        window.history.replaceState({ key }, "");
      }
      try {
        let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
        let storedY = positions[restoreKey || window.history.state.key];
        if (typeof storedY === "number") {
          window.scrollTo(0, storedY);
        }
      } catch (error) {
        console.error(error);
        sessionStorage.removeItem(storageKey2);
      }
    }).toString();
    if (props.nonce == null && remixContext?.nonce) {
      props.nonce = remixContext.nonce;
    }
    return /* @__PURE__ */ React10.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
          __html: `(${restoreScroll})(${escapeHtml(
            JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)
          )}, ${escapeHtml(JSON.stringify(ssrKey))})`
        }
      }
    );
  }
  ScrollRestoration.displayName = "ScrollRestoration";
  function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext3(hookName) {
    let ctx = React10.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
  }
  function useDataRouterState2(hookName) {
    let state = React10.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError2(hookName));
    return state;
  }
  function useLinkClickHandler(to2, {
    target,
    replace: replaceProp,
    mask,
    state,
    preventScrollReset,
    relative,
    viewTransition,
    defaultShouldRevalidate,
    useTransitions
  } = {}) {
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to2, { relative });
    return React10.useCallback(
      (event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
          let doNavigate = () => navigate(to2, {
            replace: replace2,
            mask,
            state,
            preventScrollReset,
            relative,
            viewTransition,
            defaultShouldRevalidate
          });
          if (useTransitions) {
            React10.startTransition(() => doNavigate());
          } else {
            doNavigate();
          }
        }
      },
      [
        location,
        navigate,
        path,
        replaceProp,
        mask,
        state,
        target,
        to2,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      ]
    );
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext3(
      "useSubmit"
      /* UseSubmit */
    );
    let { basename } = React10.useContext(NavigationContext);
    let currentRouteId = useRouteId();
    let routerFetch = router.fetch;
    let routerNavigate = router.navigate;
    return React10.useCallback(
      async (target, options = {}) => {
        let { action, method, encType, formData, body } = getFormSubmissionInfo(
          target,
          basename
        );
        if (options.navigate === false) {
          let key = options.fetcherKey || getUniqueFetcherId();
          await routerFetch(key, currentRouteId, options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            flushSync: options.flushSync
          });
        } else {
          await routerNavigate(options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            flushSync: options.flushSync,
            viewTransition: options.viewTransition
          });
        }
      },
      [routerFetch, routerNavigate, basename, currentRouteId]
    );
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = React10.useContext(NavigationContext);
    let routeContext = React10.useContext(RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = { ...useResolvedPath(action ? action : ".", { relative }) };
    let location = useLocation();
    if (action == null) {
      path.search = location.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v) => v === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v) => v).forEach((v) => params.append("index", v));
        let qs2 = params.toString();
        path.search = qs2 ? `?${qs2}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function getScrollRestorationKey(location, matches, basename, getKey) {
    let key = null;
    if (getKey) {
      if (basename !== "/") {
        key = getKey(
          {
            ...location,
            pathname: stripBasename(location.pathname, basename) || location.pathname
          },
          matches
        );
      } else {
        key = getKey(location, matches);
      }
    }
    if (key == null) {
      key = location.key;
    }
    return key;
  }
  function useScrollRestoration({
    getKey,
    storageKey
  } = {}) {
    let { router } = useDataRouterContext3(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    React10.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(
      React10.useCallback(() => {
        if (navigation.state === "idle") {
          let key = getScrollRestorationKey(location, matches, basename, getKey);
          savedScrollPositions[key] = window.scrollY;
        }
        try {
          sessionStorage.setItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY,
            JSON.stringify(savedScrollPositions)
          );
        } catch (error) {
          warning(
            false,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
          );
        }
        window.history.scrollRestoration = "auto";
      }, [navigation.state, getKey, basename, location, matches, storageKey])
    );
    if (typeof document !== "undefined") {
      React10.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY
          );
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e2) {
        }
      }, [storageKey]);
      React10.useLayoutEffect(() => {
        let disableScrollRestoration = router?.enableScrollRestoration(
          savedScrollPositions,
          () => window.scrollY,
          getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
        );
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router, basename, getKey]);
      React10.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        try {
          if (location.hash) {
            let el = document.getElementById(
              decodeURIComponent(location.hash.slice(1))
            );
            if (el) {
              el.scrollIntoView();
              return;
            }
          }
        } catch {
          warning(
            false,
            `"${location.hash.slice(
              1
            )}" is not a decodable element ID. The view will not scroll to it.`
          );
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location, restoreScrollPosition, preventScrollReset]);
    }
  }
  function usePageHide(callback, options) {
    let { capture } = options || {};
    React10.useEffect(() => {
      let opts = capture != null ? { capture } : void 0;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }
  function useViewTransitionState(to2, { relative } = {}) {
    let vtContext = React10.useContext(ViewTransitionContext);
    invariant(
      vtContext != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename } = useDataRouterContext3(
      "useViewTransitionState"
      /* useViewTransitionState */
    );
    let path = useResolvedPath(to2, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
  }

  // ../../opt/files/kit/index.tsx
  var import_jsx_runtime25 = __toESM(require_jsx_runtime());
  function RouteBridge() {
    const location = useLocation();
    const navigate = useNavigate();
    (0, import_react29.useEffect)(() => {
      window.instinctFile.route(location.pathname + location.search + location.hash);
    }, [location]);
    (0, import_react29.useEffect)(() => {
      const restore = (event) => navigate(event.detail, { replace: true });
      window.addEventListener("instinct-route", restore);
      return () => window.removeEventListener("instinct-route", restore);
    }, [navigate]);
    return null;
  }
  function FileRouter({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(MemoryRouter, { initialEntries: [window.instinctFile.initialRoute], children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(RouteBridge, {}),
      children
    ] });
  }

  // src/App.tsx
  var import_react30 = __toESM(require_react());

  // src/photos/hero-temple.webp
  var hero_temple_default = "./SBGBY7QO.webp";

  // src/photos/ganesh-arch.webp
  var ganesh_arch_default = "./ZOUWYALD.webp";

  // src/photos/ev-haldi.webp
  var ev_haldi_default = "./S3KGUKH6.webp";

  // src/photos/scene-palace.webp
  var scene_palace_default = "./2WI7VHCO.webp";

  // src/photos/ev-mehndi.webp
  var ev_mehndi_default = "./XMNWCZDI.webp";

  // src/photos/ev-sangeet.webp
  var ev_sangeet_default = "./EN74O4XX.webp";

  // src/photos/ev-wedding.webp
  var ev_wedding_default = "./CQMRRUSB.webp";

  // src/photos/ev-baraat.webp
  var ev_baraat_default = "./2US2UZQE.webp";

  // src/photos/ev-swaroochbhoj.webp
  var ev_swaroochbhoj_default = "./SPXV326K.webp";

  // src/photos/story-couple.webp
  var story_couple_default = "./7QMFBZL6.webp";

  // src/photos/divider-lotus.png
  var divider_lotus_default = "./SBW4Y6NB.png";

  // src/App.tsx
  var import_jsx_runtime26 = __toESM(require_jsx_runtime());
  var events = [
    { img: ev_haldi_default, hi: "\u092C\u093E\u0928", en: "Baan", hiWhen: "\u0938\u094B\u092E\u0935\u093E\u0930, 30 \u0928\u0935\u0902\u092C\u0930 2026 \u2022 \u0938\u093E\u0902\u092F 4.15 \u092C\u091C\u0947", enWhen: "Monday, 30 November 2026 \u2022 4.15 PM" },
    { img: scene_palace_default, hi: "\u092E\u093E\u092F\u0930\u093E", en: "Mayra", hiWhen: "\u092E\u0902\u0917\u0932\u0935\u093E\u0930, 01 \u0926\u093F\u0938\u0902\u092C\u0930 2026 \u2022 \u0938\u0941\u092C\u0939 11.15 \u092C\u091C\u0947", enWhen: "Tuesday, 01 December 2026 \u2022 11.15 AM" },
    { img: ev_mehndi_default, hi: "\u092E\u0947\u0939\u0902\u0926\u0940", en: "Mehndi", hiWhen: "\u092E\u0902\u0917\u0932\u0935\u093E\u0930, 01 \u0926\u093F\u0938\u0902\u092C\u0930 2026 \u2022 \u0938\u093E\u0902\u092F 4.15 \u092C\u091C\u0947", enWhen: "Tuesday, 01 December 2026 \u2022 4.15 PM" },
    { img: ev_sangeet_default, hi: "\u0938\u0902\u0917\u0940\u0924 \u0938\u0902\u0927\u094D\u092F\u093E", en: "Sangeet", hiWhen: "\u092E\u0902\u0917\u0932\u0935\u093E\u0930, 01 \u0926\u093F\u0938\u0902\u092C\u0930 2026 \u2022 \u0930\u093E\u0924\u094D\u0930\u093F \u0935\u0947\u0932\u093E \u092E\u0947\u0902", enWhen: "Tuesday, 01 December 2026 \u2022 Evening" },
    { img: ev_baraat_default, hi: "\u092C\u093E\u0930\u093E\u0924 \u0906\u0917\u092E\u0928", en: "Baraat", hiWhen: "\u092C\u0941\u0927\u0935\u093E\u0930, 02 \u0926\u093F\u0938\u0902\u092C\u0930 2026 \u2022 \u0938\u093E\u0902\u092F 4.15 \u092C\u091C\u0947, \u092C\u0938 \u0926\u094D\u0935\u093E\u0930\u093E \u091C\u094B\u0927\u092A\u0941\u0930 \u0938\u0947", enWhen: "Wednesday, 02 December 2026 \u2022 4.15 PM, by bus from Jodhpur" },
    { img: ev_swaroochbhoj_default, hi: "\u0938\u094D\u0935\u0930\u0942\u091A\u093F\u092D\u094B\u091C", en: "Swarooch Bhoj (Dinner)", hiWhen: "\u092C\u0941\u0927\u0935\u093E\u0930, 02 \u0926\u093F\u0938\u0902\u092C\u0930 2026 \u2022 \u0938\u093E\u0902\u092F 6.15 \u092C\u091C\u0947 \u0938\u0947", enWhen: "Wednesday, 02 December 2026 \u2022 from 6.15 PM" },
    { img: ev_wedding_default, hi: "\u092A\u093E\u0923\u093F\u0917\u094D\u0930\u0939\u0923 \u0938\u0902\u0938\u094D\u0915\u093E\u0930", en: "Wedding", hiWhen: "\u092C\u0941\u0927\u0935\u093E\u0930, 02 \u0926\u093F\u0938\u0902\u092C\u0930 2026 \u2022 \u0930\u093E\u0924\u094D\u0930\u093F \u0936\u0941\u092D \u0932\u0917\u094D\u0928 \u092E\u0947\u0902", enWhen: "Wednesday, 02 December 2026 \u2022 Shubh Muhurat" }
  ];
  var WEDDING_AT = (/* @__PURE__ */ new Date("2026-12-02T18:15:00+05:30")).getTime();
  var MUSIC_IDS = ["z_e1d5_VVfw", "Wm4KBCU7AXs", "EF-7XiyKKKc"];
  function useCountdown() {
    const [now, setNow] = (0, import_react30.useState)(() => Date.now());
    (0, import_react30.useEffect)(() => {
      const t = setInterval(() => setNow(Date.now()), 1e3);
      return () => clearInterval(t);
    }, []);
    const diff = Math.max(0, WEDDING_AT - now);
    return {
      days: Math.floor(diff / 864e5),
      hours: Math.floor(diff % 864e5 / 36e5),
      mins: Math.floor(diff % 36e5 / 6e4),
      secs: Math.floor(diff % 6e4 / 1e3)
    };
  }
  function MusicPlayer() {
    const [state, setState] = (0, import_react30.useState)("loading");
    const playerRef = (0, import_react30.useRef)(null);
    const idIndex = (0, import_react30.useRef)(0);
    (0, import_react30.useEffect)(() => {
      let cancelled = false;
      const w2 = window;
      const mount = () => {
        if (cancelled || !w2.YT?.Player) return;
        playerRef.current = new w2.YT.Player("yt-music-frame", {
          videoId: MUSIC_IDS[idIndex.current],
          playerVars: { autoplay: 1, mute: 1, loop: 1, playlist: MUSIC_IDS[idIndex.current], playsinline: 1, controls: 0, disablekb: 1, fs: 0, rel: 0 },
          events: {
            onReady: (e2) => {
              e2.target.playVideo();
            },
            onStateChange: (e2) => {
              if (e2.data === w2.YT.PlayerState.PLAYING) {
                setState((s) => s === "on" ? "on" : "muted");
              }
            },
            onError: () => {
              if (idIndex.current < MUSIC_IDS.length - 1) {
                idIndex.current += 1;
                playerRef.current?.loadVideoById?.(MUSIC_IDS[idIndex.current]);
              }
            }
          }
        });
      };
      if (w2.YT?.Player) mount();
      else {
        const prev = w2.onYouTubeIframeAPIReady;
        w2.onYouTubeIframeAPIReady = () => {
          prev?.();
          mount();
        };
        if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          document.head.appendChild(tag);
        }
      }
      const sound = () => {
        const p2 = playerRef.current;
        if (p2?.unMute) {
          p2.unMute();
          p2.setVolume(70);
          p2.playVideo();
          setState("on");
        }
      };
      window.addEventListener("pointerdown", sound, { once: true });
      window.addEventListener("touchstart", sound, { once: true });
      window.addEventListener("keydown", sound, { once: true });
      return () => {
        cancelled = true;
        window.removeEventListener("pointerdown", sound);
        window.removeEventListener("touchstart", sound);
        window.removeEventListener("keydown", sound);
        playerRef.current?.destroy?.();
        playerRef.current = null;
      };
    }, []);
    const toggle = (e2) => {
      e2.stopPropagation();
      const p2 = playerRef.current;
      if (!p2) return;
      if (state === "on") {
        p2.mute();
        setState("muted");
      } else {
        p2.unMute();
        p2.setVolume(70);
        p2.playVideo();
        setState("on");
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "yt-hidden", "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { id: "yt-music-frame" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("button", { type: "button", className: "music-pill" + (state === "on" ? " playing" : ""), onClick: toggle, "aria-label": "Toggle music", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "note", children: state === "on" ? "\u{1F3B5}" : "\u{1F507}" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "track", children: "Mangal Rang" })
      ] })
    ] });
  }
  function App() {
    const [lang, setLang] = (0, import_react30.useState)("hi");
    const cd2 = useCountdown();
    (0, import_react30.useEffect)(() => {
      const els = document.querySelectorAll(".card, .frame, .story-col");
      const io2 = new IntersectionObserver((ents) => {
        ents.forEach((en2) => {
          if (en2.isIntersecting) {
            en2.target.classList.add("show");
            io2.unobserve(en2.target);
          }
        });
      }, { threshold: 0.18 });
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top > window.innerHeight * 0.9) el.classList.add("pre");
        io2.observe(el);
      });
      return () => io2.disconnect();
    }, []);
    const hi2 = lang === "hi";
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "invite", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(MusicPlayer, {}),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "langbar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("button", { type: "button", className: hi2 ? "on" : "", onClick: () => setLang("hi"), children: "\u0939\u093F\u0902\u0926\u0940" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("button", { type: "button", className: !hi2 ? "on" : "", onClick: () => setLang("en"), children: "English" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("section", { className: "hero", style: { backgroundImage: `url(${hero_temple_default})` }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "clouds", "aria-hidden": true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "c1" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "c2" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "c3" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "hero-inner", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "hero-blessing", children: "\u0965 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903 \u0965" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "hero-shubh", children: hi2 ? "\u0965 \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0965" : "Shubh Vivah" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("h1", { className: "hero-names", children: [
            hi2 ? "\u0936\u093F\u0935\u093E\u0928\u0940" : "Shivani",
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "hero-amp", children: hi2 ? " \u0938\u0902\u0917 " : " weds " }),
            hi2 ? "\u0905\u092D\u093F\u0937\u0947\u0915" : "Abhishek"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "hero-date", children: hi2 ? "\u092C\u0941\u0927\u0935\u093E\u0930 \u2022 02 \u0926\u093F\u0938\u0902\u092C\u0930 2026" : "Wednesday \u2022 02 December 2026" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "petals", "aria-hidden": true, children: [...Array(12)].map((_2, i) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "p" + (i + 1) }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("section", { className: "arch", style: { backgroundImage: `url(${ganesh_arch_default})` }, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "arch-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "arch-line", children: "\u0965 \u0936\u094D\u0930\u0940 \u092E\u093E\u0924\u093E\u091C\u0940 \u092E\u0939\u093E\u0930\u093E\u091C \u0965\xA0\xA0\u0965 \u091C\u092F \u0936\u094D\u0930\u0940 \u0938\u093E\u0932\u093E\u0938\u0930 \u092C\u093E\u0932\u093E\u091C\u0940 \u0965\xA0\xA0\u0965 \u0936\u094D\u0930\u0940 \u092A\u093F\u0924\u0930 \u091C\u0940 \u092E\u0939\u093E\u0930\u093E\u091C \u0965" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("p", { className: "arch-shloka", children: [
          "\u0935\u0915\u094D\u0930\u0924\u0941\u0923\u094D\u0921 \u092E\u0939\u093E\u0915\u093E\u092F, \u0938\u0942\u0930\u094D\u092F\u0915\u094B\u091F\u093F \u0938\u092E\u092A\u094D\u0930\u092D: \u0964",
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
          "\u0928\u093F\u0930\u094D\u0935\u093F\u0918\u094D\u0928\u0902 \u0915\u0941\u0930\u0941\u092E\u0947 \u0926\u0947\u0935, \u0938\u0930\u094D\u0935\u0915\u093E\u0930\u094D\u092F\u0947\u0937\u0941 \u0938\u0930\u094D\u0935\u0926\u093E: \u0965"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "arch-invite", children: hi2 ? "\u0938\u094D\u0928\u0947\u0939\u0940 \u0938\u094D\u0935\u091C\u0928, \u092A\u0930\u092E\u092A\u093F\u0924\u093E \u092A\u0930\u092E\u0947\u0936\u094D\u0935\u0930 \u0915\u0940 \u0905\u0938\u0940\u092E \u0905\u0928\u0941\u0915\u092E\u094D\u092A\u093E \u0938\u0947 \u0906\u092A \u0938\u093E\u0926\u0930 \u0906\u092E\u0902\u0924\u094D\u0930\u093F\u0924 \u0939\u0948\u0902" : "With the boundless grace of the Almighty, you are warmly invited" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "divider", style: { backgroundImage: `url(${divider_lotus_default})` }, "aria-hidden": true }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("section", { className: "events", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h2", { className: "sec-title", children: hi2 ? "\u0939\u092E\u093E\u0930\u0947 \u0935\u093F\u0935\u093E\u0939 \u0915\u0947 \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E" : "Wedding Celebrations" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "cards", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "petals cards-petals", "aria-hidden": true, children: [...Array(6)].map((_2, i) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "p" + (i * 2 + 1) }, i)) }),
          events.map((e2, i) => /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("figure", { className: "card " + (i % 2 ? "tilt-r" : "tilt-l"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "art", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("img", { src: e2.img, alt: e2.en }) }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("figcaption", { className: "card-text", children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("strong", { className: "card-title", children: hi2 ? e2.hi : e2.en }),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "card-when", children: hi2 ? e2.hiWhen : e2.enWhen })
            ] })
          ] }, e2.en))
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "divider", style: { backgroundImage: `url(${divider_lotus_default})` }, "aria-hidden": true }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("section", { className: "story", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h2", { className: "story-title", children: hi2 ? "\u0935\u0930 \u090F\u0935\u0902 \u0935\u0927\u0942 \u092A\u0930\u093F\u091A\u092F" : "Meet the Bride & Groom" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "frame arch-frame", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("img", { src: story_couple_default, alt: hi2 ? "\u0936\u093F\u0935\u093E\u0928\u0940 \u0914\u0930 \u0905\u092D\u093F\u0937\u0947\u0915" : "Shivani and Abhishek" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "story-cols", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "story-col", children: [
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h3", { children: hi2 ? "\u0906\u092F\u0941\u0937\u094D\u092E\u0924\u0940 \u0936\u093F\u0935\u093E\u0928\u0940" : "Shivani" }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { children: hi2 ? "\u0938\u0941\u092A\u094C\u0924\u094D\u0930\u0940 - \u0938\u094D\u0935. \u0917\u0940\u0924\u093E \u0926\u0947\u0935\u0940 - \u0938\u094D\u0935. \u0938\u094B\u0939\u0928\u0932\u093E\u0932 \u091C\u0940 \u0938\u094B\u0928\u0917\u0930\u093E" : "Granddaughter of Late Smt. Geeta Devi - Late Shri Sohanlal Ji Songara" }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { children: hi2 ? "\u0938\u0941\u092A\u0941\u0924\u094D\u0930\u0940 - \u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0930\u093F\u0924\u093E \u0926\u0947\u0935\u0940 - \u0938\u094D\u0935. \u092A\u0935\u0928 \u0915\u0941\u092E\u093E\u0930 \u091C\u0940 \u0938\u094B\u0928\u0917\u0930\u093E" : "Daughter of Smt. Rita Devi - Late Shri Pawan Kumar Ji Songara" }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "town", children: hi2 ? "\u0928\u093F\u0935\u093E\u0938\u0940 - \u0938\u0941\u091C\u093E\u0928\u0917\u0922\u093C" : "Sujangarh" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "story-col", children: [
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h3", { children: hi2 ? "\u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928\u094D \u0905\u092D\u093F\u0937\u0947\u0915" : "Abhishek" }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { children: hi2 ? "\u0938\u0941\u092A\u094C\u0924\u094D\u0930 - \u0938\u094D\u0935. \u0917\u094B\u0926\u093E\u0935\u0930\u0940 \u0926\u0947\u0935\u0940 - \u0938\u094D\u0935. \u092A\u0941\u0916\u0930\u093E\u091C \u091C\u0940 \u0938\u094B\u0932\u0902\u0915\u0940" : "Grandson of Late Smt. Godavari Devi - Late Shri Pukhraj Ji Solanki" }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { children: hi2 ? "\u0938\u0941\u092A\u0941\u0924\u094D\u0930 - \u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0935\u093F\u092E\u0932\u093E \u0926\u0947\u0935\u0940 - \u0932\u093E\u0932\u093E\u0930\u093E\u092E \u091C\u0940 \u0938\u094B\u0932\u0902\u0915\u0940" : "Son of Smt. Vimla Devi - Shri Lalaram Ji Solanki" }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "town", children: hi2 ? "\u0928\u093F\u0935\u093E\u0938\u0940 - \u0939\u0930\u0938\u094B\u0932\u093E\u0935, \u0928\u093E\u0917\u094C\u0930 (\u0939\u093E\u0932 \u0928\u093F\u0935\u093E\u0938 \u091C\u094B\u0927\u092A\u0941\u0930)" : "Harsolav, Nagaur (currently Jodhpur)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("section", { className: "venue", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h2", { className: "sec-title", children: hi2 ? "\u0935\u0948\u0935\u093E\u0939\u093F\u0915 \u0938\u094D\u0925\u0932" : "Venue" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "venue-name", children: hi2 ? "\u0924\u0947\u0930\u093E\u092A\u0902\u0925 \u0938\u092D\u093E \u092D\u0935\u0928" : "Terapanth Sabha Bhawan" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "venue-addr", children: hi2 ? "\u0936\u093E\u0938\u094D\u0924\u094D\u0930\u0940 \u092A\u094D\u092F\u093E\u090A, \u0938\u0941\u091C\u093E\u0928\u0917\u0922\u093C (\u091A\u0942\u0930\u0942) \u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928" : "Shastri Pyau, Sujangarh (Churu), Rajasthan" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "count", role: "timer", children: [[cd2.days, hi2 ? "\u0926\u093F\u0928" : "Days"], [cd2.hours, hi2 ? "\u0918\u0902\u091F\u0947" : "Hours"], [cd2.mins, hi2 ? "\u092E\u093F\u0928\u091F" : "Mins"], [cd2.secs, hi2 ? "\u0938\u0947\u0915\u0902\u0921" : "Secs"]].map(([v, l2]) => /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "count-cell", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("strong", { children: String(v).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: l2 })
        ] }, String(l2))) }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "footer-note", children: hi2 ? "\u092A\u094D\u0930\u0947\u0937\u0915: \u0905\u091C\u092F S/o \u0938\u094D\u0935. \u092A\u0935\u0928 \u0915\u0941\u092E\u093E\u0930 \u091C\u0940 \u0938\u094B\u0928\u0917\u0930\u093E \u2022 \u092E\u094B. 7023414828, 9461160706" : "Hosted by: Ajay S/o Late Shri Pawan Kumar Ji Songara \u2022 7023414828, 9461160706" })
      ] })
    ] });
  }

  // src/main.tsx
  var import_jsx_runtime27 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime27.jsx)(FileRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(App, {}) }));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-up-right.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/copy.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
