import calcFunc from "./calcFunc";

const Result=(array)=>{
  console.log(array);
  const FData=[];
    array.forEach(data => {
        let Final={
    country:data.country,
    primary:(calcFunc.HiddenC39(data)),
    archived:(calcFunc.HiddenC40(data)),
    cpu:(calcFunc.HiddenM25(data)),
    memory:(calcFunc.HiddenC41(data)),
    disk:(calcFunc.HiddenM28(data)),
    handsets:(calcFunc.HiddenM29(data)),
    lines:(calcFunc.HiddenN30(data)),
    lANDataCenterSwitchPorts:(calcFunc.HiddenM31(data)),
    lANEndUserOrDeviceSwitchPorts:(calcFunc.HiddenM32(data)),
    wANLinksExceeding80PercUtilization:(calcFunc.HiddenM33(data)),
    cooling:(calcFunc.HiddenM34(data)),
    electricalCapacity:(calcFunc.HiddenM35(data))
}
FData.push(Final)
    });



    
   return FData
}
export default{
    Result
}