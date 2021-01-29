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
        let kingdomA = element[0];
        let kingdomB = element[2];

        let generalA = uniqueKingdoms[element[0]][element[1]];
        let generalB = uniqueKingdoms[element[2]][element[3]];

        let armyA = uniqueKingdoms[element[0]][element[1]].armyCount;
        let armyB = uniqueKingdoms[element[2]][element[3]].armyCount;

        if (kingdomA === kingdomB) {
            return;

        } else if (armyA > armyB) {
            generalA.armyCount = Math.floor(armyA * 1.1);
            generalB.armyCount = Math.floor(armyB * 0.9);
            generalA.wins += 1;
            generalB.looses += 1;
            return;

        } else {
            generalA.armyCount = Math.floor(armyA * 0.9);
            generalB.armyCount = Math.floor(armyB * 1.1);
            generalA.looses += 1;
            generalB.wins += 1;
            return;
        }

    });
    debugger
    let sortedKingdoms = (Object.entries(uniqueKingdoms)).map(fa => fa);
    console.log(`Winner : ${sortedKingdoms[0]}`)

    sortedKingdoms.sort((a, b) => {
        let [kingdomAname, generalAname] = a;
        let [kingdomBname, generalBname] = b;

        let kingdomAWins = Object.entries(generalAname).map(kA => kA[1].wins).reduce((c, d) => c - d);
        let kingdomBWins = Object.entries(generalBname).map(kB => kB[1].wins).reduce((c, d) => c - d);

        let firstCriteria = kingdomBWins - kingdomAWins;

        if (firstCriteria === 0) {
            let kingdomALosses = [...generalsAMap.entries()].map(kA => kA[1].looses).reduce((c, d) => d - c);
            let kingdomBLosses = [...generalsBMap.entries()].map(kB => kB[1].looses).reduce((c, d) => d - c);

            let secondCriteria = kingdomALosses - kingdomBLosses;
            if (secondCriteria === 0) {

                let thirdCriteria = kingdomAname.localCompare(kingdomBname);
                return thirdCriteria;
            }
            return secondCriteria;
        };


        return firstCriteria

    });

    console.log(sortedKingdoms);

};

main(input, battle);