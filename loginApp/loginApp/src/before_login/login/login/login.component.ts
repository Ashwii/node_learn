import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ServiceService } from '../../../shared/services/service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  signForm: FormGroup;
  hide = true;
  show: boolean = false;
  loginUrl: string = 'login';
  signUpUrl: string = 'sign_up';

  constructor(public FB: FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public route: Router, public service: ServiceService) {
    iconRegistry.addSvgIcon(
      'visibility',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/visibility.svg'));

  }
  ngOnInit() {
    this.FormInit();
  }
  // ============================================================================================
  FormInit = () => {
    this.loginForm = this.FB.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
    this.signForm = this.FB.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confirm_password: new FormControl(null, [Validators.required]),
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required])
    });
  }
  login = () => {
    this.route.navigate(['/dashboard']);
    this.service.postData(this.loginUrl, this.loginForm.value)
    .subscribe((result) => {

    }, (error) => {});
  }
  SignUp = () => {
    this.show = true;
  }
  Back = () => {
    this.show = false;
    this.service.postData(this.signUpUrl, this.signForm.value)
    .subscribe((result) => {

    }, (error) => {})
  }
  // ================================================================================================================

}
