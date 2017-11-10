exports.data = function (request, response) {
    const apiData = require('../model/geoApi.js')("https://maps.googleapis.com/maps/api/geocode/json?address=Orlando");
    apiData.then((data) => {
        endApiController(data, response)
    })

    function endApiController(pageData, renderResponse) {

        renderResponse.pageInfo = {};
        renderResponse.pageInfo.title = 'api page';
        renderResponse.pageInfo.pageData = pageData.results[0].formatted_address;
        renderResponse.render('api/Api', renderResponse.pageInfo);
    }

};