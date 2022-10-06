const hamburger = document.querySelector("#hamburger");
const closebtn = document.querySelector("#closebtn");
const navbar = document.querySelector("#navbar");
const backdrop = document.querySelector("#backdrop");

hamburger.addEventListener("click", () => {
  navbar.classList.add("show");
  backdrop.classList.add("show");
});
const closeMenuModal = () => {
  navbar.classList.remove("show");
  backdrop.classList.remove("show");
};
closebtn.addEventListener("click", closeMenuModal);
backdrop.addEventListener("click", (e) => {
  let id = e.target.id;
  if (id === "backdrop") {
    closeMenuModal();
  }
});
