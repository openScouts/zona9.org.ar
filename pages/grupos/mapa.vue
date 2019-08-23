<template>
  <mdb-google-map
    name="custom"
    class="col-md-12"
    style=" height: 500px"
    :zoom="14"
    :styles="styles"
    :markerCoordinates="[{
      latitude: 40.725118,
      longitude: -73.997699,
      title: 'New York'
    }]">
  </mdb-google-map>
</template>



<script>
  import { mdbmdbGoogleMap } from 'mdbvue';
  export default {
    name:'mdbGoogleMapsPage',
    components: {
      mdbGoogleMap
    },
    data() {
      return {
        styles: [
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [{
            "visibility": "on"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "on"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
            "color": "#5f94ff"
          },
          {
            "lightness": 26
          },
          {
            "gamma": 5.86
          }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "weight": 0.6
          },
          {
            "saturation": -85
          },
          {
            "lightness": 61
          }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "hue": "#0066ff"
          },
          {
            "saturation": 74
          },
          {
            "lightness": 100
          }
          ]
        }
        ]
      };
    }
  }
</script>