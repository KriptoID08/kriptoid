const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Mengatur folder 'images' untuk static files
app.use(express.static(path.join(__dirname, 'images')));

// Endpoint untuk mendapatkan daftar gambar
app.get('/api/images', (req, res) => {
  const imagesFolder = path.join(__dirname, 'images');
  fs.readdir(imagesFolder, (err, files) => {
    if (err) {
      return res.status(500).send('Terjadi kesalahan membaca folder gambar');
    }
    // Filter hanya file gambar
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    const imageData = imageFiles.map(file => ({
      src: file,
      name: file.split('.')[0] // Mengambil nama file tanpa ekstensi
    }));
    res.json(imageData);
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
