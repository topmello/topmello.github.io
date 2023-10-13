"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[5786],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={},o="Iteration 3 - Recommendations and Challenges",s={unversionedId:"data-management-plan/iteration-3",id:"data-management-plan/iteration-3",title:"Iteration 3 - Recommendations and Challenges",description:"In iteration 3, significant enhancements were made to augment user interaction and engagement within the application. A global feed feature was introduced, allowing users to publish and share routes with the broader user community. The application now recommends these shared routes to users, enhancing the exploratory experience within the app. Additionally, a challenge system was established to incentivize user activity by tracking various interactions and ranking users on a leaderboard.",source:"@site/docs/data-management-plan/iteration-3.md",sourceDirName:"data-management-plan",slug:"/data-management-plan/iteration-3",permalink:"/docs/data-management-plan/iteration-3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Iteration 2 - History and Safety",permalink:"/docs/data-management-plan/iteration-2"}},l={},d=[{value:"User Data Collection",id:"user-data-collection",level:2},{value:"User Data Application",id:"user-data-application",level:2},{value:"Foresight - Future Utilisation of User Data and Open Data for Enhanced Personalisation",id:"foresight---future-utilisation-of-user-data-and-open-data-for-enhanced-personalisation",level:3},{value:"Database Design",id:"database-design",level:2},{value:"Redis",id:"redis",level:3},{value:"Archiving",id:"archiving",level:3},{value:"Implications for Database Design",id:"implications-for-database-design",level:3},{value:"Data Quality",id:"data-quality",level:2},{value:"OpenAI&#39;s CLIP Integration for Enhanced Image-Text Alignment:",id:"openais-clip-integration-for-enhanced-image-text-alignment",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iteration-3---recommendations-and-challenges"},"Iteration 3 - Recommendations and Challenges"),(0,i.kt)("p",null,"In iteration 3, significant enhancements were made to augment user interaction and engagement within the application. A global feed feature was introduced, allowing users to publish and share routes with the broader user community. The application now recommends these shared routes to users, enhancing the exploratory experience within the app. Additionally, a challenge system was established to incentivize user activity by tracking various interactions and ranking users on a leaderboard."),(0,i.kt)("h2",{id:"user-data-collection"},"User Data Collection"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Published Routes:"),"\nThe system records data regarding routes published by users. This data includes the route details (start, end, waypoints, and duration) and metadata (number of likes, etc.)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Challenges:"),"\nChallenges data, including the number of walking steps, are collected for each user. This data is used to monitor user progress in challenges and award points accordingly."),(0,i.kt)("h2",{id:"user-data-application"},"User Data Application"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Published Routes:"),"\nUser-published route data is utilized to populate the global feed, making these routes available to all application users. It is also used to manage route availability (expiry after one day) and inform the route recommendation system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Challenges Data:"),"\nChallenges data, including walking steps, is used to rank users on the leaderboard, providing incentives for further interaction with the application."),(0,i.kt)("h3",{id:"foresight---future-utilisation-of-user-data-and-open-data-for-enhanced-personalisation"},"Foresight - Future Utilisation of User Data and Open Data for Enhanced Personalisation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Current Scenario:"),"\nAt present, the system utilizes a basic model for route recommendations, primarily sorting based on likes and time. This method is practical given the current user base and serves the purpose of offering some level of personalization to users."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Future Enhancements:"),"\nAs the application grows and the user base expands, there is a discernible pathway to enhance the recommendation system. The extensive user data collected, coupled with external open data, will be pivotal in this enhancement."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Personalised Recommender System potentials:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Utilising Location Embeddings: Existing location embeddings can be leveraged as item features to provide more personalized route recommendations."),(0,i.kt)("li",{parentName:"ul"},"Users' historical data and preferences can be analyzed to make the recommendations more tailored."),(0,i.kt)("li",{parentName:"ul"},"Integration with Open Data: Integrating open data sources (like weather data, traffic data, and event data) will allow the system to provide even more contextual and relevant route recommendations."),(0,i.kt)("li",{parentName:"ul"},"Machine Learning Algorithms: Employing machine learning algorithms and collaborative filtering can significantly improve the recommendation engine.")))),(0,i.kt)("h2",{id:"database-design"},"Database Design"),(0,i.kt)("p",null,"The database is designed to efficiently store and manage both user and route data."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Redis:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Used for storing the global feed of published routes."),(0,i.kt)("li",{parentName:"ul"},"Employed for managing route expiry through TTL (Time-To-Live)."),(0,i.kt)("li",{parentName:"ul"},"Utilised for storing leaderboard data.")),(0,i.kt)("h3",{id:"redis"},"Redis"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"routes_feed:"),"\nThe routes_feed object in the database is used for storing published routes that users wish to share within the application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Functionality associated with routes_feed includes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publish_route_in_redis"),": This function adds a route to a Redis ZSET with a computed score, combining the number of votes and a normalized timestamp, ensuring freshness and popularity in the feed. The route is given an expiration time of one day (86400 seconds)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cleanup_expired_routes"),": This function removes routes from the ZSET in Redis that have expired, ensuring that the routes_feed remains fresh and relevant.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"challenge_leaderboard:"),"\nThe challenge_leaderboard object in the database is used to keep track of user scores and rankings based on their interactions and challenges completed within the application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Functionality associated with challenge_leaderboard includes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_leaderboard"),": This function fetches the top users from Redis for the current week based on scores, offering a real-time leaderboard for user challenges.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PostgreSQL:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Used for storing detailed user data, including challenges data and walking steps."),(0,i.kt)("li",{parentName:"ul"},"Handles other persistent data necessary for the application.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Challenge Table Attributes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id, name, type, grade, score"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"User_Challenge Table Attributes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user_id, challenge_id, year, month, day, created_at, progress, score_added"))),(0,i.kt)("h3",{id:"archiving"},"Archiving"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TTL (Time-To-Live):"),"\nPublished routes have a TTL of one day in the Redis database, ensuring that the global feed remains fresh and manageable."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Backup:"),"\nThe prodrigestivill/postgres-backup-local image is employed for the daily backup of the PostgreSQL database."),(0,i.kt)("h3",{id:"implications-for-database-design"},"Implications for Database Design"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Efficiency:")," The use of Redis for managing routes_feed and challenge_leaderboard ensures high-speed data retrieval, enhancing the user experience by providing quick access to published routes and leaderboard rankings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scalability:")," The system is designed for efficient data handling, allowing it to effectively manage an increasing volume of user data and published routes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reliability:")," Regular cleanup of expired routes and daily backups of PostgreSQL ensure the reliability and integrity of the stored data.")),(0,i.kt)("h2",{id:"data-quality"},"Data Quality"),(0,i.kt)("p",null,"Validation checks are implemented to ensure that only valid and complete route data is accepted when a user publishes a route."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request Data Validation:"),"\nEach endpoint receives data which is validated using Pydantic models."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Score Calculation:"),"\nEach challenge type has a unique calculator function. Calculates progress based on the provided data and challenge grade. Ensures progress does not exceed 1.0. Updates the user's score in Redis upon completion of the challenge."),(0,i.kt)("h2",{id:"openais-clip-integration-for-enhanced-image-text-alignment"},"OpenAI's CLIP Integration for Enhanced Image-Text Alignment:"),(0,i.kt)("p",null,"Integrating OpenAI's CLIP model enhances the bridge between textual prompts and visual content. This allow the application to provide more relevant images related to user queries, improving the user experience."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dynamic Image Processing: Images are categorized into groups like landmarks, restaurants, groceries, and pharmacies. When a textual prompt is entered, the system scans relevant image directories, ensuring specificity in results.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Intelligent Image Retrieval: Upon receiving a text input, the most fitting image in the database is identified and matched, optimizing search relevance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Optimized Routing with Visuals: When a route is requested, it's paired with associated images by correlating user queries with specific location categories, thus providing a comprehensive visual representation."))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In conclusion, the third iteration introduced a global feed and a challenge system to the application. These features facilitate social and exploratory dimensions, and the leaderboard system adds a competitive element, potentially increasing user engagement. Detailed data collection and application contribute to the functionality and future enhancement possibilities of the application. Efficient database design and a focus on data quality and integrity ensure the reliable operation of these new features, promoting a consistent and user-friendly experience."))}c.isMDXComponent=!0}}]);