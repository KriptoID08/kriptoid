const fs = require('fs');
const path = require('path');

// Path folder gambar
const imagesFolder = path.join(__dirname, 'images');

// Ambil semua file dalam folder images
fs.readdir(imagesFolder, (err, files) => {
  if (err) {
    console.error("Gagal membaca folder:", err);
    return;
  }

  // Filter hanya gambar (.jpg, .jpeg, .png, .gif)
  const imageFiles = files.filter(file => {
    return file.match(/\.(jpg|jpeg|png|gif)$/i);
  });

  // Mulai membuat HTML
  let htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Kelas</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="cover-container">
  `;

  // Menambahkan gambar-gambar ke HTML
  imageFiles.forEach(image => {
    htmlContent += `<img src="images/${image}" alt="Cover ${image}">`;
  });

  // Menutup HTML
  htmlContent += `
    </div>
  </body>
  </html>
  `;

  // Simpan HTML ke file
  fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');
  console.log('HTML file generated with all images!');
});
