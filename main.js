const API_KEY =
  "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR";

require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/BasemapGallery",
], function (esriConfig, Map, MapView, BasemapGallery) {
  esriConfig.apikey = API_KEY;

  const map = new Map({
    basemap: "osm-standard",
  });

  const view = new MapView({
    map: map,
    center: [36.81667, -1.28333],
    container: "Map",
    zoom: 10,
  });

  const basemapGallery = new BasemapGallery({
    view: view,
    container: "gallery",
    //disabled: true,
    //visible: false,
    //activeBasemap: "arcgis-streets-night",

    source: {
      query: {
        title: "World Basemaps for Developers",
      },
    },
    /*
      source: {
        portal:"https://www.myportal.arcgis.com"
    } 
    */
    //source: [Basemap.fromId("topo-vector"), Basemap.fromId("hybrid")], //localBasemapSource
  });

  view.ui.add(basemapGallery, "top-right");
});
