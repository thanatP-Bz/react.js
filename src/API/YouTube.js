import axios from "axios";
const KEY = "AIzaSyBnkvoZs3Y4kM8kWI9l3ig3oRUeMsncX-c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
