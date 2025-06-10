function toggleMode() {
  const html = document.documentElement;
  const isLightMode = html.classList.toggle("light"); // aplica ou remove .light em <html>

  // Atualiza imagem do perfil
  const img = document.querySelector("#profile img");
  if (isLightMode) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }

  // Esconde tooltips ao trocar tema
  hideTooltips();
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
  const switchButton = document.querySelector("#switch button");
  if (switchButton) {
    switchButton.addEventListener("click", toggleMode);
  }
});
