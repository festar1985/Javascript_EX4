const input = [3124.15, 504.212, 2511.124];

function main (input) {

function strip(number) {
    number = number.toFixed(2);
        return +number;
    }

const goldEx = 67.51;
const bitcoinEx = 11949.16;

let gold = 0
let bgn = 0;
let bitcoin = 0;
let day = 0;
let firstBCday = 0;

for (const element of input) {
    day+=1;
    gold = (+element);
    if (day===3){
        gold = (gold*0.7);
    }
    let temp = (gold*goldEx);
    bgn = bgn + temp;

    bgn = strip(bgn);


    if ((bgn >= bitcoinEx) && (firstBCday === 0)) {
        bitcoin += Math.floor((bgn/bitcoinEx));
        bgn = bgn % bitcoinEx;
        firstBCday = input.indexOf(element)+1;
    }
    else if ((bgn >= bitcoinEx)) {
        bitcoin += Math.floor((bgn/bitcoinEx));
        bgn = bgn % bitcoinEx;
        bgn = strip(bgn)
    }
    
}

console.log (`Bought bitcoins: ${bitcoin}`);
if (bitcoin >= 1){
console.log (`Day of the first purchased bitcoin: ${firstBCday}`);
}
console.log(`Left money: ${bgn}`)
};

main(input);