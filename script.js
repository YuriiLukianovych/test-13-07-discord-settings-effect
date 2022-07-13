const mainContent = document.querySelector(".main-content");
const popupWrapper = document.querySelector(".popup-wrapper");
const popupBody = document.querySelector(".popup");
const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const leftSidePopup = document.querySelector(".left-side");
const rightSidePopup = document.querySelector(".right-side");

btn.addEventListener("click", () => {
    popupWrapper.classList.add("is-visible");
    popupBody.classList.add("is-visible");
    leftSidePopup.classList.add("is-visible");
    rightSidePopup.classList.add("is-visible");
    mainContent.classList.add("is-hide");
    closeBtn.classList.add("is-visible");
});

closeBtn.addEventListener("click", () => {
    popupWrapper.classList.remove("is-visible");
    popupBody.classList.remove("is-visible");
    leftSidePopup.classList.remove("is-visible");
    rightSidePopup.classList.remove("is-visible");
    mainContent.classList.remove("is-hide");
    closeBtn.classList.remove("is-visible");
});
