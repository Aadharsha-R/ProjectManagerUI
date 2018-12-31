import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import {Task} from '../models/task';
import {Project} from '../models/project';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  GetProjurl:string='http://localhost/ProjectManager.API/GetProject'
  PostProjurl:string='http://localhost/ProjectManager.API/AddProject'
  PutProjurl:string='http://localhost/ProjectManager.API/UpdateProject'
  GetTaskurl:string='http://localhost/ProjectManager.API/GetTask'
  PutTaskurl:string='http://localhost/ProjectManager.API/UpdateTask'
  PostTaskurl:string='http://localhost/ProjectManager.API/AddTask'
  searchurl:string='http://localhost/ProjectManager.API/SearchTask'
  GetUserurl:string='http://localhost/ProjectManager.API/GetUser'
  PostUserurl:string='http://localhost/ProjectManager.API/AddUser'
  PutUserurl:string='http://localhost/ProjectManager.API/UpdateUser'
  DeleteUserurl:string='http://localhost/ProjectManager.API/DeleteUser'
  
  
  
  
  constructor(private _http:Http) { }
  GetProject():Observable<Project[]>
  {
    return this._http.get(this.GetProjurl)
    .pipe(map((response:Response)=><Project[]>response.json()))
  }

  AddProject(item:Project):Observable<any>
  {
    return this._http.post(this.PostProjurl,item)
    .pipe(map((response:Response)=><any>response.json))

  }
  UpdateProject(item:Project):Observable<any>
  {
    return this._http.put(this.PutProjurl,item)
    .pipe(map((response:Response)=><any>response.json))
  }
  AddTask(item:Task):Observable<any>
  {
    return this._http.post(this.PostTaskurl,item)
    .pipe(map((response:Response)=><any>response.json))

  }
  GetTask():Observable<Task[]>
  {
    return this._http.get(this.GetTaskurl)
    .pipe(map((response:Response)=><Task[]>response.json()))
  }  
  UpdateTask(item:Task):Observable<any>
  {
    return this._http.put(this.PutTaskurl,item)
    .pipe(map((response:Response)=><any>response.json))
  }
  GetUser():Observable<User[]>
  {
    return this._http.get(this.GetUserurl)
    .pipe(map((response:Response)=><User[]>response.json()))
  }
  AddUser(item:User):Observable<any>
  {
    return this._http.post(this.PostUserurl,item)
    .pipe(map((response:Response)=><any>response.json))

  }
  UpdateUser(item:User):Observable<any>
  {
    return this._http.put(this.PutUserurl,item)
    .pipe(map((response:Response)=><any>response.json))
  }
  DeleteUser(item:User):Observable<any>
  {
    return this._http.delete(this.DeleteUserurl+"/"+item.UserId)
    .pipe(map((response:Response)=><any>response.json))
  }
  Search(Id:Number):Observable<Task>
  {
    return this._http.get(this.searchurl+"/"+Id)
    .pipe(map((response:Response)=><Task>response.json()))
  }
  
  // Delete(Id:number)
  // {
  //   return this._http.delete(this.url+"/"+Id)
  //   .pipe(map((response:Response)=><Task[]>response.json()))
  // }
  // Edit(item:Task):Observable<any>
  // {
  //   return this._http.put(this.Puturl,item)
  //   .map((response:Response)=><any>response.json);
  // }
}
