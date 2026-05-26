const links = document.querySelectorAll(".nav-links a");

// ----------------------
// PAGE ACTIVE (for .html pages)
// ----------------------
function setActivePage() {
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    // HOME
    if ((currentPage === "" || currentPage === "index.html") && href === "/") {
      link.classList.add("active");
    }

    // PORTFOLIO PAGE
    if (currentPage === "Portfolio.html" && href === "Portfolio.html") {
      link.classList.add("active");
    }
  });
}

// ----------------------
// SECTION ACTIVE (same page scroll)
// ----------------------
function setActiveSection() {
  const sections = document.querySelectorAll("section");
  let scrollPos = window.scrollY + 150;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      links.forEach(link => {
        if (link.getAttribute("href") === "#" + id) {
          links.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    }
  });
}

// INIT
setActivePage();
window.addEventListener("scroll", setActiveSection);