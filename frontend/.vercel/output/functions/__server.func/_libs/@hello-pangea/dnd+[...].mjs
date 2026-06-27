import { o as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { t as _extends } from "../babel__runtime.mjs";
//#region node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, assign = Object.assign, emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	}, hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	}, Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.2.7";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.production.js
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error(formatProdErrorMessage(522));
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	}, REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
		var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: REACT_PORTAL_TYPE,
			key: null == key ? null : "" + key,
			children,
			containerInfo,
			implementation
		};
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.createPortal = function(children, container) {
		var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error(formatProdErrorMessage(299));
		return createPortal$1(children, container, null, key);
	};
	exports.flushSync = function(fn) {
		var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
		try {
			if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
		} finally {
			ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
		}
	};
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.requestFormReset = function(form) {
		Internals.d.r(form);
	};
	exports.unstable_batchedUpdates = function(fn, a) {
		return fn(a);
	};
	exports.useFormState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	exports.useFormStatus = function() {
		return ReactSharedInternals.H.useHostTransitionStatus();
	};
	exports.version = "19.2.7";
}));
//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production();
}));
//#endregion
//#region node_modules/redux/dist/redux.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
function formatProdErrorMessage(code) {
	return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var symbol_observable_default = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var actionTypes_default = {
	INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
	REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
	PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
function isPlainObject(obj) {
	if (typeof obj !== "object" || obj === null) return false;
	let proto = obj;
	while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
	return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
function createStore$1(reducer, preloadedState, enhancer) {
	if (typeof reducer !== "function") throw new Error(formatProdErrorMessage(2));
	if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error(formatProdErrorMessage(0));
	if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
		enhancer = preloadedState;
		preloadedState = void 0;
	}
	if (typeof enhancer !== "undefined") {
		if (typeof enhancer !== "function") throw new Error(formatProdErrorMessage(1));
		return enhancer(createStore$1)(reducer, preloadedState);
	}
	let currentReducer = reducer;
	let currentState = preloadedState;
	let currentListeners = /* @__PURE__ */ new Map();
	let nextListeners = currentListeners;
	let listenerIdCounter = 0;
	let isDispatching = false;
	function ensureCanMutateNextListeners() {
		if (nextListeners === currentListeners) {
			nextListeners = /* @__PURE__ */ new Map();
			currentListeners.forEach((listener, key) => {
				nextListeners.set(key, listener);
			});
		}
	}
	function getState() {
		if (isDispatching) throw new Error(formatProdErrorMessage(3));
		return currentState;
	}
	function subscribe(listener) {
		if (typeof listener !== "function") throw new Error(formatProdErrorMessage(4));
		if (isDispatching) throw new Error(formatProdErrorMessage(5));
		let isSubscribed = true;
		ensureCanMutateNextListeners();
		const listenerId = listenerIdCounter++;
		nextListeners.set(listenerId, listener);
		return function unsubscribe() {
			if (!isSubscribed) return;
			if (isDispatching) throw new Error(formatProdErrorMessage(6));
			isSubscribed = false;
			ensureCanMutateNextListeners();
			nextListeners.delete(listenerId);
			currentListeners = null;
		};
	}
	function dispatch(action) {
		if (!isPlainObject(action)) throw new Error(formatProdErrorMessage(7));
		if (typeof action.type === "undefined") throw new Error(formatProdErrorMessage(8));
		if (typeof action.type !== "string") throw new Error(formatProdErrorMessage(17));
		if (isDispatching) throw new Error(formatProdErrorMessage(9));
		try {
			isDispatching = true;
			currentState = currentReducer(currentState, action);
		} finally {
			isDispatching = false;
		}
		(currentListeners = nextListeners).forEach((listener) => {
			listener();
		});
		return action;
	}
	function replaceReducer(nextReducer) {
		if (typeof nextReducer !== "function") throw new Error(formatProdErrorMessage(10));
		currentReducer = nextReducer;
		dispatch({ type: actionTypes_default.REPLACE });
	}
	function observable() {
		const outerSubscribe = subscribe;
		return {
			/**
			* The minimal observable subscription method.
			* @param observer Any object that can be used as an observer.
			* The observer object should have a `next` method.
			* @returns An object with an `unsubscribe` method that can
			* be used to unsubscribe the observable from the store, and prevent further
			* emission of values from the observable.
			*/
			subscribe(observer) {
				if (typeof observer !== "object" || observer === null) throw new Error(formatProdErrorMessage(11));
				function observeState() {
					const observerAsObserver = observer;
					if (observerAsObserver.next) observerAsObserver.next(getState());
				}
				observeState();
				return { unsubscribe: outerSubscribe(observeState) };
			},
			[symbol_observable_default]() {
				return this;
			}
		};
	}
	dispatch({ type: actionTypes_default.INIT });
	return {
		dispatch,
		subscribe,
		getState,
		replaceReducer,
		[symbol_observable_default]: observable
	};
}
function assertReducerShape(reducers) {
	Object.keys(reducers).forEach((key) => {
		const reducer = reducers[key];
		if (typeof reducer(void 0, { type: actionTypes_default.INIT }) === "undefined") throw new Error(formatProdErrorMessage(12));
		if (typeof reducer(void 0, { type: actionTypes_default.PROBE_UNKNOWN_ACTION() }) === "undefined") throw new Error(formatProdErrorMessage(13));
	});
}
function combineReducers(reducers) {
	const reducerKeys = Object.keys(reducers);
	const finalReducers = {};
	for (let i = 0; i < reducerKeys.length; i++) {
		const key = reducerKeys[i];
		if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
	}
	const finalReducerKeys = Object.keys(finalReducers);
	let shapeAssertionError;
	try {
		assertReducerShape(finalReducers);
	} catch (e) {
		shapeAssertionError = e;
	}
	return function combination(state = {}, action) {
		if (shapeAssertionError) throw shapeAssertionError;
		let hasChanged = false;
		const nextState = {};
		for (let i = 0; i < finalReducerKeys.length; i++) {
			const key = finalReducerKeys[i];
			const reducer = finalReducers[key];
			const previousStateForKey = state[key];
			const nextStateForKey = reducer(previousStateForKey, action);
			if (typeof nextStateForKey === "undefined") {
				action && action.type;
				throw new Error(formatProdErrorMessage(14));
			}
			nextState[key] = nextStateForKey;
			hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
		}
		hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
		return hasChanged ? nextState : state;
	};
}
function bindActionCreator(actionCreator, dispatch) {
	return function(...args) {
		return dispatch(actionCreator.apply(this, args));
	};
}
function bindActionCreators$1(actionCreators, dispatch) {
	if (typeof actionCreators === "function") return bindActionCreator(actionCreators, dispatch);
	if (typeof actionCreators !== "object" || actionCreators === null) throw new Error(formatProdErrorMessage(16));
	const boundActionCreators = {};
	for (const key in actionCreators) {
		const actionCreator = actionCreators[key];
		if (typeof actionCreator === "function") boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	}
	return boundActionCreators;
}
function compose(...funcs) {
	if (funcs.length === 0) return (arg) => arg;
	if (funcs.length === 1) return funcs[0];
	return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function applyMiddleware(...middlewares) {
	return (createStore2) => (reducer, preloadedState) => {
		const store = createStore2(reducer, preloadedState);
		let dispatch = () => {
			throw new Error(formatProdErrorMessage(15));
		};
		const middlewareAPI = {
			getState: store.getState,
			dispatch: (action, ...args) => dispatch(action, ...args)
		};
		dispatch = compose(...middlewares.map((middleware) => middleware(middlewareAPI)))(store.dispatch);
		return {
			...store,
			dispatch
		};
	};
}
function isAction(action) {
	return isPlainObject(action) && "type" in action && typeof action.type === "string";
}
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.js
/**
* @license React
* use-sync-external-store-with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	React.useSyncExternalStore;
	React.useRef;
	React.useEffect;
	React.useMemo;
	React.useDebugValue;
}));
(/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_with_selector_production();
})))();
var IS_REACT_19 = /* @__PURE__ */ "19.2.7".startsWith("19");
var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for(IS_REACT_19 ? "react.transitional.element" : "react.element");
var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;
function typeOf(object) {
	if (typeof object === "object" && object !== null) {
		const { $$typeof } = object;
		switch ($$typeof) {
			case REACT_ELEMENT_TYPE: switch (object = object.type, object) {
				case REACT_FRAGMENT_TYPE:
				case REACT_PROFILER_TYPE:
				case REACT_STRICT_MODE_TYPE:
				case REACT_SUSPENSE_TYPE:
				case REACT_SUSPENSE_LIST_TYPE: return object;
				default: switch (object = object && object.$$typeof, object) {
					case REACT_CONTEXT_TYPE:
					case REACT_FORWARD_REF_TYPE:
					case REACT_LAZY_TYPE:
					case REACT_MEMO_TYPE: return object;
					case REACT_CONSUMER_TYPE: return object;
					default: return $$typeof;
				}
			}
			case REACT_PORTAL_TYPE: return $$typeof;
		}
	}
}
function isMemo(object) {
	return typeOf(object) === REACT_MEMO_TYPE;
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, { areStatesEqual, areOwnPropsEqual, areStatePropsEqual }) {
	let hasRunAtLeastOnce = false;
	let state;
	let ownProps;
	let stateProps;
	let dispatchProps;
	let mergedProps;
	function handleFirstCall(firstState, firstOwnProps) {
		state = firstState;
		ownProps = firstOwnProps;
		stateProps = mapStateToProps(state, ownProps);
		dispatchProps = mapDispatchToProps(dispatch, ownProps);
		mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
		hasRunAtLeastOnce = true;
		return mergedProps;
	}
	function handleNewPropsAndNewState() {
		stateProps = mapStateToProps(state, ownProps);
		if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
		mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
		return mergedProps;
	}
	function handleNewProps() {
		if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
		if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
		mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
		return mergedProps;
	}
	function handleNewState() {
		const nextStateProps = mapStateToProps(state, ownProps);
		const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
		stateProps = nextStateProps;
		if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
		return mergedProps;
	}
	function handleSubsequentCalls(nextState, nextOwnProps) {
		const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
		const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
		state = nextState;
		ownProps = nextOwnProps;
		if (propsChanged && stateChanged) return handleNewPropsAndNewState();
		if (propsChanged) return handleNewProps();
		if (stateChanged) return handleNewState();
		return mergedProps;
	}
	return function pureFinalPropsSelector(nextState, nextOwnProps) {
		return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	};
}
function finalPropsSelectorFactory(dispatch, { initMapStateToProps, initMapDispatchToProps, initMergeProps, ...options }) {
	return pureFinalPropsSelectorFactory(initMapStateToProps(dispatch, options), initMapDispatchToProps(dispatch, options), initMergeProps(dispatch, options), dispatch, options);
}
function bindActionCreators(actionCreators, dispatch) {
	const boundActionCreators = {};
	for (const key in actionCreators) {
		const actionCreator = actionCreators[key];
		if (typeof actionCreator === "function") boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
	}
	return boundActionCreators;
}
function wrapMapToPropsConstant(getConstant) {
	return function initConstantSelector(dispatch) {
		const constant = getConstant(dispatch);
		function constantSelector() {
			return constant;
		}
		constantSelector.dependsOnOwnProps = false;
		return constantSelector;
	};
}
function getDependsOnOwnProps(mapToProps) {
	return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
	return function initProxySelector(dispatch, { displayName }) {
		const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
			return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
		};
		proxy.dependsOnOwnProps = true;
		proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
			proxy.mapToProps = mapToProps;
			proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
			let props = proxy(stateOrDispatch, ownProps);
			if (typeof props === "function") {
				proxy.mapToProps = props;
				proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
				props = proxy(stateOrDispatch, ownProps);
			}
			return props;
		};
		return proxy;
	};
}
function createInvalidArgFactory(arg, name) {
	return (dispatch, options) => {
		throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
	};
}
function mapDispatchToPropsFactory(mapDispatchToProps) {
	return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant((dispatch) => bindActionCreators(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch) => ({ dispatch })) : typeof mapDispatchToProps === "function" ? wrapMapToPropsFunc(mapDispatchToProps, "mapDispatchToProps") : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
}
function mapStateToPropsFactory(mapStateToProps) {
	return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === "function" ? wrapMapToPropsFunc(mapStateToProps, "mapStateToProps") : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
}
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	return {
		...ownProps,
		...stateProps,
		...dispatchProps
	};
}
function wrapMergePropsFunc(mergeProps) {
	return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
		let hasRunOnce = false;
		let mergedProps;
		return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
			const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
			if (hasRunOnce) {
				if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
			} else {
				hasRunOnce = true;
				mergedProps = nextMergedProps;
			}
			return mergedProps;
		};
	};
}
function mergePropsFactory(mergeProps) {
	return !mergeProps ? () => defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
}
function defaultNoopBatch(callback) {
	callback();
}
function createListenerCollection() {
	let first = null;
	let last = null;
	return {
		clear() {
			first = null;
			last = null;
		},
		notify() {
			defaultNoopBatch(() => {
				let listener = first;
				while (listener) {
					listener.callback();
					listener = listener.next;
				}
			});
		},
		get() {
			const listeners = [];
			let listener = first;
			while (listener) {
				listeners.push(listener);
				listener = listener.next;
			}
			return listeners;
		},
		subscribe(callback) {
			let isSubscribed = true;
			const listener = last = {
				callback,
				next: null,
				prev: last
			};
			if (listener.prev) listener.prev.next = listener;
			else first = listener;
			return function unsubscribe() {
				if (!isSubscribed || first === null) return;
				isSubscribed = false;
				if (listener.next) listener.next.prev = listener.prev;
				else last = listener.prev;
				if (listener.prev) listener.prev.next = listener.next;
				else first = listener.next;
			};
		}
	};
}
var nullListeners = {
	notify() {},
	get: () => []
};
function createSubscription(store, parentSub) {
	let unsubscribe;
	let listeners = nullListeners;
	let subscriptionsAmount = 0;
	let selfSubscribed = false;
	function addNestedSub(listener) {
		trySubscribe();
		const cleanupListener = listeners.subscribe(listener);
		let removed = false;
		return () => {
			if (!removed) {
				removed = true;
				cleanupListener();
				tryUnsubscribe();
			}
		};
	}
	function notifyNestedSubs() {
		listeners.notify();
	}
	function handleChangeWrapper() {
		if (subscription.onStateChange) subscription.onStateChange();
	}
	function isSubscribed() {
		return selfSubscribed;
	}
	function trySubscribe() {
		subscriptionsAmount++;
		if (!unsubscribe) {
			unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
			listeners = createListenerCollection();
		}
	}
	function tryUnsubscribe() {
		subscriptionsAmount--;
		if (unsubscribe && subscriptionsAmount === 0) {
			unsubscribe();
			unsubscribe = void 0;
			listeners.clear();
			listeners = nullListeners;
		}
	}
	function trySubscribeSelf() {
		if (!selfSubscribed) {
			selfSubscribed = true;
			trySubscribe();
		}
	}
	function tryUnsubscribeSelf() {
		if (selfSubscribed) {
			selfSubscribed = false;
			tryUnsubscribe();
		}
	}
	const subscription = {
		addNestedSub,
		notifyNestedSubs,
		handleChangeWrapper,
		isSubscribed,
		trySubscribe: trySubscribeSelf,
		tryUnsubscribe: tryUnsubscribeSelf,
		getListeners: () => listeners
	};
	return subscription;
}
var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? import_react.useLayoutEffect : import_react.useEffect;
var useIsomorphicLayoutEffect$1 = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
function is(x, y) {
	if (x === y) return x !== 0 || y !== 0 || 1 / x === 1 / y;
	else return x !== x && y !== y;
}
function shallowEqual(objA, objB) {
	if (is(objA, objB)) return true;
	if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);
	if (keysA.length !== keysB.length) return false;
	for (let i = 0; i < keysA.length; i++) if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) return false;
	return true;
}
var REACT_STATICS = {
	childContextTypes: true,
	contextType: true,
	contextTypes: true,
	defaultProps: true,
	displayName: true,
	getDefaultProps: true,
	getDerivedStateFromError: true,
	getDerivedStateFromProps: true,
	mixins: true,
	propTypes: true,
	type: true
};
var KNOWN_STATICS = {
	name: true,
	length: true,
	prototype: true,
	caller: true,
	callee: true,
	arguments: true,
	arity: true
};
var FORWARD_REF_STATICS = {
	$$typeof: true,
	render: true,
	defaultProps: true,
	displayName: true,
	propTypes: true
};
var MEMO_STATICS = {
	$$typeof: true,
	compare: true,
	defaultProps: true,
	displayName: true,
	propTypes: true,
	type: true
};
var TYPE_STATICS = {
	[ForwardRef]: FORWARD_REF_STATICS,
	[Memo]: MEMO_STATICS
};
function getStatics(component) {
	if (isMemo(component)) return MEMO_STATICS;
	return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent) {
	if (typeof sourceComponent !== "string") {
		if (objectPrototype) {
			const inheritedComponent = getPrototypeOf(sourceComponent);
			if (inheritedComponent && inheritedComponent !== objectPrototype) hoistNonReactStatics(targetComponent, inheritedComponent);
		}
		let keys = getOwnPropertyNames(sourceComponent);
		if (getOwnPropertySymbols) keys = keys.concat(getOwnPropertySymbols(sourceComponent));
		const targetStatics = getStatics(targetComponent);
		const sourceStatics = getStatics(sourceComponent);
		for (let i = 0; i < keys.length; ++i) {
			const key = keys[i];
			if (!KNOWN_STATICS[key] && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
				const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
				try {
					defineProperty(targetComponent, key, descriptor);
				} catch (e) {}
			}
		}
	}
	return targetComponent;
}
var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : {};
function getContext() {
	if (!import_react.createContext) return {};
	const contextMap = gT[ContextKey] ??= /* @__PURE__ */ new Map();
	let realContext = contextMap.get(import_react.createContext);
	if (!realContext) {
		realContext = import_react.createContext(null);
		contextMap.set(import_react.createContext, realContext);
	}
	return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();
var NO_SUBSCRIPTION_ARRAY = [null, null];
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
	useIsomorphicLayoutEffect$1(() => effectFunc(...effectArgs), dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
	lastWrapperProps.current = wrapperProps;
	renderIsScheduled.current = false;
	if (childPropsFromStoreUpdate.current) {
		childPropsFromStoreUpdate.current = null;
		notifyNestedSubs();
	}
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
	if (!shouldHandleStateChanges) return () => {};
	let didUnsubscribe = false;
	let lastThrownError = null;
	const checkForUpdates = () => {
		if (didUnsubscribe || !isMounted.current) return;
		const latestStoreState = store.getState();
		let newChildProps, error;
		try {
			newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
		} catch (e) {
			error = e;
			lastThrownError = e;
		}
		if (!error) lastThrownError = null;
		if (newChildProps === lastChildProps.current) {
			if (!renderIsScheduled.current) notifyNestedSubs();
		} else {
			lastChildProps.current = newChildProps;
			childPropsFromStoreUpdate.current = newChildProps;
			renderIsScheduled.current = true;
			additionalSubscribeListener();
		}
	};
	subscription.onStateChange = checkForUpdates;
	subscription.trySubscribe();
	checkForUpdates();
	const unsubscribeWrapper = () => {
		didUnsubscribe = true;
		subscription.tryUnsubscribe();
		subscription.onStateChange = null;
		if (lastThrownError) throw lastThrownError;
	};
	return unsubscribeWrapper;
}
function strictEqual(a, b) {
	return a === b;
}
function _connect(mapStateToProps, mapDispatchToProps, mergeProps, { pure, areStatesEqual = strictEqual, areOwnPropsEqual = shallowEqual, areStatePropsEqual = shallowEqual, areMergedPropsEqual = shallowEqual, forwardRef = false, context = ReactReduxContext } = {}) {
	const Context = context;
	const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
	const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
	const initMergeProps = mergePropsFactory(mergeProps);
	const shouldHandleStateChanges = Boolean(mapStateToProps);
	const wrapWithConnect = (WrappedComponent) => {
		const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
		const displayName = `Connect(${wrappedComponentName})`;
		const selectorFactoryOptions = {
			shouldHandleStateChanges,
			displayName,
			wrappedComponentName,
			WrappedComponent,
			initMapStateToProps,
			initMapDispatchToProps,
			initMergeProps,
			areStatesEqual,
			areStatePropsEqual,
			areOwnPropsEqual,
			areMergedPropsEqual
		};
		function ConnectFunction(props) {
			const [propsContext, reactReduxForwardedRef, wrapperProps] = import_react.useMemo(() => {
				const { reactReduxForwardedRef: reactReduxForwardedRef2, ...wrapperProps2 } = props;
				return [
					props.context,
					reactReduxForwardedRef2,
					wrapperProps2
				];
			}, [props]);
			const ContextToUse = import_react.useMemo(() => {
				let ResultContext = Context;
				if (propsContext?.Consumer) {}
				return ResultContext;
			}, [propsContext, Context]);
			const contextValue = import_react.useContext(ContextToUse);
			const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
			const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
			const store = didStoreComeFromProps ? props.store : contextValue.store;
			const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
			const childPropsSelector = import_react.useMemo(() => {
				return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
			}, [store]);
			const [subscription, notifyNestedSubs] = import_react.useMemo(() => {
				if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
				const subscription2 = createSubscription(store, didStoreComeFromProps ? void 0 : contextValue.subscription);
				return [subscription2, subscription2.notifyNestedSubs.bind(subscription2)];
			}, [
				store,
				didStoreComeFromProps,
				contextValue
			]);
			const overriddenContextValue = import_react.useMemo(() => {
				if (didStoreComeFromProps) return contextValue;
				return {
					...contextValue,
					subscription
				};
			}, [
				didStoreComeFromProps,
				contextValue,
				subscription
			]);
			const lastChildProps = import_react.useRef(void 0);
			const lastWrapperProps = import_react.useRef(wrapperProps);
			const childPropsFromStoreUpdate = import_react.useRef(void 0);
			const renderIsScheduled = import_react.useRef(false);
			const isMounted = import_react.useRef(false);
			const latestSubscriptionCallbackError = import_react.useRef(void 0);
			useIsomorphicLayoutEffect$1(() => {
				isMounted.current = true;
				return () => {
					isMounted.current = false;
				};
			}, []);
			const actualChildPropsSelector = import_react.useMemo(() => {
				const selector = () => {
					if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) return childPropsFromStoreUpdate.current;
					return childPropsSelector(store.getState(), wrapperProps);
				};
				return selector;
			}, [store, wrapperProps]);
			const subscribeForReact = import_react.useMemo(() => {
				const subscribe = (reactListener) => {
					if (!subscription) return () => {};
					return subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
				};
				return subscribe;
			}, [subscription]);
			useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
				lastWrapperProps,
				lastChildProps,
				renderIsScheduled,
				wrapperProps,
				childPropsFromStoreUpdate,
				notifyNestedSubs
			]);
			let actualChildProps;
			try {
				actualChildProps = import_react.useSyncExternalStore(subscribeForReact, actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
			} catch (err) {
				if (latestSubscriptionCallbackError.current) err.message += `
The error may be correlated with this previous error:
${latestSubscriptionCallbackError.current.stack}

`;
				throw err;
			}
			useIsomorphicLayoutEffect$1(() => {
				latestSubscriptionCallbackError.current = void 0;
				childPropsFromStoreUpdate.current = void 0;
				lastChildProps.current = actualChildProps;
			});
			const renderedWrappedComponent = import_react.useMemo(() => {
				return /* @__PURE__ */ import_react.createElement(WrappedComponent, {
					...actualChildProps,
					ref: reactReduxForwardedRef
				});
			}, [
				reactReduxForwardedRef,
				WrappedComponent,
				actualChildProps
			]);
			return import_react.useMemo(() => {
				if (shouldHandleStateChanges) return /* @__PURE__ */ import_react.createElement(ContextToUse.Provider, { value: overriddenContextValue }, renderedWrappedComponent);
				return renderedWrappedComponent;
			}, [
				ContextToUse,
				renderedWrappedComponent,
				overriddenContextValue
			]);
		}
		const Connect = import_react.memo(ConnectFunction);
		Connect.WrappedComponent = WrappedComponent;
		Connect.displayName = ConnectFunction.displayName = displayName;
		if (forwardRef) {
			const forwarded = import_react.forwardRef(function forwardConnectRef(props, ref) {
				return /* @__PURE__ */ import_react.createElement(Connect, {
					...props,
					reactReduxForwardedRef: ref
				});
			});
			forwarded.displayName = displayName;
			forwarded.WrappedComponent = WrappedComponent;
			return /* @__PURE__ */ hoistNonReactStatics(forwarded, WrappedComponent);
		}
		return /* @__PURE__ */ hoistNonReactStatics(Connect, WrappedComponent);
	};
	return wrapWithConnect;
}
var connect = _connect;
function Provider(providerProps) {
	const { children, context, serverState, store } = providerProps;
	const contextValue = import_react.useMemo(() => {
		return {
			store,
			subscription: createSubscription(store),
			getServerState: serverState ? () => serverState : void 0
		};
	}, [store, serverState]);
	const previousState = import_react.useMemo(() => store.getState(), [store]);
	useIsomorphicLayoutEffect$1(() => {
		const { subscription } = contextValue;
		subscription.onStateChange = subscription.notifyNestedSubs;
		subscription.trySubscribe();
		if (previousState !== store.getState()) subscription.notifyNestedSubs();
		return () => {
			subscription.tryUnsubscribe();
			subscription.onStateChange = void 0;
		};
	}, [contextValue, previousState]);
	const Context = context || ReactReduxContext;
	return /* @__PURE__ */ import_react.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;
//#endregion
//#region node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var prefix$2 = "Invariant failed";
function invariant$1(condition, message) {
	if (condition) return;
	throw new Error(prefix$2);
}
//#endregion
//#region node_modules/css-box-model/dist/css-box-model.esm.js
var getRect = function getRect(_ref) {
	var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
	return {
		top,
		right,
		bottom,
		left,
		width: right - left,
		height: bottom - top,
		x: left,
		y: top,
		center: {
			x: (right + left) / 2,
			y: (bottom + top) / 2
		}
	};
};
var expand = function expand(target, expandBy) {
	return {
		top: target.top - expandBy.top,
		left: target.left - expandBy.left,
		bottom: target.bottom + expandBy.bottom,
		right: target.right + expandBy.right
	};
};
var shrink = function shrink(target, shrinkBy) {
	return {
		top: target.top + shrinkBy.top,
		left: target.left + shrinkBy.left,
		bottom: target.bottom - shrinkBy.bottom,
		right: target.right - shrinkBy.right
	};
};
var shift = function shift(target, shiftBy) {
	return {
		top: target.top + shiftBy.y,
		left: target.left + shiftBy.x,
		bottom: target.bottom + shiftBy.y,
		right: target.right + shiftBy.x
	};
};
var noSpacing$1 = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
};
var createBox = function createBox(_ref2) {
	var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing$1 : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing$1 : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing$1 : _ref2$padding;
	var marginBox = getRect(expand(borderBox, margin));
	var paddingBox = getRect(shrink(borderBox, border));
	var contentBox = getRect(shrink(paddingBox, padding));
	return {
		marginBox,
		borderBox: getRect(borderBox),
		paddingBox,
		contentBox,
		margin,
		border,
		padding
	};
};
var parse = function parse(raw) {
	var value = raw.slice(0, -2);
	if (raw.slice(-2) !== "px") return 0;
	var result = Number(value);
	isNaN(result) && invariant$1(false);
	return result;
};
var getWindowScroll$1 = function getWindowScroll() {
	return {
		x: window.pageXOffset,
		y: window.pageYOffset
	};
};
var offset = function offset(original, change) {
	var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
	return createBox({
		borderBox: shift(borderBox, change),
		border,
		margin,
		padding
	});
};
var withScroll = function withScroll(original, scroll) {
	if (scroll === void 0) scroll = getWindowScroll$1();
	return offset(original, scroll);
};
var calculateBox = function calculateBox(borderBox, styles) {
	return createBox({
		borderBox,
		margin: {
			top: parse(styles.marginTop),
			right: parse(styles.marginRight),
			bottom: parse(styles.marginBottom),
			left: parse(styles.marginLeft)
		},
		padding: {
			top: parse(styles.paddingTop),
			right: parse(styles.paddingRight),
			bottom: parse(styles.paddingBottom),
			left: parse(styles.paddingLeft)
		},
		border: {
			top: parse(styles.borderTopWidth),
			right: parse(styles.borderRightWidth),
			bottom: parse(styles.borderBottomWidth),
			left: parse(styles.borderLeftWidth)
		}
	});
};
var getBox = function getBox(el) {
	return calculateBox(el.getBoundingClientRect(), window.getComputedStyle(el));
};
//#endregion
//#region node_modules/raf-schd/dist/raf-schd.esm.js
var rafSchd = function rafSchd(fn) {
	var lastArgs = [];
	var frameId = null;
	var wrapperFn = function wrapperFn() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		lastArgs = args;
		if (frameId) return;
		frameId = requestAnimationFrame(function() {
			frameId = null;
			fn.apply(void 0, lastArgs);
		});
	};
	wrapperFn.cancel = function() {
		if (!frameId) return;
		cancelAnimationFrame(frameId);
		frameId = null;
	};
	return wrapperFn;
};
//#endregion
//#region node_modules/@hello-pangea/dnd/dist/dnd.esm.js
function log(type, message) {}
log.bind(null, "warn");
log.bind(null, "error");
function noop$2() {}
function getOptions(shared, fromBinding) {
	return {
		...shared,
		...fromBinding
	};
}
function bindEvents(el, bindings, sharedOptions) {
	const unbindings = bindings.map((binding) => {
		const options = getOptions(sharedOptions, binding.options);
		el.addEventListener(binding.eventName, binding.fn, options);
		return function unbind() {
			el.removeEventListener(binding.eventName, binding.fn, options);
		};
	});
	return function unbindAll() {
		unbindings.forEach((unbind) => {
			unbind();
		});
	};
}
var prefix$1 = "Invariant failed";
var RbdInvariant = class extends Error {};
RbdInvariant.prototype.toString = function toString() {
	return this.message;
};
function invariant(condition, message) {
	throw new RbdInvariant(prefix$1);
}
var ErrorBoundary = class extends import_react.Component {
	constructor(...args) {
		super(...args);
		this.callbacks = null;
		this.unbind = noop$2;
		this.onWindowError = (event) => {
			const callbacks = this.getCallbacks();
			if (callbacks.isDragging()) callbacks.tryAbort();
			if (event.error instanceof RbdInvariant) event.preventDefault();
		};
		this.getCallbacks = () => {
			if (!this.callbacks) throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
			return this.callbacks;
		};
		this.setCallbacks = (callbacks) => {
			this.callbacks = callbacks;
		};
	}
	componentDidMount() {
		this.unbind = bindEvents(window, [{
			eventName: "error",
			fn: this.onWindowError
		}]);
	}
	componentDidCatch(err) {
		if (err instanceof RbdInvariant) {
			this.setState({});
			return;
		}
		throw err;
	}
	componentWillUnmount() {
		this.unbind();
	}
	render() {
		return this.props.children(this.setCallbacks);
	}
};
var dragHandleUsageInstructions = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`;
var position = (index) => index + 1;
var onDragStart = (start) => `
  You have lifted an item in position ${position(start.source.index)}
