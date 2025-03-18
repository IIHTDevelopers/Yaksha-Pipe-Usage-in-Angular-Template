import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-pipe-example',
  templateUrl: './date-pipe-example.component.html',
  providers: [DatePipe]
})
export class DatePipeExampleComponent {
  currentDate = null;
}
