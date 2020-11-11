import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { GetConfigurationAction } from './../actions/GetConfigurationAction';
import { useHistory } from "react-router-dom";

function Initial(props) {
  const [count, setCount] = useState(6);
  const [loading, loadingfunc] = useState(true);
  // const count=0;
  const history = useHistory();
//   const handleClick = () => history.push('/goodbye');
  useEffect(() => {
    props.dispatch(GetConfigurationAction((res) => {
      console.log('config response', res)
    }))
  }, []);

  var click = (props) => {
      console.log('jbjj',props);
      
    // props.dispatch(GetConfigurationAction((res) => {
    //   console.log('config response', res)
      loadingfunc(false)
      history.push(`/ldashboard`)
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
    </div>
  );
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Initial);

