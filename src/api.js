import axios from "axios";
var ambiente = "production";
const baseURL = (ambiente !== 'production') ? 'http://localhost:8080' : 'http://3.221.54.108:8080'; 
const api = axios.create({ baseURL });

export default api;