import React from 'react'

function TextField({label,name ,  value, onChange}) {
  return (
    <div>
    
      <div>
        <label className="mb-2 block" htmlFor={name}>
          {label}
        </label>
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="textField__input"
          type="text"
          autoComplete='off'
        />
      </div>
    
      </div>
  )
}

export default TextField