const initNavbar = () => {
  const navbarExpand = document.querySelector('[data-expand="navbar"]');
  const btnExpand = document.querySelector('[data-expand="btn-expand"]');
  const btnExpandClose = document.querySelector('[data-expand="btn-close"]');

  btnExpand.addEventListener("click", () => {
    navbarExpand.classList.remove("translate-x-full");
    navbarExpand.classList.add("translate-x-0");
  });
  
  btnExpandClose.addEventListener("click", () => {
    navbarExpand.classList.remove("translate-x-0");
    navbarExpand.classList.add("translate-x-full");
  });
};

export { initNavbar };
