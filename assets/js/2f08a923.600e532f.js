"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[5023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,k=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Tracker",l={unversionedId:"backend/tracker",id:"backend/tracker",title:"Tracker",description:"This module allow user to create room in sockerIO and let other user join.",source:"@site/docs/backend/tracker.md",sourceDirName:"backend",slug:"/backend/tracker",permalink:"/docs/backend/tracker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/tracker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Documentation Page",permalink:"/docs/backend/swagger"},next:{title:"Translation",permalink:"/docs/backend/translation"}},c={},s=[{value:"Events",id:"events",level:2},{value:"Connect",id:"connect",level:3},{value:"Disconnect",id:"disconnect",level:3},{value:"Join Room",id:"join-room",level:3},{value:"Leave Room",id:"leave-room",level:3},{value:"Move",id:"move",level:3}],u={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tracker"},"Tracker"),(0,o.kt)("p",null,"This module allow user to create room in sockerIO and let other user join."),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h3",{id:"connect"},"Connect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Description: Activated when a client attempts to connect."),(0,o.kt)("li",{parentName:"ul"},"Requirements: A JWT token is mandatory to establish a connection."),(0,o.kt)("li",{parentName:"ul"},"Failure: If the JWT token is missing or invalid, the client will be automatically disconnected."),(0,o.kt)("li",{parentName:"ul"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"newSocket = io(process.env.REACT_APP_API_URL, {\n      path: process.env.REACT_APP_SOCKET_PATH,\n      transportOptions: {\n        polling: {\n          extraHeaders: {\n            'Authorization':`Bearer ${token}`\n  }\n  }\n  }\n  })\n")),(0,o.kt)("h3",{id:"disconnect"},"Disconnect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Description: Activated when a client disconnects. The event logs the disconnection details.")),(0,o.kt)("h3",{id:"join-room"},"Join Room"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Description: Activated when a client wishes to join a room. The client should emit a message to the ",(0,o.kt)("inlineCode",{parentName:"li"},"join_room")," event with the roomId included in the message."),(0,o.kt)("li",{parentName:"ul"},"Validation: The system will verify if the room exists or if it has expired."),(0,o.kt)("li",{parentName:"ul"},"Expiration: Rooms have a lifespan of 30 minutes.")),(0,o.kt)("h3",{id:"leave-room"},"Leave Room"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Description: Activated when a client decides to leave a room. The client should emit a message to the ",(0,o.kt)("inlineCode",{parentName:"li"},"leave_room")," event with the roomId included in the message.")),(0,o.kt)("h3",{id:"move"},"Move"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Description: Activated when a message is sent to the ",(0,o.kt)("inlineCode",{parentName:"li"},"move")," event."),(0,o.kt)("li",{parentName:"ul"},"Message Format: The message should adhere to the following structure: { lat: float, long: float, roomId: string }."),(0,o.kt)("li",{parentName:"ul"},"Failure: If the message format is incorrect, an error message will be emitted to the ",(0,o.kt)("inlineCode",{parentName:"li"},"error_message")," event.")))}d.isMDXComponent=!0}}]);