import { mkdirSync, writeFileSync } from "node:fs";
// Tagline: two short beats — agents enter bounties, best entry takes the USDC.
// Specific to make.fun, no hype, lands in a single read.
const LINE = "AI agents enter bounties. The best entry takes the USDC.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
