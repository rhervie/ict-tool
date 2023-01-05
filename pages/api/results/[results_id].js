import Server from "../../../models/server";
import connectDB from "../../../utils/connectDB";
import finalobject from "../../../functions/finalobject";

export default async function subjectHeader(req,res) {
    const {results_id} =  req.query;
    console.log("in");
    const method = req.method;
    console.log("Connecting Mongo DB");
    await connectDB();
    console.log("Cloud DB Connected");
  if (method=='GET') {
    Server.findById(results_id,(err,find)=>{
        if(!err){
            res.send(finalobject.FinalObject(find))
        }
    })
  } 

}