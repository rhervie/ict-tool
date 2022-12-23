import React from 'react'
import ResultCard from './ResultCard'
import classes from './ResultDetails.module.css'

const ResultDetails = ({results}) => {
  return (
    <div className={classes.ResultDetails}>
       {results && results.map(result =>  <ResultCard key={result._id} result={result}/>)}
    </div>
  )
}

export default ResultDetails