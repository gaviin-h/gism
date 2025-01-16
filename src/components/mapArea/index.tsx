import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer"
import Basemap from "@arcgis/core/Basemap"
import { useEffect, useRef } from "react";


export default function MapArea(){

    const viewDivRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (viewDivRef.current) {
            const mapBaseLayer = new VectorTileLayer({
                url: "https://arcgis.com/sharing/rest/content/items/b5676525747f499687f12746441101ef/resources/styles/root.json"
            });
            
            const customBasemap = new Basemap({
                baseLayers: [mapBaseLayer],
                title: "Terrain"
            });
            
            // const map = new Map({
            //     basemap: customBasemap
            // });
          const map = new Map({
            basemap: 'topo-vector',
          });
    
          const view = new MapView({
            container: viewDivRef.current,
            map: map,
            zoom: 4, 
            center: [15, 65],
          });
    
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