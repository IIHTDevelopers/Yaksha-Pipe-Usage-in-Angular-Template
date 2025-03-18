import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StringPipesExampleComponent } from './string-pipes-example.component';

describe('StringPipesExampleComponent', () => {
  let component: StringPipesExampleComponent;
  let fixture: ComponentFixture<StringPipesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StringPipesExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StringPipesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should convert text to uppercase', () => {
      const uppercaseText = fixture.nativeElement.querySelector('p').textContent;
      expect(uppercaseText).toContain('ANGULAR IS AMAZING!');
    });

    it('should convert text to lowercase', () => {
      const lowercaseText = fixture.nativeElement.querySelectorAll('p')[1].textContent;
      expect(lowercaseText).toContain('angular is amazing!');
    });

    it('should slice the text correctly', () => {
      const slicedText = fixture.nativeElement.querySelectorAll('p')[2].textContent;
      expect(slicedText).toContain('Angular');
    });
  });
});
