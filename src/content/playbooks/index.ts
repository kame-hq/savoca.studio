import type { PlaybookContent } from "./types";
import { medspa } from "./medspa";
import { dental } from "./dental";
import { hvac } from "./hvac";
import { plumbingElectrical } from "./plumbing-electrical";
import { personalInjuryLaw } from "./personal-injury-law";
import { veterinary } from "./veterinary";
import { personalTrainer } from "./personal-trainer";

export const playbooks: Record<string, PlaybookContent> = {
  medspa,
  dental,
  hvac,
  "plumbing-electrical": plumbingElectrical,
  "personal-injury-law": personalInjuryLaw,
  veterinary,
  "personal-trainer": personalTrainer,
};

export const playbookSlugs = Object.keys(playbooks);

export type { PlaybookContent } from "./types";
