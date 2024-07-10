import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './Component/Home/Main.tsx';
import App from './App.js';
import UserSignUpPage from './Component/Home/UserSignUpPage.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
              <BrowserRouter>
                 <Routes>
                     <Route exact path="/" element={<App />}></Route>
                     <Route exact path="/home" element={<Main/>}></Route>   {/*main col 12*/}
                     <Route exact path="/sign-up" element={<UserSignUpPage/>}></Route>
                 </Routes>
              </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
