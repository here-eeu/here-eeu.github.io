// show and hide layers using buttons
// layer 1
var LayerAdded1 = false;
document.querySelector("#layerbutton-1").onclick = function(){
	if(!LayerAdded1){
		map.addObject(group1)
		document.querySelector("#layerbutton-1").style.opacity = "1"; 
		LayerAdded1 = true;}
	else{
		map.removeObject(group1);
		document.querySelector("#layerbutton-1").style.opacity = ".3";
		LayerAdded1 = false;}};

// layer 2
var LayerAdded2 = false;
document.querySelector("#layerbutton-2").onclick = function(){
	if(!LayerAdded2){
		map.addObject(group2)
		document.querySelector("#layerbutton-2").style.opacity = "1"; 
		LayerAdded2 = true;}
	else{
		map.removeObject(group2);
		document.querySelector("#layerbutton-2").style.opacity = ".3";
        LayerAdded2 = false;}};
// layer 3
var LayerAdded3 = false;
document.querySelector("#layerbutton-3").onclick = function(){
	if(!LayerAdded3){
		map.addObject(group3)
		document.querySelector("#layerbutton-3").style.opacity = "1"; 
		LayerAdded3 = true;}
	else{
		map.removeObject(group3);
		document.querySelector("#layerbutton-3").style.opacity = ".3";
        LayerAdded3 = false;}};
// layer 4
var LayerAdded4 = false;
document.querySelector("#layerbutton-4").onclick = function(){
	if(!LayerAdded4){
		map.addObject(group4)
		document.querySelector("#layerbutton-4").style.opacity = "1"; 
		LayerAdded4 = true;}
	else{
		map.removeObject(group4);
		document.querySelector("#layerbutton-4").style.opacity = ".3";
        LayerAdded4 = false;}};
// layer 5
var LayerAdded5 = false;
document.querySelector("#layerbutton-5").onclick = function(){
	if(!LayerAdded5){
		map.addObject(group5)
		document.querySelector("#layerbutton-5").style.opacity = "1"; 
		LayerAdded5 = true;}
	else{
		map.removeObject(group5);
		document.querySelector("#layerbutton-5").style.opacity = ".3";
        LayerAdded5 = false;}};
// layer 6
var LayerAdded6 = false;
document.querySelector("#layerbutton-6").onclick = function(){
	if(!LayerAdded6){
		map.addObject(group6)
		document.querySelector("#layerbutton-6").style.opacity = "1"; 
		LayerAdded6 = true;}
	else{
		map.removeObject(group6);
		document.querySelector("#layerbutton-6").style.opacity = ".3";
        LayerAdded6 = false;}};
// layer 7
var LayerAdded7 = false;
document.querySelector("#layerbutton-7").onclick = function(){
	if(!LayerAdded7){
		map.addObject(group7)
		document.querySelector("#layerbutton-7").style.opacity = "1"; 
		LayerAdded7 = true;}
	else{
		map.removeObject(group7);
		document.querySelector("#layerbutton-7").style.opacity = ".3";
		LayerAdded7 = false;}};
// layer 8
var LayerAdded8 = false;
document.querySelector("#layerbutton-8").onclick = function(){
	if(!LayerAdded8){
		map.addObject(group8)
		document.querySelector("#layerbutton-8").style.opacity = "1"; 
		LayerAdded8 = true;}
	else{
		map.removeObject(group8);
		document.querySelector("#layerbutton-8").style.opacity = ".3";
		LayerAdded8 = false;}};
