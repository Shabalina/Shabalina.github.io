
      function initMap() {
        var uluru = {lat: 59.945, lng: 30.264};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: uluru
        });
		
		
		setMarkers(map);
	  }  
	 
		
		var burgerMarker = [
		['Petrogradka', 59.977, 30.319, 1],
		['Smolnaya_nab', 59.951, 30.386, 2],
		['Kudrovo', 59.917, 30.491, 3],
		['Moskovskie_vorota', 59.893, 30.314, 4],
		];
	
	function setMarkers(myMap){
		
		console.log('here')
		var markerImage = {
		url: '../img/content/map-marker.png',
	//	url: 'map-marker.png',
		// This marker is 20 pixels wide by 32 pixels high.
		size: new google.maps.Size(20, 32),
		// The origin for this image is (0, 0).
	//	origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at (0, 32).
	//	anchor: new google.maps.Point(0, 32)
		};	
	  
	  var shape = {
		coords: [1, 1, 1, 20, 18, 20, 18, 1],
		type: 'poly'
	  };
	  
	  
	  for (var i = 0; i < burgerMarker.length; i++) {
		var burger = burgerMarker[i];
		var marker = new google.maps.Marker({
		  position: {lat: burger[1], lng: burger[2]},
		  map: myMap,
		  icon: markerImage,
		  shape: shape,
		  title: burger[0],
		  zIndex: burger[3]
		});
	}
}
		
      