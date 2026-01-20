import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
    const user = localStorage.getItem('user');
    if (user) {
        req.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
    }
    return req;
});

export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);
export const fetchCourses = () => API.get('/courses');
export const createCourse = (courseData) => API.post('/courses', courseData);

export default API;
