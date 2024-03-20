import { FunctionComponent } from "react";
import styles from "./Component.module.css";

const Component: FunctionComponent = () => {
  return (
    <section className={styles.component1}>
      <div className={styles.carausole}>
        <div className={styles.carausoleChild} />
        <div className={styles.carausoleItem} />
        <div className={styles.carausoleInner} />
        <img
          className={styles.screenshot11644}
          loading="lazy"
          alt=""
          src="/screenshot-1164-4@2x.png"
        />
        <img
          className={styles.screenshot11671}
          loading="lazy"
          alt=""
          src="/screenshot-1167-1@2x.png"
        />
        <img
          className={styles.screenshot11681}
          loading="lazy"
          alt=""
          src="/screenshot-1168-1@2x.png"
        />
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <h3 className={styles.contactLabel}>{`<`}</h3>
      </div>
      <div className={styles.component1Child} />
      <div className={styles.wrapper}>
        <h3 className={styles.h3}>{`>`}</h3>
      </div>
    </section>
  );
};

export default Component;
