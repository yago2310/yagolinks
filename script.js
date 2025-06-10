function toggleMode() {
  const html = document.documentElement
  const isLightMode = html.classList.toggle("light") // só uma vez!

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (isLightMode) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

function copyEmail() {
  const email = "yagolucasds@gmail.com"
  navigator.clipboard.writeText(email).then(() => {
    const tooltip = document.getElementById("email-tooltip")
    tooltip.textContent = "Copiado!"
    setTimeout(() => {
      tooltip.textContent = "Clique para copiar"
    }, 2000)
  })
}

function copyPhone() {
  const phone = "+55 61 9510-0875"
  navigator.clipboard.writeText(phone).then(() => {
    const tooltip = document.getElementById("phone-tooltip")
    tooltip.textContent = "Copiado!"
    setTimeout(() => {
      tooltip.textContent = "Clique para copiar"
    }, 2000)
  })
}

const switchButton = document.querySelector('#switch button');
const emailTooltip = document.querySelector('#email-tooltip');
const phoneTooltip = document.querySelector('#phone-tooltip');

switchButton.addEventListener('click', () => {
  // Alterna a classe light no body
  document.body.classList.toggle('light');

  // Esconde os tooltips ao trocar o tema
  emailTooltip.style.visibility = 'hidden';
  emailTooltip.style.opacity = 0;
  phoneTooltip.style.visibility = 'hidden';
  phoneTooltip.style.opacity = 0;
});
