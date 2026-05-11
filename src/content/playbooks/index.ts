import type { PlaybookContent, GlyphIcon } from "./types";
import { enhancements } from "./enhancements";
import { medspa } from "./medspa";
import { dental } from "./dental";
import { hvac } from "./hvac";
import { plumbingElectrical } from "./plumbing-electrical";
import { personalInjuryLaw } from "./personal-injury-law";
import { veterinary } from "./veterinary";
import { personalTrainer } from "./personal-trainer";
import { weddingPlanner } from "./wedding-planner";
import { chiropracticPt } from "./chiropractic-pt";
import { roofing } from "./roofing";
import { realEstate } from "./real-estate";
import { landscaping } from "./landscaping";
import { moving } from "./moving";
import { insuranceAgents } from "./insurance-agents";
import { pestControl } from "./pest-control";
import { poolService } from "./pool-service";
import { mentalHealth } from "./mental-health";

// Merge per-vertical chart + differentiator + icon into base playbook
function enhance(slug: string, p: PlaybookContent, icon: GlyphIcon): PlaybookContent {
  const ext = enhancements[slug] ?? {};
  return { ...p, icon, ...ext };
}

export const playbooks: Record<string, PlaybookContent> = {
  medspa: enhance("medspa", medspa, "drop"),
  dental: enhance("dental", dental, "tooth"),
  hvac: enhance("hvac", hvac, "house"),
  "plumbing-electrical": enhance("plumbing-electrical", plumbingElectrical, "stack"),
  "personal-injury-law": enhance("personal-injury-law", personalInjuryLaw, "compass"),
  veterinary: enhance("veterinary", veterinary, "net"),
  "personal-trainer": enhance("personal-trainer", personalTrainer, "arrow"),
  "wedding-planner": enhance("wedding-planner", weddingPlanner, "drop"),
  "chiropractic-pt": enhance("chiropractic-pt", chiropracticPt, "stack"),
  roofing: enhance("roofing", roofing, "house"),
  "real-estate": enhance("real-estate", realEstate, "clipboard"),
  landscaping: enhance("landscaping", landscaping, "net"),
  moving: enhance("moving", moving, "arrow"),
  "insurance-agents": enhance("insurance-agents", insuranceAgents, "compass"),
  "pest-control": enhance("pest-control", pestControl, "stack"),
  "pool-service": enhance("pool-service", poolService, "drop"),
  "mental-health": enhance("mental-health", mentalHealth, "net"),
};

export const playbookSlugs = Object.keys(playbooks);
export type { PlaybookContent } from "./types";
