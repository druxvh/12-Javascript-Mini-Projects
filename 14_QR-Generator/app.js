let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// generate qr code
const generateQR = () => {
  if (qrText.value !== "") {
    const url =
      "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=";
    qrImage.src = url + qrText.value;
  } else {
    alert("Please enter a text or URL.");
  }
};
