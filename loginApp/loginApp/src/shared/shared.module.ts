import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ServiceService } from './services/service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatIconModule,
    FormsModule, ReactiveFormsModule, MatInputModule,MatButtonModule
  ],
  exports: [
    CommonModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatIconModule,
    FormsModule, ReactiveFormsModule, MatInputModule,MatButtonModule
  ], 
  providers: [ServiceService]
})
export class SharedModule { }
