(function () {

  let platform = new H.service.Platform({
    'app_id':"ODGdDT8RMjZIW8ZfZWYg",
    'app_code':"4bCmwoGSXYmKVjGmNGX1og"
    });

  let maptypes = platform.createDefaultLayers();

  let map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.normal.map,
    {
      zoom: 8,
      center: { lng: 37.0958, lat: 55.8646 }
    });

  window.addEventListener('resize', () => map.getViewPort().resize())

  let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  let ui = H.ui.UI.createDefault(map, maptypes)
 
  let service = platform.getPlatformDataService()

  let buttonClick = evt => {
    document.querySelector("button").addEventListener('click', async evt => {
      let signature_url = "http://signature.venue.maps.api.here.com/venues/signature/v1?app_id=ODGdDT8RMjZIW8ZfZWYg&app_code=4bCmwoGSXYmKVjGmNGX1og"
      
      let response = await fetch(signature_url)
      let signature = await response.json()

      let model_full_response = await fetch(`http://static-3.venue.maps.api.here.com/1/models-full/${evt.target.id}.json${signature.SignedQueryString}`)
      let model_full = await model_full_response.json()
      
      alert(JSON.stringify(model_full))
    })
  }

  let onMarkerClick = e => {
    // Get position of the "clicked" marker
    let position = e.target.getGeometry()
      // Get the data associated with that marker
    let data = e.target.getData().getData()
    // debugger
      // Merge default template with the data and get HTML
      
    let bubble = onMarkerClick.bubble

    // For all markers create only one bubble, if not created yet
    if (!bubble) {
      bubble = new H.ui.InfoBubble(position, {
        content: `
          <div>${data["gml:id"]}</div>
          <br>
          <button style='width:100%' id=${data["gml:id"]}>Данные</button>`
      });
      ui.addBubble(bubble);
      // Cache the bubble object
      onMarkerClick.bubble = bubble;

      buttonClick()
        
    } else {
      // Reuse existing bubble object
      bubble.setPosition(position);
      bubble.setContent(`<div>${data["gml:id"]}</div><br><button style='width:100%' id=${data["gml:id"]}>Войти</button>`);
      bubble.open()

      buttonClick()
    }

    // Move map's center to a clicked marker
    map.setCenter(position, true);
  }

  async  function getVenueIndexes () {
    let signature_url = "http://signature.venue.maps.api.here.com/venues/signature/v1?app_id=ODGdDT8RMjZIW8ZfZWYg&app_code=4bCmwoGSXYmKVjGmNGX1og"
    
    let response = await fetch(signature_url)
    let signature = await response.json()

    let venue_indexes_response = await fetch(`http://static-3.venue.maps.api.here.com/1/models-full/index_bb.json${signature.SignedQueryString}`)
    let venue_indexes = await venue_indexes_response.json()

    let dataPoints = venue_indexes.map(item => {
      let north_west = item.bb[0]
      let south_east = item.bb[1]

      let boundingBox = new H.geo.Rect(north_west[0], north_west[1], south_east[0], south_east[1])
      
      let point = new H.clustering.DataPoint(boundingBox.getCenter().lat, boundingBox.getCenter().lng, null, item)

      return point
    });

    let clusteredDataProvider = new H.clustering.Provider(dataPoints, {
      clusteringOptions: {
        eps: 32,
        minWeight: 2
      }
    })

    clusteredDataProvider.addEventListener('tap', onMarkerClick);

    let clusteringLayer = new H.map.layer.ObjectLayer(clusteredDataProvider);

    map.addLayer(clusteringLayer);

  }

  getVenueIndexes()
  
}())