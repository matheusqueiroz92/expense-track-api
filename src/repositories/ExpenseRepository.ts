import { Expense } from "../entities/Expense";

interface ExpenseRepository {
  add(expense: Expense): Promise<Expense>;
}

export { ExpenseRepository };