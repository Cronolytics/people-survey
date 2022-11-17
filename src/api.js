import axios from "axios";

const baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:8080' : 'https://peoplesurvey.azurewebsites.net'; 

const api = axios.create({ baseURL });

export default api;