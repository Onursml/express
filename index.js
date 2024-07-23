const express = require('express');
const app = express();
const port = 4000;

// Ana Sayfa Rotası
app.get('/', (req, res) => {
    res.send('Merhaba, Express!');
});

// Başka Bir Rota
app.get('/about', (req, res) => {
    res.send('Bu basit bir Express uygulaması örneğidir.');
});

// Sunucuyu Başlatma
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