`;
var withLocation = (source, destination) => {
	const isInHomeList = source.droppableId === destination.droppableId;
	const startPosition = position(source.index);
	const endPosition = position(destination.index);
	if (isInHomeList) return `
      You have moved the item from position ${startPosition}
      to position ${endPosition}
    `;
	return `
    You have moved the item from position ${startPosition}
    in list ${source.droppableId}
    to list ${destination.droppableId}
    in position ${endPosition}
  `;
};
var withCombine = (id, source, combine) => {
	if (source.droppableId === combine.droppableId) return `
      The item ${id}
      has been combined with ${combine.draggableId}`;
	return `
      The item ${id}
      in list ${source.droppableId}
      has been combined with ${combine.draggableId}
      in list ${combine.droppableId}
    `;
};
var onDragUpdate = (update) => {
	const location = update.destination;
	if (location) return withLocation(update.source, location);
	const combine = update.combine;
	if (combine) return withCombine(update.draggableId, update.source, combine);
	return "You are over an area that cannot be dropped on";
};
var returnedToStart = (source) => `
  The item has returned to its starting position
  of ${position(source.index)}
`;
var onDragEnd = (result) => {
	if (result.reason === "CANCEL") return `
      Movement cancelled.
      ${returnedToStart(result.source)}
    `;
	const location = result.destination;
	const combine = result.combine;
	if (location) return `
      You have dropped the item.
      ${withLocation(result.source, location)}
    `;
	if (combine) return `
      You have dropped the item.
      ${withCombine(result.draggableId, result.source, combine)}
    `;
	return `
    The item has been dropped while not over a drop area.
    ${returnedToStart(result.source)}
  `;
};
var preset = {
	dragHandleUsageInstructions,
	onDragStart,
	onDragUpdate,
	onDragEnd
};
function isEqual$2(first, second) {
	if (first === second) return true;
	if (Number.isNaN(first) && Number.isNaN(second)) return true;
	return false;
}
function areInputsEqual(newInputs, lastInputs) {
	if (newInputs.length !== lastInputs.length) return false;
	for (let i = 0; i < newInputs.length; i++) if (!isEqual$2(newInputs[i], lastInputs[i])) return false;
	return true;
}
function useMemo(getResult, inputs) {
	const initial = (0, import_react.useState)(() => ({
		inputs,
		result: getResult()
	}))[0];
	const isFirstRun = (0, import_react.useRef)(true);
	const committed = (0, import_react.useRef)(initial);
	const cache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs)) ? committed.current : {
		inputs,
		result: getResult()
	};
	(0, import_react.useEffect)(() => {
		isFirstRun.current = false;
		committed.current = cache;
	}, [cache]);
	return cache.result;
}
function useCallback(callback, inputs) {
	return useMemo(() => callback, inputs);
}
var origin = {
	x: 0,
	y: 0
};
var add = (point1, point2) => ({
	x: point1.x + point2.x,
	y: point1.y + point2.y
});
var subtract = (point1, point2) => ({
	x: point1.x - point2.x,
	y: point1.y - point2.y
});
var isEqual$1 = (point1, point2) => point1.x === point2.x && point1.y === point2.y;
var negate = (point) => ({
	x: point.x !== 0 ? -point.x : 0,
	y: point.y !== 0 ? -point.y : 0
});
var patch = (line, value, otherValue = 0) => {
	if (line === "x") return {
		x: value,
		y: otherValue
	};
	return {
		x: otherValue,
		y: value
	};
};
var distance = (point1, point2) => Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
var closest$1 = (target, points) => Math.min(...points.map((point) => distance(target, point)));
var apply = (fn) => (point) => ({
	x: fn(point.x),
	y: fn(point.y)
});
var executeClip = (frame, subject) => {
	const result = getRect({
		top: Math.max(subject.top, frame.top),
		right: Math.min(subject.right, frame.right),
		bottom: Math.min(subject.bottom, frame.bottom),
		left: Math.max(subject.left, frame.left)
	});
	if (result.width <= 0 || result.height <= 0) return null;
	return result;
};
var offsetByPosition = (spacing, point) => ({
	top: spacing.top + point.y,
	left: spacing.left + point.x,
	bottom: spacing.bottom + point.y,
	right: spacing.right + point.x
});
var getCorners = (spacing) => [
	{
		x: spacing.left,
		y: spacing.top
	},
	{
		x: spacing.right,
		y: spacing.top
	},
	{
		x: spacing.left,
		y: spacing.bottom
	},
	{
		x: spacing.right,
		y: spacing.bottom
	}
];
var noSpacing = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
};
var scroll$1 = (target, frame) => {
	if (!frame) return target;
	return offsetByPosition(target, frame.scroll.diff.displacement);
};
var increase = (target, axis, withPlaceholder) => {
	if (withPlaceholder && withPlaceholder.increasedBy) return {
		...target,
		[axis.end]: target[axis.end] + withPlaceholder.increasedBy[axis.line]
	};
	return target;
};
var clip = (target, frame) => {
	if (frame && frame.shouldClipSubject) return executeClip(frame.pageMarginBox, target);
	return getRect(target);
};
var getSubject = ({ page, withPlaceholder, axis, frame }) => {
	return {
		page,
		withPlaceholder,
		active: clip(increase(scroll$1(page.marginBox, frame), axis, withPlaceholder), frame)
	};
};
var scrollDroppable = (droppable, newScroll) => {
	!droppable.frame && invariant();
	const scrollable = droppable.frame;
	const scrollDiff = subtract(newScroll, scrollable.scroll.initial);
	const scrollDisplacement = negate(scrollDiff);
	const frame = {
		...scrollable,
		scroll: {
			initial: scrollable.scroll.initial,
			current: newScroll,
			diff: {
				value: scrollDiff,
				displacement: scrollDisplacement
			},
			max: scrollable.scroll.max
		}
	};
	const subject = getSubject({
		page: droppable.subject.page,
		withPlaceholder: droppable.subject.withPlaceholder,
		axis: droppable.axis,
		frame
	});
	return {
		...droppable,
		frame,
		subject
	};
};
function memoizeOne(resultFn, isEqual = areInputsEqual) {
	let cache = null;
	function memoized(...newArgs) {
		if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) return cache.lastResult;
		const lastResult = resultFn.apply(this, newArgs);
		cache = {
			lastResult,
			lastArgs: newArgs,
			lastThis: this
		};
		return lastResult;
	}
	memoized.clear = function clear() {
		cache = null;
	};
	return memoized;
}
var toDroppableMap = memoizeOne((droppables) => droppables.reduce((previous, current) => {
	previous[current.descriptor.id] = current;
	return previous;
}, {}));
var toDraggableMap = memoizeOne((draggables) => draggables.reduce((previous, current) => {
	previous[current.descriptor.id] = current;
	return previous;
}, {}));
var toDroppableList = memoizeOne((droppables) => Object.values(droppables));
var toDraggableList = memoizeOne((draggables) => Object.values(draggables));
var getDraggablesInsideDroppable = memoizeOne((droppableId, draggables) => {
	return toDraggableList(draggables).filter((draggable) => droppableId === draggable.descriptor.droppableId).sort((a, b) => a.descriptor.index - b.descriptor.index);
});
function tryGetDestination(impact) {
	if (impact.at && impact.at.type === "REORDER") return impact.at.destination;
	return null;
}
function tryGetCombine(impact) {
	if (impact.at && impact.at.type === "COMBINE") return impact.at.combine;
	return null;
}
var removeDraggableFromList = memoizeOne((remove, list) => list.filter((item) => item.descriptor.id !== remove.descriptor.id));
var moveToNextCombine = ({ isMovingForward, draggable, destination, insideDestination, previousImpact }) => {
	if (!destination.isCombineEnabled) return null;
	if (!tryGetDestination(previousImpact)) return null;
	function getImpact(target) {
		const at = {
			type: "COMBINE",
			combine: {
				draggableId: target,
				droppableId: destination.descriptor.id
			}
		};
		return {
			...previousImpact,
			at
		};
	}
	const all = previousImpact.displaced.all;
	const closestId = all.length ? all[0] : null;
	if (isMovingForward) return closestId ? getImpact(closestId) : null;
	const withoutDraggable = removeDraggableFromList(draggable, insideDestination);
	if (!closestId) {
		if (!withoutDraggable.length) return null;
		const last = withoutDraggable[withoutDraggable.length - 1];
		return getImpact(last.descriptor.id);
	}
	const indexOfClosest = withoutDraggable.findIndex((d) => d.descriptor.id === closestId);
	!(indexOfClosest !== -1) && invariant();
	const proposedIndex = indexOfClosest - 1;
	if (proposedIndex < 0) return null;
	const before = withoutDraggable[proposedIndex];
	return getImpact(before.descriptor.id);
};
var isHomeOf = (draggable, destination) => draggable.descriptor.droppableId === destination.descriptor.id;
var noDisplacedBy = {
	point: origin,
	value: 0
};
var emptyGroups = {
	invisible: {},
	visible: {},
	all: []
};
var noImpact = {
	displaced: emptyGroups,
	displacedBy: noDisplacedBy,
	at: null
};
var isWithin = (lowerBound, upperBound) => (value) => lowerBound <= value && value <= upperBound;
var isPartiallyVisibleThroughFrame = (frame) => {
	const isWithinVertical = isWithin(frame.top, frame.bottom);
	const isWithinHorizontal = isWithin(frame.left, frame.right);
	return (subject) => {
		if (isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right)) return true;
		const isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
		const isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
		if (isPartiallyVisibleVertically && isPartiallyVisibleHorizontally) return true;
		const isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
		const isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
		if (isBiggerVertically && isBiggerHorizontally) return true;
		return isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
	};
};
var isTotallyVisibleThroughFrame = (frame) => {
	const isWithinVertical = isWithin(frame.top, frame.bottom);
	const isWithinHorizontal = isWithin(frame.left, frame.right);
	return (subject) => {
		return isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
	};
};
var vertical = {
	direction: "vertical",
	line: "y",
	crossAxisLine: "x",
	start: "top",
	end: "bottom",
	size: "height",
	crossAxisStart: "left",
	crossAxisEnd: "right",
	crossAxisSize: "width"
};
var horizontal = {
	direction: "horizontal",
	line: "x",
	crossAxisLine: "y",
	start: "left",
	end: "right",
	size: "width",
	crossAxisStart: "top",
	crossAxisEnd: "bottom",
	crossAxisSize: "height"
};
var isTotallyVisibleThroughFrameOnAxis = (axis) => (frame) => {
	const isWithinVertical = isWithin(frame.top, frame.bottom);
	const isWithinHorizontal = isWithin(frame.left, frame.right);
	return (subject) => {
		if (axis === vertical) return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
		return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
	};
};
var getDroppableDisplaced = (target, destination) => {
	return offsetByPosition(target, destination.frame ? destination.frame.scroll.diff.displacement : origin);
};
var isVisibleInDroppable = (target, destination, isVisibleThroughFrameFn) => {
	if (!destination.subject.active) return false;
	return isVisibleThroughFrameFn(destination.subject.active)(target);
};
var isVisibleInViewport = (target, viewport, isVisibleThroughFrameFn) => isVisibleThroughFrameFn(viewport)(target);
var isVisible$1 = ({ target: toBeDisplaced, destination, viewport, withDroppableDisplacement, isVisibleThroughFrameFn }) => {
	const displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
	return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};
var isPartiallyVisible = (args) => isVisible$1({
	...args,
	isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
});
var isTotallyVisible = (args) => isVisible$1({
	...args,
	isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
});
var isTotallyVisibleOnAxis = (args) => isVisible$1({
	...args,
	isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
});
var getShouldAnimate = (id, last, forceShouldAnimate) => {
	if (typeof forceShouldAnimate === "boolean") return forceShouldAnimate;
	if (!last) return true;
	const { invisible, visible } = last;
	if (invisible[id]) return false;
	const previous = visible[id];
	return previous ? previous.shouldAnimate : true;
};
function getTarget(draggable, displacedBy) {
	const marginBox = draggable.page.marginBox;
	return getRect(expand(marginBox, {
		top: displacedBy.point.y,
		right: 0,
		bottom: 0,
		left: displacedBy.point.x
	}));
}
function getDisplacementGroups({ afterDragging, destination, displacedBy, viewport, forceShouldAnimate, last }) {
	return afterDragging.reduce(function process(groups, draggable) {
		const target = getTarget(draggable, displacedBy);
		const id = draggable.descriptor.id;
		groups.all.push(id);
		if (!isPartiallyVisible({
			target,
			destination,
			viewport,
			withDroppableDisplacement: true
		})) {
			groups.invisible[draggable.descriptor.id] = true;
			return groups;
		}
		const displacement = {
			draggableId: id,
			shouldAnimate: getShouldAnimate(id, last, forceShouldAnimate)
		};
		groups.visible[id] = displacement;
		return groups;
	}, {
		all: [],
		visible: {},
		invisible: {}
	});
}
function getIndexOfLastItem(draggables, options) {
	if (!draggables.length) return 0;
	const indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
	return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}
function goAtEnd({ insideDestination, inHomeList, displacedBy, destination }) {
	const newIndex = getIndexOfLastItem(insideDestination, { inHomeList });
	return {
		displaced: emptyGroups,
		displacedBy,
		at: {
			type: "REORDER",
			destination: {
				droppableId: destination.descriptor.id,
				index: newIndex
			}
		}
	};
}
function calculateReorderImpact({ draggable, insideDestination, destination, viewport, displacedBy, last, index, forceShouldAnimate }) {
	const inHomeList = isHomeOf(draggable, destination);
	if (index == null) return goAtEnd({
		insideDestination,
		inHomeList,
		displacedBy,
		destination
	});
	const match = insideDestination.find((item) => item.descriptor.index === index);
	if (!match) return goAtEnd({
		insideDestination,
		inHomeList,
		displacedBy,
		destination
	});
	const withoutDragging = removeDraggableFromList(draggable, insideDestination);
	const sliceFrom = insideDestination.indexOf(match);
	return {
		displaced: getDisplacementGroups({
			afterDragging: withoutDragging.slice(sliceFrom),
			destination,
			displacedBy,
			last,
			viewport: viewport.frame,
			forceShouldAnimate
		}),
		displacedBy,
		at: {
			type: "REORDER",
			destination: {
				droppableId: destination.descriptor.id,
				index
			}
		}
	};
}
function didStartAfterCritical(draggableId, afterCritical) {
	return Boolean(afterCritical.effected[draggableId]);
}
var fromCombine = ({ isMovingForward, destination, draggables, combine, afterCritical }) => {
	if (!destination.isCombineEnabled) return null;
	const combineId = combine.draggableId;
	const combineWithIndex = draggables[combineId].descriptor.index;
	if (didStartAfterCritical(combineId, afterCritical)) {
		if (isMovingForward) return combineWithIndex;
		return combineWithIndex - 1;
	}
	if (isMovingForward) return combineWithIndex + 1;
	return combineWithIndex;
};
var fromReorder = ({ isMovingForward, isInHomeList, insideDestination, location }) => {
	if (!insideDestination.length) return null;
	const currentIndex = location.index;
	const proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
	const firstIndex = insideDestination[0].descriptor.index;
	const lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
	const upperBound = isInHomeList ? lastIndex : lastIndex + 1;
	if (proposedIndex < firstIndex) return null;
	if (proposedIndex > upperBound) return null;
	return proposedIndex;
};
var moveToNextIndex = ({ isMovingForward, isInHomeList, draggable, draggables, destination, insideDestination, previousImpact, viewport, afterCritical }) => {
	const wasAt = previousImpact.at;
	!wasAt && invariant();
	if (wasAt.type === "REORDER") {
		const newIndex = fromReorder({
			isMovingForward,
			isInHomeList,
			location: wasAt.destination,
			insideDestination
		});
		if (newIndex == null) return null;
		return calculateReorderImpact({
			draggable,
			insideDestination,
			destination,
			viewport,
			last: previousImpact.displaced,
			displacedBy: previousImpact.displacedBy,
			index: newIndex
		});
	}
	const newIndex = fromCombine({
		isMovingForward,
		destination,
		displaced: previousImpact.displaced,
		draggables,
		combine: wasAt.combine,
		afterCritical
	});
	if (newIndex == null) return null;
	return calculateReorderImpact({
		draggable,
		insideDestination,
		destination,
		viewport,
		last: previousImpact.displaced,
		displacedBy: previousImpact.displacedBy,
		index: newIndex
	});
};
var getCombinedItemDisplacement = ({ displaced, afterCritical, combineWith, displacedBy }) => {
	const isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);
	if (didStartAfterCritical(combineWith, afterCritical)) return isDisplaced ? origin : negate(displacedBy.point);
	return isDisplaced ? displacedBy.point : origin;
};
var whenCombining = ({ afterCritical, impact, draggables }) => {
	const combine = tryGetCombine(impact);
	!combine && invariant();
	const combineWith = combine.draggableId;
	const center = draggables[combineWith].page.borderBox.center;
	return add(center, getCombinedItemDisplacement({
		displaced: impact.displaced,
		afterCritical,
		combineWith,
		displacedBy: impact.displacedBy
	}));
};
var distanceFromStartToBorderBoxCenter = (axis, box) => box.margin[axis.start] + box.borderBox[axis.size] / 2;
var distanceFromEndToBorderBoxCenter = (axis, box) => box.margin[axis.end] + box.borderBox[axis.size] / 2;
var getCrossAxisBorderBoxCenter = (axis, target, isMoving) => target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
var goAfter = ({ axis, moveRelativeTo, isMoving }) => patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
var goBefore = ({ axis, moveRelativeTo, isMoving }) => patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
var goIntoStart = ({ axis, moveInto, isMoving }) => patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
var whenReordering = ({ impact, draggable, draggables, droppable, afterCritical }) => {
	const insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
	const draggablePage = draggable.page;
	const axis = droppable.axis;
	if (!insideDestination.length) return goIntoStart({
		axis,
		moveInto: droppable.page,
		isMoving: draggablePage
	});
	const { displaced, displacedBy } = impact;
	const closestAfter = displaced.all[0];
	if (closestAfter) {
		const closest = draggables[closestAfter];
		if (didStartAfterCritical(closestAfter, afterCritical)) return goBefore({
			axis,
			moveRelativeTo: closest.page,
			isMoving: draggablePage
		});
		return goBefore({
			axis,
			moveRelativeTo: offset(closest.page, displacedBy.point),
			isMoving: draggablePage
		});
	}
	const last = insideDestination[insideDestination.length - 1];
	if (last.descriptor.id === draggable.descriptor.id) return draggablePage.borderBox.center;
	if (didStartAfterCritical(last.descriptor.id, afterCritical)) return goAfter({
		axis,
		moveRelativeTo: offset(last.page, negate(afterCritical.displacedBy.point)),
		isMoving: draggablePage
	});
	return goAfter({
		axis,
		moveRelativeTo: last.page,
		isMoving: draggablePage
	});
};
var withDroppableDisplacement = (droppable, point) => {
	const frame = droppable.frame;
	if (!frame) return point;
	return add(point, frame.scroll.diff.displacement);
};
var getResultWithoutDroppableDisplacement = ({ impact, draggable, droppable, draggables, afterCritical }) => {
	const original = draggable.page.borderBox.center;
	const at = impact.at;
	if (!droppable) return original;
	if (!at) return original;
	if (at.type === "REORDER") return whenReordering({
		impact,
		draggable,
		draggables,
		droppable,
		afterCritical
	});
	return whenCombining({
		impact,
		draggables,
		afterCritical
	});
};
var getPageBorderBoxCenterFromImpact = (args) => {
	const withoutDisplacement = getResultWithoutDroppableDisplacement(args);
	const droppable = args.droppable;
	return droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
};
var scrollViewport = (viewport, newScroll) => {
	const diff = subtract(newScroll, viewport.scroll.initial);
	const displacement = negate(diff);
	return {
		frame: getRect({
			top: newScroll.y,
			bottom: newScroll.y + viewport.frame.height,
			left: newScroll.x,
			right: newScroll.x + viewport.frame.width
		}),
		scroll: {
			initial: viewport.scroll.initial,
			max: viewport.scroll.max,
			current: newScroll,
			diff: {
				value: diff,
				displacement
			}
		}
	};
};
function getDraggables$1(ids, draggables) {
	return ids.map((id) => draggables[id]);
}
function tryGetVisible(id, groups) {
	for (let i = 0; i < groups.length; i++) {
		const displacement = groups[i].visible[id];
		if (displacement) return displacement;
	}
	return null;
}
var speculativelyIncrease = ({ impact, viewport, destination, draggables, maxScrollChange }) => {
	const scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
	const scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
	const last = impact.displaced;
	const withViewportScroll = getDisplacementGroups({
		afterDragging: getDraggables$1(last.all, draggables),
		destination,
		displacedBy: impact.displacedBy,
		viewport: scrolledViewport.frame,
		last,
		forceShouldAnimate: false
	});
	const withDroppableScroll = getDisplacementGroups({
		afterDragging: getDraggables$1(last.all, draggables),
		destination: scrolledDroppable,
		displacedBy: impact.displacedBy,
		viewport: viewport.frame,
		last,
		forceShouldAnimate: false
	});
	const invisible = {};
	const visible = {};
	const groups = [
		last,
		withViewportScroll,
		withDroppableScroll
	];
	last.all.forEach((id) => {
		const displacement = tryGetVisible(id, groups);
		if (displacement) {
			visible[id] = displacement;
			return;
		}
		invisible[id] = true;
	});
	return {
		...impact,
		displaced: {
			all: last.all,
			invisible,
			visible
		}
	};
};
var withViewportDisplacement = (viewport, point) => add(viewport.scroll.diff.displacement, point);
var getClientFromPageBorderBoxCenter = ({ pageBorderBoxCenter, draggable, viewport }) => {
	const offset = subtract(withViewportDisplacement(viewport, pageBorderBoxCenter), draggable.page.borderBox.center);
	return add(draggable.client.borderBox.center, offset);
};
var isTotallyVisibleInNewLocation = ({ draggable, destination, newPageBorderBoxCenter, viewport, withDroppableDisplacement, onlyOnMainAxis = false }) => {
	const changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
	const args = {
		target: offsetByPosition(draggable.page.borderBox, changeNeeded),
		destination,
		withDroppableDisplacement,
		viewport
	};
	return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
};
var moveToNextPlace = ({ isMovingForward, draggable, destination, draggables, previousImpact, viewport, previousPageBorderBoxCenter, previousClientSelection, afterCritical }) => {
	if (!destination.isEnabled) return null;
	const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	const isInHomeList = isHomeOf(draggable, destination);
	const impact = moveToNextCombine({
		isMovingForward,
		draggable,
		destination,
		insideDestination,
		previousImpact
	}) || moveToNextIndex({
		isMovingForward,
		isInHomeList,
		draggable,
		draggables,
		destination,
		insideDestination,
		previousImpact,
		viewport,
		afterCritical
	});
	if (!impact) return null;
	const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
		impact,
		draggable,
		droppable: destination,
		draggables,
		afterCritical
	});
	if (isTotallyVisibleInNewLocation({
		draggable,
		destination,
		newPageBorderBoxCenter: pageBorderBoxCenter,
		viewport: viewport.frame,
		withDroppableDisplacement: false,
		onlyOnMainAxis: true
	})) return {
		clientSelection: getClientFromPageBorderBoxCenter({
			pageBorderBoxCenter,
			draggable,
			viewport
		}),
		impact,
		scrollJumpRequest: null
	};
	const distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
	return {
		clientSelection: previousClientSelection,
		impact: speculativelyIncrease({
			impact,
			viewport,
			destination,
			draggables,
			maxScrollChange: distance
		}),
		scrollJumpRequest: distance
	};
};
var getKnownActive = (droppable) => {
	const rect = droppable.subject.active;
	!rect && invariant();
	return rect;
};
var getBestCrossAxisDroppable = ({ isMovingForward, pageBorderBoxCenter, source, droppables, viewport }) => {
	const active = source.subject.active;
	if (!active) return null;
	const axis = source.axis;
	const isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
	const candidates = toDroppableList(droppables).filter((droppable) => droppable !== source).filter((droppable) => droppable.isEnabled).filter((droppable) => Boolean(droppable.subject.active)).filter((droppable) => isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable))).filter((droppable) => {
		const activeOfTarget = getKnownActive(droppable);
		if (isMovingForward) return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
		return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
	}).filter((droppable) => {
		const activeOfTarget = getKnownActive(droppable);
		const isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
		return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
	}).sort((a, b) => {
		const first = getKnownActive(a)[axis.crossAxisStart];
		const second = getKnownActive(b)[axis.crossAxisStart];
		if (isMovingForward) return first - second;
		return second - first;
	}).filter((droppable, index, array) => getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart]);
	if (!candidates.length) return null;
	if (candidates.length === 1) return candidates[0];
	const contains = candidates.filter((droppable) => {
		return isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end])(pageBorderBoxCenter[axis.line]);
	});
	if (contains.length === 1) return contains[0];
	if (contains.length > 1) return contains.sort((a, b) => getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start])[0];
	return candidates.sort((a, b) => {
		const first = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(a)));
		const second = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(b)));
		if (first !== second) return first - second;
		return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
	})[0];
};
var getCurrentPageBorderBoxCenter = (draggable, afterCritical) => {
	const original = draggable.page.borderBox.center;
	return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
var getCurrentPageBorderBox = (draggable, afterCritical) => {
	const original = draggable.page.borderBox;
	return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};
var getClosestDraggable = ({ pageBorderBoxCenter, viewport, destination, insideDestination, afterCritical }) => {
	return insideDestination.filter((draggable) => isTotallyVisible({
		target: getCurrentPageBorderBox(draggable, afterCritical),
		destination,
		viewport: viewport.frame,
		withDroppableDisplacement: true
	})).sort((a, b) => {
		const distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
		const distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));
		if (distanceToA < distanceToB) return -1;
		if (distanceToB < distanceToA) return 1;
		return a.descriptor.index - b.descriptor.index;
	})[0] || null;
};
var getDisplacedBy = memoizeOne(function getDisplacedBy(axis, displaceBy) {
	const displacement = displaceBy[axis.line];
	return {
		value: displacement,
		point: patch(axis.line, displacement)
	};
});
var getRequiredGrowthForPlaceholder = (droppable, placeholderSize, draggables) => {
	const axis = droppable.axis;
	if (droppable.descriptor.mode === "virtual") return patch(axis.line, placeholderSize[axis.line]);
	const availableSpace = droppable.subject.page.contentBox[axis.size];
	const needsToGrowBy = getDraggablesInsideDroppable(droppable.descriptor.id, draggables).reduce((sum, dimension) => sum + dimension.client.marginBox[axis.size], 0) + placeholderSize[axis.line] - availableSpace;
	if (needsToGrowBy <= 0) return null;
	return patch(axis.line, needsToGrowBy);
};
var withMaxScroll = (frame, max) => ({
	...frame,
	scroll: {
		...frame.scroll,
		max
	}
});
var addPlaceholder = (droppable, draggable, draggables) => {
	const frame = droppable.frame;
	isHomeOf(draggable, droppable) && invariant();
	droppable.subject.withPlaceholder && invariant();
	const placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
	const requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
	const added = {
		placeholderSize,
		increasedBy: requiredGrowth,
		oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
	};
	if (!frame) {
		const subject = getSubject({
			page: droppable.subject.page,
			withPlaceholder: added,
			axis: droppable.axis,
			frame: droppable.frame
		});
		return {
			...droppable,
			subject
		};
	}
	const newFrame = withMaxScroll(frame, requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max);
	const subject = getSubject({
		page: droppable.subject.page,
		withPlaceholder: added,
		axis: droppable.axis,
		frame: newFrame
	});
	return {
		...droppable,
		subject,
		frame: newFrame
	};
};
var removePlaceholder = (droppable) => {
	const added = droppable.subject.withPlaceholder;
	!added && invariant();
	const frame = droppable.frame;
	if (!frame) {
		const subject = getSubject({
			page: droppable.subject.page,
			axis: droppable.axis,
			frame: null,
			withPlaceholder: null
		});
		return {
			...droppable,
			subject
		};
	}
	const oldMaxScroll = added.oldFrameMaxScroll;
	!oldMaxScroll && invariant();
	const newFrame = withMaxScroll(frame, oldMaxScroll);
	const subject = getSubject({
		page: droppable.subject.page,
		axis: droppable.axis,
		frame: newFrame,
		withPlaceholder: null
	});
	return {
		...droppable,
		subject,
		frame: newFrame
	};
};
var moveToNewDroppable = ({ previousPageBorderBoxCenter, moveRelativeTo, insideDestination, draggable, draggables, destination, viewport, afterCritical }) => {
	if (!moveRelativeTo) {
		if (insideDestination.length) return null;
		const proposed = {
			displaced: emptyGroups,
			displacedBy: noDisplacedBy,
			at: {
				type: "REORDER",
				destination: {
					droppableId: destination.descriptor.id,
					index: 0
				}
			}
		};
		const proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
			impact: proposed,
			draggable,
			droppable: destination,
			draggables,
			afterCritical
		});
		return isTotallyVisibleInNewLocation({
			draggable,
			destination: isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables),
			newPageBorderBoxCenter: proposedPageBorderBoxCenter,
			viewport: viewport.frame,
			withDroppableDisplacement: false,
			onlyOnMainAxis: true
		}) ? proposed : null;
	}
	const isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);
	const proposedIndex = (() => {
		const relativeTo = moveRelativeTo.descriptor.index;
		if (moveRelativeTo.descriptor.id === draggable.descriptor.id) return relativeTo;
		if (isGoingBeforeTarget) return relativeTo;
		return relativeTo + 1;
	})();
	return calculateReorderImpact({
		draggable,
		insideDestination,
		destination,
		viewport,
		displacedBy: getDisplacedBy(destination.axis, draggable.displaceBy),
		last: emptyGroups,
		index: proposedIndex
	});
};
var moveCrossAxis = ({ isMovingForward, previousPageBorderBoxCenter, draggable, isOver, draggables, droppables, viewport, afterCritical }) => {
	const destination = getBestCrossAxisDroppable({
		isMovingForward,
		pageBorderBoxCenter: previousPageBorderBoxCenter,
		source: isOver,
		droppables,
		viewport
	});
	if (!destination) return null;
	const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	const impact = moveToNewDroppable({
		previousPageBorderBoxCenter,
		destination,
		draggable,
		draggables,
		moveRelativeTo: getClosestDraggable({
			pageBorderBoxCenter: previousPageBorderBoxCenter,
			viewport,
			destination,
			insideDestination,
			afterCritical
		}),
		insideDestination,
		viewport,
		afterCritical
	});
	if (!impact) return null;
	return {
		clientSelection: getClientFromPageBorderBoxCenter({
			pageBorderBoxCenter: getPageBorderBoxCenterFromImpact({
				impact,
				draggable,
				droppable: destination,
				draggables,
				afterCritical
			}),
			draggable,
			viewport
		}),
		impact,
		scrollJumpRequest: null
	};
};
var whatIsDraggedOver = (impact) => {
	const at = impact.at;
	if (!at) return null;
	if (at.type === "REORDER") return at.destination.droppableId;
	return at.combine.droppableId;
};
var getDroppableOver$1 = (impact, droppables) => {
	const id = whatIsDraggedOver(impact);
	return id ? droppables[id] : null;
};
var moveInDirection = ({ state, type }) => {
	const isActuallyOver = getDroppableOver$1(state.impact, state.dimensions.droppables);
	const isMainAxisMovementAllowed = Boolean(isActuallyOver);
	const home = state.dimensions.droppables[state.critical.droppable.id];
	const isOver = isActuallyOver || home;
	const direction = isOver.axis.direction;
	const isMovingOnMainAxis = direction === "vertical" && (type === "MOVE_UP" || type === "MOVE_DOWN") || direction === "horizontal" && (type === "MOVE_LEFT" || type === "MOVE_RIGHT");
	if (isMovingOnMainAxis && !isMainAxisMovementAllowed) return null;
	const isMovingForward = type === "MOVE_DOWN" || type === "MOVE_RIGHT";
	const draggable = state.dimensions.draggables[state.critical.draggable.id];
	const previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
	const { draggables, droppables } = state.dimensions;
	return isMovingOnMainAxis ? moveToNextPlace({
		isMovingForward,
		previousPageBorderBoxCenter,
		draggable,
		destination: isOver,
		draggables,
		viewport: state.viewport,
		previousClientSelection: state.current.client.selection,
		previousImpact: state.impact,
		afterCritical: state.afterCritical
	}) : moveCrossAxis({
		isMovingForward,
		previousPageBorderBoxCenter,
		draggable,
		isOver,
		draggables,
		droppables,
		viewport: state.viewport,
		afterCritical: state.afterCritical
	});
};
function isMovementAllowed(state) {
	return state.phase === "DRAGGING" || state.phase === "COLLECTING";
}
function isPositionInFrame(frame) {
	const isWithinVertical = isWithin(frame.top, frame.bottom);
	const isWithinHorizontal = isWithin(frame.left, frame.right);
	return function run(point) {
		return isWithinVertical(point.y) && isWithinHorizontal(point.x);
	};
}
function getHasOverlap(first, second) {
	return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}
function getFurthestAway({ pageBorderBox, draggable, candidates }) {
	const startCenter = draggable.page.borderBox.center;
	const sorted = candidates.map((candidate) => {
		const axis = candidate.axis;
		const target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
		return {
			id: candidate.descriptor.id,
			distance: distance(startCenter, target)
		};
	}).sort((a, b) => b.distance - a.distance);
	return sorted[0] ? sorted[0].id : null;
}
function getDroppableOver({ pageBorderBox, draggable, droppables }) {
	const candidates = toDroppableList(droppables).filter((item) => {
		if (!item.isEnabled) return false;
		const active = item.subject.active;
		if (!active) return false;
		if (!getHasOverlap(pageBorderBox, active)) return false;
		if (isPositionInFrame(active)(pageBorderBox.center)) return true;
		const axis = item.axis;
		const childCenter = active.center[axis.crossAxisLine];
		const crossAxisStart = pageBorderBox[axis.crossAxisStart];
		const crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
		const isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
		const isStartContained = isContained(crossAxisStart);
		const isEndContained = isContained(crossAxisEnd);
		if (!isStartContained && !isEndContained) return true;
		if (isStartContained) return crossAxisStart < childCenter;
		return crossAxisEnd > childCenter;
	});
	if (!candidates.length) return null;
	if (candidates.length === 1) return candidates[0].descriptor.id;
	return getFurthestAway({
		pageBorderBox,
		draggable,
		candidates
	});
}
var offsetRectByPosition = (rect, point) => getRect(offsetByPosition(rect, point));
var withDroppableScroll = (droppable, area) => {
	const frame = droppable.frame;
	if (!frame) return area;
	return offsetRectByPosition(area, frame.scroll.diff.value);
};
function getIsDisplaced({ displaced, id }) {
	return Boolean(displaced.visible[id] || displaced.invisible[id]);
}
function atIndex({ draggable, closest, inHomeList }) {
	if (!closest) return null;
	if (!inHomeList) return closest.descriptor.index;
	if (closest.descriptor.index > draggable.descriptor.index) return closest.descriptor.index - 1;
	return closest.descriptor.index;
}
var getReorderImpact = ({ pageBorderBoxWithDroppableScroll: targetRect, draggable, destination, insideDestination, last, viewport, afterCritical }) => {
	const axis = destination.axis;
	const displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
	const displacement = displacedBy.value;
	const targetStart = targetRect[axis.start];
	const targetEnd = targetRect[axis.end];
	return calculateReorderImpact({
		draggable,
		insideDestination,
		destination,
		viewport,
		last,
		displacedBy,
		index: atIndex({
			draggable,
			closest: removeDraggableFromList(draggable, insideDestination).find((child) => {
				const id = child.descriptor.id;
				const childCenter = child.page.borderBox.center[axis.line];
				const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
				const isDisplaced = getIsDisplaced({
					displaced: last,
					id
				});
				if (didStartAfterCritical$1) {
					if (isDisplaced) return targetEnd <= childCenter;
					return targetStart < childCenter - displacement;
				}
				if (isDisplaced) return targetEnd <= childCenter + displacement;
				return targetStart < childCenter;
			}) || null,
			inHomeList: isHomeOf(draggable, destination)
		})
	});
};
var combineThresholdDivisor = 4;
var getCombineImpact = ({ draggable, pageBorderBoxWithDroppableScroll: targetRect, previousImpact, destination, insideDestination, afterCritical }) => {
	if (!destination.isCombineEnabled) return null;
	const axis = destination.axis;
	const displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
	const displacement = displacedBy.value;
	const targetStart = targetRect[axis.start];
	const targetEnd = targetRect[axis.end];
	const combineWith = removeDraggableFromList(draggable, insideDestination).find((child) => {
		const id = child.descriptor.id;
		const childRect = child.page.borderBox;
		const threshold = childRect[axis.size] / combineThresholdDivisor;
		const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
		const isDisplaced = getIsDisplaced({
			displaced: previousImpact.displaced,
			id
		});
		if (didStartAfterCritical$1) {
			if (isDisplaced) return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
			return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
		}
		if (isDisplaced) return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
		return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
	});
	if (!combineWith) return null;
	return {
		displacedBy,
		displaced: previousImpact.displaced,
		at: {
			type: "COMBINE",
			combine: {
				draggableId: combineWith.descriptor.id,
				droppableId: destination.descriptor.id
			}
		}
	};
};
var getDragImpact = ({ pageOffset, draggable, draggables, droppables, previousImpact, viewport, afterCritical }) => {
	const pageBorderBox = offsetRectByPosition(draggable.page.borderBox, pageOffset);
	const destinationId = getDroppableOver({
		pageBorderBox,
		draggable,
		droppables
	});
	if (!destinationId) return noImpact;
	const destination = droppables[destinationId];
	const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	const pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
	return getCombineImpact({
		pageBorderBoxWithDroppableScroll,
		draggable,
		previousImpact,
		destination,
		insideDestination,
		afterCritical
	}) || getReorderImpact({
		pageBorderBoxWithDroppableScroll,
		draggable,
		destination,
		insideDestination,
		last: previousImpact.displaced,
		viewport,
		afterCritical
	});
};
var patchDroppableMap = (droppables, updated) => ({
	...droppables,
	[updated.descriptor.id]: updated
});
var clearUnusedPlaceholder = ({ previousImpact, impact, droppables }) => {
	const last = whatIsDraggedOver(previousImpact);
	const now = whatIsDraggedOver(impact);
	if (!last) return droppables;
	if (last === now) return droppables;
	const lastDroppable = droppables[last];
	if (!lastDroppable.subject.withPlaceholder) return droppables;
	return patchDroppableMap(droppables, removePlaceholder(lastDroppable));
};
var recomputePlaceholders = ({ draggable, draggables, droppables, previousImpact, impact }) => {
	const cleaned = clearUnusedPlaceholder({
		previousImpact,
		impact,
		droppables
	});
	const isOver = whatIsDraggedOver(impact);
	if (!isOver) return cleaned;
	const droppable = droppables[isOver];
	if (isHomeOf(draggable, droppable)) return cleaned;
	if (droppable.subject.withPlaceholder) return cleaned;
	return patchDroppableMap(cleaned, addPlaceholder(droppable, draggable, draggables));
};
var update = ({ state, clientSelection: forcedClientSelection, dimensions: forcedDimensions, viewport: forcedViewport, impact: forcedImpact, scrollJumpRequest }) => {
	const viewport = forcedViewport || state.viewport;
	const dimensions = forcedDimensions || state.dimensions;
	const clientSelection = forcedClientSelection || state.current.client.selection;
	const offset = subtract(clientSelection, state.initial.client.selection);
	const client = {
		offset,
		selection: clientSelection,
		borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
	};
	const page = {
		selection: add(client.selection, viewport.scroll.current),
		borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
		offset: add(client.offset, viewport.scroll.diff.value)
	};
	const current = {
		client,
		page
	};
	if (state.phase === "COLLECTING") return {
		...state,
		dimensions,
		viewport,
		current
	};
	const draggable = dimensions.draggables[state.critical.draggable.id];
	const newImpact = forcedImpact || getDragImpact({
		pageOffset: page.offset,
		draggable,
		draggables: dimensions.draggables,
		droppables: dimensions.droppables,
		previousImpact: state.impact,
		viewport,
		afterCritical: state.afterCritical
	});
	const withUpdatedPlaceholders = recomputePlaceholders({
		draggable,
		impact: newImpact,
		previousImpact: state.impact,
		draggables: dimensions.draggables,
		droppables: dimensions.droppables
	});
	return {
		...state,
		current,
		dimensions: {
			draggables: dimensions.draggables,
			droppables: withUpdatedPlaceholders
		},
		impact: newImpact,
		viewport,
		scrollJumpRequest: scrollJumpRequest || null,
		forceShouldAnimate: scrollJumpRequest ? false : null
	};
};
function getDraggables(ids, draggables) {
	return ids.map((id) => draggables[id]);
}
var recompute = ({ impact, viewport, draggables, destination, forceShouldAnimate }) => {
	const last = impact.displaced;
	const displaced = getDisplacementGroups({
		afterDragging: getDraggables(last.all, draggables),
		destination,
		displacedBy: impact.displacedBy,
		viewport: viewport.frame,
		forceShouldAnimate,
		last
	});
	return {
		...impact,
		displaced
	};
};
var getClientBorderBoxCenter = ({ impact, draggable, droppable, draggables, viewport, afterCritical }) => {
	return getClientFromPageBorderBoxCenter({
		pageBorderBoxCenter: getPageBorderBoxCenterFromImpact({
			impact,
			draggable,
			draggables,
			droppable,
			afterCritical
		}),
		draggable,
		viewport
	});
};
var refreshSnap = ({ state, dimensions: forcedDimensions, viewport: forcedViewport }) => {
	!(state.movementMode === "SNAP") && invariant();
	const needsVisibilityCheck = state.impact;
	const viewport = forcedViewport || state.viewport;
	const dimensions = forcedDimensions || state.dimensions;
	const { draggables, droppables } = dimensions;
	const draggable = draggables[state.critical.draggable.id];
	const isOver = whatIsDraggedOver(needsVisibilityCheck);
	!isOver && invariant();
	const destination = droppables[isOver];
	const impact = recompute({
		impact: needsVisibilityCheck,
		viewport,
		destination,
		draggables
	});
	return update({
		impact,
		clientSelection: getClientBorderBoxCenter({
			impact,
			draggable,
			droppable: destination,
			draggables,
			viewport,
			afterCritical: state.afterCritical
		}),
		state,
		dimensions,
		viewport
	});
};
var getHomeLocation = (descriptor) => ({
	index: descriptor.index,
	droppableId: descriptor.droppableId
});
var getLiftEffect = ({ draggable, home, draggables, viewport }) => {
	const displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
	const insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
	const rawIndex = insideHome.indexOf(draggable);
	!(rawIndex !== -1) && invariant();
	const afterDragging = insideHome.slice(rawIndex + 1);
	const effected = afterDragging.reduce((previous, item) => {
		previous[item.descriptor.id] = true;
		return previous;
	}, {});
	const afterCritical = {
		inVirtualList: home.descriptor.mode === "virtual",
		displacedBy,
		effected
	};
	return {
		impact: {
			displaced: getDisplacementGroups({
				afterDragging,
				destination: home,
				displacedBy,
				last: null,
				viewport: viewport.frame,
				forceShouldAnimate: false
			}),
			displacedBy,
			at: {
				type: "REORDER",
				destination: getHomeLocation(draggable.descriptor)
			}
		},
		afterCritical
	};
};
var patchDimensionMap = (dimensions, updated) => ({
	draggables: dimensions.draggables,
	droppables: patchDroppableMap(dimensions.droppables, updated)
});
var offsetDraggable = ({ draggable, offset: offset$1, initialWindowScroll }) => {
	const client = offset(draggable.client, offset$1);
	const page = withScroll(client, initialWindowScroll);
	return {
		...draggable,
		placeholder: {
			...draggable.placeholder,
			client
		},
		client,
		page
	};
};
var getFrame = (droppable) => {
	const frame = droppable.frame;
	!frame && invariant();
	return frame;
};
var adjustAdditionsForScrollChanges = ({ additions, updatedDroppables, viewport }) => {
	const windowScrollChange = viewport.scroll.diff.value;
	return additions.map((draggable) => {
		const modified = updatedDroppables[draggable.descriptor.droppableId];
		const droppableScrollChange = getFrame(modified).scroll.diff.value;
		return offsetDraggable({
			draggable,
			offset: add(windowScrollChange, droppableScrollChange),
			initialWindowScroll: viewport.scroll.initial
		});
	});
};
var publishWhileDraggingInVirtual = ({ state, published }) => {
	const withScrollChange = published.modified.map((update) => {
		const existing = state.dimensions.droppables[update.droppableId];
		return scrollDroppable(existing, update.scroll);
	});
	const droppables = {
		...state.dimensions.droppables,
		...toDroppableMap(withScrollChange)
	};
	const updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
		additions: published.additions,
		updatedDroppables: droppables,
		viewport: state.viewport
	}));
	const draggables = {
		...state.dimensions.draggables,
		...updatedAdditions
	};
	published.removals.forEach((id) => {
		delete draggables[id];
	});
	const dimensions = {
		droppables,
		draggables
	};
	const wasOverId = whatIsDraggedOver(state.impact);
	const wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
	const draggable = dimensions.draggables[state.critical.draggable.id];
	const home = dimensions.droppables[state.critical.droppable.id];
	const { impact: onLiftImpact, afterCritical } = getLiftEffect({
		draggable,
		home,
		draggables,
		viewport: state.viewport
	});
	const previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
	const impact = getDragImpact({
		pageOffset: state.current.page.offset,
		draggable: dimensions.draggables[state.critical.draggable.id],
		draggables: dimensions.draggables,
		droppables: dimensions.droppables,
		previousImpact,
		viewport: state.viewport,
		afterCritical
	});
	const draggingState = {
		...state,
		phase: "DRAGGING",
		impact,
		onLiftImpact,
		dimensions,
		afterCritical,
		forceShouldAnimate: false
	};
	if (state.phase === "COLLECTING") return draggingState;
	return {
		...draggingState,
		phase: "DROP_PENDING",
		reason: state.reason,
		isWaiting: false
	};
};
var isSnapping = (state) => state.movementMode === "SNAP";
var postDroppableChange = (state, updated, isEnabledChanging) => {
	const dimensions = patchDimensionMap(state.dimensions, updated);
	if (!isSnapping(state) || isEnabledChanging) return update({
		state,
		dimensions
	});
	return refreshSnap({
		state,
		dimensions
	});
};
function removeScrollJumpRequest(state) {
	if (state.isDragging && state.movementMode === "SNAP") return {
		...state,
		scrollJumpRequest: null
	};
	return state;
}
var idle$2 = {
	phase: "IDLE",
	completed: null,
	shouldFlush: false
};
var reducer = (state = idle$2, action) => {
	if (action.type === "FLUSH") return {
		...idle$2,
		shouldFlush: true
	};
	if (action.type === "INITIAL_PUBLISH") {
		!(state.phase === "IDLE") && invariant();
		const { critical, clientSelection, viewport, dimensions, movementMode } = action.payload;
		const draggable = dimensions.draggables[critical.draggable.id];
		const home = dimensions.droppables[critical.droppable.id];
		const client = {
			selection: clientSelection,
			borderBoxCenter: draggable.client.borderBox.center,
			offset: origin
		};
		const initial = {
			client,
			page: {
				selection: add(client.selection, viewport.scroll.initial),
				borderBoxCenter: add(client.selection, viewport.scroll.initial),
				offset: add(client.selection, viewport.scroll.diff.value)
			}
		};
		const isWindowScrollAllowed = toDroppableList(dimensions.droppables).every((item) => !item.isFixedOnPage);
		const { impact, afterCritical } = getLiftEffect({
			draggable,
			home,
			draggables: dimensions.draggables,
			viewport
		});
		return {
			phase: "DRAGGING",
			isDragging: true,
			critical,
			movementMode,
			dimensions,
			initial,
			current: initial,
			isWindowScrollAllowed,
			impact,
			afterCritical,
			onLiftImpact: impact,
			viewport,
			scrollJumpRequest: null,
			forceShouldAnimate: null
		};
	}
	if (action.type === "COLLECTION_STARTING") {
		if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") return state;
		!(state.phase === "DRAGGING") && invariant();
		return {
			...state,
			phase: "COLLECTING"
		};
	}
	if (action.type === "PUBLISH_WHILE_DRAGGING") {
		!(state.phase === "COLLECTING" || state.phase === "DROP_PENDING") && invariant();
		return publishWhileDraggingInVirtual({
			state,
			published: action.payload
		});
	}
	if (action.type === "MOVE") {
		if (state.phase === "DROP_PENDING") return state;
		!isMovementAllowed(state) && invariant();
		const { client: clientSelection } = action.payload;
		if (isEqual$1(clientSelection, state.current.client.selection)) return state;
		return update({
			state,
			clientSelection,
			impact: isSnapping(state) ? state.impact : null
		});
	}
	if (action.type === "UPDATE_DROPPABLE_SCROLL") {
		if (state.phase === "DROP_PENDING") return removeScrollJumpRequest(state);
		if (state.phase === "COLLECTING") return removeScrollJumpRequest(state);
		!isMovementAllowed(state) && invariant();
		const { id, newScroll } = action.payload;
		const target = state.dimensions.droppables[id];
		if (!target) return state;
		return postDroppableChange(state, scrollDroppable(target, newScroll), false);
	}
	if (action.type === "UPDATE_DROPPABLE_IS_ENABLED") {
		if (state.phase === "DROP_PENDING") return state;
		!isMovementAllowed(state) && invariant();
		const { id, isEnabled } = action.payload;
		const target = state.dimensions.droppables[id];
		!target && invariant();
		!(target.isEnabled !== isEnabled) && invariant();
		return postDroppableChange(state, {
			...target,
			isEnabled
		}, true);
	}
	if (action.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
		if (state.phase === "DROP_PENDING") return state;
		!isMovementAllowed(state) && invariant();
		const { id, isCombineEnabled } = action.payload;
		const target = state.dimensions.droppables[id];
		!target && invariant();
		!(target.isCombineEnabled !== isCombineEnabled) && invariant();
		return postDroppableChange(state, {
			...target,
			isCombineEnabled
		}, true);
	}
	if (action.type === "MOVE_BY_WINDOW_SCROLL") {
		if (state.phase === "DROP_PENDING" || state.phase === "DROP_ANIMATING") return state;
		!isMovementAllowed(state) && invariant();
		!state.isWindowScrollAllowed && invariant();
		const newScroll = action.payload.newScroll;
		if (isEqual$1(state.viewport.scroll.current, newScroll)) return removeScrollJumpRequest(state);
		const viewport = scrollViewport(state.viewport, newScroll);
		if (isSnapping(state)) return refreshSnap({
			state,
			viewport
		});
		return update({
			state,
			viewport
		});
	}
	if (action.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
		if (!isMovementAllowed(state)) return state;
		const maxScroll = action.payload.maxScroll;
		if (isEqual$1(maxScroll, state.viewport.scroll.max)) return state;
		const withMaxScroll = {
			...state.viewport,
			scroll: {
				...state.viewport.scroll,
				max: maxScroll
			}
		};
		return {
			...state,
			viewport: withMaxScroll
		};
	}
	if (action.type === "MOVE_UP" || action.type === "MOVE_DOWN" || action.type === "MOVE_LEFT" || action.type === "MOVE_RIGHT") {
		if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") return state;
		!(state.phase === "DRAGGING") && invariant();
		const result = moveInDirection({
			state,
			type: action.type
		});
		if (!result) return state;
		return update({
			state,
			impact: result.impact,
			clientSelection: result.clientSelection,
			scrollJumpRequest: result.scrollJumpRequest
		});
	}
	if (action.type === "DROP_PENDING") {
		const reason = action.payload.reason;
		!(state.phase === "COLLECTING") && invariant();
		return {
			...state,
			phase: "DROP_PENDING",
			isWaiting: true,
			reason
		};
	}
	if (action.type === "DROP_ANIMATE") {
		const { completed, dropDuration, newHomeClientOffset } = action.payload;
		!(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") && invariant();
		return {
			phase: "DROP_ANIMATING",
			completed,
			dropDuration,
			newHomeClientOffset,
			dimensions: state.dimensions
		};
	}
	if (action.type === "DROP_COMPLETE") {
		const { completed } = action.payload;
		return {
			phase: "IDLE",
			completed,
			shouldFlush: false
		};
	}
	return state;
};
function guard(action, predicate) {
	return action instanceof Object && "type" in action && action.type === predicate;
}
var beforeInitialCapture = (args) => ({
	type: "BEFORE_INITIAL_CAPTURE",
	payload: args
});
var lift$1 = (args) => ({
	type: "LIFT",
	payload: args
});
var initialPublish = (args) => ({
	type: "INITIAL_PUBLISH",
	payload: args
});
var publishWhileDragging = (args) => ({
	type: "PUBLISH_WHILE_DRAGGING",
	payload: args
});
var collectionStarting = () => ({
	type: "COLLECTION_STARTING",
	payload: null
});
var updateDroppableScroll = (args) => ({
	type: "UPDATE_DROPPABLE_SCROLL",
	payload: args
});
var updateDroppableIsEnabled = (args) => ({
	type: "UPDATE_DROPPABLE_IS_ENABLED",
	payload: args
});
var updateDroppableIsCombineEnabled = (args) => ({
	type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
	payload: args
});
var move = (args) => ({
	type: "MOVE",
	payload: args
});
var moveByWindowScroll = (args) => ({
	type: "MOVE_BY_WINDOW_SCROLL",
	payload: args
});
var updateViewportMaxScroll = (args) => ({
	type: "UPDATE_VIEWPORT_MAX_SCROLL",
	payload: args
});
var moveUp = () => ({
	type: "MOVE_UP",
	payload: null
});
var moveDown = () => ({
	type: "MOVE_DOWN",
	payload: null
});
var moveRight = () => ({
	type: "MOVE_RIGHT",
	payload: null
});
var moveLeft = () => ({
	type: "MOVE_LEFT",
	payload: null
});
var flush = () => ({
	type: "FLUSH",
	payload: null
});
var animateDrop = (args) => ({
	type: "DROP_ANIMATE",
	payload: args
});
var completeDrop = (args) => ({
	type: "DROP_COMPLETE",
	payload: args
});
var drop = (args) => ({
	type: "DROP",
	payload: args
});
var dropPending = (args) => ({
	type: "DROP_PENDING",
	payload: args
});
var dropAnimationFinished = () => ({
	type: "DROP_ANIMATION_FINISHED",
	payload: null
});
var lift = (marshal) => ({ getState, dispatch }) => (next) => (action) => {
	if (!guard(action, "LIFT")) {
		next(action);
		return;
	}
	const { id, clientSelection, movementMode } = action.payload;
	const initial = getState();
	if (initial.phase === "DROP_ANIMATING") dispatch(completeDrop({ completed: initial.completed }));
	!(getState().phase === "IDLE") && invariant();
	dispatch(flush());
	dispatch(beforeInitialCapture({
		draggableId: id,
		movementMode
	}));
	const request = {
		draggableId: id,
		scrollOptions: { shouldPublishImmediately: movementMode === "SNAP" }
	};
	const { critical, dimensions, viewport } = marshal.startPublishing(request);
	dispatch(initialPublish({
		critical,
		dimensions,
		clientSelection,
		movementMode,
		viewport
	}));
};
var style = (marshal) => () => (next) => (action) => {
	if (guard(action, "INITIAL_PUBLISH")) marshal.dragging();
	if (guard(action, "DROP_ANIMATE")) marshal.dropping(action.payload.completed.result.reason);
	if (guard(action, "FLUSH") || guard(action, "DROP_COMPLETE")) marshal.resting();
	next(action);
};
var curves = {
	outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
	drop: "cubic-bezier(.2,1,.1,1)"
};
var combine = {
	opacity: {
		drop: 0,
		combining: .7
	},
	scale: { drop: .75 }
};
var timings = {
	outOfTheWay: .2,
	minDropTime: .33,
	maxDropTime: .55
};
var outOfTheWayTiming = `${timings.outOfTheWay}s ${curves.outOfTheWay}`;
var transitions = {
	fluid: `opacity ${outOfTheWayTiming}`,
	snap: `transform ${outOfTheWayTiming}, opacity ${outOfTheWayTiming}`,
	drop: (duration) => {
		const timing = `${duration}s ${curves.drop}`;
		return `transform ${timing}, opacity ${timing}`;
	},
	outOfTheWay: `transform ${outOfTheWayTiming}`,
	placeholder: `height ${outOfTheWayTiming}, width ${outOfTheWayTiming}, margin ${outOfTheWayTiming}`
};
var moveTo = (offset) => isEqual$1(offset, origin) ? void 0 : `translate(${offset.x}px, ${offset.y}px)`;
var transforms = {
	moveTo,
	drop: (offset, isCombining) => {
		const translate = moveTo(offset);
		if (!translate) return;
		if (!isCombining) return translate;
		return `${translate} scale(${combine.scale.drop})`;
	}
};
var { minDropTime, maxDropTime } = timings;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = .6;
var getDropDuration = ({ current, destination, reason }) => {
	const distance$1 = distance(current, destination);
	if (distance$1 <= 0) return minDropTime;
	if (distance$1 >= maxDropTimeAtDistance) return maxDropTime;
	const duration = minDropTime + dropTimeRange * (distance$1 / maxDropTimeAtDistance);
	const withDuration = reason === "CANCEL" ? duration * cancelDropModifier : duration;
	return Number(withDuration.toFixed(2));
};
var getNewHomeClientOffset = ({ impact, draggable, dimensions, viewport, afterCritical }) => {
	const { draggables, droppables } = dimensions;
	const droppableId = whatIsDraggedOver(impact);
	const destination = droppableId ? droppables[droppableId] : null;
	const home = droppables[draggable.descriptor.droppableId];
	return subtract(getClientBorderBoxCenter({
		impact,
		draggable,
		draggables,
		afterCritical,
		droppable: destination || home,
		viewport
	}), draggable.client.borderBox.center);
};
var getDropImpact = ({ draggables, reason, lastImpact, home, viewport, onLiftImpact }) => {
	if (!lastImpact.at || reason !== "DROP") return {
		impact: recompute({
			draggables,
			impact: onLiftImpact,
			destination: home,
			viewport,
			forceShouldAnimate: true
		}),
		didDropInsideDroppable: false
	};
	if (lastImpact.at.type === "REORDER") return {
		impact: lastImpact,
		didDropInsideDroppable: true
	};
	return {
		impact: {
			...lastImpact,
			displaced: emptyGroups
		},
		didDropInsideDroppable: true
	};
};
var dropMiddleware = ({ getState, dispatch }) => (next) => (action) => {
	if (!guard(action, "DROP")) {
		next(action);
		return;
	}
	const state = getState();
	const reason = action.payload.reason;
	if (state.phase === "COLLECTING") {
		dispatch(dropPending({ reason }));
		return;
	}
	if (state.phase === "IDLE") return;
	state.phase === "DROP_PENDING" && state.isWaiting && invariant();
	!(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") && invariant();
	const critical = state.critical;
	const dimensions = state.dimensions;
	const draggable = dimensions.draggables[state.critical.draggable.id];
	const { impact, didDropInsideDroppable } = getDropImpact({
		reason,
		lastImpact: state.impact,
		afterCritical: state.afterCritical,
		onLiftImpact: state.onLiftImpact,
		home: state.dimensions.droppables[state.critical.droppable.id],
		viewport: state.viewport,
		draggables: state.dimensions.draggables
	});
	const destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
	const combine = didDropInsideDroppable ? tryGetCombine(impact) : null;
	const source = {
		index: critical.draggable.index,
		droppableId: critical.droppable.id
	};
	const result = {
		draggableId: draggable.descriptor.id,
		type: draggable.descriptor.type,
		source,
		reason,
		mode: state.movementMode,
		destination,
		combine
	};
	const newHomeClientOffset = getNewHomeClientOffset({
		impact,
		draggable,
		dimensions,
		viewport: state.viewport,
		afterCritical: state.afterCritical
	});
	const completed = {
		critical: state.critical,
		afterCritical: state.afterCritical,
		result,
		impact
	};
	if (!(!isEqual$1(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine))) {
		dispatch(completeDrop({ completed }));
		return;
	}
	dispatch(animateDrop({
		newHomeClientOffset,
		dropDuration: getDropDuration({
			current: state.current.client.offset,
			destination: newHomeClientOffset,
			reason
		}),
		completed
	}));
};
var getWindowScroll = () => ({
	x: window.pageXOffset,
	y: window.pageYOffset
});
function getWindowScrollBinding(update) {
	return {
		eventName: "scroll",
		options: {
			passive: true,
			capture: false
		},
		fn: (event) => {
			if (event.target !== window && event.target !== window.document) return;
			update();
		}
	};
}
function getScrollListener({ onWindowScroll }) {
	function updateScroll() {
		onWindowScroll(getWindowScroll());
	}
	const scheduled = rafSchd(updateScroll);
	const binding = getWindowScrollBinding(scheduled);
	let unbind = noop$2;
	function isActive() {
		return unbind !== noop$2;
	}
	function start() {
		isActive() && invariant();
		unbind = bindEvents(window, [binding]);
	}
	function stop() {
		!isActive() && invariant();
		scheduled.cancel();
		unbind();
		unbind = noop$2;
	}
	return {
		start,
		stop,
		isActive
	};
}
var shouldStop$1 = (action) => guard(action, "DROP_COMPLETE") || guard(action, "DROP_ANIMATE") || guard(action, "FLUSH");
var scrollListener = (store) => {
	const listener = getScrollListener({ onWindowScroll: (newScroll) => {
		store.dispatch(moveByWindowScroll({ newScroll }));
	} });
	return (next) => (action) => {
		if (!listener.isActive() && guard(action, "INITIAL_PUBLISH")) listener.start();
		if (listener.isActive() && shouldStop$1(action)) listener.stop();
		next(action);
	};
};
var getExpiringAnnounce = (announce) => {
	let wasCalled = false;
	let isExpired = false;
	const timeoutId = setTimeout(() => {
		isExpired = true;
	});
	const result = (message) => {
		if (wasCalled) return;
		if (isExpired) return;
		wasCalled = true;
		announce(message);
		clearTimeout(timeoutId);
	};
	result.wasCalled = () => wasCalled;
	return result;
};
var getAsyncMarshal = () => {
	const entries = [];
	const execute = (timerId) => {
		const index = entries.findIndex((item) => item.timerId === timerId);
		!(index !== -1) && invariant();
		const [entry] = entries.splice(index, 1);
		entry.callback();
	};
	const add = (fn) => {
		const timerId = setTimeout(() => execute(timerId));
		const entry = {
			timerId,
			callback: fn
		};
		entries.push(entry);
	};
	const flush = () => {
		if (!entries.length) return;
		const shallow = [...entries];
		entries.length = 0;
		shallow.forEach((entry) => {
			clearTimeout(entry.timerId);
			entry.callback();
		});
	};
	return {
		add,
		flush
	};
};
var areLocationsEqual = (first, second) => {
	if (first == null && second == null) return true;
	if (first == null || second == null) return false;
	return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = (first, second) => {
	if (first == null && second == null) return true;
	if (first == null || second == null) return false;
	return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = (first, second) => {
	if (first === second) return true;
	const isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
	const isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
	return isDraggableEqual && isDroppableEqual;
};
var withTimings = (key, fn) => {
	fn();
};
var getDragStart = (critical, mode) => ({
	draggableId: critical.draggable.id,
	type: critical.droppable.type,
	source: {
		droppableId: critical.droppable.id,
		index: critical.draggable.index
	},
	mode
});
function execute(responder, data, announce, getDefaultMessage) {
	if (!responder) {
		announce(getDefaultMessage(data));
		return;
	}
	const willExpire = getExpiringAnnounce(announce);
	responder(data, { announce: willExpire });
	if (!willExpire.wasCalled()) announce(getDefaultMessage(data));
}
var getPublisher = (getResponders, announce) => {
	const asyncMarshal = getAsyncMarshal();
	let dragging = null;
	const beforeCapture = (draggableId, mode) => {
		dragging && invariant();
		withTimings("onBeforeCapture", () => {
			const fn = getResponders().onBeforeCapture;
			if (fn) fn({
				draggableId,
				mode
			});
		});
	};
	const beforeStart = (critical, mode) => {
		dragging && invariant();
		withTimings("onBeforeDragStart", () => {
			const fn = getResponders().onBeforeDragStart;
			if (fn) fn(getDragStart(critical, mode));
		});
	};
	const start = (critical, mode) => {
		dragging && invariant();
		const data = getDragStart(critical, mode);
		dragging = {
			mode,
			lastCritical: critical,
			lastLocation: data.source,
			lastCombine: null
		};
		asyncMarshal.add(() => {
			withTimings("onDragStart", () => execute(getResponders().onDragStart, data, announce, preset.onDragStart));
		});
	};
	const update = (critical, impact) => {
		const location = tryGetDestination(impact);
		const combine = tryGetCombine(impact);
		!dragging && invariant();
		const hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);
		if (hasCriticalChanged) dragging.lastCritical = critical;
		const hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);
		if (hasLocationChanged) dragging.lastLocation = location;
		const hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);
		if (hasGroupingChanged) dragging.lastCombine = combine;
		if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) return;
		const data = {
			...getDragStart(critical, dragging.mode),
			combine,
			destination: location
		};
		asyncMarshal.add(() => {
			withTimings("onDragUpdate", () => execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate));
		});
	};
	const flush = () => {
		!dragging && invariant();
		asyncMarshal.flush();
	};
	const drop = (result) => {
		!dragging && invariant();
		dragging = null;
		withTimings("onDragEnd", () => execute(getResponders().onDragEnd, result, announce, preset.onDragEnd));
	};
	const abort = () => {
		if (!dragging) return;
		drop({
			...getDragStart(dragging.lastCritical, dragging.mode),
			combine: null,
			destination: null,
			reason: "CANCEL"
		});
	};
	return {
		beforeCapture,
		beforeStart,
		start,
		update,
		flush,
		drop,
		abort
	};
};
var responders = (getResponders, announce) => {
	const publisher = getPublisher(getResponders, announce);
	return (store) => (next) => (action) => {
		if (guard(action, "BEFORE_INITIAL_CAPTURE")) {
			publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
			return;
		}
		if (guard(action, "INITIAL_PUBLISH")) {
			const critical = action.payload.critical;
			publisher.beforeStart(critical, action.payload.movementMode);
			next(action);
			publisher.start(critical, action.payload.movementMode);
			return;
		}
		if (guard(action, "DROP_COMPLETE")) {
			const result = action.payload.completed.result;
			publisher.flush();
			next(action);
			publisher.drop(result);
			return;
		}
		next(action);
		if (guard(action, "FLUSH")) {
			publisher.abort();
			return;
		}
		const state = store.getState();
		if (state.phase === "DRAGGING") publisher.update(state.critical, state.impact);
	};
};
var dropAnimationFinishMiddleware = (store) => (next) => (action) => {
	if (!guard(action, "DROP_ANIMATION_FINISHED")) {
		next(action);
		return;
	}
	const state = store.getState();
	!(state.phase === "DROP_ANIMATING") && invariant();
	store.dispatch(completeDrop({ completed: state.completed }));
};
var dropAnimationFlushOnScrollMiddleware = (store) => {
	let unbind = null;
	let frameId = null;
	function clear() {
		if (frameId) {
			cancelAnimationFrame(frameId);
			frameId = null;
		}
		if (unbind) {
			unbind();
			unbind = null;
		}
	}
	return (next) => (action) => {
		if (guard(action, "FLUSH") || guard(action, "DROP_COMPLETE") || guard(action, "DROP_ANIMATION_FINISHED")) clear();
		next(action);
		if (!guard(action, "DROP_ANIMATE")) return;
		const binding = {
			eventName: "scroll",
			options: {
				capture: true,
				passive: false,
				once: true
			},
			fn: function flushDropAnimation() {
				if (store.getState().phase === "DROP_ANIMATING") store.dispatch(dropAnimationFinished());
			}
		};
		frameId = requestAnimationFrame(() => {
			frameId = null;
			unbind = bindEvents(window, [binding]);
		});
	};
};
var dimensionMarshalStopper = (marshal) => () => (next) => (action) => {
	if (guard(action, "DROP_COMPLETE") || guard(action, "FLUSH") || guard(action, "DROP_ANIMATE")) marshal.stopPublishing();
	next(action);
};
var focus = (marshal) => {
	let isWatching = false;
	return () => (next) => (action) => {
		if (guard(action, "INITIAL_PUBLISH")) {
			isWatching = true;
			marshal.tryRecordFocus(action.payload.critical.draggable.id);
			next(action);
			marshal.tryRestoreFocusRecorded();
			return;
		}
		next(action);
		if (!isWatching) return;
		if (guard(action, "FLUSH")) {
			isWatching = false;
			marshal.tryRestoreFocusRecorded();
			return;
		}
		if (guard(action, "DROP_COMPLETE")) {
			isWatching = false;
			const result = action.payload.completed.result;
			if (result.combine) marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
			marshal.tryRestoreFocusRecorded();
		}
	};
};
var shouldStop = (action) => guard(action, "DROP_COMPLETE") || guard(action, "DROP_ANIMATE") || guard(action, "FLUSH");
var autoScroll = (autoScroller) => (store) => (next) => (action) => {
	if (shouldStop(action)) {
		autoScroller.stop();
		next(action);
		return;
	}
	if (guard(action, "INITIAL_PUBLISH")) {
		next(action);
		const state = store.getState();
		!(state.phase === "DRAGGING") && invariant();
		autoScroller.start(state);
		return;
	}
	next(action);
	autoScroller.scroll(store.getState());
};
var pendingDrop = (store) => (next) => (action) => {
	next(action);
	if (!guard(action, "PUBLISH_WHILE_DRAGGING")) return;
	const postActionState = store.getState();
	if (postActionState.phase !== "DROP_PENDING") return;
	if (postActionState.isWaiting) return;
	store.dispatch(drop({ reason: postActionState.reason }));
};
var composeEnhancers = compose;
var createStore = ({ dimensionMarshal, focusMarshal, styleMarshal, getResponders, announce, autoScroller }) => createStore$1(reducer, composeEnhancers(applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift(dimensionMarshal), dropMiddleware, dropAnimationFinishMiddleware, dropAnimationFlushOnScrollMiddleware, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
var clean$1 = () => ({
	additions: {},
	removals: {},
	modified: {}
});
function createPublisher({ registry, callbacks }) {
	let staging = clean$1();
	let frameId = null;
	const collect = () => {
		if (frameId) return;
		callbacks.collectionStarting();
		frameId = requestAnimationFrame(() => {
			frameId = null;
			const { additions, removals, modified } = staging;
			const added = Object.keys(additions).map((id) => registry.draggable.getById(id).getDimension(origin)).sort((a, b) => a.descriptor.index - b.descriptor.index);
			const updated = Object.keys(modified).map((id) => {
				return {
					droppableId: id,
					scroll: registry.droppable.getById(id).callbacks.getScrollWhileDragging()
				};
			});
			const result = {
				additions: added,
				removals: Object.keys(removals),
				modified: updated
			};
			staging = clean$1();
			callbacks.publish(result);
		});
	};
	const add = (entry) => {
		const id = entry.descriptor.id;
		staging.additions[id] = entry;
		staging.modified[entry.descriptor.droppableId] = true;
		if (staging.removals[id]) delete staging.removals[id];
		collect();
	};
	const remove = (entry) => {
		const descriptor = entry.descriptor;
		staging.removals[descriptor.id] = true;
		staging.modified[descriptor.droppableId] = true;
		if (staging.additions[descriptor.id]) delete staging.additions[descriptor.id];
		collect();
	};
	const stop = () => {
		if (!frameId) return;
		cancelAnimationFrame(frameId);
		frameId = null;
		staging = clean$1();
	};
	return {
		add,
		remove,
		stop
	};
}
var getMaxScroll = ({ scrollHeight, scrollWidth, height, width }) => {
	const maxScroll = subtract({
		x: scrollWidth,
		y: scrollHeight
	}, {
		x: width,
		y: height
	});
	return {
		x: Math.max(0, maxScroll.x),
		y: Math.max(0, maxScroll.y)
	};
};
var getDocumentElement = () => {
	const doc = document.documentElement;
	!doc && invariant();
	return doc;
};
var getMaxWindowScroll = () => {
	const doc = getDocumentElement();
	return getMaxScroll({
		scrollHeight: doc.scrollHeight,
		scrollWidth: doc.scrollWidth,
		width: doc.clientWidth,
		height: doc.clientHeight
	});
};
var getViewport = () => {
	const scroll = getWindowScroll();
	const maxScroll = getMaxWindowScroll();
	const top = scroll.y;
	const left = scroll.x;
	const doc = getDocumentElement();
	const width = doc.clientWidth;
	const height = doc.clientHeight;
	return {
		frame: getRect({
			top,
			left,
			right: left + width,
			bottom: top + height
		}),
		scroll: {
			initial: scroll,
			current: scroll,
			max: maxScroll,
			diff: {
				value: origin,
				displacement: origin
			}
		}
	};
};
var getInitialPublish = ({ critical, scrollOptions, registry }) => {
	const viewport = getViewport();
	const windowScroll = viewport.scroll.current;
	const home = critical.droppable;
	const droppables = registry.droppable.getAllByType(home.type).map((entry) => entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions));
	return {
		dimensions: {
			draggables: toDraggableMap(registry.draggable.getAllByType(critical.draggable.type).map((entry) => entry.getDimension(windowScroll))),
			droppables: toDroppableMap(droppables)
		},
		critical,
		viewport
	};
};
function shouldPublishUpdate(registry, dragging, entry) {
	if (entry.descriptor.id === dragging.id) return false;
	if (entry.descriptor.type !== dragging.type) return false;
	if (registry.droppable.getById(entry.descriptor.droppableId).descriptor.mode !== "virtual") return false;
	return true;
}
var createDimensionMarshal = (registry, callbacks) => {
	let collection = null;
	const publisher = createPublisher({
		callbacks: {
			publish: callbacks.publishWhileDragging,
			collectionStarting: callbacks.collectionStarting
		},
		registry
	});
	const updateDroppableIsEnabled = (id, isEnabled) => {
		!registry.droppable.exists(id) && invariant();
		if (!collection) return;
		callbacks.updateDroppableIsEnabled({
			id,
			isEnabled
		});
	};
	const updateDroppableIsCombineEnabled = (id, isCombineEnabled) => {
		if (!collection) return;
		!registry.droppable.exists(id) && invariant();
		callbacks.updateDroppableIsCombineEnabled({
			id,
			isCombineEnabled
		});
	};
	const updateDroppableScroll = (id, newScroll) => {
		if (!collection) return;
		!registry.droppable.exists(id) && invariant();
		callbacks.updateDroppableScroll({
			id,
			newScroll
		});
	};
	const scrollDroppable = (id, change) => {
		if (!collection) return;
		registry.droppable.getById(id).callbacks.scroll(change);
	};
	const stopPublishing = () => {
		if (!collection) return;
		publisher.stop();
		const home = collection.critical.droppable;
		registry.droppable.getAllByType(home.type).forEach((entry) => entry.callbacks.dragStopped());
		collection.unsubscribe();
		collection = null;
	};
	const subscriber = (event) => {
		!collection && invariant();
		const dragging = collection.critical.draggable;
		if (event.type === "ADDITION") {
			if (shouldPublishUpdate(registry, dragging, event.value)) publisher.add(event.value);
		}
		if (event.type === "REMOVAL") {
			if (shouldPublishUpdate(registry, dragging, event.value)) publisher.remove(event.value);
		}
	};
	const startPublishing = (request) => {
		collection && invariant();
		const entry = registry.draggable.getById(request.draggableId);
		const home = registry.droppable.getById(entry.descriptor.droppableId);
		const critical = {
			draggable: entry.descriptor,
			droppable: home.descriptor
		};
		collection = {
			critical,
			unsubscribe: registry.subscribe(subscriber)
		};
		return getInitialPublish({
			critical,
			registry,
			scrollOptions: request.scrollOptions
		});
	};
	return {
		updateDroppableIsEnabled,
		updateDroppableIsCombineEnabled,
		scrollDroppable,
		updateDroppableScroll,
		startPublishing,
		stopPublishing
	};
};
var canStartDrag = (state, id) => {
	if (state.phase === "IDLE") return true;
	if (state.phase !== "DROP_ANIMATING") return false;
	if (state.completed.result.draggableId === id) return false;
	return state.completed.result.reason === "DROP";
};
var scrollWindow = (change) => {
	window.scrollBy(change.x, change.y);
};
var getScrollableDroppables = memoizeOne((droppables) => toDroppableList(droppables).filter((droppable) => {
	if (!droppable.isEnabled) return false;
	if (!droppable.frame) return false;
	return true;
}));
var getScrollableDroppableOver = (target, droppables) => {
	return getScrollableDroppables(droppables).find((droppable) => {
		!droppable.frame && invariant();
		return isPositionInFrame(droppable.frame.pageMarginBox)(target);
	}) || null;
};
var getBestScrollableDroppable = ({ center, destination, droppables }) => {
	if (destination) {
		const dimension = droppables[destination];
		if (!dimension.frame) return null;
		return dimension;
	}
	return getScrollableDroppableOver(center, droppables);
};
var defaultAutoScrollerOptions = {
	startFromPercentage: .25,
	maxScrollAtPercentage: .05,
	maxPixelScroll: 28,
	ease: (percentage) => percentage ** 2,
	durationDampening: {
		stopDampeningAt: 1200,
		accelerateAt: 360
	},
	disabled: false
};
var getDistanceThresholds = (container, axis, getAutoScrollerOptions = () => defaultAutoScrollerOptions) => {
	const autoScrollerOptions = getAutoScrollerOptions();
	return {
		startScrollingFrom: container[axis.size] * autoScrollerOptions.startFromPercentage,
		maxScrollValueAt: container[axis.size] * autoScrollerOptions.maxScrollAtPercentage
	};
};
var getPercentage = ({ startOfRange, endOfRange, current }) => {
	const range = endOfRange - startOfRange;
	if (range === 0) return 0;
	return (current - startOfRange) / range;
};
var minScroll = 1;
var getValueFromDistance = (distanceToEdge, thresholds, getAutoScrollerOptions = () => defaultAutoScrollerOptions) => {
	const autoScrollerOptions = getAutoScrollerOptions();
	if (distanceToEdge > thresholds.startScrollingFrom) return 0;
	if (distanceToEdge <= thresholds.maxScrollValueAt) return autoScrollerOptions.maxPixelScroll;
	if (distanceToEdge === thresholds.startScrollingFrom) return minScroll;
	const percentageFromStartScrollingFrom = 1 - getPercentage({
		startOfRange: thresholds.maxScrollValueAt,
		endOfRange: thresholds.startScrollingFrom,
		current: distanceToEdge
	});
	const scroll = autoScrollerOptions.maxPixelScroll * autoScrollerOptions.ease(percentageFromStartScrollingFrom);
	return Math.ceil(scroll);
};
var dampenValueByTime = (proposedScroll, dragStartTime, getAutoScrollerOptions) => {
	const autoScrollerOptions = getAutoScrollerOptions();
	const accelerateAt = autoScrollerOptions.durationDampening.accelerateAt;
	const stopAt = autoScrollerOptions.durationDampening.stopDampeningAt;
	const startOfRange = dragStartTime;
	const endOfRange = stopAt;
	const runTime = Date.now() - startOfRange;
	if (runTime >= stopAt) return proposedScroll;
	if (runTime < accelerateAt) return minScroll;
	const betweenAccelerateAtAndStopAtPercentage = getPercentage({
		startOfRange: accelerateAt,
		endOfRange,
		current: runTime
	});
	const scroll = proposedScroll * autoScrollerOptions.ease(betweenAccelerateAtAndStopAtPercentage);
	return Math.ceil(scroll);
};
var getValue = ({ distanceToEdge, thresholds, dragStartTime, shouldUseTimeDampening, getAutoScrollerOptions }) => {
	const scroll = getValueFromDistance(distanceToEdge, thresholds, getAutoScrollerOptions);
	if (scroll === 0) return 0;
	if (!shouldUseTimeDampening) return scroll;
	return Math.max(dampenValueByTime(scroll, dragStartTime, getAutoScrollerOptions), minScroll);
};
var getScrollOnAxis = ({ container, distanceToEdges, dragStartTime, axis, shouldUseTimeDampening, getAutoScrollerOptions }) => {
	const thresholds = getDistanceThresholds(container, axis, getAutoScrollerOptions);
	if (distanceToEdges[axis.end] < distanceToEdges[axis.start]) return getValue({
		distanceToEdge: distanceToEdges[axis.end],
		thresholds,
		dragStartTime,
		shouldUseTimeDampening,
		getAutoScrollerOptions
	});
	return -1 * getValue({
		distanceToEdge: distanceToEdges[axis.start],
		thresholds,
		dragStartTime,
		shouldUseTimeDampening,
		getAutoScrollerOptions
	});
};
var adjustForSizeLimits = ({ container, subject, proposedScroll }) => {
	const isTooBigVertically = subject.height > container.height;
	const isTooBigHorizontally = subject.width > container.width;
	if (!isTooBigHorizontally && !isTooBigVertically) return proposedScroll;
	if (isTooBigHorizontally && isTooBigVertically) return null;
	return {
		x: isTooBigHorizontally ? 0 : proposedScroll.x,
		y: isTooBigVertically ? 0 : proposedScroll.y
	};
};
var clean = apply((value) => value === 0 ? 0 : value);
var getScroll$1 = ({ dragStartTime, container, subject, center, shouldUseTimeDampening, getAutoScrollerOptions }) => {
	const distanceToEdges = {
		top: center.y - container.top,
		right: container.right - center.x,
		bottom: container.bottom - center.y,
		left: center.x - container.left
	};
	const y = getScrollOnAxis({
		container,
		distanceToEdges,
		dragStartTime,
		axis: vertical,
		shouldUseTimeDampening,
		getAutoScrollerOptions
	});
	const required = clean({
		x: getScrollOnAxis({
			container,
			distanceToEdges,
			dragStartTime,
			axis: horizontal,
			shouldUseTimeDampening,
			getAutoScrollerOptions
		}),
		y
	});
	if (isEqual$1(required, origin)) return null;
	const limited = adjustForSizeLimits({
		container,
		subject,
		proposedScroll: required
	});
	if (!limited) return null;
	return isEqual$1(limited, origin) ? null : limited;
};
var smallestSigned = apply((value) => {
	if (value === 0) return 0;
	return value > 0 ? 1 : -1;
});
var getOverlap = (() => {
	const getRemainder = (target, max) => {
		if (target < 0) return target;
		if (target > max) return target - max;
		return 0;
	};
	return ({ current, max, change }) => {
		const targetScroll = add(current, change);
		const overlap = {
			x: getRemainder(targetScroll.x, max.x),
			y: getRemainder(targetScroll.y, max.y)
		};
		if (isEqual$1(overlap, origin)) return null;
		return overlap;
	};
})();
var canPartiallyScroll = ({ max: rawMax, current, change }) => {
	const max = {
		x: Math.max(current.x, rawMax.x),
		y: Math.max(current.y, rawMax.y)
	};
	const smallestChange = smallestSigned(change);
	const overlap = getOverlap({
		max,
		current,
		change: smallestChange
	});
	if (!overlap) return true;
	if (smallestChange.x !== 0 && overlap.x === 0) return true;
	if (smallestChange.y !== 0 && overlap.y === 0) return true;
	return false;
};
var canScrollWindow = (viewport, change) => canPartiallyScroll({
	current: viewport.scroll.current,
	max: viewport.scroll.max,
	change
});
var getWindowOverlap = (viewport, change) => {
	if (!canScrollWindow(viewport, change)) return null;
	const max = viewport.scroll.max;
	const current = viewport.scroll.current;
	return getOverlap({
		current,
		max,
		change
	});
};
var canScrollDroppable = (droppable, change) => {
	const frame = droppable.frame;
	if (!frame) return false;
	return canPartiallyScroll({
		current: frame.scroll.current,
		max: frame.scroll.max,
		change
	});
};
var getDroppableOverlap = (droppable, change) => {
	const frame = droppable.frame;
	if (!frame) return null;
	if (!canScrollDroppable(droppable, change)) return null;
	return getOverlap({
		current: frame.scroll.current,
		max: frame.scroll.max,
		change
	});
};
var getWindowScrollChange = ({ viewport, subject, center, dragStartTime, shouldUseTimeDampening, getAutoScrollerOptions }) => {
	const scroll = getScroll$1({
		dragStartTime,
		container: viewport.frame,
		subject,
		center,
		shouldUseTimeDampening,
		getAutoScrollerOptions
	});
	return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
};
var getDroppableScrollChange = ({ droppable, subject, center, dragStartTime, shouldUseTimeDampening, getAutoScrollerOptions }) => {
	const frame = droppable.frame;
	if (!frame) return null;
	const scroll = getScroll$1({
		dragStartTime,
		container: frame.pageMarginBox,
		subject,
		center,
		shouldUseTimeDampening,
		getAutoScrollerOptions
	});
	return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
};
var scroll = ({ state, dragStartTime, shouldUseTimeDampening, scrollWindow, scrollDroppable, getAutoScrollerOptions }) => {
	const center = state.current.page.borderBoxCenter;
	const subject = state.dimensions.draggables[state.critical.draggable.id].page.marginBox;
	if (state.isWindowScrollAllowed) {
		const viewport = state.viewport;
		const change = getWindowScrollChange({
			dragStartTime,
			viewport,
			subject,
			center,
			shouldUseTimeDampening,
			getAutoScrollerOptions
		});
		if (change) {
			scrollWindow(change);
			return;
		}
	}
	const droppable = getBestScrollableDroppable({
		center,
		destination: whatIsDraggedOver(state.impact),
		droppables: state.dimensions.droppables
	});
	if (!droppable) return;
	const change = getDroppableScrollChange({
		dragStartTime,
		droppable,
		subject,
		center,
		shouldUseTimeDampening,
		getAutoScrollerOptions
	});
	if (change) scrollDroppable(droppable.descriptor.id, change);
};
var createFluidScroller = ({ scrollWindow, scrollDroppable, getAutoScrollerOptions = () => defaultAutoScrollerOptions }) => {
	const scheduleWindowScroll = rafSchd(scrollWindow);
	const scheduleDroppableScroll = rafSchd(scrollDroppable);
	let dragging = null;
	const tryScroll = (state) => {
		!dragging && invariant();
		const { shouldUseTimeDampening, dragStartTime } = dragging;
		scroll({
			state,
			scrollWindow: scheduleWindowScroll,
			scrollDroppable: scheduleDroppableScroll,
			dragStartTime,
			shouldUseTimeDampening,
			getAutoScrollerOptions
		});
	};
	const start$1 = (state) => {
		dragging && invariant();
		const dragStartTime = Date.now();
		let wasScrollNeeded = false;
		const fakeScrollCallback = () => {
			wasScrollNeeded = true;
		};
		scroll({
			state,
			dragStartTime: 0,
			shouldUseTimeDampening: false,
			scrollWindow: fakeScrollCallback,
			scrollDroppable: fakeScrollCallback,
			getAutoScrollerOptions
		});
		dragging = {
			dragStartTime,
			shouldUseTimeDampening: wasScrollNeeded
		};
		if (wasScrollNeeded) tryScroll(state);
	};
	const stop = () => {
		if (!dragging) return;
		scheduleWindowScroll.cancel();
		scheduleDroppableScroll.cancel();
		dragging = null;
	};
	return {
		start: start$1,
		stop,
		scroll: tryScroll
	};
};
var createJumpScroller = ({ move, scrollDroppable, scrollWindow }) => {
	const moveByOffset = (state, offset) => {
		move({ client: add(state.current.client.selection, offset) });
	};
	const scrollDroppableAsMuchAsItCan = (droppable, change) => {
		if (!canScrollDroppable(droppable, change)) return change;
		const overlap = getDroppableOverlap(droppable, change);
		if (!overlap) {
			scrollDroppable(droppable.descriptor.id, change);
			return null;
		}
		const whatTheDroppableCanScroll = subtract(change, overlap);
		scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
		return subtract(change, whatTheDroppableCanScroll);
	};
	const scrollWindowAsMuchAsItCan = (isWindowScrollAllowed, viewport, change) => {
		if (!isWindowScrollAllowed) return change;
		if (!canScrollWindow(viewport, change)) return change;
		const overlap = getWindowOverlap(viewport, change);
		if (!overlap) {
			scrollWindow(change);
			return null;
		}
		const whatTheWindowCanScroll = subtract(change, overlap);
		scrollWindow(whatTheWindowCanScroll);
		return subtract(change, whatTheWindowCanScroll);
	};
	const jumpScroller = (state) => {
		const request = state.scrollJumpRequest;
		if (!request) return;
		const destination = whatIsDraggedOver(state.impact);
		!destination && invariant();
		const droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);
		if (!droppableRemainder) return;
		const viewport = state.viewport;
		const windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);
		if (!windowRemainder) return;
		moveByOffset(state, windowRemainder);
	};
	return jumpScroller;
};
var createAutoScroller = ({ scrollDroppable, scrollWindow, move, getAutoScrollerOptions }) => {
	const fluidScroller = createFluidScroller({
		scrollWindow,
		scrollDroppable,
		getAutoScrollerOptions
	});
	const jumpScroll = createJumpScroller({
		move,
		scrollWindow,
		scrollDroppable
	});
	const scroll = (state) => {
		if (getAutoScrollerOptions().disabled || state.phase !== "DRAGGING") return;
		if (state.movementMode === "FLUID") {
			fluidScroller.scroll(state);
			return;
		}
		if (!state.scrollJumpRequest) return;
		jumpScroll(state);
	};
	return {
		scroll,
		start: fluidScroller.start,
		stop: fluidScroller.stop
	};
};
var prefix = "data-rfd";
var dragHandle = (() => {
	const base = `${prefix}-drag-handle`;
	return {
		base,
		draggableId: `${base}-draggable-id`,
		contextId: `${base}-context-id`
	};
})();
var draggable = (() => {
	const base = `${prefix}-draggable`;
	return {
		base,
		contextId: `${base}-context-id`,
		id: `${base}-id`
	};
})();
var droppable = (() => {
	const base = `${prefix}-droppable`;
	return {
		base,
		contextId: `${base}-context-id`,
		id: `${base}-id`
	};
})();
var scrollContainer = { contextId: `${prefix}-scroll-container-context-id` };
var makeGetSelector = (context) => (attribute) => `[${attribute}="${context}"]`;
var getStyles = (rules, property) => rules.map((rule) => {
	const value = rule.styles[property];
	if (!value) return "";
	return `${rule.selector} { ${value} }`;
}).join(" ");
var noPointerEvents = "pointer-events: none;";
var getStyles$1 = (contextId) => {
	const getSelector = makeGetSelector(contextId);
	const dragHandle$1 = (() => {
		const grabCursor = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
		return {
			selector: getSelector(dragHandle.contextId),
			styles: {
				always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
				resting: grabCursor,
				dragging: noPointerEvents,
				dropAnimating: grabCursor
			}
		};
	})();
	const rules = [
		(() => {
			const transition = `
      transition: ${transitions.outOfTheWay};
    `;
			return {
				selector: getSelector(draggable.contextId),
				styles: {
					dragging: transition,
					dropAnimating: transition,
					userCancel: transition
				}
			};
		})(),
		dragHandle$1,
		{
			selector: getSelector(droppable.contextId),
			styles: { always: `overflow-anchor: none;` }
		},
		{
			selector: "body",
			styles: { dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      ` }
		}
	];
	return {
		always: getStyles(rules, "always"),
		resting: getStyles(rules, "resting"),
		dragging: getStyles(rules, "dragging"),
		dropAnimating: getStyles(rules, "dropAnimating"),
		userCancel: getStyles(rules, "userCancel")
	};
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var getHead = () => {
	const head = document.querySelector("head");
	!head && invariant();
	return head;
};
var createStyleEl = (nonce) => {
	const el = document.createElement("style");
	if (nonce) el.setAttribute("nonce", nonce);
	el.type = "text/css";
	return el;
};
function useStyleMarshal(contextId, nonce) {
	const styles = useMemo(() => getStyles$1(contextId), [contextId]);
	const alwaysRef = (0, import_react.useRef)(null);
	const dynamicRef = (0, import_react.useRef)(null);
	const setDynamicStyle = useCallback(memoizeOne((proposed) => {
		const el = dynamicRef.current;
		!el && invariant();
		el.textContent = proposed;
	}), []);
	const setAlwaysStyle = useCallback((proposed) => {
		const el = alwaysRef.current;
		!el && invariant();
		el.textContent = proposed;
	}, []);
	useIsomorphicLayoutEffect(() => {
		!(!alwaysRef.current && !dynamicRef.current) && invariant();
		const always = createStyleEl(nonce);
		const dynamic = createStyleEl(nonce);
		alwaysRef.current = always;
		dynamicRef.current = dynamic;
		always.setAttribute(`${prefix}-always`, contextId);
		dynamic.setAttribute(`${prefix}-dynamic`, contextId);
		getHead().appendChild(always);
		getHead().appendChild(dynamic);
		setAlwaysStyle(styles.always);
		setDynamicStyle(styles.resting);
		return () => {
			const remove = (ref) => {
				const current = ref.current;
				!current && invariant();
				getHead().removeChild(current);
				ref.current = null;
			};
			remove(alwaysRef);
			remove(dynamicRef);
		};
	}, [
		nonce,
		setAlwaysStyle,
		setDynamicStyle,
		styles.always,
		styles.resting,
		contextId
	]);
	const dragging = useCallback(() => setDynamicStyle(styles.dragging), [setDynamicStyle, styles.dragging]);
	const dropping = useCallback((reason) => {
		if (reason === "DROP") {
			setDynamicStyle(styles.dropAnimating);
			return;
		}
		setDynamicStyle(styles.userCancel);
	}, [
		setDynamicStyle,
		styles.dropAnimating,
		styles.userCancel
	]);
	const resting = useCallback(() => {
		if (!dynamicRef.current) return;
		setDynamicStyle(styles.resting);
	}, [setDynamicStyle, styles.resting]);
	return useMemo(() => ({
		dragging,
		dropping,
		resting
	}), [
		dragging,
		dropping,
		resting
	]);
}
function querySelectorAll(parentNode, selector) {
	return Array.from(parentNode.querySelectorAll(selector));
}
var getWindowFromEl = (el) => {
	if (el && el.ownerDocument && el.ownerDocument.defaultView) return el.ownerDocument.defaultView;
	return window;
};
function isHtmlElement(el) {
	return el instanceof getWindowFromEl(el).HTMLElement;
}
function findDragHandle(contextId, draggableId) {
	const selector = `[${dragHandle.contextId}="${contextId}"]`;
	const possible = querySelectorAll(document, selector);
	if (!possible.length) return null;
	const handle = possible.find((el) => {
		return el.getAttribute(dragHandle.draggableId) === draggableId;
	});
	if (!handle) return null;
	if (!isHtmlElement(handle)) return null;
	return handle;
}
function useFocusMarshal(contextId) {
	const entriesRef = (0, import_react.useRef)({});
	const recordRef = (0, import_react.useRef)(null);
	const restoreFocusFrameRef = (0, import_react.useRef)(null);
	const isMountedRef = (0, import_react.useRef)(false);
	const register = useCallback(function register(id, focus) {
		const entry = {
			id,
			focus
		};
		entriesRef.current[id] = entry;
		return function unregister() {
			const entries = entriesRef.current;
			if (entries[id] !== entry) delete entries[id];
		};
	}, []);
	const tryGiveFocus = useCallback(function tryGiveFocus(tryGiveFocusTo) {
		const handle = findDragHandle(contextId, tryGiveFocusTo);
		if (handle && handle !== document.activeElement) handle.focus();
	}, [contextId]);
	const tryShiftRecord = useCallback(function tryShiftRecord(previous, redirectTo) {
		if (recordRef.current === previous) recordRef.current = redirectTo;
	}, []);
	const tryRestoreFocusRecorded = useCallback(function tryRestoreFocusRecorded() {
		if (restoreFocusFrameRef.current) return;
		if (!isMountedRef.current) return;
		restoreFocusFrameRef.current = requestAnimationFrame(() => {
			restoreFocusFrameRef.current = null;
			const record = recordRef.current;
			if (record) tryGiveFocus(record);
		});
	}, [tryGiveFocus]);
	const tryRecordFocus = useCallback(function tryRecordFocus(id) {
		recordRef.current = null;
		const focused = document.activeElement;
		if (!focused) return;
		if (focused.getAttribute(dragHandle.draggableId) !== id) return;
		recordRef.current = id;
	}, []);
	useIsomorphicLayoutEffect(() => {
		isMountedRef.current = true;
		return function clearFrameOnUnmount() {
			isMountedRef.current = false;
			const frameId = restoreFocusFrameRef.current;
			if (frameId) cancelAnimationFrame(frameId);
		};
	}, []);
	return useMemo(() => ({
		register,
		tryRecordFocus,
		tryRestoreFocusRecorded,
		tryShiftRecord
	}), [
		register,
		tryRecordFocus,
		tryRestoreFocusRecorded,
		tryShiftRecord
	]);
}
function createRegistry() {
	const entries = {
		draggables: {},
		droppables: {}
	};
	const subscribers = [];
	function subscribe(cb) {
		subscribers.push(cb);
		return function unsubscribe() {
			const index = subscribers.indexOf(cb);
			if (index === -1) return;
			subscribers.splice(index, 1);
		};
	}
	function notify(event) {
		if (subscribers.length) subscribers.forEach((cb) => cb(event));
	}
	function findDraggableById(id) {
		return entries.draggables[id] || null;
	}
	function getDraggableById(id) {
		const entry = findDraggableById(id);
		!entry && invariant();
		return entry;
	}
	const draggableAPI = {
		register: (entry) => {
			entries.draggables[entry.descriptor.id] = entry;
			notify({
				type: "ADDITION",
				value: entry
			});
		},
		update: (entry, last) => {
			const current = entries.draggables[last.descriptor.id];
			if (!current) return;
			if (current.uniqueId !== entry.uniqueId) return;
			delete entries.draggables[last.descriptor.id];
			entries.draggables[entry.descriptor.id] = entry;
		},
		unregister: (entry) => {
			const draggableId = entry.descriptor.id;
			const current = findDraggableById(draggableId);
			if (!current) return;
			if (entry.uniqueId !== current.uniqueId) return;
			delete entries.draggables[draggableId];
			if (entries.droppables[entry.descriptor.droppableId]) notify({
				type: "REMOVAL",
				value: entry
			});
		},
		getById: getDraggableById,
		findById: findDraggableById,
		exists: (id) => Boolean(findDraggableById(id)),
		getAllByType: (type) => Object.values(entries.draggables).filter((entry) => entry.descriptor.type === type)
	};
	function findDroppableById(id) {
		return entries.droppables[id] || null;
	}
	function getDroppableById(id) {
		const entry = findDroppableById(id);
		!entry && invariant();
		return entry;
	}
	const droppableAPI = {
		register: (entry) => {
			entries.droppables[entry.descriptor.id] = entry;
		},
		unregister: (entry) => {
			const current = findDroppableById(entry.descriptor.id);
			if (!current) return;
			if (entry.uniqueId !== current.uniqueId) return;
			delete entries.droppables[entry.descriptor.id];
		},
		getById: getDroppableById,
		findById: findDroppableById,
		exists: (id) => Boolean(findDroppableById(id)),
		getAllByType: (type) => Object.values(entries.droppables).filter((entry) => entry.descriptor.type === type)
	};
	function clean() {
		entries.draggables = {};
		entries.droppables = {};
		subscribers.length = 0;
	}
	return {
		draggable: draggableAPI,
		droppable: droppableAPI,
		subscribe,
		clean
	};
}
function useRegistry() {
	const registry = useMemo(createRegistry, []);
	(0, import_react.useEffect)(() => {
		return function unmount() {
			registry.clean();
		};
	}, [registry]);
	return registry;
}
var StoreContext = import_react.createContext(null);
var getBodyElement = () => {
	const body = document.body;
	!body && invariant();
	return body;
};
var visuallyHidden = {
	position: "absolute",
	width: "1px",
	height: "1px",
	margin: "-1px",
	border: "0",
	padding: "0",
	overflow: "hidden",
	clip: "rect(0 0 0 0)",
	"clip-path": "inset(100%)"
};
var getId = (contextId) => `rfd-announcement-${contextId}`;
function useAnnouncer(contextId) {
	const id = useMemo(() => getId(contextId), [contextId]);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(function setup() {
		const el = document.createElement("div");
		ref.current = el;
		el.id = id;
		el.setAttribute("aria-live", "assertive");
		el.setAttribute("aria-atomic", "true");
		_extends(el.style, visuallyHidden);
		getBodyElement().appendChild(el);
		return function cleanup() {
			setTimeout(function remove() {
				const body = getBodyElement();
				if (body.contains(el)) body.removeChild(el);
				if (el === ref.current) ref.current = null;
			});
		};
	}, [id]);
	return useCallback((message) => {
		const el = ref.current;
		if (el) {
			el.textContent = message;
			return;
		}
	}, []);
}
var defaults = { separator: "::" };
function useUniqueId(prefix, options = defaults) {
	const id = import_react.useId();
	return useMemo(() => `${prefix}${options.separator}${id}`, [
		options.separator,
		prefix,
		id
	]);
}
function getElementId({ contextId, uniqueId }) {
	return `rfd-hidden-text-${contextId}-${uniqueId}`;
}
function useHiddenTextElement({ contextId, text }) {
	const uniqueId = useUniqueId("hidden-text", { separator: "-" });
	const id = useMemo(() => getElementId({
		contextId,
		uniqueId
	}), [uniqueId, contextId]);
	(0, import_react.useEffect)(function mount() {
		const el = document.createElement("div");
		el.id = id;
		el.textContent = text;
		el.style.display = "none";
		getBodyElement().appendChild(el);
		return function unmount() {
			const body = getBodyElement();
			if (body.contains(el)) body.removeChild(el);
		};
	}, [id, text]);
	return id;
}
var AppContext = import_react.createContext(null);
function usePrevious(current) {
	const ref = (0, import_react.useRef)(current);
	(0, import_react.useEffect)(() => {
		ref.current = current;
	});
	return ref;
}
function create() {
	let lock = null;
	function isClaimed() {
		return Boolean(lock);
	}
	function isActive(value) {
		return value === lock;
	}
	function claim(abandon) {
		lock && invariant();
		const newLock = { abandon };
		lock = newLock;
		return newLock;
	}
	function release() {
		!lock && invariant();
		lock = null;
	}
	function tryAbandon() {
		if (lock) {
			lock.abandon();
			release();
		}
	}
	return {
		isClaimed,
		isActive,
		claim,
		release,
		tryAbandon
	};
}
function isDragging(state) {
	if (state.phase === "IDLE" || state.phase === "DROP_ANIMATING") return false;
	return state.isDragging;
}
var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;
var preventedKeys = {
	[enter]: true,
	[tab]: true
};
var preventStandardKeyEvents = (event) => {
	if (preventedKeys[event.keyCode]) event.preventDefault();
};
var supportedEventName = (() => {
	const base = "visibilitychange";
	if (typeof document === "undefined") return base;
	return [
		base,
		`ms${base}`,
		`webkit${base}`,
		`moz${base}`,
		`o${base}`
	].find((eventName) => `on${eventName}` in document) || base;
})();
var primaryButton = 0;
var sloppyClickThreshold = 5;
function isSloppyClickThresholdExceeded(original, current) {
	return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}
