import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { AddprojectComponent } from './addproject.component';
import {SharedService} from '../../services/shared.service';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';
import {MatDividerModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

describe('AddprojectComponent', () => {
  let component: AddprojectComponent;
  let fixture: ComponentFixture<AddprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprojectComponent ],
      imports : [RouterTestingModule,FormsModule,HttpModule,MatDividerModule,MatDialogModule],
      providers:[SharedService,DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
