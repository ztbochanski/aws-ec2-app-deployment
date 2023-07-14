import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { executeSQLCommand } from '../api';

const SQLCommand: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleExecute = () => {
    executeSQLCommand(query)
      .then((response) => {
        setResult(JSON.stringify(response.data));
      })
      .catch((error) => {
        setResult(`Error: ${error.message}`);
      });
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl placeholder="Enter SQL command" value={query} onChange={handleQueryChange} />
        <Button variant="primary" onClick={handleExecute}>Execute</Button>
      </InputGroup>
      {result && <pre>{result}</pre>}
    </div>
  );
};

export default SQLCommand;
