// import express, we'll need to set up some http routes. bodyParser is for handling JSON
import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import path from 'path'
import apiRoutes from './api-routes'

// import web-push to help set up Push notifications
import webPush from 'web-push';

// create the express server and create an object to store subscriptions
var app = express();

//express configurations
app.set('port', process.env.PORT || 3000);
app.set('subscriptions', {});
app.use(bodyParser.json());


// these VAPID keys are for validating connections
const vapidKeys = webPush.generateVAPIDKeys();
process.env.VAPID_PUBLIC_KEY = vapidKeys.publicKey;
process.env.VAPID_PRIVATE_KEY = vapidKeys.privateKey;

// add the VAPID keys to web push
webPush.setVapidDetails(
    'http://web.docker.localhost/',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );

app.get('/', async (req, resp, next) => {
    const getApiVersion = resq => {
      fs.readFile(path.resolve(__dirname, './package.json'), (err, data) => {
        if (err) throw err;
        const packageJson = JSON.parse(data.toString());
        const { version } = packageJson;
        resp.status(200).send(`Api Version - ${version}`);
      });
    };
    getApiVersion(resp);
  });

app.use('/api', apiRoutes);

export { webPush as webPush }

export default app;