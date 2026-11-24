// The One-Line AI Excuse for Breaking Production.
// Writes a single original excuse line (<=180 chars, one line, UTF-8)
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// The line is a fixed literal: no time, randomness, or network, so
// every run writes byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry \u2014 I pushed the fix straight to production because staging was down, and staging was down because I pushed the fix straight to production.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
