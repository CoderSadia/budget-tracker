import { useState } from 'react';

export default function AddTransaction({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;
    onAdd({ title, amount: parseFloat(amount), date });
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button type="submit">➕ Add</button>
    </form>
  );
}


