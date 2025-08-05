const display = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');
let input = "";

// Add click events to all buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let val = buttons[i].getAttribute('data-value');

    if (val === '.' && input.includes('.')) {
      return; // prevent multiple dots
    }

    input += val;
    display.value = input;
  });
}

// Clear button logic
document.getElementById('clear').addEventListener('click', function () {
  if (input.length > 0) {
    input = "";
    display.value = "";
  } else {
    display.value = "Nothing to clear";
  }
});

// Equal button logic
document.getElementById('equal').addEventListener('click', function () {
  if (input === "") {
    display.value = "Enter values";
    return;
  }

  try {
    let result = eval(input);

    if (result === Infinity || isNaN(result)) {
      display.value = "Math Error";
    } else {
      display.value = result;
      input = result.toString();
    }
  } catch (err) {
    display.value = "Error";
    input = "";
  }
});