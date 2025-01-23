import React from 'react';
import ReactDOM from 'react-dom/client';
import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';

import Header from './components/Header'
import MapArea from './components/mapArea'


const App = () => {
 

  return (
    <div >
      <Header />
      <MapArea />
    </div>
    
  );
};
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}