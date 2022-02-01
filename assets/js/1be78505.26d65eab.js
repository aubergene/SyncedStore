"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514],{7406:function(n,e,t){t.d(e,{Z:function(){return l}});var o=t(7294),r=t(5289),i=t(6213),s={files:{"/App.tsx":{code:'import React from "react";\n      \nexport default function App() {\n    return <h1>Hello World</h1>\n  }\n  '},"/Wrapper.tsx":{hidden:!0,code:'import React, { useState } from "react";\nimport App from "./App";\nimport { connect, disconnect, store } from "./store";\nimport { useSyncedStore } from "@syncedstore/react";\n\nexport default function Wrapper() {\n  const [inspecting, setInspecting] = useState(false);\n  const state = useSyncedStore(store)\n  return (\n    <div>\n      <div className="toolbar">\n        <label>\n          <input type="radio" name="sync" defaultChecked onChange={connect} />{" "}\n          Online (enable sync)\n        </label>\n        <label>\n          <input type="radio" name="sync" onChange={disconnect} /> Offline\n          (disable sync)\n        </label>\n        { inspecting && <button onClick={() => setInspecting(false)} style={{float: "right"}}>Back</button> }\n        { !inspecting && <button onClick={() => setInspecting(true)} style={{float: "right"}}>Inspect</button> }\n      </div>\n      <div className="wrapper">\n        { inspecting ? <pre>{JSON.stringify(state, undefined, 2)}</pre> : <App /> }\n      </div>\n    </div>\n  );\n}\n'},"/index.tsx":{hidden:!0,code:'import React, { StrictMode } from "react";\n  import ReactDOM from "react-dom";\n  import "./styles.css";\n  \n  import Wrapper from "./Wrapper";\n  \n  const rootElement = document.getElementById("root");\n  ReactDOM.render(\n    <StrictMode>\n      <Wrapper />\n    </StrictMode>,\n    rootElement\n  );'},"/styles.css":{hidden:!0,code:"body {\n    font-family: arial;\n    color: rgb(117, 118, 120);\n    -webkit-font-smoothing: auto;\n    -moz-font-smoothing: auto;\n    -moz-osx-font-smoothing: grayscale;\n    font-smoothing: auto;\n    text-rendering: optimizeLegibility;\n    font-smooth: always;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-touch-callout: none;\n    padding:0;\n    margin:0;\n  }\n  \n  h1 {\n    font-size: 1.5rem;\n  }\n  \n  .wrapper {\n    margin:5px;\n  }\n  \n  .toolbar {\n    border-bottom: 1px solid #e4e7eb;\n    padding: 5px;\n    background: #f8f9fb;\n    font-size: 13px;\n  }\n\n  .toolbar input {\n    position:relative;\n    top:1px;\n  }\n\n  /* Basic editor styles */\n  .ProseMirror {\n    > * + * {\n      margin-top: 0.75em;\n    }\n  }\n\n  .ProseMirror p.is-editor-empty:first-child::before {\n    content: attr(data-placeholder);\n    float: left;\n    color: #adb5bd;\n    pointer-events: none;\n    height: 0;\n  }\n\n\n/* Give a remote user a caret */\n.collaboration-cursor__caret {\n  position: relative;\n  margin-left: -1px;\n  margin-right: -1px;\n  border-left: 1px solid #0D0D0D;\n  border-right: 1px solid #0D0D0D;\n  word-break: normal;\n  pointer-events: none;\n}\n\n/* Render the username above the caret */\n.collaboration-cursor__label {\n  position: absolute;\n  top: -1.4em;\n  left: -1px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  user-select: none;\n  color: #0D0D0D;\n  padding: 0.1rem 0.3rem;\n  border-radius: 3px 3px 3px 0;\n  white-space: nowrap;\n}\n\n.ProseMirror:focus {\n  outline: none\n}\n\n.is-active {\n  background: black;\n  color: #fff\n}\n\n\n/** used for plain template **/\n\n#app button:first-of-type {\n  margin-bottom:30px\n}\n\n#app input {\n  margin:10px;\n  display: block;\n}\n\n#app button {\n  margin:10px;\n  display: block;\n}\n\n  "},"/public/index.html":{hidden:!0,code:'<!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <title>Document</title>\n    </head>\n    <body>\n      <div id="root"></div>\n    </body>\n  </html>'}},dependencies:{react:"^17.0.0","react-dom":"^17.0.0","react-scripts":"^4.0.0"},entry:"/index.tsx",main:"/App.tsx",environment:"create-react-app-typescript"},c='import { syncedStore, getYjsValue } from "@syncedstore/core";\nimport { WebrtcProvider } from "y-webrtc";\n\n// (optional, define types for TypeScript)\ntype Todo = { completed: boolean, title: string };\n\n// Create your SyncedStore store\nexport const store = syncedStore({ todos: [] as Todo[], fragment: "xml" });\n\n// Create a document that syncs automatically using Y-WebRTC\nconst doc = getYjsValue(store);\nexport const webrtcProvider = new WebrtcProvider("syncedstore-todos", doc as any);\n\nexport const disconnect = () => webrtcProvider.disconnect();\nexport const connect = () => webrtcProvider.connect();\n',a={files:{"/src/Wrap.vue":{code:'\n<template>\n  <main id="wrap">\n    <div>\n      <div class="toolbar">\n        <label>\n          <input type="radio" name="sync" checked @change="connect" />\n          Online (enable sync)\n        </label>\n        <label>\n          <input type="radio" name="sync" @change="disconnect" /> Offline\n          (disable sync)\n        </label>\n        <button v-if="inspecting" @click="inspecting = false">Back</button>\n        <button v-if="!inspecting" @click="inspecting = true">Inspect</button>\n      </div>\n      <div className="wrapper">\n        <pre v-if="inspecting">{{ JSON.stringify(store, undefined, 2) }}</pre>\n        <app v-if="!inspecting" />\n      </div>\n    </div>\n  </main>\n</template>\n\n<script>\nimport App from "./App";\nimport { connect, disconnect, store } from "./store";\n\nexport default {\n  name: "Wrap",\n  data() {\n    return {\n      store,\n      inspecting: false,\n    };\n  },\n  methods: {\n    connect,\n    disconnect,\n  },\n};\n<\/script>\n\n<style>\n\nbody {\n    margin:0;\n    padding:0;\n}\n\n.toolbar {\n  border-bottom: 1px solid #e4e7eb;\n  padding: 5px;\n  background: #f8f9fb;\n  font-size: 13px;\n}\n\n.toolbar input {\n  position:relative;\n  top:1px;\n}\n\npre {\n  text-align: left;\n}\n</style>\n',hidden:!0},"/src/main.js":{code:'import { createApp } from "vue";\nimport Wrap from "./Wrap.vue";\nimport App from "./App.vue";\n\ncreateApp(Wrap).component("app", App).mount("#app");',hidden:!0}}},p={files:{"/Wrap.svelte":{code:'<script>\nimport App from "./App.svelte";\nimport { connect, disconnect, svelteStore } from "./store";\n\nlet inspecting = false;\n<\/script>\n\n<main id="wrap">\n  <div>\n    <div class="toolbar">\n      <label>\n        <input type="radio" name="sync" checked on:change={connect} />\n        Online (enable sync)\n      </label>\n      <label>\n        <input type="radio" name="sync" on:change={disconnect} /> Offline\n        (disable sync)\n      </label>\n      {#if inspecting}\n        <button on:click={() => inspecting = false}>Back</button>\n      {:else}\n        <button on:click={() => inspecting = true}>Inspect</button>\n      {/if}\n    </div>\n    <div className="wrapper">\n    {#if inspecting}\n      <pre >{ JSON.stringify($svelteStore, undefined, 2) }</pre>\n    {:else}\n      <App />\n    {/if}\n    </div>\n  </div>\n</main>\n\n<style>\n\nbody {\n    margin:0;\n    padding:0;\n}\n\n.toolbar {\n  border-bottom: 1px solid #e4e7eb;\n  padding: 5px;\n  background: #f8f9fb;\n  font-size: 13px;\n}\n\n.toolbar input {\n  position:relative;\n  top:1px;\n}\n\npre {\n  text-align: left;\n}\n</style>\n',hidden:!0},"/index.js":{code:'import Wrap from "./Wrap.svelte";\n\nconst app = new Wrap({\n  target: document.body\n});\n\nexport default app;',hidden:!0}}};function l(n){if(!n.live)return o.createElement(i.Z,n);var e,t="vanilla";return n.vue?(e=Object.assign({},a,{files:Object.assign({},a.files,{"/src/App.vue":n.children,"/src/store.ts":c})}),t="vue3"):n.svelte?(e=Object.assign({},p,{files:Object.assign({},p.files,{"/App.svelte":n.children,"/store.js":'import { syncedStore, getYjsValue } from "@syncedstore/core";\nimport { WebrtcProvider } from "y-webrtc";\nimport { svelteSyncedStore } from "@syncedstore/svelte";\n\n// Create your SyncedStore store\nexport const store = syncedStore({ todos: [], fragment: "xml" });\nexport const svelteStore = svelteSyncedStore(store);\n\n// Create a document that syncs automatically using Y-WebRTC\nconst doc = getYjsValue(store);\nexport const webrtcProvider = new WebrtcProvider("syncedstore-todos", doc);\n\nexport const disconnect = () => webrtcProvider.disconnect();\nexport const connect = () => webrtcProvider.connect();\n'}),main:"/App.svelte"}),t="svelte"):e=n.plain?Object.assign({},s,{files:Object.assign({},s.files,{"/main.js":n.children,"/App.tsx":{code:'import * as React from "react";\n          \n          const el = document.createElement("div");\n          el.id = "app";\n\n          export default function App() { \n            \n            const cb = React.useCallback((ref) => {\n              if (ref) {\n                ref.appendChild(el);\n                require("./main");\n              }\n            });\n            return <div ref={cb} className="plainWrapper"></div>; \n          }\n          ',hidden:!0},"/store.js":'import { syncedStore, getYjsValue } from "@syncedstore/core";\nimport { WebrtcProvider } from "y-webrtc";\n\n// Create your SyncedStore store\n// We create a store which contains an array (myArray) and an object (myObject)\nexport const store = syncedStore({ myArray: [], myObject: {} });\n\n// Create a document that syncs automatically using Y-WebRTC\nconst doc = getYjsValue(store);\nexport const webrtcProvider = new WebrtcProvider("syncedstore-plain", doc);\n\nexport const disconnect = () => webrtcProvider.disconnect();\nexport const connect = () => webrtcProvider.connect();\n'}),main:"/main.js"}):Object.assign({},s,{files:Object.assign({},s.files,{"/App.tsx":n.children,"/store.ts":n.boxed?'import { syncedStore, getYjsValue } from "@syncedstore/core";\nimport { WebrtcProvider } from "y-webrtc";\n\n// (optional, define types for TypeScript)\ntype Todo = { completed: boolean, title: string };\n\n// Create your SyncedStore store\nexport const store = syncedStore({ todos: [] as Todo[], fragment: "xml" });\n\n// Create a document that syncs automatically using Y-WebRTC\nconst doc = getYjsValue(store);\nexport const webrtcProvider = new WebrtcProvider("syncedstore-todos-boxed", doc as any);\n\nexport const disconnect = () => webrtcProvider.disconnect();\nexport const connect = () => webrtcProvider.connect();\n':c})}),o.createElement(r.oT,{template:t,customSetup:Object.assign({},e,{dependencies:Object.assign({},e.dependencies,{"@syncedstore/core":"latest","@syncedstore/svelte":"latest","@syncedstore/react":"latest",yjs:"latest","y-webrtc":"latest","react-inspector":"latest",mobx:"latest",svelte:"^3.32.3","mobx-react-lite":"latest","@tiptap/react":"latest","@tiptap/starter-kit":"latest","@tiptap/extension-collaboration":"latest","@tiptap/extension-collaboration-cursor":"latest","@tiptap/extension-placeholder":"latest"}),files:Object.assign({},e.files)})},o.createElement(r.sp,null,o.createElement(r._V,null)),o.createElement("div",{style:{height:10}}),o.createElement(r.sp,null,o.createElement(r.Gj,null),o.createElement(r.Gj,null)))}}}]);