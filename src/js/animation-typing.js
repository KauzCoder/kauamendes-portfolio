const texto = "Fullstack Developer";
const elemento = document.querySelector(".hero__subtitle");

let i = 0;

function escrever() {
  if (!elemento) {
    return;
  }

  if (i < texto.length) {
    elemento.innerHTML = texto.substring(0, i + 1) + '<span class="hero__typing-caret">_</span>';
    i += 1;
    setTimeout(escrever, 100);
    return;
  }
  
  elemento.innerHTML = texto + '<span class="hero__typing-caret">_</span>';
}

escrever();