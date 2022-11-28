import { Schema, model, models } from "mongoose";
const serverSchema = new Schema({
    country: {
        nation: {
            type: String,
            require: true,
            trim: true,
        },
        region: {
            type: String,
            require: false,
            trim: true,
        },
        district: {
            type: String,
            require: false,
            trim: true,
        },
        facility: {
            type: String,
            require: false,
            trim: true,
        },
    },
    server: {
        storage: {
            serPriStoGigUse: {
                type: Number,
                require: true,
                trim: true,
            },
                
                serPriStoGigFree:   {
                    type:Number,
                    require:true,
                    trim: true,
                }, 
                  estPerChaInStuDat:{
                    type:Number,
                    require:true,
                     trim: true,
                     min:0,
                     max:100,
                  },
                  estPerChaInUStDat:{
                    type:Number,
                    require:true,
                     trim: true,
                     min:0,
                     max:100,
                  },
                serArcStoGigUse:  {
                    type:Number,
                    require:true,
                     trim: true,
                },   
                serArcStoGigFree : {
                    type: Number,
                    require:true,
                     trim: true,
        },
                 expPerChaInArcSto:{
                        type:Number,
                        require:true,
                         trim: true,
                         min:0,
                         max:100,
                      }, 
    } ,
    cpu:{
    serCpuPerUserAct : {
    type:Number,
    trim:true,
    require : true,
    min:0,
    max:100,
    },
    serCpuPerSysAct : {
        type: Number,
        require:true,
         trim: true,
         min:0,
         max:100,
    },
    serCpuDevWIO : {
        type: Number,
        require:true,
         trim: true,
         min:0,
         max:100,
    },
    serCpuTot : {
        type: Number,
        require:false,
         trim: true,
         min:0,
         max:100,
    },
    },
    memory: {
        serMemfreePer : {
            type: Number,
            require:true,
             trim: true,
             min:0,
             max:100,
        },
          serMemfreeSwapPer : {
            type: Number,
            require:true,
             trim: true,
             min:0,
             max:100,
        },
    },
    disk: {
        serDisTolSiz : {
            type: Number,
            require:true,
             trim: true,
         },
           serDisUse : {
            type: Number,
            require:true,
             trim: true,
             min:0,
             max:100,
         },
    } 
},

    networking: {
        lan: {
            netLanTotNumDatCenSwiPor: {
                type: Number,
                require: true,
                trim: true,
            },
            expPerChaNumSwiPor: {
                type: Number,
                require: true,
                trim: true,
                min: 0,
                max: 100,
            },
            expPerChaNumSEdgDevSwiPor: {
                type: Number,
                require: true,
                trim: true,
                min: 0,
                max: 100,
            },
            netLanNumDatCenSwiPorUse: {
                type: Number,
                require: true,
                trim: true,
            },
            netLanTotNumEdgDevSwiPor: {
                type: Number,
                require: true,
                trim: true,
            },
            netLanNumEdgDevSwiPorUse: {
                type: Number,
                require: true,
                trim: true,
            },
        },
        wan: {
            netwanTotNumWanLin: {
                type: Number,
                require: true,
                trim: true,
            },
            netwanNumWanLinExe: {
                type: Number,
                require: false,
                trim: true,
            },
            estPerChaNumWanLin: {
                type: Number,
                require: true,
                trim: true,
                min: 0,
                max: 100,
            },
        }
    },
    telephony: {
        telTotNumHanSet: {
            type: Number,
                require:true,
                 trim: true,   
    },
    telNumHanSetUse :{
        type: Number,
            require:true,
             trim: true, 
    },
    telNumPstLin :{
        type: Number,
            require:true,
             trim: true, 
    }
   },
   Facility: {
    facMaxBtuL:{
        type: Number,
            require:true,
             trim: true,
    },
    facCurBtuL:{
        type: Number,
        require:true,
         trim: true,
    },
    facNumSerDev:{
        type: Number,
            require:true,
             trim: true,
    },
    facEstFacPowLim:{
        type: Number,
            require:true,
             trim: true,
    },
    facPowCon:{
        type: Number,
            require:true,
             trim: true,
    },
     estPerChaNumDevSer: {
        type:Number,
            require:true,
             trim: true,
             min:0,
             max:100,
     },
     estPerChaElcCapReq: {
        type:Number,
            require:true,
             trim: true,
             min:0,
             max:100,
     }
   },
   serveThresholds: {
       PriStoMaxCapUse:{
        type: Number,
            require:true,
             trim: true,
             min:0,
             max:100,
       },
       ArcStoMaxCapUse:{
        type: Number,
            require:true,
             trim: true,
             min:0,
             max:100,
       },
       NumUserSup:{
        type: Number,
            require:true,
             trim: true,
       },
       NumOfServers:{
        type: Number,
            require:true,
             trim: true,
       },
       NumRemBacSer:{
        type: Number,
            require:true,
             trim: true,
       }
   },
   capacity: {
    proTimYea:{ 
            type:Number,
                require:true,
                 trim: true,
    },
    ChaNumSupUse:{ 
        type:Number,
            require:true,
             trim: true,
             min:0,
             max:100,
}
   },
   location: {
    //  type: String,
    // coordinates: []
    latitude:Number,
    longitude:Number
   },
    
})
 serverSchema.index({ location: "Point" });

const Server = models.Server || model('Server', serverSchema);
export default Server;