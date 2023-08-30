import React, { useState } from "react";
import styles from "./cardUpload.module.css";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import { BsFileImage } from "react-icons/bs";
import axios from "axios";

export default function CardUpload() {
  const [currentImg, setCurrentImg] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);

  //  이미지 체인지 함수
  const handleImageChange = () => {
    document.getElementById("InputImgFile").click();
    document.getElementById("InputImgFile").addEventListener("change", (e) => {
      console.log(e.target.files);
      if (!e.target.files) return;
      const file = e.target.files[0];
      if (file) {
        setCurrentImg(window.URL.createObjectURL(file));
        setCurrentFile(file);
      }
    });
  };

  // 이미지 백엔드 전송
  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append("cody_img", currentFile);
    axios
      .post("/create_picture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .finally(alert("등록이 완료되었습니다🎉"));
    setCurrentImg(null);
    setCurrentFile(null);
  };

  return (
    <div className={styles.cardUpload}>
      <Header type={"upload"} title={"사진 업로드"} text={"평가 받고 싶은 사진을 업로드 해보세요!"}></Header>
      <div className={styles.outer}>
        <div
          className={styles.inner}
          onClick={(e) => handleImageChange(e)}
          style={{
            backgroundImage: currentImg ? `url(${currentImg})` : null,
            backgroundSize: "cover",
            borderStyle: currentImg ? "none" : null,
          }}
        >
          {currentImg ? null : (
            <BsFileImage className={styles.icon}></BsFileImage>
          )}
          {currentImg ? null : <p>Selecting Image</p>}
          <input
            id="InputImgFile"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
        <button
          onClick={currentImg? () => handleImageUpload() : null}
          className={styles.upload_btn}
          style={{ backgroundColor: currentImg ? "#DE496E" : "#fcd2db" }}
        >
          업로드
        </button>
      </div>
      <Navbar></Navbar>
    </div>
  );
}
