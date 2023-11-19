function register() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var userType = document.getElementById('Status').value;

    if (email === '' || password === '') {
        alert('Please enter both email and password');
        return; // Prevent further execution of the function
    }

    // Simulate registration logic (replace with actual registration logic)
    alert(`Registration Successful!\nUsername: ${username}\nEmail: ${email}\nUser Type: ${userType}\nPassword: ${password}`);

    // Redirect to success page after registration
    localStorage.setItem('userData', `Username: ${username}, Email: ${email}, User Type: ${userType}, Password: ${password}`);
    window.location.href = 'success.html';
}

function login() {
    var loginEmail = document.getElementById('email').value;
    var loginPassword = document.getElementById('password').value;

    if (loginEmail === '' || loginPassword === '') {
        alert('Please enter both email and password');
        return; // Prevent further execution of the function
    }


    // Simulate login logic (replace with actual login logic)
    alert(`Login Successful!\nHi: ${loginEmail}`);
    
    // Redirect to success page after login
    localStorage.setItem('userData', `Email: ${loginEmail}, Password: ${loginPassword}`);
    window.location.href = 'success.html';
}

function signInWithGoogle() {
    // Simulate Google Sign-In logic (replace with actual logic)
    alert('Signing in with Google...');

    // Redirect to success page after Google Sign-In
    window.location.href = 'success.html';
}