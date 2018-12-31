import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser.component';
import {SharedService} from '../../services/shared.service';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';
import {MatDividerModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

describe('AdduserComponent', () => {
  let component: AdduserComponent;
  let fixture: ComponentFixture<AdduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserComponent ],
      imports : [RouterTestingModule,FormsModule,HttpModule,MatDividerModule,MatDialogModule],
      providers:[SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
