import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecimalPipeExampleComponent } from './decimal-pipe-example.component';

describe('DecimalPipeExampleComponent', () => {
  let component: DecimalPipeExampleComponent;
  let fixture: ComponentFixture<DecimalPipeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecimalPipeExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DecimalPipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should format the score correctly in decimal', () => {
      const decimalScore = fixture.nativeElement.querySelector('p').textContent;
      expect(decimalScore).toContain('1,234.57');
    });

    it('should round the decimal score correctly', () => {
      const roundedScore = fixture.nativeElement.querySelectorAll('p')[1].textContent;
      expect(roundedScore).toContain('1,235');
    });
  });
});
