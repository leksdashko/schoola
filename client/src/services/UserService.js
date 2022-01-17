import $api from '../http';

const SELLER_ROLE = 1;
const CLIENT_ROLE = 2;

export default class UserService {
    static async registration(email, password, confirmPassword, isClient) {
        const role = isClient ? CLIENT_ROLE : SELLER_ROLE;
        return $api.post('/users', {email, password, confirmPassword, role});
    }
    
    static async fetchUsers() {
        return $api.get('/users');
    }
}