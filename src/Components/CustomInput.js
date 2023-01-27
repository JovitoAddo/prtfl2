import { useField } from 'formik'
import React from 'react'

const CustomInput = ({label,...props}) => {

    const {field, meta} = useField(props)
    console.log('field', field)
    console.log("meta", meta)

  return (
    <div>
        <label>{label}</label>
        <input {...field} {...props}/>
    </div>
  )
}

export default CustomInput