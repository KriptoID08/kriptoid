const fs = require('fs');
const path = require('path');

// Tentukan folder tempat gambar Anda
const imagesFolder = path.join(__dirname, 'images');

// Ambil daftar nama file gambar
const imageFiles = fs.readdirSync(imagesFolder).filter(file => file.endsWith('.jpg') || file.endsWith('.png'));

// Membuat HTML untuk gambar
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

imageFiles.forEach(image => {
  htmlContent += `<img src="images/${image}" alt="Cover ${image}">`;
});

htmlContent += `
  </div>
</body>
</html>
`;

// Simpan HTML ke file
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');
console.log('HTML file generated with all images!');
