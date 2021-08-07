let length= 15 
function FeetToInch(feet)
{
    let inch=feet*12;
    return inch;
}
function centimeterToMeter (Cm)
{
    let Meter=Cm*0.01;
    return Meter;
}

let ConvertFtoI=FeetToInch(length);
console.log('The Length of Feet to Inch is '+' '+ ConvertFtoI);

let ConvertcmToM=centimeterToMeter(length);
console.log('The Length of Cm to M is '+' '+ ConvertcmToM);