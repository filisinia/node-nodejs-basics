import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

const compress = async () => {
  const gzib = createGzip();

  const sourse = createReadStream("./files/fileToCompress.txt");
  const destination = createWriteStream("./files/archive.gz");

  await pipeline(sourse, gzib, destination);
};

await compress();
