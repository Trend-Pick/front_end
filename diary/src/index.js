import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Router,Routes,Route,Link,useParams } from 'react-router-dom';
import DiaryWrite from './DiaryWrite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/DiaryWrite' element={<DiaryWrite/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

