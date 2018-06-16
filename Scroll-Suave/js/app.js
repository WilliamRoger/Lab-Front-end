// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

// Pega apenas o ícones com caminho internos que começam com #
const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
});

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth"
  });
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  // -80 menos a altura do menu
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}
