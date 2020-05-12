(this["webpackJsonphere-safe-way"]=this["webpackJsonphere-safe-way"]||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/logo.2b0ab00d.png"},33:function(e,t,n){e.exports=n(60)},40:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(28),c=n.n(i),r=n(30),l=n(9),s=n(10),u=n(6),p=n(11),h=n(12),d=window.H,m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={M:null,H:null},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.H,n={Platform:{},DefaultLayers:{},Map:{},TileService:{},TileLayer:{},Behavior:{},UI:{},Settings:{center:{lat:51.00684227163969,lng:10.008544921875},zoom:6,pixelRatio:window.devicePixelRatio||1,engineType:t.map.render.p2d},ZoomControl:{},MapSettingsControl:{},DistanceMeasurement:{},ZoomRectangle:{},ScaleBar:{}};n.Platform=new t.service.Platform({apikey:this.props.apikey}),n.DefaultLayers=n.Platform.createDefaultLayers(),n.TileService=n.Platform.getMapTileService({type:"base"}),n.TileLayer=n.TileService.createTileLayer("maptile","normal.day.grey",256,"png8",{}),n.Map=new t.Map(document.querySelector("#map"),n.TileLayer,n.Settings),n.Behavior=new t.mapevents.Behavior(new t.mapevents.MapEvents(n.Map)),n.Behavior.disable(t.mapevents.Behavior.Feature.FRACTIONAL_ZOOM),n.UI=new t.ui.UI(n.Map),n.ZoomControl=new t.ui.ZoomControl({fractionalZoom:!1,alignment:"right-middle"}),n.UI.addControl("zoom",n.ZoomControl),n.ZoomRectangle=new t.ui.ZoomRectangle({alignment:"right-middle"}),n.UI.addControl("zoomrectange",n.ZoomRectangle),n.MapSettingsControl=new t.ui.MapSettingsControl({baseLayers:[{label:"Reduced map",layer:n.TileLayer},{label:"Normal day",layer:n.DefaultLayers.raster.normal.map},{label:"Satellite",layer:n.DefaultLayers.raster.satellite.map},{label:"Normal night",layer:n.DefaultLayers.raster.normal.basenight},{label:"Base night",layer:n.DefaultLayers.raster.normal.xbasenight}],alignment:"right-bottom"}),n.UI.addControl("mapsettings",n.MapSettingsControl),n.ScaleBar=new t.ui.ScaleBar({alignment:"bottom-right"}),n.UI.addControl("scalebar",n.ScaleBar),window.addEventListener("resize",(function(){n.Map.getViewPort().resize()})),n.Map.addEventListener("contextmenu",(function(t){return e.contextMenu(t)})),window.map=n.Map,this.setState({M:n,H:t})}},{key:"componentWillUnmount",value:function(){this.state.map.dispose()}},{key:"contextMenu",value:function(e){var t=this.state,n=t.M,a=t.H,o=this.props,i=o.changeIsolineMarker,c=o.clearIsoline,r=o.updateWaypoints,l=o.calculateRoute,s=o.clearWaypoints,u=n.Map.screenToGeo(e.viewportX,e.viewportY);e.items.push(new a.util.ContextItem({label:[Math.abs(u.lat.toFixed(4))+(u.lat>0?"N":"S"),Math.abs(u.lng.toFixed(4))+(u.lng>0?"E":"W")].join(" ")}),new a.util.ContextItem({label:"Center Map",callback:function(){n.Map.setCenter(u,!0)}}),a.util.ContextItem.SEPARATOR,new a.util.ContextItem({label:"Calculate Isoline",callback:function(){i(u)}}),new a.util.ContextItem({label:"Clear Isoline",callback:function(){c()}}),a.util.ContextItem.SEPARATOR,new a.util.ContextItem({label:"Add waypoint",callback:function(){r(u)}}),new a.util.ContextItem({label:"Calculate route",callback:function(){l(u)}}),new a.util.ContextItem({label:"Clear route",callback:function(){s(u)}}))}},{key:"render_layer",value:function(e,t){var n=this.state,a=n.M,o=n.H;if(null!=e&&!0===e.show){var i=new o.map.Group;e.geojson.features.forEach((function(t){var n=t.geometry.coordinates;i.addObject(function(e,t,n,a){var o=document.createElement("div");o.style.backgroundColor=t,o.style.width="15px",o.style.height="15px",o.style.borderRadius="20px";var i=function(e){e.target.style.opacity=.6,e.target.style.border="2px solid yellow"},c=function(e){e.target.style.opacity=1,e.target.style.border="none"},r=new window.H.map.DomIcon(o,{onAttach:function(e,t,n){e.addEventListener("mouseover",i),e.addEventListener("mouseout",c)},onDetach:function(e,t,n){e.removeEventListener("mouseover",i),e.removeEventListener("mouseout",c)}}),l=new d.map.DomMarker({lat:n,lng:a},{icon:r});return l.setData(e),l}(t.properties,e.color,n[1],n[0]))})),i.addEventListener("tap",(function(e){var n=e.target.getData(),o=a.Map.screenToGeo(e.currentPointer.viewportX,e.currentPointer.viewportY);t.setPosition(o),t.setContent('\n                <div style="min-width:250px">\n                  <span style="font-size: 13px"><b>Hospital</b>: '.concat(n.hospital_name,'</span><br/>\n                  <span style="font-size: 13px"><b>Address</b>: ').concat(n.address,'</span><br/>\n                  <span style="font-size: 13px"><b>ICU low care</b>: ').concat(n.low_care,'</span><br/>\n                  <span style="font-size: 13px"><b>ICU high care</b>: ').concat(n.high_care,'</span><br/>\n                  <span style="font-size: 13px"><b>ECMO</b>: ').concat(n.ecmo,"</span><br/>\n                </div>")),t.open()})),a.Map.addObject(i)}}},{key:"styleRoute",value:function(e){var t=new window.H.map.Polyline(e,{style:{lineWidth:10,strokeColor:"rgba(0, 128, 255, 0.7)",lineTailCap:"arrow-tail",lineHeadCap:"arrow-head"}}),n=new window.H.map.Polyline(e,{style:{lineWidth:10,fillColor:"white",strokeColor:"rgba(255, 255, 255, 1)",lineDash:[0,2],lineTailCap:"arrow-tail",lineHeadCap:"arrow-head"}}),a=new window.H.map.Group;return a.addObjects([t,n]),a}},{key:"render",value:function(){var e=this,t=this.props,n=t.layers,a=t.options,i=this.state,c=i.M,r=i.H;if(null!=c){if(c.Map.removeObjects(c.Map.getObjects()),0!==n.length){var l=new r.ui.InfoBubble({lat:0,lng:0},{});l.addClass("info-bubble"),l.close(),c.UI.addBubble(l),n.forEach((function(t){null!==t.group?t.layers.forEach((function(t){return e.render_layer(t,l)})):e.render_layer(t,l)}))}if(0!==a.isoline.geometry.length){var s=new r.map.Marker({lat:a.isoline.marker.lat,lng:a.isoline.marker.lng});c.Map.addObject(s);var u=new r.geo.LineString;a.isoline.geometry.forEach((function(e){var t=e.split(",");u.pushPoint({lat:Number(t[0]),lng:Number(t[1])})}));var p=new window.H.map.Polygon(u,{style:{lineWidth:3}});c.Map.addObject(p)}if(a.waypoints.markers.forEach((function(e){c.Map.addObject(new r.map.Marker(e))})),0!==a.waypoints.geometry.length){var h=new r.geo.LineString;a.waypoints.geometry.forEach((function(e){h.pushPoint({lat:e[0],lng:e[1]})}));var d=this.styleRoute(h);c.Map.addObject(d)}}return o.a.createElement("div",{id:"map"})}}]),n}(a.Component),g=n(31),f=n(61),y=function(e){return o.a.createElement("label",{onClick:e.onClick?e.onClick:function(e){e.preventDefault(),console.log("The link was clicked.")},style:e.style},o.a.createElement("span",{style:e.title_style},e.title),e.text)},k=function(e){return o.a.createElement("div",{className:e.className,onClick:e.onClick?e.onClick:function(e){e.preventDefault()},style:e.checkbox_active?{height:"20px",width:"20px",border:"2px solid #0bc7c2",borderRadius:"5px",cursor:"pointer",backgroundColor:"#0bc7c2"}:{height:"20px",width:"20px",border:"2px solid #0bc7c2",borderRadius:"5px",cursor:"pointer"}})},w=n(13),b=function(e){var t=function(e){e.preventDefault()};return o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},e.content_show?o.a.createElement(w.a,{onClick:e.dropdownClick?e.dropdownClick:t,className:e.icon_show?"d-block":"d-none",style:{marginRight:"5px",cursor:"pointer"}}):o.a.createElement(w.b,{onClick:e.dropdownClick?e.dropdownClick:t,className:e.icon_show?"d-block":"d-none",style:{marginRight:"5px",cursor:"pointer"}}),o.a.createElement(k,{className:e.checkbox_show?"d-block":"d-none",onClick:e.checkBoxClick?e.checkBoxClick:t,checkbox_active:e.checkbox_active}),e.children,o.a.createElement(y,{onClick:e.onClick?e.onClick:t,style:{marginLeft:"5px",cursor:"pointer"},title:e.title}))},v=n(32),x=function(e){return o.a.createElement("div",{className:e.content_show?"d-block":"d-none",style:Object(v.a)({},{display:"flex",flexDirection:"column",marginTop:"5px",marginLeft:"39px"},{},e.style)},e.children)},C={fontSize:"11px"},E={fontWeight:"bold"},_={display:"flex",width:"100%",height:"100%",justifyContent:"center",padding:"80px"},I=function(e){var t={width:"20px",height:"20px",borderRadius:"20px",marginLeft:"10px"};return t.backgroundColor=e.color,o.a.createElement("div",{style:t})},M=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={hospitals_status:!0},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.layers,a=t.checkBoxClick,i=t.dropdownClick,c=n.find((function(e){return"Hospitals"===e.tag})),r=n.find((function(e){return"low_care"===e.group})),l=n.find((function(e){return"high_care"===e.group})),s=n.find((function(e){return"ecmo"===e.group}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"mt-3"},o.a.createElement(y,{style:C,title_style:E,title:"ICU low care: ",text:"Intensive care beds without invasive ventilation (monitoring, possibly non-invasive ventilation possible)"}),o.a.createElement(y,{style:C,title_style:E,title:"ICU high care: ",text:"intensive care beds with invasive ventilation (ventilation beds)"}),o.a.createElement(y,{style:C,title_style:E,title:"ECMO: ",text:"Additional extracorporeal membrane oxygenation"})),0!==n.length?o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{title:"".concat(c.title,": ").concat(c.count),checkbox_active:c.show,checkbox_show:!0,content_show:!0,icon_show:!1,checkBoxClick:function(){return a(c.tag,null,"layer")}},o.a.createElement(I,{color:c.color})),o.a.createElement("hr",null),o.a.createElement(b,{title:"Hospitals status",checkbox_show:!1,content_show:this.state.hospitals_status,icon_show:!0,dropdownClick:function(){return e.setState({hospitals_status:!e.state.hospitals_status})}}),o.a.createElement(x,{content_show:this.state.hospitals_status},o.a.createElement(b,{title:r.title,icon_show:!0,checkbox_show:!0,checkbox_active:r.show,content_show:r.dropdown,checkBoxClick:function(){return a(null,r.group,"group")},dropdownClick:function(){return i(r.group)}}),o.a.createElement(x,{content_show:r.dropdown},r.layers.map((function(e,t){return o.a.createElement(b,{key:t,title:"".concat(e.title,": ").concat(e.count),checkbox_active:e.show,checkbox_show:!0,checkBoxClick:function(){return a(e.tag,e.group,"layer")}},o.a.createElement(I,{color:e.color}))}))),o.a.createElement(b,{title:l.title,icon_show:!0,checkbox_show:!0,checkbox_active:l.show,content_show:l.dropdown,checkBoxClick:function(){return a(null,l.group,"group")},dropdownClick:function(){return i(l.group)}}),o.a.createElement(x,{content_show:l.dropdown},l.layers.map((function(e,t){return o.a.createElement(b,{key:t,title:"".concat(e.title,": ").concat(e.count),checkbox_active:e.show,checkbox_show:!0,checkBoxClick:function(){return a(e.tag,e.group,"layer")}},o.a.createElement(I,{color:e.color}))}))),o.a.createElement(b,{title:s.title,icon_show:!0,checkbox_show:!0,checkbox_active:s.show,content_show:s.dropdown,checkBoxClick:function(){return a(null,s.group,"group")},dropdownClick:function(){return i(s.group)}}),o.a.createElement(x,{content_show:s.dropdown},s.layers.map((function(e,t){return o.a.createElement(b,{key:t,title:"".concat(e.title,": ").concat(e.count),checkbox_active:e.show,checkbox_show:!0,checkBoxClick:function(){return a(e.tag,e.group,"layer")}},o.a.createElement(I,{color:e.color}))}))))):o.a.createElement("div",{style:_},o.a.createElement(f.a,{color:"info"})))}}]),n}(a.Component),O=n(62),j=n(63),S=n(64),R=n(65),B=n(66),D=n(73),L={marginTop:"20px"},T=function(e){var t=e.options,n=e.onChangeIsolineRange,a=e.clickCheckboxParameter,i=e.clickOptionDropdown,c=t.isoline,r=t.waypoints;return o.a.createElement(O.a,null,o.a.createElement("div",{style:L},o.a.createElement(b,{title:"Isoline Options",icon_show:!0,content_show:c.show,dropdownClick:function(){return i("isoline")}})),o.a.createElement(x,{content_show:c.show,style:{marginLeft:"0px"}},o.a.createElement(j.a,null,o.a.createElement(S.a,null,o.a.createElement(j.a,null,o.a.createElement(S.a,null,o.a.createElement(R.a,null,"Range")),o.a.createElement(S.a,null,o.a.createElement(R.a,{style:{float:"right"}},"time"===c.type?"".concat(c.range/60," min"):"".concat(c.range," m")))),o.a.createElement(B.a,null,o.a.createElement(D.a,{className:"slider",type:"range",id:"isoline-range",name:"isolineRange",min:"60",step:"120",max:"1860",value:c.range,onChange:function(e){return n(e.target.value)}})))),o.a.createElement(R.a,null,"Mode"),o.a.createElement(j.a,null,o.a.createElement(S.a,null,o.a.createElement(b,{title:"Time",checkbox_active:"time"===c.type,checkbox_show:!0,checkBoxClick:function(){return a("isoline","type","time","isoline")}}),o.a.createElement(b,{title:"Distance",checkbox_active:"distance"===c.type,checkBoxClick:function(){return a("isoline","type","distance","isoline")},checkbox_show:!0})),o.a.createElement(S.a,null,o.a.createElement(b,{title:"Car",checkbox_active:"car"===c.transport,checkBoxClick:function(){return a("isoline","transport","car","isoline")},checkbox_show:!0}),o.a.createElement(b,{title:"Pedestrian",checkbox_active:"pedestrian"===c.transport,checkBoxClick:function(){return a("isoline","transport","pedestrian","isoline")},checkbox_show:!0}))),o.a.createElement(R.a,{style:L},"Traffic"),o.a.createElement(j.a,null,o.a.createElement(S.a,null,o.a.createElement(b,{title:"Enabled",checkbox_active:"enabled"===c.traffic,checkBoxClick:function(){return a("isoline","traffic","enabled","isoline")},checkbox_show:!0})),o.a.createElement(S.a,null,o.a.createElement(b,{title:"Disabled",checkbox_active:"enabled"!==c.traffic,checkBoxClick:function(){return a("isoline","traffic","disabled","isoline")},checkbox_show:!0})))),o.a.createElement("hr",null),o.a.createElement("div",{style:L},o.a.createElement(b,{title:"Waypoint Options",icon_show:!0,content_show:r.show,dropdownClick:function(){return i("waypoints")}})),o.a.createElement(x,{content_show:r.show,style:{marginLeft:"0px"}},o.a.createElement(j.a,null,o.a.createElement(S.a,null,o.a.createElement(j.a,null,o.a.createElement(S.a,null,o.a.createElement(R.a,null,"Mode")),o.a.createElement(S.a,null,o.a.createElement(R.a,null,"Traffic"))),o.a.createElement(j.a,null,o.a.createElement(S.a,null,o.a.createElement(b,{title:"Car",checkbox_active:"car"===r.transport,checkBoxClick:function(){return a("waypoints","transport","car","waypoints")},checkbox_show:!0}),o.a.createElement(b,{title:"Pedestrian",checkbox_active:"pedestrian"===r.transport,checkBoxClick:function(){return a("waypoints","transport","pedestrian","waypoints")},checkbox_show:!0})),o.a.createElement(S.a,null,o.a.createElement(b,{title:"Enabled",checkbox_active:"enabled"===r.traffic,checkBoxClick:function(){return a("waypoints","traffic","enabled","waypoints")},checkbox_show:!0}),o.a.createElement(b,{title:"Disabled",checkbox_active:"enabled"!==r.traffic,checkBoxClick:function(){return a("waypoints","traffic","disabled","waypoints")},checkbox_show:!0})))))))},P=n(67),N=n(68),H=n(69),A=n(70),W=n(71),z=n(72),U=n(29),F=n.n(U),Z=(n(40),{position:"absolute",top:"0px",left:"0px",background:"#fff",height:"100vh",width:"350px",overflowY:"auto",zIndex:"1000"}),G={position:"absolute",top:"0px",left:"0px",background:"#fff",height:"57px",width:"350px",overflowY:"auto",zIndex:"1000"},V={color:"#3a3e47",marginLeft:"15px",fontSize:"20px"},q=function(e){var t=Object(a.useState)(!0),n=Object(g.a)(t,2),i=n[0],c=n[1],r=e.mode,l=e.layers,s=e.changeMode,u=e.options,p=e.checkBoxClick,h=e.dropdownClick,d=e.onChangeIsolineRange,m=e.clickCheckboxParameter,f=e.clickOptionDropdown;return o.a.createElement(O.a,{id:"sidebar",style:i?Z:G},o.a.createElement(P.a,{className:"w-100",color:"default",light:!0,expand:"md"},o.a.createElement(N.a,null,o.a.createElement("img",{src:F.a,style:{height:"30px"}})),o.a.createElement(H.a,{className:"mr-auto",navbar:!0},o.a.createElement(A.a,null,o.a.createElement("b",{style:V},"Analytical tool"))),!0===i?o.a.createElement(w.a,{size:20,style:{cursor:"pointer"},onClick:function(){return c(!i)}}):o.a.createElement(w.b,{size:20,style:{cursor:"pointer"},onClick:function(){return c(!i)}})),o.a.createElement("div",{className:i?"d-block":"d-none"},o.a.createElement(W.a,{className:"w-100",style:{marginTop:"5px"}},o.a.createElement(z.a,{color:"light",onClick:function(){return s("analytics")},active:"analytics"===r},"Analytics"),o.a.createElement(z.a,{color:"light",onClick:function(){return s("options")},active:"options"===r},"Options")),"analytics"===r?o.a.createElement(M,{layers:l,checkBoxClick:p,dropdownClick:h}):o.a.createElement(T,{options:u,onChangeIsolineRange:d,clickCheckboxParameter:m,clickOptionDropdown:f})))},J={width:"400px",height:"50px",position:"absolute",top:"10px",right:"10px"},Y={display:"flex",flexDirection:"row"},K={outline:"none"},X={backgroundColor:"#fff",padding:"5px",marginTop:"3px",cursor:"pointer"},Q={maxHeight:"500px",overflow:"auto"},$=function(e){var t=e.searchText,n=e.onChangeSearch,a=e.suggestions,i=e.geocode;return o.a.createElement("div",{style:J},o.a.createElement("div",{style:Y},o.a.createElement("input",{className:"form-control",style:K,placeholder:"Search",value:t,onChange:function(e){return n(e.currentTarget.value)}})),o.a.createElement("div",{style:Q},void 0!==a?a.map((function(e,t){return o.a.createElement("div",{style:X,key:t,onClick:function(){return i(e.locationId)}},e.label)})):o.a.createElement("div",null)))},ee=n(8),te=n.n(ee),ne="d94UCjhJ6sEzabRJjKV8Z5-w6Py99jqHQAB-uj6g6ks",ae="AGNjdAWKRUiLFDvPtnVM-AA",oe={german_hospitals:"v6fbBS5z",german_warehouses:"hoCxTKFb"},ie="rgba(0,128,0,.6)",ce="rgba(255,152,0,.6)",re="rgba(255,0,0,.6)",le=function(e,t,n,a){var o=e.features.filter((function(e){return e.properties[t]===n}));return{title:n,group:t,tag:"".concat(t,"_").concat(n),count:o.length,show:!1,color:a,geojson:{type:"FeatureCollection",features:o}}},se=function(e){var t=[];return[{title:"ICU low care",group:"low_care"},{title:"ICU high care",group:"high_care"},{title:"ECMO",group:"ecmo"}].forEach((function(n){t.push({title:n.title,group:n.group,dropdown:!0,show:!1,layers:[le(e,n.group,"Available",ie),le(e,n.group,"Limited",ce),le(e,n.group,"Not available",re)]})})),t},ue=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={apikey:ne,mode:"analytics",layers:[],suggestions:[],searchText:"",options:{isoline:{show:!0,range:300,type:"time",transport:"car",traffic:"enabled",geometry:[],marker:{lat:null,lng:null}},waypoints:{show:!0,transport:"car",traffic:"enabled",markers:[],geometry:[]}}},a.changeMode=a.changeMode.bind(Object(u.a)(a)),a.checkBoxClick=a.checkBoxClick.bind(Object(u.a)(a)),a.dropdownClick=a.dropdownClick.bind(Object(u.a)(a)),a.onChangeSearch=a.onChangeSearch.bind(Object(u.a)(a)),a.geocode=a.geocode.bind(Object(u.a)(a)),a.onChangeIsolineRange=a.onChangeIsolineRange.bind(Object(u.a)(a)),a.clickCheckboxParameter=a.clickCheckboxParameter.bind(Object(u.a)(a)),a.changeIsolineMarker=a.changeIsolineMarker.bind(Object(u.a)(a)),a.clearIsoline=a.clearIsoline.bind(Object(u.a)(a)),a.clickOptionDropdown=a.clickOptionDropdown.bind(Object(u.a)(a)),a.calculateRoute=a.calculateRoute.bind(Object(u.a)(a)),a.updateWaypoints=a.updateWaypoints.bind(Object(u.a)(a)),a.clearWaypoints=a.clearWaypoints.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getSpaceFeatures(oe.german_hospitals,"Hospitals","rgba(28, 184, 170, 0.6)",se),setInterval((function(){e.setState({layers:[]}),e.getSpaceFeatures(oe.german_hospitals,"Hospitals","rgba(28, 184, 170, 0.6)",se)}),36e5)}},{key:"getSpaceFeatures",value:function(e,t,n){var a=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i="https://xyz.api.here.com/hub/spaces/".concat(e,"/iterate?access_token=").concat(ae),c=this.state.layers;te.a.get(i).then((function(e){if(o){var i=o(e.data);c.push({title:t,group:null,tag:t,show:!0,count:e.data.features.length,color:n,geojson:e.data}),i.forEach((function(e){return c.push(e)}))}else c.push({title:t,group:null,tag:t,show:!1,count:e.data.length,color:n,geojson:e.data});a.setState({layers:c})}),(function(e){console.log(e)}))}},{key:"changeMode",value:function(e){this.setState({mode:e})}},{key:"checkBoxClick",value:function(e,t,n){var a=this.state.layers;switch(n){case"layer":if(t){var o=a.find((function(e){return e.group===t})).layers.find((function(t){return t.tag===e}));a.find((function(e){return e.group===t})).layers.find((function(t){return t.tag===e})).show=!o.show}else{var i=a.find((function(t){return t.tag===e}));a.find((function(t){return t.tag===e})).show=!i.show}this.setState({layers:a});break;case"group":var c=a.find((function(e){return e.group===t}));a.find((function(e){return e.group===t})).show=!c.show,c.layers.forEach((function(e){e.show=c.show})),c.show&&a.filter((function(e){return e.group!==t&&null!==e.group})).forEach((function(e){e.show=!1,e.layers.forEach((function(e){return e.show=!1}))})),this.setState({layers:a})}}},{key:"dropdownClick",value:function(e){var t=this.state.layers,n=t.find((function(t){return t.group===e}));t.find((function(t){return t.group===e})).dropdown=!n.dropdown,this.setState({layers:t})}},{key:"geocode",value:function(e){var t=this,n="https://geocoder.ls.hereapi.com/6.2/geocode.json"+"?locationid=".concat(e,"&apikey=").concat(ne);te.a.get(n).then((function(e){var n=e.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude,a=e.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude;window.map.setCenter({lat:n,lng:a}),window.map.setZoom(17),t.setState({searchText:"",geocoderResults:[],suggestions:[]})}))}},{key:"onChangeSearch",value:function(e){var t=this;this.setState({searchText:e});var n="https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json"+"?query=".concat(e)+"&apikey=".concat(ne)+"&maxresults=5";te.a.get(n).then((function(e){t.setState({suggestions:e.data.suggestions})}))}},{key:"onChangeIsolineRange",value:function(e){var t=this.state.options;t.isoline.range=e,this.setState({options:t}),this.calculateIsoline(t.isoline.marker)}},{key:"clickCheckboxParameter",value:function(e,t,n,a){var o=this.state.options;o[e][t]=n,this.setState({options:o}),"isoline"===a?this.calculateIsoline(o.isoline.marker):"waypoints"===a&&this.calculateRoute()}},{key:"changeIsolineMarker",value:function(e){this.calculateIsoline(e);var t=this.state.options;t.isoline.marker={lat:e.lat,lng:e.lng},this.setState({options:t})}},{key:"calculateIsoline",value:function(e){var t=this,n=this.state.options,a=n.isoline,o="https://isoline.route.ls.hereapi.com/routing/7.2/calculateisoline.json?"+"apikey=".concat(ne,"&mode=fastest;").concat(a.transport,";traffic:").concat(a.traffic,"&rangetype=").concat(a.type,"&range=").concat(a.range,"&start=geo!").concat(e.lat,",").concat(e.lng);te.a.get(o).then((function(e){null!==e.data.response&&(n.isoline.geometry=e.data.response.isoline[0].component[0].shape,t.setState({options:n}))}),(function(e){console.log(e)}))}},{key:"clearIsoline",value:function(){var e=this.state.options;e.isoline.geometry=[],e.isoline.marker={lat:null,lng:null},this.setState({options:e})}},{key:"clickOptionDropdown",value:function(e){var t=this.state.options;t[e].show=!t[e].show,this.setState({options:t})}},{key:"updateWaypoints",value:function(e){var t=this.state.options;t.waypoints.markers=[].concat(Object(r.a)(t.waypoints.markers),[e]),this.setState({options:t})}},{key:"clearWaypoints",value:function(){var e=this.state.options;e.waypoints.geometry=[],e.waypoints.markers=[],this.setState({options:e})}},{key:"calculateRoute",value:function(){var e=this,t=this.state.options,n=t.waypoints,a=n.markers.map((function(e,t){return 0===t?"start=".concat(t,";").concat(e.lat,",").concat(e.lng):t===n.markers.length-1?"end=".concat(t,";").concat(e.lat,",").concat(e.lng):"destination".concat(t,"=").concat(t,";").concat(e.lat,",").concat(e.lng)})).join("&"),o="https://wse.ls.hereapi.com/2/findsequence.json?"+"apikey=".concat(ne,"&mode=fastest;").concat(n.transport,"&")+a;te.a.get(o).then((function(a){var o=a.data.results[0].waypoints.map((function(e,t){return"waypoint".concat(t,"=geo!").concat(e.lat,",").concat(e.lng)})).join("&"),i="https://route.ls.hereapi.com/routing/7.2/calculateroute.json?"+"apikey=".concat(ne,"&mode=fastest;").concat(n.transport,";traffic:").concat(n.traffic,"&routeattributes=sh&")+o;te.a.get(i).then((function(n){var a=n.data.response.route[0].shape.map((function(e,t){return e.split(",").map(Number)}));t.waypoints.geometry=a,e.setState({options:t})}))}),(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.apikey,n=e.layers,a=e.analytics,i=e.mode,c=e.options,r=e.searchText,l=e.suggestions;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{apikey:t,layers:n,options:c,clearIsoline:this.clearIsoline,changeIsolineMarker:this.changeIsolineMarker,updateWaypoints:this.updateWaypoints,clearWaypoints:this.clearWaypoints,calculateRoute:this.calculateRoute}),o.a.createElement(q,{analytics:a,mode:i,layers:n,options:c,changeMode:this.changeMode,checkBoxClick:this.checkBoxClick,dropdownClick:this.dropdownClick,onChangeIsolineRange:this.onChangeIsolineRange,clickCheckboxParameter:this.clickCheckboxParameter,clickOptionDropdown:this.clickOptionDropdown}),o.a.createElement($,{suggestions:l,searchText:r,onChangeSearch:this.onChangeSearch,geocode:this.geocode}))}}]),n}(a.Component);n(58),n(59);c.a.render(o.a.createElement(ue,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6be4d36b.chunk.js.map