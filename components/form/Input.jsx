import React from 'react'

const Input = (props) => {
  const {touched,errorMessage,type,placeholder,...inputProps} = props;

  return (
    <div className='w-full'>
        <label className='relative block'>
            <input type={type} className={`h-14 w-full border px-4 outline-none 
            ${touched && errorMessage ? "border-red-600" : "border-primary"}
             `}required {...inputProps} placeholder={placeholder}
            />
        </label>
        {touched &&<span className='text-xs text-red-600'>{errorMessage}</span>}
    </div>
  )
}

export default Input