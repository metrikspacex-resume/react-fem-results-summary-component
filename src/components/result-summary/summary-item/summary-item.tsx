import clsx from "clsx";
import type { HTMLAttributes } from "react";

import type { Data } from "../../../types/Data";
import styles from "./summary-item.module.scss";

export type SummaryItemProps = {
  data: Data;
} & HTMLAttributes<HTMLDivElement>;
export default function SummaryItem({ className, data }: SummaryItemProps) {
  return (
    <>
      {data.map((item) => (
        <div
          className={clsx(
            styles.root,
            {
              [styles["grd-red"]]: item.category === "Reaction",
              [styles["grd-yellow"]]: item.category === "Memory",
              [styles["grd-green"]]: item.category === "Verbal",
              [styles["grd-blue"]]: item.category === "Visual",
            },
            className
          )}
          key={item.category}>
          <img
            alt=""
            src={item.icon}
          />
          <h1>{item.category}</h1>
          <h2>
            <span>{item.score}</span>
            <span> / 100</span>
          </h2>
        </div>
      ))}
    </>
  );
}
