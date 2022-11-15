import React from 'react'
import FormHeader from '../FormHeader/FormHeader'
import classes from './Form.module.css'
import { useRouter } from 'next/router'


const First = () => {
    const router =useRouter()
    return (
        <>
            <FormHeader />
            <form className={classes.form}>

                <fieldset className={classes.field}>
                    <legend className={classes.legend}>Facility Information</legend>
                    <div className={classes.section}>
                        <label htmlFor='nation'>Nation</label>
                        <input type='text' id='nation' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='region'>Region</label>
                        <input type='text' id='region' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='district'>District</label>
                        <input type='text' id='district' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='facility'>Facility</label>
                        <input type='text' id='facility' />
                    </div>
                </fieldset>


                <div className={classes.secondrow}>
                    <fieldset className={classes.field1}>
                        <legend className={classes.legend}>Primary Storage</legend>
                        <div className={classes.section1}>
                            <label htmlFor='storageInUse'>Gigabytes of storage in use</label>
                            <input type='text' id='storageInUse' />
                        </div>

                        <div className={classes.section1}>
                            <label htmlFor='storageInUse'>Gigabytes of storage free</label>
                            <input type='text' id='storageInUse' />
                        </div>
                    </fieldset>


                    <fieldset className={classes.field1}>
                        <legend className={classes.legend}>Archived Storage</legend>
                        <div className={classes.section1}>
                            <label htmlFor='storageInUse'>Gigabytes of storage in use</label>
                            <input type='text' id='storageInUse' />
                        </div>

                        <div className={classes.section1}>
                            <label htmlFor='storageInUse'>Gigabytes of storage free</label>
                            <input type='text' id='storageInUse' />
                        </div>
                    </fieldset>

                </div>

                <div className={classes.thirdrow}>
                <fieldset className={classes.field}>
                <legend className={classes.legend}>CPU Usage</legend>
                    <div className={classes.section}>
                        <label htmlFor='PercentUserActivity'>Percent Devoted to user activities (USR%)</label>
                        <input type='text' id='PercentUserActivity' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='devotedToSystem'>Percent devoted to systems activities (USR%)</label>
                        <input type='text' id='devotedToSystem' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='devotedToWait'>Percent devoted to wait I/O (WIO%)</label>
                        <input type='text' id='devotedToWait' />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='facility'>Total percentage CPU usage(fill in only id you do not know the more detailed metrics above)</label>
                        <input type='text' id='facility' />
                    </div>
                </fieldset>
                </div>

               <div className={classes.button}> <button onClick={()=>router.push('/forms/second')} > Next Page </button></div>

            </form>
        </>
    )
}

export default First