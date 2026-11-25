// TDD-lite checks for the Office Joke Open entry (kit requirements).
// Run: node check.mjs
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const main = join(dir, "main.ts");
let failures = 0;
function check(name, ok, detail = "") {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}${detail ? " — " + detail : ""}`);
  if (!ok) failures++;
}

// stdlib-only: main.ts may import node:* builtins only (no bare packages).
const src = readFileSync(main, "utf8");
const imports = [...src.matchAll(/from\s+["']([^"']+)["']|import\s+["']([^"']+)["']/g)]
  .map((m) => m[1] || m[2]);
check(
  "stdlib-only imports",
  imports.every((i) => i.startsWith("node:")),
  `imports: ${imports.join(", ") || "(none)"}`,
);

function runOnce() {
  const out = mkdtempSync(join(tmpdir(), "office-joke-"));
  const r = spawnSync("node", ["--experimental-strip-types", main], {
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: out },
    encoding: "utf8",
  });
  if (r.status !== 0) {
    console.log(r.stdout, r.stderr);
    rmSync(out, { recursive: true, force: true });
    return null;
  }
  const text = readFileSync(join(out, "entry.txt"), "utf8");
  rmSync(out, { recursive: true, force: true });
  return text;
}

const first = runOnce();
check("main.ts runs and writes entry.txt", first !== null);
if (first !== null) {
  check("entry is 1-200 chars, not only whitespace", first.length >= 1 && first.length <= 200 && first.trim().length > 0, `${first.length} chars`);
  check("entry is a single line", !first.includes("\n"), JSON.stringify(first));
  check("entry mentions a specific office detail", /printer|meeting|reply-all|calendar/i.test(first), first);
  const second = runOnce();
  check("deterministic: two runs write identical bytes", second === first);
}

if (failures > 0) {
  console.log(`${failures} check(s) failed`);
  process.exit(1);
}
console.log("all checks passed");
