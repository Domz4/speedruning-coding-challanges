let btn = document.querySelector(".submit-btn");

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

btn.addEventListener("click", () => {
  const inputDates = document.querySelectorAll(".date-input");
  const currentDate = new Date();
  const inputDate = new Date(
    `${inputDates[1].value}/${inputDates[0].value}/${inputDates[2].value}`,
  );
  const days = Math.ceil(
    Math.abs(currentDate - inputDate) / (1000 * 60 * 60 * 24),
  );
  const dates = [
    (days % 365) % 30,
    Math.floor((days % 365) / 30),
    Math.floor(days / 365),
  ];
  console.log(days);
  const displayValues = document.querySelectorAll(".dynamic-date");

  inputDates.forEach((input, idx) => {
    if (!!input.value) {
      animateValue(
        displayValues[idx],
        0,
        dates[idx],
        500 + Math.random() * 1800,
      );
    } else {
      errors = document.querySelectorAll(".date-error");
      errors.forEach((err, errorIdx) => {
        if (errorIdx == idx) {
          err.classList.add("visible");
        }
      });
    }
  });
});
