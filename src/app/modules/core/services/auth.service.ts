import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiCoreService } from './api-core.service';
import { CryptoJsService } from './crypto-js.service';

export const TOKEN_NAME: string = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiCoreService: ApiCoreService,
    private router: Router,
    private cryptoJSService: CryptoJsService
  ) { }

  Token = this.cryptoJSService.encryptText(TOKEN_NAME);

  login(data): Observable<any[]>{
    return this.apiCoreService.post(`/v1/auth/login`,data)
    .pipe(map(res => res));
  }

  logout(): Observable<any[]>{
    return this.apiCoreService.get(`/v1/auth/logout`)
    .pipe(map(res => res));
  }

  getToken(): string {
    if(localStorage.getItem(this.Token)) return localStorage.getItem(this.Token);
    // this.router.navigate(['/']);
  }

  setToken(TOKEN: string): void {
    localStorage.setItem(this.Token, TOKEN);
  }

  deleteToken(): void {
    localStorage.removeItem(this.Token);
    sessionStorage.clear();
  }

  setTokenCustom(name,data): void {
    sessionStorage.setItem(name, data);
  }

  deleteTokenCustom(name): void {
    sessionStorage.removeItem(name);
  }

  getTokenCustom(name): string {
    return sessionStorage.getItem(name);
  }

}
