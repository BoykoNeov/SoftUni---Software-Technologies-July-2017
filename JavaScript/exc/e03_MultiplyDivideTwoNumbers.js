function solve(input){
    let N = Number(input[0]);
    let X = Number(input[1]);

    let result;
    if (N <= X) {
        result = N * X;
    }
    else{
        result = N / X;
    }

    console.log(result);
}