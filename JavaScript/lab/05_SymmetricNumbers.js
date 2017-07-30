function solve(input) {
    let limit = Number(input);

    for (let i=1; i <= limit; i++){
        let stringy = i.toString().split('');
        let isSymetric = true;

        for (let j=0; j < stringy.length / 2; j++){
            if (!(stringy[j] === stringy[stringy.length -j - 1])){
                isSymetric = false;
                break;
            }
        }

        if (isSymetric){
            console.log(i + " ");
        }
    }
}

solve(342523534534534534);