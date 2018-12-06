import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signUpDetails: any;

  constructor(private fb: FormBuilder,
              private apiService: ApiService,
              private jwtService: JwtService,
              private router: Router) {
    this.signUpForm = fb.group({
      email : ['', Validators.compose([
                Validators.required,
                // tslint:disable-next-line:max-line-length
                Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
              ])],
      password : ['', Validators.compose([
                  Validators.required,
                  Validators.minLength(4)
                  ])]
    });
  }

  ngOnInit() {
  }

}
