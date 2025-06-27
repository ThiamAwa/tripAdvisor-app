import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionEditPageComponent } from './profession-edit-page.component';

describe('ProfessionEditPageComponent', () => {
  let component: ProfessionEditPageComponent;
  let fixture: ComponentFixture<ProfessionEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
