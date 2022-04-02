import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./redux/rootReducer";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const store = createStore(rootReducer, applyMiddleware(thunk))
 


 

 const rootElement = document.getElementById('root');
 if (!rootElement) throw new Error('Failed to find the root element');
 const root = ReactDOMClient.createRoot(rootElement);


 
 
root.render(
  <BrowserRouter>
<Provider store={store}>
  <App />
</Provider>
</BrowserRouter>


,)

// ReactDOM.render(
    
//   document.getElementById('root')
// );