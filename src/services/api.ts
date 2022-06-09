import axios from "axios";

export const api = axios.create({
  baseURL: "https://podcastr-ten-smoky.vercel.app",
});
