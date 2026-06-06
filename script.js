function generarQR() {

    let url = document.getElementById("url").value;

    document.getElementById("qrcode").innerHTML = "";

    if(url.trim() === ""){
        alert("Introduce una URL");
        return;
    }

    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 200,
        height: 200
    });
}
