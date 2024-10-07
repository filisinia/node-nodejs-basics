import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

const decompress = async () => {
  const unzip = createUnzip();

  const sourse = createReadStream("./files/archive.gz");
  const destination = createWriteStream("./files/fileToCompress.txt");

  await pipeline(sourse, unzip, destination);
};

await decompress();
