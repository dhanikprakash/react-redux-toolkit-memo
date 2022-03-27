import React , { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux';
import DisplayCounter from './DisplayCounter';
import DisplayStatus from './DisplayStatus';
import { increment, incrementAsync, incrementByAmount } from './counter/counterSlice';

export const styles = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};


export const  DisplayManager = (({data}) => {
    console.log('Display manager');
    const { counter, status} = data;

    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
  
    const incrementValue = Number(incrementAmount) || 0;
  
     const memorisedStatus  = useMemo(() => (status), [status]);
  
    const memorisedCounter = useMemo(() => (counter), [counter]);


  return (
    <div>
    <div className={styles.row}>
       <DisplayStatus status={memorisedStatus} />
     </div>
     <div className={styles.row}>
       <DisplayCounter counter={memorisedCounter} />
     </div>
     <div className={styles.row}>
       <input
         className={styles.textbox}
         aria-label="Set increment amount"
         value={incrementAmount}
         onChange={(e) => setIncrementAmount(e.target.value)}
       />
       <button
         className={styles.button}
         onClick={() => dispatch(incrementByAmount(incrementValue))}
       >
         Add Amount
       </button>
       <button
         className={styles.asyncButton}
         onClick={() => dispatch(incrementAsync(incrementValue))}
       >
         Add Async
       </button>
     </div>
   </div>
  )
}
);
