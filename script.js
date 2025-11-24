//your JS code here. If required.
const outputDiv = document.getElementById("output");

function createRandomPromise(index) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() < 0.5;
    const delay = Math.random() * 1000 + 500; 

    setTimeout(() => {
      if (shouldResolve) {
        const num = Math.floor(Math.random() * 10) + 1;
        resolve(num);
      } else {
        reject("error");
      }
    }, delay);
  });
}

const promises = [];
for (let i = 1; i <= 5; i++) {
  promises.push(createRandomPromise(i));
}

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
