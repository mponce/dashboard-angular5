import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { SidebarComponent } from './sidebar.component';

// mock data service
class MockDataService extends DataService {};

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ SidebarComponent ],
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
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
