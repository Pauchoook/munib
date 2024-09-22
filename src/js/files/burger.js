export default function burger() {
  const burger = document.querySelector("#burger");
  const burgerOpen = document.querySelector("#burger-open");
  const burgerClose = document.querySelector("#burger-close");
  if (burger) {
    burgerOpen.addEventListener("click", (e) => {
      e.stopPropagation();

      if (!burger.classList.contains("open")) {
        burger.classList.add("open");
        burger.addEventListener("click", (e) => e.stopPropagation());
        burgerOpen.classList.add("active");
        document.body.classList.add("body-hidden");

        document.body.addEventListener("click", handleClose);
      } else {
        handleClose();
      }
    });

    burgerClose.addEventListener("click", handleClose);

    function handleClose() {
      burger.classList.remove("open");
      document.body.classList.remove("body-hidden");

      return document.body.removeEventListener("click", handleClose);
    }
  }
}
