import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import {Project} from '../../models/project';
import {SharedService} from '../../services/shared.service';
import { Task } from '../../models/task';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { OrderModule,OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
item:Project
isDisabled = true;
display='none'; 
StartDt:string;
EndDt:string;
StDate = new Date();
EdDate = new Date();
msg:string;
flagProject:string;
BtnText:string = "Add";
//angForm: FormGroup;
UserModaldisplay='none'; 
  itemEndTask:Project;
  list:Project[];
  list1:Project[];
  list2:Project[];
  listFilter:Project[];
  Userlist:User[];
  Userlist1:User[];
  flagUser:string;
  Order="Project Id";
  //form: FormGroup;//  submitted=false;
  SearchbyProject()
  {
   console.log(this.flagProject);
   this.list1=this.list.filter(i=>i.ProjectName!=null && i.ProjectName.startsWith(this.flagProject));
  }

EnableDateFields() {
        this.isDisabled = !this.isDisabled;
    //     this.StartDt = this._datepipe.transform(this.StDate,'dd/MM/yyyy');
    // this.EndDt = this._datepipe.transform(this.EdDate.setDate(this.StDate.getDate()+1),'dd/MM/yyyy');
    // this.item.SDate = new Date(this.StartDt);
    // this.item.EDate = new Date(this.EndDt); 
        return;
    }

  constructor(private _datepipe : DatePipe,private _router:Router,private _service:SharedService) {
    this.item = new Project();
    this._service.GetProject()
    .subscribe(i=>this.list=this.list1=i);
    this._service.GetUser()
    .subscribe(i=>this.Userlist=this.Userlist1=i);
    this.StartDt = this._datepipe.transform(this.StDate,'dd/MM/yyyy');
    this.EndDt = this._datepipe.transform(this.EdDate.setDate(this.StDate.getDate()+1),'dd/MM/yyyy');
    this.item.SDate = new Date();
    this.item.EDate = new Date();
    this.item.EDate.setDate(this.item.EDate.getDate()+1);
console.log(this.item.SDate);
console.log(this.item.EDate);
   }

  

  ngOnInit() {
      }

  SearchbyUser()
  {
   console.log(this.flagUser);
   this.Userlist1=this.Userlist.filter(i=>i.FirstName!=null && i.FirstName.startsWith(this.flagUser));
  }

  Add()
  {
      if(this.item.ProjectName==null || this.item.ProjectName=='')
      {
        alert("Project Field Cannot be Empty");
        return;
      }
      else if(this.item.UserId==null)
      {
        alert("Please Choose Manager");
        return;
      }
      else
      {
        if(this.BtnText=="Add")
    {
    //Call service method
 this._service.AddProject(this.item)
 .subscribe(i=>{
   this.msg=i
   console.log(this.msg);
   alert(this.msg.toString());
   window.location.reload();
  });
    }
    else if(this.BtnText=="Update")
    {
      this._service.UpdateProject(this.item)
      .subscribe(i=>{
        this.msg=i
        console.log(this.msg);
        alert('Project Changes Updated!!!');
        window.location.reload();
      });
    }
  }
}
  
  openUserModal(){
    this.UserModaldisplay='block'; 
  }
  onUserCloseHandled(){
  this.UserModaldisplay='none'; 
  }

  AssignUser(Usr:User)
  {
    this.flagUser = Usr.FirstName+" " +Usr.LastName;
    this.item.UserId=Usr.UserId;
  }

  SortByStartDate()
  {
    this.Order = "SDate";
  }
  SortByEndDate()
  {
    this.Order = "EDate";
  }
  SortByPriority()
  {
    this.Order = "Priority";
  }
  SortByCompleted()
  {
    this.Order = "CompletedTasks";
  }

  AssignProject(Prj:Project)
  {
    this.flagProject = Prj.ProjectName;
    this.item.ProjectId=Prj.ProjectId;
  }

  Update(Updateitem:Project)
  {
    this.item=Updateitem;
    this.BtnText="Update";
  //this._router.navigate(['/View']);
  }
   
  openModal(){
    this.display='block'; 
 }
 onCloseHandled(){
  this.display='none'; 
}
DeleteProject(Deleteitem:Project)
{
  this._service.DeleteProject(Deleteitem)
    .subscribe(i=>{
      this.msg=i
      console.log(this.msg);
      alert('Project Suspended!!!');
      window.location.reload();
    });
}
}
