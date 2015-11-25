function testSet()
{
    var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
    var uniq = Array.from(new Set(names));

    console.log(names);
    console.log(uniq);
}


testSet();