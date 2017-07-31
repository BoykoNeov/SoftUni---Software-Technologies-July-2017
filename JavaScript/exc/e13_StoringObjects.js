function  solve(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        let splitted = input[i].split(" -> ");
        let student = {};
        student.name = splitted[0];
        student.age = splitted[1];
        student.grade = splitted[2];
        arr.push(student);
    }

    for (let stud of arr){
        console.log(`Name: ${stud.name}`);
        console.log(`Age: ${stud.age}`);
        console.log(`Grade: ${stud.grade}`);
    }
}

/*let inputArray = ["Pesho -> 13 -> 6.00" , "Ivan -> 12 -> 5.57" , "Toni -> 13 -> 4.90"];
solve(inputArray);*/
