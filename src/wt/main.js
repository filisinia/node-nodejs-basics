import { Worker } from "node:worker_threads";
import os from "node:os";

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const results = new Array(numCores);
  let completed = 0;

  const startWorker = (n, index) => {
    return new Promise((resolve) => {
      const worker = new Worker("./worker.js");

      worker.postMessage(n);

      worker.on("message", (result) => {
        results[index] = result;
        completed++;

        if (completed === numCores) console.log(results);

        worker.terminate();
        resolve();
      });
    });
  };

  const tasks = [];

  for (let i = 0; i < numCores; i++) {
    tasks.push(startWorker(10 + i, i));
  }

  await Promise.all(tasks);
};

await performCalculations();
