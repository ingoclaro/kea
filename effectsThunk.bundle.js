webpackJsonp([16],{563:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return m});var c=n(6),l=n.n(c),u=n(217),s=n(132),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d={install:n(813),import:n(814),store:n(815),usage:n(816)},m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"description"},l.a.createElement("h2",null,"Thunks"),l.a.createElement("p",null,"Thunks are the simplest ways to define side effects with Redux.")),l.a.createElement("div",{className:"description"},l.a.createElement("h2",null,"Installation"),l.a.createElement("p",null,"First install the ",l.a.createElement("a",{href:"https://github.com/keajs/kea-thunk"},l.a.createElement("code",null,"kea-thunk"))," and ",l.a.createElement("a",{href:"https://github.com/gaearon/redux-thunk"},l.a.createElement("code",null,"redux-thunk"))," packages:"),l.a.createElement(u.default,{className:"bash"},d.install),l.a.createElement("p",null,"Then import ",l.a.createElement("code",null,"thunkPlugin")," from ",l.a.createElement("code",null,"kea-thunk")," in your ",l.a.createElement("code",null,"store.js")," and add it to the plugins array in ",l.a.createElement("code",null,"getStore()")),l.a.createElement(u.default,{className:"javascript"},d.import),l.a.createElement("p",null,"If you have configured your store through ",l.a.createElement(s.a,{to:"/api/store"},l.a.createElement("code",null,"getStore()")),", you're all set!"),l.a.createElement("p",null,"If, however, you wish to configure your store manually, connect the thunk middleware like so:"),l.a.createElement(u.default,{className:"javascript"},d.store)),l.a.createElement("div",{className:"description"},l.a.createElement("h2",null,"Usage"),l.a.createElement("p",null,"You define thunks in a block called ",l.a.createElement("code",null,"thunks"),". Here are some examples:"),l.a.createElement(u.default,{className:"javascript"},d.usage),l.a.createElement("p",null,"As you can see, you have access to the standard Redux ",l.a.createElement("code",null,"dispatch")," and ",l.a.createElement("code",null,"getState")," methods. However you don't need to call ",l.a.createElement("code",null,"dispatch")," before any action in the actions object. They are wrapped automatically.")))}}]),t}(c.Component)},813:function(e,t){e.exports="yarn add kea-thunk redux-thunk\nnpm install --save kea-thunk redux-thunk\n"},814:function(e,t){e.exports="import thunkPlugin from 'kea-thunk'\n\nconst store = getStore({\n  plugins: [\n    thunkPlugin\n  ]\n})\n"},815:function(e,t){e.exports="import { keaReducer, activatePlugin } from 'kea'\nimport { createStore, combineReducers, applyMiddleware, compose } from 'redux'\n\nimport thunkPlugin from 'kea-thunk'\n\nexport default function getStore () {\n  activatePlugin(thunkPlugin)\n\n  const reducers = combineReducers({\n    kea: keaReducer('kea'),\n    scenes: keaReducer('scenes')\n  })\n\n  const finalCreateStore = compose(\n    applyMiddleware(thunk)\n  )(createStore)\n\n  const store = finalCreateStore(reducers)\n\n  return { store }\n}\n"},816:function(e,t){e.exports="const delay = (ms) => new Promise(resolve => window.setTimeout(resolve, ms))\n\nconst logic = kea({\n  actions: ({ constants }) => ({\n    updateName: name => ({ name })\n  }),\n\n  thunks: ({ actions, get, fetch, dispatch, getState }) => ({\n    updateNameAsync: async name => {\n      await delay(1000)            // standard promise\n      await actions.anotherThunk() // another thunk action\n      actions.updateName(name)     // not a thunk, so no async needed\n      dispatch({ type: 'RANDOM_REDUX_ACTION' }) // random redux action\n\n      get('name') // 'chirpy'\n      fetch('name', 'otherKey') // { name: 'chirpy', otherKey: undefined }\n    },\n    anotherThunk: async () => {\n      // do something\n    }\n  }),\n\n  reducers: ({ actions, constants }) => ({\n    name: ['chirpy', PropTypes.string, {\n      [actions.updateName]: (state, payload) => payload.name\n    }]\n  })\n})\n"}});