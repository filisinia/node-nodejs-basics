import { createWriteStream } from "node:fs";
import { stdin, stdout } from "node:process";
import { pipeline } from "node:stream/promises";

const write = async () => {
  const stream = createWriteStream("./files/fileToWrite.txt", "utf-8");

  stdout.write("Enter your text: \n", "utf-8");

  await pipeline(stdin, stream);
};

await write();
