const open = document.getElementById("open");
const modalContainer = document.getElementById("modal_container");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

open.addEventListener("click", () => showModal());

close.addEventListener("click", () => hideModal());

modalContainer.addEventListener("click", () => hideModal());

modal.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
});

document.addEventListener("keydown", (e) => {
  const keyCode = e.key;
  if (keyCode === "Escape") {
    hideModal();
  }
});

const hideModal = () => modalContainer.classList.remove("show");
const showModal = () => modalContainer.classList.add("show");
