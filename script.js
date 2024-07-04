document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        alert('Form submitted!');
    } else {
        alert('Please fill in both fields.');
    }

    // get button action 
    document.getElementById('getStartedButton').addEventListener('click', function() {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('passwordContainer').style.display = 'block';
    });
    
    document.getElementById('submitPasswordButton').addEventListener('click', function() {
        const password = document.getElementById('password').value;
        if (password === 'yourpassword') {
            alert('Password is correct! Welcome to Netflix.');
        } else {
            alert('Incorrect password. Please try again.');
        }
    });
    
});
///   => =>  ====>    ======>   ===========>    ======================>       =============================>
