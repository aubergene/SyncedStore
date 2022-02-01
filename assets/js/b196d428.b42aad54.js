"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[155],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,a(a({ref:e},d),{},{components:n})):r.createElement(h,a({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6135:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:2,sidebar_label:"Rich text editors"},c="Collaborative rich text editing",s={unversionedId:"advanced/richtext",id:"advanced/richtext",isDocsHomePage:!1,title:"Collaborative rich text editing",description:"Instead of sharing plain strings or Text instances, what if you want to create a collaborative, (google docs style) rich text editing experience?",source:"@site/docs/advanced/richtext.md",sourceDirName:"advanced",slug:"/advanced/richtext",permalink:"/docs/advanced/richtext",editUrl:"https://github.com/yousefed/SyncedStore/edit/master/docs/docs/advanced/richtext.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Rich text editors"},sidebar:"tutorialSidebar",previous:{title:"Working with text",permalink:"/docs/advanced/text"},next:{title:"Boxed values",permalink:"/docs/advanced/boxed"}},d=[{value:"TipTap example",id:"tiptap-example",children:[],level:2},{value:"Libraries for different editors",id:"libraries-for-different-editors",children:[],level:2}],u={toc:d};function p(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"collaborative-rich-text-editing"},"Collaborative rich text editing"),(0,i.kt)("p",null,"Instead of sharing plain strings or Text instances, what if you want to create a collaborative, (google docs style) rich text editing experience?"),(0,i.kt)("p",null,"You can bind SyncedStore to the rich text editor of your choice. In most cases, you'll need to bind it to a ",(0,i.kt)("inlineCode",{parentName:"p"},"XmlFragment")," on your store. Here's is an example using ",(0,i.kt)("a",{parentName:"p",href:"https://tiptap.dev"},"TipTap")," and SyncedStore:"),(0,i.kt)("h2",{id:"tiptap-example"},"TipTap example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"live",live:!0},'import React, { useState, useCallback, useEffect } from "react";\nimport { store, webrtcProvider } from "./store";\n\nimport { useEditor, EditorContent } from "@tiptap/react";\nimport StarterKit from "@tiptap/starter-kit";\nimport Placeholder from "@tiptap/extension-placeholder";\nimport Collaboration from "@tiptap/extension-collaboration";\nimport CollaborationCursor from "@tiptap/extension-collaboration-cursor";\n\nconst colors = ["#958DF1", "#F98181", "#FBBC88", "#FAF594", "#70CFF8", "#94FADB", "#B9F18D"];\nconst names = ["Lea Thompson", "Cyndi Lauper", "Tom Cruise", "Madonna"];\n\nconst getRandomElement = (list) => list[Math.floor(Math.random() * list.length)];\nconst getRandomColor = () => getRandomElement(colors);\nconst getRandomName = () => getRandomElement(names);\n\nexport default () => {\n  const editor = useEditor({\n    extensions: [\n      StarterKit,\n      Placeholder.configure({\n        placeholder: "Write something \u2026",\n      }),\n      Collaboration.configure({\n        fragment: store.fragment,\n      }),\n      CollaborationCursor.configure({\n        provider: webrtcProvider,\n        user: { name: getRandomName(), color: getRandomColor() },\n      }),\n    ],\n  });\n\n  return (\n    <div className="editor">\n      <MenuBar editor={editor} />\n      <EditorContent editor={editor} />\n    </div>\n  );\n};\n\nconst MenuBar = ({ editor }) => {\n  if (!editor) {\n    return null;\n  }\n\n  return (\n    <>\n      <button\n        onClick={() => editor.chain().focus().toggleBold().run()}\n        className={editor.isActive("bold") ? "is-active" : ""}\n      >\n        bold\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleItalic().run()}\n        className={editor.isActive("italic") ? "is-active" : ""}\n      >\n        italic\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleStrike().run()}\n        className={editor.isActive("strike") ? "is-active" : ""}\n      >\n        strike\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleCode().run()}\n        className={editor.isActive("code") ? "is-active" : ""}\n      >\n        code\n      </button>\n      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>clear marks</button>\n      <button onClick={() => editor.chain().focus().clearNodes().run()}>clear nodes</button>\n      <button\n        onClick={() => editor.chain().focus().setParagraph().run()}\n        className={editor.isActive("paragraph") ? "is-active" : ""}\n      >\n        paragraph\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}\n        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}\n      >\n        h1\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}\n        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}\n      >\n        h2\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}\n        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}\n      >\n        h3\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}\n        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}\n      >\n        h4\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}\n        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}\n      >\n        h5\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}\n        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}\n      >\n        h6\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleBulletList().run()}\n        className={editor.isActive("bulletList") ? "is-active" : ""}\n      >\n        bullet list\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleOrderedList().run()}\n        className={editor.isActive("orderedList") ? "is-active" : ""}\n      >\n        ordered list\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleCodeBlock().run()}\n        className={editor.isActive("codeBlock") ? "is-active" : ""}\n      >\n        code block\n      </button>\n      <button\n        onClick={() => editor.chain().focus().toggleBlockquote().run()}\n        className={editor.isActive("blockquote") ? "is-active" : ""}\n      >\n        blockquote\n      </button>\n      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>horizontal rule</button>\n      <button onClick={() => editor.chain().focus().setHardBreak().run()}>hard break</button>\n      <button onClick={() => editor.chain().focus().undo().run()}>undo</button>\n      <button onClick={() => editor.chain().focus().redo().run()}>redo</button>\n    </>\n  );\n};\n')),(0,i.kt)("h2",{id:"libraries-for-different-editors"},"Libraries for different editors"),(0,i.kt)("p",null,"The above example uses TipTap, which is a Prosemirror-based editor, but you might be interested in one of the other editors and bindings as well:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Library"),(0,i.kt)("th",{parentName:"tr",align:null},"Binding"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tiptap.dev/"},"TipTap")," (prosemirror based)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tiptap.dev/examples/collaborative-editing"},"built in"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://prosemirror.net/"},"ProseMirror")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/yjs/y-prosemirror"},"y-prosemirror"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://quilljs.com/"},"Quill")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/yjs/y-quill"},"y-quill"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://codemirror.net/"},"CodeMirror")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/yjs/y-codemirror"},"y-codemirror"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://microsoft.github.io/monaco-editor/"},"Monaco")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/yjs/y-monaco"},"y-monaco"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ianstormtaylor/slate"},"Slate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/bitphinix/slate-yjs"},"slate-yjs"))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"View example setup for Prosemirror"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import syncedStore from "@syncedstore/core";\nimport { ySyncPlugin } from "y-prosemirror";\n\nconst doc = new Y.Doc();\nexport const store = syncedStore({ fragment: "xml" });\n\n// When you set up your ProseMirror instance,\n// hook up store.fragment to the y-prosemirror plugin\nEditorState.create({\n  plugins: [\n    ySyncPlugin(store.fragment),\n    // ... other plugins\n  ],\n  // ... remaining prosemirror setup\n});\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(The rest is similar to the documentation of ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/yjs/y-prosemirror"},"y-prosemirror")," )")))))}p.isMDXComponent=!0}}]);