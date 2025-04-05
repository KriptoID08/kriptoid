const coverImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Tambahkan gambar lain di sini
  ];
  
  const coverContainer = document.querySelector('.cover-container');
  
  // Menampilkan gambar-gambar cover secara dinamis
  coverImages.forEach(image => {
    const img = document.createElement('img');
    img.src = `images/${image}`;
    img.alt = `Cover ${image}`;
    coverContainer.appendChild(img);
  });
  
