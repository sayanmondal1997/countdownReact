import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


function Countdown(props) {

  const animationClass = 'animate__animated animate__'
  const animationStyle = animationClass + props.countDownStyle.animationClass+ ' ' + 'animate__faster'
  const sysDate = new Date();
  const givenDate = new Date(props.countDownStyle.eventDate);
  const diff = Math.floor(givenDate.getTime() - sysDate.getTime())
  const sec = Math.floor((diff / 1000) % 60)
  const min = Math.floor((diff / (1000 * 60)) % 60)
  const hr = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const day = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30)
  const month = Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12)
  const year = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12))
  const { initialYear = year, initialMonth = month, initialDays = day, initialHours = hr, initialMinute = min, initialSeconds = sec } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [hours, setHours] = useState(initialHours);
  const [days, setDays] = useState(initialDays);
  const [months, setMonths] = useState(initialMonth);
  const [years, setYears] = useState(initialYear);
  const [animeClassY, makeAnimeClassY] = useState(animationStyle)
  const [animeClassM, makeAnimeClassM] = useState(animationStyle)
  const [animeClassD, makeAnimeClassD] = useState(animationStyle)
  const [animeClassH, makeAnimeClassH] = useState(animationStyle)
  const [animeClassMin, makeAnimeClassMin] = useState(animationStyle)
  const [animeClassS, makeAnimeClassS] = useState(animationStyle)
  const setTimeAnimation = (y, m, d, h, min, s) =>  {
    y==0 ? makeAnimeClassY(''): makeAnimeClassY(animationStyle);
    m==0 ? makeAnimeClassM(''): makeAnimeClassM(animationStyle);
    d==0 ? makeAnimeClassD(''): makeAnimeClassD(animationStyle);
    h==0 ? makeAnimeClassH(''): makeAnimeClassH(animationStyle);
    min==0 ? makeAnimeClassMin(''): makeAnimeClassMin(animationStyle);
    s==0 ? makeAnimeClassS(''): makeAnimeClassS(animationStyle);
  }
  useEffect(() => {
    // console.log('date', (givenDate.getTime() - sysDate.getTime()) / (1000 * 3600 * 24))
    let myInterval = setInterval(() => {
      // setSeconds(seconds-1);

      if (seconds > 0) {
        setSeconds(seconds - 1);
        
        setTimeAnimation(0, 0, 0, 0, 0, 1);
        setTimeout(() => {
          makeAnimeClassS('');
        }, 500);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              if (months === 0) {
                if (years === 0) {
                  clearInterval(myInterval)
                } else {
                  setYears(years - 1);
                  setMonths(11);
                  setTimeAnimation(1, 1, 0, 0, 0, 0);
                }
              } else {
                setMonths(months - 1);
                setDays(29);
                setTimeAnimation(0, 1, 1, 0, 0, 1);
              }
            } else {
              setDays(days - 1);
              setHours(23);
              setTimeAnimation(0, 0, 1, 1, 0, 0);
            }
          }
          else {
            setHours(hours - 1);
            setMinutes(59);
            setTimeAnimation(0, 0, 0, 1, 1, 0);
          }

        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
          setTimeAnimation(0, 0, 0, 0, 1, 1);
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  });
  
  return (
    <div>
      {/* {console.log('propssssssssssss', animeClassS) */}
      
      {props.countDownStyle ?
        <div style={{ paddingTop: '20px', paddingBottom: '20px', background: props.countDownStyle.background ? props.countDownStyle.background : 'cornflowerblue', borderRadius: props.countDownStyle.borderradius ? props.countDownStyle.borderradius : '15px' }}>
          <h1 style={{ color: props.countDownStyle.textStyle.headercolor ? props.countDownStyle.textStyle.headercolor : 'darkblue', fontSize: props.countDownStyle.textStyle.headerSize ? props.countDownStyle.textStyle.headerSize : '20px', fontFamily: props.countDownStyle.textStyle.fontFamily ? props.countDownStyle.textStyle.fontFamily : 'serif' }}>{props.countDownStyle.eventName} Countdown</h1>
          {(diff > 0) ?
            <div>
              {years ? <div className={animeClassY}> {years < 10 ? `0${years}` : years} </div> : null}
              {months ? <div className={animeClassM}>{months < 10 ? `0${months}` : months}</div> : years ? <div className={animeClassM}>{`0${months}`}</div> : null}
              {days ? <div className={animeClassD}>{days < 10 ? `0${days}` : days}</div> : (years || months) ? <div className={animeClassD}>{`0${days}`}</div> : null}
              {hours ? <div className={animeClassH}>{hours < 10 ? `0${hours}` : hours}</div> : (years || months || days) ? <div className={animeClassH}>{`0${hours}`}</div> : null}
              {minutes ? <div className={animeClassMin}>{minutes < 10 ? `0${minutes}` : minutes}</div> : (years || months || days || hours) ? <div className={animeClassMin}>{`0${minutes}`}</div> : null}
              {seconds ? <div className={animeClassS}>{seconds < 10 ? `0${seconds}` : seconds}</div> : (years || months || days || hours || minutes) ? <div className={animeClassS}>{`0${seconds}`}</div> : null}
            </div>
            :
            <span style={{ color: props.countDownStyle.textStyle.timeleftColor ? props.countDownStyle.textStyle.timeleftColor : 'darkred', fontSize: props.countDownStyle.textStyle.timeleftSize ? props.countDownStyle.textStyle.timeleftSize : '30px', fontFamily: props.countDownStyle.textStyle.fontFamily ? props.countDownStyle.textStyle.fontFamily : 'serif' }}>Time's up!</span>
          }
        </div>
        :
        <></>
      }

    </div>
  )
}


const mapStateToProps = state => state;
export default connect(mapStateToProps)(Countdown);