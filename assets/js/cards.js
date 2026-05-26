    /* OPEN POPUP */
function openPopup(src, type = "image") {

  document.getElementById("popup").style.display = "flex";

  const img = document.getElementById("popup-img");
  const video = document.getElementById("popup-video");
  const videoSource = document.getElementById("video-source");

  if(type === "video"){
    img.style.display = "none";
    video.style.display = "block";
    videoSource.src = src;
    video.load();
    video.play();
  } else {
    video.pause();
    video.style.display = "none";
    img.style.display = "block";
    img.src = src;
  }
}

    function closePopup() {
  document.getElementById("popup").style.display = "none";

  const video = document.getElementById("popup-video");
  video.pause();
}

    /* CLOSE ON BACKGROUND CLICK */
    document.getElementById("popup").addEventListener("click", function (e) {
      if (e.target.id === "popup") {
        closePopup();
      }
    });

    /* ✅ FIX: smooth scroll until real bottom (no looping) */
    document.querySelectorAll('.card').forEach(card => {
      const img = card.querySelector('img');
      const wrapper = card.querySelector('.image-wrapper');

      card.addEventListener('mouseenter', () => {
        const maxScroll = img.scrollHeight - wrapper.clientHeight;
        if (maxScroll > 0) {
          img.style.transform = `translateY(-${maxScroll}px)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        img.style.transform = 'translateY(0)';
      });
    });
