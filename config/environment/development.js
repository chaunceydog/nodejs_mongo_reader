'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // Server IP
    ip: '127.0.0.1',

  // Server port
    port: '9000',

// MongoDB connection options
    mongo: {
        uri: 'mongodb://localhost:27017/reader_test'
    },

    sp: {
        STORMPATH_API_KEY_ID: '2XWKBCBT8JXO4PE4OFM6RLZIQ',
        STORMPATH_API_KEY_SECRET: 'WbVLrkoDRxmXt8Ut4qngQJmFBuILAIvWn2Riotu5tv4',
        STORMPATH_APP_HREF: 'https://api.stormpath.com/v1/applications/5G1pskhg4GYavARHA375CR'
    },

    test: {
        apiServer: 'localhost',
        apiServerPort: '9000',
        apiServerURI: 'http://localhost:9000/api/v1.0'
    },

    seedDB: true

};
