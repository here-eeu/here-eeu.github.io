// Go to your current location
let showPosition = position => {
	if (marker != null) {
		map.removeObject(marker)}
	marker = new H.map.Marker({ lat: position.coords.latitude, lng: position.coords.longitude })
	map.addObject(marker)
	map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })}

let getLocation = () => {
	if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(showPosition);}}

let marker
let btn = document.querySelector("#geolocation")
btn.addEventListener("click", evt => {getLocation()})


// 3D view
var show_3d = false;
document.querySelector("#view3D").onclick = function(){
	if(!show_3d){
		map.getViewModel().setLookAtData({tilt: 60}, true)
		show_3d = true;}
	else{
		 {map.getViewModel().setLookAtData({tilt: 0}, true)
		show_3d = false;}}};


// day and night mode

//defaultLayers.raster.normal.mapnight