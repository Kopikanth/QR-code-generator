const inputBox = document.querySelector(".input-box");
const generateQr = document.querySelector(".generate");
const qrCode = document.querySelector(".qr-code");
const qrImage = document.querySelector(".qr-img");

const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

generateQr.addEventListener("click", showqr);

async function showqr() {

    if (inputBox.value) {
        
        const response = await fetch(apiUrl + inputBox.value);
        const data = await response.blob();
        const imageURL = URL.createObjectURL(data);

        qrCode.id = "show";
        qrImage.src = imageURL;
    }
    else{
        inputBox.id = "error";
        setTimeout(()=>{
            inputBox.removeAttribute("id");
        }, 1000)
    }
}
