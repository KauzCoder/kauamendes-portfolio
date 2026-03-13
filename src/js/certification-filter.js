function setupCertificationFilter() {
  const buttons = [...document.querySelectorAll(".chip")];
  const courses = [...document.querySelectorAll(".course")];

  function setActiveButton(activeBtn) {
    buttons.forEach(btn => btn.setAttribute("aria-pressed", "false"));
    activeBtn.setAttribute("aria-pressed", "true");
  }

  function aplicarFiltro(filter) {
    courses.forEach(card => card.classList.remove("full-width"));

    courses.forEach(card => {
      const categoria = card.dataset.cat;
      const show = (filter === "all") || (categoria === filter);
      card.hidden = !show;
    });

    const visibleCourses = courses.filter(card => !card.hidden);
    if (visibleCourses.length % 2 !== 0) {
      visibleCourses[visibleCourses.length - 1].classList.add("full-width");
    }

    function atualizaContador() {
    const contador = document.getElementById("countText");
    contador.innerHTML = `Certificações: ${visibleCourses.length}`;
  }
  atualizaContador();
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      setActiveButton(btn);             
      aplicarFiltro(filter);             
    });
  });

  aplicarFiltro("all");
}

setupCertificationFilter();