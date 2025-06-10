function toggleMode() {
  const html = document.documentElement;
  const isLightMode = html.classList.toggle("light");

  // Atualiza a imagem do perfil
  const img = document.querySelector("#profile img");
  img.setAttribute("src", isLightMode ? "./assets/avatar-light.png" : "./assets/Avatar.png");

  // Salva a preferência no localStorage
  localStorage.setItem("theme", isLightMode ? "light" : "dark");

  // Esconde os tooltips
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
  // Restaura o tema salvo no localStorage
  const savedTheme = localStorage.getItem("theme");
  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  if (savedTheme === "light") {
    html.classList.add("light");
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    html.classList.remove("light");
    img.setAttribute("src", "./assets/avatar.png");
  }

  // Adiciona evento ao botão de troca de tema
  const switchButton = document.querySelector("#switch button");
  if (switchButton) {
    switchButton.addEventListener("click", toggleMode);
  }
});
