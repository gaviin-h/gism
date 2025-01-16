import React from 'react';
import ReactDOM from 'react-dom/client';
import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';

import Header from './components/Header'
import MapArea from './components/mapArea'


const App = () => {
 

  return (
    <React.StrictMode>
    <div style={{backgroundColor: "rgb(192, 192, 180)", minHeight: '98vh'}}>
      <Header />
      <MapArea />
    </div>
    </React.StrictMode>
    
  );
};
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}