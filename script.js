mapboxgl.accessToken = 'pk.eyJ1IjoiYmZyaWxvdCIsImEiOiJjazl0YWtibXoxYWxqM2Ztb21raWJmdGxwIn0.abwagYO3dOE5dN9-8-u_Bg';
var map = new mapboxgl.Map({
    container: 'map',
    center: [-81.10099990,25.191661],
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom:7.75
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(),'bottom-right'); 

map.on('load', function() {
    map.addSource('point', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [-81.79813760,24.564677
    ]
    },
    'properties':{
        'title':'Key West', 
        'icon': 'bar'
    }
    }
]
    }
   });
map.addLayer({
    'id':'points',
    'type':'symbol',
    'source':'point',
    'layout': {
    'icon-image': ['concat',['get', 'icon'], '-15', ],
    'text-field': ['get', 'title'],
    'text-font':['Open Sans Bold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top',
}
})})

