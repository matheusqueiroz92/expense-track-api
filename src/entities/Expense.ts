import { User } from "./User";

class Expense {
  
  constructor(
    public user: User,
    public name: string,
    public description: string,
    public price: number,
    public payday: Date,
    public dueDate: Date,
    public paymentMethod: string[],
    public category: string[],
    public observation: string,
  ) {};
};

export { Expense };