import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

export interface LoginForm {
  email: string;
  password: string;
};

export interface User {
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: number;
    password?: string;
    passwordConfirm?: string;
};

export const JWT_NAME = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor ( private http: HttpClient, private jwtHelper: JwtHelperService ) { }
        login( loginForm:LoginForm ){
            return this.http.post<any>( '/api/users/login', { email: loginForm.email, password: loginForm.password } ).pipe(
                map( ( token ) => {
                    localStorage.setItem( 'auth-token', token.access_token );
                    return token;
                })
            )
        }
    
        logout() {
            localStorage.removeItem(JWT_NAME);
        }

        register(user) {
            return this.http.post<any>('/api/users', user).pipe(map((user)=>user));
        }

        isAuthenticated(): boolean {
            const token = localStorage.getItem(JWT_NAME);
            return !this.jwtHelper.isTokenExpired(token);
        }
}
