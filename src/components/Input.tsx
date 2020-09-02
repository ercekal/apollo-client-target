import React, { useState } from 'react'

interface InputProps {
  inputText: string
  onSave: (text: string) => any
}

const Input = ({ inputText, onSave }: InputProps) => {
  const [text, setText] = useState<string>(inputText)

  const handleSubmit = (e: any) => {
    if (e.which === 13) {
      onSave(text)
    }
  }
  return (
    <input
      type="text"
      autoFocus={true}
      value={text}
      onChange={e => setText(e.target.value)}
      onKeyDown={handleSubmit} />
  )
}

export default Input