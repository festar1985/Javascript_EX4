const input = [
    'Banana : 2',
    'Rubics Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
;

function main (item){
    let catalog = {};
 
    item.sort();

    for (const line of item) {

        let products = line.split(" : ");
    
        catalog[products[0]] = +products[1];

    }


    let headoutput = "abc";
  for (const [key, values] of Object.entries(catalog)) {
    let head = key.charAt(0);
    

    if (head !== headoutput) {
        headoutput = head;
        console.log(headoutput);
        console.log(` ${key}: ${values}`);
    }
    else {
        console.log(` ${key}: ${values}`);
    }
      
  }

};

main(input);
