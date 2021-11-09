import { RspecExample } from "./rspecExample";
import { RspecSummary } from "./rspecSummary";

export interface RspecReport {
  version: string;
  examples: RspecExample[];
  summary: RspecSummary;
  summary_line: string;
}
