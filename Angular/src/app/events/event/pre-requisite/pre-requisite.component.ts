import { DataService } from './../../../data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-requisite',
  templateUrl: './pre-requisite.component.html',
  styleUrls: ['./pre-requisite.component.scss']
})
export class PreRequisiteComponent implements OnInit {


  @Input() event_id: number;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    console.log(this.event_id);

    this.refreshPreRequisiteDetailById(this.event_id);
  }

  events: any={};
  refreshPreRequisiteDetailById(id){
      this.service.getPreRequisiteDetailById(id).subscribe(data=>{
        this.events=data;
        console.log(this.events);
          
      })
  }


  show1=0;
  flag1=0;
  elements1: any;
  showRequisite= (id:number) =>{

    const element: any= document.getElementById('p'+id);
    if(element.style.display=="block"){
      element.style.display="none";
    }
    else{
      element.style.display="block";
    }
    console.log(element);
    
    /* up&downKey */
    const hideShowKey: any= document.querySelector(".expand-svg1");
  
    if(this.show1==1){
      hideShowKey.setAttribute("src", "../../assets/icons_new/expand_more_black_24dp.svg");
      this.show1=0;
    }
    else{
      hideShowKey.setAttribute("src", "../../assets/icons_new/expand_less_black_24dp.svg");
      this.show1=1;
    }
      
  }


}
