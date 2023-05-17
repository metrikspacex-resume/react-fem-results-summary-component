import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./home.module.scss";

export type HomeProps = HTMLAttributes<HTMLElement>;
export default function Home() {
  return <main className={clsx(styles.root)}></main>;
}
