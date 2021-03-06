//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Package-scope variables */
var global, meteorEnv, Meteor;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/global.js                                                                            //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// Export a reliable global object for all Meteor code.                                                 // 1
global = this;                                                                                          // 2
                                                                                                        // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/client_environment.js                                                                //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
meteorEnv = __meteor_runtime_config__.meteorEnv;                                                        // 1
                                                                                                        // 2
/**                                                                                                     // 3
 * @summary The Meteor namespace                                                                        // 4
 * @namespace Meteor                                                                                    // 5
 */                                                                                                     // 6
Meteor = {                                                                                              // 7
  /**                                                                                                   // 8
   * @summary Boolean variable.  True if running in production environment.                             // 9
   * @locus Anywhere                                                                                    // 10
   * @static                                                                                            // 11
   * @type {Boolean}                                                                                    // 12
   */                                                                                                   // 13
  isProduction: meteorEnv.NODE_ENV === "production",                                                    // 14
                                                                                                        // 15
  /**                                                                                                   // 16
   * @summary Boolean variable.  True if running in development environment.                            // 17
   * @locus Anywhere                                                                                    // 18
   * @static                                                                                            // 19
   * @type {Boolean}                                                                                    // 20
   */                                                                                                   // 21
  isDevelopment: meteorEnv.NODE_ENV !== "production",                                                   // 22
                                                                                                        // 23
  /**                                                                                                   // 24
   * @summary Boolean variable.  True if running in client environment.                                 // 25
   * @locus Anywhere                                                                                    // 26
   * @static                                                                                            // 27
   * @type {Boolean}                                                                                    // 28
   */                                                                                                   // 29
  isClient: true,                                                                                       // 30
                                                                                                        // 31
  /**                                                                                                   // 32
   * @summary Boolean variable.  True if running in server environment.                                 // 33
   * @locus Anywhere                                                                                    // 34
   * @static                                                                                            // 35
   * @type {Boolean}                                                                                    // 36
   */                                                                                                   // 37
  isServer: false,                                                                                      // 38
  isCordova: false                                                                                      // 39
};                                                                                                      // 40
                                                                                                        // 41
if (typeof __meteor_runtime_config__ === 'object' &&                                                    // 42
    __meteor_runtime_config__.PUBLIC_SETTINGS) {                                                        // 43
  /**                                                                                                   // 44
   * @summary `Meteor.settings` contains deployment-specific configuration options. You can initialize settings by passing the `--settings` option (which takes the name of a file containing JSON data) to `meteor run` or `meteor deploy`. When running your server directly (e.g. from a bundle), you instead specify settings by putting the JSON directly into the `METEOR_SETTINGS` environment variable. If the settings object contains a key named `public`, then `Meteor.settings.public` will be available on the client as well as the server.  All other properties of `Meteor.settings` are only defined on the server.  You can rely on `Meteor.settings` and `Meteor.settings.public` being defined objects (not undefined) on both client and server even if there are no settings specified.  Changes to `Meteor.settings.public` at runtime will be picked up by new client connections.
   * @locus Anywhere                                                                                    // 46
   * @type {Object}                                                                                     // 47
   */                                                                                                   // 48
  Meteor.settings = { 'public': __meteor_runtime_config__.PUBLIC_SETTINGS };                            // 49
}                                                                                                       // 50
                                                                                                        // 51
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/cordova_environment.js                                                               //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
/**                                                                                                     // 1
 * @summary Boolean variable.  True if running in a Cordova mobile environment.                         // 2
 * @type {Boolean}                                                                                      // 3
 * @static                                                                                              // 4
 * @locus Anywhere                                                                                      // 5
 */                                                                                                     // 6
Meteor.isCordova = true;                                                                                // 7
                                                                                                        // 8
Meteor.isProduction = meteorEnv.NODE_ENV === "production";                                              // 9
Meteor.isDevelopment = meteorEnv.NODE_ENV !== "production";                                             // 10
                                                                                                        // 11
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/define-package.js                                                                    //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
function PackageRegistry() {}                                                                           // 1
                                                                                                        // 2
var PRp = PackageRegistry.prototype;                                                                    // 3
                                                                                                        // 4
// Set global.Package[name] = pkg || {}. If additional arguments are                                    // 5
// supplied, their keys will be copied into pkg if not already present.                                 // 6
// This method is defined on the prototype of global.Package so that it                                 // 7
// will not be included in Object.keys(Package).                                                        // 8
PRp._define = function definePackage(name, pkg) {                                                       // 9
  pkg = pkg || {};                                                                                      // 10
                                                                                                        // 11
  var argc = arguments.length;                                                                          // 12
  for (var i = 2; i < argc; ++i) {                                                                      // 13
    var arg = arguments[i];                                                                             // 14
    for (var s in arg) {                                                                                // 15
      if (! (s in pkg)) {                                                                               // 16
        pkg[s] = arg[s];                                                                                // 17
      }                                                                                                 // 18
    }                                                                                                   // 19
  }                                                                                                     // 20
                                                                                                        // 21
  return this[name] = pkg;                                                                              // 22
};                                                                                                      // 23
                                                                                                        // 24
// Initialize the Package namespace used by all Meteor packages.                                        // 25
global.Package = new PackageRegistry();                                                                 // 26
                                                                                                        // 27
if (typeof exports === "object") {                                                                      // 28
  // This code is also used by meteor/tools/isobuild/bundler.js.                                        // 29
  exports.PackageRegistry = PackageRegistry;                                                            // 30
}                                                                                                       // 31
                                                                                                        // 32
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/helpers.js                                                                           //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
if (Meteor.isServer)                                                                                    // 1
  var Future = Npm.require('fibers/future');                                                            // 2
                                                                                                        // 3
if (typeof __meteor_runtime_config__ === 'object' &&                                                    // 4
    __meteor_runtime_config__.meteorRelease) {                                                          // 5
  /**                                                                                                   // 6
   * @summary `Meteor.release` is a string containing the name of the [release](#meteorupdate) with which the project was built (for example, `"1.2.3"`). It is `undefined` if the project was built using a git checkout of Meteor.
   * @locus Anywhere                                                                                    // 8
   * @type {String}                                                                                     // 9
   */                                                                                                   // 10
  Meteor.release = __meteor_runtime_config__.meteorRelease;                                             // 11
}                                                                                                       // 12
                                                                                                        // 13
// XXX find a better home for these? Ideally they would be _.get,                                       // 14
// _.ensure, _.delete..                                                                                 // 15
                                                                                                        // 16
