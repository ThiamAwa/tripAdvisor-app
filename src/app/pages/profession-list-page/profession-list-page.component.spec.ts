import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionListPageComponent } from './profession-list-page.component';

describe('ProfessionListPageComponent', () => {
  let component: ProfessionListPageComponent;
  let fixture: ComponentFixture<ProfessionListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
