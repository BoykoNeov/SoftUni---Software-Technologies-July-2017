function  solve(input) {
    let assArray = {};
    for (let i = 0; i < input.length-1; i++){
        let split = input[i].split(" ");

        if (assArray[`"${split[0]}"`] === undefined){
            assArray[`"${split[0]}"`] = new Array();
        }
        assArray[`"${split[0]}"`].push(split[1]);
    }

    if (assArray[`"${input[input.length-1]}"`] === undefined){
        console.log("None");
    }
    else{
        console.log(assArray[`"${input[input.length-1]}"`].join("\r\n"));
    }
}

/*
 let inputArray =["key value" , "key eulav" , "test tset" , "key"];
 solve (inputArray);*/
