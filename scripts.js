let emailForm = document.getElementById('emailform')


function checkEmail(emailadd){
    let msg;
    if (emailadd === '') {
        msg = 'the email address is empty';


    } else if (emailadd.indexOf('@') === -1) {
        msg = 'Your email must contain the character @';

    } else if (emailadd.indexOf('.') === -1) {
        msg = 'Your email must contain a dot(.)';

    } else {
        msg = 'The email is a valid one'
    }
    return msg;
}
emailForm.addEventListener('submit', function (w){
    w.preventDefault();
    let userMail = document.getElementById('userEmail')
    let errorMsg = checkEmail( userMail.value);
    alert(errorMsg) 

})
