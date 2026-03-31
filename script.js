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