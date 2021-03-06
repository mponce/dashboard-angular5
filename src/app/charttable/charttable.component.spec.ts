import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { CharttableComponent } from './charttable.component';

// mock data service
class MockDataService extends DataService {};

describe('CharttableComponent', () => {
  let component: CharttableComponent;
  let fixture: ComponentFixture<CharttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CharttableComponent ],
      providers: [{
        provide: DataService,
        useClass: MockDataService
      },
      {
        provide: HttpClient
      }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