// _get(a,b,c,d) returns a[b][c][d], or else undefined if a[b] or                                       // 17
// a[b][c] doesn't exist.                                                                               // 18
//                                                                                                      // 19
Meteor._get = function (obj /*, arguments */) {                                                         // 20
  for (var i = 1; i < arguments.length; i++) {                                                          // 21
    if (!(arguments[i] in obj))                                                                         // 22
      return undefined;                                                                                 // 23
    obj = obj[arguments[i]];                                                                            // 24
  }                                                                                                     // 25
  return obj;                                                                                           // 26
};                                                                                                      // 27
                                                                                                        // 28
// _ensure(a,b,c,d) ensures that a[b][c][d] exists. If it does not,                                     // 29
// it is created and set to {}. Either way, it is returned.                                             // 30
//                                                                                                      // 31
Meteor._ensure = function (obj /*, arguments */) {                                                      // 32
  for (var i = 1; i < arguments.length; i++) {                                                          // 33
    var key = arguments[i];                                                                             // 34
    if (!(key in obj))                                                                                  // 35
      obj[key] = {};                                                                                    // 36
    obj = obj[key];                                                                                     // 37
  }                                                                                                     // 38
                                                                                                        // 39
  return obj;                                                                                           // 40
};                                                                                                      // 41
                                                                                                        // 42
// _delete(a, b, c, d) deletes a[b][c][d], then a[b][c] unless it                                       // 43
// isn't empty, then a[b] unless it isn't empty.                                                        // 44
//                                                                                                      // 45
Meteor._delete = function (obj /*, arguments */) {                                                      // 46
  var stack = [obj];                                                                                    // 47
  var leaf = true;                                                                                      // 48
  for (var i = 1; i < arguments.length - 1; i++) {                                                      // 49
    var key = arguments[i];                                                                             // 50
    if (!(key in obj)) {                                                                                // 51
      leaf = false;                                                                                     // 52
      break;                                                                                            // 53
    }                                                                                                   // 54
    obj = obj[key];                                                                                     // 55
    if (typeof obj !== "object")                                                                        // 56
      break;                                                                                            // 57
    stack.push(obj);                                                                                    // 58
  }                                                                                                     // 59
                                                                                                        // 60
  for (var i = stack.length - 1; i >= 0; i--) {                                                         // 61
    var key = arguments[i+1];                                                                           // 62
                                                                                                        // 63
    if (leaf)                                                                                           // 64
      leaf = false;                                                                                     // 65
    else                                                                                                // 66
      for (var other in stack[i][key])                                                                  // 67
        return; // not empty -- we're done                                                              // 68
                                                                                                        // 69
    delete stack[i][key];                                                                               // 70
  }                                                                                                     // 71
};                                                                                                      // 72
                                                                                                        // 73
// wrapAsync can wrap any function that takes some number of arguments that                             // 74
// can't be undefined, followed by some optional arguments, where the callback                          // 75
// is the last optional argument.                                                                       // 76
// e.g. fs.readFile(pathname, [callback]),                                                              // 77
// fs.open(pathname, flags, [mode], [callback])                                                         // 78
// For maximum effectiveness and least confusion, wrapAsync should be used on                           // 79
// functions where the callback is the only argument of type Function.                                  // 80
                                                                                                        // 81
/**                                                                                                     // 82
 * @memberOf Meteor                                                                                     // 83
 * @summary Wrap a function that takes a callback function as its final parameter. The signature of the callback of the wrapped function should be `function(error, result){}`. On the server, the wrapped function can be used either synchronously (without passing a callback) or asynchronously (when a callback is passed). On the client, a callback is always required; errors will be logged if there is no callback. If a callback is provided, the environment captured when the original function was called will be restored in the callback.
 * @locus Anywhere                                                                                      // 85
 * @param {Function} func A function that takes a callback as its final parameter                       // 86
 * @param {Object} [context] Optional `this` object against which the original function will be invoked
 */                                                                                                     // 88
Meteor.wrapAsync = function (fn, context) {                                                             // 89
  return function (/* arguments */) {                                                                   // 90
    var self = context || this;                                                                         // 91
    var newArgs = Array.prototype.slice.call(arguments);                                                // 92
    var callback;                                                                                       // 93
                                                                                                        // 94
    for (var i = newArgs.length - 1; i >= 0; --i) {                                                     // 95
      var arg = newArgs[i];                                                                             // 96
      var type = typeof arg;                                                                            // 97
      if (type !== "undefined") {                                                                       // 98
        if (type === "function") {                                                                      // 99
          callback = arg;                                                                               // 100
        }                                                                                               // 101
        break;                                                                                          // 102
      }                                                                                                 // 103
    }                                                                                                   // 104
                                                                                                        // 105
    if (! callback) {                                                                                   // 106
      if (Meteor.isClient) {                                                                            // 107
        callback = logErr;                                                                              // 108
      } else {                                                                                          // 109
        var fut = new Future();                                                                         // 110
        callback = fut.resolver();                                                                      // 111
      }                                                                                                 // 112
      ++i; // Insert the callback just after arg.                                                       // 113
    }                                                                                                   // 114
                                                                                                        // 115
    newArgs[i] = Meteor.bindEnvironment(callback);                                                      // 116
    var result = fn.apply(self, newArgs);                                                               // 117
    return fut ? fut.wait() : result;                                                                   // 118
  };                                                                                                    // 119
};                                                                                                      // 120
                                                                                                        // 121
// Sets child's prototype to a new object whose prototype is parent's                                   // 122
// prototype. Used as:                                                                                  // 123
//   Meteor._inherits(ClassB, ClassA).                                                                  // 124
//   _.extend(ClassB.prototype, { ... })                                                                // 125
// Inspired by CoffeeScript's `extend` and Google Closure's `goog.inherits`.                            // 126
var hasOwn = Object.prototype.hasOwnProperty;                                                           // 127
Meteor._inherits = function (Child, Parent) {                                                           // 128
  // copy Parent static properties                                                                      // 129
  for (var key in Parent) {                                                                             // 130
    // make sure we only copy hasOwnProperty properties vs. prototype                                   // 131
    // properties                                                                                       // 132
    if (hasOwn.call(Parent, key)) {                                                                     // 133
      Child[key] = Parent[key];                                                                         // 134
    }                                                                                                   // 135
  }                                                                                                     // 136
                                                                                                        // 137
  // a middle member of prototype chain: takes the prototype from the Parent                            // 138
  var Middle = function () {                                                                            // 139
    this.constructor = Child;                                                                           // 140
  };                                                                                                    // 141
  Middle.prototype = Parent.prototype;                                                                  // 142
  Child.prototype = new Middle();                                                                       // 143
  Child.__super__ = Parent.prototype;                                                                   // 144
  return Child;                                                                                         // 145
};                                                                                                      // 146
                                                                                                        // 147
