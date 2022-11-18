import React,{useState,useEffect}from 'react'
import FormHeader from '../FormHeader/FormHeader'
import classes from './Form.module.css'
import { useRouter } from 'next/router'


const First = () => {
    const router =useRouter()
    const[latitude, setLatitude]=useState(null)
    const [longitude, setLongitude] = useState(null)
    const [nation ,setNation]= useState('');
    const [region, setRegion] = useState('')
    const [district, setDistrict] = useState('')
    const [facility, setFacility] =useState('')
    const [primaryStorageGigabytesInUse, setPrimaryStorageGigabytesInUse]= useState('')
    const [primaryStorageFree, setPrimaryStorageFree] = useState('')
    const [archivedStorageInUse, setArchivedStorageInUse] =useState('')
    const [archivedStorageFree, setArchivedStorageFree] =useState('')
    const [estimatedPercentinStrData,setEstimatedPercentinStrData] = useState('')
    const [estimatedPercentinUnStrData, setEstimatedPercentinUnStrData] =useState('')
    const[expectedPercentInArchivedStorageNeeds,setExpectedPercentInArchivedStorageNeeds] =useState('')

    useEffect(()=>{
        if (localStorage.getItem('firstFormData')) {
            const firstFormData = JSON.parse(localStorage.getItem('firstFormData'));
            setNation(firstFormData.nation)
            setRegion(firstFormData.region)
            setDistrict(firstFormData.region)
            setFacility(firstFormData.facility)
            setPrimaryStorageGigabytesInUse(firstFormData.primaryStorageGigabytesInUse)
            setPrimaryStorageFree(firstFormData.primaryStorageFree)
            setArchivedStorageFree(firstFormData.archivedStorageFree)
            setArchivedStorageInUse(firstFormData.archivedStorageInUse)
            setEstimatedPercentinStrData(firstFormData.estimatedPercentinStrData)
            setEstimatedPercentinUnStrData(firstFormData.setEstimatedPercentinUnStrData)
            setExpectedPercentInArchivedStorageNeeds(firstFormData.expectedPercentInArchivedStorageNeeds)      
            
        }
    },[])

    //Effect for location api
    useEffect(()=>{
        const geolocation=navigator.geolocation
        if(!geolocation){
            alert('Browser does not allow location')
        }else{
            geolocation.getCurrentPosition((position)=>{
                const{latitude,longitude}=position.coords;
                const coordinates =[latitude,longitude]
                localStorage.setItem('coordinates', JSON.stringify(coordinates));
            })

        }
    },[])

    const saveFirstData=(e)=>{
        e.preventDefault();

        const firstFormData={
            nation,
            region,
            district,
            facility,
            primaryStorageGigabytesInUse,
            primaryStorageFree,
            estimatedPercentinStrData,
            estimatedPercentinUnStrData,
            archivedStorageInUse,
            archivedStorageFree,
            expectedPercentInArchivedStorageNeeds,
           
        }
                // Save data to local storage
                localStorage.setItem('firstFormData', JSON.stringify(firstFormData));

                // Redirect to the second form
                router.push('/forms/second')
        console.log(firstFormData);
       

    }

   

    return (
        <>
            <FormHeader />
            <form className={classes.form}>

                <fieldset className={classes.field}>
                    <legend className={classes.legend}>Facility Information</legend>
                    <div className={classes.section}>
                        <label htmlFor='nation'>Nation</label>
                        <input type='text' id='nation' value={nation} onChange ={(event)=>setNation(event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='region'>Region</label>
                        <input type='text' id='region' value={region} onChange={(event)=>setRegion(event.target.value)} />
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='district'>District</label>
                        <input type='text' id='district' value={district} onChange={(event)=>setDistrict(event.target.value)}/>
                    </div>

                    <div className={classes.section}>
                        <label htmlFor='facility'>Facility</label>
                        <input type='text' id='facility' value={facility} onChange={(event)=>setFacility(event.target.value)}/>
                    </div>
                </fieldset>

             
                    <fieldset className={classes.field}>
                        <legend className={classes.legend}>Primary Storage</legend>
                        <div className={classes.section}>
                            <label htmlFor='storageInUse'>Gigabytes of storage in use</label>
                            <input type='text' id='storageInUse' value={primaryStorageGigabytesInUse} onChange={(event)=>setPrimaryStorageGigabytesInUse(+event.target.value)} />
                        </div>

                        <div className={classes.section}>
                            <label htmlFor='storageInUse'>Gigabytes of storage free</label>
                            <input type='text' id='storageInUse' value={primaryStorageFree} onChange={(event)=>setPrimaryStorageFree(+event.target.value)} />
                        </div>
                        
                        <div className={classes.section}>
                            <label htmlFor='estpercentinData'>Estimated Percentage change in structure data</label>
                            <input type='text' id='estpercentinData' value={estimatedPercentinStrData} onChange={(event)=>setEstimatedPercentinStrData(+event.target.value)} />
                        </div>

                        <div className={classes.section}>
                            <label htmlFor='estpercentinData'>Estimated Percentage change in structure data</label>
                            <input type='text' id='estpercentinData' value={estimatedPercentinUnStrData} onChange={(event)=>setEstimatedPercentinUnStrData(+event.target.value)} />
                        </div>

                    </fieldset>

                    <fieldset className={classes.field}>
                        <legend className={classes.legend}>Archived Storage</legend>
                        <div className={classes.section}>
                            <label htmlFor='storageInUse'>Gigabytes of storage in use</label>
                            <input type='text' id='storageInUse' value={archivedStorageInUse} onChange={(event)=>setArchivedStorageInUse(+event.target.value)}/>
                        </div>

                        <div className={classes.section}>
                            <label htmlFor='storageInUse'>Gigabytes of storage free</label>
                            <input type='text' id='storageInUse' value={archivedStorageFree} onChange={(event)=>setArchivedStorageFree(+event.target.value)}/>
                        </div>

                        <div className={classes.section}>
                            <label htmlFor='expPercentchange'>Expected percentage in archived storage needs</label>
                            <input type='text' id='expPercentchange' value={expectedPercentInArchivedStorageNeeds} onChange={(event)=>setExpectedPercentInArchivedStorageNeeds(+event.target.value)}/>
                        </div>

                    </fieldset>

               <div className={classes.button}> <button onClick={saveFirstData} > Next Page </button></div>

            </form>
        </>
    )
}

export default First