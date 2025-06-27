import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionFormPageComponent } from './profession-form-page.component';

describe('ProfessionFormPageComponent', () => {
  let component: ProfessionFormPageComponent;
  let fixture: ComponentFixture<ProfessionFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
