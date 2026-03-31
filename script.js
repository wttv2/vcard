// 🌗 DARK / LIGHT MODE AUTO
const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

toggle.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
};

// 📊 CONTADOR SIMPLE (LOCAL)
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);
document.getElementById("counter").innerText = visits;

// 📱 PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

function downloadVCF() {
  const vcfData = `BEGIN:VCARD
VERSION:3.0
N:Cardoza;Armando
FN:Armando Cardoza
TITLE:Desarrollador Android / Transporte Ejecutivo
TEL:+50371018695
TEL:+50371991662
EMAIL:arcardev77@gmail.com
END:VCARD`;

  const blob = new Blob([vcfData], { type: "text/vcard" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "Armando_Cardoza.vcf";
  a.click();

  window.URL.revokeObjectURL(url);
}