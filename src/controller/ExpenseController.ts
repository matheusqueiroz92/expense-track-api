import { NextFunction, Request, Response } from "express";
import { ExpenseUseCase } from "../useCases/ExpenseUseCase";
import { Expense } from "../entities/Expense";

class ExpenseController {
  constructor(private expenseUseCase: ExpenseUseCase) {};

  async create(req: Request, res: Response, next: NextFunction) {
    const expenseData: Expense = req.body;
    
    console.log(expenseData);
    
    try {
      const response = await this.expenseUseCase.create(expenseData);
      return res.status(201).json({ message: 'Despesa criada com sucesso!' });
    } catch (error) {
      next(error);
    }
  };
};

export { ExpenseController };