import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/cloneof-2be53/us-central1/api'
    
    //'http://localhost:5001/clone-e481e/us-central1/api' 
})

export default instance;