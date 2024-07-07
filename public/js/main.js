(() => {
  // <stdin>
  var menu = document.querySelector(".site-nav");
  var toggle = document.getElementById("hamburgerMenu");
  var toggleMenu = () => {
    menu.classList.toggle("open");
    toggle.classList.toggle("open");
  };
  toggle.addEventListener("click", toggleMenu);
})();
