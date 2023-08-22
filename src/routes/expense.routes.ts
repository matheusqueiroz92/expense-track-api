import { Router } from 'express';
import { ExpenseMongoose } from '../repositories/ExpenseMongoose';
import { ExpenseController } from '../controller/ExpenseController';
import { ExpenseUseCase } from '../useCases/ExpenseUseCase';
import { upload } from '../db/multer';

class ExpenseRoutes {
  public router: Router;
  private expenseController: ExpenseController;

  constructor() {
    this.router = Router();
    const expenseRepository = new ExpenseMongoose();
    const expenseUseCase = new ExpenseUseCase(expenseRepository);
    this.expenseController = new ExpenseController(expenseUseCase);

    this.initRoutes();
  };

  initRoutes() {
    this.router.post(
      '/',
      upload.fields([
        {
          name: 'invoice',
          maxCount: 1
        }
      ]),
      this.expenseController.create.bind(this.expenseController)
    );
  };
}

export { ExpenseRoutes };