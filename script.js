const coverImages = [
    { src: 'the.jpg', name: 'The Great Reset 2030 by AVS', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_1' },
    { src: 'tokens.jpg', name: 'Smart Contract and Security', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_2' },
    { src: 'token-unlock-strategy.jpg', name: 'Token Unlock Strategy', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_3' },
    { src: 'type-of-accounts.jpg', name: 'Type of Accounts', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_4' },
    { src: 'us-election-market.jpg', name: 'US Election Market', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_5' },
    { src: 'utxo-vs-account-model.jpg', name: 'UTXO vs Account Model', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_6' },
    { src: 'what-is-a-smart-contract.jpg', name: 'What is a Smart Contract', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_7' },
    { src: 'ww.jpg', name: 'Crypto Fibonacci Secret', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_8' },
    { src: '10x.jpg', name: 'Cara Mencari Altcoin 10x', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_9' },
    { src: '10xy.jpg', name: 'Gandakan Portofoliomu Bullrun ini', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_10' },
    { src: 'aa.jpg', name: 'Cara Screening Altcoin dari 0', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_11' },
    { src: 'aap.jpg', name: 'Smart Contract and Security', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_12' },
    { src: 'ai.jpg', name: 'AI Supercycle', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_13' },
    { src: 'art-of-crypto-trading.jpg', name: 'The Art of Crypto Trading', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_14' },
    { src: 'big.png', name: 'The Big Crypto Thesis', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_15' },
    { src: 'bitcoin-anonymity.jpg', name: 'Bitcoin Anonymity', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_16' },
    { src: 'bitcoin-transaction-in-depth.jpg', name: 'Bitcoin Transaction In Depth', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_17' },
    { src: 'blockchain-interoperability.jpg', name: 'Blockchain Interoperability', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_18' },
    { src: 'blockchain-oracles.jpg', name: 'Blockchain Oracles', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_19' },
    { src: 'blockchain-trilemma.jpg', name: 'Blockchain Trilemma', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_20' },
    { src: 'btc.jpg', name: 'BTC to ALTS timing', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_21' },
    { src: 'consensus-proof-security.jpg', name: 'Consensus Proof Security', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_22' },
    { src: 'cross-chain-technology.jpg', name: 'Cross Chain Technology', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_23' },
    { src: 'cryptocurrency-fundamentals.jpg', name: 'Cryptocurrency Fundamentals', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_24' },
    { src: 'cryptocurrency-security.jpg', name: 'Cryptocurrency Security', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_25' },
    { src: 'crypto-harmonic-trading.jpg', name: 'Crypto Harmonic Trading', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_26' },
    { src: 'crypto-investing.jpg', name: 'Crypto Investing', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_27' },
    { src: 'crypto-investing-alpha.jpg', name: 'Crypto Investing Alpha', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_28' },
    { src: 'crypto-investing-guide.jpg', name: 'Crypto Investing Guide', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_29' },
    { src: 'crypto-investing-strategy.jpg', name: 'Crypto Investing Strategy', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_30' },
    { src: 'crypto-investing-tools.jpg', name: 'Crypto Investing Tools', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_31' },
    { src: 'crypto-money-psychology.jpg', name: 'Crypto Money Psychology', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_32' },
    { src: 'crypto-order-flow.jpg', name: 'Crypto Order Flow', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_33' },
    { src: 'crypto-research.jpg', name: 'Crypto Research', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_34' },
    { src: 'crypto-self-custody.jpg', name: 'Crypto Self Custody', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_35' },
    { src: 'crypto-smart-money.jpg', name: 'Crypto Smart Money', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_36' },
    { src: 'crypto-technical-indicators.jpg', name: 'Crypto Technical Indicators', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_37' },
    { src: 'crypto-trading.jpg', name: 'Crypto Trading', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_38' },
    { src: 'crypto-trading-psychology.jpg', name: 'Crypto Trading Psychology', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_39' },
    { src: 'crypto-wyckoff-trading.jpg', name: 'Crypto Wyckoff Trading', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_40' },
    { src: 'dex-trading-tutorial.jpg', name: 'DEX Trading Tutorial', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_41' },
    { src: 'digital-money-double-spending.jpg', name: 'Digital Money Double Spending', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_42' },
    { src: 'ethereum-programmable-money.jpg', name: 'Ethereum Programmable Money', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_43' },
    { src: 'flow.jpg', name: 'Crypto Order Flow', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_44' },
    { src: 'gd.jpg', name: 'Crypto Trading Guide E Book', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_45' },
    { src: 'kamus-pattern-crypto.jpg', name: 'Kamus Pattern Crypto', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_46' },
    { src: 'key-wallets-how-they-work.jpg', name: 'Key Wallets How They Work', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_47' },
    { src: 'kop.jpg', name: 'Kopi darat Akademi Crypto', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_48' },
    { src: 'kuliah-crypto.jpg', name: 'Kuliah Crypto', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_49' },
    { src: 'lau.png', name: 'Akademi Crypto Grand Launching', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_50' },
    { src: 'layer-2-rollups.jpg', name: 'Layer 2 Rollups', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_51' },
    { src: 'margin-call-6july.jpg', name: 'Margin Call 6 July', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_52' },
    { src: 'market-outlook-2025.jpg', name: 'Market Outlook 2025', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_53' },
    { src: 'mas.jpg', name: 'Crypto Harmonic Trading', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_54' },
    { src: 'mas1.jpg', name: 'Crypto Smart Money', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_55' },
    { src: 'masa.jpg', name: 'Crypto Mastering Altcoins E book', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_56' },
    { src: 'mastering-altcoins.jpg', name: 'Mastering Altcoins E book', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_57' },
    { src: 'monero-anonymity.jpg', name: 'Monero Anonymity', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_58' },
    { src: 'nar.jpg', name: 'Narrative 2024', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_59' },
    { src: 'narrative-research.jpg', name: 'Narrative Research', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_60' },
    { src: 'pp.jpg', name: 'Token Unlock Trading Strategy', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_61' },
    { src: 'preparing-octobull.jpg', name: 'Preparing Octobull', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_62' },
    { src: 'pri.jpg', name: 'Crypto Trading Principles E book', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_63' },
    { src: 'reg.jpg', name: '2025 Crypto Regulation', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_64' },
    { src: 'rid.jpg', name: 'Riding The Crypto Super MegaCycle', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_65' },
    { src: 'sales-mastery.jpg', name: 'Sales Mastery by Timothy Ronald', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_66' },
    { src: 'sd.jpg', name: 'Crypto Investing Principles', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_67' },
    { src: 'smart.jpg', name: 'Crypto Smart Money E book', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_68' },
    { src: 'smart-contract-development.jpg', name: 'Smart Contract Development', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_69' }
  ];
  
  
const coverContainer = document.getElementById('coverContainer');

// Menampilkan gambar-gambar cover secara dinamis
coverImages.forEach(image => {
  const coverItem = document.createElement('div');
  coverItem.classList.add('cover-item');

  const img = document.createElement('img');
  img.src = `images/${image.src}`;
  img.alt = `Cover ${image.name}`;

  const coverName = document.createElement('p');
  coverName.classList.add('cover-name');
  coverName.textContent = image.name;

  coverItem.appendChild(img);
  coverItem.appendChild(coverName);
  coverContainer.appendChild(coverItem);
});

// Fungsi untuk mencari cover berdasarkan nama
function searchCover() {
  const input = document.getElementById("searchInput").value.toLowerCase();  // Mengambil input pencarian
  const covers = document.getElementsByClassName("cover-item");  // Mendapatkan semua cover

  // Looping untuk memeriksa nama cover satu per satu
  for (let i = 0; i < covers.length; i++) {
    const name = covers[i].getElementsByClassName("cover-name")[0].innerText.toLowerCase(); // Nama cover
    if (name.indexOf(input) > -1) {
      covers[i].style.display = "";  // Menampilkan cover yang sesuai
    } else {
      covers[i].style.display = "none";  // Menyembunyikan cover yang tidak sesuai
    }
  }
}
