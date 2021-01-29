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

function solve (kingdomsArr, battlesArr){
    let kingdomMap = new Map();

    for (const kingdomObj of kingdomsArr) {
       let kingdomName = kingdomObj["kingdom"];
       let generalName = kingdomObj["general"];
       let army = kingdomObj["army"];

       if (!kingdomMap.has(kingdomName)){
           kingdomMap.set(kingdomName, new Map());
       }

       let generalsMap = kingdomMap.get(kingdomName);

       if (!generalsMap.has(generalName)){
           generalsMap.set(generalName, {armyCount: army, wins: 0, looses: 0});
       }else {
           let generalObj = generalsMap.get(generalName);
           generalObj["armyCount"] += army;
           
       };
    };

    for (let row of battlesArr) {
            let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = row;
           
            if (attackingKingdom === defendingKingdom){
            continue;
            };
    
         
            
            let attackingArmy = kingdomMap.get(attackingKingdom).get(attackingGeneral);
            let defendingArmy = kingdomMap.get(defendingKingdom).get(defendingGeneral);

            if (attackingArmy["armyCount"] > defendingArmy["armyCount"]){
            attackingArmy["wins"]++; // direktno ima referenciq kam obekta ni kingdom map
            defendingArmy["looses"]++;

            attackingArmy["armyCount"] = Math.floor(attackingArmy["armyCount"] * 1.1);
            defendingArmy["armyCount"] = Math.floor(defendingArmy["armyCount"] * 0.9);
            }
            if (attackingArmy["armyCount"] < defendingArmy["armyCount"]){
            attackingArmy["looses"]++; // direktno ima referenciq kam obekta ni kingdom map
            defendingArmy["wins"]++;

            attackingArmy["armyCount"] = Math.floor(attackingArmy["armyCount"] * 0.9);
            defendingArmy["armyCount"] = Math.floor(defendingArmy["armyCount"] * 1.1);
       
            };
    };
        
       //sorting
       //general winds desending
       //general looses asending

    let sortedKingdom = [...kingdomMap.entries()]
        .sort(sorted)[0];
    console.log(`Winner : ${sortedKingdom[0]}`)
    
    
    let sortedGenerals = [...sortedKingdom[1].entries()]
    .sort((a,b) => {
        let aCount =a[1]["armyCount"];
        let bCount =b[1]["armyCount"];

        return bCount - aCount
    });

    for (let [generalName, generalObj] of sortedGenerals){
        console.log(`gereral : ${generalName}`)
        console.log(`---army : ${generalObj["armyCount"]}`)
        console.log(`---wins : ${generalObj["armyCount"]}`)
        console.log(`---looses : ${generalObj["armyCount"]}`)
        

    }

    function sorted (a,b) {
        
        let [kingdomAName, generalsAMap] = a;
        let [kingdomBName, generalsBMap] = b;
        
        let kingdomAWins = [...generalsAMap.entries()].map(kA => kA[1].wins).reduce((c,d) => c+d);


        let kingdomBWins = [...generalsBMap.entries()].map(kB => kB[1].wins).reduce((c,d) => c+d);

        let firstCriteria = kingdomBWins - kingdomAWins;

        if (firstCriteria === 0) {
            let kingdomALosses = [...generalsAMap.entries()].map(kA => kA[1].looses).reduce((c,d) => c+d);
            let kingdomBLosses = [...generalsBMap.entries()].map(kB => kB[1].looses).reduce((c,d) => c+d);

            let secondCriteria = kingdomALosses - kingdomBLosses;
                if (secondCriteria ===0) {
                    
                    let thirdCriteria = kingdomAName.localCompare(kingdomBName);
                    return thirdCriteria;
                }
            return secondCriteria;
        };



        return firstCriteria
        
        console.log(kingdomAWins);

    };


       


       
        
    


};

solve(input, battle);