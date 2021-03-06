import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlleventsPage } from './allevents.page';

describe('AlleventsPage', () => {
  let component: AlleventsPage;
  let fixture: ComponentFixture<AlleventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlleventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlleventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
