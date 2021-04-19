const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

function validation() {
    if (fname.value === "") {
        fname.parentNode.classList.add('invalid-input');
        fname.parentNode.nextElementSibling.style.display = "block";
        fname.placeholder = ""
        fname.parentNode.nextElementSibling.innerHTML = "First Name cannot be empty";
    } else {
        fname.parentNode.classList.remove('invalid-input');
        fname.parentNode.nextElementSibling.style.display = "none";
    }

    if (lname.value === "") {
        lname.parentNode.classList.add('invalid-input');
        lname.parentNode.nextElementSibling.style.display = "block";
        lname.placeholder = ""
    } else {
        lname.parentNode.classList.remove('invalid-input');
        lname.parentNode.nextElementSibling.style.display = "none";
    }

    if (!emailIsValid(email.value)) {
        email.parentNode.classList.add('invalid-input');
        email.parentNode.nextElementSibling.style.display = "block";
        email.placeholder = "email@example/com";
        email.value = "";
        email.style.color = "red";
    } else {
        email.style.color = "black";
        email.parentNode.classList.remove('invalid-input');
        email.parentNode.nextElementSibling.style.display = "none";
    }

    if (password.value === "") {
        password.parentNode.classList.add('invalid-input');
        password.parentNode.nextElementSibling.style.display = "block";
        password.placeholder = ""
    } else {
        password.parentNode.classList.remove('invalid-input');
        password.parentNode.nextElementSibling.style.display = "none";
    }

}

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

window.onload = () => {
    fname.value = "";
    lname.value = "";
    email.value = "";
    password.value = "";
    }