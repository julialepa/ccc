
/*let count = 0;
document.write("INIZIA LOOP");

while (count <= 10) {
    document.write("current count" + count + "<br />");
    count ++;
}

document.write("loop stoppa!")

console.log(count);


for (let i = 0; i <= 20; i++){
    if (i % 2 === 0) {
        document.write("<h1 style='background-color: black; color: white;'>" + i + "is even" +  "</h1>")
        console.log(i + ' is even');
    }
    else {
        document.write("<h1>" + i + "is odd" +  "</h1>")
        console.log(i + ' is odd');
    }
}

let string = "";
let object = {a: 1, b: 2, c:3};

for (let i in object1) {
    console.log(i)
    string = string + object[i]
}
console.log(string);

console.log(object[0].a) //modo per accedere all'oggetto */


let fruit= [
    "Arancia",
    "Mela",
    "Pera",
    "Fragola",
    "Banana"
]


fruit.forEach((name, index) => {
    switch (name) {
        case "Arancia":
        document.write(index + " " + name + " è arancione <br />");
        break;
        case "Mela":
        document.write(index + " " + name + " è gialla <br />");
        break;
        case "Pera":
        document.write(index + " " + name +  " è verde <br />");
        break;
        case "Fragola":
        document.write(index + " " +  name + " è rossa <br />");
        break;
        default:
        document.write("Spiacenti, non abbiamo più " + name + ".")
    }
    console.log ("Desidera qualcos'altro?")
})




