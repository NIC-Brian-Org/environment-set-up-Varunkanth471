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
      let output = 0;

      if (operation.value === "add") {
        output = val1 + val2;
      } else if (operation.value === "subtract") {
        output = val1 - val2;
      } else if (operation.value === "multiply") {
        output = val1 * val2;
      } else if (operation.value === "divide") {
        output = val1 / val2;
      }

      result.innerHTML = output;
    };

    number1.addEventListener("input", update);
    number2.addEventListener("input", update);
    operation.addEventListener("change", update);

    update(); // run once on load
  });
})();
