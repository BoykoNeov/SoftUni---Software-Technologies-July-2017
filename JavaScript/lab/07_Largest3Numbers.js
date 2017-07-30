function solve(input) {
    let result = input.map(Number).sort((a,b) => b - a).slice(0, 3);
    for (number of result){
        console.log(number + " ");
    }
}

/*
 input = [1, 5, -5, -20, 0, 10, 100];
 solve(input);*/
