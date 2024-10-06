import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { pipeline } from "node:stream/promises";

const read = async () => {
  const stream = createReadStream("./files/fileToRead.txt", "utf-8");

  await pipeline(stream, stdout);
};

await read();
