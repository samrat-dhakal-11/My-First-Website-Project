/* ─── SAMRATTTT Login Page JavaScript ─── */

// ─── DOM Elements ───
const loginForm    = document.getElementById('loginForm');
const btn          = document.getElementById('btn');
const btnText      = btn.querySelector('.btn-text');
const btnLoader    = btn.querySelector('.btn-loader');
const emailInput   = document.getElementById('emailInput');
const passwordInput= document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
const eyeIcon      = document.getElementById('eyeIcon');
const socialButtons = document.querySelectorAll('.social-btn');

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
    eyeIcon.innerHTML = isPassword ? eyeClosedSVG : eyeOpenSVG;
});

// ─── Form Submit → Redirect to Front Page ───
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
    }

    // Show loading state
    btn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-flex';

    // Simulate a brief delay then redirect
    // (Replace this with actual fetch() to your Python backend when ready)
    setTimeout(() => {
        window.location.href = '/html_section/front_page.html';
    }, 800);
});
document.getElementById('registerLink').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = '/html_section/register_page.html';
});

// ─── Social Login → OAuth Redirects ───
// Your Python backend will handle the actual OAuth 2.0 flow.
// These endpoints should match your backend routes.
const oauthEndpoints = {
    google: '/auth/google',
    x:      '/auth/x',
    meta:   '/auth/meta'   // placeholder until you get Meta credentials
};

socialButtons.forEach(button => {
    button.addEventListener('click', function () {
        const provider = this.dataset.provider;
        const endpoint = oauthEndpoints[provider];

        if (!endpoint) {
            console.warn('Unknown provider:', provider);
            return;
        }

        // Redirect to your Python backend OAuth endpoint
        window.location.href = endpoint;
    });
});

// ─── Forgot Password (placeholder) ───
document.querySelector('.forgot-link').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Redirecting to password reset… (connect your backend here)');
});

// ─── Input Focus Effects ───
[emailInput, passwordInput].forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.01)';
        input.parentElement.style.transition = 'transform 0.2s ease';
    });
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
    });
});
