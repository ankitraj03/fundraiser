const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/user', (req, res) => {
  res.json({
    name: 'Internn11',
    referralCode: 'REF12345',
    amountRaised: 5000
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
