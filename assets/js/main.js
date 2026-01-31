document.addEventListener("DOMContentLoaded", () => {

  /* =======================
     Mobile Menu
  ======================= */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const contactBtn = document.querySelector(".contact-btn");

  if (hamburger && navLinks && contactBtn) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      contactBtn.classList.toggle("show");
    });
  }


  /* =======================
     Infinite Scroll Bar
  ======================= */
  const track = document.getElementById("scrollTrack");

  if (track) {
    let speed = 1;
    let pos = 0;

    function duplicateContent() {
      const original = track.innerHTML;
      while (track.scrollWidth < window.innerWidth * 2) {
        track.innerHTML += original;
      }
    }

    duplicateContent();

    function animate() {
      pos -= speed;
      if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      track.innerHTML = track.innerHTML.slice(0, track.innerHTML.length / 2);
      duplicateContent();
    });
  }


  /* =======================
     Portfolio Modal
  ======================= */
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  if (modal && modalImg) {
    document.querySelectorAll(".gallery-item").forEach(item => {
      const zoomBtn = item.querySelector(".zoom-btn");
      const visitBtn = item.querySelector(".visit-btn");

      if (zoomBtn) {
        zoomBtn.addEventListener("click", e => {
          e.stopPropagation();
          modalImg.src = item.dataset.full;
          modal.style.display = "flex";
        });
      }

      if (visitBtn) {
        visitBtn.addEventListener("click", e => {
          e.stopPropagation();
          window.open(item.dataset.link, "_blank");
        });
      }
    });

    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }


  /* =======================
     Reviews Slider (Slick)
  ======================= */
  if (window.jQuery && $(".reviews-slider").length && $.fn.slick) {
    $(".reviews-slider").slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

});