var warnedAboutWrapAsync = false;                                                                       // 148
                                                                                                        // 149
/**                                                                                                     // 150
 * @deprecated in 0.9.3                                                                                 // 151
 */                                                                                                     // 152
Meteor._wrapAsync = function(fn, context) {                                                             // 153
  if (! warnedAboutWrapAsync) {                                                                         // 154
    Meteor._debug("Meteor._wrapAsync has been renamed to Meteor.wrapAsync");                            // 155
    warnedAboutWrapAsync = true;                                                                        // 156
  }                                                                                                     // 157
  return Meteor.wrapAsync.apply(Meteor, arguments);                                                     // 158
};                                                                                                      // 159
                                                                                                        // 160
function logErr(err) {                                                                                  // 161
  if (err) {                                                                                            // 162
    return Meteor._debug(                                                                               // 163
      "Exception in callback of async function",                                                        // 164
      err.stack ? err.stack : err                                                                       // 165
    );                                                                                                  // 166
  }                                                                                                     // 167
}                                                                                                       // 168
                                                                                                        // 169
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/setimmediate.js                                                                      //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// Chooses one of three setImmediate implementations:                                                   // 1
//                                                                                                      // 2
// * Native setImmediate (IE 10, Node 0.9+)                                                             // 3
//                                                                                                      // 4
// * postMessage (many browsers)                                                                        // 5
//                                                                                                      // 6
// * setTimeout  (fallback)                                                                             // 7
//                                                                                                      // 8
// The postMessage implementation is based on                                                           // 9
// https://github.com/NobleJS/setImmediate/tree/1.0.1                                                   // 10
//                                                                                                      // 11
// Don't use `nextTick` for Node since it runs its callbacks before                                     // 12
// I/O, which is stricter than we're looking for.                                                       // 13
//                                                                                                      // 14
// Not installed as a polyfill, as our public API is `Meteor.defer`.                                    // 15
// Since we're not trying to be a polyfill, we have some                                                // 16
// simplifications:                                                                                     // 17
//                                                                                                      // 18
// If one invocation of a setImmediate callback pauses itself by a                                      // 19
// call to alert/prompt/showModelDialog, the NobleJS polyfill                                           // 20
// implementation ensured that no setImmedate callback would run until                                  // 21
// the first invocation completed.  While correct per the spec, what it                                 // 22
// would mean for us in practice is that any reactive updates relying                                   // 23
// on Meteor.defer would be hung in the main window until the modal                                     // 24
// dialog was dismissed.  Thus we only ensure that a setImmediate                                       // 25
// function is called in a later event loop.                                                            // 26
//                                                                                                      // 27
// We don't need to support using a string to be eval'ed for the                                        // 28
// callback, arguments to the function, or clearImmediate.                                              // 29
                                                                                                        // 30
"use strict";                                                                                           // 31
                                                                                                        // 32
var global = this;                                                                                      // 33
                                                                                                        // 34
                                                                                                        // 35
// IE 10, Node >= 9.1                                                                                   // 36
                                                                                                        // 37
function useSetImmediate() {                                                                            // 38
  if (! global.setImmediate)                                                                            // 39
    return null;                                                                                        // 40
  else {                                                                                                // 41
    var setImmediate = function (fn) {                                                                  // 42
      global.setImmediate(fn);                                                                          // 43
    };                                                                                                  // 44
    setImmediate.implementation = 'setImmediate';                                                       // 45
    return setImmediate;                                                                                // 46
  }                                                                                                     // 47
}                                                                                                       // 48
                                                                                                        // 49
                                                                                                        // 50
// Android 2.3.6, Chrome 26, Firefox 20, IE 8-9, iOS 5.1.1 Safari                                       // 51
                                                                                                        // 52
function usePostMessage() {                                                                             // 53
  // The test against `importScripts` prevents this implementation                                      // 54
  // from being installed inside a web worker, where                                                    // 55
  // `global.postMessage` means something completely different and                                      // 56
  // can't be used for this purpose.                                                                    // 57
                                                                                                        // 58
  if (!global.postMessage || global.importScripts) {                                                    // 59
    return null;                                                                                        // 60
  }                                                                                                     // 61
                                                                                                        // 62
  // Avoid synchronous post message implementations.                                                    // 63
                                                                                                        // 64
  var postMessageIsAsynchronous = true;                                                                 // 65
  var oldOnMessage = global.onmessage;                                                                  // 66
  global.onmessage = function () {                                                                      // 67
      postMessageIsAsynchronous = false;                                                                // 68
  };                                                                                                    // 69
  global.postMessage("", "*");                                                                          // 70
  global.onmessage = oldOnMessage;                                                                      // 71
                                                                                                        // 72
  if (! postMessageIsAsynchronous)                                                                      // 73
    return null;                                                                                        // 74
                                                                                                        // 75
  var funcIndex = 0;                                                                                    // 76
  var funcs = {};                                                                                       // 77
                                                                                                        // 78
  // Installs an event handler on `global` for the `message` event: see                                 // 79
  // * https://developer.mozilla.org/en/DOM/window.postMessage                                          // 80
  // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages     // 81
                                                                                                        // 82
  // XXX use Random.id() here?                                                                          // 83
  var MESSAGE_PREFIX = "Meteor._setImmediate." + Math.random() + '.';                                   // 84
                                                                                                        // 85
  function isStringAndStartsWith(string, putativeStart) {                                               // 86
    return (typeof string === "string" &&                                                               // 87
            string.substring(0, putativeStart.length) === putativeStart);                               // 88
  }                                                                                                     // 89
                                                                                                        // 90
  function onGlobalMessage(event) {                                                                     // 91
    // This will catch all incoming messages (even from other                                           // 92
    // windows!), so we need to try reasonably hard to avoid letting                                    // 93
    // anyone else trick us into firing off. We test the origin is                                      // 94
    // still this window, and that a (randomly generated)                                               // 95
    // unpredictable identifying prefix is present.                                                     // 96
    if (event.source === global &&                                                                      // 97
        isStringAndStartsWith(event.data, MESSAGE_PREFIX)) {                                            // 98
      var index = event.data.substring(MESSAGE_PREFIX.length);                                          // 99
      try {                                                                                             // 100
        if (funcs[index])                                                                               // 101
          funcs[index]();                                                                               // 102
      }                                                                                                 // 103
      finally {                                                                                         // 104
        delete funcs[index];                                                                            // 105
      }                                                                                                 // 106
    }                                                                                                   // 107
  }                                                                                                     // 108
                                                                                                        // 109
  if (global.addEventListener) {                                                                        // 110
    global.addEventListener("message", onGlobalMessage, false);                                         // 111
  } else {                                                                                              // 112
    global.attachEvent("onmessage", onGlobalMessage);                                                   // 113
  }                                                                                                     // 114
                                                                                                        // 115
  var setImmediate = function (fn) {                                                                    // 116
    // Make `global` post a message to itself with the handle and                                       // 117
    // identifying prefix, thus asynchronously invoking our                                             // 118
    // onGlobalMessage listener above.                                                                  // 119
    ++funcIndex;                                                                                        // 120
    funcs[funcIndex] = fn;                                                                              // 121
    global.postMessage(MESSAGE_PREFIX + funcIndex, "*");                                                // 122
  };                                                                                                    // 123
  setImmediate.implementation = 'postMessage';                                                          // 124
  return setImmediate;                                                                                  // 125
}                                                                                                       // 126
                                                                                                        // 127
                                                                                                        // 128
