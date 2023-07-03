import axios from 'axios';

const api = axios.create({
    baseURL: "https://cookbook3.p.rapidapi.com/%7BPATH%7D"
});

export const fetchuser = () =>{
    return api.get("/user");
};

export const creatUser = (userData: any) =>{
    return api.post('/user', userData);
};

export const updateUser = (userID: string, userData: any) =>{
    return api.put('/user/${userId}', userData);
};

export const deleteUser = (userID: string) =>{
    return api.delete(`/user/${userID}`);
};

