import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home1 from './component/AccountMangement/home';
import Modal from './component/AccountMangement/Modal';
import VehicleManagement from './component/AccountMangement/vehicleAddInterface';
import AddVehicleForm from './component/AccountMangement/vehicleForm';
import VehicleTable from './component/AccountMangement/vehicleTable';
import VehicleUpdate from './component/AccountMangement/vehicleUpdateInterface';
import Home from './component/HomePage/hme';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/hme' element={<Home/>}></Route>
  <Route path='/Home1' element={<Home1/>}></Route>
        <Route path='/Modal' element={<Modal/>}></Route>
        <Route path='/VehicleForm' element={<AddVehicleForm />} />
      <Route path='/VehicleTable' element={<VehicleTable />} />
      <Route path='/VehicleAddInterface' element={<VehicleManagement />} />
      <Route path='/VehicleUpdateInterface' element={<VehicleUpdate />} />

  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
