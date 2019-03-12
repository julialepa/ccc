window.addEventListener('load', async () => {

   /* const promiseEsempio = (errorExemple) => new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ciao, sono la promise')
            if (!errorExemple) {
                resolve({ ciao: 'bello' })
            } else {
                reject('Sono andato in Errore!')
            }

        }, 3000)
    })

    
    try {
        const result = await promiseEsempio()
        console.log('ciao', result)
    } catch (e) {
        console.log('errore', e)
    }


   

    promiseEsempio('errore')
        .then((result) => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    console.log('ciao')*/


function httpGet(url) {
    return new Promise(function (resolve, reject) {
        var httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = function () {
            var data;
            if (httpReq.readyState == 4) {
                if (httpReq.status == 200) {
                    data = JSON.parse(httpReq.responseText);
                    resolve(data);
                } else {
                    reject(new Error(httpReq.statusText));
                }
            }
        };
        httpReq.open("GET", url, true);
        httpReq.send();
    });
}

var myPromise = httpGet("https://jsonplaceholder.typicode.com/todos");

myPromise.then(
    function (utente) {
        console.log("Il server ha restituito l'utente " + utente.nome);
    },
    function (error) {
        console.log("Si è verificato l'errore " + error.message);
    }
);
})
