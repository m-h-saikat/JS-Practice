let BookNeed=[3,1,2];

let PageNeed=[100,200,300];

function paperRequirements(FirstBook,SecondBook,ThirdBook)
{
    let PageNeed=[100,200,300];
    let FirstTotal=FirstBook*PageNeed[0];
    let SecondTotal=SecondBook*PageNeed[1];
    let ThirdTotal=ThirdBook*PageNeed[2];

    let TotalPage=FirstTotal+SecondTotal+ThirdTotal;
    return TotalPage;
}

let TotalPaperNeed=paperRequirements(BookNeed[0],BookNeed[1],BookNeed[2]);
console.log('The Total Page Need to Print' +' '+TotalPaperNeed);