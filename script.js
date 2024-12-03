document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribe-form');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Here you would typically send this data to your server
        console.log('Submitted:', { name, email });

        // For now, we'll just show a success message
        messageElement.textContent = 'Thank you for subscribing! We\'ll notify you when we launch.';
        form.reset();
    });
});

