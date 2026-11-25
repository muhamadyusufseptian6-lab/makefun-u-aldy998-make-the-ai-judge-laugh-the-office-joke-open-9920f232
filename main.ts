// Make the AI Judge Laugh: the Office Joke Open
// Writes one single-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib-only, deterministic: the same joke every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const JOKE =
  "The office printer jammed again, so I emailed it a meeting invite titled 'Let's talk about your attitude.'";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir; // resolved from the script location, never process.cwd()

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
