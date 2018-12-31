import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import {SharedService} from '../../services/shared.service';
import { Router } from '@angular/router';
import { OrderModule,OrderPipe } from 'ngx-order-pipe';
import {Project} from '../../models/project';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
item:Task;
itemEndTask:Task;
Projectlist:Project[];
Projectlist1:Project[];
Viewlist:Task[];
Viewlist1:Task[];
Order="Task Id";
display='none';
flagProject:string;
flagProjectID:number;
msg:string;
  constructor(private _router:Router,private _service:SharedService) {
    this.item= new Task();
    this._service.GetTask()
    .subscribe(i=>this.Viewlist=this.Viewlist1=i);
    this._service.GetProject()
    .subscribe(i=>this.Projectlist=this.Projectlist1=i);
   }

  ngOnInit() {
  }

  AssignProject(Prj:Project)
  {
    if(Prj == null)
    {
      this.flagProject = "All"
    }
  }

  SearchTask()
{
  console.log(this.flagProject);
  this.Viewlist1=this.Viewlist.filter(i=>i.ProjectId!=null && i.ProjectId==this.flagProjectID);
}

  SearchbyProject()
  {
   console.log(this.flagProject);
   this.Projectlist1=this.Projectlist.filter(i=>i.ProjectName!=null && i.ProjectName.startsWith(this.flagProject));
  }
  

  Update(tid:number)  
  {
    this._router.navigate(['/UpdateTask',{'tid':tid}]);
  }

  EndTask(tid:number)
  {
    // this._router.navigate(['/EndTask',{'tid':tid}]);
      this._service.Search(tid)
    .subscribe((i:Task)=>{
      console.log(i);
      this.itemEndTask=i;
      console.log(this.itemEndTask);
      this.itemEndTask.TaskEndFlag=true;
      console.log(this.itemEndTask);
      this.itemEndTask.Status="Completed";
      console.log(this.itemEndTask);
      this.UpdateEndTaskValue();
      });
  }

  UpdateEndTaskValue()
  {
    this._service.UpdateTask(this.itemEndTask)
    .subscribe((k)=>{
      console.log(k);
      console.log(this.itemEndTask);
      this.msg=k;
      console.log(this.msg);
      alert('Task Ended!!!.Further Edits are disabled.');
      window.location.reload();
   });
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
    this.Order = "TaskEndFlag";
  }
  openModal(){
    this.display='block'; 
 }
 onCloseHandled(){
  this.display='none'; 
}

}
