import connectDB from "../../utils/connectDB";
import Server from "../../models/server";
import getResults from "../../functions/getResults";

export default async function funcHeader(req,res) {
    const method = req.method;
    console.log("Connecting Mongo DB");
     connectDB();
    console.log("Cloud DB Connected");
  
    if(method==="GET"){
        Server.find((err,find)=>{
            let data= find[find.length-2]     
            res.send(getResults.Result(find))
        })
    }
    

};