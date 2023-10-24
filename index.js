const amount = document.getElementById("amount_number");
let amount_slider = document.getElementById("amount_slider");
let amount_slider_output = document.getElementById("amount_slider_output");
const amount_error = document.querySelector(".amount_error");

const period = document.getElementById("period_number");
let period_slider = document.getElementById("period_slider");
let period_slider_output = document.getElementById("period_slider_output");
const period_error = document.querySelector(".period_error");

const dayly_payment = document.getElementById("dayly_payment");
const total_payment = document.getElementById("total_payment");

const submit_button = document.getElementById("submit_button");

const interest_rate = 2.2;

let dayly_amount = (LA, IR, RP) => {
  return (LA + LA * (IR / 100) * RP) / RP;
};

let full_amount = (DR, RP) => {
  return DR * RP;
};

// CREDIT AMOUNT input and slider

amount_slider.oninput = function () {
  amount_slider_output.innerHTML = this.value;
  amount.value = this.value;
  amount_error.style.display = "none";

  if (period.value === "" || period.value < 7 || period.value > 60) {
    dayly_payment.innerHTML = "Вкажіть необхідні данні.";
    total_payment.innerHTML = "Вкажіть необхідні данні.";
    dayly_payment.style.color = "red";
    total_payment.style.color = "red";
    period_error.style.display = "block";
  } else {
    dayly_payment.innerHTML = dayly_amount(
      parseInt(amount.value),
      interest_rate,
      parseInt(period.value)
    ).toFixed(2);
    total_payment.innerHTML = full_amount(
      dayly_amount(
        parseInt(amount.value),
        interest_rate,
        parseInt(period.value)
      ),
      parseInt(period.value)
    ).toFixed(2);
    period_error.style.display = "none";
    dayly_payment.style.color = "black";
    total_payment.style.color = "black";

    if (period.value !== "" && period.value >= 7 && period.value <= 60) {
      submit_button.disabled = false;
    }
  }
};

amount.oninput = function () {
  amount_slider_output.innerHTML = this.value;
  amount_slider.value = this.value;
  amount_error.style.display = "none";

  if (period.value === "" || period.value < 7 || period.value > 60) {
    dayly_payment.innerHTML = "Вкажіть необхідні данні.";
    total_payment.innerHTML = "Вкажіть необхідні данні.";
    dayly_payment.style.color = "red";
    total_payment.style.color = "red";
    period_error.style.display = "block";
  } else if (
    amount.value === "" ||
    amount.value < 1000 ||
    amount.value > 50000
  ) {
    dayly_payment.innerHTML = "Вкажіть необхідні данні.";
    total_payment.innerHTML = "Вкажіть необхідні данні.";
    dayly_payment.style.color = "red";
    total_payment.style.color = "red";
    amount_error.style.display = "block";
  } else {
    dayly_payment.innerHTML = dayly_amount(
      parseInt(amount.value),
      interest_rate,
      parseInt(period.value)
    ).toFixed(2);
    total_payment.innerHTML = full_amount(
      dayly_amount(
        parseInt(amount.value),
        interest_rate,
        parseInt(period.value)
      ),
      parseInt(period.value)
    ).toFixed(2);
    period_error.style.display = "none";
    dayly_payment.style.color = "black";
    total_payment.style.color = "black";

    if (period.value !== "" && period.value >= 7 && period.value <= 60) {
      submit_button.disabled = false;
    }
  }
};

// CREDIT PERIOD input and slider

period_slider.oninput = function () {
  period_slider_output.innerHTML = this.value;
  period.value = this.value;
  period_error.style.display = "none";

  if (amount.value === "" || amount.value < 1000 || amount.value > 50000) {
    dayly_payment.innerHTML = "Вкажіть необхідні данні.";
    total_payment.innerHTML = "Вкажіть необхідні данні.";
    dayly_payment.style.color = "red";
    total_payment.style.color = "red";
    amount_error.style.display = "block";
  } else {
    dayly_payment.innerHTML = dayly_amount(
      parseInt(amount.value),
      interest_rate,
      parseInt(period.value)
    ).toFixed(2);
    total_payment.innerHTML = full_amount(
      dayly_amount(
        parseInt(amount.value),
        interest_rate,
        parseInt(period.value)
      ),
      parseInt(period.value)
    ).toFixed(2);
    amount_error.style.display = "none";
    dayly_payment.style.color = "black";
    total_payment.style.color = "black";

    if (amount.value !== "" && amount.value >= 1000 && amount.value <= 50000) {
      submit_button.disabled = false;
    }
  }
};

period.oninput = function () {
  period_slider_output.innerHTML = this.value;
  period_slider.value = this.value;
  period_error.style.display = "none";

  if (amount.value === "" || amount.value < 1000 || amount.value > 50000) {
    dayly_payment.innerHTML = "Вкажіть необхідні данні.";
    total_payment.innerHTML = "Вкажіть необхідні данні.";
    dayly_payment.style.color = "red";
    total_payment.style.color = "red";
    amount_error.style.display = "block";
  } else if (period.value === "" || period.value < 7 || period.value > 60) {
    dayly_payment.innerHTML = "Вкажіть необхідні данні.";
    total_payment.innerHTML = "Вкажіть необхідні данні.";
    dayly_payment.style.color = "red";
    total_payment.style.color = "red";
    period_error.style.display = "block";
  } else {
    dayly_payment.innerHTML = dayly_amount(
      parseInt(amount.value),
      interest_rate,
      parseInt(period.value)
    ).toFixed(2);
    total_payment.innerHTML = full_amount(
      dayly_amount(
        parseInt(amount.value),
        interest_rate,
        parseInt(period.value)
      ),
      parseInt(period.value)
    ).toFixed(2);
    amount_error.style.display = "none";
    dayly_payment.style.color = "black";
    total_payment.style.color = "black";

    if (amount.value !== "" && amount.value >= 1000 && amount.value <= 50000) {
      submit_button.disabled = false;
    }
  }
};
