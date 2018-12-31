import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {SharedService} from '../../services/shared.service';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';
import {MatDividerModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewtaskComponent } from './viewtask.component';
import { OrderPipe } from 'ngx-order-pipe';
import {FilterPipe} from '../../pipes/filter.pipe';
import {Task} from '../../models/task';

describe('ViewtaskComponent', () => {
  let component: ViewtaskComponent;
  let fixture: ComponentFixture<ViewtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtaskComponent,OrderPipe,FilterPipe ],
      imports : [RouterTestingModule,FormsModule,HttpModule,MatDividerModule,MatDialogModule],
      providers:[SharedService,OrderPipe,FilterPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtaskComponent);
    component = fixture.componentInstance;
    //component.item = new Task(); 
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
