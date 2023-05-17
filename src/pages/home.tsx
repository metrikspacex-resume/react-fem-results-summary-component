import clsx from "clsx";
import type { HTMLAttributes } from "react";

import ResultsSummary from "../components/result-summary/results-summary";
import styles from "./home.module.scss";

export type HomeProps = HTMLAttributes<HTMLElement>;
export default function Home() {
  return (
    <main className={clsx(styles.root)}>
      <ResultsSummary />
    </main>
  );
}
