#!/bin/bash
#
# .bash_profile for user root
#
# if [ "$JAVA_HOME" = "" ]
# then
#     JAVA_HOME="/usr/jdk/jdk1.7.0_60"
#     export JAVA_HOME
# fi
#
#
# if [ "$DISPLAY" = "" ]
# then
#     DISPLAY=":0.0"
#     export DISPLAY
# fi
#
#
if [ "$STORMPATH_CLIENT_APIKEY_ID" = "" ]
then
    STORMPATH_CLIENT_APIKEY_ID="1OL2E4HSM53W95A7SND8Q9OVG"
    export STORMPATH_CLIENT_APIKEY_ID
fi
#
if [ "$STORMPATH_CLIENT_APIKEY_SECRET" = "" ]
then
    STORMPATH_CLIENT_APIKEY_SECRET="WbVLrkoDRxmXt8Ut4qngQJmFBuILAIvWn2Riotu5tv4"
    export STORMPATH_CLIENT_APIKEY_SECRET
fi
#
if [ "$STORMPATH_APPLICATION_HREF" = "" ]
then
    STORMPATH_APPLICATION_HREF="https://api.stormpath.com/v1/applications/5G1pskhg4GYavARHA375CR"
    export STORMPATH_APPLICATION_HREF
fi
#
if [ "$JASMINE" = "" ]
then
    JASMINE="/c/nodejs/mongo-reader2/server/node_modules/.bin/jasmine-node"
    export JASMINE
fi
#
if [ "$NODE_ENV" = "" ]
then
    export NODE_ENV=development
fi
#
# if [ "$CATALINA_HOME" = "" ]
# then
#     CATALINA_HOME="/var/tomcat7_0-62/apache-tomcat-7.0.62"
#     export CATALINA_HOME
# fi
#
#
# if [ "$CATALINA_PID" = "" ]
# then
#     CATALINA_PID="/var/tomcat7_0-62/apache-tomcat-7.0.62"
#     export CATALINA_PID
# fi
#
#
# if [ "$SASL_PATH" = "" ]
# then
#     SASL_PATH="/usr/lib/sasl/amd64"
#     export SASL_PATH
# fi
#
#
