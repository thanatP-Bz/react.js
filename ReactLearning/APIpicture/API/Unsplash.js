import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID CY9v9ZAvQLwyIKVP5vNL0pL_yZ7fEnPAe1hl_H0rI4U",
  },
});
