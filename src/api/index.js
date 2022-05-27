import axios from "axios";

export const getUser = async () => axios.get('http://localhost:5000/api/users')