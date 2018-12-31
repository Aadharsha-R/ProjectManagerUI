import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {SharedService} from '../../services/shared.service';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpModule} from '@angular/http';
import {MatDividerModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {FilterPipe} from '../../pipes/filter.pipe';
import {RouterModule } from '@angular/router';
import { UpdatetaskComponent } from './updatetask.component';
import {Task} from '../../models/task';

describe('UpdatetaskComponent', () => {
  let component: UpdatetaskComponent;
  let fixture: ComponentFixture<UpdatetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetaskComponent ,FilterPipe],
      imports : [RouterTestingModule,RouterModule,FormsModule,HttpModule,MatDividerModule,MatDialogModule],
      providers:[SharedService,FilterPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetaskComponent);
    component = fixture.componentInstance;
    component.item = new Task();  
    component.tid = 1;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
