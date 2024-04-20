const divideNumbers = (numerator, denominator)=> {
    return new Promise((resolve, reject) =>{
        if(denominator === 0){
            reject("Division by 0 is not allowed.");
        }else{
            resolve(numerator/denominator);
        }
    } )
}   

const dummyCases = [
    [10, 2],
    [5,5],
    [8,0],
    [20,4],
    [100, 5]
];

dummyCases.forEach(([numerator, denominator]) =>{
    divideNumbers(numerator, denominator).then((result) => {
        console.log(`Dividing ${numerator} by ${denominator}`);
        console.log(result);
    }).catch((error) => {
        console.log(`Dividing ${numerator} by ${denominator}`);
        console.log(error);
    })
})