import axios from "axios";

const instance = axios.create({
  baseURL: "https://ahmettopic-4ff91.firebaseio.com/"
});

export default instance;
