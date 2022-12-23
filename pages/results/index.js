import React from 'react'
import ResultDetails from '../../components/ResultDetails/ResultDetails'
import useResults from '../../Hooks/useResults'

const Results = () => {
    const {results, isLoading, isError} = useResults()
    if(isLoading){
        <p>Loading...</p>
    }

    if(isError){
        <p>Error</p>
    }

   
  return (
    <div>
         <ResultDetails results={results && results} />
    </div>
  )
}

export default Results