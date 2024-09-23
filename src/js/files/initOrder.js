export default function initOrder() {
  const inputLegada = document.querySelector("#date-llegada-main");
  const inputSalida = document.querySelector("#date-salida-main");
  const inputGuests = document.querySelector("#date-guests-main");

  const legadaValue = inputLegada.closest(".form__label").querySelector(".form__label-value");
  const salidaValue = inputSalida.closest(".form__label").querySelector(".form__label-value");

  if (inputLegada) {
    const [legada, salida, guests] = window.location.search
      .replace("?", "")
      .split("&")
      .reduce((acc, value) => (acc = [...acc, value.split("=")[1]]), []);

    inputLegada.value = legada;
    legadaValue.textContent = inputLegada.value;

    inputSalida.value = salida;
    salidaValue.textContent = inputSalida.value;

    inputGuests.value = guests;

    inputLegada.addEventListener("change", (e) => (legadaValue.textContent = e.target.value));
    inputSalida.addEventListener("change", (e) => (salidaValue.textContent = e.target.value));
  }
}