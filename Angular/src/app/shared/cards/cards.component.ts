import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() applicantType: string;
  constructor(private form_data: FormService, private router: Router) { }



  //form
  fresherForm: FormGroup;
  experienceForm: FormGroup;
  skill=['JavaScript', 'Angular JS', 'React', 'Node JS', 'Others'];
  test=['Yes', 'No'];
  notice=['Yes', 'No'];
  ngOnInit(): void {
    this.fresherForm= new FormGroup({
      'skills': new FormArray([
        new FormControl(true),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false)
      ]),
      'other_skills': new FormControl(null),
      'appeared_test': new FormControl('No')

    })

    this.experienceForm= new FormGroup({
      'years_of_exp': new FormControl(null, Validators.required),
      'current_ctc': new FormControl(null, Validators.required),
      'expected_ctc': new FormControl(null, Validators.required),
      'skills': new FormArray([
        new FormControl(true),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false)
      ]),
      'other_skills': new FormControl(null),
      'familiar_skills': new FormArray([
        new FormControl(true),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false)
      ]),
      'other_familiar_skills': new FormControl(null),
      'onNoticePeriod': new FormControl('No'),
      'noticePeriodEnd': new FormControl(null),
      'noticePeriod': new FormControl(null),
      'appeared_test': new FormControl('No'),
      'applied_for': new FormControl()


    })
    
  }
  validated=false;
  onSubmit(){
    
    if (this.applicantType=="fresher"){
      // console.log(this.fresherForm);     
      this.form_data.fresherForm=this.fresherForm;
      this.validated=true;
      }
    else if(this.applicantType=="experience"){
      if(this.experienceForm.valid){
        // console.log(this.experienceForm);
        this.form_data.experienceForm=this.experienceForm;
        this.validated=true;
      }
    }
    if(this.validated==true){
      this.getForm();
      this.router.navigate(['/register/review']);
    }
    
  }

  formData: any[];
  getForm(){
    this.formData=this.form_data.getFormData();
    // console.log(this.formData);
    // console.log(this.formData[0].value.f_name);
  }
 


}
