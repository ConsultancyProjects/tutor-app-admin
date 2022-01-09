import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { catchError, first, map } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { APIAuthenticationService, ROUTES } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private authenticationService: AuthenticationService,
    private authService: APIAuthenticationService,
    private userService: UserProfileService,
    private toasterService : ToastrService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      userId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name:['',[Validators.required]],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else {
      this.authService.register(this.signupForm.value).subscribe(
      {
        next: data => {
            if(data.response == 'Success') {
              this.router.navigate([ROUTES.ACCOUNT_LOGIN]);
              this.toasterService.success(
                'SuccessFully Registered, Please inform Admin for Access', 'Success',
                 { positionClass: 'toast-top-right' });
            }
            
        },
        error: error => {
            this.error = error; 
            console.error('There was an error!');
        },complete:() => {
          console.log('some value');
        }
    });
    }
  } 
}
