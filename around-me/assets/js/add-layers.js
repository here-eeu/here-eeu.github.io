// adding data to the map

// for Layer 1 Historical places//

// create layer group
let group1 = new H.map.Group();

// parse geojson data
let loadData1 = async () => {
    let url = "https://xyz.api.here.com/hub/spaces/5KYnxfMJ/iterate?access_token=AMbNx0UkQwiesKuxU-XafQA"
    let response = await fetch(url)
    let parsed = await response.json()

    let { features } = parsed
    museumIcon= new H.map.Icon("assets/js/icons/museum.png", {size:{h:20,w:20}});
    // create marker for every point 
    features.forEach (feature => {
        let { coordinates } = feature.geometry
        let marker = new H.map.Marker({lat: coordinates[1],lng: coordinates[0]}, {icon:museumIcon});
        
        // create info bubble for every point
        marker.setData(feature.properties);
        marker.addEventListener('tap', (evt) => {
            const infoBubble1 = new H.ui.InfoBubble(evt.target.getGeometry(), {
                content: `<div class="info-bubble-label" id="info-bubble-label"> 
                Arabic Name: ${evt.target.data.Name_1}<hr />
                English Name: ${evt.target.data.Name_2}<hr />
                Tel: ${evt.target.data.Contact}<hr />
                Facility: ${evt.target.data.Facility}</div >`
            });

            // remove bubbles 
            ui.getBubbles().forEach(bub => ui.removeBubble(bub));
            ui.addBubble(infoBubble1);
        }, false);

        
        // add every marker to layer group
        group1.addObject(marker)
    })
    // add the group to the map
    map.addObject(group1)
}
loadData1()


// for Layer 2 information places //

// create layer group
let group2 = new H.map.Group();

// parse geojson data
let loadData2 = async () => {
    let url = "https://xyz.api.here.com/hub/spaces/PWPqRWyW/iterate?access_token=AMbNx0UkQwiesKuxU-XafQA"
    let response = await fetch(url)
    let parsed = await response.json()

    let { features } = parsed
    infoIcon = new H.map.Icon("assets/js/icons/info.png", {size:{h:20,w:20}});
    // create marker for every point 
    features.forEach (feature => {
        let { coordinates } = feature.geometry
        let marker = new H.map.Marker({lat: coordinates[1],lng: coordinates[0]}, {icon: infoIcon});
        
        // create info bubble for every point
        marker.setData(feature.properties);
        marker.addEventListener('tap', (evt) => {
            const infoBubble1 = new H.ui.InfoBubble(evt.target.getGeometry(), {
                content: `<div class="info-bubble-label" id="info-bubble-label"> 
                Arabic Name: ${evt.target.data.Name_1}<hr />
                English Name: ${evt.target.data.Name_2}<hr />
                Tel: ${evt.target.data.Contact}<hr />
                Facility: ${evt.target.data.Facility}</div >`
            });

            // remove bubbles 
            ui.getBubbles().forEach(bub => ui.removeBubble(bub));
            ui.addBubble(infoBubble1);
        }, false);

        // add every marker to layer group
        group2.addObject(marker)
    })
    // add the group to the map
    map.addObject(group2)
}
loadData2()


// for Layer 3 hotel places //

// create layer group
let group3 = new H.map.Group();

// parse geojson data
let loadData3 = async () => {
    let url = "https://xyz.api.here.com/hub/spaces/TE6LDRYg/iterate?access_token=AMbNx0UkQwiesKuxU-XafQA"
    let response = await fetch(url)
    let parsed = await response.json()

    let { features } = parsed
    parkIcon = new H.map.Icon("assets/js/icons/hotel.png", {size:{h:20,w:20}});
    // create marker for every point 
    features.forEach (feature => {
        let { coordinates } = feature.geometry
        let marker = new H.map.Marker({lat: coordinates[1],lng: coordinates[0]}, {icon: parkIcon});
        
        // create info bubble for every point
        marker.setData(feature.properties);
        marker.addEventListener('tap', (evt) => {

            const infoBubble1 = new H.ui.InfoBubble(evt.target.getGeometry(), {

                content: `<div class="info-bubble-label" id="info-bubble-label"> 
                Arabic Name: ${evt.target.data.Name_1}<hr />
                English Name: ${evt.target.data.Name_2}<hr />
                Tel: ${evt.target.data.Contact}<hr />
                Facility: ${evt.target.data.Facility}</div >`
            });

            // remove bubbles 
            ui.getBubbles().forEach(bub => ui.removeBubble(bub));
            ui.addBubble(infoBubble1);
        }, false);

        // add every marker to layer group
        group3.addObject(marker)
    })
    // add the group to the map
    map.addObject(group3)
}
loadData3()


