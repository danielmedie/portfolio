import Swal from 'sweetalert2';


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Få formulärdata
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Validera att alla fält är ifyllda
      if (!name || !email || !message) {
        Swal.fire({
          title: 'Fel!',
          text: 'Vänligen fyll i alla fält innan du skickar.',
          icon: 'error',
          confirmButtonText: 'Okej'
        });
        return;
      }
  
      // EmailJS-konfiguration
      emailjs.send('service_v14l87c', 'template_326of3s', {
        name: name,
        email: email,
        message: message
      }, 'e10bZVo4wUqJTZTz4')
      .then((response) => {
        Swal.fire({
          title: 'Skickat!',
          text: 'Ditt meddelande har skickats. Jag återkommer snart.',
          icon: 'success',
          confirmButtonText: 'Okej'
        });
      }, (error) => {
        Swal.fire({
          title: 'Fel!',
          text: 'Det gick inte att skicka meddelandet. Försök igen senare.',
          icon: 'error',
          confirmButtonText: 'Okej'
        });
      });
    });
  });
  