(this["webpackJsonphere-safe-way"]=this["webpackJsonphere-safe-way"]||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/logo.2b0ab00d.png"},30:function(e,t,n){e.exports=n(56)},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(26),i=n.n(c),r=n(28),l=n(9),s=n(10),u=n(6),p=n(11),h=n(12),d=window.H,m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={M:null,H:null},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.H,n={Platform:{},DefaultLayers:{},Map:{},TileService:{},TileLayer:{},Behavior:{},UI:{},Settings:{center:{lat:51.00684227163969,lng:10.008544921875},zoom:6,pixelRatio:window.devicePixelRatio||1,engineType:t.map.render.p2d},ZoomControl:{},MapSettingsControl:{},DistanceMeasurement:{},ZoomRectangle:{},ScaleBar:{}};n.Platform=new t.service.Platform({apikey:this.props.apikey}),n.DefaultLayers=n.Platform.createDefaultLayers(),n.TileService=n.Platform.getMapTileService({type:"base"}),n.TileLayer=n.TileService.createTileLayer("maptile","normal.day.grey",256,"png8",{}),n.Map=new t.Map(document.querySelector("#map"),n.TileLayer,n.Settings),n.Behavior=new t.mapevents.Behavior(new t.mapevents.MapEvents(n.Map)),n.Behavior.disable(t.mapevents.Behavior.Feature.FRACTIONAL_ZOOM),n.UI=new t.ui.UI(n.Map),n.ZoomControl=new t.ui.ZoomControl({fractionalZoom:!1,alignment:"right-middle"}),n.UI.addControl("zoom",n.ZoomControl),n.ZoomRectangle=new t.ui.ZoomRectangle({alignment:"right-middle"}),n.UI.addControl("zoomrectange",n.ZoomRectangle),n.MapSettingsControl=new t.ui.MapSettingsControl({baseLayers:[{label:"Reduced map",layer:n.TileLayer},{label:"Normal day",layer:n.DefaultLayers.raster.normal.map},{label:"Satellite",layer:n.DefaultLayers.raster.satellite.map},{label:"Normal night",layer:n.DefaultLayers.raster.normal.basenight},{label:"Base night",layer:n.DefaultLayers.raster.normal.xbasenight}],alignment:"right-bottom"}),n.UI.addControl("mapsettings",n.MapSettingsControl),n.ScaleBar=new t.ui.ScaleBar({alignment:"bottom-right"}),n.UI.addControl("scalebar",n.ScaleBar),window.addEventListener("resize",(function(){n.Map.getViewPort().resize()})),n.Map.addEventListener("contextmenu",(function(t){return e.contextMenu(t)})),window.map=n.Map,this.setState({M:n,H:t})}},{key:"componentWillUnmount",value:function(){this.state.map.dispose()}},{key:"contextMenu",value:function(e){var t=this.state,n=t.M,a=t.H,o=this.props,c=o.changeIsolineMarker,i=o.clearIsoline,r=o.updateWaypoints,l=o.calculateRoute,s=o.clearWaypoints,u=n.Map.screenToGeo(e.viewportX,e.viewportY);e.items.push(new a.util.ContextItem({label:[Math.abs(u.lat.toFixed(4))+(u.lat>0?"N":"S"),Math.abs(u.lng.toFixed(4))+(u.lng>0?"E":"W")].join(" ")}),new a.util.ContextItem({label:"Center Map",callback:function(){n.Map.setCenter(u,!0)}}),a.util.ContextItem.SEPARATOR,new a.util.ContextItem({label:"Calculate Isoline",callback:function(){c(u)}}),new a.util.ContextItem({label:"Clear Isoline",callback:function(){i()}}),a.util.ContextItem.SEPARATOR,new a.util.ContextItem({label:"Add waypoint",callback:function(){r(u)}}),new a.util.ContextItem({label:"Calculate route",callback:function(){l(u)}}),new a.util.ContextItem({label:"Clear route",callback:function(){s(u)}}))}},{key:"render_layer",value:function(e,t){var n=this.state,a=n.M,o=n.H;if(null!=e&&!0===e.show){var c=new o.map.Group;e.geojson.features.forEach((function(t){var n=t.geometry.coordinates;c.addObject(function(e,t,n,a){var o=document.createElement("div");o.style.backgroundColor=t,o.style.width="15px",o.style.height="15px",o.style.borderRadius="20px";var c=function(e){e.target.style.opacity=.6,e.target.style.border="2px solid yellow"},i=function(e){e.target.style.opacity=1,e.target.style.border="none"},r=new window.H.map.DomIcon(o,{onAttach:function(e,t,n){e.addEventListener("mouseover",c),e.addEventListener("mouseout",i)},onDetach:function(e,t,n){e.removeEventListener("mouseover",c),e.removeEventListener("mouseout",i)}}),l=new d.map.DomMarker({lat:n,lng:a},{icon:r});return l.setData(e),l}(t.properties,e.color,n[1],n[0]))})),c.addEventListener("tap",(function(e){var n=e.target.getData(),o=a.Map.screenToGeo(e.currentPointer.viewportX,e.currentPointer.viewportY);t.setPosition(o),t.setContent('\n                <div style="min-width:250px">\n                  <span style="font-size: 13px"><b>Hospital</b>: '.concat(n.hospital_name,'</span><br/>\n                  <span style="font-size: 13px"><b>Address</b>: ').concat(n.address,'</span><br/>\n                  <span style="font-size: 13px"><b>ICU low care</b>: ').concat(n.low_care,'</span><br/>\n                  <span style="font-size: 13px"><b>ICU high care</b>: ').concat(n.high_care,'</span><br/>\n                  <span style="font-size: 13px"><b>ECMO</b>: ').concat(n.ecmo,"</span><br/>\n                </div>")),t.open()})),a.Map.addObject(c)}}},{key:"styleRoute",value:function(e){var t=new window.H.map.Polyline(e,{style:{lineWidth:10,strokeColor:"rgba(0, 128, 255, 0.7)",lineTailCap:"arrow-tail",lineHeadCap:"arrow-head"}}),n=new window.H.map.Polyline(e,{style:{lineWidth:10,fillColor:"white",strokeColor:"rgba(255, 255, 255, 1)",lineDash:[0,2],lineTailCap:"arrow-tail",lineHeadCap:"arrow-head"}}),a=new window.H.map.Group;return a.addObjects([t,n]),a}},{key:"render",value:function(){var e=this,t=this.props,n=t.layers,a=t.options,c=this.state,i=c.M,r=c.H;if(null!=i){if(i.Map.removeObjects(i.Map.getObjects()),0!==n.length){var l=new r.ui.InfoBubble({lat:0,lng:0},{});l.addClass("info-bubble"),l.close(),i.UI.addBubble(l),n.forEach((function(t){null!==t.group?t.layers.forEach((function(t){return e.render_layer(t,l)})):e.render_layer(t,l)}))}if(0!==a.isoline.geometry.length){var s=new r.map.Marker({lat:a.isoline.marker.lat,lng:a.isoline.marker.lng});i.Map.addObject(s);var u=new r.geo.LineString;a.isoline.geometry.forEach((function(e){var t=e.split(",");u.pushPoint({lat:Number(t[0]),lng:Number(t[1])})}));var p=new window.H.map.Polygon(u,{style:{lineWidth:3}});i.Map.addObject(p)}if(a.waypoints.markers.forEach((function(e){i.Map.addObject(new r.map.Marker(e))})),0!==a.waypoints.geometry.length){var h=new r.geo.LineString;a.waypoints.geometry.forEach((function(e){h.pushPoint({lat:e[0],lng:e[1]})}));var d=this.styleRoute(h);i.Map.addObject(d)}}return o.a.createElement("div",{id:"map"})}}]),n}(a.Component),g=n(57),f=function(e){return o.a.createElement("label",{onClick:e.onClick?e.onClick:function(e){e.preventDefault(),console.log("The link was clicked.")},style:e.style},o.a.createElement("span",{style:e.title_style},e.title),e.text)},y=function(e){return o.a.createElement("div",{className:e.className,onClick:e.onClick?e.onClick:function(e){e.preventDefault()},style:e.checkbox_active?{height:"20px",width:"20px",border:"2px solid #0bc7c2",borderRadius:"5px",cursor:"pointer",backgroundColor:"#0bc7c2"}:{height:"20px",width:"20px",border:"2px solid #0bc7c2",borderRadius:"5px",cursor:"pointer"}})},k=n(15),w=function(e){var t=function(e){e.preventDefault()};return o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},e.content_show?o.a.createElement(k.a,{onClick:e.dropdownClick?e.dropdownClick:t,className:e.icon_show?"d-block":"d-none",style:{marginRight:"5px",cursor:"pointer"}}):o.a.createElement(k.b,{onClick:e.dropdownClick?e.dropdownClick:t,className:e.icon_show?"d-block":"d-none",style:{marginRight:"5px",cursor:"pointer"}}),o.a.createElement(y,{className:e.checkbox_show?"d-block":"d-none",onClick:e.checkBoxClick?e.checkBoxClick:t,checkbox_active:e.checkbox_active}),e.children,o.a.createElement(f,{onClick:e.onClick?e.onClick:t,style:{marginLeft:"5px",cursor:"pointer"},title:e.title}))},b=n(29),v=function(e){return o.a.createElement("div",{className:e.content_show?"d-block":"d-none",style:Object(b.a)({},{display:"flex",flexDirection:"column",marginTop:"5px",marginLeft:"39px"},{},e.style)},e.children)},x={fontSize:"11px"},C={fontWeight:"bold"},E={display:"flex",width:"100%",height:"100%",justifyContent:"center",padding:"80px"},_=function(e){var t={width:"20px",height:"20px",borderRadius:"20px",marginLeft:"10px"};return t.backgroundColor=e.color,o.a.createElement("div",{style:t})},M=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={hospitals_status:!0},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.layers,a=t.checkBoxClick,c=t.dropdownClick,i=n.find((function(e){return"Hospitals"===e.tag})),r=n.find((function(e){return"low_care"===e.group})),l=n.find((function(e){return"high_care"===e.group})),s=n.find((function(e){return"ecmo"===e.group}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"mt-3"},o.a.createElement(f,{style:x,title_style:C,title:"ICU low care: ",text:"Intensive care beds without invasive ventilation (monitoring, possibly non-invasive ventilation possible)"}),o.a.createElement(f,{style:x,title_style:C,title:"ICU high care: ",text:"intensive care beds with invasive ventilation (ventilation beds)"}),o.a.createElement(f,{style:x,title_style:C,title:"ECMO: ",text:"Additional extracorporeal membrane oxygenation"})),0!==n.length?o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{title:"".concat(i.title,": ").concat(i.count),checkbox_active:i.show,checkbox_show:!0,content_show:!0,icon_show:!1,checkBoxClick:function(){return a(i.tag,null,"layer")}},o.a.createElement(_,{color:i.color})),o.a.createElement("hr",null),o.a.createElement(w,{title:"Hospitals status",checkbox_show:!1,content_show:this.state.hospitals_status,icon_show:!0,dropdownClick:function(){return e.setState({hospitals_status:!e.state.hospitals_status})}}),o.a.createElement(v,{content_show:this.state.hospitals_status},o.a.createElement(w,{title:r.title,icon_show:!0,checkbox_show:!0,checkbox_active:r.show,content_show:r.dropdown,checkBoxClick:function(){return a(null,r.group,"group")},dropdownClick:function(){return c(r.group)}}),o.a.createElement(v,{content_show:r.dropdown},r.layers.map((function(e,t){return o.a.createElement(w,{key:t,title:"".concat(e.title,": ").concat(e.count),checkbox_active:e.show,checkbox_show:!0,checkBoxClick:function(){return a(e.tag,e.group,"layer")}},o.a.createElement(_,{color:e.color}))}))),o.a.createElement(w,{title:l.title,icon_show:!0,checkbox_show:!0,checkbox_active:l.show,content_show:l.dropdown,checkBoxClick:function(){return a(null,l.group,"group")},dropdownClick:function(){return c(l.group)}}),o.a.createElement(v,{content_show:l.dropdown},l.layers.map((function(e,t){return o.a.createElement(w,{key:t,title:"".concat(e.title,": ").concat(e.count),checkbox_active:e.show,checkbox_show:!0,checkBoxClick:function(){return a(e.tag,e.group,"layer")}},o.a.createElement(_,{color:e.color}))}))),o.a.createElement(w,{title:s.title,icon_show:!0,checkbox_show:!0,checkbox_active:s.show,content_show:s.dropdown,checkBoxClick:function(){return a(null,s.group,"group")},dropdownClick:function(){return c(s.group)}}),o.a.createElement(v,{content_show:s.dropdown},s.layers.map((function(e,t){return o.a.createElement(w,{key:t,title:"".concat(e.title,": ").concat(e.count),checkbox_active:e.show,checkbox_show:!0,checkBoxClick:function(){return a(e.tag,e.group,"layer")}},o.a.createElement(_,{color:e.color}))}))))):o.a.createElement("div",{style:E},o.a.createElement(g.a,{color:"info"})))}}]),n}(a.Component),I=n(58),O=n(59),j=n(60),S=n(61),R=n(62),B=n(69),D={marginTop:"20px"},L=function(e){var t=e.options,n=e.onChangeIsolineRange,a=e.clickCheckboxParameter,c=e.clickOptionDropdown,i=t.isoline,r=t.waypoints;return o.a.createElement(I.a,null,o.a.createElement("div",{style:D},o.a.createElement(w,{title:"Isoline Options",icon_show:!0,content_show:i.show,dropdownClick:function(){return c("isoline")}})),o.a.createElement(v,{content_show:i.show,style:{marginLeft:"0px"}},o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(S.a,null,"Range")),o.a.createElement(j.a,null,o.a.createElement(S.a,{style:{float:"right"}},"time"===i.type?"".concat(i.range/60," min"):"".concat(i.range," m")))),o.a.createElement(R.a,null,o.a.createElement(B.a,{className:"slider",type:"range",id:"isoline-range",name:"isolineRange",min:"60",step:"120",max:"1860",value:i.range,onChange:function(e){return n(e.target.value)}})))),o.a.createElement(S.a,null,"Mode"),o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(w,{title:"Time",checkbox_active:"time"===i.type,checkbox_show:!0,checkBoxClick:function(){return a("isoline","type","time","isoline")}}),o.a.createElement(w,{title:"Distance",checkbox_active:"distance"===i.type,checkBoxClick:function(){return a("isoline","type","distance","isoline")},checkbox_show:!0})),o.a.createElement(j.a,null,o.a.createElement(w,{title:"Car",checkbox_active:"car"===i.transport,checkBoxClick:function(){return a("isoline","transport","car","isoline")},checkbox_show:!0}),o.a.createElement(w,{title:"Pedestrian",checkbox_active:"pedestrian"===i.transport,checkBoxClick:function(){return a("isoline","transport","pedestrian","isoline")},checkbox_show:!0}))),o.a.createElement(S.a,{style:D},"Traffic"),o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(w,{title:"Enabled",checkbox_active:"enabled"===i.traffic,checkBoxClick:function(){return a("isoline","traffic","enabled","isoline")},checkbox_show:!0})),o.a.createElement(j.a,null,o.a.createElement(w,{title:"Disabled",checkbox_active:"enabled"!==i.traffic,checkBoxClick:function(){return a("isoline","traffic","disabled","isoline")},checkbox_show:!0})))),o.a.createElement("hr",null),o.a.createElement("div",{style:D},o.a.createElement(w,{title:"Waypoint Options",icon_show:!0,content_show:r.show,dropdownClick:function(){return c("waypoints")}})),o.a.createElement(v,{content_show:r.show,style:{marginLeft:"0px"}},o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(S.a,null,"Mode")),o.a.createElement(j.a,null,o.a.createElement(S.a,null,"Traffic"))),o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(w,{title:"Car",checkbox_active:"car"===r.transport,checkBoxClick:function(){return a("waypoints","transport","car","waypoints")},checkbox_show:!0}),o.a.createElement(w,{title:"Pedestrian",checkbox_active:"pedestrian"===r.transport,checkBoxClick:function(){return a("waypoints","transport","pedestrian","waypoints")},checkbox_show:!0})),o.a.createElement(j.a,null,o.a.createElement(w,{title:"Enabled",checkbox_active:"enabled"===r.traffic,checkBoxClick:function(){return a("waypoints","traffic","enabled","waypoints")},checkbox_show:!0}),o.a.createElement(w,{title:"Disabled",checkbox_active:"enabled"!==r.traffic,checkBoxClick:function(){return a("waypoints","traffic","disabled","waypoints")},checkbox_show:!0})))))))},T=n(63),P=n(64),H=n(65),N=n(66),A=n(67),W=n(68),U=n(27),z=n.n(U),F={position:"absolute",top:"0px",left:"0px",background:"#fff",height:"100vh",width:"350px",overflowY:"auto",zIndex:"1000"},Z=function(e){return o.a.createElement("img",{src:z.a,style:{height:"30px"}})},G=function(e){return o.a.createElement("b",{style:{color:"#3a3e47",marginLeft:"15px",fontSize:"20px"}},e.text)},V=function(e){var t=e.mode,n=e.layers,a=e.changeMode,c=e.options,i=e.checkBoxClick,r=e.dropdownClick,l=e.onChangeIsolineRange,s=e.clickCheckboxParameter,u=e.clickOptionDropdown;return o.a.createElement(I.a,{style:F},o.a.createElement(T.a,{className:"w-100",color:"default",light:!0,expand:"md"},o.a.createElement(P.a,null,o.a.createElement(Z,null)),o.a.createElement(H.a,{className:"mr-auto",navbar:!0},o.a.createElement(N.a,null,o.a.createElement(G,{text:"Analytical tool"})))),o.a.createElement(A.a,{className:"w-100",style:{marginTop:"5px"}},o.a.createElement(W.a,{color:"light",onClick:function(){return a("analytics")},active:"analytics"===t},"Analytics"),o.a.createElement(W.a,{color:"light",onClick:function(){return a("options")},active:"options"===t},"Options")),"analytics"===t?o.a.createElement(M,{layers:n,checkBoxClick:i,dropdownClick:r}):o.a.createElement(L,{options:c,onChangeIsolineRange:l,clickCheckboxParameter:s,clickOptionDropdown:u}))},q={width:"400px",height:"50px",position:"absolute",top:"10px",right:"10px"},J={display:"flex",flexDirection:"row"},K={outline:"none"},Y={backgroundColor:"#fff",padding:"5px",marginTop:"3px",cursor:"pointer"},X={maxHeight:"500px",overflow:"auto"},Q=function(e){return o.a.createElement("div",{style:q},o.a.createElement("div",{style:J},o.a.createElement("input",{className:"form-control",style:K,placeholder:"Search",value:e.searchText,onChange:function(t){e.onChangeSearch(t.currentTarget.value)}})),o.a.createElement("div",{style:X},void 0!==e.suggestions?e.suggestions.map((function(t,n){return o.a.createElement("div",{style:Y,key:n,onClick:function(){return e.geocode(t.locationId)}},t.label)})):o.a.createElement("div",null)))},$=n(8),ee=n.n($),te="d94UCjhJ6sEzabRJjKV8Z5-w6Py99jqHQAB-uj6g6ks",ne="AGNjdAWKRUiLFDvPtnVM-AA",ae={german_hospitals:"v6fbBS5z",german_warehouses:"hoCxTKFb"},oe="rgba(0,128,0,.6)",ce="rgba(255,152,0,.6)",ie="rgba(255,0,0,.6)",re=function(e,t,n,a){var o=e.features.filter((function(e){return e.properties[t]===n}));return{title:n,group:t,tag:"".concat(t,"_").concat(n),count:o.length,show:!1,color:a,geojson:{type:"FeatureCollection",features:o}}},le=function(e){var t=[];return[{title:"ICU low care",group:"low_care"},{title:"ICU high care",group:"high_care"},{title:"ECMO",group:"ecmo"}].forEach((function(n){t.push({title:n.title,group:n.group,dropdown:!0,show:!1,layers:[re(e,n.group,"Available",oe),re(e,n.group,"Limited",ce),re(e,n.group,"Not available",ie)]})})),t},se=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={apikey:te,mode:"analytics",layers:[],suggestions:[],searchText:"",options:{isoline:{show:!0,range:300,type:"time",transport:"car",traffic:"enabled",geometry:[],marker:{lat:null,lng:null}},waypoints:{show:!0,transport:"car",traffic:"enabled",markers:[],geometry:[]}}},a.changeMode=a.changeMode.bind(Object(u.a)(a)),a.checkBoxClick=a.checkBoxClick.bind(Object(u.a)(a)),a.dropdownClick=a.dropdownClick.bind(Object(u.a)(a)),a.onChangeSearch=a.onChangeSearch.bind(Object(u.a)(a)),a.geocode=a.geocode.bind(Object(u.a)(a)),a.onChangeIsolineRange=a.onChangeIsolineRange.bind(Object(u.a)(a)),a.clickCheckboxParameter=a.clickCheckboxParameter.bind(Object(u.a)(a)),a.changeIsolineMarker=a.changeIsolineMarker.bind(Object(u.a)(a)),a.clearIsoline=a.clearIsoline.bind(Object(u.a)(a)),a.clickOptionDropdown=a.clickOptionDropdown.bind(Object(u.a)(a)),a.calculateRoute=a.calculateRoute.bind(Object(u.a)(a)),a.updateWaypoints=a.updateWaypoints.bind(Object(u.a)(a)),a.clearWaypoints=a.clearWaypoints.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getSpaceFeatures(ae.german_hospitals,"Hospitals","rgba(28, 184, 170, 0.6)",le),setInterval((function(){e.getSpaceFeatures(ae.german_hospitals,"Hospitals","rgba(28, 184, 170, 0.6)",le)}),36e5)}},{key:"getSpaceFeatures",value:function(e,t,n){var a=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c="https://xyz.api.here.com/hub/spaces/".concat(e,"/iterate?access_token=").concat(ne),i=this.state.layers;ee.a.get(c).then((function(e){if(o){var c=o(e.data);i.push({title:t,group:null,tag:t,show:!0,count:e.data.features.length,color:n,geojson:e.data}),c.forEach((function(e){return i.push(e)}))}else i.push({title:t,group:null,tag:t,show:!1,count:e.data.length,color:n,geojson:e.data});a.setState({layers:i})}),(function(e){console.log(e)}))}},{key:"changeMode",value:function(e){this.setState({mode:e})}},{key:"checkBoxClick",value:function(e,t,n){var a=this.state.layers;switch(n){case"layer":if(t){var o=a.find((function(e){return e.group===t})).layers.find((function(t){return t.tag===e}));a.find((function(e){return e.group===t})).layers.find((function(t){return t.tag===e})).show=!o.show}else{var c=a.find((function(t){return t.tag===e}));a.find((function(t){return t.tag===e})).show=!c.show}this.setState({layers:a});break;case"group":var i=a.find((function(e){return e.group===t}));a.find((function(e){return e.group===t})).show=!i.show,i.layers.forEach((function(e){e.show=i.show})),i.show&&a.filter((function(e){return e.group!==t&&null!==e.group})).forEach((function(e){e.show=!1,e.layers.forEach((function(e){return e.show=!1}))})),this.setState({layers:a})}}},{key:"dropdownClick",value:function(e){var t=this.state.layers,n=t.find((function(t){return t.group===e}));t.find((function(t){return t.group===e})).dropdown=!n.dropdown,this.setState({layers:t})}},{key:"geocode",value:function(e){var t=this,n="https://geocoder.ls.hereapi.com/6.2/geocode.json"+"?locationid=".concat(e,"&apikey=").concat(te);ee.a.get(n).then((function(e){var n=e.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude,a=e.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude;window.map.setCenter({lat:n,lng:a}),window.map.setZoom(17),t.setState({searchText:"",geocoderResults:[],suggestions:[]})}))}},{key:"onChangeSearch",value:function(e){var t=this;this.setState({searchText:e});var n="https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json"+"?query=".concat(e)+"&apikey=".concat(te)+"&maxresults=5";ee.a.get(n).then((function(e){t.setState({suggestions:e.data.suggestions})}))}},{key:"onChangeIsolineRange",value:function(e){var t=this.state.options;t.isoline.range=e,this.setState({options:t}),this.calculateIsoline(t.isoline.marker)}},{key:"clickCheckboxParameter",value:function(e,t,n,a){var o=this.state.options;o[e][t]=n,this.setState({options:o}),"isoline"===a?this.calculateIsoline(o.isoline.marker):"waypoints"===a&&this.calculateRoute()}},{key:"changeIsolineMarker",value:function(e){this.calculateIsoline(e);var t=this.state.options;t.isoline.marker={lat:e.lat,lng:e.lng},this.setState({options:t})}},{key:"calculateIsoline",value:function(e){var t=this,n=this.state.options,a=n.isoline,o="https://isoline.route.ls.hereapi.com/routing/7.2/calculateisoline.json?"+"apikey=".concat(te,"&mode=fastest;").concat(a.transport,";traffic:").concat(a.traffic,"&rangetype=").concat(a.type,"&range=").concat(a.range,"&start=geo!").concat(e.lat,",").concat(e.lng);ee.a.get(o).then((function(e){null!==e.data.response&&(n.isoline.geometry=e.data.response.isoline[0].component[0].shape,t.setState({options:n}))}),(function(e){console.log(e)}))}},{key:"clearIsoline",value:function(){var e=this.state.options;e.isoline.geometry=[],e.isoline.marker={lat:null,lng:null},this.setState({options:e})}},{key:"clickOptionDropdown",value:function(e){var t=this.state.options;t[e].show=!t[e].show,this.setState({options:t})}},{key:"updateWaypoints",value:function(e){var t=this.state.options;t.waypoints.markers=[].concat(Object(r.a)(t.waypoints.markers),[e]),this.setState({options:t})}},{key:"clearWaypoints",value:function(){var e=this.state.options;e.waypoints.geometry=[],e.waypoints.markers=[],this.setState({options:e})}},{key:"calculateRoute",value:function(){var e=this,t=this.state.options,n=t.waypoints,a=n.markers.map((function(e,t){return 0===t?"start=".concat(t,";").concat(e.lat,",").concat(e.lng):t===n.markers.length-1?"end=".concat(t,";").concat(e.lat,",").concat(e.lng):"destination".concat(t,"=").concat(t,";").concat(e.lat,",").concat(e.lng)})).join("&"),o="https://wse.ls.hereapi.com/2/findsequence.json?"+"apikey=".concat(te,"&mode=fastest;").concat(n.transport,"&")+a;ee.a.get(o).then((function(a){var o=a.data.results[0].waypoints.map((function(e,t){return"waypoint".concat(t,"=geo!").concat(e.lat,",").concat(e.lng)})).join("&"),c="https://route.ls.hereapi.com/routing/7.2/calculateroute.json?"+"apikey=".concat(te,"&mode=fastest;").concat(n.transport,";traffic:").concat(n.traffic,"&routeattributes=sh&")+o;ee.a.get(c).then((function(n){var a=n.data.response.route[0].shape.map((function(e,t){return e.split(",").map(Number)}));t.waypoints.geometry=a,e.setState({options:t})}))}),(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.apikey,n=e.layers,a=e.analytics,c=e.mode,i=e.options,r=e.searchText,l=e.suggestions;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{apikey:t,layers:n,options:i,clearIsoline:this.clearIsoline,changeIsolineMarker:this.changeIsolineMarker,updateWaypoints:this.updateWaypoints,clearWaypoints:this.clearWaypoints,calculateRoute:this.calculateRoute}),o.a.createElement(V,{analytics:a,mode:c,layers:n,options:i,changeMode:this.changeMode,checkBoxClick:this.checkBoxClick,dropdownClick:this.dropdownClick,onChangeIsolineRange:this.onChangeIsolineRange,clickCheckboxParameter:this.clickCheckboxParameter,clickOptionDropdown:this.clickOptionDropdown}),o.a.createElement(Q,{suggestions:l,searchText:r,onChangeSearch:this.onChangeSearch,geocode:this.geocode}))}}]),n}(a.Component);n(54),n(55);i.a.render(o.a.createElement(se,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c73209d0.chunk.js.map