function useTimeout() {                                                                                 // 129
  var setImmediate = function (fn) {                                                                    // 130
    global.setTimeout(fn, 0);                                                                           // 131
  };                                                                                                    // 132
  setImmediate.implementation = 'setTimeout';                                                           // 133
  return setImmediate;                                                                                  // 134
}                                                                                                       // 135
                                                                                                        // 136
                                                                                                        // 137
Meteor._setImmediate =                                                                                  // 138
  useSetImmediate() ||                                                                                  // 139
  usePostMessage() ||                                                                                   // 140
  useTimeout();                                                                                         // 141
                                                                                                        // 142
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/timers.js                                                                            //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
function withoutInvocation(f) {                                                                         // 1
  if (Package.ddp) {                                                                                    // 2
    var DDP = Package.ddp.DDP;                                                                          // 3
    var CurrentInvocation =                                                                             // 4
      DDP._CurrentMethodInvocation ||                                                                   // 5
      // For backwards compatibility, as explained in this issue:                                       // 6
      // https://github.com/meteor/meteor/issues/8947                                                   // 7
      DDP._CurrentInvocation;                                                                           // 8
                                                                                                        // 9
    var invocation = CurrentInvocation.get();                                                           // 10
    if (invocation && invocation.isSimulation) {                                                        // 11
      throw new Error("Can't set timers inside simulations");                                           // 12
    }                                                                                                   // 13
                                                                                                        // 14
    return function () {                                                                                // 15
      CurrentInvocation.withValue(null, f);                                                             // 16
    };                                                                                                  // 17
  } else {                                                                                              // 18
    return f;                                                                                           // 19
  }                                                                                                     // 20
}                                                                                                       // 21
                                                                                                        // 22
function bindAndCatch(context, f) {                                                                     // 23
  return Meteor.bindEnvironment(withoutInvocation(f), context);                                         // 24
}                                                                                                       // 25
                                                                                                        // 26
// Meteor.setTimeout and Meteor.setInterval callbacks scheduled                                         // 27
// inside a server method are not part of the method invocation and                                     // 28
// should clear out the CurrentMethodInvocation environment variable.                                   // 29
                                                                                                        // 30
/**                                                                                                     // 31
 * @memberOf Meteor                                                                                     // 32
 * @summary Call a function in the future after waiting for a specified delay.                          // 33
 * @locus Anywhere                                                                                      // 34
 * @param {Function} func The function to run                                                           // 35
 * @param {Number} delay Number of milliseconds to wait before calling function                         // 36
 */                                                                                                     // 37
Meteor.setTimeout = function (f, duration) {                                                            // 38
  return setTimeout(bindAndCatch("setTimeout callback", f), duration);                                  // 39
};                                                                                                      // 40
                                                                                                        // 41
/**                                                                                                     // 42
 * @memberOf Meteor                                                                                     // 43
 * @summary Call a function repeatedly, with a time delay between calls.                                // 44
 * @locus Anywhere                                                                                      // 45
 * @param {Function} func The function to run                                                           // 46
 * @param {Number} delay Number of milliseconds to wait between each function call.                     // 47
 */                                                                                                     // 48
Meteor.setInterval = function (f, duration) {                                                           // 49
  return setInterval(bindAndCatch("setInterval callback", f), duration);                                // 50
};                                                                                                      // 51
                                                                                                        // 52
/**                                                                                                     // 53
 * @memberOf Meteor                                                                                     // 54
 * @summary Cancel a repeating function call scheduled by `Meteor.setInterval`.                         // 55
 * @locus Anywhere                                                                                      // 56
 * @param {Object} id The handle returned by `Meteor.setInterval`                                       // 57
 */                                                                                                     // 58
Meteor.clearInterval = function(x) {                                                                    // 59
  return clearInterval(x);                                                                              // 60
};                                                                                                      // 61
                                                                                                        // 62
/**                                                                                                     // 63
 * @memberOf Meteor                                                                                     // 64
 * @summary Cancel a function call scheduled by `Meteor.setTimeout`.                                    // 65
 * @locus Anywhere                                                                                      // 66
 * @param {Object} id The handle returned by `Meteor.setTimeout`                                        // 67
 */                                                                                                     // 68
Meteor.clearTimeout = function(x) {                                                                     // 69
  return clearTimeout(x);                                                                               // 70
};                                                                                                      // 71
                                                                                                        // 72
// XXX consider making this guarantee ordering of defer'd callbacks, like                               // 73
// Tracker.afterFlush or Node's nextTick (in practice). Then tests can do:                              // 74
//    callSomethingThatDefersSomeWork();                                                                // 75
//    Meteor.defer(expect(somethingThatValidatesThatTheWorkHappened));                                  // 76
                                                                                                        // 77
/**                                                                                                     // 78
 * @memberOf Meteor                                                                                     // 79
 * @summary Defer execution of a function to run asynchronously in the background (similar to `Meteor.setTimeout(func, 0)`.
 * @locus Anywhere                                                                                      // 81
 * @param {Function} func The function to run                                                           // 82
 */                                                                                                     // 83
Meteor.defer = function (f) {                                                                           // 84
  Meteor._setImmediate(bindAndCatch("defer callback", f));                                              // 85
};                                                                                                      // 86
                                                                                                        // 87
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/errors.js                                                                            //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// Makes an error subclass which properly contains a stack trace in most                                // 1
// environments. constructor can set fields on `this` (and should probably set                          // 2
// `message`, which is what gets displayed at the top of a stack trace).                                // 3
//                                                                                                      // 4
Meteor.makeErrorType = function (name, constructor) {                                                   // 5
  var errorClass = function (/*arguments*/) {                                                           // 6
    // Ensure we get a proper stack trace in most Javascript environments                               // 7
    if (Error.captureStackTrace) {                                                                      // 8
      // V8 environments (Chrome and Node.js)                                                           // 9
      Error.captureStackTrace(this, errorClass);                                                        // 10
    } else {                                                                                            // 11
      // Borrow the .stack property of a native Error object.                                           // 12
      this.stack = new Error().stack;                                                                   // 13
    }                                                                                                   // 14
    // Safari magically works.                                                                          // 15
                                                                                                        // 16
    constructor.apply(this, arguments);                                                                 // 17
                                                                                                        // 18
    this.errorType = name;                                                                              // 19
  };                                                                                                    // 20
                                                                                                        // 21
  Meteor._inherits(errorClass, Error);                                                                  // 22
                                                                                                        // 23
  return errorClass;                                                                                    // 24
};                                                                                                      // 25
                                                                                                        // 26
