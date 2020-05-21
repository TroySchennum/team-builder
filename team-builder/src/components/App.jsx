import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Team from './Team'
import TeamForm from './TeamForm'


const initialTeamList = [
  {
    id: uuid(),
    name: 'John',
    email: 'John@John.com',
    role: 'designer',
  },
]


const initialFormValues = {
  name: '',
  email: '',
  
  role: '',
}
  

export default function App() {
  const [team, setTeam] = useState(initialTeamList)

  
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    
    const { name } = evt.target
    
    const { value } = evt.target
    
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = evt => {
    
    evt.preventDefault()
    
    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ) {
      return
    }
    
    const newTeamMember = { ...formValues, id: uuid() }

    setTeam([ newTeamMember, ...team ])
   
    setFormValues(initialFormValues)
  }

  return (
    <div className='container'>
      <header><h1>Team Member App</h1></header>

      <TeamForm
        
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      {
        team.map(team => {
          return (
            <Team key={team.id} details={team} />
          )
        })
      }
    </div>
  )
}
