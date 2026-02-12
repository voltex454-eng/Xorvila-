// Xorvila Auth Guard
// Add <script src="auth-guard.js"></script> to any page you want to protect.

(function() {
    // Check if we are on the auth page itself to prevent infinite loop
    const currentPath = window.location.pathname;
    if (currentPath.includes('auth.html')) return;

    // Check LocalStorage for simple session flag
    const isLoggedIn = localStorage.getItem('xorvila_user');

    if (!isLoggedIn) {
        // User not logged in, redirect to Auth page
        // We pass the current page as 'returnUrl' so they come back after login
        console.log("Access Denied: Redirecting to Login");
        window.location.href = 'auth.html?returnUrl=' + encodeURIComponent(window.location.href);
    }
})();