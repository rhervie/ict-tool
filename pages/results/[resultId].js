import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Results from '../../components/Result/Results'


const Result = () => {
    const router = useRouter()
    const [result,setResultData] = useState(null)
    const {resultId} = router.query
    // const {result} = useResult(resultId)

    useEffect(() => {
        const fetchData = async () =>{
            const resultData = await fetch(`/api/results/${resultId}`)
            const result = await resultData.json();
            setResultData(result && result)
        }

        fetchData()
       
    }, [resultId]);
   
  return (
   <div>
    <Results result={result}/>
   </div>
  )
}

export default Result