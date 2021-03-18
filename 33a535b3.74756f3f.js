(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(323)),i={title:"Connection Options"},c={unversionedId:"connect-options",id:"connect-options",isDocsHomePage:!1,title:"Connection Options",description:"Changes how the realtime 2 way connection between the client and Discord's Gateway WebSockets Server behaves.",source:"@site/docs/connect-options.md",slug:"/connect-options",permalink:"/sleepy-discord/docs/connect-options",version:"current",lastUpdatedAt:1616028544,sidebar:"Docs",previous:{title:"Snowflakes and IDs",permalink:"/sleepy-discord/docs/snowflake"},next:{title:"Classes",permalink:"/sleepy-discord/docs/reference/index_classes"}},s=[{value:"Gateway Version",id:"gateway-version",children:[]},{value:"Intents",id:"intents",children:[]},{value:"Compression",id:"compression",children:[]},{value:"Sharding",id:"sharding",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Changes how the realtime 2 way connection between the client and Discord's Gateway WebSockets Server behaves."),Object(a.b)("h2",{id:"gateway-version"},"Gateway Version"),Object(a.b)("p",null,"You can set this by switching between different Git branches of the library's repo. You can't set the gateway version using code as the library doesn't account for differences between version. For versions that Discord supports, check out ",Object(a.b)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#gateways-gateway-versions"},"the Discord API docs"),". For Git branches of this library, check out ",Object(a.b)("a",{parentName:"p",href:"https://github.com/yourWaifu/sleepy-discord/branches"},"the GitHub repo"),"."),Object(a.b)("h2",{id:"intents"},"Intents"),Object(a.b)("p",null,"Filters what information Discord sends to the client. ",Object(a.b)("a",{parentName:"p",href:"reference/Files/client_8h/#enum-intent"},"Click here for a list of available Intents"),"."),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Required for v8 and up"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);\nauto intentsList = {\n    SleepyDiscord::Intent::SERVER_MESSAGES, //required for commands via messages\n    SleepyDiscord::Intent::SERVER_VOICE_STATES, //required for connecting to voice\n};\nclient.setIntents(intentsList);\nclient.run(); //call setIntents before calling run\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);\nclient.setIntents(\n    SleepyDiscord::Intent::SERVER_MESSAGES,\n    SleepyDiscord::Intent::SERVER_VOICE_STATES\n);\nclient.run(); //call setIntents before calling run\n')),Object(a.b)("h2",{id:"compression"},"Compression"),Object(a.b)("p",null,"Makes Discord send Zlib compressed WebSockets to save bandwidth but with a cost, CPU and some RAM at runtime. In most situations, this might be worth turning on."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"You need to set USE_ZLIB_NG to ON in CMake for this to work."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);\nclient.useCompression(true);\nclient.run(); //call useCompression before calling run\n')),Object(a.b)("h2",{id:"sharding"},"Sharding"),Object(a.b)("p",null,"Lets you split up your bots' operations by splitting the list of Discord servers that each connection handles. This can be done by running multiple instances of your Client with the same token but different shard IDs."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);\nclient.setShardID(0, 2); //the first parameter is the shardID\nclient.run(); //call setShardID before run\n\n//somewhere else\nClient client("token", SleepyDiscord::USER_CONTROLED_THREADS); //Same token\nclient.setShardID(1, 2); //different shardID but same shardCount\nclient.run();\n')),Object(a.b)("p",null,"For more information on sharding, check ",Object(a.b)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#sharding"},"the Discord API Docs"),"."))}p.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);