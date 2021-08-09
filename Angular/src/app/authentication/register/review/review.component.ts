import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {


  constructor(private form_data: FormService) { }

  applicantType: string= this.form_data.applicantType;

  formData: any[];
  preference:string='';
  
  ngOnInit(): void {
    this.formData= this.form_data.getFormData();
    //console.log(this.formData);
    //console.log(this.formData[0].value.preferred_job_role);

    // for(let i=0; i<this.formData[0].value.preferred_job_role.length; i++){
    //   if (this.formData[0].value.preferred_job_role[i]==true){
    //     this.preference.concat("i");
    //     console.log("atif");
    //   }
    // }

    let personalFormDetails ={
      f_name: this.formData[0].value.f_name,
      l_name: this.formData[0].value.l_name,
      email: this.formData[0].value.email,
      password: this.formData[0].value.password,
      phone_no: this.formData[0].value.phone_no,
      portfolio: this.formData[0].value.portfolio,
      preferred_job_role: this.formData[0].value.preferred_job_role,
      agg_percentage: this.formData[1].value.agg_percentage,
      college_location: this.formData[1].value.college_location,
      year_of_passing: this.formData[1].value.year_of_passing,    
      isFresher: this.applicantType,
      appeared_for_test: this.formData[2].value.appeared_test,
      years_of_experience: this.formData[2].value.years_of_exp,
      current_ctc: this.formData[2].value.current_ctc,
      expected_ctc: this.formData[2].value.expected_ctc,
      familiar_tech: this.formData[2].value.familiar_skills,
      expertise_tech: this.formData[2].value.skills,
    }
      console.log(personalFormDetails);
      this.form_data.databaseDetails=personalFormDetails;
      console.log(this.form_data.databaseDetails);
  }

  

}
