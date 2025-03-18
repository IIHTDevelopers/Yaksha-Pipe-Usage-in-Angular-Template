import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DatePipeExampleComponent } from './components/date-pipe-example/date-pipe-example.component';
import { CurrencyPipeExampleComponent } from './components/currency-pipe-example/currency-pipe-example.component';
import { DecimalPipeExampleComponent } from './components/decimal-pipe-example/decimal-pipe-example.component';
import { PercentPipeExampleComponent } from './components/percent-pipe-example/percent-pipe-example.component';
import { StringPipesExampleComponent } from './components/string-pipes-example/string-pipes-example.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                DatePipeExampleComponent,
                CurrencyPipeExampleComponent,
                DecimalPipeExampleComponent,
                PercentPipeExampleComponent,
                StringPipesExampleComponent
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the app component', () => {
            expect(app).toBeTruthy();
        });

        it('should have title "Angular Pipes Assignment"', () => {
            const compiled = fixture.nativeElement as HTMLElement;
            expect(compiled.querySelector('h1')?.textContent).toContain('Angular Pipes Assignment');
        });

        it('should display the date-pipe-example component', () => {
            const compiled = fixture.nativeElement as HTMLElement;
            const datePipeElement = compiled.querySelector('app-date-pipe-example');
            expect(datePipeElement).toBeTruthy();
        });

        it('should display the currency-pipe-example component', () => {
            const compiled = fixture.nativeElement as HTMLElement;
            const currencyPipeElement = compiled.querySelector('app-currency-pipe-example');
            expect(currencyPipeElement).toBeTruthy();
        });

        it('should display the decimal-pipe-example component', () => {
            const compiled = fixture.nativeElement as HTMLElement;
            const decimalPipeElement = compiled.querySelector('app-decimal-pipe-example');
            expect(decimalPipeElement).toBeTruthy();
        });

        it('should display the percent-pipe-example component', () => {
            const compiled = fixture.nativeElement as HTMLElement;
            const percentPipeElement = compiled.querySelector('app-percent-pipe-example');
            expect(percentPipeElement).toBeTruthy();
        });

        it('should display the string-pipes-example component', () => {
            const compiled = fixture.nativeElement as HTMLElement;
            const stringPipesElement = compiled.querySelector('app-string-pipes-example');
            expect(stringPipesElement).toBeTruthy();
        });
    });
});
