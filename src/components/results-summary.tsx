import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./results-summary.module.scss";

export type ResultsSummaryProps = HTMLAttributes<HTMLDivElement>;
export default function ResultsSummary({ className }: ResultsSummaryProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={clsx(styles.results)}>
        <h1>Your Results</h1>
        <div></div>
        <div>
          <h1>Great!</h1>
          <p>You scored</p>
        </div>
      </div>
      <div className={clsx(styles.summary)}></div>
    </div>
  );
}