// This should probably be in the livedata package, but we don't want                                   // 27
// to require you to use the livedata package to get it. Eventually we                                  // 28
// should probably rename it to DDP.Error and put it back in the                                        // 29
// 'livedata' package (which we should rename to 'ddp' also.)                                           // 30
//                                                                                                      // 31
// Note: The DDP server assumes that Meteor.Error EJSON-serializes as an object                         // 32
// containing 'error' and optionally 'reason' and 'details'.                                            // 33
// The DDP client manually puts these into Meteor.Error objects. (We don't use                          // 34
// EJSON.addType here because the type is determined by location in the                                 // 35
// protocol, not text on the wire.)                                                                     // 36
                                                                                                        // 37
/**                                                                                                     // 38
 * @summary This class represents a symbolic error thrown by a method.                                  // 39
 * @locus Anywhere                                                                                      // 40
 * @class                                                                                               // 41
 * @param {String} error A string code uniquely identifying this kind of error.                         // 42
 * This string should be used by callers of the method to determine the                                 // 43
 * appropriate action to take, instead of attempting to parse the reason                                // 44
 * or details fields. For example:                                                                      // 45
 *                                                                                                      // 46
 * ```                                                                                                  // 47
 * // on the server, pick a code unique to this error                                                   // 48
 * // the reason field should be a useful debug message                                                 // 49
 * throw new Meteor.Error("logged-out",                                                                 // 50
 *   "The user must be logged in to post a comment.");                                                  // 51
 *                                                                                                      // 52
 * // on the client                                                                                     // 53
 * Meteor.call("methodName", function (error) {                                                         // 54
 *   // identify the error                                                                              // 55
 *   if (error && error.error === "logged-out") {                                                       // 56
 *     // show a nice error message                                                                     // 57
 *     Session.set("errorMessage", "Please log in to post a comment.");                                 // 58
 *   }                                                                                                  // 59
 * });                                                                                                  // 60
 * ```                                                                                                  // 61
 *                                                                                                      // 62
 * For legacy reasons, some built-in Meteor functions such as `check` throw                             // 63
 * errors with a number in this field.                                                                  // 64
 *                                                                                                      // 65
 * @param {String} [reason] Optional.  A short human-readable summary of the                            // 66
 * error, like 'Not Found'.                                                                             // 67
 * @param {String} [details] Optional.  Additional information about the error,                         // 68
 * like a textual stack trace.                                                                          // 69
 */                                                                                                     // 70
Meteor.Error = Meteor.makeErrorType(                                                                    // 71
  "Meteor.Error",                                                                                       // 72
  function (error, reason, details) {                                                                   // 73
    var self = this;                                                                                    // 74
                                                                                                        // 75
    // Newer versions of DDP use this property to signify that an error                                 // 76
    // can be sent back and reconstructed on the calling client.                                        // 77
    self.isClientSafe = true;                                                                           // 78
                                                                                                        // 79
    // String code uniquely identifying this kind of error.                                             // 80
    self.error = error;                                                                                 // 81
                                                                                                        // 82
    // Optional: A short human-readable summary of the error. Not                                       // 83
    // intended to be shown to end users, just developers. ("Not Found",                                // 84
    // "Internal Server Error")                                                                         // 85
    self.reason = reason;                                                                               // 86
                                                                                                        // 87
    // Optional: Additional information about the error, say for                                        // 88
    // debugging. It might be a (textual) stack trace if the server is                                  // 89
    // willing to provide one. The corresponding thing in HTTP would be                                 // 90
    // the body of a 404 or 500 response. (The difference is that we                                    // 91
    // never expect this to be shown to end users, only developers, so                                  // 92
    // it doesn't need to be pretty.)                                                                   // 93
    self.details = details;                                                                             // 94
                                                                                                        // 95
    // This is what gets displayed at the top of a stack trace. Current                                 // 96
    // format is "[404]" (if no reason is set) or "File not found [404]"                                // 97
    if (self.reason)                                                                                    // 98
      self.message = self.reason + ' [' + self.error + ']';                                             // 99
    else                                                                                                // 100
      self.message = '[' + self.error + ']';                                                            // 101
  });                                                                                                   // 102
                                                                                                        // 103
// Meteor.Error is basically data and is sent over DDP, so you should be able to                        // 104
// properly EJSON-clone it. This is especially important because if a                                   // 105
// Meteor.Error is thrown through a Future, the error, reason, and details                              // 106
// properties become non-enumerable so a standard Object clone won't preserve                           // 107
// them and they will be lost from DDP.                                                                 // 108
Meteor.Error.prototype.clone = function () {                                                            // 109
  var self = this;                                                                                      // 110
  return new Meteor.Error(self.error, self.reason, self.details);                                       // 111
};                                                                                                      // 112
                                                                                                        // 113
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/fiber_stubs_client.js                                                                //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// This file is a partial analogue to fiber_helpers.js, which allows the client                         // 1
// to use a queue too, and also to call noYieldsAllowed.                                                // 2
                                                                                                        // 3
// The client has no ability to yield, so noYieldsAllowed is a noop.                                    // 4
//                                                                                                      // 5
Meteor._noYieldsAllowed = function (f) {                                                                // 6
  return f();                                                                                           // 7
};                                                                                                      // 8
                                                                                                        // 9
// An even simpler queue of tasks than the fiber-enabled one.  This one just                            // 10
// runs all the tasks when you call runTask or flush, synchronously.                                    // 11
//                                                                                                      // 12
Meteor._SynchronousQueue = function () {                                                                // 13
  var self = this;                                                                                      // 14
  self._tasks = [];                                                                                     // 15
  self._running = false;                                                                                // 16
  self._runTimeout = null;                                                                              // 17
};                                                                                                      // 18
                                                                                                        // 19
var SQp = Meteor._SynchronousQueue.prototype;                                                           // 20
                                                                                                        // 21
