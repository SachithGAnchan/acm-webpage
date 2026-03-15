import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import styles from "./VantaRings.module.css";

const VantaRings = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;
    if (!vantaRef.current) return;

    vantaEffect = NET({
      el: vantaRef.current,
      THREE,
      color: 0xaa44ff,          // purple nodes/lines
      backgroundColor: 0x3d0070, // deep violet background
      points: 9.0,
      maxDistance: 22.0,
      spacing: 18.0,
      showDots: true,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} style={{ height: "100vh", width: "100%", position: "relative" }}>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}>
          Association for<br />
          Computing<br />
          Machinery
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
