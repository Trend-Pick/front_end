import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/login";
import Rank from "./pages/Rank/rank";
import Grade from "./pages/Grade/grade";
import Register from "./pages/Register/register";
import Board from "./pages/Board/board";
import Profile from "./pages/Profile/profile";
import BoardWrite from "./pages/Board/write";
import BoardDetail from "./pages/Board/boardDetail";
import BoardEdit from "./pages/Board/boardEdit";
import CardUpload from "./pages/CardUpload/cardUpload";
import FindPw from "./pages/findPw/findPw";

export default function App() {
  let vh = 0;

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Rank" element={<Rank />}></Route>
          <Route path="/Grade" element={<Grade />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Board" element={<Board />}></Route>
          <Route path="/BoardWrite" element={<BoardWrite />}></Route>
          <Route path="/BoardDetail" element={<BoardDetail />}></Route>
          <Route path="/BoardEdit" element={<BoardEdit />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/CardUpload" element={<CardUpload />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
