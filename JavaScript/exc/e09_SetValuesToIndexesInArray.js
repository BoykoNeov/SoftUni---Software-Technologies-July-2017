function solve(input) {
    let n = Number(input[0]);

    let arr = [];

    for (let i = 1; i < input.length; i++){
        let splitted = input[i].split(" - ").filter(x => x);
        arr[Number(splitted[0])] = Number(splitted[1]);
    }

    for (let j = 0; j < n; j++){
        if (arr[j] === undefined){
            arr[j] = 0;
        }
    }

    for (let number of arr){
        console.log(number);
    }
}