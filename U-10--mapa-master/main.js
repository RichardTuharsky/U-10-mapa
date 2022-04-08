const apiKey = 'pk.eyJ1IjoicmljaXRlZTAxMDAiLCJhIjoiY2wxa3kybnFjMDVmajNla3FtMG9xOTcyNyJ9.HjjM0x8CxrlI7PSK4iQB5Q';

const map = L.map('map').setView([48.724329, 19.121683], 10);

//api pre mapu
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map); 


//pridavanie ukazovatela
const marker = L.marker([48.71234514529288, 19.05990215131236]).addTo(map);

//pridavanie popisu 
let template = `
<h2>Malachovský vodopád<h2>
<h4>Kúsok od obce Malachov, v bezprostrednej blízkosti Banskej Bystrice sa rozkladá krásna Malachovská tiesňava, v ktorej zurčí trblietavý Malachovský vodopád. Malachovská tiesňava má len 200 metrov, no na každom kúsku ponúka dych vyrážajúcu prírodnú krásu popretkávanú meandrami tunajšieho potoka.<h4>

<img width = "150" height = "150" src = "vodopad.jpg"/>

`
marker.bindPopup(template);

const marker1 = L.marker([48.73269224113967, 19.13131053693181]).addTo(map);

let template1 = `
<h2>Atletický štadión SNP DUKLA<h2>
<h4>Štadión SNP je atletický a futbalový štadión[2] nachádzajúci sa v Banskej Bystrici, na ktorom hrá svoje domáce zápasy FK Dukla Banská Bystrica. Má kapacitu 7 900 divákov, pričom od rekonštrukcie ukončenej v roku 2021 sú všetky miesta na sedenie. Nachádza sa na okraji sídliska Fončorda blízko kúpaliska, bazénu a športovej haly. Riaditeľom štadióna je Ivan Šimko.<h4>

<img width = "150" height = "150" src = "dukla.jpg"/>
`
marker1.bindPopup(template1);


const marker2 = L.marker([48.74192946586369, 19.123179695785524]).addTo(map);

let template2 = `
<h2>Fakulta prírodných vied UMB<h2>
<h4>Aplikovaná informatika a vývoj softvéru<h4>

<img width = "300" height = "200" src = "umb.jpg"/>
`
marker2.bindPopup(template2);

const marker3 = L.marker([48.752850314757765, 19.186845603331857]).addTo(map);

let template3 = `
<h2>Slovenské múzeum máp<h2>
<h4>Múzeum vám predstavuje nielen bohatú minulosť a výnimočnú súčasnosť kartografie na slovenskom území, ale aj tradičné i moderné postupy a technológie, ktorými sa mapy vytvárajú.<h4>

<img width = "250" height = "150" src = "muzeum.jpg"/>
`
marker3.bindPopup(template3);

const marker4 = L.marker([48.71335392600273, 19.241554937299128]).addTo(map);

let template4 = `
<h2>Autocross Arena Môlča<h2>
<h3>Pretekárska dráha<h3>


<img width = "250" height = "150" src = "arena.jpg"/>

`
marker4.bindPopup(template4);
