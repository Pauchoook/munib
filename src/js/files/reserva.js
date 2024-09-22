export default function reserva() {
  const inputLegada = document.querySelector("#date-llegada");
  const inputSalida = document.querySelector("#date-salida");
  const inputGuests = document.querySelector("#date-guests");
  const reservaBtn = document.querySelector("#reserva-btn");
  const valueLlegada = document.querySelector("#value-llegada");
  const valueSalida = document.querySelector("#value-salida");

  let url = "";

  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "мая",
    "июня",
    "июля",
    "авг",
    "сен",
    "окт",
    "нояб",
    "дек",
  ];

  if (inputLegada) {
    const currentDate = new Date();
    const nextDate = new Date(new Date().setDate(currentDate.getDate() + 2));

    const currentYear = currentDate.getFullYear();
    const currentMonth =
      currentDate.getMonth() > 9 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`;
    const currentDay =
      currentDate.getDate() > 9 ? currentDate.getDate() : `0${currentDate.getDate()}`;

    const nextYear = nextDate.getFullYear();
    const nextMonth =
      nextDate.getMonth() > 9 ? nextDate.getMonth() + 1 : `0${nextDate.getMonth() + 1}`;
    const nextDay = nextDate.getDate() > 9 ? nextDate.getDate() : `0${nextDate.getDate()}`;

    inputLegada.value = `${currentYear}-${currentMonth}-${currentDay}`;
    inputSalida.value = `${nextYear}-${nextMonth}-${nextDay}`;
    initValue(
      currentDate.getDate(),
      currentDate.getMonth(),
      nextDate.getDate(),
      nextDate.getMonth()
    );

    url = initUrl(inputLegada.value, inputSalida.value, inputGuests.value);

    reservaBtn.addEventListener("click", (e) => {
      e.preventDefault();
      url = initUrl(inputLegada.value, inputSalida.value, inputGuests.value);
      const newUrl = reservaBtn.href + url;
      window.location.href = newUrl;
    });

    inputLegada.addEventListener("change", (e) => {
      const currentDate = new Date(e.target.value);
      const nextDate = new Date(inputSalida.value);
      initValue(currentDate.getDate(), currentDate.getMonth(), nextDate.getDate(), nextDate.getMonth());
    });

    inputSalida.addEventListener("change", (e) => {
      const nextDate = new Date(e.target.value);
      const currentDate = new Date(inputLegada.value);
      initValue(currentDate.getDate(), currentDate.getMonth(), nextDate.getDate(), nextDate.getMonth());
    });
  }

  function initValue(leggadaDay, leggadaMonth, salidaDay, salidaMonth) {
    valueLlegada.innerHTML = `${leggadaDay}<span>/${months[leggadaMonth]}</span>`;
    valueSalida.innerHTML = `${salidaDay}<span>/${months[salidaMonth]}</span>`;
  }

  function initUrl(leggada, salida, guests) {
    const url = `?leggada=${leggada}&salida=${salida}&guests=${guests}`;
    return url;
  }
}
