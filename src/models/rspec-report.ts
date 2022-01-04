import { RspecExample } from "./rspec-example";
import { RspecSummary } from "./rspec-summary";

export interface RspecReport {
  version: string;
  examples: RspecExample[];
  summary: RspecSummary;
  summary_line: string;
}
