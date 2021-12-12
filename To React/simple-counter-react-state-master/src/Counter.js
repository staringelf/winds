import React, { Component, useEffect, useState } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if (storage) return JSON.parse(storage).count;
  return { count: 0 }
}

const useLocalStorage = (initialState, key) => {

  const get = () =>{
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage).value;
    return initialState;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }))
  }, [value]);

  console.log(value);
  return [value, setValue];
}

const Counter = ({ step, max }) => {

  const [count, setCount] = useLocalStorage(0, 'count');

  const increment = () => {
    // if (count < max ) 
    setCount(count => count + step);
    console.log(count);
  }

  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  

  // useEffect (() =>{
  //   storeStateInLocalStorage(count);
  // }, [count]);

  useEffect (() => {
    document.title = `Simple Counter | ${count}`;
  }, [count]);
  
  
  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
}

export default Counter;
