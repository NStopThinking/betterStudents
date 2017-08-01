
    var map = new AMap.Map('container',{
            resizeEnable: true,
            zoom: 14,
            center: [116.395946,39.993427]
    });
    var marker = new AMap.Marker({
            position: [116.395946,39.993427]
    });
    marker.setMap(map);
    marker.on('click',function(e){
      infowindow.open(map,e.target.getPosition());
    })
    AMap.plugin('AMap.AdvancedInfoWindow',function(){
       infowindow = new AMap.AdvancedInfoWindow({
        
        offset: new AMap.Pixel(0, -30)
      });
      infowindow.open(map,[116.395946,39.993427]);
    })
