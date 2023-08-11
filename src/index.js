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
import Login from "./pages/Login/login";
import Lank from "./pages/Lank/lank";
import Grade from "./pages/Grade/grade";
import Register from "./pages/Register/register";
import Board from "./pages/Board/board";
import Profile from "./pages/Profile/profile";
import BoardWrite from "./pages/Board/write";
import BoardDetail from "./pages/Board/boardDetail";
import BoardEdit from "./pages/Board/boardEdit";
import FindPw from "./pages/findPw/findPw";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Lank" element={<Lank />}></Route>
        <Route path="/Grade" element={<Grade />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Board" element={<Board />}></Route>
        <Route path="/BoardWrite" element={<BoardWrite/>}></Route>
        <Route path="/BoardDetail" element={<BoardDetail />}></Route>
        <Route path="/BoardEdit" element={<BoardEdit />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
