export default function TransactionList({ data, onDelete }) {
  if (data.length === 0) return <p>No transactions yet.</p>;

  return (
    <ul className="list">
      {data.map(txn => (
        <li key={txn.id}>
          <span>{txn.title}</span>
          <span>₹{txn.amount}</span>
          <span>{txn.date}</span>
          <button onClick={() => onDelete(txn.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}


