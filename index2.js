const input = [
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'];

function main (info) {
    let quantities = {};
    let bottles= {};
    

    info.forEach((element) => {
    let splitElement = element.split(" => ")
    
    let fruit = splitElement[0];

    let grams = +splitElement[1];
        if (!quantities.hasOwnProperty(fruit)){
            quantities[fruit] = 0;
        }
        quantities[fruit] += grams;

        if (quantities[fruit] >= 1000 ) {
            bottles[fruit] = parseInt(quantities[fruit] / 1000);
        }
    });
  console.log(bottles);

};

main(input);