var idle$1 = { type: "IDLE" };
function getCaptureBindings({ cancel, completed, getPhase, setPhase }) {
	return [
		{
			eventName: "mousemove",
			fn: (event) => {
				const { button, clientX, clientY } = event;
				if (button !== primaryButton) return;
				const point = {
					x: clientX,
					y: clientY
				};
				const phase = getPhase();
				if (phase.type === "DRAGGING") {
					event.preventDefault();
					phase.actions.move(point);
					return;
				}
				!(phase.type === "PENDING") && invariant();
				const pending = phase.point;
				if (!isSloppyClickThresholdExceeded(pending, point)) return;
				event.preventDefault();
				setPhase({
					type: "DRAGGING",
					actions: phase.actions.fluidLift(point)
				});
			}
		},
		{
			eventName: "mouseup",
			fn: (event) => {
				const phase = getPhase();
				if (phase.type !== "DRAGGING") {
					cancel();
					return;
				}
				event.preventDefault();
				phase.actions.drop({ shouldBlockNextClick: true });
				completed();
			}
		},
		{
			eventName: "mousedown",
			fn: (event) => {
				if (getPhase().type === "DRAGGING") event.preventDefault();
				cancel();
			}
		},
		{
			eventName: "keydown",
			fn: (event) => {
				if (getPhase().type === "PENDING") {
					cancel();
					return;
				}
				if (event.keyCode === escape) {
					event.preventDefault();
					cancel();
					return;
				}
				preventStandardKeyEvents(event);
			}
		},
		{
			eventName: "resize",
			fn: cancel
		},
		{
			eventName: "scroll",
			options: {
				passive: true,
				capture: false
			},
			fn: () => {
				if (getPhase().type === "PENDING") cancel();
			}
		},
		{
			eventName: "webkitmouseforcedown",
			fn: (event) => {
				const phase = getPhase();
				!(phase.type !== "IDLE") && invariant();
				if (phase.actions.shouldRespectForcePress()) {
					cancel();
					return;
				}
				event.preventDefault();
			}
		},
		{
			eventName: supportedEventName,
			fn: cancel
		}
	];
}
function useMouseSensor(api) {
	const phaseRef = (0, import_react.useRef)(idle$1);
	const unbindEventsRef = (0, import_react.useRef)(noop$2);
	const startCaptureBinding = useMemo(() => ({
		eventName: "mousedown",
		fn: function onMouseDown(event) {
			if (event.defaultPrevented) return;
			if (event.button !== primaryButton) return;
			if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
			const draggableId = api.findClosestDraggableId(event);
			if (!draggableId) return;
			const actions = api.tryGetLock(draggableId, stop, { sourceEvent: event });
			if (!actions) return;
			event.preventDefault();
			const point = {
				x: event.clientX,
				y: event.clientY
			};
			unbindEventsRef.current();
			startPendingDrag(actions, point);
		}
	}), [api]);
	const preventForcePressBinding = useMemo(() => ({
		eventName: "webkitmouseforcewillbegin",
		fn: (event) => {
			if (event.defaultPrevented) return;
			const id = api.findClosestDraggableId(event);
			if (!id) return;
			const options = api.findOptionsForDraggable(id);
			if (!options) return;
			if (options.shouldRespectForcePress) return;
			if (!api.canGetLock(id)) return;
			event.preventDefault();
		}
	}), [api]);
	const listenForCapture = useCallback(function listenForCapture() {
		unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], {
			passive: false,
			capture: true
		});
	}, [preventForcePressBinding, startCaptureBinding]);
	const stop = useCallback(() => {
		if (phaseRef.current.type === "IDLE") return;
		phaseRef.current = idle$1;
		unbindEventsRef.current();
		listenForCapture();
	}, [listenForCapture]);
	const cancel = useCallback(() => {
		const phase = phaseRef.current;
		stop();
		if (phase.type === "DRAGGING") phase.actions.cancel({ shouldBlockNextClick: true });
		if (phase.type === "PENDING") phase.actions.abort();
	}, [stop]);
	const bindCapturingEvents = useCallback(function bindCapturingEvents() {
		const options = {
			capture: true,
			passive: false
		};
		const bindings = getCaptureBindings({
			cancel,
			completed: stop,
			getPhase: () => phaseRef.current,
			setPhase: (phase) => {
				phaseRef.current = phase;
			}
		});
		unbindEventsRef.current = bindEvents(window, bindings, options);
	}, [cancel, stop]);
	const startPendingDrag = useCallback(function startPendingDrag(actions, point) {
		!(phaseRef.current.type === "IDLE") && invariant();
		phaseRef.current = {
			type: "PENDING",
			point,
			actions
		};
		bindCapturingEvents();
	}, [bindCapturingEvents]);
	useIsomorphicLayoutEffect(function mount() {
		listenForCapture();
		return function unmount() {
			unbindEventsRef.current();
		};
	}, [listenForCapture]);
}
function noop$1() {}
var scrollJumpKeys = {
	[pageDown]: true,
	[pageUp]: true,
	[home]: true,
	[end]: true
};
function getDraggingBindings(actions, stop) {
	function cancel() {
		stop();
		actions.cancel();
	}
	function drop() {
		stop();
		actions.drop();
	}
	return [
		{
			eventName: "keydown",
			fn: (event) => {
				if (event.keyCode === escape) {
					event.preventDefault();
					cancel();
					return;
				}
				if (event.keyCode === space) {
					event.preventDefault();
					drop();
					return;
				}
				if (event.keyCode === arrowDown) {
					event.preventDefault();
					actions.moveDown();
					return;
				}
				if (event.keyCode === arrowUp) {
					event.preventDefault();
					actions.moveUp();
					return;
				}
				if (event.keyCode === arrowRight) {
					event.preventDefault();
					actions.moveRight();
					return;
				}
				if (event.keyCode === arrowLeft) {
					event.preventDefault();
					actions.moveLeft();
					return;
				}
				if (scrollJumpKeys[event.keyCode]) {
					event.preventDefault();
					return;
				}
				preventStandardKeyEvents(event);
			}
		},
		{
			eventName: "mousedown",
			fn: cancel
		},
		{
			eventName: "mouseup",
			fn: cancel
		},
		{
			eventName: "click",
			fn: cancel
		},
		{
			eventName: "touchstart",
			fn: cancel
		},
		{
			eventName: "resize",
			fn: cancel
		},
		{
			eventName: "wheel",
			fn: cancel,
			options: { passive: true }
		},
		{
			eventName: supportedEventName,
			fn: cancel
		}
	];
}
function useKeyboardSensor(api) {
	const unbindEventsRef = (0, import_react.useRef)(noop$1);
	const startCaptureBinding = useMemo(() => ({
		eventName: "keydown",
		fn: function onKeyDown(event) {
			if (event.defaultPrevented) return;
			if (event.keyCode !== space) return;
			const draggableId = api.findClosestDraggableId(event);
			if (!draggableId) return;
			const preDrag = api.tryGetLock(draggableId, stop, { sourceEvent: event });
			if (!preDrag) return;
			event.preventDefault();
			let isCapturing = true;
			const actions = preDrag.snapLift();
			unbindEventsRef.current();
			function stop() {
				!isCapturing && invariant();
				isCapturing = false;
				unbindEventsRef.current();
				listenForCapture();
			}
			unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
				capture: true,
				passive: false
			});
		}
	}), [api]);
	const listenForCapture = useCallback(function tryStartCapture() {
		unbindEventsRef.current = bindEvents(window, [startCaptureBinding], {
			passive: false,
			capture: true
		});
	}, [startCaptureBinding]);
	useIsomorphicLayoutEffect(function mount() {
		listenForCapture();
		return function unmount() {
			unbindEventsRef.current();
		};
	}, [listenForCapture]);
}
var idle = { type: "IDLE" };
var timeForLongPress = 120;
var forcePressThreshold = .15;
function getWindowBindings({ cancel, getPhase }) {
	return [
		{
			eventName: "orientationchange",
			fn: cancel
		},
		{
			eventName: "resize",
			fn: cancel
		},
		{
			eventName: "contextmenu",
			fn: (event) => {
				event.preventDefault();
			}
		},
		{
			eventName: "keydown",
			fn: (event) => {
				if (getPhase().type !== "DRAGGING") {
					cancel();
					return;
				}
				if (event.keyCode === escape) event.preventDefault();
				cancel();
			}
		},
		{
			eventName: supportedEventName,
			fn: cancel
		}
	];
}
function getHandleBindings({ cancel, completed, getPhase }) {
	return [
		{
			eventName: "touchmove",
			options: { capture: false },
			fn: (event) => {
				const phase = getPhase();
				if (phase.type !== "DRAGGING") {
					cancel();
					return;
				}
				phase.hasMoved = true;
				const { clientX, clientY } = event.touches[0];
				const point = {
					x: clientX,
					y: clientY
				};
				event.preventDefault();
				phase.actions.move(point);
			}
		},
		{
			eventName: "touchend",
			fn: (event) => {
				const phase = getPhase();
				if (phase.type !== "DRAGGING") {
					cancel();
					return;
				}
				event.preventDefault();
				phase.actions.drop({ shouldBlockNextClick: true });
				completed();
			}
		},
		{
			eventName: "touchcancel",
			fn: (event) => {
				if (getPhase().type !== "DRAGGING") {
					cancel();
					return;
				}
				event.preventDefault();
				cancel();
			}
		},
		{
			eventName: "touchforcechange",
			fn: (event) => {
				const phase = getPhase();
				!(phase.type !== "IDLE") && invariant();
				const touch = event.touches[0];
				if (!touch) return;
				if (!(touch.force >= forcePressThreshold)) return;
				const shouldRespect = phase.actions.shouldRespectForcePress();
				if (phase.type === "PENDING") {
					if (shouldRespect) cancel();
					return;
				}
				if (shouldRespect) {
					if (phase.hasMoved) {
						event.preventDefault();
						return;
					}
					cancel();
					return;
				}
				event.preventDefault();
			}
		},
		{
			eventName: supportedEventName,
			fn: cancel
		}
	];
}
function useTouchSensor(api) {
	const phaseRef = (0, import_react.useRef)(idle);
	const unbindEventsRef = (0, import_react.useRef)(noop$2);
	const getPhase = useCallback(function getPhase() {
		return phaseRef.current;
	}, []);
	const setPhase = useCallback(function setPhase(phase) {
		phaseRef.current = phase;
	}, []);
	const startCaptureBinding = useMemo(() => ({
		eventName: "touchstart",
		fn: function onTouchStart(event) {
			if (event.defaultPrevented) return;
			const draggableId = api.findClosestDraggableId(event);
			if (!draggableId) return;
			const actions = api.tryGetLock(draggableId, stop, { sourceEvent: event });
			if (!actions) return;
			const { clientX, clientY } = event.touches[0];
			const point = {
				x: clientX,
				y: clientY
			};
			unbindEventsRef.current();
			startPendingDrag(actions, point);
		}
	}), [api]);
	const listenForCapture = useCallback(function listenForCapture() {
		unbindEventsRef.current = bindEvents(window, [startCaptureBinding], {
			capture: true,
			passive: false
		});
	}, [startCaptureBinding]);
	const stop = useCallback(() => {
		const current = phaseRef.current;
		if (current.type === "IDLE") return;
		if (current.type === "PENDING") clearTimeout(current.longPressTimerId);
		setPhase(idle);
		unbindEventsRef.current();
		listenForCapture();
	}, [listenForCapture, setPhase]);
	const cancel = useCallback(() => {
		const phase = phaseRef.current;
		stop();
		if (phase.type === "DRAGGING") phase.actions.cancel({ shouldBlockNextClick: true });
		if (phase.type === "PENDING") phase.actions.abort();
	}, [stop]);
	const bindCapturingEvents = useCallback(function bindCapturingEvents() {
		const options = {
			capture: true,
			passive: false
		};
		const args = {
			cancel,
			completed: stop,
			getPhase
		};
		const unbindTarget = bindEvents(window, getHandleBindings(args), options);
		const unbindWindow = bindEvents(window, getWindowBindings(args), options);
		unbindEventsRef.current = function unbindAll() {
			unbindTarget();
			unbindWindow();
		};
	}, [
		cancel,
		getPhase,
		stop
	]);
	const startDragging = useCallback(function startDragging() {
		const phase = getPhase();
		!(phase.type === "PENDING") && invariant();
		setPhase({
			type: "DRAGGING",
			actions: phase.actions.fluidLift(phase.point),
			hasMoved: false
		});
	}, [getPhase, setPhase]);
	const startPendingDrag = useCallback(function startPendingDrag(actions, point) {
		!(getPhase().type === "IDLE") && invariant();
		setPhase({
			type: "PENDING",
			point,
			actions,
			longPressTimerId: setTimeout(startDragging, timeForLongPress)
		});
		bindCapturingEvents();
	}, [
		bindCapturingEvents,
		getPhase,
		setPhase,
		startDragging
	]);
	useIsomorphicLayoutEffect(function mount() {
		listenForCapture();
		return function unmount() {
			unbindEventsRef.current();
			const phase = getPhase();
			if (phase.type === "PENDING") {
				clearTimeout(phase.longPressTimerId);
				setPhase(idle);
			}
		};
	}, [
		getPhase,
		listenForCapture,
		setPhase
	]);
	useIsomorphicLayoutEffect(function webkitHack() {
		return bindEvents(window, [{
			eventName: "touchmove",
			fn: () => {},
			options: {
				capture: false,
				passive: false
			}
		}]);
	}, []);
}
var interactiveTagNames = [
	"input",
	"button",
	"textarea",
	"select",
	"option",
	"optgroup",
	"video",
	"audio"
];
function isAnInteractiveElement(parent, current) {
	if (current == null) return false;
	if (interactiveTagNames.includes(current.tagName.toLowerCase())) return true;
	const attribute = current.getAttribute("contenteditable");
	if (attribute === "true" || attribute === "") return true;
	if (current === parent) return false;
	return isAnInteractiveElement(parent, current.parentElement);
}
function isEventInInteractiveElement(draggable, event) {
	const target = event.target;
	if (!isHtmlElement(target)) return false;
	return isAnInteractiveElement(draggable, target);
}
var getBorderBoxCenterPosition = (el) => getRect(el.getBoundingClientRect()).center;
function isElement(el) {
	return el instanceof getWindowFromEl(el).Element;
}
var supportedMatchesName = (() => {
	const base = "matches";
	if (typeof document === "undefined") return base;
	return [
		base,
		"msMatchesSelector",
		"webkitMatchesSelector"
	].find((name) => name in Element.prototype) || base;
})();
function closestPonyfill(el, selector) {
	if (el == null) return null;
	if (el[supportedMatchesName](selector)) return el;
	return closestPonyfill(el.parentElement, selector);
}
function closest(el, selector) {
	if (el.closest) return el.closest(selector);
	return closestPonyfill(el, selector);
}
function getSelector(contextId) {
	return `[${dragHandle.contextId}="${contextId}"]`;
}
function findClosestDragHandleFromEvent(contextId, event) {
	const target = event.target;
	if (!isElement(target)) return null;
	const handle = closest(target, getSelector(contextId));
	if (!handle) return null;
	if (!isHtmlElement(handle)) return null;
	return handle;
}
function tryGetClosestDraggableIdFromEvent(contextId, event) {
	const handle = findClosestDragHandleFromEvent(contextId, event);
	if (!handle) return null;
	return handle.getAttribute(dragHandle.draggableId);
}
function findDraggable(contextId, draggableId) {
	const selector = `[${draggable.contextId}="${contextId}"]`;
	const draggable$1 = querySelectorAll(document, selector).find((el) => {
		return el.getAttribute(draggable.id) === draggableId;
	});
	if (!draggable$1) return null;
	if (!isHtmlElement(draggable$1)) return null;
	return draggable$1;
}
function preventDefault(event) {
	event.preventDefault();
}
function isActive({ expected, phase, isLockActive, shouldWarn }) {
	if (!isLockActive()) {
		if (shouldWarn) {}
		return false;
	}
	if (expected !== phase) {
		if (shouldWarn) {}
		return false;
	}
	return true;
}
function canStart({ lockAPI, store, registry, draggableId }) {
	if (lockAPI.isClaimed()) return false;
	const entry = registry.draggable.findById(draggableId);
	if (!entry) return false;
	if (!entry.options.isEnabled) return false;
	if (!canStartDrag(store.getState(), draggableId)) return false;
	return true;
}
function tryStart({ lockAPI, contextId, store, registry, draggableId, forceSensorStop, sourceEvent }) {
	if (!canStart({
		lockAPI,
		store,
		registry,
		draggableId
	})) return null;
	const entry = registry.draggable.getById(draggableId);
	const el = findDraggable(contextId, entry.descriptor.id);
	if (!el) return null;
	if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) return null;
	const lock = lockAPI.claim(forceSensorStop || noop$2);
	let phase = "PRE_DRAG";
	function getShouldRespectForcePress() {
		return entry.options.shouldRespectForcePress;
	}
	function isLockActive() {
		return lockAPI.isActive(lock);
	}
	function tryDispatch(expected, getAction) {
		if (isActive({
			expected,
			phase,
			isLockActive,
			shouldWarn: true
		})) store.dispatch(getAction());
	}
	const tryDispatchWhenDragging = tryDispatch.bind(null, "DRAGGING");
	function lift(args) {
		function completed() {
			lockAPI.release();
			phase = "COMPLETED";
		}
		if (phase !== "PRE_DRAG") {
			completed();
			invariant();
		}
		store.dispatch(lift$1(args.liftActionArgs));
		phase = "DRAGGING";
		function finish(reason, options = { shouldBlockNextClick: false }) {
			args.cleanup();
			if (options.shouldBlockNextClick) {
				const unbind = bindEvents(window, [{
					eventName: "click",
					fn: preventDefault,
					options: {
						once: true,
						passive: false,
						capture: true
					}
				}]);
				setTimeout(unbind);
			}
			completed();
			store.dispatch(drop({ reason }));
		}
		return {
			isActive: () => isActive({
				expected: "DRAGGING",
				phase,
				isLockActive,
				shouldWarn: false
			}),
			shouldRespectForcePress: getShouldRespectForcePress,
			drop: (options) => finish("DROP", options),
			cancel: (options) => finish("CANCEL", options),
			...args.actions
		};
	}
	function fluidLift(clientSelection) {
		const move$1 = rafSchd((client) => {
			tryDispatchWhenDragging(() => move({ client }));
		});
		return {
			...lift({
				liftActionArgs: {
					id: draggableId,
					clientSelection,
					movementMode: "FLUID"
				},
				cleanup: () => move$1.cancel(),
				actions: { move: move$1 }
			}),
			move: move$1
		};
	}
	function snapLift() {
		return lift({
			liftActionArgs: {
				id: draggableId,
				clientSelection: getBorderBoxCenterPosition(el),
				movementMode: "SNAP"
			},
			cleanup: noop$2,
			actions: {
				moveUp: () => tryDispatchWhenDragging(moveUp),
				moveRight: () => tryDispatchWhenDragging(moveRight),
				moveDown: () => tryDispatchWhenDragging(moveDown),
				moveLeft: () => tryDispatchWhenDragging(moveLeft)
			}
		});
	}
	function abortPreDrag() {
		if (isActive({
			expected: "PRE_DRAG",
			phase,
			isLockActive,
			shouldWarn: true
		})) lockAPI.release();
	}
	return {
		isActive: () => isActive({
			expected: "PRE_DRAG",
			phase,
			isLockActive,
			shouldWarn: false
		}),
		shouldRespectForcePress: getShouldRespectForcePress,
		fluidLift,
		snapLift,
		abort: abortPreDrag
	};
}
var defaultSensors = [
	useMouseSensor,
	useKeyboardSensor,
	useTouchSensor
];
function useSensorMarshal({ contextId, store, registry, customSensors, enableDefaultSensors }) {
	const useSensors = [...enableDefaultSensors ? defaultSensors : [], ...customSensors || []];
	const lockAPI = (0, import_react.useState)(() => create())[0];
	const tryAbandonLock = useCallback(function tryAbandonLock(previous, current) {
		if (isDragging(previous) && !isDragging(current)) lockAPI.tryAbandon();
	}, [lockAPI]);
	useIsomorphicLayoutEffect(function listenToStore() {
		let previous = store.getState();
		return store.subscribe(() => {
			const current = store.getState();
			tryAbandonLock(previous, current);
			previous = current;
		});
	}, [
		lockAPI,
		store,
		tryAbandonLock
	]);
	useIsomorphicLayoutEffect(() => {
		return lockAPI.tryAbandon;
	}, [lockAPI.tryAbandon]);
	const canGetLock = useCallback((draggableId) => {
		return canStart({
			lockAPI,
			registry,
			store,
			draggableId
		});
	}, [
		lockAPI,
		registry,
		store
	]);
	const tryGetLock = useCallback((draggableId, forceStop, options) => tryStart({
		lockAPI,
		registry,
		contextId,
		store,
		draggableId,
		forceSensorStop: forceStop || null,
		sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
	}), [
		contextId,
		lockAPI,
		registry,
		store
	]);
	const findClosestDraggableId = useCallback((event) => tryGetClosestDraggableIdFromEvent(contextId, event), [contextId]);
	const findOptionsForDraggable = useCallback((id) => {
		const entry = registry.draggable.findById(id);
		return entry ? entry.options : null;
	}, [registry.draggable]);
	const tryReleaseLock = useCallback(function tryReleaseLock() {
		if (!lockAPI.isClaimed()) return;
		lockAPI.tryAbandon();
		if (store.getState().phase !== "IDLE") store.dispatch(flush());
	}, [lockAPI, store]);
	const isLockClaimed = useCallback(() => lockAPI.isClaimed(), [lockAPI]);
	const api = useMemo(() => ({
		canGetLock,
		tryGetLock,
		findClosestDraggableId,
		findOptionsForDraggable,
		tryReleaseLock,
		isLockClaimed
	}), [
		canGetLock,
		tryGetLock,
		findClosestDraggableId,
		findOptionsForDraggable,
		tryReleaseLock,
		isLockClaimed
	]);
	for (let i = 0; i < useSensors.length; i++) useSensors[i](api);
}
var createResponders = (props) => ({
	onBeforeCapture: (t) => {
		const onBeforeCapureCallback = () => {
			if (props.onBeforeCapture) props.onBeforeCapture(t);
		};
		(0, import_react_dom.flushSync)(onBeforeCapureCallback);
	},
	onBeforeDragStart: props.onBeforeDragStart,
	onDragStart: props.onDragStart,
	onDragEnd: props.onDragEnd,
	onDragUpdate: props.onDragUpdate
});
var createAutoScrollerOptions = (props) => ({
	...defaultAutoScrollerOptions,
	...props.autoScrollerOptions,
	durationDampening: {
		...defaultAutoScrollerOptions.durationDampening,
		...props.autoScrollerOptions
	}
});
function getStore(lazyRef) {
	!lazyRef.current && invariant();
	return lazyRef.current;
}
function App(props) {
	const { contextId, setCallbacks, sensors, nonce, dragHandleUsageInstructions } = props;
	const lazyStoreRef = (0, import_react.useRef)(null);
	const lastPropsRef = usePrevious(props);
	const getResponders = useCallback(() => {
		return createResponders(lastPropsRef.current);
	}, [lastPropsRef]);
	const getAutoScrollerOptions = useCallback(() => {
		return createAutoScrollerOptions(lastPropsRef.current);
	}, [lastPropsRef]);
	const announce = useAnnouncer(contextId);
	const dragHandleUsageInstructionsId = useHiddenTextElement({
		contextId,
		text: dragHandleUsageInstructions
	});
	const styleMarshal = useStyleMarshal(contextId, nonce);
	const lazyDispatch = useCallback((action) => {
		getStore(lazyStoreRef).dispatch(action);
	}, []);
	const marshalCallbacks = useMemo(() => bindActionCreators$1({
		publishWhileDragging,
		updateDroppableScroll,
		updateDroppableIsEnabled,
		updateDroppableIsCombineEnabled,
		collectionStarting
	}, lazyDispatch), [lazyDispatch]);
	const registry = useRegistry();
	const dimensionMarshal = useMemo(() => {
		return createDimensionMarshal(registry, marshalCallbacks);
	}, [registry, marshalCallbacks]);
	const autoScroller = useMemo(() => createAutoScroller({
		scrollWindow,
		scrollDroppable: dimensionMarshal.scrollDroppable,
		getAutoScrollerOptions,
		...bindActionCreators$1({ move }, lazyDispatch)
	}), [
		dimensionMarshal.scrollDroppable,
		lazyDispatch,
		getAutoScrollerOptions
	]);
	const focusMarshal = useFocusMarshal(contextId);
	const store = useMemo(() => createStore({
		announce,
		autoScroller,
		dimensionMarshal,
		focusMarshal,
		getResponders,
		styleMarshal
	}), [
		announce,
		autoScroller,
		dimensionMarshal,
		focusMarshal,
		getResponders,
		styleMarshal
	]);
	lazyStoreRef.current = store;
	const tryResetStore = useCallback(() => {
		const current = getStore(lazyStoreRef);
		if (current.getState().phase !== "IDLE") current.dispatch(flush());
	}, []);
	const isDragging = useCallback(() => {
		const state = getStore(lazyStoreRef).getState();
		if (state.phase === "DROP_ANIMATING") return true;
		if (state.phase === "IDLE") return false;
		return state.isDragging;
	}, []);
	setCallbacks(useMemo(() => ({
		isDragging,
		tryAbort: tryResetStore
	}), [isDragging, tryResetStore]));
	const getCanLift = useCallback((id) => canStartDrag(getStore(lazyStoreRef).getState(), id), []);
	const getIsMovementAllowed = useCallback(() => isMovementAllowed(getStore(lazyStoreRef).getState()), []);
	const appContext = useMemo(() => ({
		marshal: dimensionMarshal,
		focus: focusMarshal,
		contextId,
		canLift: getCanLift,
		isMovementAllowed: getIsMovementAllowed,
		dragHandleUsageInstructionsId,
		registry
	}), [
		contextId,
		dimensionMarshal,
		dragHandleUsageInstructionsId,
		focusMarshal,
		getCanLift,
		getIsMovementAllowed,
		registry
	]);
	useSensorMarshal({
		contextId,
		store,
		registry,
		customSensors: sensors || null,
		enableDefaultSensors: props.enableDefaultSensors !== false
	});
	(0, import_react.useEffect)(() => {
		return tryResetStore;
	}, [tryResetStore]);
	return import_react.createElement(AppContext.Provider, { value: appContext }, import_react.createElement(Provider_default, {
		context: StoreContext,
		store
	}, props.children));
}
function useUniqueContextId() {
	return import_react.useId();
}
function DragDropContext(props) {
	const contextId = useUniqueContextId();
	const dragHandleUsageInstructions = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
	return import_react.createElement(ErrorBoundary, null, (setCallbacks) => import_react.createElement(App, {
		nonce: props.nonce,
		contextId,
		setCallbacks,
		dragHandleUsageInstructions,
		enableDefaultSensors: props.enableDefaultSensors,
		sensors: props.sensors,
		onBeforeCapture: props.onBeforeCapture,
		onBeforeDragStart: props.onBeforeDragStart,
		onDragStart: props.onDragStart,
		onDragUpdate: props.onDragUpdate,
		onDragEnd: props.onDragEnd,
		autoScrollerOptions: props.autoScrollerOptions
	}, props.children));
}
var zIndexOptions = {
	dragging: 5e3,
	dropAnimating: 4500
};
var getDraggingTransition = (shouldAnimateDragMovement, dropping) => {
	if (dropping) return transitions.drop(dropping.duration);
	if (shouldAnimateDragMovement) return transitions.snap;
	return transitions.fluid;
};
var getDraggingOpacity = (isCombining, isDropAnimating) => {
	if (!isCombining) return;
	return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};
