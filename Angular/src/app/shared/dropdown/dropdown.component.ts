import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dropDown } from 'src/app/Interface';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  
  constructor(private form_data: FormService) { }

  

  //DropDown
  @Input() dropType: number;
  
  dropDownData: dropDown[]=[
    {
      name: "Educational Qualification",
      type: 1
    },
    {
      name: "Professional Qualification",
      type: 2,
    }
  ]

  //Radio Card Switch
  applicantType:string;
  onClickRadio(type:string){
    this.applicantType=type;
    this.form_data.applicantType=this.applicantType;
  }

  //form
  educationalForm: FormGroup;
  ngOnInit(): void {
    this.educationalForm= new FormGroup({
      'agg_percentage': new FormControl(null, Validators.required),
      'year_of_passing': new FormControl(null, Validators.required),
      'qualification': new FormControl(null, Validators.required),
      'stream': new FormControl(null, Validators.required),
      'college': new FormControl(null, Validators.required),
      'other_college': new FormControl(null),
      'college_location': new FormControl(null, Validators.required)

    })

    // console.log(this.educationalForm);
  }

  onSubmit(){
    if(this.educationalForm.valid){
      // console.log(this.educationalForm);
      this.form_data.educationalForm=this.educationalForm;
    }
  }
  

}

