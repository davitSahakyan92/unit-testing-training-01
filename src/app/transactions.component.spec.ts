import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import TransactionsComponent  from './transactions.component'
import { By } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AddExpenseComponent } from './add-transaction.component';

describe('TransactionsComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [DatePipe, AddExpenseComponent],
        }).compileComponents();
    });
  
    it('should create component', () => {
        const fixture = TestBed.createComponent(TransactionsComponent);
        const component = fixture.componentInstance;  
        expect(component).toBeDefined();
    })

    it('#deleteTransactionBtn should continue text Delete', () => {
        const fixture = TestBed.createComponent(TransactionsComponent);
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('#deleteTransactionBtn').textContent).toContain('Delete');
    });

    it('on click deleteTransactionBtn should be called deleteTransaction function', () => {
        const fixture = TestBed.createComponent(TransactionsComponent);
        const component = fixture.componentInstance;  
        const deleteTransactionSpy = spyOn(component, 'deleteTransaction');
        fixture.detectChanges();
        let button = fixture.debugElement.query(By.css('#deleteTransactionBtn'))
        button.triggerEventHandler('click', null);

        expect(deleteTransactionSpy).toHaveBeenCalled();
        ;
    });
});