import axios from "axios";

export const voteLikeImg = (id) => axios.post(`/vote/like/${id}`);

export const voteDislikeImg = (id) => axios.post(`/vote/dislike/${id}`);

export const getGradeCard = () => axios.get("/vote");
