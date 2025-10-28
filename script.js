function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagen
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagen light

    img.setAttibute("src", "./assets/avatar-light.png");
  } else {
    // se tiver sem o light mod, manter a imagem normal
    img.setAttibute("src", "./assets/avatar.png");
  }
}
