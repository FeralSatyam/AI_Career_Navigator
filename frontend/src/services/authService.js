import axios from 'axios';

const backend_api = import.meta.env.BACKEND_URL;

export const register = async(req, res) => {
    try{
        const response = await axios.post(`${backend_api}/users/register`, {
            email, full_name, password, university, year_of_study, hour_of_study, days_of_study, role
        });

        if (response){
            localStorage.setItem('userToken', response.data.token);
        }
        return response.data;
    } catch (error){
        console.error(error)
    }
}

export const logout = () => {
    localStorage.removeItem('userToken');
};