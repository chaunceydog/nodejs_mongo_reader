'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "reader-secret",

  // Control debug level for modules using visionmedia/debug
  DEBUG: "http*,socket.io:socket",

  // july 13, 2016 - bjb
  NODE_ENV: "development",
  STORMPATH_CLIENT_APIKEY_ID="1OL2E4HSM53W95A7SND8Q9OVG",
  STORMPATH_CLIENT_APIKEY_SECRET: "WbVLrkoDRxmXt8Ut4qngQJmFBuILAIvWn2Riotu5tv4",
  STORMPATH_APPLICATION_HREF="https://api.stormpath.com/v1/applications/5G1pskhg4GYavARHA375CR"
};
