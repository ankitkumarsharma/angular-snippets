import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    http = inject(HttpClient);
    isLoggedIn = signal<any>(null);

    login(user:any){
        return this.http.post(`${environment.apiUrl}/auth/login`,user);
    }

    signUp(user:any){
        return this.http.post(`${environment.apiUrl}/auth/signup`,user);
    }

    logout(){
        return this.http.post(`${environment.apiUrl}/auth/logout`,{});
    }
}