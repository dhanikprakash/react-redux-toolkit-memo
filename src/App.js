import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from './counter/counterSlice';
import { DisplayManager } from './DisplayManager';


export default function App() {
  const initialCount = useSelector(selectCount);
  return (
    <>
    <DisplayManager    data={initialCount}                 />
    </>
  );
}
