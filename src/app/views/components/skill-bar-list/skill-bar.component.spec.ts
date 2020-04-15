import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBarListComponent } from './skill-bar.component';

describe('SkillComponent', () => {
  let component: SkillBarListComponent;
  let fixture: ComponentFixture<SkillBarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillBarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