SQp.runTask = function (task) {                                                                         // 22
  var self = this;                                                                                      // 23
  if (!self.safeToRunTask())                                                                            // 24
    throw new Error("Could not synchronously run a task from a running task");                          // 25
  self._tasks.push(task);                                                                               // 26
  var tasks = self._tasks;                                                                              // 27
  self._tasks = [];                                                                                     // 28
  self._running = true;                                                                                 // 29
                                                                                                        // 30
  if (self._runTimeout) {                                                                               // 31
    // Since we're going to drain the queue, we can forget about the timeout                            // 32
    // which tries to run it.  (But if one of our tasks queues something else,                          // 33
    // the timeout will be correctly re-created.)                                                       // 34
    clearTimeout(self._runTimeout);                                                                     // 35
    self._runTimeout = null;                                                                            // 36
  }                                                                                                     // 37
                                                                                                        // 38
  try {                                                                                                 // 39
    while (tasks.length > 0) {                                                                          // 40
      var t = tasks.shift();                                                                            // 41
      try {                                                                                             // 42
        t();                                                                                            // 43
      } catch (e) {                                                                                     // 44
        if (tasks.length === 0) {                                                                       // 45
          // this was the last task, that is, the one we're calling runTask                             // 46
          // for.                                                                                       // 47
          throw e;                                                                                      // 48
        }                                                                                               // 49
        Meteor._debug("Exception in queued task: " + (e.stack || e));                                   // 50
      }                                                                                                 // 51
    }                                                                                                   // 52
  } finally {                                                                                           // 53
    self._running = false;                                                                              // 54
  }                                                                                                     // 55
};                                                                                                      // 56
                                                                                                        // 57
SQp.queueTask = function (task) {                                                                       // 58
  var self = this;                                                                                      // 59
  self._tasks.push(task);                                                                               // 60
  // Intentionally not using Meteor.setTimeout, because it doesn't like runing                          // 61
  // in stubs for now.                                                                                  // 62
  if (!self._runTimeout) {                                                                              // 63
    self._runTimeout = setTimeout(function () {                                                         // 64
      return self.flush.apply(self, arguments);                                                         // 65
    }, 0);                                                                                              // 66
  }                                                                                                     // 67
};                                                                                                      // 68
                                                                                                        // 69
SQp.flush = function () {                                                                               // 70
  var self = this;                                                                                      // 71
  self.runTask(function () {});                                                                         // 72
};                                                                                                      // 73
                                                                                                        // 74
SQp.drain = function () {                                                                               // 75
  var self = this;                                                                                      // 76
  if (!self.safeToRunTask()) {                                                                          // 77
    return;                                                                                             // 78
  }                                                                                                     // 79
  while (self._tasks.length > 0) {                                                                      // 80
    self.flush();                                                                                       // 81
  }                                                                                                     // 82
};                                                                                                      // 83
                                                                                                        // 84
SQp.safeToRunTask = function () {                                                                       // 85
  var self = this;                                                                                      // 86
  return !self._running;                                                                                // 87
};                                                                                                      // 88
                                                                                                        // 89
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/startup_client.js                                                                    //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var callbackQueue = [];                                                                                 // 1
var isLoadingCompleted = false;                                                                         // 2
var isReady = false;                                                                                    // 3
                                                                                                        // 4
// Keeps track of how many events to wait for in addition to loading completing,                        // 5
// before we're considered ready.                                                                       // 6
var readyHoldsCount = 0;                                                                                // 7
                                                                                                        // 8
var holdReady =  function () {                                                                          // 9
  readyHoldsCount++;                                                                                    // 10
}                                                                                                       // 11
                                                                                                        // 12
var releaseReadyHold = function () {                                                                    // 13
  readyHoldsCount--;                                                                                    // 14
  maybeReady();                                                                                         // 15
}                                                                                                       // 16
                                                                                                        // 17
var maybeReady = function () {                                                                          // 18
  if (isReady || !isLoadingCompleted || readyHoldsCount > 0)                                            // 19
    return;                                                                                             // 20
                                                                                                        // 21
  isReady = true;                                                                                       // 22
                                                                                                        // 23
  // Run startup callbacks                                                                              // 24
  while (callbackQueue.length)                                                                          // 25
    (callbackQueue.shift())();                                                                          // 26
                                                                                                        // 27
  if (Meteor.isCordova) {                                                                               // 28
    // Notify the WebAppLocalServer plugin that startup was completed successfully,                     // 29
    // so we can roll back faulty versions if this doesn't happen                                       // 30
    WebAppLocalServer.startupDidComplete();                                                             // 31
  }                                                                                                     // 32
};                                                                                                      // 33
                                                                                                        // 34
var loadingCompleted = function () {                                                                    // 35
  if (!isLoadingCompleted) {                                                                            // 36
    isLoadingCompleted = true;                                                                          // 37
    maybeReady();                                                                                       // 38
  }                                                                                                     // 39
}                                                                                                       // 40
                                                                                                        // 41
if (Meteor.isCordova) {                                                                                 // 42
  holdReady();                                                                                          // 43
  document.addEventListener('deviceready', releaseReadyHold, false);                                    // 44
}                                                                                                       // 45
                                                                                                        // 46
if (document.readyState === 'complete' || document.readyState === 'loaded') {                           // 47
  // Loading has completed,                                                                             // 48
  // but allow other scripts the opportunity to hold ready                                              // 49
  window.setTimeout(loadingCompleted);                                                                  // 50
} else { // Attach event listeners to wait for loading to complete                                      // 51
  if (document.addEventListener) {                                                                      // 52
    document.addEventListener('DOMContentLoaded', loadingCompleted, false);                             // 53
    window.addEventListener('load', loadingCompleted, false);                                           // 54
  } else { // Use IE event model for < IE9                                                              // 55
    document.attachEvent('onreadystatechange', function () {                                            // 56
      if (document.readyState === "complete") {                                                         // 57
        loadingCompleted();                                                                             // 58
      }                                                                                                 // 59
    });                                                                                                 // 60
    window.attachEvent('load', loadingCompleted);                                                       // 61
  }                                                                                                     // 62
}                                                                                                       // 63
                                                                                                        // 64
/**                                                                                                     // 65
 * @summary Run code when a client or a server starts.                                                  // 66
 * @locus Anywhere                                                                                      // 67
 * @param {Function} func A function to run on startup.                                                 // 68
 */                                                                                                     // 69
