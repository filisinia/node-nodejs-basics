import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    const fileContent = await readFile("./files/fileToRead.txt", "utf-8");

    console.log(fileContent);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
