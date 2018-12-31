import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { AddtaskComponent } from './addtask.component';
import {SharedService} from '../../services/shared.service';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';
import {FilterPipe} from '../../pipes/filter.pipe';
// import { Task } from '../../models/task';


describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;
  //let list1:Task[]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtaskComponent,FilterPipe ],
      imports : [RouterTestingModule,FormsModule,HttpModule],
      providers:[SharedService,DatePipe,FilterPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should fill the list', () =>{
  //   expect(component.list1).toBeDefined();
  // });
});
