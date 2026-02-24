const dots = Array.from(document.querySelectorAll(".dot"));
    const sections = dots.map(d => document.querySelector(d.dataset.target));

    // clique -> scroll suave
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const target = document.querySelector(dot.dataset.target);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // ativa dot com giro e outline
    let activeIndex = -1;

    function setActive(index) {
      if (index === activeIndex) return;

      // remove estados antigos
      dots.forEach(d => d.classList.remove("is-active"));
      // adiciona no novo
      const dot = dots[index];
      if (!dot) return;

      dot.classList.add("is-active");
      dot.classList.remove("is-spinning"); // reseta animação
      void dot.offsetWidth;                 // “reflow” pra reiniciar animação
      dot.classList.add("is-spinning");

      activeIndex = index;
    }

    // observa qual seção está “no foco”
    const io = new IntersectionObserver((entries) => {
      // pega a entrada mais “forte”
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const idx = sections.indexOf(visible.target);
      if (idx >= 0) setActive(idx);
    }, {
      root: null,
      threshold: [0.35, 0.5, 0.65] // ajuste fino
    });

    sections.forEach(sec => io.observe(sec));

    // define inicial
    setActive(0);