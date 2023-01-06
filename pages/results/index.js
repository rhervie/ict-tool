import React from 'react'
import Header from '../../components/Header/Header'
import ResultDetails from '../../components/ResultDetails/ResultDetails'
import useResults from '../../Hooks/useResults'

const Results = () => {
    const {results, isLoading, isError} = useResults()

    if(isLoading){
       return <p>Loading...</p>
    }

    if(isError){
      return  <p>Error</p>
    }
  
  return (
    <div>
      <Header />
         {results.length > 0 ? <ResultDetails results={results && results} /> : <div>
          <h1>No data...</h1>
          </div>}
    </div>
  )
}

export default Results