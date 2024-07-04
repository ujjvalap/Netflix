const password = document.getElementById('password');
const length = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const number = document.getElementById('number');
const special = document.getElementById('special');


const value = password.value;

// Check length
if (value.length >= 8 && /[A-Z]/.test(value) && /[a-z]/.test(value) && /[0-9]/.test(value) && /[^A-Za-z0-9]/.test(value)) {
    alert("right");
} else {
    alert("wrong !!")
}


