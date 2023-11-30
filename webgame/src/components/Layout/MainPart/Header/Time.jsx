import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';

const Time = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);



  return (
    <div >
      <Clock  className='clock' value={value} />
    </div>
  )
}

export default Time
