import { readdir, mkdir, copyFile } from "node:fs/promises";

const copy = async () => {
  try {
    const files = await readdir("./files", { recursive: true });

    await mkdir("./files_copy");

    for await (const file of files) {
      copyFile(`./files/${file}`, `./files_copy/${file}`);
    }
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
