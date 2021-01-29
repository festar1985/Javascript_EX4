const input = [
    { kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 100 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 }
];

const battle = [
    ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
];


function main(input, battle) {
    let uniqueKingdoms = {};

    for (const line of input) {
        if (!uniqueKingdoms.hasOwnProperty(line.kingdom)) {
            uniqueKingdoms[line.kingdom] = {}
        };

        if (!uniqueKingdoms[line.kingdom].hasOwnProperty(line.general)) {
            uniqueKingdoms[line.kingdom][line.general] = { "armyCount": line.army, "wins": 0, "looses": 0 };
        } else {
            uniqueKingdoms[line.kingdom][line.general].armyCount += line.army;
        };

    };

    battle.forEach(element => {

        let armyA = uniqueKingdoms[element[0]][element[1]].armyCount;
        let armyB = uniqueKingdoms[element[2]][element[3]].armyCount;

        if (uniqueKingdoms[element[0]] === uniqueKingdoms[element[2]]) {
            return;

        } else if (armyA > armyB) {
            uniqueKingdoms[element[0]][element[1]].armyCount = Math.floor(armyA * 1.1);
            uniqueKingdoms[element[2]][element[3]].armyCount = Math.floor(armyB * 0.9);
            uniqueKingdoms[element[0]][element[1]].wins += 1;
            uniqueKingdoms[element[2]][element[3]].looses += 1;

        } else {
            uniqueKingdoms[element[0]][element[1]].armyCount = Math.floor(armyA * 0.9);
            uniqueKingdoms[element[2]][element[3]].armyCount = Math.floor(armyB * 1.1);
            uniqueKingdoms[element[0]][element[1]].looses += 1;
            uniqueKingdoms[element[2]][element[3]].wins += 1;

        }

    });

    let winner = {}
    
    for (const elementkingdon of Object.keys(uniqueKingdoms)) {

        winner[elementkingdon] = { "wins": 0, "looses": 0 };



        for (const elementgeneral of Object.entries(uniqueKingdoms[elementkingdon])) {

            winner[elementkingdon].wins += parseInt(elementgeneral[1].wins);
            winner[elementkingdon].looses += parseInt(elementgeneral[1].looses);
        }




    }
    console.log(winner)
};

main(input, battle);