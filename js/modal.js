const showModalBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
const closeModalBtn = document.querySelector(".close-modal");

showModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  backDrop.classList.remove("hidden");
});
//*1st solution : for close modal
// closeModalBtn.addEventListener("click", () => {
//   modal.classList.add("hidden");
//   backDrop.classList.add("hidden");
// });
// backDrop.addEventListener("click", () => {
//   modal.classList.add("hidden");
//   backDrop.classList.add("hidden");
// });

//* 2nd solution and better than 1st sol.

function closeModal() {
  modal.classList.add("hidden");
  backDrop.classList.add("hidden");
}
closeModalBtn.addEventListener("click", closeModal);
backDrop.addEventListener("click", closeModal);
