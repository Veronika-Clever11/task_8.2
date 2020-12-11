document
  .querySelector("#submit")
  .addEventListener("click", (event) => {
  event.preventDefault();
  alert(
    "Спасибо, за нажатие на нашу замечательную кнопку. Значение вашего поля - " +
      document.querySelector("#text").value
  );
});

