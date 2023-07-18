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
import Lank from "./pages/Lank/lank";
import Grade from "./pages/Grade/grade";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Lank" element={<Lank />}></Route>
        <Route path="/Grade" element={<Grade />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
