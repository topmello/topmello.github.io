"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[8161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},i="Schema",s={unversionedId:"backend/schema",id:"backend/schema",title:"Schema",description:"This document provides a detailed overview of the Pydantic schemas used for data validation and serialization in the API.",source:"@site/docs/backend/schema.md",sourceDirName:"backend",slug:"/backend/schema",permalink:"/docs/backend/schema",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/schema.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logs \ud83d\udcdc",permalink:"/docs/backend/logs"},next:{title:"Search",permalink:"/docs/backend/search"}},o={},u=[{value:"UserCreate",id:"usercreate",level:3},{value:"LoginRequest",id:"loginrequest",level:3},{value:"User",id:"user",level:3},{value:"Prompt",id:"prompt",level:3},{value:"UserOut",id:"userout",level:3},{value:"Token",id:"token",level:3},{value:"TokenV2",id:"tokenv2",level:3},{value:"RefreshTokenIn",id:"refreshtokenin",level:3},{value:"TokenData",id:"tokendata",level:3},{value:"Query",id:"query",level:3},{value:"QuerySeq",id:"queryseq",level:3},{value:"RouteQuery",id:"routequery",level:3},{value:"SearchResult",id:"searchresult",level:3},{value:"RouteOut",id:"routeout",level:3},{value:"UsernameGen",id:"usernamegen",level:3},{value:"TranslateQuery",id:"translatequery",level:3},{value:"TranslateRes",id:"translateres",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"schema"},"Schema"),(0,a.kt)("p",null,"This document provides a detailed overview of the Pydantic schemas used for data validation and serialization in the API."),(0,a.kt)("h3",{id:"usercreate"},"UserCreate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"username: A string with a length between 4 and 20 characters. It must start with a letter and can contain letters, numbers, and underscores."),(0,a.kt)("li",{parentName:"ul"},"password: A string with a length between 4 and 20 characters. It can contain letters, numbers, and special characters (!@#$%^&","*",").")),(0,a.kt)("h3",{id:"loginrequest"},"LoginRequest"),(0,a.kt)("p",null,"Similar to UserCreate but used for login purposes."),(0,a.kt)("h3",{id:"user"},"User"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"user_id: An integer representing the user's ID."),(0,a.kt)("li",{parentName:"ul"},"username: A string representing the user's name."),(0,a.kt)("li",{parentName:"ul"},"password: A string representing the user's password."),(0,a.kt)("li",{parentName:"ul"},"created_at: A datetime object representing when the user was created.")),(0,a.kt)("h3",{id:"prompt"},"Prompt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"prompt_id: An integer representing the prompt's ID."),(0,a.kt)("li",{parentName:"ul"},"created_by_user_id: An integer representing the ID of the user who created the prompt."),(0,a.kt)("li",{parentName:"ul"},"prompt: A list of strings, each with a maximum length of 50 characters."),(0,a.kt)("li",{parentName:"ul"},"location_type: A list of strings."),(0,a.kt)("li",{parentName:"ul"},"created_at: A datetime object representing when the prompt was created.")),(0,a.kt)("h3",{id:"userout"},"UserOut"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"user_id: An integer representing the user's ID."),(0,a.kt)("li",{parentName:"ul"},"username: A string representing the user's name."),(0,a.kt)("li",{parentName:"ul"},"created_at: A datetime object representing when the user was created."),(0,a.kt)("li",{parentName:"ul"},"prompts: A list of Prompt objects associated with the user.")),(0,a.kt)("h3",{id:"token"},"Token"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"access_token: A string representing the access token."),(0,a.kt)("li",{parentName:"ul"},"token_type: A string representing the type of the token.")),(0,a.kt)("h3",{id:"tokenv2"},"TokenV2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extends Token and adds:"),(0,a.kt)("li",{parentName:"ul"},"refresh_token: A string representing the refresh token.")),(0,a.kt)("h3",{id:"refreshtokenin"},"RefreshTokenIn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"refresh_token: A string representing the refresh token.")),(0,a.kt)("h3",{id:"tokendata"},"TokenData"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"user_id: An integer representing the user's ID."),(0,a.kt)("li",{parentName:"ul"},"username: A string representing the user's name.")),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"query: A string representing the user's search query."),(0,a.kt)("li",{parentName:"ul"},"location_type: A string representing the type of location. Valid values are 'landmark', 'restaurant', 'grocery', and 'pharmacy'."),(0,a.kt)("li",{parentName:"ul"},"longitude: A float representing the longitude of the user's current location."),(0,a.kt)("li",{parentName:"ul"},"latitude: A float representing the latitude of the user's current location."),(0,a.kt)("li",{parentName:"ul"},"distance_threshold: A float representing the maximum distance for search results."),(0,a.kt)("li",{parentName:"ul"},"similarity_threshold: A float representing the minimum similarity score for search results.")),(0,a.kt)("h3",{id:"queryseq"},"QuerySeq"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extends Query but allows for lists of queries and location types.")),(0,a.kt)("h3",{id:"routequery"},"RouteQuery"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extends QuerySeq and adds:"),(0,a.kt)("li",{parentName:"ul"},"route_type: A string representing the type of route. Valid values are 'driving', 'walking', and 'cycling'.")),(0,a.kt)("h3",{id:"searchresult"},"SearchResult"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: A string representing the name of the location."),(0,a.kt)("li",{parentName:"ul"},"latitude: A float representing the latitude of the location."),(0,a.kt)("li",{parentName:"ul"},"longitude: A float representing the longitude of the location."),(0,a.kt)("li",{parentName:"ul"},"similarity: A float representing the similarity score of the location to the query.")),(0,a.kt)("h3",{id:"routeout"},"RouteOut"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"locations: A list of strings representing the names of the locations in the route."),(0,a.kt)("li",{parentName:"ul"},"locations_coordinates: A list of dictionaries with 'latitude' and 'longitude' keys representing the coordinates of the locations."),(0,a.kt)("li",{parentName:"ul"},"route: A list of dictionaries with 'latitude' and 'longitude' keys representing the coordinates of the route."),(0,a.kt)("li",{parentName:"ul"},"instructions: A list of strings representing the instructions for the route."),(0,a.kt)("li",{parentName:"ul"},"duration: A float representing the duration of the route.")),(0,a.kt)("h3",{id:"usernamegen"},"UsernameGen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"username: A string representing a generated username.")),(0,a.kt)("h3",{id:"translatequery"},"TranslateQuery"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"texts: A list of strings, each with a maximum length of 50 characters, representing the texts to be translated.")),(0,a.kt)("h3",{id:"translateres"},"TranslateRes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"results: A list of strings representing the translated texts.")))}d.isMDXComponent=!0}}]);