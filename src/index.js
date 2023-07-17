import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Root from "./pages/Root/root";
import Login from "./pages/Login/login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/a" element={<Login />}></Route>
        <Route path="/a" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
