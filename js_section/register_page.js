/* ─── SAMRATTTT Register Page JavaScript ─── */

// ─── DOM Elements ───
const registerForm      = document.getElementById('registerForm');
const btn               = document.getElementById('btn');
const btnText           = btn.querySelector('.btn-text');
const btnLoader         = btn.querySelector('.btn-loader');
const nameInput         = document.getElementById('nameInput');
const emailInput        = document.getElementById('emailInput');
const passwordInput     = document.getElementById('passwordInput');
const confirmInput      = document.getElementById('confirmPasswordInput');
const togglePassword    = document.getElementById('togglePassword');
const eyeIcon           = document.getElementById('eyeIcon');

// ─── SVG Icons ───
const eyeOpenSVG = `
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
`;

const eyeClosedSVG = `
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7c.78 0 1.53-.09 2.24-.26"/>
    <path d="M2 2l20 20"/>
`;

// ─── Password Toggle ───
togglePassword.addEventListener('click', function () {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    confirmInput.setAttribute('type', isPassword ? 'text' : 'password');
    eyeIcon.innerHTML = isPassword ? eyeClosedSVG : eyeOpenSVG;
});

// ─── Form Submit → Validate → Redirect to Login ───
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name     = nameInput.value.trim();
    const email    = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirm  = confirmInput.value.trim();

    // Validation
    if (!name || !email || !password || !confirm) {
        alert('Please fill in all fields.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    if (password !== confirm) {
        alert('Passwords do not match. Please try again.');
        confirmInput.focus();
        return;
    }

    // Show loading state
    btn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-flex';

    // Simulate backend call then redirect
    // (Replace setTimeout with fetch() to your Python backend when ready)
    setTimeout(() => {
        alert('Account created successfully! Redirecting to login...');
        window.location.href = 'login_page.html';
    }, 1000);
});

// ─── Sign In Link → Redirect to Login Page ───
document.getElementById('loginLink').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'login_page.html';
});

// ─── Input Focus Effects ───
[nameInput, emailInput, passwordInput, confirmInput].forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.01)';
        input.parentElement.style.transition = 'transform 0.2s ease';
    });
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
    });
});