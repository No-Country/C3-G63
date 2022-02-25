import axios from "axios";

export default axios.create({
  baseURL: "https://crypto-app-b0955-default-rtdb.firebaseio.com/crypto.json",
});
