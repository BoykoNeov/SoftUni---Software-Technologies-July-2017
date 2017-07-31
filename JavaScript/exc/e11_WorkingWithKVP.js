function  solve(input) {
    let assArray = {};
    for (let i = 0; i < input.length-1; i++){
        let split = input[i].split(" ");
        assArray[`"${split[0]}"`] = split[1];
    }

    if (assArray[`"${input[input.length-1]}"`] === undefined){
        console.log("None");
    }
    else{
        console.log(assArray[`"${input[input.length-1]}"`]);
    }
}