// Google Maps Integration custom scripted to enable Bootstrap Tooltips

function initMap() {
  var la = {lat: 51.58583480065822, lng: 4.792840625876806};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    mapTypeControl: false,
    center: la

  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Gebouw LA</h1>'+
      '<div id="bodyContent">'+
      '<p>Lovensdijkstraat 61-63 <br>' +
      '4818 AJ Breda<br>'+
      '<a href="http://www.avans.nl/opleidingen/studeren-bij-avans/locaties-en-faciliteiten/lovensdijkstraat">www.avans.nl/.../locaties-en-faciliteiten</a></p>'+
      '</div>'+
      '</div>';


  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: la,
    map: map
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  infowindow.open(map,marker);
}