import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { GetConfigurationAction } from './../actions/GetConfigurationAction';
import Countdown from './Countdown';
// import { useHistory } from "react-router-dom";

function Initial(props) {
  const [clicked, handleClick] = useState(false);
  const [count, setCount] = useState(6);
  const [loading, loadingfunc] = useState(true);
  // const count=0;
//   const history = useHistory();
//   const handleClick = () => history.push('/goodbye');
  useEffect(() => {
    props.dispatch(GetConfigurationAction((res) => {
      console.log('config response', res)
    }))
  }, []);

  var click = (props) => {
      console.log('jbjj',props);
      handleClick(true);
      
    // props.dispatch(GetConfigurationAction((res) => {
    //   console.log('config response', res)
      loadingfunc(false)
      // props.history.push(`/countdown`)
    //   console.log('sayanljj')
    // }))


  }

  return (
    <div className="App">
      <div>
        {loading &&
          <p>You clicked {count} times</p>}
        <button onClick={() => [setCount(count + 1), loadingfunc(true)]}>
          Count
      </button>
        <button onClick={() => click(props)}>
          Click me
      </button>
      </div>
      {clicked ? <Countdown  countDownStyle={{ eventName: 'Event', eventDate: '12/17/2020', background: 'yellow', textStyle: {headercolor: 'black', timeleftColor: 'black', headerSize: '20px', timeleftSize: '25px', fontFamily: 'fantasy'}, borderradius: '10px', animationClass: 'bounce'}} ></Countdown> : null}
    </div>
  );
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Initial);

