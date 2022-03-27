import React , { memo } from 'react'

const  DisplayCounter= memo(({counter}) => {
    console.log('display counter');
    const { counterValue } = counter;
  return (
    <div>displayCounter {counterValue}</div>
  )
});

export default DisplayCounter