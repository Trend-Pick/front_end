import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Router,Routes,Route,Link,useParams } from 'react-router-dom';
import Login from './Login/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/a' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
)