var getShouldDraggingAnimate = (dragging) => {
	if (dragging.forceShouldAnimate != null) return dragging.forceShouldAnimate;
	return dragging.mode === "SNAP";
};
function getDraggingStyle(dragging) {
	const box = dragging.dimension.client;
	const { offset, combineWith, dropping } = dragging;
	const isCombining = Boolean(combineWith);
	const shouldAnimate = getShouldDraggingAnimate(dragging);
	const isDropAnimating = Boolean(dropping);
	const transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
	return {
		position: "fixed",
		top: box.marginBox.top,
		left: box.marginBox.left,
		boxSizing: "border-box",
		width: box.borderBox.width,
		height: box.borderBox.height,
		transition: getDraggingTransition(shouldAnimate, dropping),
		transform,
		opacity: getDraggingOpacity(isCombining, isDropAnimating),
		zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
		pointerEvents: "none"
	};
}
function getSecondaryStyle(secondary) {
	return {
		transform: transforms.moveTo(secondary.offset),
		transition: secondary.shouldAnimateDisplacement ? void 0 : "none"
	};
}
function getStyle$1(mapped) {
	return mapped.type === "DRAGGING" ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}
function getDimension$1(descriptor, el, windowScroll = origin) {
	const computedStyles = window.getComputedStyle(el);
	const client = calculateBox(el.getBoundingClientRect(), computedStyles);
	const page = withScroll(client, windowScroll);
	return {
		descriptor,
		placeholder: {
			client,
			tagName: el.tagName.toLowerCase(),
			display: computedStyles.display
		},
		displaceBy: {
			x: client.marginBox.width,
			y: client.marginBox.height
		},
		client,
		page
	};
}
function useDraggablePublisher(args) {
	const uniqueId = useUniqueId("draggable");
	const { descriptor, registry, getDraggableRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled } = args;
	const options = useMemo(() => ({
		canDragInteractiveElements,
		shouldRespectForcePress,
		isEnabled
	}), [
		canDragInteractiveElements,
		isEnabled,
		shouldRespectForcePress
	]);
	const getDimension = useCallback((windowScroll) => {
		const el = getDraggableRef();
		!el && invariant();
		return getDimension$1(descriptor, el, windowScroll);
	}, [descriptor, getDraggableRef]);
	const entry = useMemo(() => ({
		uniqueId,
		descriptor,
		options,
		getDimension
	}), [
		descriptor,
		getDimension,
		options,
		uniqueId
	]);
	const publishedRef = (0, import_react.useRef)(entry);
	const isFirstPublishRef = (0, import_react.useRef)(true);
	useIsomorphicLayoutEffect(() => {
		registry.draggable.register(publishedRef.current);
		return () => registry.draggable.unregister(publishedRef.current);
	}, [registry.draggable]);
	useIsomorphicLayoutEffect(() => {
		if (isFirstPublishRef.current) {
			isFirstPublishRef.current = false;
			return;
		}
		const last = publishedRef.current;
		publishedRef.current = entry;
		registry.draggable.update(entry, last);
	}, [entry, registry.draggable]);
}
var DroppableContext = import_react.createContext(null);
function useRequiredContext(Context) {
	const result = (0, import_react.useContext)(Context);
	!result && invariant();
	return result;
}
function preventHtml5Dnd(event) {
	event.preventDefault();
}
var Draggable = (props) => {
	const ref = (0, import_react.useRef)(null);
	const setRef = useCallback((el = null) => {
		ref.current = el;
	}, []);
	const getRef = useCallback(() => ref.current, []);
	const { contextId, dragHandleUsageInstructionsId, registry } = useRequiredContext(AppContext);
	const { type, droppableId } = useRequiredContext(DroppableContext);
	const descriptor = useMemo(() => ({
		id: props.draggableId,
		index: props.index,
		type,
		droppableId
	}), [
		props.draggableId,
		props.index,
		type,
		droppableId
	]);
	const { children, draggableId, isEnabled, shouldRespectForcePress, canDragInteractiveElements, isClone, mapped, dropAnimationFinished: dropAnimationFinishedAction } = props;
	if (!isClone) useDraggablePublisher(useMemo(() => ({
		descriptor,
		registry,
		getDraggableRef: getRef,
		canDragInteractiveElements,
		shouldRespectForcePress,
		isEnabled
	}), [
		descriptor,
		registry,
		getRef,
		canDragInteractiveElements,
		shouldRespectForcePress,
		isEnabled
	]));
	const dragHandleProps = useMemo(() => isEnabled ? {
		tabIndex: 0,
		role: "button",
		"aria-describedby": dragHandleUsageInstructionsId,
		"data-rfd-drag-handle-draggable-id": draggableId,
		"data-rfd-drag-handle-context-id": contextId,
		draggable: false,
		onDragStart: preventHtml5Dnd
	} : null, [
		contextId,
		dragHandleUsageInstructionsId,
		draggableId,
		isEnabled
	]);
	const onMoveEnd = useCallback((event) => {
		if (mapped.type !== "DRAGGING") return;
		if (!mapped.dropping) return;
		if (event.propertyName !== "transform") return;
		(0, import_react_dom.flushSync)(dropAnimationFinishedAction);
	}, [dropAnimationFinishedAction, mapped]);
	const provided = useMemo(() => {
		return {
			innerRef: setRef,
			draggableProps: {
				"data-rfd-draggable-context-id": contextId,
				"data-rfd-draggable-id": draggableId,
				style: getStyle$1(mapped),
				onTransitionEnd: mapped.type === "DRAGGING" && mapped.dropping ? onMoveEnd : void 0
			},
			dragHandleProps
		};
	}, [
		contextId,
		dragHandleProps,
		draggableId,
		mapped,
		onMoveEnd,
		setRef
	]);
	const rubric = useMemo(() => ({
		draggableId: descriptor.id,
		type: descriptor.type,
		source: {
			index: descriptor.index,
			droppableId: descriptor.droppableId
		}
	}), [
		descriptor.droppableId,
		descriptor.id,
		descriptor.index,
		descriptor.type
	]);
	return import_react.createElement(import_react.Fragment, null, children(provided, mapped.snapshot, rubric));
};
var isStrictEqual = (a, b) => a === b;
var whatIsDraggedOverFromResult = (result) => {
	const { combine, destination } = result;
	if (destination) return destination.droppableId;
	if (combine) return combine.droppableId;
	return null;
};
var getCombineWithFromResult = (result) => {
	return result.combine ? result.combine.draggableId : null;
};
var getCombineWithFromImpact = (impact) => {
	return impact.at && impact.at.type === "COMBINE" ? impact.at.combine.draggableId : null;
};
function getDraggableSelector() {
	const memoizedOffset = memoizeOne((x, y) => ({
		x,
		y
	}));
	const getMemoizedSnapshot = memoizeOne((mode, isClone, draggingOver = null, combineWith = null, dropping = null) => ({
		isDragging: true,
		isClone,
		isDropAnimating: Boolean(dropping),
		dropAnimation: dropping,
		mode,
		draggingOver,
		combineWith,
		combineTargetFor: null
	}));
	const getMemoizedProps = memoizeOne((offset, mode, dimension, isClone, draggingOver = null, combineWith = null, forceShouldAnimate = null) => ({ mapped: {
		type: "DRAGGING",
		dropping: null,
		draggingOver,
		combineWith,
		mode,
		offset,
		dimension,
		forceShouldAnimate,
		snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
	} }));
	const selector = (state, ownProps) => {
		if (isDragging(state)) {
			if (state.critical.draggable.id !== ownProps.draggableId) return null;
			const offset = state.current.client.offset;
			const dimension = state.dimensions.draggables[ownProps.draggableId];
			const draggingOver = whatIsDraggedOver(state.impact);
			const combineWith = getCombineWithFromImpact(state.impact);
			const forceShouldAnimate = state.forceShouldAnimate;
			return getMemoizedProps(memoizedOffset(offset.x, offset.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
		}
		if (state.phase === "DROP_ANIMATING") {
			const completed = state.completed;
			if (completed.result.draggableId !== ownProps.draggableId) return null;
			const isClone = ownProps.isClone;
			const dimension = state.dimensions.draggables[ownProps.draggableId];
			const result = completed.result;
			const mode = result.mode;
			const draggingOver = whatIsDraggedOverFromResult(result);
			const combineWith = getCombineWithFromResult(result);
			const dropping = {
				duration: state.dropDuration,
				curve: curves.drop,
				moveTo: state.newHomeClientOffset,
				opacity: combineWith ? combine.opacity.drop : null,
				scale: combineWith ? combine.scale.drop : null
			};
			return { mapped: {
				type: "DRAGGING",
				offset: state.newHomeClientOffset,
				dimension,
				dropping,
				draggingOver,
				combineWith,
				mode,
				forceShouldAnimate: null,
				snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, dropping)
			} };
		}
		return null;
	};
	return selector;
}
function getSecondarySnapshot(combineTargetFor = null) {
	return {
		isDragging: false,
		isDropAnimating: false,
		isClone: false,
		dropAnimation: null,
		mode: null,
		draggingOver: null,
		combineTargetFor,
		combineWith: null
	};
}
var atRest = { mapped: {
	type: "SECONDARY",
	offset: origin,
	combineTargetFor: null,
	shouldAnimateDisplacement: true,
	snapshot: getSecondarySnapshot(null)
} };
function getSecondarySelector() {
	const memoizedOffset = memoizeOne((x, y) => ({
		x,
		y
	}));
	const getMemoizedSnapshot = memoizeOne(getSecondarySnapshot);
	const getMemoizedProps = memoizeOne((offset, combineTargetFor = null, shouldAnimateDisplacement) => ({ mapped: {
		type: "SECONDARY",
		offset,
		combineTargetFor,
		shouldAnimateDisplacement,
		snapshot: getMemoizedSnapshot(combineTargetFor)
	} }));
	const getFallback = (combineTargetFor) => {
		return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
	};
	const getProps = (ownId, draggingId, impact, afterCritical) => {
		const visualDisplacement = impact.displaced.visible[ownId];
		const isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
		const combine = tryGetCombine(impact);
		const combineTargetFor = combine && combine.draggableId === ownId ? draggingId : null;
		if (!visualDisplacement) {
			if (!isAfterCriticalInVirtualList) return getFallback(combineTargetFor);
			if (impact.displaced.invisible[ownId]) return null;
			const change = negate(afterCritical.displacedBy.point);
			return getMemoizedProps(memoizedOffset(change.x, change.y), combineTargetFor, true);
		}
		if (isAfterCriticalInVirtualList) return getFallback(combineTargetFor);
		const displaceBy = impact.displacedBy.point;
		return getMemoizedProps(memoizedOffset(displaceBy.x, displaceBy.y), combineTargetFor, visualDisplacement.shouldAnimate);
	};
	const selector = (state, ownProps) => {
		if (isDragging(state)) {
			if (state.critical.draggable.id === ownProps.draggableId) return null;
			return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
		}
		if (state.phase === "DROP_ANIMATING") {
			const completed = state.completed;
			if (completed.result.draggableId === ownProps.draggableId) return null;
			return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
		}
		return null;
	};
	return selector;
}
var makeMapStateToProps$1 = () => {
	const draggingSelector = getDraggableSelector();
	const secondarySelector = getSecondarySelector();
	const selector = (state, ownProps) => draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
	return selector;
};
var ConnectedDraggable = connect(makeMapStateToProps$1, { dropAnimationFinished }, null, {
	context: StoreContext,
	areStatePropsEqual: isStrictEqual
})(Draggable);
function PrivateDraggable(props) {
	if (useRequiredContext(DroppableContext).isUsingCloneFor === props.draggableId && !props.isClone) return null;
	return import_react.createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
	const isEnabled = typeof props.isDragDisabled === "boolean" ? !props.isDragDisabled : true;
	const canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
	const shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
	return import_react.createElement(PrivateDraggable, _extends({}, props, {
		isClone: false,
		isEnabled,
		canDragInteractiveElements,
		shouldRespectForcePress
	}));
}
var isEqual = (base) => (value) => base === value;
var isScroll = isEqual("scroll");
var isAuto = isEqual("auto");
var isEither = (overflow, fn) => fn(overflow.overflowX) || fn(overflow.overflowY);
var isElementScrollable = (el) => {
	const style = window.getComputedStyle(el);
	const overflow = {
		overflowX: style.overflowX,
		overflowY: style.overflowY
	};
	return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};
var isBodyScrollable = () => {
	return false;
};
var getClosestScrollable = (el) => {
	if (el == null) return null;
	if (el === document.body) return isBodyScrollable() ? el : null;
	if (el === document.documentElement) return null;
	if (!isElementScrollable(el)) return getClosestScrollable(el.parentElement);
	return el;
};
var getScroll = (el) => ({
	x: el.scrollLeft,
	y: el.scrollTop
});
var getIsFixed = (el) => {
	if (!el) return false;
	if (window.getComputedStyle(el).position === "fixed") return true;
	return getIsFixed(el.parentElement);
};
var getEnv = (start) => {
	return {
		closestScrollable: getClosestScrollable(start),
		isFixedOnPage: getIsFixed(start)
	};
};
var getDroppableDimension = ({ descriptor, isEnabled, isCombineEnabled, isFixedOnPage, direction, client, page, closest }) => {
	const frame = (() => {
		if (!closest) return null;
		const { scrollSize, client: frameClient } = closest;
		const maxScroll = getMaxScroll({
			scrollHeight: scrollSize.scrollHeight,
			scrollWidth: scrollSize.scrollWidth,
			height: frameClient.paddingBox.height,
			width: frameClient.paddingBox.width
		});
		return {
			pageMarginBox: closest.page.marginBox,
			frameClient,
			scrollSize,
			shouldClipSubject: closest.shouldClipSubject,
			scroll: {
				initial: closest.scroll,
				current: closest.scroll,
				max: maxScroll,
				diff: {
					value: origin,
					displacement: origin
				}
			}
		};
	})();
	const axis = direction === "vertical" ? vertical : horizontal;
	return {
		descriptor,
		isCombineEnabled,
		isFixedOnPage,
		axis,
		isEnabled,
		client,
		page,
		frame,
		subject: getSubject({
			page,
			withPlaceholder: null,
			axis,
			frame
		})
	};
};
var getClient = (targetRef, closestScrollable) => {
	const base = getBox(targetRef);
	if (!closestScrollable) return base;
	if (targetRef !== closestScrollable) return base;
	const top = base.paddingBox.top - closestScrollable.scrollTop;
	const left = base.paddingBox.left - closestScrollable.scrollLeft;
	const bottom = top + closestScrollable.scrollHeight;
	return createBox({
		borderBox: expand({
			top,
			right: left + closestScrollable.scrollWidth,
			bottom,
			left
		}, base.border),
		margin: base.margin,
		border: base.border,
		padding: base.padding
	});
};
var getDimension = ({ ref, descriptor, env, windowScroll, direction, isDropDisabled, isCombineEnabled, shouldClipSubject }) => {
	const closestScrollable = env.closestScrollable;
	const client = getClient(ref, closestScrollable);
	const page = withScroll(client, windowScroll);
	const closest = (() => {
		if (!closestScrollable) return null;
		const frameClient = getBox(closestScrollable);
		const scrollSize = {
			scrollHeight: closestScrollable.scrollHeight,
			scrollWidth: closestScrollable.scrollWidth
		};
		return {
			client: frameClient,
			page: withScroll(frameClient, windowScroll),
			scroll: getScroll(closestScrollable),
			scrollSize,
			shouldClipSubject
		};
	})();
	return getDroppableDimension({
		descriptor,
		isEnabled: !isDropDisabled,
		isCombineEnabled,
		isFixedOnPage: env.isFixedOnPage,
		direction,
		client,
		page,
		closest
	});
};
var immediate = { passive: false };
var delayed = { passive: true };
var getListenerOptions = (options) => options.shouldPublishImmediately ? immediate : delayed;
var getClosestScrollableFromDrag = (dragging) => dragging && dragging.env.closestScrollable || null;
function useDroppablePublisher(args) {
	const whileDraggingRef = (0, import_react.useRef)(null);
	const appContext = useRequiredContext(AppContext);
	const uniqueId = useUniqueId("droppable");
	const { registry, marshal } = appContext;
	const previousRef = usePrevious(args);
	const descriptor = useMemo(() => ({
		id: args.droppableId,
		type: args.type,
		mode: args.mode
	}), [
		args.droppableId,
		args.mode,
		args.type
	]);
	const publishedDescriptorRef = (0, import_react.useRef)(descriptor);
	const memoizedUpdateScroll = useMemo(() => memoizeOne((x, y) => {
		!whileDraggingRef.current && invariant();
		const scroll = {
			x,
			y
		};
		marshal.updateDroppableScroll(descriptor.id, scroll);
	}), [descriptor.id, marshal]);
	const getClosestScroll = useCallback(() => {
		const dragging = whileDraggingRef.current;
		if (!dragging || !dragging.env.closestScrollable) return origin;
		return getScroll(dragging.env.closestScrollable);
	}, []);
	const updateScroll = useCallback(() => {
		const scroll = getClosestScroll();
		memoizedUpdateScroll(scroll.x, scroll.y);
	}, [getClosestScroll, memoizedUpdateScroll]);
	const scheduleScrollUpdate = useMemo(() => rafSchd(updateScroll), [updateScroll]);
	const onClosestScroll = useCallback(() => {
		const dragging = whileDraggingRef.current;
		const closest = getClosestScrollableFromDrag(dragging);
		!(dragging && closest) && invariant();
		if (dragging.scrollOptions.shouldPublishImmediately) {
			updateScroll();
			return;
		}
		scheduleScrollUpdate();
	}, [scheduleScrollUpdate, updateScroll]);
	const getDimensionAndWatchScroll = useCallback((windowScroll, options) => {
		whileDraggingRef.current && invariant();
		const previous = previousRef.current;
		const ref = previous.getDroppableRef();
		!ref && invariant();
		const env = getEnv(ref);
		const dragging = {
			ref,
			descriptor,
			env,
			scrollOptions: options
		};
		whileDraggingRef.current = dragging;
		const dimension = getDimension({
			ref,
			descriptor,
			env,
			windowScroll,
			direction: previous.direction,
			isDropDisabled: previous.isDropDisabled,
			isCombineEnabled: previous.isCombineEnabled,
			shouldClipSubject: !previous.ignoreContainerClipping
		});
		const scrollable = env.closestScrollable;
		if (scrollable) {
			scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
			scrollable.addEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
		}
		return dimension;
	}, [
		appContext.contextId,
		descriptor,
		onClosestScroll,
		previousRef
	]);
	const getScrollWhileDragging = useCallback(() => {
		const dragging = whileDraggingRef.current;
		const closest = getClosestScrollableFromDrag(dragging);
		!(dragging && closest) && invariant();
		return getScroll(closest);
	}, []);
	const dragStopped = useCallback(() => {
		const dragging = whileDraggingRef.current;
		!dragging && invariant();
		const closest = getClosestScrollableFromDrag(dragging);
		whileDraggingRef.current = null;
		if (!closest) return;
		scheduleScrollUpdate.cancel();
		closest.removeAttribute(scrollContainer.contextId);
		closest.removeEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
	}, [onClosestScroll, scheduleScrollUpdate]);
	const scroll = useCallback((change) => {
		const dragging = whileDraggingRef.current;
		!dragging && invariant();
		const closest = getClosestScrollableFromDrag(dragging);
		!closest && invariant();
		closest.scrollTop += change.y;
		closest.scrollLeft += change.x;
	}, []);
	const callbacks = useMemo(() => {
		return {
			getDimensionAndWatchScroll,
			getScrollWhileDragging,
			dragStopped,
			scroll
		};
	}, [
		dragStopped,
		getDimensionAndWatchScroll,
		getScrollWhileDragging,
		scroll
	]);
	const entry = useMemo(() => ({
		uniqueId,
		descriptor,
		callbacks
	}), [
		callbacks,
		descriptor,
		uniqueId
	]);
	useIsomorphicLayoutEffect(() => {
		publishedDescriptorRef.current = entry.descriptor;
		registry.droppable.register(entry);
		return () => {
			if (whileDraggingRef.current) dragStopped();
			registry.droppable.unregister(entry);
		};
	}, [
		callbacks,
		descriptor,
		dragStopped,
		entry,
		marshal,
		registry.droppable
	]);
	useIsomorphicLayoutEffect(() => {
		if (!whileDraggingRef.current) return;
		marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
	}, [args.isDropDisabled, marshal]);
	useIsomorphicLayoutEffect(() => {
		if (!whileDraggingRef.current) return;
		marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
	}, [args.isCombineEnabled, marshal]);
}
function noop() {}
var empty = {
	width: 0,
	height: 0,
	margin: noSpacing
};
var getSize = ({ isAnimatingOpenOnMount, placeholder, animate }) => {
	if (isAnimatingOpenOnMount) return empty;
	if (animate === "close") return empty;
	return {
		height: placeholder.client.borderBox.height,
		width: placeholder.client.borderBox.width,
		margin: placeholder.client.margin
	};
};
var getStyle = ({ isAnimatingOpenOnMount, placeholder, animate }) => {
	const size = getSize({
		isAnimatingOpenOnMount,
		placeholder,
		animate
	});
	return {
		display: placeholder.display,
		boxSizing: "border-box",
		width: size.width,
		height: size.height,
		marginTop: size.margin.top,
		marginRight: size.margin.right,
		marginBottom: size.margin.bottom,
		marginLeft: size.margin.left,
		flexShrink: "0",
		flexGrow: "0",
		pointerEvents: "none",
		transition: animate !== "none" ? transitions.placeholder : null
	};
};
var Placeholder = (props) => {
	const animateOpenTimerRef = (0, import_react.useRef)(null);
	const tryClearAnimateOpenTimer = useCallback(() => {
		if (!animateOpenTimerRef.current) return;
		clearTimeout(animateOpenTimerRef.current);
		animateOpenTimerRef.current = null;
	}, []);
	const { animate, onTransitionEnd, onClose, contextId } = props;
	const [isAnimatingOpenOnMount, setIsAnimatingOpenOnMount] = (0, import_react.useState)(props.animate === "open");
	(0, import_react.useEffect)(() => {
		if (!isAnimatingOpenOnMount) return noop;
		if (animate !== "open") {
			tryClearAnimateOpenTimer();
			setIsAnimatingOpenOnMount(false);
			return noop;
		}
		if (animateOpenTimerRef.current) return noop;
		animateOpenTimerRef.current = setTimeout(() => {
			animateOpenTimerRef.current = null;
			setIsAnimatingOpenOnMount(false);
		});
		return tryClearAnimateOpenTimer;
	}, [
		animate,
		isAnimatingOpenOnMount,
		tryClearAnimateOpenTimer
	]);
	const onSizeChangeEnd = useCallback((event) => {
		if (event.propertyName !== "height") return;
		onTransitionEnd();
		if (animate === "close") onClose();
	}, [
		animate,
		onClose,
		onTransitionEnd
	]);
	const style = getStyle({
		isAnimatingOpenOnMount,
		animate: props.animate,
		placeholder: props.placeholder
	});
	return import_react.createElement(props.placeholder.tagName, {
		style,
		"data-rfd-placeholder-context-id": contextId,
		onTransitionEnd: onSizeChangeEnd,
		ref: props.innerRef
	});
};
var Placeholder$1 = import_react.memo(Placeholder);
var AnimateInOut = class extends import_react.PureComponent {
	constructor(...args) {
		super(...args);
		this.state = {
			isVisible: Boolean(this.props.on),
			data: this.props.on,
			animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
		};
		this.onClose = () => {
			if (this.state.animate !== "close") return;
			this.setState({ isVisible: false });
		};
	}
	static getDerivedStateFromProps(props, state) {
		if (!props.shouldAnimate) return {
			isVisible: Boolean(props.on),
			data: props.on,
			animate: "none"
		};
		if (props.on) return {
			isVisible: true,
			data: props.on,
			animate: "open"
		};
		if (state.isVisible) return {
			isVisible: true,
			data: state.data,
			animate: "close"
		};
		return {
			isVisible: false,
			animate: "close",
			data: null
		};
	}
	render() {
		if (!this.state.isVisible) return null;
		const provided = {
			onClose: this.onClose,
			data: this.state.data,
			animate: this.state.animate
		};
		return this.props.children(provided);
	}
};
var Droppable = (props) => {
	const appContext = (0, import_react.useContext)(AppContext);
	!appContext && invariant();
	const { contextId, isMovementAllowed } = appContext;
	const droppableRef = (0, import_react.useRef)(null);
	const placeholderRef = (0, import_react.useRef)(null);
	const { children, droppableId, type, mode, direction, ignoreContainerClipping, isDropDisabled, isCombineEnabled, snapshot, useClone, updateViewportMaxScroll, getContainerForClone } = props;
	const getDroppableRef = useCallback(() => droppableRef.current, []);
	const setDroppableRef = useCallback((value = null) => {
		droppableRef.current = value;
	}, []);
	useCallback(() => placeholderRef.current, []);
	const setPlaceholderRef = useCallback((value = null) => {
		placeholderRef.current = value;
	}, []);
	const onPlaceholderTransitionEnd = useCallback(() => {
		if (isMovementAllowed()) updateViewportMaxScroll({ maxScroll: getMaxWindowScroll() });
	}, [isMovementAllowed, updateViewportMaxScroll]);
	useDroppablePublisher({
		droppableId,
		type,
		mode,
		direction,
		isDropDisabled,
		isCombineEnabled,
		ignoreContainerClipping,
		getDroppableRef
	});
	const placeholder = useMemo(() => import_react.createElement(AnimateInOut, {
		on: props.placeholder,
		shouldAnimate: props.shouldAnimatePlaceholder
	}, ({ onClose, data, animate }) => import_react.createElement(Placeholder$1, {
		placeholder: data,
		onClose,
		innerRef: setPlaceholderRef,
		animate,
		contextId,
		onTransitionEnd: onPlaceholderTransitionEnd
	})), [
		contextId,
		onPlaceholderTransitionEnd,
		props.placeholder,
		props.shouldAnimatePlaceholder,
		setPlaceholderRef
	]);
	const provided = useMemo(() => ({
		innerRef: setDroppableRef,
		placeholder,
		droppableProps: {
			"data-rfd-droppable-id": droppableId,
			"data-rfd-droppable-context-id": contextId
		}
	}), [
		contextId,
		droppableId,
		placeholder,
		setDroppableRef
	]);
	const isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
	const droppableContext = useMemo(() => ({
		droppableId,
		type,
		isUsingCloneFor
	}), [
		droppableId,
		isUsingCloneFor,
		type
	]);
	function getClone() {
		if (!useClone) return null;
		const { dragging, render } = useClone;
		const node = import_react.createElement(PrivateDraggable, {
			draggableId: dragging.draggableId,
			index: dragging.source.index,
			isClone: true,
			isEnabled: true,
			shouldRespectForcePress: false,
			canDragInteractiveElements: true
		}, (draggableProvided, draggableSnapshot) => render(draggableProvided, draggableSnapshot, dragging));
		return import_react_dom.createPortal(node, getContainerForClone());
	}
	return import_react.createElement(DroppableContext.Provider, { value: droppableContext }, children(provided, snapshot), getClone());
};
function getBody() {
	!document.body && invariant();
	return document.body;
}
var defaultProps = {
	mode: "standard",
	type: "DEFAULT",
	direction: "vertical",
	isDropDisabled: false,
	isCombineEnabled: false,
	ignoreContainerClipping: false,
	renderClone: null,
	getContainerForClone: getBody
};
var attachDefaultPropsToOwnProps = (ownProps) => {
	let mergedProps = { ...ownProps };
	let defaultPropKey;
	for (defaultPropKey in defaultProps) if (ownProps[defaultPropKey] === void 0) mergedProps = {
		...mergedProps,
		[defaultPropKey]: defaultProps[defaultPropKey]
	};
	return mergedProps;
};
var isMatchingType = (type, critical) => type === critical.droppable.type;
var getDraggable = (critical, dimensions) => dimensions.draggables[critical.draggable.id];
var makeMapStateToProps = () => {
	const idleWithAnimation = {
		placeholder: null,
		shouldAnimatePlaceholder: true,
		snapshot: {
			isDraggingOver: false,
			draggingOverWith: null,
			draggingFromThisWith: null,
			isUsingPlaceholder: false
		},
		useClone: null
	};
	const idleWithoutAnimation = {
		...idleWithAnimation,
		shouldAnimatePlaceholder: false
	};
	const getDraggableRubric = memoizeOne((descriptor) => ({
		draggableId: descriptor.id,
		type: descriptor.type,
		source: {
			index: descriptor.index,
			droppableId: descriptor.droppableId
		}
	}));
	const getMapProps = memoizeOne((id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) => {
		const draggableId = dragging.descriptor.id;
		if (dragging.descriptor.droppableId === id) {
			const useClone = renderClone ? {
				render: renderClone,
				dragging: getDraggableRubric(dragging.descriptor)
			} : null;
			const snapshot = {
				isDraggingOver: isDraggingOverForConsumer,
				draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
				draggingFromThisWith: draggableId,
				isUsingPlaceholder: true
			};
			return {
				placeholder: dragging.placeholder,
				shouldAnimatePlaceholder: false,
				snapshot,
				useClone
			};
		}
		if (!isEnabled) return idleWithoutAnimation;
		if (!isDraggingOverForImpact) return idleWithAnimation;
		const snapshot = {
			isDraggingOver: isDraggingOverForConsumer,
			draggingOverWith: draggableId,
			draggingFromThisWith: null,
			isUsingPlaceholder: true
		};
		return {
			placeholder: dragging.placeholder,
			shouldAnimatePlaceholder: true,
			snapshot,
			useClone: null
		};
	});
	const selector = (state, ownProps) => {
		const ownPropsWithDefaultProps = attachDefaultPropsToOwnProps(ownProps);
		const id = ownPropsWithDefaultProps.droppableId;
		const type = ownPropsWithDefaultProps.type;
		const isEnabled = !ownPropsWithDefaultProps.isDropDisabled;
		const renderClone = ownPropsWithDefaultProps.renderClone;
		if (isDragging(state)) {
			const critical = state.critical;
			if (!isMatchingType(type, critical)) return idleWithoutAnimation;
			const dragging = getDraggable(critical, state.dimensions);
			const isDraggingOver = whatIsDraggedOver(state.impact) === id;
			return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
		}
		if (state.phase === "DROP_ANIMATING") {
			const completed = state.completed;
			if (!isMatchingType(type, completed.critical)) return idleWithoutAnimation;
			const dragging = getDraggable(completed.critical, state.dimensions);
			return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, dragging, renderClone);
		}
		if (state.phase === "IDLE" && state.completed && !state.shouldFlush) {
			const completed = state.completed;
			if (!isMatchingType(type, completed.critical)) return idleWithoutAnimation;
			const wasOver = whatIsDraggedOver(completed.impact) === id;
			const wasCombining = Boolean(completed.impact.at && completed.impact.at.type === "COMBINE");
			const isHome = completed.critical.droppable.id === id;
			if (wasOver) return wasCombining ? idleWithAnimation : idleWithoutAnimation;
			if (isHome) return idleWithAnimation;
			return idleWithoutAnimation;
		}
		return idleWithoutAnimation;
	};
	return selector;
};
var ConnectedDroppable = connect(makeMapStateToProps, { updateViewportMaxScroll }, (stateProps, dispatchProps, ownProps) => {
	return {
		...attachDefaultPropsToOwnProps(ownProps),
		...stateProps,
		...dispatchProps
	};
}, {
	context: StoreContext,
	areStatePropsEqual: isStrictEqual
})(Droppable);
//#endregion
export { shallowEqual as a, compose as c, isPlainObject as d, require_react_dom as f, Provider_default as i, createStore$1 as l, DragDropContext as n, applyMiddleware as o, require_react as p, PublicDraggable as r, combineReducers as s, ConnectedDroppable as t, isAction as u };
