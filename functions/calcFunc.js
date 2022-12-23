import funcIndex from "./funcIndex";
import messages from "./messages";
import messagesTable from "./messagesTable";

const HiddenC39=(data)=>{
    let primary = (funcIndex.HiddenM23(data.server.storage.serPriStoGigUse,data.server.storage.serPriStoGigFree,data.server.storage.estPerChaInStuDat,data.server.storage.estPerChaInUStDat)*100)
    return messages.Primary(parseInt(primary)); 
}

const HiddenC40=(data)=>{
    let Archived = (funcIndex.HiddenM24(data.server.storage.serArcStoGigUse,data.server.storage.serArcStoGigFree,data.server.storage.expPerChaInArcSto)*100)
   return messages.Archived(parseInt(Archived));
 
}

const HiddenM25=(data)=>{
    let CPU = (funcIndex.HiddenM25(data.server.cpu.serCpuPerUserAct,data.server.cpu.serCpuPerSysAct,data.server.cpu.serCpuDevWIO,data.server.cpu.serCpuTot,data.capacity.ChaNumSupUse,data.serveThresholds.NumUserSup));
   return messages.CPU(parseInt(CPU));
   
   
}

const HiddenM26=(data)=>{
    let MemoryUse = (funcIndex.HiddenM26(data.server.memory.serMemfreePer,data.capacity.ChaNumSupUse,data.serveThresholds.NumUserSup))
   return parseInt(MemoryUse);
   
   // 
}
const HiddenM27=(data)=>{
    let MemorySwipe = (funcIndex.HiddenM27(data.server.memory.serMemfreeSwapPer,data.capacity.ChaNumSupUse,data.serveThresholds.NumUserSup))
   return parseInt(MemorySwipe);
}
const HiddenM28=(data)=>{
    let Disk = (funcIndex.HiddenM28(data.server.disk.serDisUse,data.capacity.ChaNumSupUse,data.serveThresholds.NumUserSup))
   return messages.Disk(parseInt(Disk));
   
   
}

const HiddenM29=(data)=>{
    let Handsets = (funcIndex.HiddenM29(data.telephony.telTotNumHanSet,data.telephony.telNumHanSetUse,data.capacity.ChaNumSupUse,data.serveThresholds.NumUserSup)*100);
   return messages.Handsets(parseInt(Handsets));
   
   
}

const HiddenN30=(data)=>{
    let Lines = (funcIndex.HiddenM30(data.serveThresholds.NumUserSup,data.telephony.telNumPstLin,data.capacity.ChaNumSupUse))+":1";

   return messages.Lines(parseInt(Lines));
   
   
}

const HiddenM31=(data)=>{
    let LANDataCenterSwitchPorts = (funcIndex.HiddenM31(data.networking.lan.netLanTotNumDatCenSwiPor,data.networking.lan.netLanNumDatCenSwiPorUse,data.networking.lan.expPerChaNumSwiPor)*100);
   return messages.LANDataCenterSwitchPorts(parseInt(LANDataCenterSwitchPorts));
   
   
}

const HiddenM32=(data)=>{
    let LANEndUserDeviceSwitchPorts = (funcIndex.HiddenM32(data.networking.lan.netLanTotNumEdgDevSwiPor,data.networking.lan.netLanNumEdgDevSwiPorUse,data.networking.lan.expPerChaNumSEdgDevSwiPor)*100);
   console.log(LANEndUserDeviceSwitchPorts);
   return messages.LANEndUserOrDeviceSwitchPorts(parseInt(LANEndUserDeviceSwitchPorts));
   
   
}

const HiddenM33=(data)=>{
    let WANLinksExceeding80Utilization = (funcIndex.HiddenM33(data.networking.wan.netwanTotNumWanLin,data.networking.wan.netwanNumWanLinExe,data.networking.wan.estPerChaNumWanLin)*100);
   return messages.WANLinksExceeding80PercUtilization(parseInt(WANLinksExceeding80Utilization));
   
   
}

const HiddenM34=(data)=>{
    let Cooling = (funcIndex.HiddenM34(data.Facility.facMaxBtuL,data.Facility.facCurBtuL,data.Facility.facNumSerDev,data.Facility.estPerChaNumDevSer)*100);
   return messages.Cooling(parseInt(Cooling));
   
   
}

const HiddenM35=(data)=>{
    let ElectricalCapacity = (funcIndex.HiddenM35(data.Facility.facEstFacPowLim,data.Facility.facPowCon,data.Facility.estPerChaElcCapReq)*100);
   return messages.ElectricalCapacity(parseInt(ElectricalCapacity));
   
   
} 

const HiddenC26=(data)=>{

    if((data.server.memory.serMemfreePer-((data.serveThresholds.NumUserSup*(data.capacity.ChaNumSupUse/100))*(100-data.server.memory.serMemfreePer)/data.serveThresholds.NumUserSup))<=0){
        console.log(4);
        return {message:messagesTable.messageMessage,value1:HiddenM26(data),value2:HiddenM27(data)}
        
    }
    else if((data.server.memory.serMemfreeSwapPer-(data.serveThresholds.NumUserSup*(data.capacity.ChaNumSupUse/100)*(100-data.server.memory.serMemfreeSwapPer)/data.serveThresholds.NumUserSup))<=0){
        console.log(5);
        return {message:messagesTable.baseMessage,value1:HiddenM26(data),value2:HiddenM27(data)}
    }
}

const HiddenC41=(data)=>{
    // console.log(data);
    if(data.capacity.ChaNumSupUse===0){
        console.log(1);
        return {message:messagesTable.baseMessage,value1:HiddenM26(data),value2:HiddenM27(data)}
    }
    else if(data.server.memory.serMemfreePer === 0 && data.server.memory.serMemfreeSwapPer === 0){
        console.log(2);
        return {message:messagesTable.messageMessage,value1:HiddenM26(data),value2:HiddenM27(data)}
    }
    else{
        console.log(3,HiddenC26(data));
        return HiddenC26(data)
    }
    
}

    

export default{

    HiddenC39,
    HiddenC40,
    HiddenC41,
    HiddenM25,
    HiddenM26,
    HiddenM26,
    HiddenM27,
    HiddenM28,
    HiddenM29,
    HiddenN30,
    HiddenM31,
    HiddenM32,
    HiddenM33,
    HiddenM34,
    HiddenM35,

}
