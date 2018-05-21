import { ExpensesRoutingModule } from './expenses-routing.module';

describe('ExpensesRoutingModule', () => {
  let expensesRoutingModule: ExpensesRoutingModule;

  beforeEach(() => {
    expensesRoutingModule = new ExpensesRoutingModule();
  });

  it('should create an instance', () => {
    expect(expensesRoutingModule).toBeTruthy();
  });
});
