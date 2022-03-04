import axios from "axios";

export default axios.create({
  baseURL: "https://nc-g63-default-rtdb.firebaseio.com/crypto.json",
});
