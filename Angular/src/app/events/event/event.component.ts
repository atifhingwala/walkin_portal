import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/form.service';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: DataService
    , private form_service: FormService, private http: HttpClient, private router: Router) { }

  id: number;
  form: FormGroup;

  ngOnInit(): void {

    this.form= new FormGroup({
      "slot_time": new FormControl(),
      "preference": new FormArray([])
    });
    
    this.id= this.route.snapshot.params['id'];
    console.log(this.id);

    this.refreshWalkInDetailById(this.id);
  }

  events: any={};
  refreshWalkInDetailById(id){
      this.service.getWalkInDetailById(id).subscribe(data=>{
        this.events=data;
        console.log(this.events);
        //console.log(this.events.table[0].walkin_id);
        
        for(let i of this.events.table3){
          this.addPreference();
        }
      })
  }

  addPreference(){
    const control= new FormControl(false);
    (<FormArray>this.form.get('preference')).push(control);
  }


  onApply(){
    let details={
      walkin_id: this.id,
      slot_id: this.form.value.slot_time,
      job_role_id: this.form.value.preference,
      user_id: this.form_service.user_id
    }
    console.log(this.form);
    console.log(details);

    this.http.post("https://localhost:5001/api/authenticate/insertRegister", details, {responseType: "json"}).subscribe(response=>{
      console.log(response);
      this.form_service.hallTicketResponse=response;

      this.router.navigate(['/success']);
    })
  }

}
