window.onload = function(){
    var mymap = document.getElementById('map');
    var latlng = new google.maps.LatLng(37.4979106,127.0275114);
    var gmap = new google.maps.Map(
        mymap, {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    // ICON pointer
    var marker = new google.maps.Marker({
        position: latlng,
        map: gmap,
        title:'강남역'
    });
    google.maps.event.addListener(marker, 'click', function(event){
        alert('강남역');
    });
};
