import axios from "axios";
var ambiente = "production";
const baseURL = (ambiente !== 'production') ? 'http://localhost:8080' : 'http://3.92.171.109:8081'; 
const api = axios.create({ baseURL });

export default api;