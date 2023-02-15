import { readFileSync, writeFileSync, statSync } from "fs";
import { extname, dirname } from "path";
import { createServer } from "http";
const parseQuery = require("querystring");
import { parse } from "url";

createServer((request, response) => {
	console.log("server");
	if (request.method === "GET") {
		const urlRequest = parse(request.url, true);
		if (urlRequest.query.test === "5") {
			response.end("Они же все одинаковые, Наташ!!!");
		} else {
			response.end("good");
		}
	} else if (request.method === "POST") {
		let body = "";
		request.on("data", (chunk) => {
			body += chunk.toString();
		});
		request.on("end", () => {
			const params = parseQuery.parse(body);
			console.log(params.hi);
			response.end("ok");
		});
	}
}).listen(3000);
