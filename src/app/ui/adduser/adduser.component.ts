import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {SharedService} from '../../services/shared.service';
import { OrderModule,OrderPipe } from 'ngx-order-pipe';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
item:User;
list:User[];
  list1:User[];
  list2:User[];
  listFilter:User[];
  msg:string;
  BtnText="Add";
  Order="User Id";
  flagUser:string;
  constructor(private _service:SharedService) {
    this.item= new User();
    this._service.GetUser()
    .subscribe(i=>this.list=this.list1=i);
   }
  
  //form: FormGroup;//  submitted=false;
  SearchbyUser()
  {
   console.log(this.flagUser);
   this.list1=this.list.filter(i=>i.FirstName!=null && i.FirstName.startsWith(this.flagUser));
  }

  ngOnInit() {
  }
  Add()
  {
    if(this.BtnText=="Add")
    {
    //Call service method
 this._service.AddUser(this.item)
 .subscribe(i=>{
   this.msg=i
   console.log(this.msg);
   alert("User Added Successfully!!");
   window.location.reload();
  });
    }
    else if(this.BtnText=="Update")
    {
      this._service.UpdateUser(this.item)
      .subscribe(i=>{
        this.msg=i
        console.log(this.msg);
        alert('User Changes Updated!!!');
        window.location.reload();
      });
    }
  }


  Update(Updateitem:User)
  {
    this.item=Updateitem;
    this.BtnText="Update";
  //this._router.navigate(['/View']);
  }

  Delete(Deleteitem:User)
  {
    this._service.DeleteUser(Deleteitem)
      .subscribe(i=>{
        this.msg=i
        console.log(this.msg);
        alert('User Changes Deleted!!!');
        window.location.reload();
      });
  }

  SortByFirstName()
  {
    this.Order = "FirstName";
  }
  SortByLastName()
  {
    this.Order = "LastName";
  }
  SortByEmployeeID()
  {
    this.Order = "EmployeeID";
  }

}
