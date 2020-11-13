import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Countdown from 'react-countdown';

function CountdownPage(props) {
  const sysDate = new Date();
  const givenDate = new Date('12/12/2020');
  const diff =Math.floor((givenDate.getTime()- sysDate.getTime())/(1000 * 3600 * 24))
  const {initialDays= diff, initialHours=0, initialMinute = 1,initialSeconds = 2} = props;
  const [ minutes, setMinutes ] = useState(initialMinute);
  const [seconds, setSeconds ] =  useState(initialSeconds);
  const [hours, setHours ] =  useState(initialHours);
  const [days, setDays ] =  useState(initialDays); 
 
  useEffect(()=>{
    console.log('date',(givenDate.getTime()- sysDate.getTime())/(1000 * 3600 * 24))
  let myInterval = setInterval(() => {
          if (seconds > 0) {
              setSeconds(seconds - 1);
          }
          if (seconds === 0) {
              if (minutes === 0) {
                if(hours === 0){
                  if(days === 0){
                    clearInterval(myInterval)
                  }
                  else{
                    setDays(days-1);
                    setHours(23);
                  }
                }
                else{
                  setHours(hours-1);
                  setMinutes(59);
                }
                  
              } else {
                  setMinutes(minutes - 1);
                  setSeconds(59);
              }
          } 
      }, 1000)
      return ()=> {
          clearInterval(myInterval);
        };
  });

  return (
      <div>
        <Countdown date={Date.now() + 50000}></Countdown>
      { <h1> {days< 10 ?  `0${days}` : days}:{hours< 10 ?  `0${hours}` : hours}:{minutes< 10 ?  `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
      }
      </div>
  )
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(CountdownPage);

