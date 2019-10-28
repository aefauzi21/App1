import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab4DetailPage } from './tab4-detail.page';

describe('Tab4DetailPage', () => {
  let component: Tab4DetailPage;
  let fixture: ComponentFixture<Tab4DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab4DetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab4DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
