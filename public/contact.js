document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    emailjs.sendForm('service_v14l87c', 'template_326of3s', form)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, function (error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  });
});
