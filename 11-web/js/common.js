//map
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


//menu
$(document).ready(function(){
    // $('#header .lnb').hide();
    // $('.btn_nav').click(function(){
    //     $('#header .lnb').slideToggle(500); 메뉴가 위에서 내려오게 하는 동작
    // });
    $('#header .lnb')
         .css({
            left : '-100%',
        opacity : 0
         });
    $('.btn_nav').click(function(){
        if($('#header .lnb').hasClass('active')) {
            $('#header .lnb').animate({
                left : '-100%',
             opacity : '0'
            }).removeClass('active'); //버튼을 누르면 옆으로 사라졌다가
        } else {
            $('#header .lnb').animate({
                left : '0',
             opacity : '1'
            }).addClass('active'); //버튼을 누르면 옆에서 다시 나타나게 하는 동작
        }   
    });
});