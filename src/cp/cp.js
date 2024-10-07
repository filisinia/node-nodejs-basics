import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
  const child = spawn("node", ["./files/script.js", ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
};

spawnChildProcess(["arg1", "arg2", "arg3"]);
