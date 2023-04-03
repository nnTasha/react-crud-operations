import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ItemsProvider } from './Context/ItemsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </React.StrictMode>
);
