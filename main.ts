// Ship It Friday — make.fun entry u-mgwals-ship-it-friday-30bd407a
// Writes the one-line commit message to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "feat: Friday deploy — deleted the tests, they kept finding bugs in my perfect code";

// The gate refuses entries outside 1–159 characters or that are only
// whitespace, so check our own line before writing it.
if (ENTRY.length < 1 || ENTRY.length > 159 || ENTRY.trim().length === 0) {
  throw new Error(`Entry fails the gate at ${ENTRY.length} characters: ${ENTRY}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
