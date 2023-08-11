import { Expense } from "./Expense";
import { User } from "./User";

class Planning {
  constructor(
    public user: User,
    public month: string,
    public year: number,
    public name: string,
    public description: string,
    public expenses: Expense[],
  ) {};
};

export { Planning };