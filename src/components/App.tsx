import React from 'react';
import { useQuery } from '@apollo/client'
import './App.css';
import TextInput from './TextInput'
import Outcome from './Outcome'
import { GET_INPUT } from '../operations/queries'
import updateInput from '../operations/mutations'

function App() {
  const { data } = useQuery(GET_INPUT);
  console.log('data: ', data);

  return (
    <div className="App">
      <TextInput onSave={updateInput} value={data.firstName} label='First name' type='fname' />
      <TextInput onSave={updateInput} value={data.lastName} label='Last name' type='lname' />
      <Outcome firstName={data.firstName} label='First name' />
      <Outcome firstName={data.lastName} label='Last name' />
    </div>
  );
}

export default App;
