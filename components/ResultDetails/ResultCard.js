import Link from 'next/link'
import React from 'react'
import classes from './ResultCard.module.css'

const ResultCard = ({result}) => {
  return (
   <Link href={`/results/${result._id}`}>
    <div className={classes.ResultCard}>
        <h2>{result.country.nation}</h2>
        <p>{result.country.region}</p>
        <p>{result.country.district}</p>
        <p>{result.country.facility}</p>
    </div>
   </Link>
  )
}

export default ResultCard