Meteor.startup = function (callback) {                                                                  // 70
  // Fix for < IE9, see http://javascript.nwbox.com/IEContentLoaded/                                    // 71
  var doScroll = !document.addEventListener &&                                                          // 72
    document.documentElement.doScroll;                                                                  // 73
                                                                                                        // 74
  if (!doScroll || window !== top) {                                                                    // 75
    if (isReady)                                                                                        // 76
      callback();                                                                                       // 77
    else                                                                                                // 78
      callbackQueue.push(callback);                                                                     // 79
  } else {                                                                                              // 80
    try { doScroll('left'); }                                                                           // 81
    catch (error) {                                                                                     // 82
      setTimeout(function () { Meteor.startup(callback); }, 50);                                        // 83
      return;                                                                                           // 84
    };                                                                                                  // 85
    callback();                                                                                         // 86
  }                                                                                                     // 87
};                                                                                                      // 88
                                                                                                        // 89
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/debug.js                                                                             //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var suppress = 0;                                                                                       // 1
                                                                                                        // 2
// replacement for console.log. This is a temporary API. We should                                      // 3
// provide a real logging API soon (possibly just a polyfill for                                        // 4
// console?)                                                                                            // 5
//                                                                                                      // 6
// NOTE: this is used on the server to print the warning about                                          // 7
// having autopublish enabled when you probably meant to turn it                                        // 8
// off. it's not really the proper use of something called                                              // 9
// _debug. the intent is for this message to go to the terminal and                                     // 10
// be very visible. if you change _debug to go someplace else, etc,                                     // 11
// please fix the autopublish code to do something reasonable.                                          // 12
//                                                                                                      // 13
Meteor._debug = function (/* arguments */) {                                                            // 14
  if (suppress) {                                                                                       // 15
    suppress--;                                                                                         // 16
    return;                                                                                             // 17
  }                                                                                                     // 18
  if (typeof console !== 'undefined' &&                                                                 // 19
      typeof console.log !== 'undefined') {                                                             // 20
    if (arguments.length == 0) { // IE Companion breaks otherwise                                       // 21
      // IE10 PP4 requires at least one argument                                                        // 22
      console.log('');                                                                                  // 23
    } else {                                                                                            // 24
      // IE doesn't have console.log.apply, it's not a real Object.                                     // 25
      // http://stackoverflow.com/questions/5538972/console-log-apply-not-working-in-ie9                // 26
      // http://patik.com/blog/complete-cross-browser-console-log/                                      // 27
      if (typeof console.log.apply === "function") {                                                    // 28
        // Most browsers                                                                                // 29
                                                                                                        // 30
        // Chrome and Safari only hyperlink URLs to source files in first argument of                   // 31
        // console.log, so try to call it with one argument if possible.                                // 32
        // Approach taken here: If all arguments are strings, join them on space.                       // 33
        // See https://github.com/meteor/meteor/pull/732#issuecomment-13975991                          // 34
        var allArgumentsOfTypeString = true;                                                            // 35
        for (var i = 0; i < arguments.length; i++)                                                      // 36
          if (typeof arguments[i] !== "string")                                                         // 37
            allArgumentsOfTypeString = false;                                                           // 38
                                                                                                        // 39
        if (allArgumentsOfTypeString)                                                                   // 40
          console.log.apply(console, [Array.prototype.join.call(arguments, " ")]);                      // 41
        else                                                                                            // 42
          console.log.apply(console, arguments);                                                        // 43
                                                                                                        // 44
      } else if (typeof Function.prototype.bind === "function") {                                       // 45
        // IE9                                                                                          // 46
        var log = Function.prototype.bind.call(console.log, console);                                   // 47
        log.apply(console, arguments);                                                                  // 48
      } else {                                                                                          // 49
        // IE8                                                                                          // 50
        Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));      // 51
      }                                                                                                 // 52
    }                                                                                                   // 53
  }                                                                                                     // 54
};                                                                                                      // 55
                                                                                                        // 56
// Suppress the next 'count' Meteor._debug messsages. Use this to                                       // 57
// stop tests from spamming the console.                                                                // 58
//                                                                                                      // 59
Meteor._suppress_log = function (count) {                                                               // 60
  suppress += count;                                                                                    // 61
};                                                                                                      // 62
                                                                                                        // 63
Meteor._suppressed_log_expected = function () {                                                         // 64
  return suppress !== 0;                                                                                // 65
};                                                                                                      // 66
                                                                                                        // 67
                                                                                                        // 68
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/string_utils.js                                                                      //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// Like Perl's quotemeta: quotes all regexp metacharacters.                                             // 1
// Code taken from                                                                                      // 2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions                    // 3
Meteor._escapeRegExp = function (string) {                                                              // 4
    return String(string).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");                                       // 5
};                                                                                                      // 6
                                                                                                        // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/test_environment.js                                                                  //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var TEST_METADATA_STR;                                                                                  // 1
if (Meteor.isClient) {                                                                                  // 2
  TEST_METADATA_STR = meteorEnv.TEST_METADATA;                                                          // 3
} else {                                                                                                // 4
  TEST_METADATA_STR = process.env.TEST_METADATA;                                                        // 5
}                                                                                                       // 6
                                                                                                        // 7
var TEST_METADATA = JSON.parse(TEST_METADATA_STR || "{}");                                              // 8
var testDriverPackageName = TEST_METADATA.driverPackage;                                                // 9
                                                                                                        // 10
// Note that if we are in test-packages mode neither of these will be set,                              // 11
// but we will have a test driver package                                                               // 12
Meteor.isTest = !!TEST_METADATA.isTest;                                                                 // 13
Meteor.isAppTest = !!TEST_METADATA.isAppTest;                                                           // 14
Meteor.isPackageTest = !!testDriverPackageName && !Meteor.isTest && !Meteor.isAppTest;                  // 15
                                                                                                        // 16
if (typeof testDriverPackageName === "string") {                                                        // 17
  Meteor.startup(function() {                                                                           // 18
    var testDriverPackage = Package[testDriverPackageName];                                             // 19
    if (! testDriverPackage) {                                                                          // 20
      throw new Error("Can't find test driver package: " + testDriverPackageName);                      // 21
    }                                                                                                   // 22
                                                                                                        // 23
    // On the client, the test driver *must* define `runTests`                                          // 24
    if (Meteor.isClient) {                                                                              // 25
      if (typeof testDriverPackage.runTests !== "function") {                                           // 26
        throw new Error("Test driver package " + testDriverPackageName                                  // 27
          + " missing `runTests` export");                                                              // 28
      }                                                                                                 // 29
      testDriverPackage.runTests();                                                                     // 30
    } else {                                                                                            // 31
      // The server can optionally define `start`                                                       // 32
      if (typeof testDriverPackage.start === "function") {                                              // 33
        testDriverPackage.start();                                                                      // 34
      }                                                                                                 // 35
    }                                                                                                   // 36
  });                                                                                                   // 37
}                                                                                                       // 38
                                                                                                        // 39
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/dynamics_browser.js                                                                  //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// Simple implementation of dynamic scoping, for use in browsers                                        // 1
                                                                                                        // 2
