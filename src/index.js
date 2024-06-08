import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// Register the service worker for offline capabilities and faster loading.
// Change unregister() to register() to enable.
serviceWorker.unregister();
