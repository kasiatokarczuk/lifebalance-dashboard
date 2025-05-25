const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const fs = require('fs');

// Middleware: pozwala na odbiór JSON-a z frontendu
app.use(express.json());

// Serwuj pliki statyczne z folderu public
app.use(express.static('public'));

// Główna strona
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Endpoint: pobranie zapisanych danych (GET)
app.get('/api/water', (req, res) => {
  const filePath = path.join(__dirname, 'data/water.json');
  if (!fs.existsSync(filePath)) return res.json([]);
  const data = fs.readFileSync(filePath);
  res.json(JSON.parse(data));
});

// Endpoint: dodanie nowego wpisu (POST)
app.post('/api/water', (req, res) => {
  const filePath = path.join(__dirname, 'data/water.json');
  const newEntry = {
    date: new Date().toISOString(),
    amount: req.body.amount || 250
  };

  let data = [];
  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath));
  }

  data.push(newEntry);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.status(201).json({ message: 'Dodano wpis', entry: newEntry });
});

app.listen(PORT, () => {
  console.log(`Dashboard działa na http://localhost:${PORT}`);
});
