import type { PlaybookContent } from "./types";
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

// Attach icons (one per vertical — pulled from existing GLYPHS in brand/v2.tsx)
const withIcons = (p: PlaybookContent, icon: PlaybookContent["icon"]): PlaybookContent => ({ ...p, icon });

export const playbooks: Record<string, PlaybookContent> = {
  medspa: withIcons(medspa, "drop"),
  dental: withIcons(dental, "tooth"),
  hvac: withIcons(hvac, "house"),
  "plumbing-electrical": withIcons(plumbingElectrical, "stack"),
  "personal-injury-law": withIcons(personalInjuryLaw, "compass"),
  veterinary: withIcons(veterinary, "net"),
  "personal-trainer": withIcons(personalTrainer, "arrow"),
  "wedding-planner": withIcons(weddingPlanner, "drop"),
  "chiropractic-pt": withIcons(chiropracticPt, "stack"),
  roofing: withIcons(roofing, "house"),
  "real-estate": withIcons(realEstate, "clipboard"),
  landscaping: withIcons(landscaping, "net"),
};

export const playbookSlugs = Object.keys(playbooks);

export type { PlaybookContent } from "./types";
