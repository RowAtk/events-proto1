import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventsStatusPage } from './events-status.page';

describe('EventsStatusPage', () => {
  let component: EventsStatusPage;
  let fixture: ComponentFixture<EventsStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
