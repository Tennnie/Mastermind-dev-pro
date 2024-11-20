// Select DOM elements
const mobileMenuToggle = document.getElementById('mobilemenu');
const sidebar = document.querySelector('.sidebar');

// Show/Hide Sidebar for Mobile Menu
mobileMenuToggle.addEventListener('click', () => {
    if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'flex';
    }
});

// Example Dynamic Interaction: Add a button and an alert
const container = document.querySelector('.container');
const button = document.createElement('button');
button.textContent = 'Click Me for a Surprise!';
button.style.marginTop = '20px';
button.style.padding = '10px 20px';
button.style.border = 'none';
button.style.backgroundColor = '#02359a';
button.style.color = 'white';
button.style.cursor = 'pointer';
button.addEventListener('click', () => {
    alert('Welcome to Mastermind!');
});
container.appendChild(button);
