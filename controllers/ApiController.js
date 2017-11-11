exports.data = function (request, response) {
    const apiData = require('../model/geoApi.js')("https://maps.googleapis.com/maps/api/geocode/json?address=Orlando");
    apiData.then((data) => {
        endApiController(data, response)
    })

    function endApiController(pageData, renderResponse) {
        // console.log(pageData.results[0]);
        

        renderResponse.pageInfo = {};
        renderResponse.pageInfo.title = 'api page';
        renderResponse.pageInfo.city = pageData.results[0].formatted_address;
        renderResponse.pageInfo.lat = pageData.results[0].geometry.location.lat;
        renderResponse.pageInfo.lng = pageData.results[0].geometry.location.lng;
        renderResponse.render('api/Api', renderResponse.pageInfo);
    }

};