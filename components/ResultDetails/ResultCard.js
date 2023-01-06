import Link from 'next/link'
import React from 'react'
import {SlArrowRight} from 'react-icons/sl'
import classes from './ResultCard.module.css'

const ResultCard = ({ result }) => {
  return (
    <Link href={`/results/${result._id}`}>
      <div>
        <div className={classes.ResultCard}>
          <div>
            <p>Country</p>
            <span>{result.country.nation}</span>
          </div>
          <div className={classes.hide}>
            <p>Region</p>
            <span>{result.country.region}</span>
          </div>
          <div className={classes.hide}>
            <p >District</p>
            <span>{result.country.district}</span>
          </div>
          <div>
            <p>Facility</p>
            <span>{result.country.facility}</span>
          </div>
          <div>
            <SlArrowRight className={classes.icons}/>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ResultCard