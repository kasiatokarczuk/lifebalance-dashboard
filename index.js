const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serwuj pliki statyczne z folderu public
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Dashboard działa na http://localhost:${PORT}`);
});
