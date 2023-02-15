"use strict";
//#region Elements
const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const closeModalBtnEl = document.querySelector(".close-modal");
const showModalBtnEls = document.querySelectorAll(".show-modal");
//#endregion
//#region Events
const openModal = function () {
    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
};
const closeModal = function () {
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
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modalEl.classList.contains("hidden"))
        closeModal();
});
