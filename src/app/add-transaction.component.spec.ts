import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-transaction.component'
import { By } from '@angular/platform-browser';

describe('AddExpenseComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [AppComponent],
        }).compileComponents();
    });



  
    it('should create component', () => {
        const fixture = TestBed.createComponent(AddExpenseComponent);
        const component = fixture.componentInstance;  
        expect(component).toBeDefined();
    })


  it('#addTransactionBtn should continue text Add Transaction', () => {
        const fixture = TestBed.createComponent(AddExpenseComponent);
        const component = fixture.componentInstance;
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#addTransactionBtn').textContent).toContain('Add Transaction');
  });

it('on click addTransactionBtn should be called addTransaction function', () => {
    const fixture = TestBed.createComponent(AddExpenseComponent);
    const component = fixture.componentInstance;  
    const addTransactionSpy = spyOn(component, 'addTransaction');
  
    let button = fixture.debugElement.query(By.css('#addTransactionBtn'))
    button.triggerEventHandler('click', null);
    
    expect(addTransactionSpy).toHaveBeenCalled();
    ;
  });
  
});