var nextSlot = 0;                                                                                       // 3
var currentValues = [];                                                                                 // 4
                                                                                                        // 5
Meteor.EnvironmentVariable = function () {                                                              // 6
  this.slot = nextSlot++;                                                                               // 7
};                                                                                                      // 8
                                                                                                        // 9
var EVp = Meteor.EnvironmentVariable.prototype;                                                         // 10
                                                                                                        // 11
EVp.get = function () {                                                                                 // 12
  return currentValues[this.slot];                                                                      // 13
};                                                                                                      // 14
                                                                                                        // 15
EVp.getOrNullIfOutsideFiber = function () {                                                             // 16
  return this.get();                                                                                    // 17
};                                                                                                      // 18
                                                                                                        // 19
EVp.withValue = function (value, func) {                                                                // 20
  var saved = currentValues[this.slot];                                                                 // 21
  try {                                                                                                 // 22
    currentValues[this.slot] = value;                                                                   // 23
    var ret = func();                                                                                   // 24
  } finally {                                                                                           // 25
    currentValues[this.slot] = saved;                                                                   // 26
  }                                                                                                     // 27
  return ret;                                                                                           // 28
};                                                                                                      // 29
                                                                                                        // 30
Meteor.bindEnvironment = function (func, onException, _this) {                                          // 31
  // needed in order to be able to create closures inside func and                                      // 32
  // have the closed variables not change back to their original                                        // 33
  // values                                                                                             // 34
  var boundValues = currentValues.slice();                                                              // 35
                                                                                                        // 36
  if (!onException || typeof(onException) === 'string') {                                               // 37
    var description = onException || "callback of async function";                                      // 38
    onException = function (error) {                                                                    // 39
      Meteor._debug(                                                                                    // 40
        "Exception in " + description + ":",                                                            // 41
        error && error.stack || error                                                                   // 42
      );                                                                                                // 43
    };                                                                                                  // 44
  }                                                                                                     // 45
                                                                                                        // 46
  return function (/* arguments */) {                                                                   // 47
    var savedValues = currentValues;                                                                    // 48
    try {                                                                                               // 49
      currentValues = boundValues;                                                                      // 50
      var ret = func.apply(_this, arguments);                                                           // 51
    } catch (e) {                                                                                       // 52
      // note: callback-hook currently relies on the fact that if onException                           // 53
      // throws in the browser, the wrapped call throws.                                                // 54
      onException(e);                                                                                   // 55
    } finally {                                                                                         // 56
      currentValues = savedValues;                                                                      // 57
    }                                                                                                   // 58
    return ret;                                                                                         // 59
  };                                                                                                    // 60
};                                                                                                      // 61
                                                                                                        // 62
Meteor._nodeCodeMustBeInFiber = function () {                                                           // 63
  // no-op on browser                                                                                   // 64
};                                                                                                      // 65
                                                                                                        // 66
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteor/url_common.js                                                                        //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
/**                                                                                                     // 1
 * @summary Generate an absolute URL pointing to the application. The server reads from the `ROOT_URL` environment variable to determine where it is running. This is taken care of automatically for apps deployed to Galaxy, but must be provided when using `meteor build`.
 * @locus Anywhere                                                                                      // 3
 * @param {String} [path] A path to append to the root URL. Do not include a leading "`/`".             // 4
 * @param {Object} [options]                                                                            // 5
 * @param {Boolean} options.secure Create an HTTPS URL.                                                 // 6
 * @param {Boolean} options.replaceLocalhost Replace localhost with 127.0.0.1. Useful for services that don't recognize localhost as a domain name.
 * @param {String} options.rootUrl Override the default ROOT_URL from the server environment. For example: "`http://foo.example.com`"
 */                                                                                                     // 9
Meteor.absoluteUrl = function (path, options) {                                                         // 10
  // path is optional                                                                                   // 11
  if (!options && typeof path === 'object') {                                                           // 12
    options = path;                                                                                     // 13
    path = undefined;                                                                                   // 14
  }                                                                                                     // 15
  // merge options with defaults                                                                        // 16
  options = Object.assign({}, Meteor.absoluteUrl.defaultOptions, options || {});                        // 17
                                                                                                        // 18
  var url = options.rootUrl;                                                                            // 19
  if (!url)                                                                                             // 20
    throw new Error("Must pass options.rootUrl or set ROOT_URL in the server environment");             // 21
                                                                                                        // 22
  if (!/^http[s]?:\/\//i.test(url)) // url starts with 'http://' or 'https://'                          // 23
    url = 'http://' + url; // we will later fix to https if options.secure is set                       // 24
                                                                                                        // 25
  if (!/\/$/.test(url)) // url ends with '/'                                                            // 26
    url += '/';                                                                                         // 27
                                                                                                        // 28
  if (path)                                                                                             // 29
    url += path;                                                                                        // 30
                                                                                                        // 31
  // turn http to https if secure option is set, and we're not talking                                  // 32
  // to localhost.                                                                                      // 33
  if (options.secure &&                                                                                 // 34
      /^http:/.test(url) && // url starts with 'http:'                                                  // 35
      !/http:\/\/localhost[:\/]/.test(url) && // doesn't match localhost                                // 36
      !/http:\/\/127\.0\.0\.1[:\/]/.test(url)) // or 127.0.0.1                                          // 37
    url = url.replace(/^http:/, 'https:');                                                              // 38
                                                                                                        // 39
  if (options.replaceLocalhost)                                                                         // 40
    url = url.replace(/^http:\/\/localhost([:\/].*)/, 'http://127.0.0.1$1');                            // 41
                                                                                                        // 42
  return url;                                                                                           // 43
};                                                                                                      // 44
                                                                                                        // 45
// allow later packages to override default options                                                     // 46
Meteor.absoluteUrl.defaultOptions = { };                                                                // 47
if (typeof __meteor_runtime_config__ === "object" &&                                                    // 48
    __meteor_runtime_config__.ROOT_URL)                                                                 // 49
  Meteor.absoluteUrl.defaultOptions.rootUrl = __meteor_runtime_config__.ROOT_URL;                       // 50
                                                                                                        // 51
                                                                                                        // 52
Meteor._relativeToSiteRootUrl = function (link) {                                                       // 53
  if (typeof __meteor_runtime_config__ === "object" &&                                                  // 54
      link.substr(0, 1) === "/")                                                                        // 55
    link = (__meteor_runtime_config__.ROOT_URL_PATH_PREFIX || "") + link;                               // 56
  return link;                                                                                          // 57
};                                                                                                      // 58
                                                                                                        // 59
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package.meteor = {}, {
  Meteor: Meteor,
  global: global,
  meteorEnv: meteorEnv
});

})();
