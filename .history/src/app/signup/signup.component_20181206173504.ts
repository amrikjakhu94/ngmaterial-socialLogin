import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../core/services/api.service';
import { JwtService } from '../core/services/jwt.service';
import { Router } from '@angular/router';

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
              private router: Router) {
    this.signUpForm = fb.group({
      name : ['', Validators.compose([
        Validators.required
      ])],
      email : ['', Validators.compose([
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
      ])],
      password : ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      confirmpassword : ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password').value === formGroup.get('confirmpassword').value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    this.signUpDetails = this.signUpForm.value;
    // console.log(this.signUpForm.value);
    this.apiService.signUpRequest(this.signUpDetails).subscribe(
      signup => {
        if (signup) {
          console.log(signup);
          this.signupSpinner = false;
          this.toasterService.showSuccess(signup.success, 'Success');
          this.router.navigate(['/']);
        }
      },
      error => {
        this.signupSpinner = false;
        this.toasterService.showError(error.error.error, 'Error');
      }
    );
    // this.signUpForm.reset();
  }

  ngOnInit() {
  }

}
