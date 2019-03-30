import React, {useEffect} from 'react'
import {useState} from "react";

export default function Hello() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(() => {
    console.log('b is changed to: ', b)
  }, [b])

  return (
    <div>
      <button onClick={() => setA(a + 1)}>Increase A (now: {a})</button>
      <button onClick={() => setB(Math.min(b + 1, 5))}>Increase B (now: {b})</button>
    </div>
  );
}