// for Layer 4 finance services //

// create layer group
let group4 = new H.map.Group();

// parse geojson data
let loadData4 = async () => {
    let url = "https://xyz.api.here.com/hub/spaces/KMNHzoP0/iterate?access_token=AMbNx0UkQwiesKuxU-XafQA"
    let response = await fetch(url)
    let parsed = await response.json()

    let { features } = parsed
    financeIcon = new H.map.Icon("assets/js/icons/bank.png", {size:{h:20,w:20}});
    // create marker for every point 
    features.forEach (feature => {
        let { coordinates } = feature.geometry
        let marker = new H.map.Marker({lat: coordinates[1],lng: coordinates[0]}, {icon: financeIcon});
        
        // create info bubble for every point
        marker.setData(feature.properties);
        marker.addEventListener('tap', (evt) => {
            const infoBubble1 = new H.ui.InfoBubble(evt.target.getGeometry(), {
                content: `<div class="info-bubble-label" id="info-bubble-label"> 
                Arabic Name: ${evt.target.data.Name_1}<hr />
                English Name: ${evt.target.data.Name_2}<hr />
                Tel: ${evt.target.data.Contact}<hr />
                Facility: ${evt.target.data.Facility}</div >`
            });

            // remove bubbles 
            ui.getBubbles().forEach(bub => ui.removeBubble(bub));
            ui.addBubble(infoBubble1);
        }, false);

        // add every marker to layer group
        group4.addObject(marker)
    })
    // add the group to the map
    map.addObject(group4)
}
loadData4()

// for Layer 5 health services //

// create layer group
let group5 = new H.map.Group();

// parse geojson data
let loadData5 = async () => {
    let url = "https://xyz.api.here.com/hub/spaces/FafYMJDH/iterate?access_token=AMbNx0UkQwiesKuxU-XafQA"
    let response = await fetch(url)
    let parsed = await response.json()

    let { features } = parsed
    healthIcon = new H.map.Icon("assets/js/icons/hospital.png", {size:{h:20,w:20}});
    // create marker for every point 
    features.forEach (feature => {
        let { coordinates } = feature.geometry
        let marker = new H.map.Marker({lat: coordinates[1],lng: coordinates[0]}, {icon: healthIcon});
        
        // create info bubble for every point
        marker.setData(feature.properties);
        marker.addEventListener('tap', (evt) => {
            const infoBubble1 = new H.ui.InfoBubble(evt.target.getGeometry(), {
                content: `<div class="info-bubble-label" id="info-bubble-label"> 
                Arabic Name: ${evt.target.data.Name_1}<hr />
                English Name: ${evt.target.data.Name_2}<hr />
                Tel: ${evt.target.data.Contact}<hr />
                Facility: ${evt.target.data.Facility}</div >`
            });

            // remove bubbles 
            ui.getBubbles().forEach(bub => ui.removeBubble(bub));
            ui.addBubble(infoBubble1);
        }, false);

        // add every marker to layer group
        group5.addObject(marker)
    })
    // add the group to the map
    map.addObject(group5)
}
loadData5()


// for Layer 6 entertainment sevices //

// create layer group
let group6 = new H.map.Group();

