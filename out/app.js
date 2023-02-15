"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var parseQuery = require("querystring");
var url_1 = require("url");
(0, http_1.createServer)(function (request, response) {
    console.log("server");
    if (request.method === "GET") {
        var urlRequest = (0, url_1.parse)(request.url, true);
        if (urlRequest.query.test === "5") {
            response.end("Они же все одинаковые, Наташ!!!");
        }
        else {
            response.end("good");
        }
    }
    else if (request.method === "POST") {
        var body_1 = "";
        request.on("data", function (chunk) {
            body_1 += chunk.toString();
        });
        request.on("end", function () {
            var params = parseQuery.parse(body_1);
            console.log(params.hi);
            response.end("ok");
        });
    }
}).listen(3000);
//# sourceMappingURL=app.js.map