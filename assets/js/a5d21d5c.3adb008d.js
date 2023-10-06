"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},o="Data Validation",s={unversionedId:"backend/data-validation",id:"backend/data-validation",title:"Data Validation",description:"FastAPI leverages the power of Pydantic for data validation, serialization, and documentation. Pydantic ensures that the data conforms to expected formats and helps in error handling. Below is a brief description of each schema:",source:"@site/docs/backend/data-validation.md",sourceDirName:"backend",slug:"/backend/data-validation",permalink:"/docs/backend/data-validation",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"DevOps - CI/CD",permalink:"/docs/backend/devops"},next:{title:"System Message",permalink:"/docs/backend/system_message"}},l={},d=[],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-validation"},"Data Validation"),(0,r.kt)("p",null,"FastAPI leverages the power of Pydantic for data validation, serialization, and documentation. Pydantic ensures that the data conforms to expected formats and helps in error handling. Below is a brief description of each schema:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UserCreate"),": Defines the structure for user creation with constraints on username and password length and pattern."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LoginRequest"),": Represents user login request, with validation on username and password."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User"),": Describes a user with attributes like user_id, username, password, and creation date."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prompt & PromptV2"),": Outlines prompts created by users with attributes like prompt id, user id, prompts, and creation date. Version 2 (",(0,r.kt)("inlineCode",{parentName:"li"},"PromptV2"),") also includes negative prompts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RouteOut & RouteOutV2"),": Defines route data. Version 2 (",(0,r.kt)("inlineCode",{parentName:"li"},"RouteOutV2"),") includes additional attributes like route id and creation date. It also converts latitudes and longitudes into dictionary format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RouteVoteOut & RouteVoteOutUser"),": Outlines user votes for routes. The latter also indicates if a user has voted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UserOut"),": Describes a user along with their associated prompts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token & TokenV2"),": Represents token data, with the latter (",(0,r.kt)("inlineCode",{parentName:"li"},"TokenV2"),") offering a comprehensive view, including user id, access, and refresh token details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Query, QuerySeq, RouteQuery, & RouteQueryV2"),": Defines search parameters for location-based queries. They include validation for location type and route type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SearchResult"),": Represents search results, providing the name, coordinates, and similarity of the result."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UsernameGen & TranslateQuery"),": Outlines structures for generating usernames and translating queries, respectively."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VoteIn"),": Represents the structure for user votes on routes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Challenge & UserChallengeOut"),": Defines challenges and user interactions with challenges."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LeaderboardOut"),": Represents user scores on a leaderboard.")),(0,r.kt)("p",null,"The schemas incorporate constraints like ",(0,r.kt)("inlineCode",{parentName:"p"},"constr()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"conint()"),", ensuring data like username and password adhere to specific formats or value ranges. Validators like ",(0,r.kt)("inlineCode",{parentName:"p"},"field_validator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"root_validator")," ensure custom validations on fields, enhancing the robustness of data input."),(0,r.kt)("p",null,"In essence, Pydantic, combined with FastAPI, offers a systematic and efficient approach to manage and validate incoming and outgoing data, ensuring data integrity and minimizing potential errors."))}c.isMDXComponent=!0}}]);