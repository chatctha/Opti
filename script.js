document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Please enter both username and password.';
        } else {
            errorMessage.textContent = '';
            // In a real application, you would send the data to a server for authentication.
            // For this example, we'll just log a success message.
            console.log('Login successful');
            alert('Login successful!');
        }
    });
});
