// Load Popper
const popperScript = document.createElement("script");

popperScript.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";

popperScript.onload = () => {

  // Load Bootstrap
  const bootstrapScript = document.createElement("script");

  bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js";

  bootstrapScript.onload = () => {

    // Initialize Popovers
    document.querySelectorAll(
      '.bootstrap-scope [data-bs-toggle="popover"]'
    ).forEach(element => {
      new bootstrap.Popover(element, {
        container: '.bootstrap-scope'
      });
    });

  };

  document.head.appendChild(bootstrapScript);
};

document.head.appendChild(popperScript);