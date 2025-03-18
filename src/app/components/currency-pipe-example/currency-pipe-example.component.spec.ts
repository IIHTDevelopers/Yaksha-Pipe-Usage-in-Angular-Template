import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyPipeExampleComponent } from './currency-pipe-example.component';

describe('CurrencyPipeExampleComponent', () => {
  let component: CurrencyPipeExampleComponent;
  let fixture: ComponentFixture<CurrencyPipeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyPipeExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CurrencyPipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should format the price correctly as currency', () => {
      const priceText = fixture.nativeElement.querySelectorAll('p')[0].textContent;
      expect(priceText).toContain('$1,234.56');
    });

    it('should format the price in USD', () => {
      const usdPrice = fixture.nativeElement.querySelectorAll('p')[1].textContent;
      expect(usdPrice).toContain('USD');
    });

    it('should format the price with custom symbol', () => {
      const eurPrice = fixture.nativeElement.querySelectorAll('p')[2].textContent;
      expect(eurPrice).toContain('€');
    });
  });
});
