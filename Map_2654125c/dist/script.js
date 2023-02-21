mapboxgl.accessToken = 'pk.eyJ1IjoidWVpbyIsImEiOiJjbGNwNzg5bngyM3hzM3ZtdG93MHVtaTQxIn0.jFqh8l4H4b_4CZ8yvoA6AA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ueio/cleag93f7000t01pkufr5135q',
        center: [-0.133, 51.5072],
        zoom: 12.1
    });

map.on('load', () => {
  
map.loadImage(
'https://img.icons8.com/tiny-color/16/null/university.png',
(error, image) => {
if (error) throw error;
map.addImage('museum_icon',image);
  
  map.addSource('Museum', {
    type: 'vector',
    url: 'mapbox://ueio.cleb6qz3z04mc27lg3x1p0h3z-68u9u'
  });
  map.addLayer({
    'id': 'Museum',
    'type': 'symbol',
    'source': 'Museum',
    'layout': {
      'icon-image': 'museum_icon', 
      'icon-size': 1.1,
    },
    'source-layer': 'museum'
  });
  
  map.loadImage(
'https://img.icons8.com/tiny-color/16/null/paint-palette.png',
(error, image) => {
if (error) throw error;
map.addImage('gallery_icon',image);
  
  map.addSource('Gallery', {
            type: 'vector',
            url: 'mapbox://ueio.cleb6qmnk0kr222s4dyjfdx26-9x0y8'
        });
        map.addLayer({
            'id': 'Gallery',
            'type': 'symbol',
            'source': 'Gallery',
            'source-layer': 'galleries',
            'layout': {
              'icon-image':'gallery_icon', 
      'icon-size': 1.1,
            },
        });

  map.loadImage(
'https://img.icons8.com/tiny-color/16/null/bookmark.png',
(error, image) => {
if (error) throw error;
map.addImage('library_icon',image);
  
  map.addSource('Library', {
            type: 'vector',
            url: 'mapbox://ueio.cleb6qshn0kre21p7fkirxm0n-4v0ig'
        });
        map.addLayer({
            'id': 'Library',
            'type': 'symbol',
            'source': 'Library',
            'source-layer': 'libraries',
            'layout': {
              'icon-image':'library_icon', 
      'icon-size': 1.1,
            },
        });
  
map.loadImage(
'https://img.icons8.com/tiny-color/16/null/beer.png',
(error, image) => {
if (error) throw error;
map.addImage('pub_icon',image);
  
  map.addSource('Pub', {
            type: 'vector',
            url: 'mapbox://ueio.cleb6rb9s0k5a27qklaf15fq1-2lf5i'
        });
  map.addLayer({
            'id': 'Pub',
            'type': 'symbol',
            'source': 'Pub',
            'source-layer': 'pub',
            'layout': {
              'icon-image':'pub_icon', 
      'icon-size': 1.1,
                 'icon-allow-overlap':false,
            },
        });
  
  map.loadImage(
'https://img.icons8.com/tiny-color/16/null/film-reel.png',
(error, image) => {
if (error) throw error;
map.addImage('theatre_icon',image);
  
  map.addSource('Theatre', {
            type: 'vector',
            url: 'mapbox://ueio.cleb6rhmk02kf21s8fvhg607h-58jdo'
        });
   map.addLayer({
            'id': 'Theatre',
            'type': 'symbol',
            'source': 'Theatre',
            'source-layer': 'theatre',
            'layout': {
              'icon-image':'theatre_icon', 
      'icon-size': 1.1,
            },
        });
  
      map.loadImage(
'https://img.icons8.com/tiny-color/16/null/rock-music.png',
(error, image) => {
if (error) throw error;
map.addImage('musicvenue_icon',image);
  
  map.addSource('Music Venue', {
            type: 'vector',
            url: 'mapbox://ueio.cleb6r4gv04jn28mvvsrt03lv-9k2h2'
        });
 map.addLayer({
            'id': 'Music Venue',
            'type': 'symbol',
            'source': 'Music Venue',
            'source-layer': 'musicvenue',
            'layout': {
                            'icon-image':'musicvenue_icon', 
      'icon-size': 1.1,
      'icon-allow-overlap':false,
            },
        }); 
  
    });

    map.on('idle', () => {
        
        if (!map.getLayer('Gallery') || !map.getLayer('Museum')||!map.getLayer('Library')||!map.getLayer('Pub')||!map.getLayer('Theatre')||!map.getLayer('Music Venue')) {
            return;
        }

        const toggleableLayerIds = ['Gallery', 'Museum','Library','Pub','Theatre','Music Venue'];

        for (const id of toggleableLayerIds) {
 
            if (document.getElementById(id)) {
                continue;
            }

            const link = document.createElement('a');
            link.id = id;
            link.href = '#';
            link.textContent = id;
            link.className = 'active';
            link.onclick = function (e) {
                const clickedLayer = this.textContent;
                e.preventDefault();
                e.stopPropagation();

                const visibility = map.getLayoutProperty(
                    clickedLayer,
                    'visibility'
                );

                if (visibility === 'visible') {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                    this.className = '';
                } else {
                    this.className = 'active';
                    map.setLayoutProperty(
                        clickedLayer,
                        'visibility',
                        'visible'
                    );
                }
            };

            const layers = document.getElementById('menu');
            layers.appendChild(link);
        }
    });
});
});
});
});
});
  
  const layers = ["Planning Central Activity Area in 2009","Built-up Central Activity Area in 2019"];
  const colors = ["#550202","#fdec7c"];
  const legend = document.getElementById("legend");
  layers.forEach((layer, i) => {
const color = colors[i];
const key = document.createElement("div");
   if (i < 1 )  {
      key.style.color = " #fdf9f1";  
}
key.className = "legend-key";
key.style.backgroundColor = color;
key.innerHTML = `${layer}`;
legend.appendChild(key);
});

  
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken, 
    mapboxgl: mapboxgl, 
    marker: false, 
    placeholder: "Search for places in London", 
    proximity: {
      longitude: 55.8642,
      latitude: 4.2518
} // Coordinates of Glasgow center
  }); 
 map.addControl(geocoder, "top-left");
 map.addControl(new mapboxgl.NavigationControl(), "bottom-left",);
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    }),
    "bottom-left"
  );

map.on("click", (event) => {
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["allspot-clear"]
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

  const popup = new mapboxgl.Popup({ offset: [0, -15], className: "my-popup" })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<h1>${feature.properties.name}</h1>
      <p>${feature.properties.address1},${feature.properties.borough_name},${feature.properties.ward_2018_code}</p>`
    )
    .addTo(map);
});
  
  
});