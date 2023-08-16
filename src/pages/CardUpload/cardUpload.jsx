import React, { useState } from "react";
import styles from "./cardUpload.module.css";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import { BsFileImage } from "react-icons/bs";
import axios from "axios";

export default function CardUpload() {
  const [currentImg, setCurrentImg] = useState(null);

  const handleImageChange = (e) => {
    document.getElementById("InputImgFile").click();
    document.getElementById("InputImgFile").addEventListener("change", (e) => {
      setCurrentImg(e.currentTarget.files);
    });
  };
  
  // 찬희 답장하기
  // 백엔드한테 formDATA file 형식으로 post 전달 해주고
  // 이미지 이상한 파일을 URL로 변경
  // 그리고 미리보기 활성화 띄우기
  // 다음에 업로드 버튼 세컨드에서 악센트로 색 변화 주기

  const 함수 = () => {
    const formData = new FormData();
    formData.append("file", currentImg);
    // axios.post("/create_picture", 
    //   "sss"
    // )
  }

  const handleUploadClick = () => {
    console.log(currentImg);
    alert("등록이 완료되었습니다🎉");
    setCurrentImg(null);
  };

  return (
    <div className={styles.cardUpload}>
      <Header type={"upload"} title={"사진 업로드"}></Header>
      <div className={styles.outer}>
        <div className={styles.inner} onClick={(e) => handleImageChange(e)}>
          <BsFileImage className={styles.icon}></BsFileImage>
          <p>Selecting Image</p>
          <input
            id="InputImgFile"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
        <button
          onClick={() => handleUploadClick()}
          className={styles.upload_btn}
        >
          업로드
        </button>
      </div>
      <Navbar></Navbar>
    </div>
  );
}
