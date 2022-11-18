import connectDB from "../../../utils/connectDB";
import Facility from "../../../models/facility";
import _ from 'lodash';

export default async function facilityHeader(req,res) {
    const method = req.method;
    console.log("Connecting Mongo DB");
    await connectDB();
    console.log("Cloud DB Connected");
    // CURD
    if (method=='GET') {
        await Facility.find().
         then(getFacility=>{
            res.json(getFacility)
         }).catch (e=>{
            res.json(e)
         });
    }else if (method=='POST'){
     const facility = new Facility (req.body)
     await facility.save((err)=>{
        if(!err) {
            res.status(201).json(facility)
        } else{
            res.send(err.message)
        }
     });
    }
}
