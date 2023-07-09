import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './App';
import { StoreContext } from './context/StoreContext';
import { WikiStore } from './store/WikiStore';
import { InputStore } from './store/InputStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreContext.Provider value = {{wikiStore: new WikiStore(), inputStore: new InputStore()}}>
    <App />
  </StoreContext.Provider>
);
