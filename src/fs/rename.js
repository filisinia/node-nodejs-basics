import { rename as renameFile } from "node:fs/promises";

const rename = async () => {
  try {
    await renameFile("./files/wrongFilename.txt", "./files/properFilename.md");
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
