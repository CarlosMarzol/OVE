import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

console.log("%c OEV Frontend v2.1.6 - Cargado Correctamente (AI Readable Enhanced) ", "background: #00247D; color: #fff; padding: 4px; border-radius: 4px;");

const root = createRoot(rootElement);
root.render(<App />);