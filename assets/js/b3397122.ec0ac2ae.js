"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[6618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:6},i="Unit Test",l={unversionedId:"backend/unit-test",id:"backend/unit-test",title:"Unit Test",description:"Setup",source:"@site/docs/backend/unit-test.md",sourceDirName:"backend",slug:"/backend/unit-test",permalink:"/docs/backend/unit-test",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/unit-test.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"System Message",permalink:"/docs/backend/system_message"},next:{title:"API Documentation Page",permalink:"/docs/backend/swagger"}},o={},p=[{value:"Setup",id:"setup",level:2},{value:"Tests",id:"tests",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unit-test"},"Unit Test"),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"test_client"),": This fixture sets up a test client for the FastAPI application. It also handles database migrations and inserts test data.")),(0,r.kt)("h2",{id:"tests"},"Tests"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"test_access_docs"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tests if accessing the root endpoint returns a 401 Unauthorized status."),(0,r.kt)("li",{parentName:"ul"},"Checks if the response contains the 'WWW-Authenticate' header."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"test_generate_name"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tests the endpoint responsible for generating a name."),(0,r.kt)("li",{parentName:"ul"},"Asserts a 200 OK status."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"test_translate"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tests the translation endpoint."),(0,r.kt)("li",{parentName:"ul"},'Sends a Chinese greeting and expects the translation to be "Hello".'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"test_create_user"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tests user creation."),(0,r.kt)("li",{parentName:"ul"},"Checks for either a successful creation or an error indicating the username is already registered."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"test_login")," and ",(0,r.kt)("strong",{parentName:"p"},"test_login_v2"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tests user login functionality."),(0,r.kt)("li",{parentName:"ul"},"Checks for a successful login and the presence of an access token in the response."),(0,r.kt)("li",{parentName:"ul"},"The V2 version also tests the refresh token functionality."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"test_route")," and ",(0,r.kt)("strong",{parentName:"p"},"test_route_v2"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tests route generation based on search criteria."),(0,r.kt)("li",{parentName:"ul"},"Checks for successful route generation and the expected number of locations in the route."),(0,r.kt)("li",{parentName:"ul"},"The V2 version includes additional tests for route retrieval and deletion."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"test_vote"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tests the voting functionality for a route."),(0,r.kt)("li",{parentName:"ul"},"Checks for successful vote creation, vote conflict, and vote deletion."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"test_challenge"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tests the challenge functionality."),(0,r.kt)("li",{parentName:"ul"},"Checks for successful challenge creation based on different criteria (distance traveled, routes generated, favorite routes shared)."),(0,r.kt)("li",{parentName:"ul"},"Retrieves all challenges for the user and filters out the challenges for the current day."),(0,r.kt)("li",{parentName:"ul"},"For each of today's challenges, it checks if the progress is between 0 and 1."),(0,r.kt)("li",{parentName:"ul"},"It also checks specific challenges to ensure the progress matches the expected values.")))))}m.isMDXComponent=!0}}]);