function solve(input){
    let json = {};
    let sortedKeys = [];

    for (let jsonInput of input){
        let jsonParse = JSON.parse(jsonInput);
        if (json[jsonParse.town] === undefined) {
            json[jsonParse.town] = jsonParse.income;
            sortedKeys.push(jsonParse.town);
        }
        else{
            let currentIncome = jsonParse.income;
            json[jsonParse.town] = json[jsonParse.town] += jsonParse.income;
        }
    }

    sortedKeys.sort();

    for (let key of sortedKeys){
        console.log(`${key} -> ${json[key]}`);
    }
}

/*
let masiv = ['{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}'
]

solve(masiv);*/
