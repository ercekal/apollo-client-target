import React, { useState } from 'react'
import './TextInput.scss'

interface TextInputProps {
  value: string
  label: string
  type: 'fname' | 'lname'
  onSave: (text: string, type: 'fname' | 'lname') => any
}

const TextInput = ({ value, onSave, label, type }: TextInputProps) => {
  const [text, setText] = useState<string>(value)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSave(text, type)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>{label}</label>
      <input
        className={`textInput${value !== text ? '--changed' : ''}`}
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        />
      <input type='submit' value='Submit' />
    </form>

  )
}

export default TextInput