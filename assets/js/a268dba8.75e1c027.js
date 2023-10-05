"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[3971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},s="User endpoint",o={unversionedId:"backend/endpoints/user",id:"backend/endpoints/user",title:"User endpoint",description:"Generate Username",source:"@site/docs/backend/endpoints/user.md",sourceDirName:"backend/endpoints",slug:"/backend/endpoints/user",permalink:"/docs/backend/endpoints/user",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/endpoints/user.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/backend/endpoints/login"},next:{title:"Challenges",permalink:"/docs/backend/endpoints/challenges"}},l={},p=[{value:"<strong>Generate Username</strong>",id:"generate-username",level:2},{value:"<strong>Retrieve User by ID</strong>",id:"retrieve-user-by-id",level:2},{value:"<strong>Create User</strong>",id:"create-user",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-endpoint"},"User endpoint"),(0,a.kt)("h2",{id:"generate-username"},(0,a.kt)("strong",{parentName:"h2"},"Generate Username")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"URL"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"/user/generate/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Method"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),":\nThis endpoint automatically creates a unique username. It utilizes a Transformer decoding architecture to generate the username and ensures its uniqueness by verifying against existing names in the database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Response"),":\nThe response will include a ",(0,a.kt)("inlineCode",{parentName:"li"},"username")," string, representing the newly generated username.")),(0,a.kt)("h2",{id:"retrieve-user-by-id"},(0,a.kt)("strong",{parentName:"h2"},"Retrieve User by ID")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"URL"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"/user/{user_id}/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Method"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"URL Parameters"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),": The ID of the user to retrieve."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),":\nThis endpoint fetches a specific user based on their ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),". It also returns the latest prompts associated with that user. For security reasons, users can only fetch their own details."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Response"),":\nThe response will return the user's details, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"username"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"created_at"),", and an array of their most recent ",(0,a.kt)("inlineCode",{parentName:"li"},"prompts"),".")),(0,a.kt)("h2",{id:"create-user"},(0,a.kt)("strong",{parentName:"h2"},"Create User")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"URL"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"/user/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Method"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),":\nThis endpoint allows the creation of a new user. It ensures that the username is unique and hashes the password before storing it in the database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Body Parameters"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user"),": The user details to be created. It includes fields like ",(0,a.kt)("inlineCode",{parentName:"li"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"password"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Response"),":\nThe response will return the created user's details, including ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"username"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"created_at"),".")))}c.isMDXComponent=!0}}]);