import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

 readonly apiUrl= "https://localhost:5001"; 

  constructor(private http: HttpClient) { }

  getWalkInList():Observable<any[]>{

    console.log(this.http.get<any>(this.apiUrl + '/walkin'))
    return this.http.get<any>(this.apiUrl + '/walkin');
  }

  getWalkInDetailById(id: number):Observable<any[]>{
    console.log(id);

    let param_id= new HttpParams()
      .append('walkin_id', id);
    
    console.log(this.http.get<any>(this.apiUrl + '/walkin/' + id, {params: param_id}))
    return this.http.get<any>(this.apiUrl + '/walkin/' + id , {params: param_id});
  }

  getRoleDetailById(id: number):Observable<any[]>{  
    console.log(id);

    let param_id= new HttpParams()
      .append('walkin_id', id);
    
    console.log(this.http.get<any>(this.apiUrl + '/walkin/role/' + id, {params: param_id}))
    return this.http.get<any>(this.apiUrl + '/walkin/role/' + id , {params: param_id});
  }

  getPreRequisiteDetailById(id: number):Observable<any[]>{
    console.log(id);

    let param_id= new HttpParams()
      .append('walkin_id', id);
    
    console.log(this.http.get<any>(this.apiUrl + '/walkin/pre/' + id, {params: param_id}))
    return this.http.get<any>(this.apiUrl + '/walkin/pre/' + id , {params: param_id});
  }

}
