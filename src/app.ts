import express, { Application } from 'express';
import { connect } from './db/database';
import { errorMiddleware } from './middlewares/error.middleware';
import { ExpenseRoutes } from './routes/expense.routes';

class App {
  public app: Application;
  private expenseRoutes = new ExpenseRoutes();
  
  constructor() {
    this.app = express();
    this.middlewaresInitialize();
    this.initializeRoutes();
    this.interceptionError();
    connect();
  };

  middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };

  initializeRoutes() {
    this.app.use('/expenses', this.expenseRoutes.router);
    // this.app.use('/users', this.userRoutes.router);
  };

  interceptionError() {
    this.app.use(errorMiddleware);
  };
  
  listen() {
    this.app.listen(3333, () => console.log('Server is running in port 3333'));
  };
};

export { App };