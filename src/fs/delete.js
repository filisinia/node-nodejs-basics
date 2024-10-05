import { rm } from "node:fs/promises";

const remove = async () => {
  try {
    await rm("./files/fileToRemove.txt");
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
