import axios from "axios";

export const getRankingCard = (currentRanking) =>
  axios.get(`${currentRanking}_ranking`);
