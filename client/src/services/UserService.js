import $api from '../http';

export default class UserService {
    static async registration(email, password, confirmPassword) {
        return $api.post('/users', {email, password, confirmPassword});
    }
    
    static async fetchUsers() {
        return $api.get('/users');
    }
}