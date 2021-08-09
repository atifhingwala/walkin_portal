import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/form.service';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  

  constructor(private form_data: FormService, private http: HttpClient, private router: Router) { }

  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm= new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
    })
  }

  onSubmit(){
    console.log(this.loginForm);
    console.log(this.loginForm.value.email);
    // this.form_data.loginForm=this.loginForm;

    const credentials={
      'email': this.loginForm.value.email,
      'password': this.loginForm.value.password
    }

    this.http.post("https://localhost:5001/api/authenticate/login",credentials, {responseType: "text"}).subscribe((response) => {
        console.log(response);
        const token= <any>response;
        console.log(token);
        localStorage.setItem("jwt", token);
        this.invalidLogin=false;
        this.router.navigate(['/events']);
      }, err=>{
        this.invalidLogin=true;
      })


  }


  




}
