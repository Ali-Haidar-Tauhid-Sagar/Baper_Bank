// Step-1: add click event handler with the submit button
document.getElementById('btn-submit'),addEventListener('click', function(){
    // Step-2: get the email address inside the email input field; // always remember to use .value from an input field
    const emailField = this.document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = this.document.getElementById('user-password');
    const password = passwordField.value;
   
    //Step-3: verify email and password check whether valid user or not.  // Danger: do not verify email and password on the client side that way.
    if(email === 'sagor@gmail.com' && password === '123456'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Email and password did not match!!!');
    }
})  
