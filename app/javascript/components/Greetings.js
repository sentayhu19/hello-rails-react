import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDataAPI from '../redux/reactrails/greetings';
const Greetings = () =>  {
  const { greetings, loading } = useSelector((state) => state.greetingReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAPI());
  }, []);
  if (loading===true && greetings=== null) {
    return <div>LOADING...</div>
  }
  else if (loading===false) {
    var array = Object.keys(greetings)
    .map(function(key) {
        return greetings[key];
    });
    return (<div>
      <button>Get Greeting</button>
      {array[1]}
      </div>)
  }
    // const x = greetings.map((greeting) => {
    //   return <div key={greeting.id}>{greeting.content}</div>;
    // }).reverse();
    // return(
    //   <>
    //   <h1>GREETINGS</h1>
    
    //   <button>Get Greeting</button>
    //  {x}       
    
      // </>
    // )
  }


export default Greetings
