import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Countdown(props) {

  const sysDate = new Date();
  const givenDate = new Date(props.countDownStyle.eventDate);
  const diff = Math.floor(givenDate.getTime() - sysDate.getTime()) 
  const sec = Math.floor((diff/1000)%60)
  const min = Math.floor((diff/(1000*60))%60)
  const hr = Math.floor((diff/(1000*60*60))%24)
  const day = Math.floor((diff/(1000*60*60*24))%30)
  const month = Math.floor((diff/(1000*60*60*24*30))%12)
  const year = Math.floor(diff/(1000*60*60*24*30*12))
  const {initialYear = year, initialMonth = month, initialDays =  day, initialHours = hr, initialMinute = min, initialSeconds = sec} = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [hours, setHours] = useState(initialHours);
  const [days, setDays] = useState(initialDays);
  const [months, setMonths] = useState(initialMonth);
  const [years, setYears] = useState(initialYear);

  useEffect(() => {
    console.log('date', (givenDate.getTime() - sysDate.getTime()) / (1000 * 3600 * 24))
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              if(months === 0){
                if(years === 0){
                  clearInterval(myInterval)
                }else{
                  setYears(years-1);
                  setMonths(11);
                }
              }else{
                setMonths(months-1);
                setDays(29);
              }
            }else {
              setDays(days - 1);
              setHours(23);
            }
          }
          else {
            setHours(hours - 1);
            setMinutes(59);
          }

        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {console.log('propssssssssssss', props)
      }
      {props.countDownStyle ? 
        <div style={{ paddingTop: '20px', paddingBottom: '20px', background: props.countDownStyle.background ? props.countDownStyle.background : 'cornflowerblue', borderRadius: props.countDownStyle.borderradius ? props.countDownStyle.borderradius : '15px' }}>
          <h1 style={{ color: props.countDownStyle.textStyle.headercolor ? props.countDownStyle.textStyle.headercolor : 'darkblue', fontSize: props.countDownStyle.textStyle.headerSize ? props.countDownStyle.textStyle.headerSize : '20px', fontFamily: props.countDownStyle.textStyle.fontFamily ? props.countDownStyle.textStyle.fontFamily : 'serif' }}>{props.countDownStyle.eventName} Countdown</h1>
          {(diff>0) ?
            <div> 
              {props.countDownStyle.count ? 
              <>
              {props.countDownStyle.count.y ? <div> {years<10 ? `0${years}` : years} </div> : null}
              {props.countDownStyle.count.m ? <div>{ months<10 ? `0${months}` : months}</div> : null}
              {props.countDownStyle.count.d ? <div>{days < 10 ? `0${days}` : days}</div> : null}
              {props.countDownStyle.count.h ? <div>{hours < 10 ? `0${hours}` : hours}</div> : null}
              {props.countDownStyle.count.min ? <div>{minutes < 10 ? `0${minutes}` : minutes}</div> : null}
              {props.countDownStyle.count.s ? <div>{seconds < 10 ? `0${seconds}` : seconds}</div> : null}
              </>
              :
              <div>
              { years<10 ? `0${years}` : years}:{ months<10 ? `0${months}` : months}:{days < 10 ? `0${days}` : days}:{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </div>}
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