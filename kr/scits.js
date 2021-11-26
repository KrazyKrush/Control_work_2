var name = document.getElementById('name');
var pw = document.getElementById('pw');
function store() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
}
function check() {
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }
}
function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid) output = 'Адрес эл. почты введен правильно!';
    else output = 'Адрес электронной почты введен неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
}