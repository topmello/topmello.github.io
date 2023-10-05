"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[3061],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=p(a),m=r,g=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},s="Database Introduction",i={unversionedId:"database/introduction",id:"database/introduction",title:"Database Introduction",description:"The database system combines the strength of PostgreSQL with Redis's rapid in-memory processing.",source:"@site/docs/database/introduction.md",sourceDirName:"database",slug:"/database/introduction",permalink:"/docs/database/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/database/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/docs/category/database"},next:{title:"PostgreSQL",permalink:"/docs/database/postgresql"}},c={},p=[],d={toc:p},l="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database-introduction"},"Database Introduction"),(0,r.kt)("p",null,"The database system combines the strength of PostgreSQL with Redis's rapid in-memory processing."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Entity Relationship Diagram (ERD)")," visually details the interconnectedness of the database tables."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ERD",src:a(9273).Z,width:"2720",height:"1668"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"PostgreSQL")," serves as the primary database, adept at managing vector-based and geo-spatial queries. For consistent deployment, a Dockerised ",(0,r.kt)("inlineCode",{parentName:"p"},"ankane/pgvector")," image is used alongside the ",(0,r.kt)("inlineCode",{parentName:"p"},"postgresql-15-postgis-3")," geo-spatial extension. The system incorporates ",(0,r.kt)("strong",{parentName:"p"},"pgvector")," for vector operations and ",(0,r.kt)("strong",{parentName:"p"},"PostGIS")," for spatial data insights. Tables are structured using SQLAlchemy and Alembic, the latter ensuring smooth data migrations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Redis"),", the secondary in-memory database, focuses on caching and TTL-based data management, speeding up data retrieval and reducing reliance on the primary database. It assists in handling refresh tokens, room PINs, and logs. A layered data-fetching approach prioritizes Redis for speed, falling back on PostgreSQL when necessary."))),(0,r.kt)("p",null,"Together, PostgreSQL and Redis create a reliable and efficient data management backbone, facilitating various functionalities and ensuring smooth operations."))}u.isMDXComponent=!0},9273:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ERD-07269a16a68fb9996af840c0e7be6cf3.png"}}]);