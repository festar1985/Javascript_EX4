const input = [
    "5 7 2 14 4",
  "21 14 2 5 3",
  "3 16 7 42 12",
  "2 20 8 39 14",
  "7 34 1 10 24",
];

const polution = ["breeze 1", "gale 2", "smog 35"];


function main (input){

    let sofiaMap = [];
    let sofiaAction = {};

    for (let i = 0; i < input.length; i++) {
        let element = (input[i].split(' ')).map( elem => +elem);
        sofiaMap.push(element)
    };

    for (const element of polution) {
        let task = element.split(" ");
        sofiaAction[task[0]] = +task[1];
        
    };

    for (const conditions of Object.keys(sofiaAction)) {
        
        if (conditions === "breeze"){
            for (let i = 0; i <= sofiaMap.length-1; i++){
            sofiaMap[sofiaAction.breeze][i] -=15;
            
        }};
        
        if (conditions === "gale"){
            for (let i = 0; i <= sofiaMap.length-1; i++){
                sofiaMap[i][sofiaAction.gale] -=20;

        }};

        if (conditions === "smog"){
            for (let i = 0; i <= sofiaMap.length-1; i++){
                for (let n = 0; n <= sofiaMap[i].length-1; n++){
                    sofiaMap[i][n] += sofiaAction.smog;
        }}};
        
    };

    let result = [];
    

        sofiaMap.forEach((possition, possIndex) => {
            possition.forEach((subPossition, subPossIndex) => {
                if (subPossition >= 50){
                    result.push(`[${possIndex}-${subPossIndex}]`);
                };
            });
        });

    if (result[0] === undefined){
        console.log("No polluted areas");
    }
    else {
    console.log(`Polluted areas: ${result}`);
    };
};

main(input, polution);