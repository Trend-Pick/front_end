import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/login";
import Grade from "./pages/Grade";
import Rank from "./pages/Rank";
import Register from "./pages/Register/register";
import Board from "./pages/Board/board";
import Profile from "./pages/Profile";
import BoardWrite from "./pages/Board/write";
import BoardDetail from "./pages/Board/boardDetail";
import BoardEdit from "./pages/Board/boardEdit";
import CardUpload from "./pages/CardUpload";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import axios from "axios";

export default function App() {
  useEffect(() => {
    if (
      window.location.pathname !== "/" &&
      window.location.pathname !== "/Register"
    ) {
      axios
        .get("/errorPage")
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message === "Network Error") {
            sessionStorage.removeItem("id");
            alert("로그인이 만료되었습니다.");
            window.location.href = "/";
          }
        });
    }
  }, []);

  useEffect(() => {
    let vh = 0;
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  key="login"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Login />
                </motion.div>
              }
            ></Route>
            <Route
              path="/Grade"
              element={
                <motion.div
                  key="grade"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Grade />
                </motion.div>
              }
            ></Route>
            <Route
              path="/Rank"
              element={
                <motion.div
                  key="rank"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Rank />
                </motion.div>
              }
            ></Route>
            <Route
              path="/Register"
              element={
                <motion.div
                  key="register"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Register />
                </motion.div>
              }
            ></Route>
            <Route
              path="/Board"
              element={
                <motion.div
                  key="board"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Board />
                </motion.div>
              }
            ></Route>
            <Route
              path="/BoardWrite"
              element={
                <motion.div
                  key="boardWrite"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <BoardWrite />
                </motion.div>
              }
            ></Route>
            <Route
              path="/BoardDetail"
              element={
                <motion.div
                  key="boardDetail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <BoardDetail />
                </motion.div>
              }
            ></Route>
            <Route
              path="/BoardEdit"
              element={
                <motion.div
                  key="boardEdit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <BoardEdit />
                </motion.div>
              }
            ></Route>
            <Route
              path="/Profile"
              element={
                <motion.div
                  key="profile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Profile />
                </motion.div>
              }
            ></Route>
            <Route
              path="/CardUpload"
              element={
                <motion.div
                  key="login"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <CardUpload />
                </motion.div>
              }
            ></Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </React.StrictMode>
  );
}
