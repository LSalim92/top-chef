var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

function scrapMichelin() {
  var list_restaurant = [];
  for(var i = 1; i<= 35; i++){
    request("https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-"+i, function(error, response, body) {
      if(error) {
        console.log("Error: " + error);
      }
      //console.log("Status code: " + response.statusCode);

      var $ = cheerio.load(body);

      $('.poi-card-link').each(function() {
         var link = $(this);
         var name_restaurant = $(this).find('.poi_card-display-title').text();
         var href_restaurant = link.attr('href');

         var restaurant = {
           name: name_restaurant,
           href: "https://restaurant.michelin.fr" +href_restaurant
         }

         console.log(restaurant.name + " -> " + restaurant.href);

         list_restaurant.push(restaurant);
         console.log("list_restaurant.length = " + list_restaurant.length);
       });
    });
  }
  return list_restaurant;
}

var list = scrapMichelin();
