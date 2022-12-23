import connectDB from "../../../utils/connectDB";
import Server from "../../../models/server";
import _ from 'lodash';
export default async function subjectHeader(req,res) {
    const method = req.method;
    console.log("Connecting Mongo DB");
    await connectDB();
    console.log("Cloud DB Connected");
    // CURD
    if (method=='GET') {
       try {
         await Server.find().
         then(getServers=>{
            res.status(200).json({data:getServers})
         }).catch (e=>{
            res.json(e)
         })
        
       } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server error"
        })
       }
    }else if (method=='POST'){
     const server = new Server (req.body)
     await server.save((err)=>{
      
        if(!err) {
            res.status(201).json(server)
        } else{
            console.log(err.message)
            res.status(406).send(err.message)
        }
        
     })
    }
}
