// Load Bootstrap
const script = document.createElement("script");

script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
script.defer = true;

script.onload = () => {

  // Initialize Bootstrap popovers
  document.querySelectorAll(
    '.bootstrap-scope [data-bs-toggle="popover"]'
  ).forEach(element => {
    new bootstrap.Popover(element, {
      container: '.bootstrap-scope'
    });
  });

};

document.head.appendChild(script);