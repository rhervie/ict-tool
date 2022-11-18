import React from 'react'
import classes from './FormHeader.module.css'

const FormHeader = () => {
  return (
    <div>
        <h4 className={classes.paragraph}>Populate the table below with information about your existing infrastructure. All white areas are editable. If you're only interested in looking at a particular infrastructure area, populate just those corresponding fields with your data. No matter what infrastructure component(s) you are evaluating, you must fill out the number of supported users to the right to get accurate results. When you're ready to move to the next step, click the arrow to the right.</h4>
    </div>
  )
}

export default FormHeader