import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { DatePipeExampleComponent } from './date-pipe-example.component';
import { CommonModule } from '@angular/common';

describe('DatePipeExampleComponent', () => {
  let component: DatePipeExampleComponent;
  let fixture: ComponentFixture<DatePipeExampleComponent>;
  let datePipe: DatePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatePipeExampleComponent],
      imports: [CommonModule],
      providers: [DatePipe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DatePipeExampleComponent);
    component = fixture.componentInstance;
    datePipe = TestBed.inject(DatePipe);  // Get the DatePipe instance
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should format the date correctly with the default format', () => {
      const formattedDate = fixture.nativeElement.querySelector('p').textContent;
      const expectedDate = datePipe.transform(component.currentDate, 'mediumDate'); // format the date using DatePipe
      expect(formattedDate).toContain(expectedDate);
    });

    it('should format the date as "shortDate"', () => {
      const shortDate = fixture.nativeElement.querySelectorAll('p')[1].textContent;
      const expectedShortDate = datePipe.transform(component.currentDate, 'shortDate');  // format using shortDate
      expect(shortDate).toContain(expectedShortDate);
    });

    it('should format the date as "fullDate"', () => {
      const fullDate = fixture.nativeElement.querySelectorAll('p')[2].textContent;
      const expectedFullDate = datePipe.transform(component.currentDate, 'fullDate');  // format using fullDate
      expect(fullDate).toContain(expectedFullDate);
    });
  });
});
