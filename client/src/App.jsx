import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  );
}

export default App;
