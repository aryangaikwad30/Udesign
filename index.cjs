const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Udesign backend!');
});

app.get('/api/project', (req, res) => {
  res.json({ name: 'Udesign', description: 'Frontend design project' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form data:', name, email, message);
  res.json({ status: 'success', message: 'Thanks for contacting us!' });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
