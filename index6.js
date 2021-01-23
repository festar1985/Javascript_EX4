let input =[
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']

function main (item){

    let catalogue = new Set();

    item.forEach(name => catalogue.add(name));
        
    let sortedNames = Array.from(catalogue).sort((a,b) => (a.length - b.length) || (a.localeCompare(b)));

    console.log(sortedNames.join("\n"));
};

main(input);