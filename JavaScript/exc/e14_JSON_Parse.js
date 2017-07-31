function  solve(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        let student = JSON.parse(input[i]);
        arr.push(student);
    }

    for (let stud of arr){
        console.log(`Name: ${stud.name}`);
        console.log(`Age: ${stud.age}`);
        console.log(`Date: ${stud.date}`);
    }
}

/*let inputArray = ["Pesho -> 13 -> 6.00" , "Ivan -> 12 -> 5.57" , "Toni -> 13 -> 4.90"];
 solve(inputArray);*/
