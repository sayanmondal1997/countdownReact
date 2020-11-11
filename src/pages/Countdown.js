import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Countdown() {
  const calculateTimeLeft = () => {

    let year = new Date().getFullYear();
    const difference = +new Date(`10/01/${year}`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });


  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //     setYear(new Date().getFullYear());
  //   }, 1000);
  //   // Clear timeout if the component is unmounted
  //   return () => clearTimeout(timer);
  // });

  return (
    <div>
      <h1>HacktoberFest {year} Countdown</h1>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Countdown);

