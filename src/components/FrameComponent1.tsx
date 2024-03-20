import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <nav className={styles.installButtonParent}>
        <div className={styles.installButton}>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.installButton1}>
          <div className={styles.library}>Library</div>
        </div>
        <div className={styles.installButton2}>
          <div className={styles.login}>Login</div>
        </div>
        <div className={styles.helpIcon}>
          <div className={styles.helpIconChild} />
          <div className={styles.install}>Install</div>
        </div>
      </nav>
    </div>
  );
};

export default FrameComponent1;
