import axios from "axios";

export default axios.create({
  baseURL: "https://min-api.cryptocompare.com",
});
