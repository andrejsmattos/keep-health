import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeDetailComponent } from './atividade-detail.component';

describe('AtividadeDetailComponent', () => {
  let component: AtividadeDetailComponent;
  let fixture: ComponentFixture<AtividadeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadeDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtividadeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
