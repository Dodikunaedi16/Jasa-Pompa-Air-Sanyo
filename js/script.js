// Ganti nomor WA kamu di sini
var WA_NUMBER = '6281909944999';

function submitForm() {
  var nama    = document.getElementById('nama').value.trim();
  var hp      = document.getElementById('hp').value.trim();
  var alamat  = document.getElementById('alamat').value.trim();
  var layanan = document.getElementById('layanan').value;
  var masalah = document.getElementById('masalah').value.trim();

  if (!nama || !hp) {
    alert('Harap isi Nama dan Nomor HP terlebih dahulu.');
    return;
  }

  var pesan =
    'Halo AquaFix! 👋' + '\n\n' +
    'Saya ingin memesan layanan:' + '\n\n' +
    '👤 Nama    : ' + nama + '\n' +
    '📱 HP      : ' + hp + '\n' +
    '📍 Alamat  : ' + (alamat  || '-') + '\n' +
    '🔧 Layanan : ' + (layanan || '-') + '\n' +
    '📝 Masalah : ' + (masalah || '-') + '\n\n' +
    'Mohon bantuannya. Terima kasih!';

  var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(pesan);
  window.location.href = url;
}

// Scroll reveal
document.addEventListener('DOMContentLoaded', function () {
  var els = document.querySelectorAll('.feature-card, .service-card, .contact-item');
  els.forEach(function (el) { el.classList.add('reveal'); });

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(function (el) { obs.observe(el); });

  // Navbar shadow
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    nav.style.boxShadow = window.scrollY > 50 ? '0 4px 24px rgba(26,39,68,0.1)' : 'none';
  });
});