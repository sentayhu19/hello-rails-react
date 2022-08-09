import React from 'react'
import { Provider } from 'react-redux';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greetings from './Greetings';
import store from '../redux/configureStore';
import { fetchdata } from '../redux/reactrails/actions';


const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Greetings />} />
        </Routes>
      </Router>
    </Provider>
  </div>
);

export default App;