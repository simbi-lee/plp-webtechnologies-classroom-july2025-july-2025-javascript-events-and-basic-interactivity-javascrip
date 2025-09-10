// ==============================
// PART 1: Event Handling
// ==============================

// 1. Button click event
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
    alert('You clicked the button!');
});

// 2. Mouseover event
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'orange';
});
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = 'lightblue';
});

// 3. Keyboard input event (real-time greeting)
const nameInput = document.getElementById('nameInput');
const greet = document.getElementById('greet');
nameInput.addEventListener('keyup', (event) => {
    greet.textContent = `Hello, ${event.target.value}!`;
});

// ==============================
// PART 2: Interactive Features
// ==============================

// Dark Mode Toggle
const toggleBtn = document.getElementById('themeBtn');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // change button text for clarity
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// 2. Counter Button Game
let count = 0;
const counterBtn = document.getElementById('counterBtn');
const countDisplay = document.getElementById('count');
counterBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

// 3. Collapsible FAQ Section
const questions = document.querySelectorAll('.question');
questions.forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// ==============================
// PART 3: Form Validation
// ==============================

const form = document.getElementById('signupForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    let isValid = validateForm();

    if (isValid) {
        successMsg.textContent = "Form submitted successfully!";
        successMsg.classList.add('success');
        form.reset();
    } else {
        successMsg.textContent = "";
    }
});

// Real-time input validation
[nameField, emailField, passwordField, confirmPasswordField].forEach(input => {
    input.addEventListener('input', () => validateField(input));
});

// Main form validation function
function validateForm() {
    let valid = true;

    if (!validateField(nameField)) valid = false;
    if (!validateField(emailField)) valid = false;
    if (!validateField(passwordField)) valid = false;
    if (!validateField(confirmPasswordField)) valid = false;

    return valid;
}

// Individual field validation
function validateField(input) {
    const error = input.nextElementSibling;
    let valid = true;

    if (input.id === "name") {
        if (input.value.trim() === "") {
            error.textContent = "Name is required.";
            valid = false;
        } else {
            error.textContent = "";
        }
    }

    if (input.id === "email") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value.trim())) {
            error.textContent = "Enter a valid email address.";
            valid = false;
        } else {
            error.textContent = "";
        }
    }

    if (input.id === "password") {
        if (input.value.length < 6) {
            error.textContent = "Password must be at least 6 characters.";
            valid = false;
        } else {
            error.textContent = "";
        }
    }

    if (input.id === "confirmPassword") {
        if (input.value !== passwordField.value) {
            error.textContent = "Passwords do not match.";
            valid = false;
        } else {
            error.textContent = "";
        }
    }

    return valid;
}