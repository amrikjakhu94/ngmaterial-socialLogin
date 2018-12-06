import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  signInDetails: any;

  constructor(private fb: FormBuilder,private apiService: ApiService) {
    this.signInForm = fb.group({
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

  onSubmit() {
    console.log(this.signInForm.value, '-----');
    this.signInDetails = this.signInForm.value;
    this.apiService.signInRequest(this.signInDetails).subscribe(
      signin => {
        if (signin) {
          console.log(signin);
          const userDetails = { signin , isLogin : true };
          // this.signInForm.reset();
        } else {
          console.log('Error in signIn...');
        }
      },
      error => {
        console.log(error.error, 'erroooorrrrrr');
      }
    );
  }

  ngOnInit() {
  }

}
