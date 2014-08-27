'use strict';

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 17,

    scrollwheel: false,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(-26.356684,28.363738), // ASE Tsakani, RSA

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{
        featureType:'water',
        stylers:[{color:'#1c2f4d'},
        {visibility:'on'}]
      },{
        featureType:'landscape',
        stylers:[{color:'#f2f2f2'}]
      },{
        featureType:'road',
        stylers:[{saturation:-100},{lightness:45}]
      },{
        featureType:'road.highway',
        stylers:[{visibility:'simplified'}]
      },{
        featureType:'road.arterial',
        elementType:'labels.icon',
        stylers:[{visibility:'off'}]
      },{
        featureType:'administrative',
        elementType:'labels.text.fill',
        stylers:[{color:'#444444'}]
      },{
        featureType:'transit',
        stylers:[{visibility:'off'}]
      },{
        featureType:'poi',
        stylers:[{visibility:'off'}]
      }]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  var marker = new google.maps.Marker({
    position: mapOptions.center,
    map: map,
  });

  var contentString = '<div id="content" class="annimation fadeIn">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">African School for Excellence</h4>'+
      '<div id="bodyContent">'+
      '<p><i class="fa fa-car"></i> <a href="http://goo.gl/xlmBfn" target="_blank">'+
      'Get directions</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}
