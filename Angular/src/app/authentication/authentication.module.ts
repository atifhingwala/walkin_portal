import { FormService } from 'src/app/form.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PersonalComponent } from './register/personal/personal.component';
import { QualificationComponent } from './register/qualification/qualification.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ReviewComponent } from './register/review/review.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PersonalComponent,
    QualificationComponent,
    ReviewComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    PersonalComponent,
    QualificationComponent
  ],
  providers: [
    FormService
  ]
})
export class AuthenticationModule { }
