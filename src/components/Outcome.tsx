import React from 'react'

interface OutcomeProps {
  inputText: string
}

const Outcome = ({ inputText }: OutcomeProps) => {
  return (
    <div>
      {inputText}
    </div>
  )
}

export default Outcome