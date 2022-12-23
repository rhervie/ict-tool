import React from 'react'
import useResult from '../../Hooks/useResult'
import { useRouter } from 'next/router'


const Result = () => {
    // const router = useRouter()
    // const {resultId} = router.query
    // const {result} = useResult(resultId)
    // console.log(result && result);
  return (
    <div>
        <table>
    <thead>
        <tr>
            <th >Infrastructure Component</th>
            <th>Action Required(Within 0 Year[s])</th>
            <th>Projected</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3">Storage</td>
        </tr>
        <tr>
        <td>Primary</td>
         <td>description</td>
         <td>value</td>
        </tr>
        <tr>
        <td>Archived</td>
         <td>description</td>
         <td>value</td>
        </tr>

        <tr>
            <td colspan="3">Servers</td>
        </tr>
        <tr>
        <td>CPU</td>
         <td>description</td>
         <td>value</td>
        </tr>
        <tr>
        <td>Memory</td>
         <td>description</td>
         <td>value</td>
        </tr>
    </tbody>
</table>
    </div>
  )
}

export default Result