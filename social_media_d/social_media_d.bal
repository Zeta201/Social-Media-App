import ballerina/http;
import ballerina/log;

configurable string sentiment_api_uri = ?;
http:Client sentimentEndpoint = check new (sentiment_api_uri);

@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://localhost:3000"],
        allowCredentials: true,
        // allowHeaders: ["*"],
        allowMethods: ["*"]
    }
}

service /social on new http:Listener(9090) {
    public function init() returns error? {
        log:printInfo("Social Media Service Started...");
    }

    resource function get greet() returns string|error {
        return "hello there";
    }
    resource function get sentiment/[string desc]() returns Sentiment|error {

        Sentiment sentiment = check sentimentEndpoint->/api/sentiment.post(desc);
        return sentiment;

    }
}

type Probability record {
    decimal neg;
    decimal neutral;
    decimal pos;
};

type Sentiment record {
    Probability probability;
    string label;
};
