"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[6547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Translation",s={unversionedId:"backend/endpoints/translation",id:"backend/endpoints/translation",title:"Translation",description:"This module provides an endpoint for translating text using the Google Cloud Translation API.",source:"@site/docs/backend/endpoints/translation.md",sourceDirName:"backend/endpoints",slug:"/backend/endpoints/translation",permalink:"/docs/backend/endpoints/translation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/endpoints/translation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tracker",permalink:"/docs/backend/endpoints/tracker"},next:{title:"Database",permalink:"/docs/category/database"}},l={},p=[{value:"Dependencies",id:"dependencies",level:2},{value:"Utility Functions",id:"utility-functions",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"<strong>Translate Texts</strong>",id:"translate-texts",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"translation"},"Translation"),(0,r.kt)("p",null,"This module provides an endpoint for translating text using the Google Cloud Translation API."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fastapi: The main framework used for building the API."),(0,r.kt)("li",{parentName:"ul"},"schemas, oauth2, translation: Internal modules containing data schemas, OAuth2 utilities, and translation functions respectively."),(0,r.kt)("li",{parentName:"ul"},"google.cloud: Used to interact with the Google Cloud Translation API.")),(0,r.kt)("h2",{id:"utility-functions"},"Utility Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"translate_text(text: str) -> dict: Translates a single text into the target language and returns the translated text."),(0,r.kt)("li",{parentName:"ul"},"translate_list(text_list: list","[str]",") -> list","[str]",": Translates a list of texts into the target language and returns a list of translated texts.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Google Cloud Translation API requires authentication. The path to the authentication credentials is specified in the credential_path variable. Ensure that the google_application_credentials.json file is present in the specified path and contains valid credentials."),(0,r.kt)("li",{parentName:"ul"},"The environment variable GOOGLE_APPLICATION_CREDENTIALS is set to the path of the authentication credentials to authenticate the API requests.")),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("h3",{id:"translate-texts"},(0,r.kt)("strong",{parentName:"h3"},"Translate Texts")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"/translate/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Description"),":\nThis endpoint allows users to translate a list of texts. Users provide a list of texts, and the service returns the translated versions of those texts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Request Body"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"texts")," (list of strings): The list of texts that need to be translated, as specified in the ",(0,r.kt)("inlineCode",{parentName:"li"},"schemas.TranslateQuery")," model."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Response"),":\nThe response will be a JSON object containing the translated texts. The structure of the response is given by the ",(0,r.kt)("inlineCode",{parentName:"p"},"schemas.TranslateRes")," model, which primarily consists of the ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," attribute. The ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," attribute holds the list of translated texts corresponding to the input texts provided."))))}d.isMDXComponent=!0}}]);