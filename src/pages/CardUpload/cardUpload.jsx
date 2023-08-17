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
  // .then((res) => console.log(res))
  // .catch(function (error) {
  //   if (error.response) {
  //     // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
  //     console.log(error.response.data, "data");
  //     console.log(error.response.status, "status");
  //     console.log(error.response.headers, "header");
  //   } else if (error.request) {
  //     // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
  //     // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
  //     // node.js에서는 http.ClientRequest 인스턴스입니다.
  //     console.log(error.request);
  //   } else {
  //     // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
  //     console.log("Error", error.message);
  //   }
  //   console.log(error.config);
  // })

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
          onClick={() => handleImageUpload()}
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
