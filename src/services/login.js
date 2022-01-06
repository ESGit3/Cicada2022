import axios, { AxiosResponse } from 'axios';

const a = axios.create({
    baseURL: 'http://137.184.21.151',
    timeout: 10000
});

const login = (payload: {
    username: string;
    password: string;
}): Promise<AxiosResponse> => {
    return a.post(`/login?username=${payload.username}&password=${payload.password}`);
};

const LoginService = {
    login
};

export default LoginService;

