function solve (input){
    let arr = [];

    for (let i = 0; i < input.length; i++){
        let splitted = input[i].split(" ");
        if (splitted[0] === "add"){
            arr.push(splitted[1]);
        }
        else if (splitted[0] === "remove"){
            let index = Number(splitted[1]);
            if (arr[index] !== undefined){
                arr.splice(index, 1);
            }
        }
    }

    console.log(arr.join("\r\n"));
}