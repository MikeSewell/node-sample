module.exports = function (url) {

    let newPromise = new Promise((resolve, reject) => {

        let pageDataTest = ""
        const https = require("https");
        const dataStore = {};

        https.get(url, res => {

            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                body = JSON.parse(body);
                resolve(body)
            });
        });
    })
    return newPromise
}