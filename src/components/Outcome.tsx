import React from 'react'

interface OutcomeProps {
  firstName: string
  label: string
}

const Outcome = ({ firstName, label }: OutcomeProps) => {
  return (
    <div>
      {label}: {firstName}
    </div>
  )
}

export default Outcome