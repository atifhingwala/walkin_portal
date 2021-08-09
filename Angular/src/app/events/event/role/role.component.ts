import { DataService } from './../../../data.service';
import { Identifiers } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  @Input() roleId: number;
  constructor(private service: DataService) { }

  ngOnInit(): void {
    console.log(this.roleId);

    this.refreshRoleDetailById(this.roleId);
  }

  events: any={};
  refreshRoleDetailById(id){
    this.service.getRoleDetailById(id).subscribe(data =>{
      this.events= data;
      console.log(this.events);
    })
  }
  
  click=1;

  hideElement= (id: any) =>{
    console.log(id);
    const element: any= document.getElementById(id);
    console.log(element);
    
    if(element.style.display=="block"){
      element.style.display="none";
    }
    else{
      element.style.display="block";
    }

    const rotate: any= document.getElementById("p"+id);
    console.log(rotate);
    if(this.click==1){
      rotate.setAttribute("src","../../assets/icons_new/expand_less_black_24dp.svg");
      
      this.click=2;
    }
    else{
      rotate.setAttribute("src","../../assets/icons_new/expand_more_black_24dp.svg");
      this.click=1;
    }
    
    
  }

}
