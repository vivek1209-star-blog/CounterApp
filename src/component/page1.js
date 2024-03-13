import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Page1 = ({ counter, handleIncrement }) => {
  const navigate = useNavigate();

  const incrementAndNavigate = () => {
    handleIncrement(); 
  };

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={incrementAndNavigate}>Increment</button>
      <button onClick={() => navigate(`/page2/${counter}`)}>Go to Page2</button>
    </>
  );
};
