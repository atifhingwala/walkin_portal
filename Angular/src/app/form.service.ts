import { RegisterComponent } from './authentication/register/register.component';
import { Observable, Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService{

  personalForm: any;
  educationalForm:any;
  fresherForm: any;
  experienceForm: any;


  applicantType: string;

  databaseDetails: any;

  user_id: any;

  hallTicketResponse: any;

  constructor() { 
  }
  

    getFormData(){
      
      if (this.fresherForm){
        return [this.personalForm, this.educationalForm, this.fresherForm];
      }
      else{
        return [this.personalForm, this.educationalForm, this.experienceForm];
      }
    }

    
   

  

}
