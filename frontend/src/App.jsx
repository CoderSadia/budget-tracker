import { useEffect, useState } from 'react';
import axios from 'axios';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import './App.css';

const API = 'http://localhost:5000/api/transactions';

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await axios.get(API);
    setTransactions(res.data);
  };

  const addTransaction = async (data) => {
    await axios.post(API, data);
    fetchTransactions();
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTransactions();
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="container">
      <h1>💸 Budget Tracker</h1>
      <AddTransaction onAdd={addTransaction} />
      <TransactionList data={transactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;


