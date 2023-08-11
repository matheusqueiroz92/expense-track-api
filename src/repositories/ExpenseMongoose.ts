import mongoose from "mongoose";
import { Expense } from "../entities/Expense";

const exepenseSchema = new mongoose.Schema({
  user: {
    type: Array,
    ref: 'User',
  },
  name: String,
  description: String,
  price: Number,
  payday: Date,
  dueDate: Date,
  paymentMethod: [String],
  category: [String],
  observation: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const ExpenseModel = mongoose.model('Expense', exepenseSchema);

class ExpenseMongoose {
  async add(expense: Expense): Promise<Expense> {
    const expenseModel = new ExpenseModel(expense);
    await expenseModel.save();
    return expense;
  };
};

export { ExpenseMongoose };