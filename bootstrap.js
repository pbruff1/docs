// Load Bootstrap CSS
const bootstrapCSS = document.createElement('link');

bootstrapCSS.rel = 'stylesheet';
bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';

document.head.appendChild(bootstrapCSS);


// Load Bootstrap JavaScript
const bootstrapJS = document.createElement('script');

bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
bootstrapJS.defer = true;

document.head.appendChild(bootstrapJS);
