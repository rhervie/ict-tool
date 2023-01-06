import React from 'react'
import classes from './Results.module.css'

const Results = ({ result }) => {
    if (result === null || result === undefined) return
    console.log(result);
    const { primary, archived, cpu, disk, handsets, lines, lANDataCenterSwitchPorts
        , lANEndUserOrDeviceSwitchPorts, wANLinksExceeding80PercUtilization
        , cooling, electricalCapacity, country, memory } = result


    const settingValue = (value) => {
        if (value === null) {
            return value = 0
        } else {
            return value
        }
    }

    return (
        <div>
            <div className={classes.facility}>
                <p>Country:<span>{country.nation}</span></p>
                <p>Region:<span>{country.region}</span></p>
                <p>District:<span>{country.district}</span></p>
                <p>facility:<span>{country.facility}</span></p>
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
                    {primary && <>
                        <tr>
                            <td colSpan="2" className={classes.subHeader}>Storage</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className={classes.subsubHeader}>Primary</td>
                            <td>{primary.primaryMessage}</td>
                            <td className={classes.percentage}>{settingValue(primary.primaryValue)}%</td>
                        </tr>
                    </>
                    }
                    {archived && <>
                        <tr>
                            <td className={classes.subsubHeader}>Archived</td>
                            <td>{archived.archivedMessage}</td>
                            <td className={classes.percentage}>{settingValue(archived.archivedValue)}%</td>
                        </tr>

                        <tr>
                            <td colSpan="2" className={classes.subHeader}>Servers</td>
                            <td></td>
                        </tr>
                    </>

                    }
                    {cpu && <tr>
                        <td className={classes.subsubHeader}>CPU</td>
                        <td>{cpu.cPUMessage}</td>
                        <td className={classes.percentage}>{settingValue(cpu.cPUValue)} % </td>
                    </tr>}
                    {memory && <>
                        <tr>
                            <td rowSpan='2' className={classes.subsubHeader}>Memory </td>
                            <td rowSpan='2'>{memory.message}</td>
                            <td className={classes.flexbox}><span>Memory in use</span>
                                <span>Swap in use</span></td>
                        </tr>
                        <tr>
                            <td className={classes.flexbox}>
                                <span className={classes.percentage}>{memory.value1}%</span>
                                <span className={classes.percentage}>{memory.value2}%</span>
                            </td>

                        </tr>
                    </>}
                    {disk && <tr>
                        <td className={classes.subsubHeader}>Disk</td>
                        <td>{disk.diskMessage}</td>
                        <td className={classes.percentage}>{settingValue(disk.diskValue)} %</td>
                    </tr>}

                    <tr>
                        <td colSpan="2" className={classes.subHeader}>Telephony</td>
                        <td></td>
                    </tr>
                    {handsets && <tr>
                        <td className={classes.subsubHeader}>Handsets</td>
                        <td>{handsets.handsetsMessage}</td>
                        <td className={classes.percentage}>{settingValue(handsets.handsetsValue)}%</td>
                    </tr>}
                    {lines && <tr>
                        <td className={classes.subsubHeader}>Lines</td>
                        <td>{lines.linesMessage}</td>
                        <td className={classes.percentage}>{settingValue(lines.linesValue)}%</td>
                    </tr>}

                    <tr>
                        <td colSpan="2" className={classes.subHeader}>Networking</td>
                        <td></td>
                    </tr>
                    {lANDataCenterSwitchPorts && <tr>
                        <td className={classes.subsubHeader}>LAN Data Center Switch Ports</td>
                        <td>{lANDataCenterSwitchPorts.lANDataCenterSwitchPortsMessage}</td>
                        <td className={classes.percentage}>{settingValue(lANDataCenterSwitchPorts
                            .lANDataCenterSwitchPortsValue)}%</td>
                    </tr>}
                    {lANEndUserOrDeviceSwitchPorts && <tr>
                        <td className={classes.subsubHeader}>LAN End-User/Device Switch Ports</td>
                        <td>{lANEndUserOrDeviceSwitchPorts.lANEndUserOrDeviceSwitchPortsMessage}</td>
                        <td className={classes.percentage}>{settingValue(lANEndUserOrDeviceSwitchPorts.lANEndUserOrDeviceSwitchPortsValue)}%</td>
                    </tr>}
                    {wANLinksExceeding80PercUtilization && <tr>
                        <td className={classes.subsubHeader}>WAN Links (Exceeding 80% Utilization)</td>
                        <td>{wANLinksExceeding80PercUtilization
                            .wANLinksExceeding80PercUtilizationMessage}</td>
                        <td className={classes.percentage}>{settingValue(wANLinksExceeding80PercUtilization
                            .wANLinksExceeding80PercUtilizationValue)}%</td>
                    </tr>}

                    <tr>
                        <td colSpan="2" className={classes.subHeader}>Facility</td>
                        <td></td>
                    </tr>
                    {cooling && <tr>
                        <td className={classes.subsubHeader}>Cooling</td>
                        <td>{cooling.coolingMessage}</td>
                        <td className={classes.percentage}>{settingValue(cooling.coolingValue)} %</td>
                    </tr>}
                    {electricalCapacity && <tr>
                        <td className={classes.subsubHeader}>Electrical Capacity</td>
                        <td>{electricalCapacity.electricalCapacityMessage}</td>
                        <td className={classes.percentage}>{settingValue(electricalCapacity.ElectricalCapacityValue)}%</td>
                    </tr>}

                </tbody>
            </table>
        </div>
    )
}

export default Results