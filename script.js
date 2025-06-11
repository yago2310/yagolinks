function toggleMode() {
  const html = document.documentElement;
  const isLightMode = html.classList.toggle("light");

  // Aguarda o próximo frame para aplicar mudanças visuais
  requestAnimationFrame(() => {
    const img = document.querySelector("#profile img");
    if (img) {
      img.setAttribute("src", isLightMode ? "./assets/avatar-light.png" : "./assets/avatar.png");
      img.onerror = () => {
        img.setAttribute("src", "./assets/avatar.png");
      };
    }

    localStorage.setItem("theme", isLightMode ? "light" : "dark");
    hideTooltips();
  });
}

function copyEmail() {
  const email = "yagolucasds@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const tooltip = document.getElementById("email-tooltip");
    tooltip.textContent = "Copiado!";
    setTimeout(() => {
      tooltip.textContent = "Clique para copiar";
    }, 2000);
  });
}

function copyPhone() {
  const phone = "+55 61 9510-0875";
  navigator.clipboard.writeText(phone).then(() => {
    const tooltip = document.getElementById("phone-tooltip");
    tooltip.textContent = "Copiado!";
    setTimeout(() => {
      tooltip.textContent = "Clique para copiar";
    }, 2000);
  });
}

function hideTooltips() {
  const emailTooltip = document.getElementById("email-tooltip");
  const phoneTooltip = document.getElementById("phone-tooltip");

  if (emailTooltip) {
    emailTooltip.style.visibility = "hidden";
    emailTooltip.style.opacity = 0;
  }

  if (phoneTooltip) {
    phoneTooltip.style.visibility = "hidden";
    phoneTooltip.style.opacity = 0;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    html.classList.add("light");
    img?.setAttribute("src", "./assets/avatar-light.png");
  } else if (savedTheme === "dark") {
    html.classList.remove("light");
    img?.setAttribute("src", "./assets/avatar.png");
  } else {
    // Detecta preferência do sistema se não tiver nada salvo
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) {
      html.classList.add("light");
      img?.setAttribute("src", "./assets/avatar-light.png");
    }
  }

  const switchButton = document.querySelector("#switch button");
  if (switchButton) {
    switchButton.addEventListener("click", toggleMode);
  }
});
