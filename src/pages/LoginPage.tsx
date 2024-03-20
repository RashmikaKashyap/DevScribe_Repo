import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import InstallButton from "../components/InstallButton";
import Component from "../components/Component";
import FrameComponent from "../components/FrameComponent";
import styles from "./LoginPage.module.css";

const LoginPage: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <section className={styles.desktopInner}>
        <div className={styles.frameParent}>
          <FrameComponent1 />
          <div className={styles.frameGroup}>
            <div className={styles.aboutWrapper}>
              <div className={styles.about} />
            </div>
            <h1 className={styles.devscribe}>DevScribe</h1>
          </div>
          <div className={styles.codeYourWayAroundWrapper}>
            <div className={styles.codeYourWay}>“Code your way around...”</div>
          </div>
          <InstallButton />
        </div>
      </section>
      <section className={styles.extensionButton}>
        <div className={styles.toInstallOurChromeExtensioParent}>
          <div className={styles.toInstallOur}>
            To install our chrome extension click on the button below.
          </div>
          <div className={styles.callToActionLabel}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.installChromeExtension}>
                Install Chrome Extension
              </div>
            </div>
          </div>
        </div>
      </section>
      <Component />
      <FrameComponent />
    </div>
  );
};

export default LoginPage;
