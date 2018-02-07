var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

for(var i = 1; i<= 35; i++){
  request("https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-"+i, function(error, response, body) {
    if(error) {
      console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);

    $('.poi-card-link').each(function() {
       var link = $(this);
       var text = $(this).find('.poi_card-display-title').text();
       var href = link.attr('href');

       console.log(text + " -> " + "https://restaurant.michelin.fr" +href);
     });
  });
}
