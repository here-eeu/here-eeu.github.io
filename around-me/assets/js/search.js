// search for map
let  APIKEY = "OduDuH37mJSSaA5yJwF_zUJJcpTZNMaNMZr_6tguUqk"

// create marker needed for the search function
let  marker1 = new H.map.Marker({lat: 25.1, lng: 55.3}) // need it for the search function

// by default, Paris...
let coordinates = "29.976480,31.131302";

// let's get HTML5 geolocation
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(position => {
coordinates = position.coords.latitude + "," + position.coords.longitude;
//document.getElementById("coords").innerHTML = "Location: " + coordinates;
});} 
else {
console.log("Geolocation is not supported by this browser.");}


$("#placeSearch").autocomplete({
    source: fx_FullPlacesSearch,
    minLength: 2,
    select: function (event, ui) {
    console.log("Selected: " + ui.item.value + " with LocationId " + ui.item.id);

    map.getViewModel().setLookAtData({
        tilt: 0
        }, true);

        marker1.setGeometry({lat: ui.item.id.split(",")[0], lng:ui.item.id.split(",")[1]});
    map.setCenter({lat: ui.item.id.split(",")[0], lng:ui.item.id.split(",")[1]})
map.setZoom(17)

map.getViewModel().setLookAtData({
    tilt: 0 // the 3d degree
    }, true);}});

// Combination of both Address and Place autocomplete
function fx_FullPlacesSearch(query, callback) {

    let p1 = $.getJSON("https://places.ls.hereapi.com/places/v1/autosuggest?at=" + coordinates + "&result_types=Place" + "&q=" + query.term + "&apikey=" + APIKEY);
    let p2 = $.getJSON("https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?prox=" + coordinates + "&query=" + query.term + "&apikey=" + APIKEY);
    
    $.when(p1, p2).done(function (data1, data2) {
    
    //data1 is from Places autosuggest
    var places = data1[0].results.filter(place => place.vicinity);
    places = places.map(place => {
    return {
    title: place.title,
    value: place.title + ',' + place.vicinity.replace(/<br\/>/g, ", ") + '(' + place.category + ')',
    distance: place.distance,
    //id: place.id
id: place.position.toString()
    };});
    
    // data2 is from address autocomplete
    var addresses = data2[0].suggestions;
    addresses = addresses.map(addr => {
    return {
    title: addr.label,
    value: addr.label + ' (address)',
    distance: addr.distance,
    id: addr.locationId
    };
    });
    
    // lets merge the two arrays into the first
    //$.merge(places, addresses);
    
    // let's sort by distance
    //places.sort(function (p1, p2) { return p1.distance - p2.distance });
    
    // limit display to 10 results
    return callback(places.slice(0, 5));
    })  
    }
   