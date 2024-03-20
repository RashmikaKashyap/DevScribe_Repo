import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.desktopInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.aboutParent}>
            <div className={styles.about}>about</div>
            <div className={styles.teamOfFourRashmikavidushiWrapper}>
              <div className={styles.teamOfFourContainer}>
                <p className={styles.teamOfFour}>{`Team of four `}</p>
                <p className={styles.rashmikavidushi}>Rashmika,Vidushi,</p>
                <p className={styles.antaraanshu}>Antara,Anshu</p>
                <p className={styles.makingCodingFun}>
                  Making coding fun and speedy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact91076074Container}>
          <p className={styles.contact}>contact</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.p}>+91 076074 42157</p>
          <p className={styles.plotNos8}>
            Plot Nos 8, 11, TechZone 2, Greater Noida, Uttar Pradesh 201310,
            India
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
