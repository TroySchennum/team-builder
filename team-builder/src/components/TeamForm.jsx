import React from 'react'

export default function TeamForm(props) {
 
  const {
    values,
    onInputChange,
    onSubmit,
  } = props

  return (
    
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Team Member</h2>
        <button>submit</button>
      </div>

      <div className='form-group inputs'>
        <h4>Enter information</h4>

        
        <label>Name:&nbsp;
          <input
            type='text'
            placeholder='Type your name'
            maxLength='20'
            name='name'
            value={values.name}
            onChange={onInputChange}
          />
        </label>
          

        <label>Email:&nbsp;
          <input
            type='text'
            placeholder='Type email'
            maxLength='20'
            name='email'
            value={values.email}
            onChange={onInputChange}
          />
        </label>

        
        <label>Role:&nbsp;
          <select name='role' value={values.role} onChange={onInputChange}>
              <option value='' >Select a Role</option>
              <option value='backend engineer'>backend engineer</option>
              <option value='frontend engineer'>frontend engineer</option>
              <option value='designer'>designer</option>
              <option value='product manager'>product manager</option>
          </select>
        </label>
      </div>
    </form>
  )
}
