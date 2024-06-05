import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YazieklePage } from './yaziekle.page';

describe('YazieklePage', () => {
  let component: YazieklePage;
  let fixture: ComponentFixture<YazieklePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YazieklePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
