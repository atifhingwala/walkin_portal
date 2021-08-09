import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/form.service';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-hall-ticket',
  templateUrl: './hall-ticket.component.html',
  styleUrls: ['./hall-ticket.component.scss']
})
export class HallTicketComponent implements OnInit {

  constructor(private form_service: FormService, private http: HttpClient) { }

  info: any;
  hallTicketData:any;
  ngOnInit(): void {
    this.hallTicketData=this.form_service.hallTicketResponse;
    console.log(this.hallTicketData);
    let data={
      walkin_id: this.hallTicketData.table2[0].walkin_id,
      slot_id: this.hallTicketData.table1[0].slot_id,
      user_id: this.hallTicketData.table[0].user_id 
    }
    console.log(data);

    this.http.post("https://localhost:5001/api/authenticate/hallTicket", data, {responseType: "json"}).subscribe(response=>{
      console.log(response);
      this.info=response;
    })
  }

}
