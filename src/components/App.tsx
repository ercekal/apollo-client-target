import React from 'react';
import { useQuery } from '@apollo/client'
import './App.css';
import TextInput from './TextInput'
import Outcome from './Outcome'
import { GET_INPUT } from '../operations/queries'
import updateInput from '../operations/mutations'

function App() {
  const { data } = useQuery(GET_INPUT);

  return (
    <div className="App">
      <TextInput onSave={updateInput} inputText={data.inputText}/>
      <Outcome inputText={data.inputText}/>
    </div>
  );
}

export default App;
