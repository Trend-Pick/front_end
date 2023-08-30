import axios from "axios";

export const getMyProfileImg = () => {
  return axios.get("/update/member/picture").then((res) => res.data.imgUrl);
};

export const changeMyPropfileImg = (imgFile) => {
  axios
    .put("/update/member/picture", imgFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .finally(alert("등록이 완료되었습니다🎉"));
};
export const getMyPage = () => axios.get("/my_page");
export const getMyPost = () => axios.get("/my_page/post");

// 컴포넌트 단에서 async, await를 사용해줘야됨
// 각각 걸면 성능에 좋지 않음 -> promiss all을 사용하라
// res => res.data
