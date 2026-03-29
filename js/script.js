 function submitForm() {
    const nama = document.querySelector('input[placeholder="Budi Santoso"]').value;
    const hp = document.querySelector('input[placeholder="08xx-xxxx-xxxx"]').value;
    const alamat = document.querySelector('input[placeholder="Jl. Mawar No. 10, Jakarta"]').value;
    const layanan = document.querySelector('select').value;
    const masalah = document.querySelector('textarea').value;

    if (!nama || !hp) {
      alert('Harap isi nama dan nomor HP Anda.');
      return;
    }

    const msg = `Halo AquaFix! 👋\n\nSaya ingin pesan layanan:\n\n👤 Nama: ${nama}\n📱 HP: ${hp}\n📍 Alamat: ${alamat || '-'}\n🔧 Layanan: ${layanan || '-'}\n📝 Masalah: ${masalah || '-'}\n\nMohon bantuannya. Terima kasih!`;
    const url = `https://wa.me/6281909944999?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .service-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });