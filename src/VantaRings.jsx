import React from "react";
import Lightning from "./components/ui/Lightning";
import styles from "./VantaRings.module.css";
const VantaRings = () => {
  return (
    <div style={{ position:"relative", height:"100vh", width:"100%", backgroundColor:"#000", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%" }}>
        <Lightning hue={260} xOffset={0} speed={1} intensity={1} size={1} />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}>
          Association for<br />Computing<br />Machinery
        </h1>
        <p className={styles.description}>
          NMAMIT's premier computing community.<br />
          Realizing Ideas, Inspiring the next.
        </p>
      </div>
    </div>
  );
};
export default VantaRings;
