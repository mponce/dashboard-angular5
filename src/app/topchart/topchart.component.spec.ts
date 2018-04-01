import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { TopchartComponent } from './topchart.component';

// mock data service
class MockDataService extends DataService {};

describe('TopchartComponent', () => {
  let component: TopchartComponent;
  let fixture: ComponentFixture<TopchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ TopchartComponent ],
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
    fixture = TestBed.createComponent(TopchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
