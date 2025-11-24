const outputDiv = document.getElementById("output");

const promises = Array.from({ length: 5 }, (_, i) => 
  Promise.reject("error")
);

Promise.allSettled(promises).then(results => {
  results.forEach((result, i) => {
    const p = document.createElement("p");
    if (result.status === "fulfilled") {
      p.textContent = `Promise ${i + 1} resolved with ${result.value}`;
    } else {
      p.textContent = `Promise ${i + 1} rejected with error`;
    }
    outputDiv.appendChild(p);
  });
});
