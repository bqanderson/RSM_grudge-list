import React, { useState } from 'react'

const NewGrudge = React.memo(({ onSubmit }) => {
  const [person, setPerson] = useState('')
  const [reason, setReason] = useState('')

  console.log('Rendering New Grudge')

  const handleChange = e => {
    e.preventDefault()
    onSubmit({ person, reason })
  }

  return (
    <form className='NewGrudge' onSubmit={handleChange}>
      <input
        className='NewGrudge-input'
        placeholder='Person'
        type='text'
        value={person}
        onChange={e => setPerson(e.target.value)}
      />
      <input
        className='NewGrudge-input'
        placeholder='Reason'
        type='text'
        value={reason}
        onChange={e => setReason(e.target.value)}
      />
      <input className='NewGrudge-submit button' type='submit' />
    </form>
  )
})

export default NewGrudge
