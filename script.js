// Fungsi untuk membaca parameter dari URL
function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const suhu = urlParams.get("suhu");
  const kelembapan = urlParams.get("kelembapan");
  return { suhu, kelembapan };
}

// Perbarui data di halaman
function updateData() {
  const data = getQueryParams();
  if (data.suhu && data.kelembapan) {
    document.getElementById("temperature").textContent = data.suhu;
    document.getElementById("humidity").textContent = data.kelembapan;
  }
}

// Jalankan fungsi
updateData();
