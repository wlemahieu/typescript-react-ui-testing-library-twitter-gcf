# Typescript React Hooks App (CRA) 
###### Communicates with a Twitter API GCF in order to manage Tweets

### Cloud Account Prerequisites:
- [Google Cloud Console account](https://console.cloud.google.com)
- [2nd-gen Cloud Function](https://cloud.google.com/functions/docs/2nd-gen/console-quickstart)
- [Cloud Run API enabled](https://console.cloud.google.com/marketplace/product/google/run.googleapis.com)

### General Knowledge Prerequisites:
- [Google Cloud IAM privileges & roles](https://cloud.google.com/iam/docs/understanding-roles)
- [Google Cloud Service Accounts](https://cloud.google.com/run/docs/configuring/service-accounts?hl=en)
- [Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/deploy-container)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Twitter API](https://developer.twitter.com/en/docs/twitter-api)
- [Twitter API SDK](https://www.npmjs.com/package/twitter-api-sdk)
- [Axios](https://axios-http.com/docs/intro)
- [Axios Hooks](https://www.npmjs.com/package/axios-hooks)

### Local Tool Recommendations:
- [VSCode](https://code.visualstudio.com/)
- [NPX](https://www.npmjs.com/package/npx) (npm install -g npx)
- [NVM](https://github.com/nvm-sh/nvm) (or a similar node manager)

#### To test a GCF locally:

1. **nvm use 16** - Switch to Node 16 (nvm install 16.5.1 if not installed)
2. **npm install** - Install all node_modules for the React app
3. **npm start** - Serve the React app locally
4. **http://localhost:3000/** - Visit the locally served React app

##### Other GCFs
In order to use this example React app, you'll want to setup the **typescript-twitter-api-google-cloud-function** repository and run it in parallel.