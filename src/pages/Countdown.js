import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// function CountdownPage(props) {
//   const sysDate = new Date();
//   const givenDate = new Date('12/12/2020');
//   const diff = (givenDate.getTime()- sysDate.getTime()) 
//   const dateDiff =Math.floor(diff/(1000 * 3600 * 24))
//   const timeDiff = dateDiff%10
  
//   const {initialDays= dateDiff, initialHours=0, initialMinute = 1,initialSeconds = 2} = props;
//   const [ minutes, setMinutes ] = useState(initialMinute);
//   const [seconds, setSeconds ] =  useState(initialSeconds);
//   const [hours, setHours ] =  useState(initialHours);
//   const [days, setDays ] =  useState(initialDays); 
 
//   useEffect(()=>{
//     console.log('date',(givenDate.getTime()- sysDate.getTime()))
//     console.log('diff',timeDiff);
    
//   let myInterval = setInterval(() => {
//           if (seconds > 0) {
//               setSeconds(seconds - 1);
//           }
//           if (seconds === 0) {
//               if (minutes === 0) {
//                 if(hours === 0){
//                   if(days === 0){
//                     clearInterval(myInterval)
//                   }
//                   else{
//                     setDays(days-1);
//                     setHours(23);
//                   }
//                 }
//                 else{
//                   setHours(hours-1);
//                   setMinutes(59);
//                 }
                  
//               } else {
//                   setMinutes(minutes - 1);
//                   setSeconds(59);
//               }
//           } 
//       }, 1000)
//       return ()=> {
//           clearInterval(myInterval);
//         };
//   });

//   return (
//       <div>
//       <h1> {days< 10 ?  `0${days}` : days}:{hours< 10 ?  `0${hours}` : hours}:{minutes< 10 ?  `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
      
//       </div>
//   )
// }
// const mapStateToProps = state => state;
// export default connect(mapStateToProps)(CountdownPage);

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

  // return (
  //   <div>
  //     {console.log('propssssssssssss', props)
  //     }
  //     {props.countDownStyle ? 
  //       <div style={{ paddingTop: '20px', paddingBottom: '20px', background: props.countDownStyle.background ? props.countDownStyle.background : 'cornflowerblue', borderRadius: props.countDownStyle.borderradius ? props.countDownStyle.borderradius : '15px' }}>
  //         <h1 style={{ color: props.countDownStyle.textStyle.headercolor ? props.countDownStyle.textStyle.headercolor : 'darkblue', fontSize: props.countDownStyle.textStyle.headerSize ? props.countDownStyle.textStyle.headerSize : '20px', fontFamily: props.countDownStyle.textStyle.fontFamily ? props.countDownStyle.textStyle.fontFamily : 'serif' }}>{props.countDownStyle.eventName} Countdown</h1>
  //         {(diff>0) ?
  //           <div> 
  //             {props.countDownStyle.count ? 
  //           <div className="countdown-wrapper">

  //             {props.countDownStyle.count.y ? <div className="countdown-item"> {years<10 ? `0${years}` : years} <span>Years</span> </div> : null}
  //             {props.countDownStyle.count.m ? <div className="countdown-item">{ months<10 ? `0${months}` : months}<span>Months</span></div> : null}
  //             {props.countDownStyle.count.d ? <div className="countdown-item">{days < 10 ? `0${days}` : days}<span>Days</span></div> : null}
  //             {props.countDownStyle.count.h ? <div className="countdown-item">{hours < 10 ? `0${hours}` : hours}<span>Hours</span></div> : null}
  //             {props.countDownStyle.count.min ? <div className="countdown-item">{minutes < 10 ? `0${minutes}` : minutes}<span>minutes</span></div> : null}
  //             {props.countDownStyle.count.s ? <div className="countdown-item">{seconds < 10 ? `0${seconds}` : seconds}<span>Seconds</span></div> : null}
  //             </div>
  //             :
  //             <div>
  //             { years<10 ? `0${years}` : years}:{ months<10 ? `0${months}` : months}:{days < 10 ? `0${days}` : days}:{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
  //             </div>}





  
  return (
    <div>    
      {props.countDownStyle ?
        <div style={{ paddingTop: '20px', paddingBottom: '20px', background: props.countDownStyle.background ? props.countDownStyle.background : 'cornflowerblue', borderRadius: props.countDownStyle.borderradius ? props.countDownStyle.borderradius : '15px' }}>
          <h1 style={{ color: props.countDownStyle.textStyle.headercolor ? props.countDownStyle.textStyle.headercolor : 'darkblue', fontSize: props.countDownStyle.textStyle.headerSize ? props.countDownStyle.textStyle.headerSize : '20px', fontFamily: props.countDownStyle.textStyle.fontFamily ? props.countDownStyle.textStyle.fontFamily : 'serif' }}>{props.countDownStyle.eventName} Countdown</h1>
          {(diff > 0) ?
            <div className="countdown-wrapper">
              {years ? <div><div className={'countdown-item'+' '+animeClassY}> {years < 10 ? `0${years}` : years}</div> <span>Years</span></div> : null}
              {months ? <div><div className={'countdown-item'+' '+animeClassM}>{months < 10 ? `0${months}` : months}</div><span>Months</span></div> : years ? <div><div className={'countdown-item'+' '+animeClassM}>{`0${months}`}</div><span>Months</span></div> : null}
              {days ? <div><div className={'countdown-item'+' '+animeClassD}>{days < 10 ? `0${days}` : days}</div><span>Days</span></div> : (years || months) ? <div><div className={'countdown-item'+' '+animeClassD}>{`0${days}`}</div><span>Days</span></div> : null}
              {hours ? <div><div className={'countdown-item'+' '+animeClassH}>{hours < 10 ? `0${hours}` : hours}</div><span>Hours</span></div> : (years || months || days) ? <div><div className={'countdown-item'+' '+animeClassH}>{`0${hours}`}</div><span>Hours</span></div> : null}
              {minutes ?<div><div className={'countdown-item'+' '+animeClassMin}>{minutes < 10 ? `0${minutes}` : minutes}</div><span>Minutes</span></div> : (years || months || days || hours) ? <div><div className={'countdown-item'+' '+animeClassMin}>{`0${minutes}`}</div><span>Minutes</span></div> : null}
              {seconds ? <div><div className={'countdown-item'+' '+animeClassS}>{seconds < 10 ? `0${seconds}` : seconds}</div><span>Seconds</span></div> : (years || months || days || hours || minutes) ? <div><div className={'countdown-item'+' '+animeClassS}>{`0${seconds}`}</div><span>Seconds</span></div> : null}
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
