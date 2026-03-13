const copyCards = document.querySelectorAll(".contato__copy-card[data-copy-value]");

function markAsCopied(card) {
  const hint = card.querySelector("p:last-of-type");
  if (!hint) return;

  const originalText = hint.textContent;
  card.classList.add("is-copied");
  hint.textContent = "Copiado!";

  window.setTimeout(() => {
    card.classList.remove("is-copied");
    hint.textContent = originalText;
  }, 1200);
}

async function copyCardValue(card) {
  const value = card.getAttribute("data-copy-value");
  if (!value) return;

  try {
    await navigator.clipboard.writeText(value);
    markAsCopied(card);
  } catch (error) {
    console.error("falha em copiar o texto do clipboard:", error);
  }
}

copyCards.forEach((card) => {
  card.addEventListener("click", () => {
    copyCardValue(card);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      copyCardValue(card);
    }
  });
});
