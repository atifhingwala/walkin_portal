import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormService } from 'src/app/form.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: [ './personal.component.scss'
  ]
})
export class PersonalComponent implements OnInit {

  constructor(private form_data: FormService, private router:Router) { }

  //personal form
  checkbox=['Instructional Designer', 'Software Engineer', 'Software Quality Engineer'];
  personalForm: FormGroup;
  ngOnInit(): void {
    this.personalForm = new FormGroup({
      'f_name': new FormControl(null, Validators.required),
      'l_name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'phone_no': new FormControl(null, Validators.required),
      'portfolio': new FormControl(null, Validators.required),
      'referral': new FormControl(null),
      'job_updates': new FormControl(null),
      'preferred_job_role': new FormArray([
        new FormControl(true),
        new FormControl(false),
        new FormControl(false)

      ]),

    })
  }

  onSubmit(){
    if (this.personalForm.valid==true){
      // console.log("validated");
      this.router.navigateByUrl('/register/qualification');
      this.form_data.personalForm= this.personalForm;
      // console.log(this.form_data.personalForm);
    }  
    else{
      console.log("not validated");
    }
          
  }

  
}
