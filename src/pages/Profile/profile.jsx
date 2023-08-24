import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Card/card";
import Post from "../../components/Post/post";
import styles from "./profile.module.css";
import { FiSettings, FiImage, FiBookOpen } from "react-icons/fi";
import axios from "axios";

export default function Profile() {
  const [currentSeleted, setCurrentSelected] = useState("GALLERY");
  const [profileImg, setProfileImg] = useState(
    require("../../img/blank-profile.jpg")
  );

  // const [gallery, setGallery] = useState([]);
  // const [post, setPost] = useState([]);
  const [gallery, setGallery] = useState([1, 2, 3, 4, 5])
  const [post, setPost] = useState([1, 2, 3, 4, 5]);

  const [modalOpen, setModalOpen] = useState(null);

  // 데이터 받아오기
  useEffect(() => {
    axios
      .get("/update/member/picture")
      .then((res) => setProfileImg(res.data.imgUrl))
      .catch(setProfileImg(require("../../img/blank-profile.jpg")));
    axios
      .get("/my_page")
      .then((res) => setGallery(res.data))
      .catch(setGallery([]));
    axios
      .get("/my_page/post")
      .then((res) => setPost(res.data))
      .catch(function (error) {
        if (error.response) {
          // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
          console.log(error.response.data, 1);
          console.log(error.response.status, 2);
          console.log(error.response.headers, 3);
        } else if (error.request) {
          // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
          // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
          // node.js에서는 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
        } else {
          // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
          console.log("Error", error.message);
        }
        console.log(error.config);
      });

    // .catch(setPost([]));
  }, []);

  //  프로필사진 변경 함수
  const handleImageChange = () => {
    document.getElementById("InputImgFile").click();
    document.getElementById("InputImgFile").addEventListener("change", (e) => {
      if (!e.target.files) return;
      const file = e.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("newImg", file);
        axios
          .put("/update/member/picture", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .finally(alert("등록이 완료되었습니다🎉"));
      }
    });
  };

  // 사진 클릭 시 모달창 팝업 함수
  const handleClickGallery = (index) => {
    const activeGallery = {
      profile_Img: profileImg,
      picture_Url: gallery.pictures[index].url,
      nickname: gallery.nickname,
      like: gallery.pictures[index].likes,
      picture_Id: gallery.pictures[index].pictureId,
    };
    setModalOpen(activeGallery);
  };

  // 사진 삭제 함수
  const handleDeleteGallery = (pidtureId) => {
    if (window.confirm("정말 삭제하시겠습니까 ?")) {
      axios
        .delete("/delete_picture", {
          data: {
            pidtureId,
          },
        })
        .then(() => {
          setModalOpen(null);
        })

        .catch(function (error) {
          if (error.response) {
            // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
            console.log(error.response.data, 1);
            console.log(error.response.status, 2);
            console.log(error.response.headers, 3);
          } else if (error.request) {
            // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
            // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
            // node.js에서는 http.ClientRequest 인스턴스입니다.
            console.log(error.request, 4);
          } else {
            // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
            console.log("Error", error.message);
          }
          console.log(error.config);
        })

        .finally(alert("삭제완료"));
    }
  };

  return (
    <div className={styles.profile}>
      <Header type={"profile"} buttons={<FiSettings />}></Header>
      <div
        className={styles.profile_container}
        style={
          modalOpen
            ? {
                width: "inherit",
                filter: "blur(5px)",
                zIndex: 10,
              }
            : null
        }
        onClick={
          modalOpen
            ? () => {
                setModalOpen(null);
              }
            : null
        }
      >
        <div className={styles.profile_info}>
          <div className={styles.profile_info_bg} src={gallery}></div>
          <div className={styles.profile_img_container}>
            <img
              className={styles.profile_img}
              onClick={modalOpen ? null : (e) => handleImageChange(e)}
              src={profileImg}
            ></img>
            <input
              id="InputImgFile"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
          <div className={styles.profile_buttons}>
            <button
              className={styles.button_gallery}
              onClick={() => setCurrentSelected("GALLERY")}
            >
              <FiImage
                color={currentSeleted == "GALLERY" ? "#DE496E" : "black"}
              />
              {currentSeleted == "GALLERY" ? (
                <span className={styles.active_bg}></span>
              ) : null}
            </button>
            <button
              className={styles.button_posts}
              onClick={() => setCurrentSelected("POSTS")}
            >
              <FiBookOpen
                color={currentSeleted == "POSTS" ? "#DE496E" : "black"}
              />
              {currentSeleted == "POSTS" ? (
                <span className={styles.active_bg}></span>
              ) : null}
            </button>
          </div>
          <h4 className={styles.nickname}>{gallery.nickname}</h4>
        </div>
        

        {currentSeleted == "GALLERY" ? (
          <div className={styles.profile_main_gallery}>
            {gallery.pictures != undefined
              ? gallery.pictures.map((img, index) => (
                  <img
                    src={img.url}
                    className={styles.gallery_img}
                    onClick={
                      modalOpen == null ? () => handleClickGallery(index) : null
                    }
                    key={index}
                  ></img>
                ))
              : null}
          </div>
        ) : (
          // 포스트
          <div className={styles.profile_main_post}>
            {post.postlist != undefined
              ? post.postlist.map((postlist, index) => <Post postData={postlist} nickname={post.nickname}  >

              </Post>)
              : null}
          </div>
        )}
      </div>

      {/* 모달에 데이터가 들어있다면 */}
      {modalOpen != null ? (
        <div className={styles.modal}>
          <Card
            type="MYPAGE"
            cardData={modalOpen}
            handleDeleteGallery={() =>
              handleDeleteGallery(modalOpen.picture_Id)
            }
          ></Card>
        </div>
      ) : null}
      <Navbar active={"/profile"}></Navbar>
    </div>
  );
}
