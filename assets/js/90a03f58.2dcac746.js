"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[9740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Tracker",l={unversionedId:"backend/endpoints/tracker",id:"backend/endpoints/tracker",title:"Tracker",description:"This module allow user to create room in sockerIO and let other user join.",source:"@site/docs/backend/endpoints/tracker.md",sourceDirName:"backend/endpoints",slug:"/backend/endpoints/tracker",permalink:"/docs/backend/endpoints/tracker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/endpoints/tracker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Search Endpoint",permalink:"/docs/backend/endpoints/search"},next:{title:"Translation",permalink:"/docs/backend/endpoints/translation"}},s={},c=[{value:"Endpoint",id:"endpoint",level:2},{value:"<strong>Generate Room PIN</strong>",id:"generate-room-pin",level:3},{value:"Events",id:"events",level:2},{value:"Connect",id:"connect",level:3},{value:"Disconnect",id:"disconnect",level:3},{value:"Join Room",id:"join-room",level:3},{value:"Leave Room",id:"leave-room",level:3},{value:"Move",id:"move",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tracker"},"Tracker"),(0,a.kt)("p",null,"This module allow user to create room in sockerIO and let other user join."),(0,a.kt)("h2",{id:"endpoint"},"Endpoint"),(0,a.kt)("h3",{id:"generate-room-pin"},(0,a.kt)("strong",{parentName:"h3"},"Generate Room PIN")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"URL"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"/track/generate-pin/"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Method"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"GET"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Description"),":\nThis endpoint is designed to generate a unique 6-digit room PIN that is used to identify tracking rooms. Once generated, this PIN is stored in a Redis database with a default expiration time of 30 minutes. Users need to be logged in to generate a room PIN.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Response"),":\nA JSON object containing the generated room PIN. The structure of the response is represented by the ",(0,a.kt)("inlineCode",{parentName:"p"},"schemas.TrackRoomOut")," model, which primarily consists of the ",(0,a.kt)("inlineCode",{parentName:"p"},"room_id")," attribute, indicating the generated PIN."))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"connect"},"Connect"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Description: Activated when a client attempts to connect."),(0,a.kt)("li",{parentName:"ul"},"Requirements: A JWT token is mandatory to establish a connection."),(0,a.kt)("li",{parentName:"ul"},"Failure: If the JWT token is missing or invalid, the client will be automatically disconnected."),(0,a.kt)("li",{parentName:"ul"},"API_URL=",(0,a.kt)("a",{parentName:"li",href:"https://api.settle-aid.tech"},"https://api.settle-aid.tech")),(0,a.kt)("li",{parentName:"ul"},"SOCKET_PATH=/track-sio/sio/"),(0,a.kt)("li",{parentName:"ul"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"newSocket = io(process.env.REACT_APP_API_URL, {\n      path: process.env.REACT_APP_SOCKET_PATH,\n      transportOptions: {\n        polling: {\n          extraHeaders: {\n            'Authorization':`Bearer ${token}`\n  }\n  }\n  }\n  })\n")),(0,a.kt)("h3",{id:"disconnect"},"Disconnect"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Description: Activated when a client disconnects. The event logs the disconnection details.")),(0,a.kt)("h3",{id:"join-room"},"Join Room"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Description: Activated when a client wishes to join a room. The client should emit a message to the ",(0,a.kt)("inlineCode",{parentName:"li"},"join_room")," event with the roomId included in the message."),(0,a.kt)("li",{parentName:"ul"},"Validation: The system will verify if the room exists or if it has expired."),(0,a.kt)("li",{parentName:"ul"},"Expiration: Rooms have a lifespan of 30 minutes.")),(0,a.kt)("h3",{id:"leave-room"},"Leave Room"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Description: Activated when a client decides to leave a room. The client should emit a message to the ",(0,a.kt)("inlineCode",{parentName:"li"},"leave_room")," event with the roomId included in the message.")),(0,a.kt)("h3",{id:"move"},"Move"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Description: Activated when a message is sent to the ",(0,a.kt)("inlineCode",{parentName:"li"},"move")," event."),(0,a.kt)("li",{parentName:"ul"},"Message Format: The message should adhere to the following structure: { lat: float, long: float, roomId: string }."),(0,a.kt)("li",{parentName:"ul"},"Failure: If the message format is incorrect, an error message will be emitted to the ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," message type.")))}m.isMDXComponent=!0}}]);