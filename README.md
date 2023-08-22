# Settle Aid Documents

G'day, mates from Top Mello team. Here's our development documentation respository to standardize our tech stack, share our knowledge and keep an consistency across the project. Documenting tech manual, your thoughts and decisions you made here.  
  
[Link To TopMello Documentation](https://topmello.github.io/)
## Quick Start
### How to write docs
Use the following link to learn about writting docs, tags them and organize directories:   
[How to Create Doc - Docusaurus](https://docusaurus.io/docs/create-doc)  
  
***Remember to PUSH the changes to Github too after writing***

### How to organize docs
to be continued...

### To Deploy
Follow the steps in [Contribute Manual](#contribute-manual) which are:
* Installation
* Local Development (for develop and test)
* Deployment (to Github pages)

## <a name="contribute-manual"></a>Contribute Manual
We use [Docusaurus](https://docusaurus.io) to generate our documentations written in [Markdown](https://www.markdownguide.org/basic-syntax/) format.  
This requires you to install [Node.js](https://nodejs.org/en) version 16 and newer.  
  
After installing Node.js Version 16+, execute the following code within the root directory of the project.  
> Do NOT include leading "$" when executing the following commands
### Installation

```
$ npm install
```

### Local Development
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```
$ npm run start
```

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```
Now you should see changes in [topmello.github.io](https://topmello.github.io/)