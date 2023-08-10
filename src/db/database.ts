import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect('mongodb+srv://matheusqueiroz:BUmh0T6cLgNYt92k@cluster0.6hzobul.mongodb.net/expense-track');
    console.log('Connect database success');
    
  } catch(error) {
    console.log('Error', error);
  }
}