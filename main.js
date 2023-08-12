document.querySelector("#result-btn").addEventListener("click", function () {
  let userWeight = document.querySelector("#weight-input").value;
  let userHeight = document.querySelector("#height-input").value;
  let res = 0;
  let outputMessageTitle, outputMessageText;

  if (!userHeight || !userWeight) {
    return;
  }

  if (userHeight > 5) {
    userHeight /= 100;
  }

  res = (userWeight / userHeight ** 2).toFixed(2);

  if (res < 16) {
    outputMessageTitle = 'Выраженный дефицит массы'
    outputMessageText = `ИМТ ${res} <br> Маловато.`
  } else if (res >= 16 && res < 18.5) {
    outputMessageTitle = 'Дефицит массы тела'
    outputMessageText = `ИМТ ${res} <br> Маловато, но могло быть хуже.`
  } else if (res >=18.5 && res < 25) {
    outputMessageTitle = 'Норма'
    outputMessageText = `ИМТ ${res} <br> Вес в суперской норме.`
  } else if (res >= 25 && res < 30) {
    outputMessageTitle = 'Предожирение'
    outputMessageText = `ИМТ ${res} <br> Избыточная масса тела.`
  } else if (res >= 30 && res < 35) {
    outputMessageTitle = 'Ожирение первой степени'
    outputMessageText = `ИМТ ${res} <br> Избыточная масса тела, ожирение первой степени.`
  } else if (res >=35 && res < 40) {
    outputMessageTitle = 'Ожирение второй степени'
    outputMessageText = `ИМТ ${res} <br> Избыточная масса тела, ожирение второй степени.`
  } else if (res > 40) {
    outputMessageTitle = 'Морбидное ожирение'
    outputMessageText = `ИМТ ${res} <br> Избыточная масса тела, ожирение третьей степени.`
  }

  document.querySelector('.output-area-title').innerHTML = outputMessageTitle;
  document.querySelector('.output-area-text').innerHTML = outputMessageText;

  document.querySelector(".output-area-wrap").classList.add("output-show");
});
