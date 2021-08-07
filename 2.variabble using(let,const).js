let myNumber=01961264463;  // should allow to change the values
const myName='Mehedi Hasan Saikat';  //should not allow to change the values

if(myNumber==01961264463)
{
    myNumber=01517833746;
    console.log(myNumber);
}


//Successfully Change this Variable
/* 
           ------------------------it show error Because const should not allow to change the values------

if (myName=='Mehedi Hasan Saikat')
{
    myName='Saikat';
    conssole.log(myName);
}
 */