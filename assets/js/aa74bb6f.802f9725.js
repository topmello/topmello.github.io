"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[7874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,title:"Introduction"},i="Frontend Design Introduction",s={unversionedId:"frontend/introduction",id:"frontend/introduction",title:"Introduction",description:"In the realm of frontend development, a performant and responsive user interface is paramount. Why? The frontend serves as the primary interaction point for users and often shapes the entirety of their experience.",source:"@site/docs/frontend/introduction.md",sourceDirName:"frontend",slug:"/frontend/introduction",permalink:"/docs/frontend/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Frontend",permalink:"/docs/category/frontend"},next:{title:"Styling",permalink:"/docs/frontend/styling"}},p={},c=[{value:"Key Features",id:"key-features",level:2},{value:"Technology Stack",id:"technology-stack",level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frontend-design-introduction"},"Frontend Design Introduction"),(0,r.kt)("p",null,"In the realm of frontend development, a performant and responsive user interface is paramount. Why? The frontend serves as the primary interaction point for users and often shapes the entirety of their experience.",(0,r.kt)("br",{parentName:"p"}),"\n","With React Native at the core of our tech stack, developers can harness the power of a cross-platform solution, ensuring consistent behavior and appearance across Android and iOS platforms.  "),(0,r.kt)("img",{src:"/img/showcase-min.gif",style:{height:500}}),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cross-Platform Development"),": With React Native, the app is developed once but can run on both Android and iOS. This makes for a cost-efficient development process, which our target audience values."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unified UI/UX"),": React Native Paper ensures that the app maintains UI consistency across devices, resulting in a cohesive user experience."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"High-Performance API Calls"),": Axios simplifies making API requests and handles them efficiently hence improve the user experience."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Centralized State Management"),": Redux offers a structured way to manage the app's global state, ensuring that components receive consistent data, which will be benifitial for collaboration between team members and future extension of the application functionailities."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Persistent Data Storage"),": With Redux Persist, the app's state data can survive app restarts, enhancing user experience."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multi-Language Support"),": React i18next ensures that the app can be localized in various languages, which is critical for us to provide service to our target audience."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Geolocation Services"),": Expo Location and React Native Maps enable the app to offer map and location-based features. This adaption allows us to do realtime location sharing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Real-time Interaction"),": Chat and updates in real-time which is built upon WebSocket protocol."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advanced Device Integration"),": Direct calendar interaction, print capabilities and more."),(0,r.kt)("h2",{id:"technology-stack"},"Technology Stack"),(0,r.kt)("p",null,"Frontend Tech stack we use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/"},"React Native")," - Fundamental Framework to build native app for Android and iOS in React"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnativepaper.com/"},"React Native Paper")," - UI component and theme library for UI consistency accross devices"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web-ridge.github.io/react-native-paper-dates/docs/intro"},"React Native Dates")," - Date selector component for React Native Paper"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.expo.dev/routing/introduction/"},"Expo Router")," - Routing between screens"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://axios-http.com/docs/intro"},"Axios")," - API request library"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux.js.org/"},"Redux")," - Global state management for React app"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rt2zz/redux-persist"},"Redux Persist")," - Data persistance for Redux"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://react.i18next.com/"},"React i18next")," - Internalization for React"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/location/"},"Expo Location")," - Providing access to Geolocation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/react-native-maps?activeTab=readme"},"React Native Maps")," - Cross-platform map component")),(0,r.kt)("p",null,"\ud83c\udd95 New In Iteration 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/calendar/"},"Expo Calendar")," - Provides an API for interacting with the device's system calendars"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/keep-awake/"},"Expo KeepAwake")," - A React component that prevents the screen from sleeping when rendered."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/localization/"},"Expo Localization")," - A library that provides an interface for native user localization information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/print/"},"Expo Print")," - A library that provides printing functionality for Android and iOS (AirPrint)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/share"},"React Native Share")," - Provide access to system share API"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/socket.io-client"},"Socket.io Client")," - For realtime messaging")))}u.isMDXComponent=!0}}]);