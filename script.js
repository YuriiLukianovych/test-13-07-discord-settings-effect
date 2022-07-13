const mainContent = document.querySelector(".main-content");
const popupWrapper = document.querySelector(".popup-wrapper");
const popupBody = document.querySelector(".popup");
const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", () => {
    popupWrapper.classList.add("is-visible");
    popupBody.classList.add("is-visible");
    mainContent.classList.add("is-hide");
});

closeBtn.addEventListener("click", () => {
    popupWrapper.classList.remove("is-visible");
    popupBody.classList.remove("is-visible");
    mainContent.classList.remove("is-hide");
});
