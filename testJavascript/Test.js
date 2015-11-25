function testSet()
{
    var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
    var uniq = Array.from(new Set(names));

    console.log(names);
    console.log(uniq);
}


function testFilterAndMap()
{
    var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

    var namesStartingWithM = names
        .filter(function (name) {
            return name.startsWith('M') ? name : null;
        })
        .map(function (name) {
            return name + ' mapped';
        });
    console.log(namesStartingWithM);
}


testSet();
testFilterAndMap();