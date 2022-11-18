import React, { useState, useEffect } from 'react'
import FormHeader from '../FormHeader/FormHeader'
import classes from './Form.module.css'
import { useRouter } from 'next/router'


const Second = () => {
    const router = useRouter()

    const [cpuPercentDevotedUserActivities, setCpuPercentDevotedUserActivities] = useState('')
    const [cpuPercentDevotedSystemsActivities, setCpuPercentDevotedSystemsActivities] = useState('')
    const [cpuPercentDevotedWaitIO, setCpuPercentDevotedWaitIO] = useState('')
    const [totalPercentageCPUUusage, setTotalPercentageCPUUusage] = useState('')
    const [percentMemoryFree, setPercentMemoryFree] = useState('')
    const [percentSwapFree, setpercentSwapFree] = useState('')
    const [totalDiskSize, setTotalDiskSize] = useState('')
    const [diskUsage, setDiskUsage] = useState('')
    const [primaryStorageMaxCap, setPrimaryStorageMaxCap] = useState('')
    const [primaryArchivedMaxCap, setPrimaryArchivedMaxCap] = useState('')
    const [usersSupported, setUsersSupported] = useState('')
    const [numberOfServers, setNumberOfServers] = useState('')
    const [remoteBackupServers, setRemoteBackupServers] = useState('')


    useEffect(()=>{
        if (localStorage.getItem('secondFormData')) {
            const secondFormData = JSON.parse(localStorage.getItem('secondFormData'));
            setCpuPercentDevotedUserActivities(secondFormData.cpuPercentDevotedUserActivities);
            setCpuPercentDevotedSystemsActivities(secondFormData.cpuPercentDevotedSystemsActivities)
            setCpuPercentDevotedWaitIO(secondFormData.cpuPercentDevotedWaitIO)
            setTotalPercentageCPUUusage(secondFormData.totalPercentageCPUUusage)
            setPercentMemoryFree(secondFormData.percentMemoryFree)
            setpercentSwapFree(secondFormData.percentSwapFree)
            setTotalDiskSize(secondFormData.totalDiskSize)
            setPrimaryStorageMaxCap(secondFormData.primaryStorageMaxCap)
            setPrimaryArchivedMaxCap(secondFormData.primaryArchivedMaxCap)
            setUsersSupported(secondFormData.usersSupported)
            setNumberOfServers(secondFormData.numberOfServers)
            setRemoteBackupServers(secondFormData.remoteBackupServers)
        }  

    } , [])
    const saveSecondData = (e) => {
        e.preventDefault();

        const secondFormData = {
            cpuPercentDevotedUserActivities,
            cpuPercentDevotedSystemsActivities,
            cpuPercentDevotedWaitIO,
            totalPercentageCPUUusage,
            percentMemoryFree,
            percentSwapFree,
            totalDiskSize,
            diskUsage,
            primaryStorageMaxCap,
            usersSupported,
            numberOfServers,
            remoteBackupServers,
            primaryArchivedMaxCap
        }
        console.log(secondFormData);
        router.push('/forms/third')
        localStorage.setItem('secondFormData', JSON.stringify(secondFormData));
    }


    return (
        <>
            <FormHeader />
            <form className={classes.form}>

                <fieldset className={classes.field}>
                    <legend className={classes.legend}>CPU Usage</legend>
                    <div className={classes.section}>
                        <label htmlFor='PercentUserActivity'>Percent Devoted to user activities (USR%)</label>
                        <input type='text' id='PercentUserActivity' value={cpuPercentDevotedUserActivities} onChange={(event) => setCpuPercentDevotedUserActivities(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='devotedToSystem'>Percent devoted to systems activities (USR%)</label>
                        <input type='text' id='devotedToSystem' value={cpuPercentDevotedSystemsActivities} onChange={(event) => setCpuPercentDevotedSystemsActivities(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='devotedToWait'>Percent devoted to wait I/O (WIO%)</label>
                        <input type='text' id='devotedToWait' value={cpuPercentDevotedWaitIO} onChange={(event) => setCpuPercentDevotedWaitIO(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='facility'>Total percentage CPU usage(fill in only id you do not know the more detailed metrics above)</label>
                        <input type='text' id='facility' value={totalPercentageCPUUusage} onChange={(event) => setTotalPercentageCPUUusage(+event.target.value)} />
                    </div>
                </fieldset>

                <div className={classes.secondrow}>
                    <fieldset className={classes.field1}>
                        <legend className={classes.legend}>Memory Usage</legend>
                        <div className={classes.section1}>
                            <label htmlFor='memoryUsage'>Percent of memory free (%)</label>
                            <input type='text' id='memoryUsage' value={percentMemoryFree} onChange={(event) => setPercentMemoryFree(+event.target.value)} />
                        </div>

                        <div className={classes.section1}>
                            <label htmlFor='swapFree'> Percent of swap free (%)</label>
                            <input type='text' id='swapFree' value={percentSwapFree} onChange={(event) => setpercentSwapFree(+event.target.value)} />
                        </div>
                    </fieldset>


                    <fieldset className={classes.field1}>
                        <legend className={classes.legend}>Disk Usage (direct attached storage)</legend>
                        <div className={classes.section1}>
                            <label htmlFor='diskUsage'>Total disk size</label>
                            <input type='text' id='diskUsage' value={totalDiskSize} onChange={(event) => setTotalDiskSize(+event.target.value)} />
                        </div>

                        <div className={classes.section1}>
                            <label htmlFor='diskUsageBusy'>Disk usage (%busy)</label>
                            <input type='text' id='diskUsageBusy' value={diskUsage} onChange={(event) => setDiskUsage(+event.target.value)} />
                        </div>
                    </fieldset>

                </div>

                <fieldset className={classes.field}>

                <legend className={classes.legend}>Server Thresholds</legend>
                    <div className={classes.section}>
                        <label htmlFor='maxmemoryUsage'>Primary Storage -Maximum Capacity Use(%)</label>
                        <input type='text' id='maxmemoryUsage' value={primaryStorageMaxCap} onChange={(event) => setPrimaryStorageMaxCap(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='maxArchStorage'> Archived Storage - Maximum Capacity use(%)</label>
                        <input type='text' id='maxArchStorage' value={primaryArchivedMaxCap} onChange={(event) => setPrimaryArchivedMaxCap(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='usersSupported'> Number of Users Currently Supported</label>
                        <input type='text' id='usersSupported' value={usersSupported} onChange={(event) => setUsersSupported(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='numberServers'> Number of Servers</label>
                        <input type='text' id='numberServers' value={numberOfServers} onChange={(event) => setNumberOfServers(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='remoteBackupServers'> Number of remote backup servers</label>
                        <input type='text' id='remoteBackupServers' value={remoteBackupServers} onChange={(event) => setRemoteBackupServers(+event.target.value)} />
                    </div>
                </fieldset>

                <div className={classes.submitContainer}>
                    <div> <button onClick={(e) => { e.preventDefault(); router.back() }}> Previous </button></div>
                    <div> <button onClick={saveSecondData}> Next Page </button></div>
                </div>

            </form>
        </>
    )
}

export default Second