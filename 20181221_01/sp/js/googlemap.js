// google map api

var map;
var marker = [];
var infoWindow = [];
var markers= [
  {
    name : '東京藝術大学 横浜校地 元町中華街校舎',
    lat : 35.440615, 
    lng : 139.646334
  }
];

function initMap(){
  var mapLatLng;
  var centerLatLng = new google.maps.LatLng( {lat:35.440615,lng:139.646334});

  //create new map
  map = new google.maps.Map(document.getElementById('access_map'),{
    center: centerLatLng,
    scrollwheel: false,
    zoom: 14.5,
    mapTypeControl: false,
    streetViewControl: false
  });

  for(var i=0; i < markers.length; i++){

    //add a marker
    markerLatLng = new google.maps.LatLng({lat:markers[i]['lat'], lng:markers[i]['lng']});
    marker[i] = new google.maps.Marker({
      position : markerLatLng,
      map : map,
      title : markers[i]['name']
    });

    //add a window
    var contentString = '<div class="mapInfo">'+markers[i]['name']+'</div>';
    infoWindow[i] = new google.maps.InfoWindow({
      content : contentString
    });
    infoWindow[i].open(map,marker[i]);

    //add listener
    markerEvent(i);
  }

  function markerEvent(i){
    marker[i].addListener('click', function(){
      infoWindow[i].open(map,marker[i]);
      console.log('clicked');
    });
  }


}