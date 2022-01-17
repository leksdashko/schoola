import $api from '../http';

export default class UserService {
    SELLER_ROLE = 1;
    CLIENT_ROLE = 2;

    static async registration(email, password, confirmPassword, isClient) {
        const role = isClient ? this.CLIENT_ROLE : this.SELLER_ROLE;
        
        return $api.post('/users', {email, password, confirmPassword, role});
    }
    
    static async fetchUsers() {
        return $api.get('/users');
    }
}