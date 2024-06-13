import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../../../shared/interfaces/loginInterface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api: string = environment.api;
  constructor(private http: HttpClient) { }

  login(data: LoginInterface) {
    return this.http.post(`${this.api}/api/auth/`, data);
  }
}
