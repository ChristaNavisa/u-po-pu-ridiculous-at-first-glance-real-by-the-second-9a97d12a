import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "We bury dead goldfish in miniature oak coffins with a printed eulogy, because heartbroken kids will pay anything and their parents will pay more to never explain death at breakfast.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

const outDir = resolveOutDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
