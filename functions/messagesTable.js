export default {
    baseMessage:"Based on your inputs, your infrastructure in this area is adequate. No major changes required.",
    primaryMessage:"You need to increase your active storage capacity. First, consider whether you can free up the required storage by shifting data to less expensive equipment. If moving your data does not close the storage gap, consider adding storage modules or moving to multiple SANs. If none of the above approaches provide the space required, consider replacing the organization's storage infrastructure.",
    archivedMessage: "You need to increase your archived storage capacity. First, consider whether you can free up the required storage by shifting data to less expensive equipment. If moving your data does not close the storage gap, consider adding storage modules or moving to multiple SANs. If none of the above approaches provide the space required, consider replacing the organization's storage infrastructure.",
    cpuMessage:"You need to increase your CPU capacity. First, consider whether it is possible to 'HOT' or 'COLD' add a CPU to the server. If that is not possible or will not address CPU capacity issues, re-consider your application portfolio, and look at whether you can shed or offload non-essential processes. Finally, if none of these strategies work to address CPU capacity issues, look at investing in new server hardware",
    diskMessage:"You need to increase your server disk capacity. First, optimize disk use by shedding unnecessary data and/or archiving older data. Next, check whether you can add additional disk capacity to existing servers. If neither of these strategies solve the problem, look at buying new servers or investing in a consolidated storage solution (SAN or NAS)",
    handsetsMessage:"You are running low on the number of handsets you have. Before adding new handsets, consider the age of your system. If you have an aging PBX, it may be more cost-effective in the long-run to move to IP telephony",
    linesMessage:"You have more than enough lines to accommodate growth, and may want to consider consolidating lines to save on telephony-related costs. Before consolidating, consider whether your organization has phone usage levels to justify high capacity levels. Call centers, for example, need relatively more lines to support their employees",
    lANDataCenterSwitchPortsMessage:"You need to add capacity to your core switch. Consider adding a line card, adding top of rack switches, or increasing your port density.",
    lANEndUserOrDeviceSwitchPortsMessage:"You need to add more end-user device switch ports to your network. You can look at adding switches of the same type, and/or adding higher port density switches. Replacing lower port density switches with higher port density devices can often solve capacity problems for less money than adding more of the same. Consider, for example, whether replacing some 24 port switches with 48 port switches might be the lowest-cost option for solving your capacity problems.",
    wANLinksExceeding80PercUtilizationMessage:"All of your WAN links are projected to exceed 80% utilization. Add capacity to your ports by bonding another T1, or by moving to a fractional DS3. You can also consider switching to an ethernet service with higher bandwidth.",
    coolingMessage:"You are running out of cooling capacity in your facility. First consider moving less critical equipment out of the data center. Investigate hot aisle/cold aisle containment, and look at whether you can partition your server room. For example, routers generate more heat and require less cooling than servers, so moving routers and servers into separate server room partitions can reduce cooling needs. Check and optimize your rack configuration to minimize cooling needs -- move rack-mounted UPS systems from the bottom of your server racks, for example. Look at adding more cooling as a last resort.",
    electricalCapacityMessage:"You are running out of electrical capacity to support your data center. Consider moving less critical equipment from your conditioned power, and virtualize more of your servers if possible.",
    messageMessage:'You need to increase your memory capacity. If possible, add more memory or upgrade the existing memory slices in your server. Re-consider your application portfolio, and look at whether you can shed or offload non-essential processes. If neither of these strategies will work to address memory capacity issues, look at investing in new server hardware.'
}