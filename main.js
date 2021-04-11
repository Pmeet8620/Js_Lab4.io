function initMap() {
  const myLatLng = {lat: 21.170240, lng: 72.831062};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,

    //Popping up the map with this First Location
    center: { lat: 21.170240, lng: 72.831062 }
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    //Naming the place
    title: "Surat GUJ",
  });

  function addMarker(cordinates){
    var mark = new google.maps.Marker(
    {
      position: cordinates,
      map: map,
    });
  }

  //Upto 5 markers have been added to map
  addMarker({ lat: 19.076090, lng: 72.877426 });
  addMarker({ lat: 41.904755, lng: 12.454628 });
  addMarker({ lat: 13.736717, lng: 100.523186 });
  addMarker({ lat: -33.865143, lng: 151.209900 });
  addMarker({ lat: 40.440624, lng: -79.995888 });
}