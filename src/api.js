import axios from "axios";
var ambiente = "production";
const baseURL = (ambiente !== 'production') ? 'http://localhost:8080' : 'https://peoplesurvey.azurewebsites.net/'; 
const api = axios.create({ baseURL });

export default api;