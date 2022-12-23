import finalobject from "./finalobject";

const Result=(array)=>{
  console.log(array);
  const FData=[];
    array.forEach(data => {
        FData.push(finalobject.FinalObject(data))
});
   return FData
}
export default{
    Result
}