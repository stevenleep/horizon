function t(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,r(t,n)}function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function r(t,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},r(t,n)}function e(t,n,o){return e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,n,e){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return e&&r(i,e.prototype),i},e.apply(null,arguments)}function o(t){var i="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(t))return i.get(t);i.set(t,o)}function o(){return e(t,arguments,n(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),r(o,t)},o(t)}var i="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function u(t,n,r){if(!t.s){if(r instanceof c){if(!r.s)return void(r.o=u.bind(null,t,n));1&n&&(n=r.s),r=r.v}if(r&&r.then)return void r.then(u.bind(null,t,n),u.bind(null,t,2));t.s=n,t.v=r;var e=t.o;e&&e(t)}}var c=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(n,r){var e=new t,o=this.s;if(o){var i=1&o?n:r;if(i){try{u(e,1,i(this.v))}catch(t){u(e,2,t)}return e}return this}return this.o=function(t){try{var o=t.v;1&t.s?u(e,1,n?n(o):o):r?u(e,1,r(o)):u(e,2,o)}catch(t){u(e,2,t)}},e},t}();function f(t){return t instanceof c&&1&t.s}var l=/*#__PURE__*/function(n){function r(t){var r;return void 0===t&&(t={}),(r=n.call(this)||this).coreContext=void 0,r.coreContext=t,r}t(r,n);var e=r.prototype;return e.register=function(t){var n=this;(Array.isArray(t)?t:[t]).forEach(function(t){n.add(t),null==t.onRegister||t.onRegister(n.coreContext)})},e.initPluginContext=function(t,n){(Array.isArray(t)?t:[t]).forEach(function(t){null==t.setContext||t.setContext(n)}),this.run("onInit")},e.unregister=function(t){this.delete(t)},e.filters=function(t){return Array.from(this).map(function(n){if(n[t]&&"function"==typeof n[t])return n[t].bind(n)}).filter(Boolean)},e.run=function(t){var n=arguments;this.filters(t).forEach(function(t){t.apply(t,[].slice.call(n,1))})},e.runAsync=function(t){var n=arguments,r=this.filters(t);return Promise.all(r.map(function(t){return t.apply(t,[].slice.call(n,1))}))},e.runSync=function(t){try{var n=arguments,r=function(t,n,r){if("function"==typeof t[i]){var e,o,l,s=t[i]();if(function t(r){try{for(;!(e=s.next()).done;)if((r=n(e.value))&&r.then){if(!f(r))return void r.then(t,l||(l=u.bind(null,o=new c,2)));r=r.v}o?u(o,1,r):o=r}catch(t){u(o||(o=new c),2,t)}}(),s.return){var a=function(t){try{e.done||s.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var h=[],p=0;p<t.length;p++)h.push(t[p]);return function(t,n,r){var e,o,i=-1;return function r(l){try{for(;++i<t.length;)if((l=n(i))&&l.then){if(!f(l))return void l.then(r,o||(o=u.bind(null,e=new c,2)));l=l.v}e?u(e,1,l):e=l}catch(t){u(e||(e=new c),2,t)}}(),e}(h,function(t){return n(h[t])})}(this.filters(t),function(t){return Promise.resolve(t.apply(t,[].slice.call(n,1))).then(function(){})});return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},e.runOnion=function(t){var n=arguments;return this.filters(t).reduce(function(t,r){var e;return null!=(e=r.apply(r,[].slice.call(n,1)))?e:t},void 0)},e.runOnionAsync=function(t){return this.filters(t).reduce(function(t,n){try{var r=arguments;return Promise.resolve(t).then(function(t){var e;return null!=(e=n.apply(n,[].slice.call(r,1)))?e:t})}catch(t){return Promise.reject(t)}},Promise.resolve(void 0))},e.getPluginByName=function(t){return Array.from(this).find(function(n){return n.name===t})},r}(/*#__PURE__*/o(Set)),s=/*#__PURE__*/function(n){function r(t){var r;return void 0===t&&(t={}),(r=n.call(this)||this).coreConfig=void 0,r.coreConfig=t,r.mountPlugins(),r}return t(r,n),r.prototype.mountPlugins=function(){var t=this.coreConfig.plugins,n=void 0===t?[]:t;this.register(n),this.initPluginContext(n,this)},r}(l),a=/*#__PURE__*/function(n){function r(){return n.call(this)||this}t(r,n);var e=r.prototype;return e.on=function(t,n){return this.set(t,n),this},e.emit=function(t){var n=this.get(t);return!!n&&(n.apply(this,[].slice.call(arguments,1)),!0)},e.off=function(t){return this.delete(t),this},r}(/*#__PURE__*/o(Map)),h=/*#__PURE__*/function(n){function r(){var t;return(t=n.call(this)||this)._context={},t.version=void 0,t}t(r,n);var e=r.prototype;return e.setContext=function(t){this._context=t},e.getContext=function(){return this._context},r}(a);function p(){}export{h as AbstractPlugin,s as Core,a as EventEmitter,l as PluginEventEmitter,p as PluginFactory};
//# sourceMappingURL=index.modern.js.map