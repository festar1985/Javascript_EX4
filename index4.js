const input = [
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'];

    

function main (input) {
    let cars = {};

    for (const car of input) {
        let converterInput = car.split(" | ");

        let brand = converterInput[0];
        let model = converterInput[1];
        let numberCars = +converterInput[2];

        if (!cars[brand]){
            cars[brand]={};
            cars[brand][model] = numberCars;
        }
        else if(!cars[brand][model]){
            cars[brand][model] = numberCars;
        } 
        else {
            cars[brand][model] += numberCars;
        } 
        
    }
    for (const [brand,values] of Object.entries(cars)) {
        console.log(brand);
            for(const [model,numbers] of Object.entries(values)) {
                console.log(`###${model} -> ${numbers}`);
            }
        
    };
};

main(input);
