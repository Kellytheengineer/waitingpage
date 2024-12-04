document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    fetch('https://hooks.zapier.com/hooks/catch/20911541/2iqxb1k/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            name: name
        })
    })
    .then(response => {
        alert('Successfully subscribed!');
        this.reset();
    })
    .catch(error => {
        alert('Subscription failed. Please try again.');
    });
});

