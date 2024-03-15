import axios from "axios";
const API = 'http://localhost:4000'
export const registerRequest = (user) => axios.post(`${API}/usuarios`, user, { withCredentials: true })
export const loginRequest = (user) => axios.post(`${API}/auth/login`, user, { withCredentials: true })
export const logoutRequest = () => axios.post(`${API}/auth/logout`, null, { withCredentials: true })

export const emailRequest = (email) => axios.post(`${API}/usuarios/email`, email, { withCredentials: true })
export const recoveryEmailRequest = () => axios.post(`${API}/recovery/email`, null, { withCredentials: true })
export const recoveryQuestionRequest = () => axios.post(`${API}/recovery/question`, null, { withCredentials: true })