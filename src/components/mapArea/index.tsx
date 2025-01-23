import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer"
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer"
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import Basemap from "@arcgis/core/Basemap"
import { useEffect, useRef } from "react";


export default function MapArea(){

    const viewDivRef = useRef<HTMLDivElement | null>(null);
    const getSimpleRenderer = (color: number[]) => {
      return new SimpleRenderer({
        type: "simple", // Simple renderer
        symbol: {
          // @ts-ignore
          type: "simple-marker", // Fill symbol for polygons
          color: color, // RGBA
          outline: {
            width: 1,
            color: [255, 255, 255],
          },
        },
      })
    }

    useEffect(() => {
        if (viewDivRef.current) {
            const mapBaseLayer = new VectorTileLayer({
                url: "https://arcgis.com/sharing/rest/content/items/b5676525747f499687f12746441101ef/resources/styles/root.json"
            });
            
            const customBasemap = new Basemap({
                baseLayers: [mapBaseLayer],
                title: "Terrain"
            });
            
            const map = new Map({
                basemap: customBasemap
            });
          // const map = new Map({
          //   basemap: 'topo-vector',
          // });
    
          const view = new MapView({
            container: viewDivRef.current,
            map: map,
            zoom: 5, 
            center: [113.9213, -0.7893],
          });

          //  GeoJSONLayer for the first file
    const gadm1Layer = new GeoJSONLayer({
      url: "http://localhost:8080/source_data/gadm41_IDN_1.json",
      title: "Administrative Regions Level 1",
      renderer: getSimpleRenderer([227, 139, 79, 0.8]),
    });

    //  GeoJSONLayer for the second file
    const gadm2Layer = new GeoJSONLayer({
      url: "http://localhost:8080/source_data/gadm41_IDN_2.json",
      title: "Administrative Regions Level 2",
      renderer: getSimpleRenderer([78, 168, 208, 0.8]),
    });

    // Add layers to the map
    map.addMany([gadm1Layer, gadm2Layer]);
    
        return () => {
          if (view) {
            view.destroy();
          }
        };
      }
    }, []);

    return (
        <div
      ref={viewDivRef}
      style={{
        minWidth: '80vw',
        minHeight: '80vh',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'grey',
      }}
    ></div>
    )
}