const input =  [
'{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'
];

function main (info) {
    console.log(`<table>`);

    info.forEach(element => {
        let splitElement = JSON.parse(element);

        console.log ("<tr>");

        for (const [key, value] of Object.entries(splitElement)) {
        
            console.log(`<td>${value}</td>`);
            
        };

        console.log ("</tr>");

    });

    console.log(`</table`);
};

main(input);