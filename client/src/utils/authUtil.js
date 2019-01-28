import axios from 'axios';

export const loginUtil = userData => axios.post('/api/auth/login', userData).then((res) => {
    console.log('res', res);
    localStorage.setItem('x-token', res.headers['x-auth']);
});

export const logoutUtil = () => {
    localStorage.clear();
};
