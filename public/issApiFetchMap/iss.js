        //Creation de la map
        const mymap = L.map('issmap').setView([0, 0], 6); //Creation de la map avec leaflet
        const attribution = '' //Copyright   /*OPENSTREET THING*/
        const tile_url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' //Image de la map                                     /*OPENSTREET THING*/
        const tiles = L.tileLayer(tile_url, {attribution})                                                                          /*OPENSTREET THING*/
        tiles.addTo(mymap) 
        
        //Creation de l'icone/marker
        var myIcon = L.icon({ 
            iconUrl: 'iss200.png',
            iconSize: [50, 32],
            iconAnchor: [25, 16]
        });
        
        const marker = L.marker([0,0], {icon : myIcon}).addTo(mymap); //Creation d'un marker et on lui donne l'icone qu'on a creé


        //Fonction qui recuperer et envoie les donnée dans les bonne variables 
        const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

        async function getISS(){
            const response = await fetch(api_url)
            const data = await response.json()
            
            const {latitude, longitude} = data

            mymap.setView([latitude, longitude])
            marker.setLatLng([latitude, longitude]) //On donne au marker la latitude et la longitude 

            document.getElementById('lat').textContent = latitude;
            document.getElementById('lon').textContent = longitude;
            console.log('REQUESTS')
        }

        setInterval(getISS, 2000)
        // getISS()
