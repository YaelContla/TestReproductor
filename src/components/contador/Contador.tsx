import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import styles from "./styles.module.css";

const Contador = () => {
  const endDate = moment("2024-12-01T00:00:00"); // Fecha de término

  const calculateTimeLeft = () => {
    const now = moment();
    const difference = endDate.diff(now);

    if (difference > 0) {
      const duration = moment.duration(difference);
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={styles.titleContainer}>
        <p>FALTAN</p>
      </div>
      <div className={styles.counterContainer}>
        <div className={styles.circle}>
          <p>{`${timeLeft.days}`}</p>
          <p>DÍAS</p>
        </div>
        <div className={styles.circle}>
          <p>{`${timeLeft.hours}`}</p>
          <p>HRS</p>
        </div>
        <div className={styles.circle}>
          <p>{`${timeLeft.minutes}`}</p>
          <p>MIN</p>
        </div>
        <div className={styles.circle}>
        <p>{`${timeLeft.seconds}`}</p>
          <p>SEG</p>
        </div>
      </div>
    </>
  );
};

export default Contador;
