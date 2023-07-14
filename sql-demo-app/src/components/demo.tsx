import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Demo: React.FC = () => {
  const [state, setState] = useState<string>('');

  useEffect(() => {
    axios.get('/api/hello')
      .then(res => setState(res.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      Demo
      <p>{state}</p>
    </div>
  );
};

export default Demo;
