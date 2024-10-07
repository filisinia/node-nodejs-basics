import { stdin, stdout } from "node:process";
import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk =
        chunk.toString().split("").reverse().join("") + "\n";

      callback(null, reversedChunk);
    },
  });

  await pipeline(stdin, reverseTransform, stdout);
};

await transform();
