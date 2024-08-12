//Set Map
function initialize() {
  var mapOptions = {
    zoom: 10,
    // Initial center cordinates on start(NewYork)
    center: new google.maps.LatLng(40.7128, -74.006),
    // Type fp map (ROADMAP, SATELITE, HYBRID, TERRAIN)
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    //Minimiun zoom of map
    miniZoom: 2,
  };
  //Create a new map instance using provideal options
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //Create an info window to dispĺay location info
  var infoWindow = new google.maps.infoWindow();

  //Cretae a maker for exmaple : Iran, Zarjan
  var marker = new google.maps.Marker({
    //Cordinates for Iran, Zarjan
    position: new google.maps.LatLng(36.6769, 48.4963),
    //Attach the marker
    map: map,
    //Toaltip'on hover
    title: "Iran, Zarjan",
  });

  //Add click event listener for marker
  marker.addListener("click", function () {
    infoWindow.setContent(marker.title);
    infoWindow.open(map, marker);
  });

  //Adjust map center when the window is resized
  google.maps.event.addDomListener(window, "resize", function () {
    map.setCenter(mapOptions.center);
  });
}
//Initialize the map when window loading finished
google.maps.event.addDomListener(window, "load", initialize);
