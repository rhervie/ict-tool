import React from 'react'
import FormHeader from '../FormHeader/FormHeader'
import classes from './Form.module.css'
import { useRouter } from 'next/router'

const Third = () => {
    const router = useRouter()
  return (
    <div>
          <FormHeader />

          <form className={classes.form}>
         
          <fieldset className={classes.field}>
                    <legend className={classes.legend}>Telephony</legend>
                    <div className={classes.section}>
                        <label htmlFor='nation'>Total number of handsets</label>
                        <input type='text' id='nation' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='region'>Number of handsets currently in use</label>
                        <input type='text' id='region' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='district'>Number of PSTN trunks currently provisioned (lines)</label>
                        <input type='text' id='district' />
                    </div>

                </fieldset>

                <fieldset className={classes.field}>
                    <legend className={classes.legend}>Networking (WAN)</legend>
                    <div className={classes.section}>
                        <label htmlFor='nation'>Total number of WAN links</label>
                        <input type='text' id='nation' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='region'>Number of WAN links exceeding 80% utilization</label>
                        <input type='text' id='region' />
                    </div>
                </fieldset>

               <div className={classes.submitContainer}>
               <div> <button onClick={() => router.back()}> Previous </button></div>
               <div> <button  onClick={()=>router.push('/forms/third')}> Submit </button></div>
               </div>
          </form>
    </div>
  )
}

export default Third