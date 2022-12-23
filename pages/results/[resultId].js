import React from 'react'
import useResult from '../../Hooks/useResult'
import { useRouter } from 'next/router'


const Result = () => {
    const router = useRouter()
    const {resultId} = router.query
    const {result} = useResult(resultId)
    console.log(result && result);
  return (
    <div>

    </div>
  )
}

export default Result