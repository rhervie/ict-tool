const serverSchema = new Schema({
    // country: {
    //     nation: '',
    //     region: '',
    //     district: '',
    //     facility: '',
    // },
    server: {
        storage: {
            serPriStoGigUse: '',
            serPriStoGigFree: '',
            estPerChaInStuDat: '',
            estPerChaInUStDat: '',
            serArcStoGigUse: '',
            serArcStoGigFree: '',
            expPerChaInArcSto: '',
        },
        cpu: {
            serCpuPerUserAct: '',
            serCpuPerSysAct: '',
            serCpuDevWIO: '',
            serCpuTot: '',
        },
        memory: {
            serMemfreePer: '',
            serMemfreeSwapPer: '',
        },
        disk: {
            serDisTolSiz: '',
            serDisUse: '',
        }
    },

    networking: {
        lan: {
            netLanTotNumDatCenSwiPor: '',
            expPerChaNumSwiPor: '',
            expPerChaNumSEdgDevSwiPor: '',
            netLanNumDatCenSwiPorUse: '',
            netLanTotNumEdgDevSwiPor: '',
            netLanNumEdgDevSwiPorUse: '',
        },
        wan: {
            netwanTotNumWanLin: '',
            netwanNumWanLinExe: '',
            estPerChaNumWanLin: '',
        }
    },
    telephony: {
        telTotNumHanSet: '',
        telNumHanSetUse: '',
        telNumPstLin: ''
    },
    Facility: {
        facMaxBtuL: '',
        facCurBtuL: '',
        facNumSerDev: '',
        facEstFacPowLim: '',
        facPowCon: '',
        estPerChaNumDevSer: '',
        estPerChaElcCapReq: ''
    },
    serveThresholds: {
        PriStoMaxCapUse: '',
        ArcStoMaxCapUse: '',
        NumUserSup: '',
        NumOfServers: '',
        NumRemBacSer: ''
    },
    capacity: {
        proTimYea: '',
        ChaNumSupUse: ''
    },
    location: {
        coordinates: []
    },

})