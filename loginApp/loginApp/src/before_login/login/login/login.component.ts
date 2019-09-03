import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {MatIconRegistry} from '@angular/material/icon';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  constructor(public FB: FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
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
      password: new FormControl(null, [Validators.required]),
      // first_name: new FormControl(null, [Validators.required]),
      // last_name: new FormControl(null, [Validators.required])
    });
  }
}
