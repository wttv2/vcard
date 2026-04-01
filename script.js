// 🌗 DARK / LIGHT MODE AUTO
const toggle = document.getElementById("themeToggle");

// aplicar tema guardado
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

// actualizar icono SIEMPRE correctamente
function updateIcon() {
  toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
}

// ejecutar al cargar
updateIcon();

// click toggle
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  localStorage.setItem("theme", isLight ? "light" : "dark");

  updateIcon();
});

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