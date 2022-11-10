import React from 'react'
import FormHeader from '../FormHeader/FormHeader'
import classes from './Form.module.css'

const Second = () => {
  return (
    <>
     <FormHeader/>
     <form className={classes.form}>
     <div className={classes.section}>
                <label htmlFor='storageInUse'>Gigabytes of storage in use</label>
                <input type='text' id='storageInUse'/>
    </div>
     </form>  
    </>
  )
}

export default Second