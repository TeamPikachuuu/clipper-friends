import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);
