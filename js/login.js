document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    // step-4 verify email and password
    if(email === 'miras@gmail.com' && password === 'miras'){
        console.log("valid User");
    }
    else{
        console.log("invalid user");
    }

})