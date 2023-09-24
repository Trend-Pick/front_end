import React, { useState, useEffect, useRef } from "react";
import styles from "./write.module.css";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FiPlusCircle, FiArrowLeft } from "react-icons/fi";
function BoardEdit() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const submit = async () => {
    const formData = new FormData();
    let createPostRequest = {
      title: title,
      content: content,
    };
    if (image == "") {
      formData.append(
        "createPostRequest",
        new Blob([JSON.stringify(createPostRequest)], {
          type: "application/json",
        })
      );
    } else {
      formData.append(
        "createPostRequest",
        new Blob([JSON.stringify(createPostRequest)], {
          type: "application/json",
        })
      );
      formData.append("imgInPost", image);
    }
    try {
      const response = await axios.patch(`/update_post/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      if (response.data == "") {
        alert("자신이 쓴 게시물이 아닙니다.");
        window.location.href = "/board";
      } else {
        alert("수정되었습니다.");
        window.location.href = "/board";
      }
    } catch (e) {
      console.log(e);
    }
  };
  const imageInput = useRef();

  const onClickImageUpload = () => {
    imageInput.current.click();
  };

  const deleteImage = () => {
    setImage("");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/post/${id}`);
        console.log(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
        if (response.data.postImgUrl) {
          setImage(response.data.postImgUrl);
        } else {
          setImage("");
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div id={styles.wrapper}>
      <Header
        type={"board_write"}
        buttons={[<FiArrowLeft />, <FiPlusCircle />]}
        handleBtnClick={submit}
      ></Header>
      <div id={styles.writeForm}>
        <input
          onChange={onChangeTitle}
          value={title}
          type="text"
          id={styles.title}
          placeholder="제목을 입력하세요"
        />
        <textarea
          onChange={onChangeContent}
          value={content}
          id={styles.content}
          placeholder="내용을 입력하세요."
        ></textarea>
        <div className={styles.filebox}>
          <label htmlFor={styles.file} onClick={onClickImageUpload}>
            +
          </label>
          <input
            type="file"
            style={{ display: "none" }}
            id={styles.file}
            ref={imageInput}
            onChange={onChangeImage}
          />
          {image.name == null ? (
            <div id={styles.imageName} onClick={deleteImage}>
              {image.length > 40 ? image.slice(0, 40) + "..." : image}
            </div>
          ) : (
            <div id={styles.imageName} onClick={deleteImage}>
              {image.name.length > 40
                ? image.name.slice(0, 40) + "..."
                : image.name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default BoardEdit;
