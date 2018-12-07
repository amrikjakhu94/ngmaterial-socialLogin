import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  socialSignInRequest(socialSignInDetails: any): any {
    throw new Error("Method not implemented.");
  }
  token: String;
  constructor(private http: HttpClient,
              private jwtService: JwtService) { }

  gethttpOptions() {
    // tslint:disable-next-line:prefer-const
    const token = this.jwtService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth-token': token
      })
    };
    return httpOptions;
  }

  signInRequest(signIn: Object): Observable<any> {
    // console.log('opopooooooooo');
    return this.http.post('http://localhost:3000/signin', signIn);
    // return this.http.post('https://stormy-ravine-20860.herokuapp.com/signin',signIn);
  }

  socialSignInRequest(socialSignIn: Object): Observable<any> {
    return this.http.post('http://localhost:3000/socialsignin', socialSignIn);
    // return this.http.post('https://stormy-ravine-20860.herokuapp.com/signin',signIn);
  }

  signUpRequest(signUp: Object): Observable<any> {
    console.log('Entered signUp request  in apiService');
    return this.http.post('http://localhost:3000/signup', signUp);
    // return this.http.post('https://stormy-ravine-20860.herokuapp.com/signup',signUp);
  }

  getMyProfile() {
    const httpOptions = this.gethttpOptions();
    return this.http.get('http://localhost:3000/myprofile', httpOptions);
    // return this.http.post('https://stormy-ravine-20860.herokuapp.com/myprofile',httpOptions);
  }

  isAuthenticated() {
    this.token = this.jwtService.getToken();
    return this.token != null;
  }

}
