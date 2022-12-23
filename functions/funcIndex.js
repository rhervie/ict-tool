const HiddenF23=(SAd8,SEc8,SEc9)=> (SAd8*(SEc8+SEc9)/100);
const HiddenF24=(SAd11,SEc11)=> (SAd11*(SEc11)/100);
const HiddenF25=(SAf14,SEe10)=>((SAf14)*((SEe10)/100));
const HiddenF26=(SAd31,SEc13)=> (SAd31*(SEc13)/100);
const HiddenF27=(SAd33,SEc14)=> (SAd33*(SEc14)/100);
const HiddenF28=(SAd36,SEc16)=> (SAd36*(SEc16)/100);
const HiddenF29=(SAd39,SAd40)=> (SAd39/SAd40);
const HiddenF30=(SAd40,SEc18)=> (SAd40*(SEc18)/100);
const HiddenF31=(SAd42,SEc19)=> (SAd42*(SEc19)/100);


const HiddenJ26=(SAd18,SAf14)=>(SAd18/SAf14);
const HiddenJ23=(SAd15,SAf14)=>(SAd15/SAf14);
const HiddenJ24=(SAd16,SAf14)=>(SAd16/SAf14);
const HiddenJ25=(SAd17,SAf14)=>(SAd17/SAf14);
const HiddenJ27=(SAd20,SAf14)=>((100-SAd20)/SAf14);
const HiddenJ28=(SAd21,SAf14)=>((100-SAd21)/SAf14);
const HiddenJ29=(SAd24,SAf14)=>(SAd24/SAf14);


const HiddenM23=(SAd8,SAd9,SEc8,SEc9)=> (HiddenF23(SAd8,SEc8,SEc9)+SAd8)/(SAd8+SAd9);
const HiddenM24=(SAd11,SAd12,SEc11)=>(HiddenF24(SAd11,SEc11)+SAd11)/(SAd11+SAd12);
const HiddenM25=(SAd15,SAd16,SAd17,SAd18,SEe10,SAf14)=>{
    if(SAd15 === 0 && SAd16 === 0 && SAd17 ===0){
       return SAd18+((SEe10/100)*SAf14*HiddenJ26(SAd18,SAf14));
    }else{
        return (SAd15+SAd16+SAd17+
            ((SEe10/100)*HiddenJ23(SAd15,SAf14)*SAf14)+
            ((SEe10/100)*HiddenJ24(SAd16,SAf14)*SAf14)+
            ((SEe10/100)*HiddenJ25(SAd17,SAf14)*SAf14))
    }
}
const HiddenM26=(SAd20,SEe10,SAf14)=>((100-SAd20)+((SEe10/100)*SAf14*HiddenJ27(SAd20,SAf14)));
const HiddenM27=(SAd21,SEe10,SAf14)=>((100-SAd21)+((SEe10/100)*SAf14*HiddenJ28(SAd21,SAf14)));
const HiddenM28=(SAd24,SEe10,SAf14)=>(SAd24)+((SEe10/100)*SAf14*HiddenJ29(SAd24,SAf14));

const HiddenM29=(SAd26,SAd27,SEe10,SAf14)=>(SAd27+HiddenF25(SAf14,SEe10))/SAd26
const HiddenM30=(SAf14,SAd28,SEe10,)=>((SAf14+HiddenF25(SAf14,SEe10))/SAd28)
const HiddenM31=(SAd30,SAd31,SEc13)=>((SAd31+HiddenF26(SAd31,SEc13))/SAd30);
const HiddenM32=(SAd32,SAd33,SEc14)=>((SAd33+HiddenF27(SAd33,SEc14))/SAd32);
const HiddenM33=(SAd35,SAd36,SEc16)=>((SAd36+HiddenF28(SAd36,SEc16))/SAd35);
const HiddenM34=(SAd38,SAd39,SAd40,SEc18)=>((HiddenF30(SAd40,SEc18)*HiddenF29(SAd39,SAd40))+SAd39)/SAd38;
const HiddenM35=(SAd41,SAd42,SEc19)=>(SAd42+HiddenF31(SAd42,SEc19))/SAd41;




export default {
    HiddenM23,
    HiddenM24,
    HiddenM25,
    HiddenM26,
    HiddenM27,
    HiddenM28,
    HiddenM29,
    HiddenM30,
    HiddenM31,
    HiddenM32,
    HiddenM33,
    HiddenM34,
    HiddenM35,

}




