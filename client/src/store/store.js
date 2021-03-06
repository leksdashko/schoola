import axios from 'axios';
import {makeAutoObservable} from 'mobx';
import { API_URL } from '../http';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';

export default class Store {
    user = {};
    isAuth = false;
    isLoading = false;
    isClient = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool){
        this.isLoading = bool;
    }

    setClient(client){
        if(client){
            localStorage.setItem('isClient', true);
        }else{
            localStorage.removeItem('isClient');
        }

        this.isClient = client;
    }

    getClient(){
        const storageResult = localStorage.getItem('isClient');
        if(storageResult){
            return true;
        }

        return this.isClient;
    }

    async login(email, password) {
        try{
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setClient(false);
            this.setAuth(true);
            this.setUser(response.data.user);
        }catch(e){
            console.log(e.response?.data?.message);
        }
    }

    async registration(email, password, confirmPassword, isClient) {
        try{
            const response = await UserService.registration(email, password, confirmPassword, isClient);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setClient(false);
            this.setAuth(true);
            this.setUser(response.data.user);
        }catch(e){
            console.log(e.response?.data);
        }
    }

    async logout() {
        try{
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        }catch(e){
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);

        try{
            const response = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true});
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        }catch(e){
            console.log(e.response?.data?.message);
        }finally{
            this.setLoading(false);
        }
    }
}