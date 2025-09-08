console.log("main.js");
(() => {
  window.addEventListener("load", () => {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    const operation = document.getElementById("operation");
    const result = document.getElementById("result");

    const update = () => {
      const val1 = parseFloat(number1.value);
      const val2 = parseFloat(number2.value);
      if (operation.value === "add") result.innerHTML = val1 + val2;
      if (operation.value === "subtract") result.innerHTML = val1 - val2;
      if (operation.value === "multiply") result.innerHTML = val1 * val2;
      if (operation.value === "divide") result.innerHTML = val1 / val2;
    };

    number1.addEventListener("input", update);
    number2.addEventListener("input", update);
    operation.addEventListener("change", update);

    update();
  });
})();
