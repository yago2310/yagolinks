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
