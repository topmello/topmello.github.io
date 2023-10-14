"use strict";(self.webpackChunksettle_aid=self.webpackChunksettle_aid||[]).push([[7396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="DevOps - CI/CD \ud83d\ude80",l={unversionedId:"deployment/devops",id:"deployment/devops",title:"DevOps - CI/CD \ud83d\ude80",description:"Main Application Dockerfile",source:"@site/docs/deployment/devops.md",sourceDirName:"deployment",slug:"/deployment/devops",permalink:"/docs/deployment/devops",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment Introduction",permalink:"/docs/deployment/introduction"},next:{title:"Frontend Build",permalink:"/docs/deployment/frontend-build"}},s={},p=[{value:"Main Application Dockerfile",id:"main-application-dockerfile",level:2},{value:"Dockerfile.db",id:"dockerfiledb",level:2},{value:"Docker Compose Overview",id:"docker-compose-overview",level:2},{value:"Services:",id:"services",level:3},{value:"GitHub Actions Workflows",id:"github-actions-workflows",level:2},{value:"Python Application Test with Docker",id:"python-application-test-with-docker",level:3},{value:"Build and Push Images - Dockerhub",id:"build-and-push-images---dockerhub",level:3},{value:"Setting up GCP Compute Instance",id:"setting-up-gcp-compute-instance",level:2},{value:"Deploying on GCP",id:"deploying-on-gcp",level:2},{value:"Actions for Developers:",id:"actions-for-developers",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"devops---cicd-"},"DevOps - CI/CD \ud83d\ude80"),(0,o.kt)("h2",{id:"main-application-dockerfile"},"Main Application Dockerfile"),(0,o.kt)("p",null,"The main Dockerfile is structured to set up the environment for the Python application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Base Image: Starts from the official Python image python:3.9.17-bullseye."),(0,o.kt)("li",{parentName:"ul"},"Non-root User: A non-root user named myuser is created for better security."),(0,o.kt)("li",{parentName:"ul"},"Working Directory: Sets /usr/src/app as the working directory inside the container."),(0,o.kt)("li",{parentName:"ul"},"Requirements Installation:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Copies the requirements.txt file to the container."),(0,o.kt)("li",{parentName:"ol"},"Installs the Python packages listed in requirements.txt using pip."))),(0,o.kt)("li",{parentName:"ul"},"Codebase Copy: All application code is then copied to the container's working directory."),(0,o.kt)("li",{parentName:"ul"},"File Ownership & Directories:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Changes the ownership of the working directory to myuser."),(0,o.kt)("li",{parentName:"ol"},"Ensures certain special directories exist and are owned by myuser, such as .pytest_cache and the torch cache for sentence transformers."))),(0,o.kt)("li",{parentName:"ul"},"Default User: Switches to myuser so all commands run in the container will be executed as this user."),(0,o.kt)("li",{parentName:"ul"},"Default Command: The default command starts the application using uvicorn with the appropriate parameters.")),(0,o.kt)("h2",{id:"dockerfiledb"},"Dockerfile.db"),(0,o.kt)("p",null,"This Dockerfile is tailored for the PostgreSQL setup with vector extensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Base Image: Uses ankane/pgvector as the base, specialized for vector operations in PostgreSQL."),(0,o.kt)("li",{parentName:"ul"},"PostGIS Extension: PostGIS, a spatial database extension for PostgreSQL, is installed to enable geographical functionalities."),(0,o.kt)("li",{parentName:"ul"},"Default Command: Specifies the default command to start PostgreSQL.")),(0,o.kt)("p",null,"The custom image registries are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/topmello/settle-aid-backend/pkgs/container/settle-aid-backend"},"settle-aid-backend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/topmello/settle-aid-backend/pkgs/container/postgres-vec-geo"},"postgres-vec-geo"))),(0,o.kt)("h2",{id:"docker-compose-overview"},"Docker Compose Overview"),(0,o.kt)("h3",{id:"services"},"Services:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"db (PostgreSQL)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker Image: gchr.io/topmello/postgres-vec-geo:latest"),(0,o.kt)("li",{parentName:"ul"},"Purpose: Used for our main application database."),(0,o.kt)("li",{parentName:"ul"},"Credentials:"),(0,o.kt)("li",{parentName:"ul"},"Database: database"),(0,o.kt)("li",{parentName:"ul"},"User: db_user"),(0,o.kt)("li",{parentName:"ul"},"Password: password1234"),(0,o.kt)("li",{parentName:"ul"},"Storage: A volume named database_volume persists the database data.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"redis")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker Image: redis:latest"),(0,o.kt)("li",{parentName:"ul"},"Purpose: Redis server for caching and other in-memory tasks."),(0,o.kt)("li",{parentName:"ul"},"Password: topmelloredis"),(0,o.kt)("li",{parentName:"ul"},"Storage: A volume named redis_volume is used to persist the Redis data.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"backend")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker Image: gchr.io/topmello/settle-aid-backend:latest"),(0,o.kt)("li",{parentName:"ul"},"Purpose: Main application."),(0,o.kt)("li",{parentName:"ul"},"Port Mapping: Host's 8000 is mapped to container's 8000."),(0,o.kt)("li",{parentName:"ul"},"Dependencies: Relies on db and redis services to be running."),(0,o.kt)("li",{parentName:"ul"},"Credentials & Config: The environment section contains credentials and configurations.")),(0,o.kt)("h2",{id:"github-actions-workflows"},"GitHub Actions Workflows"),(0,o.kt)("h3",{id:"python-application-test-with-docker"},"Python Application Test with Docker"),(0,o.kt)("p",null,"This workflow is triggered whenever there's a push to our main branch. It:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Checks out repository."),(0,o.kt)("li",{parentName:"ol"},"Builds and starts Docker Compose services using the dev configuration."),(0,o.kt)("li",{parentName:"ol"},"Runs pytest within backend service."),(0,o.kt)("li",{parentName:"ol"},"Shuts down and removes the containers afterward.")),(0,o.kt)("h3",{id:"build-and-push-images---dockerhub"},"Build and Push Images - Dockerhub"),(0,o.kt)("p",null,"Activated either manually or when there's a push to the deploy branch. The steps include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Checking out repository."),(0,o.kt)("li",{parentName:"ol"},"Setting up QEMU & Docker Buildx."),(0,o.kt)("li",{parentName:"ol"},"Logging into Docker Hub using saved credentials."),(0,o.kt)("li",{parentName:"ol"},"Building Docker images from Dockerfiles (Dockerfile.db & Dockerfile.backend)."),(0,o.kt)("li",{parentName:"ol"},"Pushing these images to Docker Hub.")),(0,o.kt)("h2",{id:"setting-up-gcp-compute-instance"},"Setting up GCP Compute Instance"),(0,o.kt)("p",null,"Before deploying on GCP, ensure the VM instance ready. To set up a VM instance:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the GCP Console at ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"https://console.cloud.google.com/"),"."),(0,o.kt)("li",{parentName:"ol"},"Navigate to the Compute Engine and then VM Instances."),(0,o.kt)("li",{parentName:"ol"},'Click on "Create Instance."'),(0,o.kt)("li",{parentName:"ol"},"Fill out the necessary details like Name, Region, Zone, Machine type, etc."),(0,o.kt)("li",{parentName:"ol"},"In the Boot Disk section, select an Ubuntu as OS."),(0,o.kt)("li",{parentName:"ol"},"Under the Firewall settings, make sure to allow HTTP and HTTPS traffic if your application needs to be accessed over the internet."),(0,o.kt)("li",{parentName:"ol"},'Once filled out, click "Create" to instantiate your VM.'),(0,o.kt)("li",{parentName:"ol"},"SSH into the instance and install Docker and Docker Compose. The instructions can be found here: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/"},"https://docs.docker.com/engine/install/ubuntu/")),(0,o.kt)("li",{parentName:"ol"},"Install VIM using ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt install vim"),". (Optional)")),(0,o.kt)("h2",{id:"deploying-on-gcp"},"Deploying on GCP"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"SSH into GCP Instance:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute ssh <instance-name> --zone <zone>\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change directory: ",(0,o.kt)("inlineCode",{parentName:"p"},"cd ..")," (Optional)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx.conf")," is exist in the directory. And, the domain DNS has been point to the backend virtual machine external IP address. For the first time configuration files for production are needed to be created as below. Noted that the keys and domain name needed to be changed according to the new production environment. Note: The configuration files can be found in the repository. (",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.prod.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx-conf-sse-sio"),")"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Pull the Latest Docker Compose Configuration: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker-compose pull\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Start the Containers: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker-compose -p settle-aid up -d\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The -p flag is to set a project name, which can be useful for running multiple environments on the same host"),(0,o.kt)("li",{parentName:"ul"},"The -d flag is to run the containers in the background")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"For the first time, run the migration script: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker exec -it backend alembic upgrade head\n\nsudo docker exec -it backend python -m scripts.insert_data\n")),(0,o.kt)("h2",{id:"actions-for-developers"},"Actions for Developers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modifications: If there are modifications or additions to packages, update requirements.txt so the Docker build process incorporates these changes."),(0,o.kt)("li",{parentName:"ul"},"GitHub Workflows: The Python application test runs on pushes to the main branch, and the Dockerhub build and push are triggered either manually or when pushing to the deploy branch.")))}d.isMDXComponent=!0}}]);