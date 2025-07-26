document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        const formData = {
          name: this.name.value,
          email: this.email.value,
          subject: this.subject.value,
          message: this.message.value
        };

        // Vercel API endpoint for sending email
        const response = await fetch('/api/sendEmail.js', {
        //const response = await fetch('http://localhost:3000/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
        });
        /*
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        */
        const data = await response.json();
        
        if (data.success) {
          showMessage('Message sent successfully!', 'success');
          this.reset();
        } else {
          showMessage('Failed to send message', 'error');
        }
      } catch (error) {
        showMessage('Error sending message', 'error');
        console.error('Error:', error);
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  function showMessage(text, type) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = text;
    messageDiv.className = `form-message ${type}`;
    messageDiv.style.display = 'block';
    
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 5000);
  }
});