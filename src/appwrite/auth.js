import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        try {
            if (!conf.appwriteUrl || !conf.appwriteProjectId || conf.appwriteUrl === '' || conf.appwriteProjectId === '') {
                console.warn('Appwrite configuration is missing. Please check your .env file and ensure VITE_APPWRITE_URL and VITE_APPWRITE_PROJECT_ID are set.');
                // Don't throw error, just log warning - allow app to still render
                return;
            }
            this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
        } catch (error) {
            console.error('Failed to initialize Appwrite auth client:', error.message);
            // Don't throw error, just log - allow app to still render
        }
    }

    async createAccount({email, password, name}) {
        try {
            if (!this.account) {
                throw new Error('Appwrite is not configured. Please check your .env file.');
            }
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            if (!this.account) {
                throw new Error('Appwrite is not configured. Please check your .env file.');
            }
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            if (!this.account) {
                return null;
            }
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            if (!this.account) {
                return;
            }
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService