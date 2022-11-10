import React from 'react'
import FormHeader from '../FormHeader/FormHeader'
import classes from './Form.module.css'

const First = () => {
  return (
    <>
    <FormHeader/>
        <form className={classes.form}>

            <fieldset className={classes.field}>
            <div className={classes.section}>
                <label htmlFor='nation'>Nation</label>
                <input type='text' id='nation'/>
            </div>

            <div className={classes.section}>
                <label htmlFor='region'>Region</label>
                <input type='text' id='region'/>
            </div>

            <div className={classes.section}>
                <label htmlFor='district'>District</label>
                <input type='text' id='district'/>
            </div>

            <div className={classes.section}>
                <label htmlFor='facility'>Facility</label>
                <input type='text' id='facility'/>
            </div>
            </fieldset>

           
           <fieldset className={classes.field}>
            <legend className={classes.legend}>Primary Storage</legend>
            <div className={classes.section}>
                <label htmlFor='storageInUse'>Gigabytes of storage in use</label>
                <input type='text' id='storageInUse'/>
    </div>

    <div className={classes.section}>
                <label htmlFor='storageInUse'>Gigabytes of storage free</label>
                <input type='text' id='storageInUse'/>
    </div>
            </fieldset>

            
            <fieldset className={classes.field}>
            <legend className={classes.legend}>Archived Storage</legend>
            <div className={classes.section}>
                <label htmlFor='storageInUse'>Gigabytes of storage in use</label>
                <input type='text' id='storageInUse'/>
    </div>

    <div className={classes.section}>
                <label htmlFor='storageInUse'>Gigabytes of storage free</label>
                <input type='text' id='storageInUse'/>
    </div>
            </fieldset>
         

        </form>
    </>
  )
}

export default First