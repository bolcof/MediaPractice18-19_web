// google map api

var map;
var marker = [];
var infoWindow = [];
var markers= [
	{
		name : '東京藝術大学 横浜校地 元町中華街校舎',
		lat : 35.440615, 
		lng : 139.646334
	},{
		name : '玄武門',
		lat : 35.444081,
		lng : 139.642195
	},{
		name : '延平門',
		lat : 35.441242, 
		lng : 139.642425
	},{
		name : '善隣門',
		lat : 35.443123, 
		lng : 139.644109
	},{
		name: '地久門',
		lat : 35.442064, 
		lng : 139.644390
	},{
		name: '関帝廟',
		lat : 35.442308, 
		lng : 139.645271
	},{
		name: '市場通り門',
		lat: 35.442402, 
		lng: 139.646397
	},{
		name: '朝陽門',
		lat: 35.444024, 
		lng: 139.647877
	},{
		name: '天長門',
		lat: 35.442542, 
		lng: 139.647812
	},{
		name: '媽祖廟',
		lat: 35.442117, 
		lng: 139.647597
	},{
		name: '朱雀門',
		lat: 35.441369, 
		lng: 139.648208
	}
];

function initMap(){
	var mapLatLng;
	// var centerLatLng = new google.maps.LatLng( {lat:35.440615,lng:139.646334}); // 校舎を中央にしたver 139.646900
	var centerLatLng = new google.maps.LatLng( {lat:35.440615,lng:139.646334});

  //create new map
  map = new google.maps.Map(document.getElementById('access_map'),{
    center: centerLatLng,
    scrollwheel: false,
    zoom: 15.5,	// 14.5
    mapTypeControl: false
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
    if (markers[i]['name'] == '東京藝術大学 横浜校地 元町中華街校舎'){
    		var contentString = '<font size="+2"><b><div class="mapInfo">'+markers[i]['name']+'</div></b></font>';
    } else {
    		var contentString = '<div class="mapInfo">'+markers[i]['name']+'</div>';
    }
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