// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppComponent from "./app";

// Variables
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Rendering Whole App
// In Root Element
root.render(<AppComponent />);
