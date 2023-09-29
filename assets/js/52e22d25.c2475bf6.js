"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[2544],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={},o="Iteration 2 - History and Safety",s={unversionedId:"data-management-plan/iteration-2",id:"data-management-plan/iteration-2",title:"Iteration 2 - History and Safety",description:"In the second iteration of our project, the primary objective is to enhance the user experience by offering features that allow users to track, review, and share their travel routes. This iteration is designed to make the cultural navigation process more personalized and interactive. By introducing functionalities like travel route history review, scheduling, real-time tracking, and route sharing, we aim to create a platform where users can not only navigate through the city but also share their experiences and learn from others.",source:"@site/docs/data-management-plan/iteration-2.md",sourceDirName:"data-management-plan",slug:"/data-management-plan/iteration-2",permalink:"/docs/data-management-plan/iteration-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-management-plan/iteration-2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Iteration 1 - Cultural Navigation based on Itinerary",permalink:"/docs/data-management-plan/iteration-1"},next:{title:"Iteration 3 - Recommendations and Challenges",permalink:"/docs/data-management-plan/iteration-3"}},l={},u=[{value:"Data Tech Stacks:",id:"data-tech-stacks",level:2},{value:"User Data Collection:",id:"user-data-collection",level:2},{value:"User Data Application:",id:"user-data-application",level:2},{value:"API Integration:",id:"api-integration",level:2},{value:"AI Integration for Enhanced Semantic Search:",id:"ai-integration-for-enhanced-semantic-search",level:2},{value:"Database Design and Data Migration:",id:"database-design-and-data-migration",level:2},{value:"Data Security and Privacy:",id:"data-security-and-privacy",level:2},{value:"Data Quality and Assurance:",id:"data-quality-and-assurance",level:2},{value:"Archiving and Preservation:",id:"archiving-and-preservation",level:2},{value:"Conclusion:",id:"conclusion",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iteration-2---history-and-safety"},"Iteration 2 - History and Safety"),(0,r.kt)("p",null,"In the second iteration of our project, the primary objective is to enhance the user experience by offering features that allow users to track, review, and share their travel routes. This iteration is designed to make the cultural navigation process more personalized and interactive. By introducing functionalities like travel route history review, scheduling, real-time tracking, and route sharing, we aim to create a platform where users can not only navigate through the city but also share their experiences and learn from others."),(0,r.kt)("h2",{id:"data-tech-stacks"},"Data Tech Stacks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PostgreSQL"),": Serving as our primary relational database, PostgreSQL stores user-specific data, including generated routes, prompts used, and room-related information. Its robustness and scalability ensure the efficient handling of user interactions and data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Redis"),": Integrated for its superior performance in managing data with short lifespans, Redis excels in real-time data retrieval. Its capabilities extend to session management, location tracking, and log streaming, all while ensuring optimal storage and enhanced security through its TTL feature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FastAPI"),": Adopted for its performance and Pythonic nature, FastAPI aids in creating a seamless user interface. It employs Pydantic for data validation, ensuring the quality and integrity of user data inputs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Open Data Melbourne"),": Leveraging datasets from Melbourne's open data platform, our platform gains access to a wealth of city-specific information, ranging from infrastructure to cultural landmarks. This data integration enhances the platform's accuracy and relevance when offering route suggestions or city insights to users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SocketIO"),": Facilitating real-time communication, especially for location tracking features, SocketIO ensures instantaneous data transmission, offering users a real-time interactive experience."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MapBox, Google Translate & Google Location APIs"),": These external APIs are integrated to enrich the platform's functionalities. MapBox assists in generating routes, Google Translate aids in user input translation, and the Google API is pivotal for location search, all culminating in a comprehensive user experience."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Huggingface's Sentence Transformers"),": This AI-powered integration enhances the platform's semantic search capabilities, allowing for deeper comprehension of user inputs and more contextually relevant responses.")),(0,r.kt)("h2",{id:"user-data-collection"},"User Data Collection:"),(0,r.kt)("p",null,"The current iteration of our platform places a pronounced emphasis on the effective and responsible collection and management of user data. This section of the Data Management Plan outlines our approach to handling user data, with a focus on the route history, route sharing, and route favoriting features, while simultaneously upholding the users' privacy and data rights."),(0,r.kt)("p",null,"We capture the following user-specific data points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Route Generated: This pertains to the specific paths users choose or generate within the application."),(0,r.kt)("li",{parentName:"ul"},"Prompts Used: These are the prompts or messages that users interact with during their navigation experience."),(0,r.kt)("li",{parentName:"ul"},"Rooms Created: Every time a user opts to share their route, a unique room is created, and this interaction is recorded."),(0,r.kt)("li",{parentName:"ul"},"Route Favoriting: Details of routes that users mark as their favourites are stored, providing insights into preferred paths.")),(0,r.kt)("h2",{id:"user-data-application"},"User Data Application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Route History"),": Enables users to reflect on their past navigational choices and perhaps rediscover routes they found valuable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Route Sharing"),": Users can instantaneously share their selected route with another user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Route Favoriting"),": This feature allows for easy and quick access to routes that users find particularly useful or enjoyable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Real time user location tracking"),": By leveraging SocketIO, users can securely and instantaneously share their current route and location with another user without the need for location storage.")),(0,r.kt)("h2",{id:"api-integration"},"API Integration:"),(0,r.kt)("p",null,"To further enhance user experience and accuracy, we have integrated several external APIs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MapBox API"),": For precise route generation, we utilise the MapBox API which thrives on open location data, providing users with the most accurate and efficient routes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Google Translate API"),": Understanding that our user base might be diverse, the Google Translate API assists in translating user inputs, ensuring seamless interaction for users of various linguistic backgrounds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Google API for Location Search"),": To bolster accuracy in location search and provide users with comprehensive results, we have incorporated the Google API, renowned for its precise location-based services.")),(0,r.kt)("h2",{id:"ai-integration-for-enhanced-semantic-search"},"AI Integration for Enhanced Semantic Search:"),(0,r.kt)("p",null,"In our continuous pursuit to revolutionise the user experience, integrating cutting-edge AI capabilities remains central to our platform's evolution. A particularly significant enhancement in this iteration is the incorporation of Huggingface's sentence transformers. This advancement allows us to encode user inputs into embeddings, providing the foundation for a rich semantic search experience."),(0,r.kt)("p",null,"The integration of Huggingface's sentence transformers offers a twofold advantage:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Precision & Relevance"),": By understanding the deeper, semantic intent behind user inputs, the platform can provide search results or suggestions that are profoundly accurate and tailored to the user's implied needs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Efficiency"),": Encoding textual data into embeddings facilitates quicker comparisons and searches, ensuring that users receive instantaneous responses without compromising on the quality or relevance of the results.")),(0,r.kt)("h2",{id:"database-design-and-data-migration"},"Database Design and Data Migration:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PostgreSQL"),":\nTo support these features, a robust database design is essential. Therefore, the tables will be created as follow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ROUTE")," table is the heart of the travel route functionalities. Each route is uniquely identified by a ",(0,r.kt)("inlineCode",{parentName:"li"},"route_id"),". This table also contains a foreign key, ",(0,r.kt)("inlineCode",{parentName:"li"},"created_by_user_id"),", linking to the user who travelled the route."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ROUTE_PROMPT")," table is designed to store prompts or messages related to specific routes. Each prompt has a unique id and is linked to prompt and route via a foreign key, ",(0,r.kt)("inlineCode",{parentName:"li"},"prompt_id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"route_id"),". The prompt related to the route is stored in the ",(0,r.kt)("inlineCode",{parentName:"li"},"prompt")," column as an array of strings."),(0,r.kt)("li",{parentName:"ul"},"Lastly, the ",(0,r.kt)("inlineCode",{parentName:"li"},"USER_ROUTE_VOTE")," table acts as a bridge, connecting users to their preferred routes and prompts.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Redis"),":\nMoreover, we are adding Redis as a part of our database architecture because of its unparalleled performance and efficiency in handling data with defined lifespans. Redis, an in-memory data structure store, ensures rapid data retrieval, which is crucial for features that require real-time response, such as location tracking and session management. Additionally, its support for various data structures, like strings, hashes, and lists, ensures flexibility in storing and managing various data types. It's time-to-live (TTL) feature makes it ideal for data that needs automatic expiry after a set period, like room numbers and refresh tokens. This built-in expiry mechanism not only optimises storage but also contributes to security by ensuring that transient data isn\u2019t available indefinitely."),(0,r.kt)("h2",{id:"data-security-and-privacy"},"Data Security and Privacy:"),(0,r.kt)("p",null,"our platform, which revolves around personal travel routes and real-time location sharing. Therefore, data security and privacy concerns can be paramount. Below is an in-depth exploration of our approach to ensuring both security and privacy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentication via Refresh Tokens"),": The refresh token table plays a pivotal role in user authentication. By employing refresh tokens: We enable users to maintain prolonged sessions without the need for frequent re-authentications, thereby enhancing user experience. At the same time, the periodic expiration of these tokens (TTL of 7 days) ensures that the possibility of unauthorized access due to token compromise is limited."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SocketIO for Real-time Tracking"),": Real-time tracking will be implemented using socketIO and the user must be opt-in, ensuring users have control over their privacy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Route Sharing"),": The Room IDs will be stored with a time-to-live (TTL) mechanism, ensuring data security by automatically deleting room information after a set period. This minimises the window of vulnerability where unauthorized individuals might attempt to access shared routes.")),(0,r.kt)("h2",{id:"data-quality-and-assurance"},"Data Quality and Assurance:"),(0,r.kt)("p",null,"In ensuring the highest standards of data quality and assurance, we have incorporated various mechanisms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type Safety"),": With Pydantic, every input or output model is type-annotated, ensuring that the application handles only valid data types, mitigating the risk of type-related errors and enhancing overall data quality."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic Data Validation"),": With Pydantic models, we have implemented automatic data validation, ensuring that all incoming data meets defined standards and specifications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Transformation"),": Pydantic models can automatically transform incoming data into the desired format, further enhancing data quality and consistency, and ensuring that the stored data is clean, consistent, and usable.")),(0,r.kt)("h2",{id:"archiving-and-preservation"},"Archiving and Preservation:"),(0,r.kt)("p",null,"To ensure the secure and efficient archiving and preservation of user data, we have employed various strategies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Room IDs"),": Stored with a time-to-live (TTL) mechanism, Room IDs are automatically deleted after a set period, enhancing security and optimising storage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Refresh Tokens"),": Stored in Redis and come with a TTL of 7 days. This approach limits the exposure window of each token, further enhancing the platform\u2019s security. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Location Data"),": Not stored within our databases, ensuring that users' real-time locations are never at risk of unauthorized access.")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion:"),(0,r.kt)("p",null,"Our data management strategy for user data underscores the balance between offering tailored, responsive features and upholding data privacy and integrity. Through careful and thoughtful planning, we are confident that our platform will continue to provide exceptional, seamless experiences to users, all while ensuring the utmost standards of data security and protection."))}p.isMDXComponent=!0}}]);