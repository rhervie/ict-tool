import calcFunc from "./calcFunc";

const FinalObject=(find)=>{
    let Final={
        _id:find._id,
    country:find.country,
    primary:(calcFunc.HiddenC39(find)),
    archived:(calcFunc.HiddenC40(find)),
    cpu:(calcFunc.HiddenM25(find)),
    memory:(calcFunc.HiddenC41(find)),
    disk:(calcFunc.HiddenM28(find)),
    handsets:(calcFunc.HiddenM29(find)),
    lines:(calcFunc.HiddenN30(find)),
    lANDataCenterSwitchPorts:(calcFunc.HiddenM31(find)),
    lANEndUserOrDeviceSwitchPorts:(calcFunc.HiddenM32(find)),
    wANLinksExceeding80PercUtilization:(calcFunc.HiddenM33(find)),
    cooling:(calcFunc.HiddenM34(find)),
    electricalCapacity:(calcFunc.HiddenM35(find))
    }
    return Final;
}

export default {FinalObject};

