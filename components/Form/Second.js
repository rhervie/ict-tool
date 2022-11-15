import React from 'react'
import FormHeader from '../FormHeader/FormHeader'
import classes from './Form.module.css'
import { useRouter } from 'next/router'


const Second = () => {
  const router =useRouter()
  return (
    <>
     <FormHeader/>
     <form className={classes.form}>

     <div className={classes.secondrow}>
                    <fieldset className={classes.field1}>
                        <legend className={classes.legend}>Memory Usage</legend>
                        <div className={classes.section1}>
                            <label htmlFor='storageInUse'>Percent of memory free (%)</label>
                            <input type='text' id='storageInUse' />
                        </div>

                        <div className={classes.section1}>
                            <label htmlFor='storageInUse'> Percent of swap free (%)</label>
                            <input type='text' id='storageInUse' />
                        </div>
                    </fieldset>


                    <fieldset className={classes.field1}>
                        <legend className={classes.legend}>Disk Usage (direct attached storage)</legend>
                        <div className={classes.section1}>
                            <label htmlFor='storageInUse'>Total disk size</label>
                            <input type='text' id='storageInUse' />
                        </div>

                        <div className={classes.section1}>
                            <label htmlFor='storageInUse'>Disk usage (%busy)</label>
                            <input type='text' id='storageInUse' />
                        </div>
                    </fieldset>

                </div>

                <div className={classes.thirdrow}>
                <fieldset className={classes.field}>
                <legend className={classes.legend}>Networking (LAN)</legend>
                    <div className={classes.section}>
                        <label htmlFor='PercentUserActivity'>Total number of data center switch ports</label>
                        <input type='text' id='PercentUserActivity' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='devotedToSystem'>Number of data center switch ports in use</label>
                        <input type='text' id='devotedToSystem' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='devotedToWait'>Total number of edge/end-user device switch ports</label>
                        <input type='text' id='devotedToWait' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='facility'>Number of edge/end user-device switch ports in use</label>
                        <input type='text' id='facility' />
                    </div>
                </fieldset>
                </div>

                <div className={classes.thirdrow}>
                <fieldset className={classes.field}>
                <legend className={classes.legend}>Facility</legend>
                    <div className={classes.section}>
                        <label htmlFor='PercentUserActivity'>Maximum BTU load</label>
                        <input type='text' id='PercentUserActivity' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='devotedToSystem'>Current BTU load</label>
                        <input type='text' id='devotedToSystem' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='devotedToWait'>Number of servers and devices in your server room</label>
                        <input type='text' id='devotedToWait' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='facility'>Estimated facility power limits (kW)</label>
                        <input type='text' id='facility' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='facility'>Facility power consumption (kW)</label>
                        <input type='text' id='facility' />
                    </div>
                </fieldset>
                </div>
                <div className={classes.submitContainer}>
               <div> <button onClick={() => router.back()}> Previous </button></div>
               <div> <button  onClick={() => router.push('/forms/third')}> Next Page </button></div>
               </div>

     </form>  
    </>
  )
}

export default Second