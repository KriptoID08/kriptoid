const fs = require('fs');
const path = require('path');

// Lokasi folder gambar
const imagesDir = path.join(__dirname, 'images');
const images = fs.readdirSync(imagesDir);

// Mulai membuat HTML
let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website with Covers</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="cover-container">
`;

images.forEach((image, index) => {
  htmlContent += `
    <div class="cover-item">
      <img src="images/${image}" alt="Cover ${index + 1}">
      <p>Cover ${index + 1}</p>
    </div>
  `;
});

htmlContent += `
  </div>
</body>
</html>
`;

// Tulis konten HTML ke dalam file index.html
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent);

console.log('HTML file generated successfully!');
