import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { GetConfigurationAction } from './../actions/GetConfigurationAction';


function Dashboard(props) {
  const [count, setCount] = useState(6);
  const [loading, loadingfunc] = useState(true);
  // const count=0;

  useEffect(() => {
    console.log('hjgyjhgui jhgyg jhggu jyguy', props);
    props.dispatch(GetConfigurationAction((res) => {
      console.log('config response', res)
    }))
  }, []);

//   var click = () => {
//     props.dispatch(GetConfigurationAction((res) => {
//       console.log('config response', res)
//       loadingfunc(false)
//       console.log('sayanljj')
//     }))


//   }

  return (
    <div className="App">
      <div>
        {loading &&
          <p>Sayan</p>}
        <button onClick={() => [setCount(count + 1), loadingfunc(true)]}>
          Count
      </button>
      </div>
    </div>
  );
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Dashboard);

