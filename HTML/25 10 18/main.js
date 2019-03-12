$(document).ready(function () {
    $.ajax({
        url: "http://api.chucknorris.io/jokes/random",
        method: "GET",
        dataType: "json",
    }).done(function (data) { //stampa dati
        console.log(data);
        var les= data //mi servirà per stampare cicli (title id)
        $('body').append("<p>" + data.value + "</p>" + "<img src='" + data.icon_url + "'/>" )
    });
});

/*$("#my-button").on("click", function (event) {
    let elm = $(this);
    elm.toggleClass("greenColour");
});

function test(value){
    alert(value);
}

$('body')
$('body').append("<a onclick='test(\"test\")'>ciao</a>")



$('body').on("click", function test(value){
    alert(value)
});

$('body').append("<a onclick='test'(\"test\")>bibi</a>");



let myobj = {
    bar: "Hello",
    baz: [{ "quzz": "nerf" }, { "pippo": "baudo" }]
}

console.log(myobj.baz[0].quzz)
console.log(myobj.baz[1].pippo)*/