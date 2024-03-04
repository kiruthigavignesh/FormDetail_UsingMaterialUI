import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Form from './components/Form1';
import AdditionalForm from './components/AdditionalDetails';

 import "./App.css";

import NextFormPage from './components/Details';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div>
          <Routes>

             <Route path="/" element={<Form />} />

          <Route path="/nextform" element={<AdditionalForm />} />
          
            <Route path="/details" element={<NextFormPage/>} />

          </Routes>

      </div>
    </BrowserRouter>

    </Provider>
  );
};

export default App;
