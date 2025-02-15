const images = document.querySelectorAll(".image");
const previewImage = document.querySelector(".image-view img");

// to clear the active tag from the image's class
function clearActiveImages() {
  images.forEach((img) => img.classList.remove("active"));
  return;
}

// click event on every img
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    let currentImg = e.target;

    if (previewImage === currentImg) {
      return;
    }

    previewImage.src = "";
    clearActiveImages();
    currentImg.parentElement.classList.add("active");
    previewImage.src = currentImg.src;
  });
});
