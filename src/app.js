/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  var form = document.getElementById("form");

  form.addEventListener("submit", prueba);
  let allValues = document.querySelectorAll(
    "input[type=text], input[type=number], textarea"
  );

  // Inputs
  let amount = document.getElementById("inputAmount");
  let card = document.getElementById("inputCard");
  let cvc = document.getElementById("inputCVC");
  let firstname = document.getElementById("inputFName");
  let lastname = document.getElementById("inputLName");
  let city = document.getElementById("inputCity");
  let state = document.getElementById("inputState");
  let postalcode = document.getElementById("inputZip");
  let message = document.querySelector("textarea");
  // Inputs

  // Error messages
  let cardErr = document.getElementById("cardErrMsg");
  let cvcErr = document.getElementById("cvcErrMsg");
  let amountErr = document.getElementById("amountErrMsg");
  let fNameErr = document.getElementById("fNameErrMsg");
  let lNameErr = document.getElementById("lNameErrMsg");
  let cityErr = document.getElementById("cityErrMsg");
  let stateErr = document.getElementById("stateErrMsg");
  let zipErr = document.getElementById("zipErrMsg");
  let cardSelectErr = document.getElementById("cardselectErrMsg");
  let messageErr = document.getElementById("messageErrMsg");
  // End of error messages

  function prueba(e) {
    e.preventDefault();
    // for (var values of allValues) {
    //   if (values.value === "") {
    //     values.style.background = "pink";
    //     alertError.classList.remove("invisible");
    //   } else {
    //     // console.log("All good, form send");
    //     values.style.background = "#fff";
    //     // alertError.classList.add("invisible");
    //   }
    // }
    if (amount.value === "") {
      amountErr.classList.remove("invisible");
      amount.style.background = "pink";
    } else {
      amountErr.classList.add("invisible");
      amount.style.background = "#fff";
    }

    if (card.value === "") {
      cardErr.classList.remove("invisible");
      card.style.background = "pink";
    } else {
      cardErr.classList.add("invisible");
      card.style.background = "#fff";
    }

    if (cvc.value === "") {
      cvcErr.classList.remove("invisible");
      cvc.style.background = "pink";
    } else {
      cvcErr.classList.add("invisible");
      cvc.style.background = "#fff";
    }

    if (firstname.value === "") {
      fNameErr.classList.remove("invisible");
      firstname.style.background = "pink";
    } else {
      fNameErr.classList.add("invisible");
      firstname.style.background = "#fff";
    }

    if (lastname.value === "") {
      lNameErr.classList.remove("invisible");
      lastname.style.background = "pink";
    } else {
      lNameErr.classList.add("invisible");
      lastname.style.background = "#fff";
    }

    if (city.value === "") {
      cityErr.classList.remove("invisible");
      city.style.background = "pink";
    } else {
      cityErr.classList.add("invisible");
      city.style.background = "#fff";
    }

    if (postalcode.value === "") {
      zipErr.classList.remove("invisible");
      postalcode.style.background = "pink";
    } else {
      zipErr.classList.add("invisible");
      postalcode.style.background = "#fff";
    }

    if (message.value === "") {
      messageErr.classList.remove("invisible");
      message.style.background = "pink";
    } else {
      messageErr.classList.add("invisible");
      message.style.background = "#fff";
    }

    let elementoActivo = document.querySelector(
      'input[name="inlineRadioOptions"]:checked'
    );
    if (state.value === "Pick a state") {
      stateErr.classList.remove("invisible");
      state.style.background = "pink";
    } else {
      stateErr.classList.add("invisible");
      state.style.background = "#fff";
    }
    if (!elementoActivo) {
      cardSelectErr.classList.remove("invisible");
    } else {
      cardSelectErr.classList.add("invisible");
    }
  }
};
