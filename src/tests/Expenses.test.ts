import { App } from "../app";
// import { Expense } from "../entities/Expense";
import { User } from "../entities/User";
import request from 'supertest';

const app = new App();
const express = app.app

describe('Expenses test', () => {
  it('Testing if creates a expense', async () => {
    const userMock: User = {
      name: 'Matheus',
      email: 'matheus_giga@hotmail.com'
    };
    
    const expense = {
      user: userMock,
      name: 'Feira no Supermercado',
      local: 'Supermercado Santo Antônio',
      description: 'Compras no supermercado',
      price: 200,
      // invoice: 'images/nota-fiscal.jpg',
      payday: new Date(),
      dueDate: new Date(),
      paymentMethod: 'Cartão de crédito',
      category: ['Mercado', 'Alimentação'],
      observation: 'parcelado em 2x',
    };

    const response = await request(express)
    .post('/expenses')
    .field('username', expense.user.name)
    .field('email', expense.user.email)
    .field('name', expense.name)
    .field('local', expense.local)
    .field('description', expense.description)
    .field('price', expense.price)
    // .field('invoice', expense.invoice)
    .attach('invoice', '/home/matheus/Projetos/expense-track/backend/src/images/nota-fiscal.jpg')
    .field('paymentMethod', expense.paymentMethod)
    .field('category', expense.category)
    .field('observation', expense.observation);

    if (response.error) {
      console.log('Ocorreu um erro:', response.error);
    }

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'Despesa criada com sucesso!' });
  });
});