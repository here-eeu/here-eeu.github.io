// Step 1: initialize communication with the platform
let platform = new H.service.Platform({apikey: "OduDuH37mJSSaA5yJwF_zUJJcpTZNMaNMZr_6tguUqk"})
let defaultLayers = platform.createDefaultLayers()
// Step 2: initialize a map.
let mapType = defaultLayers.vector.normal.map
let map = new H.Map(document.getElementById('map'), mapType)
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize())
map.setCenter({lat: 25.1, lng: 55.3})
map.setZoom(12)
// Step 3: make the map interactive
// MapEvents enables the event system, Behavior implements default interactions for pan/zoom (also on mobile touch environments)
let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map))
// Create the default UI components
let ui = H.ui.UI.createDefault(map, defaultLayers)