// parse geojson data
let loadData6 = async () => {
    let url = "https://xyz.api.here.com/hub/spaces/7pvVUoph/iterate?access_token=AMbNx0UkQwiesKuxU-XafQA"
    let response = await fetch(url)
    let parsed = await response.json()

    let { features } = parsed
    entertainmentIcon = new H.map.Icon("assets/js/icons/glasses.png", {size:{h:20,w:20}});
    // create marker for every point 
    features.forEach (feature => {
        let { coordinates } = feature.geometry
        let marker = new H.map.Marker({lat: coordinates[1],lng: coordinates[0]}, {icon: entertainmentIcon});
        
        // create info bubble for every point
        marker.setData(feature.properties);
        marker.addEventListener('tap', (evt) => {
            const infoBubble1 = new H.ui.InfoBubble(evt.target.getGeometry(), {
                content: `<div class="info-bubble-label" id="info-bubble-label"> 
                Arabic Name: ${evt.target.data.Name_1}<hr />
                English Name: ${evt.target.data.Name_2}<hr />
                Tel: ${evt.target.data.Contact}<hr />
                Facility: ${evt.target.data.Facility}</div >`
            });

            // remove bubbles 
            ui.getBubbles().forEach(bub => ui.removeBubble(bub));
            ui.addBubble(infoBubble1);
        }, false);

        // add every marker to layer group
        group6.addObject(marker)
    })
    // add the group to the map
    map.addObject(group6)
}
loadData6()


// for Layer 7 shopping services //

// create layer group
let group7 = new H.map.Group();

// parse geojson data
let loadData7 = async () => {
    let url = "https://xyz.api.here.com/hub/spaces/UDP2Zxm2/iterate?access_token=AMbNx0UkQwiesKuxU-XafQA"
    let response = await fetch(url)
    let parsed = await response.json()

    let { features } = parsed
    shoppingIcon = new H.map.Icon("assets/js/icons/buying.png", {size:{h:20,w:20}})
    // create marker for every point 
    features.forEach (feature => {
        let { coordinates } = feature.geometry
        let marker = new H.map.Marker({lat: coordinates[1],lng: coordinates[0]}, {icon: shoppingIcon});
        
        // create info bubble for every point
        marker.setData(feature.properties);
        marker.addEventListener('tap', (evt) => {
            const infoBubble1 = new H.ui.InfoBubble(evt.target.getGeometry(), {
                content: `<div class="info-bubble-label" id="info-bubble-label"> 
                Arabic Name: ${evt.target.data.Name_1}<hr />
                English Name: ${evt.target.data.Name_2}<hr />
                Tel: ${evt.target.data.Contact}<hr />
                Facility: ${evt.target.data.Facility}</div >`
            });

            // remove bubbles 
            ui.getBubbles().forEach(bub => ui.removeBubble(bub));
            ui.addBubble(infoBubble1);
        }, false);

        // add every marker to layer group
        group7.addObject(marker)
    })
    // add the group to the map
    map.addObject(group7)
}
loadData7()

// for Layer 8 transportation services //

// create layer group
let group8 = new H.map.Group();

// parse geojson data
let loadData8 = async () => {
    let url = "https://xyz.api.here.com/hub/spaces/N2HV1r7K/iterate?access_token=AMbNx0UkQwiesKuxU-XafQA"
    let response = await fetch(url)
    let parsed = await response.json()

    let { features } = parsed
    transportationIcon = new H.map.Icon("assets/js/icons/bus.png", {size:{h:20,w:20}})
    // create marker for every point 
    features.forEach (feature => {
        let { coordinates } = feature.geometry
        let marker = new H.map.Marker({lat: coordinates[1],lng: coordinates[0]}, {icon: transportationIcon});
        
        // create info bubble for every point
        marker.setData(feature.properties);
        marker.addEventListener('tap', (evt) => {
            const infoBubble1 = new H.ui.InfoBubble(evt.target.getGeometry(), {
                content: `<div class="info-bubble-label" id="info-bubble-label"> 
                Arabic Name: ${evt.target.data.Name_1}<hr />
                English Name: ${evt.target.data.Name_2}<hr />
                Tel: ${evt.target.data.Contact}<hr />
                Facility: ${evt.target.data.Facility}</div >`
            });

            // remove bubbles 
            ui.getBubbles().forEach(bub => ui.removeBubble(bub));
            ui.addBubble(infoBubble1);
        }, false);

        // add every marker to layer group
        group8.addObject(marker)
    })
    // add the group to the map
    map.addObject(group8)
}
loadData8()

