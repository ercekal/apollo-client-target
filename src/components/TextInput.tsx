import React, { useState } from 'react'
import './TextInput.scss'

interface TextInputProps {
  inputText: string
  onSave: (text: string) => any
}

const TextInput = ({ inputText, onSave }: TextInputProps) => {
  const [text, setText] = useState<string>(inputText)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSave(text)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter name</label>
      <input
        className={`textInput${inputText !== text ? '--changed' : ''}`}
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        />
      <input type='submit' value='Submit' />
    </form>

  )
}

export default TextInput