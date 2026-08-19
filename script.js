// North & Blade Barbers - Mobile Navigation

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const primaryMenu = document.querySelector("#primary-menu");

  // Stop if the navigation elements don't exist
  if (!navToggle || !primaryMenu) return;

  // Open / close mobile navigation
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));

    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation menu" : "Close navigation menu"
    );

    primaryMenu.classList.toggle("is-open", !isOpen);

    // Change hamburger icon to X
    const icon = navToggle.querySelector(".nav-toggle-icon");

    if (icon) {
      icon.textContent = isOpen ? "☰" : "✕";
    }
  });

  // Close menu when a navigation link is clicked
  const navLinks = primaryMenu.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");

      primaryMenu.classList.remove("is-open");

      const icon = navToggle.querySelector(".nav-toggle-icon");

      if (icon) {
        icon.textContent = "☰";
      }
    });
  });

  // Close menu when Escape is pressed
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");

      primaryMenu.classList.remove("is-open");

      const icon = navToggle.querySelector(".nav-toggle-icon");

      if (icon) {
        icon.textContent = "☰";
      }

      navToggle.focus();
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      navToggle.getAttribute("aria-expanded") === "true" &&
      !primaryMenu.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");

      primaryMenu.classList.remove("is-open");

      const icon = navToggle.querySelector(".nav-toggle-icon");

      if (icon) {
        icon.textContent = "☰";
      }
    }
  });
});