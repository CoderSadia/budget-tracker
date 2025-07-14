const express = require('express');
const cors = require('cors');
const transactionsRouter = require('./routes/transactions');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/transactions', transactionsRouter);

app.listen(PORT, () => {
  console.log("✅ Server running at http://localhost:" + PORT);
});


