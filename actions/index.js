import axios from 'axios';
import Cookies from 'js-cookie';

import { getCookieFromReq } from '../helpers/utils';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 3000
})

const rejectPromise = (resError) => {
    let error = {};

    if (resError && resError.response && resError.response.data) {
        error = resError.response.data;
    } else {
        error = resError;
    }

    return Promise.reject(error);
}

const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');
    
    return token ? ( { headers: {'Authorization': `Bearer ${token}`}} ) : ( undefined );

}

export const getSecretData = async (req) => {

    return await axiosInstance.get('/secret', setAuthHeader(req)).then(response => response.data);
}

export const getProjects = async () => {

    return await axiosInstance.get('/projects').then(response => response.data);
}

export const createProject = async (projectData) => {
    return await axiosInstance.post('/projects',projectData, setAuthHeader())
    .then(response => response.data)
    .catch(error => rejectPromise(error));
}

export const getProjectById = async (id) => {
    return axiosInstance.get(`/projects/${id}`)
    .then(response => response.data);
}

export const updateProject = async (projectData) => {
    return await axiosInstance.patch(`/projects/${projectData._id}`,projectData, setAuthHeader())
    .then(response => response.data)
    .catch(error => rejectPromise(error));
}

export const deleteProject = (projectId) => {
    return axiosInstance.delete(`/projects/${projectId}`, setAuthHeader()).then(response => response.data);
}