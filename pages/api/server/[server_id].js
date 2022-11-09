import Server from "../../../models/server";
import connectDB from "../../../utils/connectDB";
export default async function subjectHeader(req,res) {
    const {server_id} =  req.query;
    const method = req.method;
    console.log("Connecting Mongo DB");
    await connectDB();
    console.log("Cloud DB Connected");
  if (method=='GET') {
    await Server.findById(server_id).
    then(foundserverid=>{
        if(foundserverid){
            res.json(foundserverid)
        }else {
            res.status(404).send({message:server_id+" Not found"})
        }
    }).catch(e=>{
        res.status(404).send({message:server_id+" Not found"})
    })
  } else if 
      (method=='PUT') {
      Server.findByIdAndUpdate(server_id,req.body,(err,find)=>{
        if (!err) {
            Server.findById(server_id,(err,found)=>{
                if(!err){
                    if(found) {
                     res.status(201).json(found)
                    }else{
                        res.send("Record Does Not Exist")
                       }
                } else {
                    res.json(err.message);
                }
            })
        } else {
            res.json(err.message);
        }
      })
  } else if(method=="DELETE"){
    Server.findByIdAndDelete(server_id,(err,found)=>{
        if(!err){
            if(found) {
                res.status(201).json(found)
               }else{
                res.send("Record Does Not Exist")
               }
               
        } else {
            res.json(err.message);
        }
    })
  }

}