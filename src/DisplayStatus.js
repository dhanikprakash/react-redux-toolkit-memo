import React, { memo } from 'react'

const DisplayStatus = memo( ({status}) => {
    console.log('display status');
    const { currentStats } = status;
  return (
    <div>displayStatus:{currentStats}</div>
  )
}
);

export default DisplayStatus