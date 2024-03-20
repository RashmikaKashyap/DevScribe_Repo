import { FunctionComponent } from "react";
import styles from "./InstallButton.module.css";

const InstallButton: FunctionComponent = () => {
  return (
    <div className={styles.installExtension}>
      <div className={styles.chromeButton}>
        <div className={styles.chromeButtonInner}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.suggestingPerfectlySuitedContainer}>
              <span
                className={styles.suggestingPerfectlySuited}
              >{`Suggesting perfectly suited code suggestions `}</span>
              <span className={styles.accordingToThe}>
                according to the comments given by the user
              </span>
            </div>
          </div>
        </div>
        <div className={styles.librarySelection}>
          <img
            className={styles.librarySelectionChild}
            alt=""
            src="/rectangle-2.svg"
          />
          <div className={styles.haveTwoDifferentContainer}>
            <p
              className={styles.haveTwoDifferent}
            >{`Have two different set of libraries Private & Public`}</p>
          </div>
        </div>
        <div className={styles.chromeButtonChild}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.takingTheHelpContainer}>
              <span
                className={styles.takingTheHelp}
              >{`Taking the help of AI `}</span>
              <span className={styles.toSuggestCode}>
                to suggest code snippets when needed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallButton;
