import axios from 'axios'

export const getUsers = () => {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
    });
};

export const creatUser = (user) => {
    return axios.post('/users', user);
}

export const deleteUser = (id) => {
    console.log(id);
    return axios.delete(`/users/${id}`);
}