import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponenteComponent } from './new-componente.component';

describe('NewComponenteComponent', () => {
  let component: NewComponenteComponent;
  let fixture: ComponentFixture<NewComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
