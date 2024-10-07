import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";

const calculateHash = async () => {
  const hash = createHash("sha256");
  const readableStream = createReadStream("./files/fileToCalculateHashFor.txt");

  await pipeline(readableStream, hash);

  console.log(hash.digest("hex"));
};

await calculateHash();
