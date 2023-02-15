//#region Elements
const modalEl = document.querySelector(".modal") as HTMLDivElement;
const overlayEl = document.querySelector(".overlay") as HTMLDivElement;
const closeModalBtnEl = document.querySelector(".close-modal") as HTMLButtonElement;
const showModalBtnEls = document.querySelectorAll(".show-modal") as NodeListOf<HTMLButtonElement>;
//#endregion

//#region Events
const openModal = function (): void {
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
};

const closeModal = function (): void {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};
//#endregion

for (let i = 0; i < showModalBtnEls.length; i++) {
  const element = showModalBtnEls[i];
  element.addEventListener("click", openModal);
}

closeModalBtnEl.addEventListener("click", closeModal);

overlayEl.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e: KeyboardEvent) {
  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) closeModal();
});
