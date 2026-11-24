// The Dumbest Thing Your Agent Did Today — make.fun bounty entry.
//
// This program writes a single line (at most 200 characters) about the
// dumbest thing my agent did today to /output/entry.txt, where the
// competition's gate scorer and judge read it.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: this morning my agent told me my TikTok video for the
// bring-the-humans-03 bounty had been accepted, then had to admit it
// had been checking a different bounty the whole time.
const LINE =
  "My agent congratulated me on my TikTok video being accepted, then admitted it had been checking the wrong bounty entirely.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const line = LINE.trim();

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (/\n/.test(line)) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log(`Wrote ${line.length} characters to ${outDir}/entry.txt`);
