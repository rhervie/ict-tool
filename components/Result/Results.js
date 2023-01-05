import React from 'react'
import classes from './Results.module.css'

const Results = ({result}) => {
  if (result === null || result === undefined) return 
  console.log(result);
  const {primary,archived,cpu,disk,handsets,lines,lANDataCenterSwitchPorts
  ,lANEndUserOrDeviceSwitchPorts,wANLinksExceeding80PercUtilization
,cooling,electricalCapacity, country,memory} = result 


  const settingValue=(value)=>{
    if(value ===null){
        return value = 0
    }else{
        return value
    }
  }
  
  return (
    <div>
     <div className={classes.facility}>
        <h3>Country:{country.nation}</h3>
        <h3>Region:{country.region}</h3>
        <h3>District:{country.district}</h3>
        <h3>facility:{country.facility}</h3>
    </div>   
    <table className={classes.table}>
<thead>
    <tr>
        <th >Infrastructure Component</th>
        <th>Action Required(Within 0 Year[s])</th>
        <th>Projected</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td colSpan="2" className={classes.subHeader}>Storage</td>
        <td></td>
    </tr>
    <tr>
    <td className={classes.subsubHeader}>Primary</td>
     <td>{primary.primaryMessage}</td>
     <td>{settingValue(primary.primaryValue)}%</td>
    </tr>
    <tr>
    <td className={classes.subsubHeader}>Archived</td>
     <td>{archived.archivedMessage}</td>
     <td>{settingValue(archived.archivedValue)}%</td>
    </tr>

    <tr>
    <td colSpan="2"  className={classes.subHeader}>Servers</td>
    <td></td>
    </tr>
    <tr>
    <td className={classes.subsubHeader}>CPU</td>
     <td>{cpu.cPUMessage}</td>
     <td>{settingValue(cpu.cPUValue)} % </td>
    </tr>
    <tr>
    <td rowSpan='2' className={classes.subsubHeader}>Memory </td>
     <td rowSpan='2'>{memory && memory.message}</td>
     <td className={classes.flexbox}><span>Memory in use</span>
     <span>Swap in use</span></td>
    </tr>
    <tr>
    <td className={classes.flexbox}> 
       <span>{memory && memory.value1}%</span>
       <span>{memory && memory.value2}%</span>
     </td>

    </tr>
    <tr>
    <td className={classes.subsubHeader}>Disk</td>
     <td>{disk.diskMessage}</td>
     <td>{settingValue(disk.diskValue)} %</td>
    </tr>

    <tr>
        <td colSpan="2" className={classes.subHeader}>Telephony</td>
        <td></td>
    </tr>
    <tr>
    <td className={classes.subsubHeader}>Handsets</td>
     <td>{handsets.handsetsMessage}</td>
     <td>{settingValue(handsets.handsetsValue)}%</td>
    </tr>
    <tr>
    <td className={classes.subsubHeader}>Lines</td>
     <td>{lines.linesMessage}</td>
     <td>{settingValue(lines.linesValue)}%</td>
    </tr>

    <tr>
        <td colSpan="2" className={classes.subHeader}>Telephony</td>
        <td></td>
    </tr>
    <tr>
    <td className={classes.subsubHeader}>LAN Data Center Switch Ports</td>
     <td>{lANDataCenterSwitchPorts.lANDataCenterSwitchPortsMessage}</td>
     <td>{settingValue(lANDataCenterSwitchPorts
.lANDataCenterSwitchPortsValue)}%</td>
    </tr>
    <tr>
    <td className={classes.subsubHeader}>LAN End-User/Device Switch Ports</td>
     <td>{lANEndUserOrDeviceSwitchPorts.lANEndUserOrDeviceSwitchPortsMessage}</td>
     <td>{settingValue(lANEndUserOrDeviceSwitchPorts.lANEndUserOrDeviceSwitchPortsValue)}%</td>
    </tr>
    <tr>
    <td className={classes.subsubHeader}>WAN Links (Exceeding 80% Utilization)</td>
     <td>{wANLinksExceeding80PercUtilization
.wANLinksExceeding80PercUtilizationMessage}</td>
     <td>{settingValue(wANLinksExceeding80PercUtilization
.wANLinksExceeding80PercUtilizationValue)}%</td>
    </tr>

    <tr>
        <td colSpan="2" className={classes.subHeader}>Facility</td>
        <td></td>
    </tr>
    <tr>
    <td className={classes.subsubHeader}>Cooling</td>
     <td>{cooling.coolingMessage}</td>
     <td>{settingValue(cooling.coolingValue)} %</td>
    </tr>
    <tr>
    <td className={classes.subsubHeader}>Electrical Capacity</td>
     <td>{electricalCapacity.electricalCapacityMessage}</td>
     <td>{settingValue(electricalCapacity.ElectricalCapacityValue)}%</td>
    </tr>

</tbody>
</table>
</div>
  )
}

export default Results