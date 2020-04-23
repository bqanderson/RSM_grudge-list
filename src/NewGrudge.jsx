import React, { useState, useContext } from 'react'
import { GrudgeContext } from './GrudgeContext'

const NewGrudge = React.memo(() => {
  const [person, setPerson] = useState('')
  const [reason, setReason] = useState('')

  const { addGrudge } = useContext(GrudgeContext)

  const handleChange = e => {
    e.preventDefault()
    addGrudge({ person, reason })
    setPerson('')
    setReason('')
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
