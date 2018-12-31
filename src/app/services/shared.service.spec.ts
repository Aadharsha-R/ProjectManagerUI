import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {HttpModule} from '@angular/http'
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpModule,
      HttpClientTestingModule,
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });

  it('should return Task Count > 0', () => {
    const service: SharedService = TestBed.get(SharedService);
    const list = service.GetTask()
    expect(list).toBeDefined();
    
  });
  it('should return ProjectList', () => {
    const service: SharedService = TestBed.get(SharedService);
    const list = service.GetProject()
    expect(list).toBeDefined();
    
  });
  it('should return UserList', () => {
    const service: SharedService = TestBed.get(SharedService);
    const list = service.GetUser()
    expect(list).toBeDefined();
    
  });
});
