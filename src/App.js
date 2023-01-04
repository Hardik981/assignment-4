import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={()=>setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </button>
      <h1>{show ? 'Hi' : ''}</h1>
    </div>
  );
}
