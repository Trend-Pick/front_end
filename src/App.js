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
import Grade from "./pages/Grade/grade";
import Rank from "./pages/Rank/rank";
import Register from "./pages/Register/register";
import Board from "./pages/Board/board";
import Profile from "./pages/Profile/profile";
import BoardWrite from "./pages/Board/write";
import BoardDetail from "./pages/Board/boardDetail";
import BoardEdit from "./pages/Board/boardEdit";
import CardUpload from "./pages/CardUpload/cardUpload";
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";
export default function App() {
  let vh = 0;

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    
    <React.StrictMode>
      <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/"  element={<motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} ><Login /></motion.div>}></Route>
          <Route path="/Grade" element={<Grade />}></Route>
          <Route path="/Rank" element={<Rank />}></Route>
          <Route path="/Register" element={<motion.div key="register" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} ><Register /></motion.div>}></Route>
          <Route path="/Board" element={<motion.div key="board" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} ><Board /></motion.div>}></Route>
          <Route path="/BoardWrite" element={<motion.div key="boardWrite" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} ><BoardWrite /></motion.div>}></Route>
          <Route path="/BoardDetail" element={<motion.div key="boardDetail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} ><BoardDetail /></motion.div>}></Route>
          <Route path="/BoardEdit" element={<motion.div key="boardEdit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} ><BoardEdit /></motion.div>}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/CardUpload" element={<CardUpload />}></Route>
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </React.StrictMode>
  );
}
