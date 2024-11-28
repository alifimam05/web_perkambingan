// Menangani pengiriman formulir kontak
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const formMessage = document.getElementById("formMessage");
  
    if (name && email && message) {
      formMessage.textContent = `Terima kasih, ${name}. Pesan Anda telah diterima!`;
      formMessage.style.color = "green";
      this.reset();
    } else {
      formMessage.textContent = "Mohon isi semua field!";
      formMessage.style.color = "red";
    }
  });
  