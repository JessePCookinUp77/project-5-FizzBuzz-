function fizzBuzz(n) {
  const container = document.getElementById("fizzbuzz-container");

  for (let i = 1; i <= n; i++) {
    const item = document.createElement("div");
    item.classList.add("fizzbuzz-item");

    if (i % 3 === 0 && i % 5 === 0) {
      item.textContent = "FizzBuzz";
      item.classList.add("fizzbuzz");
    } else if (i % 3 === 0) {
      item.textContent = "Fizz";
      item.classList.add("fizz");
    } else if (i % 5 === 0) {
      item.textContent = "Buzz";
      item.classList.add("buzz");
    } else {
      item.textContent = i;
    }

    container.appendChild(item);
  }
}

fizzBuzz(100);
