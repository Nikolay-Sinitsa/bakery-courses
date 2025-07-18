  document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("video-overlay");
    const trigger = document.getElementById("video-trigger");
    const closeBtn = document.querySelector(".video-close");

    trigger.addEventListener("click", function (event) {
      event.preventDefault(); 
      overlay.classList.remove("is-hidden");
    });

    closeBtn.addEventListener("click", function () {
      overlay.classList.add("is-hidden");

      const video = overlay.querySelector("video");
      if (video) video.pause();
    });
  });

