import { Expense } from "../entities/Expense";
import { ExpenseRepository } from "../repositories/ExpenseRepository";

class ExpenseUseCase {
  constructor(private expenseRepository: ExpenseRepository) {};
  
  async create(expenseData: Expense) {
    const result = await this.expenseRepository.add(expenseData);
    return result;
  };
};

export { ExpenseUseCase };