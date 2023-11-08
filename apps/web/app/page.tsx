import { Card } from "ui";
import { dateFormat } from "@monorepo/dayjs";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      {dateFormat(new Date(), "YYYY年MM月DD日 dddd")}
      <Card href="" title="hogehgoe">
        example
      </Card>
    </main>
  );
}
