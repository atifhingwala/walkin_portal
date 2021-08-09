import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { DataService } from '../data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private service: DataService, private http: HttpClient) { }

  customers: any;
  ngOnInit(): void{
    this.refreshWalkInList();

    this.http.get("https://localhost:5001/api/authenticate")
      .subscribe(response=>{
        this.customers=response;
        console.log(response);
        console.log(this.customers);
      }, err=> {
        console.log('error');
      })
  }

  //getting data from api
  events: any={};
  refreshWalkInList(){
      this.service.getWalkInList().subscribe(data=>{
        this.events=data;
        console.log(this.events);
        //console.log(this.events.table[0].walkin_id);
  
      })
  }

  

}
