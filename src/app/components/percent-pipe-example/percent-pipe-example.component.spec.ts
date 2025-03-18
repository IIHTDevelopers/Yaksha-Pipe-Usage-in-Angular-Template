import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PercentPipeExampleComponent } from './percent-pipe-example.component';

describe('PercentPipeExampleComponent', () => {
  let component: PercentPipeExampleComponent;
  let fixture: ComponentFixture<PercentPipeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PercentPipeExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PercentPipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should format the value correctly as percentage', () => {
      const percentageText = fixture.nativeElement.querySelector('p').textContent;
      expect(percentageText).toContain('25.78%');
    });
  });
});
