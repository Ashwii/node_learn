import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatInputModule,
    LoginRoutingModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatIconModule
  ]
})
export class LoginModule { }
