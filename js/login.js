document.getElementById('submit-login').addEventListener('click', function () {
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;

    const passField = document.getElementById('user-password');
    const userPassword = passField.value;

    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
})

