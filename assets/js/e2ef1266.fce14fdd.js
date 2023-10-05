"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[2040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="Authentication",s={unversionedId:"backend/login",id:"backend/login",title:"Authentication",description:"Authenticate User (v1)",source:"@site/docs/backend/login.md",sourceDirName:"backend",slug:"/backend/login",permalink:"/docs/backend/login",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/login.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Development Environment",permalink:"/docs/backend/development-environment"},next:{title:"User endpoint",permalink:"/docs/backend/user"}},l={},c=[{value:"<strong>Authenticate User (v1)</strong>",id:"authenticate-user-v1",level:2},{value:"<strong>Authenticate User (v2)</strong>",id:"authenticate-user-v2",level:2},{value:"<strong>Refresh Access Token</strong>",id:"refresh-access-token",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("h2",{id:"authenticate-user-v1"},(0,a.kt)("strong",{parentName:"h2"},"Authenticate User (v1)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"URL"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"/login/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Method"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Body Parameters"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user_credentials"),": A JSON object with the user's ",(0,a.kt)("inlineCode",{parentName:"li"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"password"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),":\nThis endpoint attempts to authenticate a user using the provided credentials. If successful, it returns a JWT access token."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Response"),":\nA JSON object containing an ",(0,a.kt)("inlineCode",{parentName:"li"},"access_token")," and its ",(0,a.kt)("inlineCode",{parentName:"li"},"token_type"),' which is "bearer".')),(0,a.kt)("h2",{id:"authenticate-user-v2"},(0,a.kt)("strong",{parentName:"h2"},"Authenticate User (v2)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"URL"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"/login/v2/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Method"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Body Parameters"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user_credentials"),": A JSON object with the user's ",(0,a.kt)("inlineCode",{parentName:"li"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"password"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),":\nThis enhanced version of the login endpoint offers additional features over its predecessor. When a user is authenticated, it returns a JWT access token, as well as a refresh token to enable future token renewals without requiring re-authentication. The endpoint also handles cases where the login request originates from a web UI, setting the JWT as a cookie."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Response"),":\nA JSON object containing the user's ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"username"),", the ",(0,a.kt)("inlineCode",{parentName:"li"},"access_token")," and its ",(0,a.kt)("inlineCode",{parentName:"li"},"token_type"),' which is "bearer", as well as the ',(0,a.kt)("inlineCode",{parentName:"li"},"refresh_token")," and their respective expiration times.")),(0,a.kt)("h2",{id:"refresh-access-token"},(0,a.kt)("strong",{parentName:"h2"},"Refresh Access Token")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"URL"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"/login/v2/refresh/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Method"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Body Parameters"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"refresh_token"),": A JSON object with the refresh token used to generate a new access token."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),":\nThis endpoint allows a user to refresh their JWT access token using a valid refresh token. By using the refresh mechanism, users can obtain a new access token without undergoing a full re-authentication process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Response"),":\nA JSON object containing the user's ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"username"),", a new ",(0,a.kt)("inlineCode",{parentName:"li"},"access_token")," and its ",(0,a.kt)("inlineCode",{parentName:"li"},"token_type"),' which is "bearer", as well as the existing ',(0,a.kt)("inlineCode",{parentName:"li"},"refresh_token")," and their respective expiration times.")))}d.isMDXComponent=!0}}]);