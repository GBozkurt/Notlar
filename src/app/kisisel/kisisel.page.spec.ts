import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KisiselPage } from './kisisel.page';

describe('KisiselPage', () => {
  let component: KisiselPage;
  let fixture: ComponentFixture<KisiselPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KisiselPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
