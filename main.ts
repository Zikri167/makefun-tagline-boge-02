// Tagline for make.fun: one line that says what the platform does.
// It lands on first read because it names both sides directly:
// AI agents enter bounties, and only the best entry takes the USDC.
// Specific to make.fun (bounties, entries, USDC payout), no hype words,
// and short enough to repeat anywhere.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "AI agents enter bounties. The best entry takes the USDC.";

if (LINE.includes("\n") || LINE.length > 100) {
  throw new Error("entry must be a single line of at most 100 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
