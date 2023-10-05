
# Frontend Build
- Official Doc: https://docs.expo.dev/build-reference/apk/

## Login:

```bash
expo login
```
> If console throw "verify that the path is correct and try again" when using the commands, add "npx" before each command except "npm" one would help.  

## Install EAS Cli:
Run the following command to install EAS Cli.
```bash
npm install --global eas-cli
```
## Link the code base to project:
Make sure the project ID is correct and accessible which can be check in the Expo Dashboard.
```bash
eas init --id 714abc65-7237-4be7-8349-feffeae9f93d
```
## Build:
Run the following command to build the app in expo server.
```bash
eas build -p android --profile preview
```


## Connect frontend to the backend and APIs
In order to connect the frontend to the backend server, environment variables need to be set up. The following steps are for setting up the environment variables in the frontend.

1. Check for URL or IP address of the backend server and the port number. The default port number is 8000. This depends on whether it is development or production environment. Typically, the development environment is localhost:8000 and the production environment is the IP address of the server with port 8000. With HTTPS enabled, the production environment URL is the domain name of the server.
2. In the frontend, navigate to eas.json and make sure the `EXPO_PUBLIC_API_URL` is the backend server URL. For example, `https://api.settle-aid.tech`.
### For third party APIs

#### Google Places API key
1. Config EXPO_PUBLIC_GOOGLE_PLACES_API_KEY in root directory .env file as your api key from [Google Cloud](https://developers.google.com/maps/documentation/places/web-service/get-api-key/)
2. If you want a ready to build api config, you also need to add this api key to
   * eas.json, under build.\[environment name\].EXPO_GOOGLE_PLACES_API_KEY
   * app.json, under expo.android.config.googleMaps.apiKey
