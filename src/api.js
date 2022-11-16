import axios from "axios";

// const apiDev = axios.create({
//     baseURL: "https://localhost:8080"
// })

// const apiProd = axios.create({
//     baseURL: "https://peoplesurvey.azurewebsites.net"
// })


const baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:8080' : 'https://peoplesurvey.azurewebsites.net'; 

const api = axios.create({ baseURL });

export default api;