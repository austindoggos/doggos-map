'use strict';

// populate copyright in footer with current year
const copyrightYear = document.querySelector('.copyright-year');
const now = new Date();
copyrightYear.innerHTML = now.getFullYear();
var ausPos = L.latLng(30.2672, -97.7431);
var mymap = L.map('mapid').setView(ausPos, 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY3JpdCIsImEiOiJ5bzdPLUpvIn0.dKXh2xDdEvEzJ1HFgddG4g'
}).addTo(mymap);

var i = 0
while(i < parks.length) {
    var newPark = L.marker([parks[i].y,parks[i].x]).addTo(mymap);
    newPark.bindPopup(parks[i].Name);
    i++;

}

/*
var bartonC = L.marker([30.26408,-97.76908]).addTo(mymap);
bartonC.bindPopup("<b>Barton Creek</b>");

var norwoodE = L.marker([30.24929,-97.7365]).addTo(mymap);
norwoodE.bindPopup("<b>Norwood Estate Dog Park</b>");

var onionC = L.marker([30.16092,-97.75724]).addTo(mymap);
onionC.bindPopup("<b>Onion Creek Metropolitan Park</b>");

var muellerL = L.marker([30.29676,-97.70585]).addTo(mymap);
muellerL.bindPopup("<b>Mueller Lake Park</b>");

var triangleC = L.marker([30.3145,-97.73351]).addTo(mymap);
triangleC.bindPopup("<b>Triangle Commons Park</b>");

var brentwoodN = L.marker([30.34138,-97.73115]).addTo(mymap);
brentwoodN.bindPopup("<b>Brentwood Neighborhood Park</b>");

var bullC = L.marker([30.36865,-97.78446]).addTo(mymap);
bullC.bindPopup("<b>Bull Creek District Park</b>");

var shipeN = L.marker([30.3074,-97.72738]).addTo(mymap);
shipeN.bindPopup("<b>Shipe Neighborhood Park</b>");

var ladybirdL = L.marker([30.26763,-97.75841]).addTo(mymap);
ladybirdL.bindPopup("<b>Ladybird Lake-Lamar Beach Metro Park</b>");

var peaceP = L.marker([30.24529,-97.72322]).addTo(mymap);
peaceP.bindPopup("<b>Peace Point at Town Lake Metropolitan Park</b>");

var peaseD = L.marker([30.28141,-97.75166]).addTo(mymap);
peaseD.bindPopup("<b>Pease District Park</b>");

var sparkyP = L.marker([30.29912,-97.73212]).addTo(mymap);
sparkyP.bindPopup("<b>Sparky Pocket Park</b>");

var millsP = L.marker([30.45047,-97.68005]).addTo(mymap);
millsP.bindPopup("<b>Mills Pond</b>");

var balconesD = L.marker([30.41315,-97.717]).addTo(mymap);
balconesD.bindPopup("<b>Balcones District Park</b>");

var harrisR = L.marker([30.41977,-97.64391]).addTo(mymap);
harrisR.bindPopup("<b>Harris Ridge Dog Park</b>");

var cedarB = L.marker([30.5199,-97.86937]).addTo(mymap);
cedarB.bindPopup("<b>Cedar Bark Park</b>");

var brushyC = L.marker([30.50822,-97.77223]).addTo(mymap);
brushyC.bindPopup("<b>Brushy Creek Lake Park</b>");

var adamsH = L.marker([30.29456,-97.73925]).addTo(mymap);
adamsH.bindPopup("<b>Adams-Hemphill Neighborhood Park</b>");

var redB = L.marker([30.29083, -97.7868]).addTo(mymap);
redB.bindPopup("<b>Red Bud Isle</b>");

var westA = L.marker([30.27651,-97.75798]).addTo(mymap);
westA.bindPopup("<b>West Austin Dog Park</b>");

var zilkerM = L.marker([30.26694,-97.77288]).addTo(mymap);
zilkerM.bindPopup("<b>Zilker Metropolitan Park</b>");

var farW = L.marker([30.35207,-97.74713]).addTo(mymap);
farW.bindPopup("<b>Far West Dog Park</b>");

var auditoriumS = L.marker([30.26351,-97.75312]).addTo(mymap);
auditoriumS.bindPopup("<b>Auditorium Shores Dog Park</b>");

var walnutC = L.marker([30.40011,-97.68023]).addTo(mymap);
walnutC.bindPopup("<b>Metropolitan Park at Walnut Creek</b>");

var maryM = L.marker([30.1672,-97.80161]).addTo(mymap);
maryM.bindPopup("<b>Mary Moore Searight Metro Park</b>");

var yardB = L.marker([30.34307,-97.73913]).addTo(mymap);
yardB.bindPopup("<b>Yard Bar</b>");

var shoalC = L.marker([30.29217,-97.75062]).addTo(mymap);
shoalC.bindPopup("<b>Shoal Creek Greenbelt</b>");

var royG = L.marker([30.24445,-97.70443]).addTo(mymap);
royG.bindPopup("<b>Roy G Guerrero Colorado River Metro Park</b>");
*/