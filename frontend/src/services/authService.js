import axios from 'axios';

const backend_api = import.meta.env.VITE_BACKEND_URL;

export const register = async(email, full_name, password, university, year_of_study, hour_of_study, days_of_study, role) => {
    try{
        const response = await axios.post(`${backend_api}/users/register`, {
            email, full_name, password, university, year_of_study, hour_of_study, days_of_study, role
        });

        if (response){
            localStorage.setItem('userToken', response.data.token);
        }
        console.log(response.data.message)
        return response.data;
    } catch (error){
        console.error(error)
    }
}

export const login = async(email, password) => {
    try{
        const response = await axios.post(`${backend_api}/users/login`, {
            email, password
        });

        if (response) {
            localStorage.setItem('userToken', response.data.token);
        }
        console.log(response.data.message)
        return response.data;
    }
    catch(error){
        console.error(error)
    }
}

export const logout = () => {
    localStorage.removeItem('userToken');
};