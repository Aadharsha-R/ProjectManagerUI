import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import {Project} from '../../models/project';
import {User} from '../../models/user';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  item:Task;
  list:Task[];
  list1:Task[];
  Projectlist:Project[];
  Projectlist1:Project[];
  Userlist:User[];
  Userlist1:User[];
  IsEnabled=false;
  msg:string;
  flagParentTask:string;
  flagProject:string;
  flagUser:string;
  display='none';
  ParentTaskModaldisplay='none';
  UserModaldisplay='none';
  constructor(private _service:SharedService) {
    this.item = new Task();
    this._service.GetTask()
    .subscribe(i=>this.list=this.list1=i);
    this._service.GetProject()
    .subscribe(i=>this.Projectlist=this.Projectlist1=i);
    this._service.GetUser()
    .subscribe(i=>this.Userlist=this.Userlist1=i);
   }

  ngOnInit() {
  }
  SearchbyParentTask()
  {
   console.log(this.flagParentTask);
   this.list1=this.list.filter(i=>i.TaskName!=null && i.TaskName.startsWith(this.flagParentTask));
  }
  
  SearchbyProject()
  {
   console.log(this.flagProject);
   this.Projectlist1=this.Projectlist.filter(i=>i.ProjectName!=null && i.ProjectName.startsWith(this.flagProject));
  }
  SearchbyUser()
  {
   console.log(this.flagUser);
   this.Userlist1=this.Userlist.filter(i=>i.FirstName!=null && i.FirstName.startsWith(this.flagUser));
  }
  AssignProject(Prj:Project)
  {
    this.flagProject = Prj.ProjectName;
    this.item.ProjectId=Prj.ProjectId;
  }
  AssignUser(Usr:User)
  {
    this.flagUser = Usr.FirstName+" " +Usr.LastName;
    this.item.UserId=Usr.UserId;
    this.item.User=Usr.FirstName+" " +Usr.LastName;
  }
  AssignParentTask(currentitem:Task)
  {
    this.flagParentTask = currentitem.TaskName;
    this.item.ParentTask=currentitem.TaskName;
  }
  DisableFields()
  {
  this.IsEnabled = !this.IsEnabled;
  return;
  }
  Add()
  {
    //Call service method
 this._service.AddTask(this.item)
 .subscribe(i=>{
   this.msg=i
   console.log(this.msg);
   alert("Task added Successfully!!");
   window.location.reload();
  });
    }
    openModal(){
      this.display='block'; 
   }
   onCloseHandled(){
    this.display='none'; 
 }
 openParentTaskModal(){
  this.ParentTaskModaldisplay='block'; 
}
onParentTaskCloseHandled(){
this.ParentTaskModaldisplay='none'; 
}
openUserModal(){
  this.UserModaldisplay='block'; 
}
onUserCloseHandled(){
this.UserModaldisplay='none'; 
}
}
