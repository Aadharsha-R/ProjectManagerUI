import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AddtaskComponent } from './ui/addtask/addtask.component';
import { UpdatetaskComponent } from './ui/updatetask/updatetask.component';
import { ViewtaskComponent } from './ui/viewtask/viewtask.component';
import { AdduserComponent } from './ui/adduser/adduser.component';
import { AddprojectComponent } from './ui/addproject/addproject.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DatePipe } from '@angular/common'
import { HttpModule } from '@angular/http';
import {MatDividerModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedService } from './services/shared.service';
import { OrderModule } from 'ngx-order-pipe';

const appRoutes : Routes = [

  { path : 'AddProject' , component : AddprojectComponent } ,
  { path : 'UpdateTask' , component : UpdatetaskComponent } ,
  { path : 'ViewTask' , component : ViewtaskComponent }  ,
  { path : 'AddUser' , component : AdduserComponent } ,
  { path : 'AddTask' , component : AddtaskComponent } ,
];

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    ViewtaskComponent,
    AdduserComponent,
    AddprojectComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatDialogModule,
    HttpModule,
    OrderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatePipe,SharedService,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
