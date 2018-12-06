import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    return;
    // this.apiService.signInRequest(this.signInDetails).subscribe(
    //   signin => {
    //     if (signin) {
    //       console.log(signin);
    //       const userDetails = { signin , isLogin : true };
    //       this.jwtService.saveToken(signin.token);
    //       this.apiService.sendIsLoginValue(userDetails);
    //       this.toasterService.showSuccess('Welcome ' + signin.user.name, 'Login success');
    //       this.router.navigate(['/dashboard']);
    //       this.loginSpinner = false;
    //       this.signInForm.reset();
    //     } else {
    //       console.log('Error in signIn...');
    //     }
    //   },
    //   error => {
    //     console.log(error.error, 'erroooorrrrrr');
    //   }
    // );
  }

  ngOnInit() {
  }

}
