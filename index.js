const fs = require("fs");
const qrcode = require("qrcode");

const url = "https://dfamsoluciones.com";

const run = async () => {
  const QR = await qrcode.toDataURL(url);
  const htmlContent = `<div style="display: flex; jusfify-content: center; align-items: center;">
    <h2>Código QR Generado con nodeJS</h2>
    <img src="${QR}">
    </div>`;
    fs.writeFileSync('./index.html', `${htmlContent}`)
};



run()