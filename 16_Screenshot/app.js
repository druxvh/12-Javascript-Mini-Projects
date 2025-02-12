const container = document.querySelector(".first-container");
const previewContainer = document.querySelector(".second-container");
const screenshotBtn = document.querySelector(".screenshot-btn");
const downloadBtn = document.querySelector(".download-btn");

// creates html canvas after DOM is loaded then converts the chosen div into a png/jpg
const takeScreenshot = async () => {
  const canvas = await html2canvas(container);
  const imageURL = await canvas.toDataURL("image/png");

  // If container already have an image in preview
  if (previewContainer.innerHTML !== "") {
    return;
  }

  let previewImg = document.createElement("img");
  previewImg.src = imageURL;
  previewContainer.append(previewImg);

  previewContainer.classList.remove("hide");
  downloadBtn.classList.remove("hide");
};

// Create Download Link
const download = () => {
  let img = document.querySelector(".second-container img");
  downloadBtn.href = img.src;
  downloadBtn.download = "screenshot.png";
};

screenshotBtn.addEventListener("click", takeScreenshot);
downloadBtn.addEventListener("click", download);
