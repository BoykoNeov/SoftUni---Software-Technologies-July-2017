function  solve(input) {
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        let splitted = input[i].split(" -> ");
        splitted[1] = TryParseInt(splitted[1], splitted[1]);
        obj[splitted[0]] = splitted[1];
    }
    let JSONstudent = JSON.stringify(obj);
    console.log(JSONstudent);

    function TryParseInt(str,defaultValue) {
        var retValue = defaultValue;
        if(str !== null) {
            if(str.length > 0) {
                if (!isNaN(str)) {
                    retValue = parseInt(str);
                }
            }
        }
        return retValue;
    }
}

/*
 let inputArr = ["name -> Angel" , "surname -> Georgiev", "age -> 20", "grade -> 6.00", "date -> 23/05/1995", "town -> Sofia"];
 solve(inputArr);*/
