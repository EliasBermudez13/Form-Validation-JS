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
  let allValues = document.querySelectorAll("input[type=text], textarea");

  let alertError = document.getElementById("alertError");
  let state = document.getElementById("inputState");

  function prueba(e) {
    e.preventDefault();
    for (var values of allValues) {
      if (values.value === "") {
        values.style.background = "pink";
        alertError.classList.remove("invisible");
      } else {
        // console.log("All good, form send");
        values.style.background = "#fff";
        // alertError.classList.add("invisible");
      }
    }
    let elementoActivo = document.querySelector(
      'input[name="inlineRadioOptions"]:checked'
    );
    if (!elementoActivo) {
      console.log("El campo credit card esta vacio");
      alertError.classList.remove("invisible");
    }
    if (state.value === "Pick a state") {
      console.log("El campo state está vacio");
    }
  }
};
