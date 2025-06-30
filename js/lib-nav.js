const navbarExpand = document.querySelector('[data-expand="navbar"]');
const overlay = document.querySelector('[data-expand="overlay"]')
const btnExpand = document.querySelector('[data-expand="btn-expand"]');
const btnExpandClose = document.querySelector('[data-expand="btn-close"]');

const closeSidebar = () => {
  navbarExpand.classList.remove("translate-x-0");
  navbarExpand.classList.add("translate-x-full");
  overlay.classList.remove("dsply-block");
};

const initNavbar = () => {
  navbarExpand.classList.add("z-idx-30");
  overlay.classList.add("overlay")
  
  overlay.addEventListener("click", () => {
    closeSidebar();
  });

  btnExpand.addEventListener("click", () => {
    navbarExpand.classList.remove("translate-x-full");
    navbarExpand.classList.add("translate-x-0");
    overlay.classList.add("dsply-block");
  });
  
  btnExpandClose.addEventListener("click", () => {
    closeSidebar();
  });
};

export { initNavbar };
