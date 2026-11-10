import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienciaCard } from './experiencia-card';

describe('ExperienciaCard', () => {
  let component: ExperienciaCard;
  let fixture: ComponentFixture<ExperienciaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienciaCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienciaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
