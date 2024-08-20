
// animação tela descendo ao clicar na seção desejada 
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
  
    links.forEach(link => {
      link.addEventListener("click", scrollSmoothly);
    });
  
    function scrollSmoothly(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    }
  });

  // animação botão subindo para o topo do site
  document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
  
    // Exibe o botão quando o usuário rolar a página além de uma determinada posição
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollToTopButton.classList.remove("hidden");
      } else {
        scrollToTopButton.classList.add("hidden");
      }
    });
  
    // Role suavemente de volta ao topo quando o botão é clicado
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
  
    // Exibe o botão quando o usuário rolar a página além de uma determinada posição
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  
    // Role suavemente de volta ao topo quando o botão é clicado
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  