import React,{useState, useEffect} from 'react'
import FormHeader from '../FormHeader/FormHeader'
import classes from './Form.module.css'
import { useRouter } from 'next/router'

const Third = () => {
    
    const router = useRouter()
    const[totalNumberDataCenterSwitchPorts, setTotalNumberDataCenterSwitchPorts]= useState('')
    const[numberDataCenterSwitchPortsInUse, setNumberDataCenterSwitchPortsInUse] =useState('')
    const[totalNumberEdgeEndUserDeviceSwitchPorts, setTotalNumberEdgeEndUserDeviceSwitchPorts] = useState('')
    const[numberEdgeEndUserDeviceSwitchPortsInUse,setNumberEdgeEndUserDeviceSwitchPortsInUse] =useState('')
   const[expectednumberSwitchPorts,setExpectednumberSwitchPorts] =useState('')
   const[expectedNumberEdgeSwitchPorts,setExpectedNumberEdgeSwitchPorts]=useState('')
    const[numberHandSets, setNumberHandSets]=useState('')
    const[handsetsInUse, setHandsetsInUse] =useState('')
    const[numberofPSTNTrunks,setNumberofPSTNTrunks ] =useState('')
    const[numberOfWANLinks, setNumberOfWANLinks] =useState('')
    const[numberWANLinksExceedingEightyPercent, setNumberWANLinksExceedingEightyPercent] = useState('')
    const[maximumBTULoad ,setMaximumBTULoad] =useState('')
    const[currentBTULoad, setCurrentBTULoad] =useState('')
    const[numberServersDevicesInServerRoom, setNumberServersDevicesInServerRoom]=useState('')
    const[estimatedFacilityPowerLimits,setEstimatedFacilityPowerLimits] =useState('')
    const[facilityPowerConsumption,setFacilityPowerConsumption]=useState('')
    const[estimatedNumberWANLinksExceedingEightyPercent,setEstimatedNumberWANLinksExceedingEightyPercent]=useState('')
const[estimatedPercentChangeDevicesInServerRoom, setEstimatedPercentChangeDevicesInServerRoom]=useState('')
const[estimatedPercentChangeElectricalRequirement,setEstimatedPercentChangeElectricalRequirement] =useState('')
const[projectTimeline,setProjectTimeline] =useState('')
const[changeInSupportedUsers,setChangeInSupportedUsers]=useState('')


    useEffect(()=>{
        if (localStorage.getItem('thirdFormData')) {
            const thirdFormData = JSON.parse(localStorage.getItem('thirdFormData'));
            console.log(thirdFormData);

            setTotalNumberDataCenterSwitchPorts(thirdFormData.totalNumberDataCenterSwitchPorts)
            setNumberDataCenterSwitchPortsInUse(thirdFormData.numberDataCenterSwitchPortsInUse)
            setTotalNumberEdgeEndUserDeviceSwitchPorts(thirdFormData.totalNumberEdgeEndUserDeviceSwitchPorts)
            setNumberEdgeEndUserDeviceSwitchPortsInUse(thirdFormData.numberEdgeEndUserDeviceSwitchPortsInUse)
            setExpectednumberSwitchPorts(thirdFormData.expectedNumberEdgeSwitchPorts)
            setExpectedNumberEdgeSwitchPorts(thirdFormData.expectedNumberEdgeSwitchPorts)
            setNumberHandSets(thirdFormData.numberHandSets)
            setHandsetsInUse(thirdFormData.handsetsInUse)
            setNumberofPSTNTrunks (thirdFormData.numberofPSTNTrunks)
            setNumberOfWANLinks(thirdFormData.numberOfWANLinks)
            setNumberWANLinksExceedingEightyPercent(thirdFormData.numberWANLinksExceedingEightyPercent)
            setMaximumBTULoad(thirdFormData.maximumBTULoad)
            setCurrentBTULoad(thirdFormData.currentBTULoad)
            setNumberServersDevicesInServerRoom(thirdFormData.numberServersDevicesInServerRoom)
            setEstimatedFacilityPowerLimits(thirdFormData.estimatedFacilityPowerLimits)
            setFacilityPowerConsumption(thirdFormData.facilityPowerConsumption)
            setEstimatedNumberWANLinksExceedingEightyPercent(thirdFormData.estimatedNumberWANLinksExceedingEightyPercent)
            setEstimatedPercentChangeDevicesInServerRoom(thirdFormData.estimatedPercentChangeDevicesInServerRoom)
            setEstimatedPercentChangeElectricalRequirement(thirdFormData.estimatedPercentChangeElectricalRequirement)
            setProjectTimeline(thirdFormData.projectTimeline)
            setChangeInSupportedUsers(thirdFormData.changeInSupportedUsers)
        }
    },[])


    //clear form data
    const clearFields=()=>{
        setTotalNumberDataCenterSwitchPorts('')
        setNumberDataCenterSwitchPortsInUse('')
        setTotalNumberEdgeEndUserDeviceSwitchPorts('')
        setNumberEdgeEndUserDeviceSwitchPortsInUse('')
        setExpectednumberSwitchPorts('')
        setExpectedNumberEdgeSwitchPorts('')
        setNumberHandSets('')
        setHandsetsInUse('')
        setNumberofPSTNTrunks('')
        setNumberOfWANLinks('')
        setNumberWANLinksExceedingEightyPercent('')
        setMaximumBTULoad('')
        setCurrentBTULoad('')
        setNumberServersDevicesInServerRoom('')
        setEstimatedFacilityPowerLimits('')
        setFacilityPowerConsumption('')
        setEstimatedNumberWANLinksExceedingEightyPercent('')
        setEstimatedPercentChangeDevicesInServerRoom('')
        setEstimatedPercentChangeElectricalRequirement('')
        setProjectTimeline('')
        setChangeInSupportedUsers('')
        
    }

    const saveThirdFormData=async(e)=>{
        e.preventDefault();

        const thirdFormData ={
            totalNumberDataCenterSwitchPorts,
            numberDataCenterSwitchPortsInUse,
            totalNumberEdgeEndUserDeviceSwitchPorts,
            numberEdgeEndUserDeviceSwitchPortsInUse,
            expectednumberSwitchPorts,
            expectedNumberEdgeSwitchPorts,
            maximumBTULoad,
            currentBTULoad,
            numberServersDevicesInServerRoom,
            estimatedFacilityPowerLimits,
            facilityPowerConsumption,
            numberHandSets,
            handsetsInUse,
            numberofPSTNTrunks,
            numberOfWANLinks,
            numberWANLinksExceedingEightyPercent,
            estimatedNumberWANLinksExceedingEightyPercent,
            estimatedPercentChangeDevicesInServerRoom,
            estimatedPercentChangeElectricalRequirement,
            projectTimeline,
            changeInSupportedUsers
        }
        localStorage.setItem('thirdFormData', JSON.stringify(thirdFormData));
        const firstData =JSON.parse(localStorage.getItem('firstFormData'));
        const secondData =JSON.parse(localStorage.getItem('secondFormData'));
        const coordinates =JSON.parse(localStorage.getItem('coordinates'))

        if(coordinates === null){
           return alert('please allow location')
        }


        const data = {
            country: {
                nation: firstData.nation,
                region: firstData.region,
                district: firstData.district,
                facility:firstData.facility,
            },

            server: {
                storage: {
                    serPriStoGigUse: firstData.primaryStorageGigabytesInUse,
                    serPriStoGigFree:firstData.primaryStorageFree,
                    estPerChaInStuDat: firstData.estimatedPercentinStrData,
                    estPerChaInUStDat:firstData.estimatedPercentinUnStrData,
                    serArcStoGigUse:firstData.archivedStorageInUse,
                    serArcStoGigFree: firstData.archivedStorageFree,
                    expPerChaInArcSto: firstData.expectedPercentInArchivedStorageNeeds,
                },
                cpu: {
                    serCpuPerUserAct:secondData.cpuPercentDevotedUserActivities,
                    serCpuPerSysAct:secondData.cpuPercentDevotedSystemsActivities,
                    serCpuDevWIO: secondData.cpuPercentDevotedWaitIO,
                    serCpuTot:secondData.totalPercentageCPUUusage,
                },
                memory: {
                    serMemfreePer: secondData.percentMemoryFree,
                    serMemfreeSwapPer:secondData.percentSwapFree,
                },
                disk: {
                    serDisTolSiz:secondData.totalDiskSize,
                    serDisUse:secondData.diskUsage,
                }
            },
        
            networking: {
                lan: {
                    netLanTotNumDatCenSwiPor: totalNumberDataCenterSwitchPorts,
                    expPerChaNumSwiPor:expectednumberSwitchPorts,
                    expPerChaNumSEdgDevSwiPor: expectedNumberEdgeSwitchPorts,
                    netLanNumDatCenSwiPorUse:numberDataCenterSwitchPortsInUse,
                    netLanTotNumEdgDevSwiPor:totalNumberEdgeEndUserDeviceSwitchPorts,
                    netLanNumEdgDevSwiPorUse:numberEdgeEndUserDeviceSwitchPortsInUse,
                },
                wan: {
                    netwanTotNumWanLin:numberOfWANLinks,
                    netwanNumWanLinExe: numberWANLinksExceedingEightyPercent,
                    estPerChaNumWanLin:estimatedNumberWANLinksExceedingEightyPercent,
                }
            },
            telephony: {
                telTotNumHanSet:numberHandSets,
                telNumHanSetUse:handsetsInUse,
                telNumPstLin: numberofPSTNTrunks
            },
            Facility: {
                facMaxBtuL:maximumBTULoad,
                facCurBtuL:currentBTULoad,
                facNumSerDev:numberServersDevicesInServerRoom,
                facEstFacPowLim:estimatedFacilityPowerLimits,
                facPowCon:facilityPowerConsumption,
                estPerChaNumDevSer:estimatedPercentChangeDevicesInServerRoom,
                estPerChaElcCapReq:estimatedPercentChangeElectricalRequirement
            },
            serveThresholds: {
                PriStoMaxCapUse: secondData.primaryStorageMaxCap,
                ArcStoMaxCapUse:secondData.primaryArchivedMaxCap,
                NumUserSup:secondData.usersSupported,
                NumOfServers:secondData.numberOfServers,
                NumRemBacSer:secondData.remoteBackupServers
            },
            capacity: {
                proTimYea: projectTimeline,
                ChaNumSupUse:changeInSupportedUsers
            },

            location: {
                // type:'Point',
                //  coordinates: [coordinates[0], coordinates[1]]
                latitude:coordinates[0],
                longitude:coordinates[1]
              },
            
        
        }
        //MAKING POST REQUEST TO END POINT
     
        const response = await fetch('/api/server',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        

        if(response.status === 201){
        clearFields()
         localStorage.clear()
         router.push('/forms/first')
        }else{
            console.log(response);
        }
    }

    const onPrevious=(e)=>{
        e.preventDefault();
         router.back() 
         const thirdFormData ={
            totalNumberDataCenterSwitchPorts,
            numberDataCenterSwitchPortsInUse,
            totalNumberEdgeEndUserDeviceSwitchPorts,
            numberEdgeEndUserDeviceSwitchPortsInUse,
            expectednumberSwitchPorts,
            expectedNumberEdgeSwitchPorts,
            maximumBTULoad,
            currentBTULoad,
            numberServersDevicesInServerRoom,
            estimatedFacilityPowerLimits,
            facilityPowerConsumption,
            numberHandSets,
            handsetsInUse,
            numberofPSTNTrunks,
            numberOfWANLinks,
            numberWANLinksExceedingEightyPercent,
            estimatedNumberWANLinksExceedingEightyPercent,
            estimatedPercentChangeDevicesInServerRoom,
            estimatedPercentChangeElectricalRequirement,
            projectTimeline,
            changeInSupportedUsers
        }
        localStorage.setItem('thirdFormData', JSON.stringify(thirdFormData));
    }


  return (
    <div>
         
          <form className={classes.form}>

          <fieldset className={classes.field}>
                <legend className={classes.legend}>Networking (LAN)</legend>
                    <div className={classes.section}>
                        <label htmlFor='numberSwitchPorts'>Total number of data center switch ports</label>
                        <input type='number' id='numberSwitchPorts' value={totalNumberDataCenterSwitchPorts} onChange={(event)=>setTotalNumberDataCenterSwitchPorts(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='dataSwitchPorts'>Number of data center switch ports in use</label>
                        <input type='number' id='dataSwitchPorts' value={numberDataCenterSwitchPortsInUse} onChange={(event)=>setNumberDataCenterSwitchPortsInUse(+event.target.value)}/>
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='end-userswitchports'>Total number of edge/end-user device switch ports</label>
                        <input type='number' id='end-userswitchports' value={totalNumberEdgeEndUserDeviceSwitchPorts} onChange={(event)=>setTotalNumberEdgeEndUserDeviceSwitchPorts(+event.target.value)}/>
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='switchPortsInUse'>Number of edge/end user-device switch ports in use</label>
                        <input type='number' id='switchPortsInUse' value={numberEdgeEndUserDeviceSwitchPortsInUse} onChange={(event)=>setNumberEdgeEndUserDeviceSwitchPortsInUse(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='expectedswitchPorts'>Expected percentage change in number of switch ports needed</label>
                        <input type='number' id='expectedswitchPorts' value={expectednumberSwitchPorts} onChange={(event)=>setExpectednumberSwitchPorts(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='expectededgeswitchports'>Expected percentage change in number of edge/end-user switch ports needed</label>
                        <input type='number' id='expectededgeswitchports' value={expectedNumberEdgeSwitchPorts} onChange={(event)=>setExpectedNumberEdgeSwitchPorts(+event.target.value)} />
                    </div>

                </fieldset>

          <fieldset className={classes.field}>
                    <legend className={classes.legend}>Networking (WAN)</legend>
                    <div className={classes.section}>
                        <label htmlFor='nation'>Total number of WAN links</label>
                        <input type='number' id='nation' value={numberOfWANLinks} onChange={(event)=>setNumberOfWANLinks(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='region'>Number of WAN links exceeding 80% utilization</label>
                        <input type='number' id='region' value={numberWANLinksExceedingEightyPercent} onChange={(event)=>setNumberWANLinksExceedingEightyPercent(+event.target.value)}/>
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='region'>Estimated percent change in number of WAN links exceeding 80% utilization</label>
                        <input type='number' id='region' value={estimatedNumberWANLinksExceedingEightyPercent} onChange={(event)=>setEstimatedNumberWANLinksExceedingEightyPercent(+event.target.value)}/>
                    </div>

                </fieldset>

         
          <fieldset className={classes.field}>
                    <legend className={classes.legend}>Telephony</legend>
                    <div className={classes.section}>
                        <label htmlFor='nation'>Total number of handsets</label>
                        <input type='number' id='nation' value={numberHandSets} onChange={(event)=>setNumberHandSets(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='region'>Number of handsets currently in use</label>
                        <input type='number' id='region' value={handsetsInUse} onChange={(events)=>setHandsetsInUse(+events.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='district'>Number of PSTN trunks currently provisioned (lines)</label>
                        <input type='number' id='district' value={numberofPSTNTrunks} onChange={(event)=>setNumberofPSTNTrunks(+event.target.value)} />
                    </div>

                </fieldset>

                
          <fieldset className={classes.field}>
                <legend className={classes.legend}>Facility</legend>
                    <div className={classes.section}>
                        <label htmlFor='MaximumBTULoad'>Maximum BTU load</label>
                        <input type='number' id='MaximumBTULoad' value={maximumBTULoad} onChange={(event)=>setMaximumBTULoad(+event.target.value)}/>
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='currentBTUload'>Current BTU load</label>
                        <input type='number' id='currentBTUload' value={currentBTULoad} onChange={(event)=>setCurrentBTULoad(+event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='numberofServersDevicesinServerRm'>Number of servers and devices in your server room</label>
                        <input type='number' id='numberofServersDevicesinServerRm' value={numberServersDevicesInServerRoom} onChange={(event)=>setNumberServersDevicesInServerRoom(event.target.value)}/>
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='estimatedFacilityPowerLimits'>Estimated facility power limits (kW)</label>
                        <input type='number' id='facility' value={estimatedFacilityPowerLimits} onChange={(event)=>setEstimatedFacilityPowerLimits(+event.target.value)}/>
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='facilityPowerConsumption'>Facility power consumption (kW)</label>
                        <input type='number' id='facilityPowerConsumption' value={facilityPowerConsumption} onChange={(event)=>setFacilityPowerConsumption(+event.target.value)}/>
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='estimatednumberInServerRoom'>Estimated percentage change to number of devices in the server room</label>
                        <input type='number' id='estimatednumberInServerRoom' value={estimatedPercentChangeDevicesInServerRoom} onChange={(event)=>setEstimatedPercentChangeDevicesInServerRoom(+event.target.value)}/>
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='estimatednumberInServerRoom'>Estimated percentage change in electrical requirements</label>
                        <input type='number' id='estimatednumberInServerRoom' value={estimatedPercentChangeElectricalRequirement} onChange={(event)=>setEstimatedPercentChangeElectricalRequirement(+event.target.value)}/>
                    </div>

                </fieldset>

                <fieldset className={classes.field}>
                    <legend className={classes.legend}>Capacity</legend>
                        <div className={classes.section}>
                            <label htmlFor='projectTimeline'>Projection Timeline(Years)</label>
                            <input type='number' id='projectTimeline' value={projectTimeline} onChange={(event)=>setProjectTimeline(+event.target.value)} />
                        </div>

                        <div className={classes.section}>
                            <label htmlFor='changeInSupportedUsers'>Percentage Change in Number of Support Users</label>
                            <input type='number' id='changeInSupportedUsers' value={changeInSupportedUsers} onChange={(event)=>setChangeInSupportedUsers(+event.target.value)} />
                        </div>
                    </fieldset>

               <div className={classes.submitContainer}>
               <div> <button onClick={onPrevious}> Previous </button></div>
               <div> <button  onClick={saveThirdFormData}> Submit </button></div>
               </div>
          </form>
    </div>
  )
  }

export default Third;