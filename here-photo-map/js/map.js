function startClustering(map, ui, data) {
    var dataPoints = data.map(function(item) {
      return new H.clustering.DataPoint(item.latitude, item.longitude, null, item);
    })
  
    var clusteredDataProvider = new H.clustering.Provider(dataPoints, {
      clusteringOptions: {
        eps: 64,
        minWeight: 3
      },
      theme: CUSTOM_THEME
    });
 
    var layer = new H.map.layer.ObjectLayer(clusteredDataProvider);
  
    map.addLayer(layer);
  }
  

  var CUSTOM_THEME = {
    getClusterPresentation: function(cluster) {

      var randomDataPoint = getRandomDataPoint(cluster),
        data = randomDataPoint.getData();
  
      var clusterMarker = new H.map.Marker(cluster.getPosition(), {
        icon: new H.map.Icon(data.url, {
          size: {w: data.width, h: data.height},
          anchor: {x: 25, y: 25}
        }),
  
        min: cluster.getMinZoom(),
        max: cluster.getMaxZoom()
      });
  
      clusterMarker.setData(data);
  
      return clusterMarker;
    },
    getNoisePresentation: function (noisePoint) {

      var data = noisePoint.getData(),

        noiseMarker = new H.map.Marker(noisePoint.getPosition(), {

          min: noisePoint.getMinZoom(),
          icon: new H.map.Icon(data.url, {
            size: {w: data.width, h: data.height},
            anchor: {x: 10, y: 10}
          })
        });
  
      noiseMarker.setData(data);
  
      return noiseMarker;
    }
  };
  
  
  /**
   * Boilerplate map initialization code starts below:
   */
  // Helper function for getting a random point from a cluster object
  function getRandomDataPoint(cluster) {
    var dataPoints = [];

    cluster.forEachDataPoint(dataPoints.push.bind(dataPoints));
  
    return dataPoints[Math.random() * dataPoints.length | 0];
  }
  

var platform = new H.service.Platform({
    apikey: "RliX7Bx5RRCG-L2Lu0a5ktiAkc9qkbY2rXysdif3pdo"
})

var defaultLayers = platform.createDefaultLayers();

defaultLayers.vector.normal.map.setMin(5)
var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
    center: new H.geo.Point(54.18852516, 37.59005095),
    zoom: 5,
    pixelRatio: window.devicePixelRatio || 1
});


window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers);

var bounds = new H.geo.Rect(65.14611484756372, 6.328125, 37.78808138412046, 69.345703125);

  map.getViewModel().addEventListener('sync', function() {
    var center = map.getCenter();

    if (!bounds.containsPoint(center)) {
      if (center.lat > bounds.getTop()) {
        center.lat = bounds.getTop();
      } else if (center.lat < bounds.getBottom()) {
        center.lat = bounds.getBottom();
      }
      if (center.lng < bounds.getLeft()) {
        center.lng = bounds.getLeft();
      } else if (center.lng > bounds.getRight()) {
        center.lng = bounds.getRight();
      }
      map.setCenter(center);
    }
  });


startClustering(map, ui, photos)
  