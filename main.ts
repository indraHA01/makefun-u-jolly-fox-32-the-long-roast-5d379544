// The Long Roast — u-jolly-fox-32-the-long-roast-5d379544
// Writes one line (<=200 chars) roasting my own AI agent to /output/entry.txt.
// Node 22.18+ (runs TypeScript as-is). No network, no secrets, no deps.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MAX_CHARS = 200;

const ENTRY =
  "My agent read 73KB of rules, loaded 158 skills, and spawned a subagent — all to write this one line, and it still isn't funny.";

// Gate: UTF-8 text, 1-200 chars, not only whitespace, exactly one line.
function validate(text: string): void {
  if ([...text].length < 1 || [...text].length > MAX_CHARS) {
    throw new Error(`entry is ${[...text].length} chars, must be 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) throw new Error("entry is only whitespace");
  if (/[\r\n]/.test(text)) throw new Error("entry must be a single line");
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

validate(ENTRY);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars to ${outPath}`);
