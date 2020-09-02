import React from 'react'

interface OutcomeProps {
  inputText: string
}

const Outcome = ({ inputText }: OutcomeProps) => {
  console.log('inputText: ', inputText);
  console.log('type: ', typeof inputText);
  return (
    <div>
      {inputText}
    </div>
  )
}

export default Outcome