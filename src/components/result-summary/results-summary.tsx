/* eslint-disable id-length */
import clsx from "clsx";
import type { HTMLAttributes } from "react";

import type { Data } from "../../types/Data";
import styles from "./results-summary.module.scss";
import SummaryItem from "./summary-item/summary-item";

export type ResultsSummaryProps = HTMLAttributes<HTMLDivElement>;
export default function ResultsSummary({ className }: ResultsSummaryProps) {
  const data: Data = [
    {
      category: "Reaction",
      icon: "/react-fem-results-summary-component/images/icon-reaction.svg",
      score: 80,
    },
    {
      category: "Memory",
      icon: "/react-fem-results-summary-component/images/icon-memory.svg",
      score: 92,
    },
    {
      category: "Verbal",
      icon: "/react-fem-results-summary-component/images/icon-verbal.svg",
      score: 61,
    },
    {
      category: "Visual",
      icon: "/react-fem-results-summary-component/images/icon-visual.svg",
      score: 72,
    },
  ];

  const average = Math.floor(
    data
      .filter((data) => data.score)
      .reduce((x, current) => x + current.score, 0) / data.length
  );

  return (
    <div className={clsx(styles.root, className)}>
      <div className={clsx(styles.results)}>
        <h1>Your Results</h1>
        <div>
          <span>{average}</span>
          <span>of 100</span>
        </div>
        <div>
          <h1>Great!</h1>
          <p>
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>
      <div className={clsx(styles.summary)}>
        <h1>Summary</h1>
        <SummaryItem data={data} />
        <button type="button">Continue</button>
      </div>
    </div>
  );
}
