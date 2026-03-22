import React, { useState } from 'react';

const App = () => {
  console.log('app rendering...')
  let [count, setCount] = useState(0);
  

  return (
    <div className= 'h-screen flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-5xl'>Count is {count} </h1>
      <button onClick={() => {
        
        // setCount(count + 1);
        // setCount(++count);
       setCount(prev => prev + 1);
       
      }} className='bg-blue-600 p-3 text-white rounded-md cursor-pointer'>Increment Count</button>
    </div>
  );
};

export default App;