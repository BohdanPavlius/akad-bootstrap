//=require jquery.min.js

// to inlude plugins add "=" sign below
//=require bootstrap.min.js
//=require slick.min.js 

;(function($){
	$(document).ready(function(){
		$('#testimonial_carousel_indicator').carousel({interval: 0})
	});

	$(window).on('load', function(){

		(function initMap(){
        var your_location = {lat: 51.5448013, lng: 0.05575969999995323};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: your_location,
          disableDefaultUI: true,
          styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#cfcfcf"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
        });
        var marker = new google.maps.Marker({
          position: your_location,
          map: map,
          icon: 'img/marker.png'
        });
      })();
	});

})(jQuery);