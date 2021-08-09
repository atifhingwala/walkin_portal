import { FormService } from 'src/app/form.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  constructor(private form_data: FormService, public router: Router, private http: HttpClient) { }
  
  ngOnInit(): void {
    //console.log(this.databaseData);
  }

  user_id:any;
  databaseData: any;
  onCreate(){
    this.databaseData=this.form_data.databaseDetails;
    console.log(this.databaseData);

    this.http.post("https://localhost:5001/api/authenticate/register", this.databaseData, {responseType: "json"}).subscribe(response=>{
      console.log(response);
      this.databaseData['user_id']=<string>response[0].userguid;
      console.log(this.databaseData.user_id);
      this.user_id=<string>response[0].userguid;
      this.form_data.user_id=this.user_id;

      this.http.post("https://localhost:5001/api/authenticate/registerInWalkIn", this.databaseData, {responseType: "json"}).subscribe(response=>{
        console.log(response);
      })

    });
    this.router.navigate(['/login']);
    
  }

  


 

}
